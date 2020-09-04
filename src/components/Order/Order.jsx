import React, { useState, useEffect } from "react";
import { getDatabaseCart } from "../../utilities/databaseManager";
import fakeData from "../../fakeData/index";

const Order = () => {
  // console.log("cart");
  // console.log(fakeData);
  const [cart, setCart] = useState([]);
  // let cart = [];
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
      setCart(cartProducts);
    }
  }, []);
  // const [cart, setCart] = useState([]);
  console.log("cart");
  console.log(cart);

  // showing cart products that are in the cart
  // let cart;
  // if (cartProducts !== undefined && cartProducts.length > 0) {
  //   cart = cartProducts.map((product) => (
  //     <Product key={product.key} product={product}></Product>
  //   ));
  // }
  return (
    <>
      <div>Cart</div>
      <div>product added to cart:{cart.length}</div>
      <div></div>
      <br />
    </>
  );
};

export default Order;
