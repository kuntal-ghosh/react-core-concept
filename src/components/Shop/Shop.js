import React, { Fragment, useState } from "react";
import fakeData from "../../fakeData/index";
import Product from "./Product/Product";
import Styles from "./Shop.module.scss";

const Shop = () => {
  //   let data = fakeData;
  console.log(fakeData);
  let first10 = fakeData.slice(0, 10);
  const [firstTenProducts, setFirstTenProducts] = useState(first10);
  const [cartProducts, setCartProducts] = useState([]);
  function handleButton(product) {
    console.log(product);
    const newCart = [...cartProducts, product];
    setCartProducts(newCart);
    console.log(cartProducts);
  }
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
              product={product}
              handleButton={handleButton}
            ></Product>
          ))}
        </div>
        <div className={Styles.shop_container_right}>{cart}</div>
      </div>
    </Fragment>
  );
};

export default Shop;
