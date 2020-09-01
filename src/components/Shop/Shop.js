import React, { Fragment, useState } from "react";
import fakeData from "../../fakeData/index";
import Product from "./Product/Product";
import Styles from "./Shop.module.scss";
import Cart from "./Cart/Cart";

const Shop = () => {
  //   let data = fakeData;
  console.log(fakeData);
  let first10 = fakeData.slice(0, 10);
  const [firstTenProducts, setFirstTenProducts] = useState(first10);

  const [cartProducts, setCartProducts] = useState([]);

  // showing cart products that are in the cart
  let cart;
  if (cartProducts !== undefined && cartProducts.length > 0) {
    cart = cartProducts.map((product) => (
      <Product key={product.key} product={product}></Product>
    ));
  }

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
          <Cart cart={cart}></Cart>
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
    console.log(product);
    const newCart = [...cartProducts, product];
    let products = [...firstTenProducts];
    setCartProducts(newCart);

    products.forEach((eachProduct) => {
      if (eachProduct.key === product.key) {
        if (eachProduct.stock > 0){
          eachProduct.stock--;
        } 
      }
    });
    setFirstTenProducts(products);
    console.log(cartProducts);
  }
};

export default Shop;
