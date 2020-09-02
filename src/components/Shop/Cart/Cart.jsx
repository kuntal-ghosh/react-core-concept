import React from "react";
import { Button } from "react-bootstrap";

const Cart = (props) => {
  let cart = [];
  if (props.cart !== undefined) {
    cart = props.cart;
  }
  return (
    <>
      <div>Cart</div>
      <div>product added to cart:{cart.length}</div>
      <div></div>
      <br />
      <Button>Review</Button>
    </>
  );
};

export default Cart;
