import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import Product from "../Product/Product";
import { Route, Link } from "react-router-dom";
import { getDatabaseCart } from "../../../utilities/databaseManager";
import fakeData from "../../../fakeData/index";

const Cart = (props) => {
  // console.log("cart");
  // console.log(fakeData);
  // const [cart, setCart] = useState([]);
  let cart = [];

  // const [cart, setCart] = useState([]);
  console.log("cart");
  console.log(cart);
  if (props.cart !== undefined) {
    cart = props.cart;
    // setCart(props.cart);
  }

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
      <Link to="/order">
        <Button>Review</Button>
      </Link>
    </>
  );
};

export default Cart;
