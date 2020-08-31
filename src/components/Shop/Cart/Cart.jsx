import React from "react";

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
    </>
  );
};

export default Cart;
