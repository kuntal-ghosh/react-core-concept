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

  if (props.cart !== undefined) {
    cart = props.cart;
    // setCart(props.cart);
  }
  console.log("cart order");
  console.log(cart);
  let totalProducts = cart.reduce((sum, product) => sum + product.quantity, 0);

  let price = cart.reduce(
    (sum, product) => sum + product.price * product.quantity,
    0
  );
  console.log(price);

  let shippingCost = cart.reduce((sum, product) => sum + product.shipping, 0);

  let totalBeforeTax = price + shippingCost;

  let tax = (totalBeforeTax * 5) / 100;

  let totalPrice = totalBeforeTax + tax;
  // showing cart products that are in the cart
  // let cart;
  // if (cartProducts !== undefined && cartProducts.length > 0) {
  //   cart = cartProducts.map((product) => (
  //     <Product key={product.key} product={product}></Product>
  //   ));
  // }
  return (
    <>
      <div>
        <h5>Order Summary</h5>
      </div>
      <div>
        <h6>Items ordered : {totalProducts || 0}</h6>
      </div>
      <div>Items: ${price.toFixed(2) || 0}</div>
      <div>Shipping Cost: ${shippingCost.toFixed(2) || 0}</div>
      <div>Before Tax: ${totalBeforeTax.toFixed(2) || 0}</div>
      <div>Tax: ${tax.toFixed(2) || 0}</div>
      <div>Total Price: ${totalPrice.toFixed(2) || 0}</div>
      <br />
      <Link to="/order">
        <Button>Review</Button>
      </Link>
    </>
  );
};

export default Cart;
