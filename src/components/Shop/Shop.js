import React, { Fragment, useState, useEffect } from "react";
import fakeData from "../../fakeData/index";
import Product from "./Product/Product";
import Styles from "./Shop.module.scss";
import Cart from "./Cart/Cart";
import { addToDatabaseCart } from "../../utilities/databaseManager";
import { getDatabaseCart } from "../../utilities/databaseManager";

const Shop = () => {
  let data = fakeData;

  console.log(fakeData);
  let first10 = fakeData.slice(0, 10);
  const [firstTenProducts, setFirstTenProducts] = useState(first10);

  const [cartProducts, setCartProducts] = useState([]);

  useEffect(() => {
    const savedCart = getDatabaseCart();
    // console.log(savedCart);
    let productKeys = Object.keys(savedCart);
    console.log("productKeys");
    console.log(productKeys);
    const cartProducts = productKeys.map((key) => {
      const product = fakeData.find((pd) => pd.key === key);
      product.quantity = savedCart[key];
      return product;
      // console.log("product");
      // console.log(product);
    });
    if (cartProducts !== undefined) {
    }
    setCartProducts(cartProducts);
  }, []);
  // showing cart products that are in the cart
  // let cart;
  // if (cartProducts !== undefined && cartProducts.length > 0) {
  //   cart = cartProducts.map((product) => (
  //     <Product key={product.key} product={product}></Product>
  //   ));
  // }

  return (
    <Fragment>
      <div className={Styles.shop_container}>
        <div className={Styles.shop_container_left}></div>
        <div className={Styles.shop_container_center}>
          {firstTenProducts.map((product) => (
            <Product
              key={product.key}
              showAddToCartButton={true}
              product={product}
              handleButton={handleButton}
            ></Product>
          ))}
        </div>
        <div className={Styles.shop_container_right}>
          <Cart cart={cartProducts}></Cart>
        </div>
      </div>
    </Fragment>
  );

  /**
   *this function adds an item ti the cart
   *
   * @param {product} product
   */
  function handleButton(product) {
    // console.log(product);
    // finding same product in the cart
    let sameProduct = cartProducts.find((p) => p.key === product.key);
    let count = 1;
    if (sameProduct) {
      // if same product is found in the cart,then
      count = sameProduct.quantity + 1;
      product.quantity = count;
      let cart = cartProducts.filter((p) => p.key !== product.key);
      let newCart = [...cart, product];
      setCartProducts(newCart);
    } else {
      // if the product is not in the cart
      product.quantity = count;
      const newCart = [...cartProducts, product];
      setCartProducts(newCart);
    }

    let products = [...firstTenProducts];
    // const count = newCart.filter((p) => p.key === product.key);
    addToDatabaseCart(product.key, count);

    products.forEach((eachProduct) => {
      if (eachProduct.key === product.key) {
        if (eachProduct.stock > 0) {
          eachProduct.stock--;
        }
      }
    });
    setFirstTenProducts(products);
    // console.log(cartProducts);
  }
};

export default Shop;
