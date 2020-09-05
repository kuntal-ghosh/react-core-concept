import React, { useState, useEffect } from "react";
import { getDatabaseCart } from "../../utilities/databaseManager";
import fakeData from "../../fakeData/index";
import Cart from "../Shop/Cart/Cart";
import style from "./Order.module.scss";
// import cx from "ClassName";
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

  let totalProducts = cart.reduce((sum, product) => sum + product.quantity, 0);

  let price = cart.reduce(
    (sum, product) => sum + product.price * product.quantity,
    0
  );
  let shippingCost = cart.reduce((sum, product) => sum + product.shipping, 0);

  let totalBeforeTax = price + shippingCost;

  let tax = (totalBeforeTax * 5) / 100;

  let totalPrice = totalBeforeTax + tax;

  console.log("price");
  console.log(price);
  // const [cart, setCart] = useState([]);
  console.log("cart");
  console.log(cart);
  console.log("totalProducts");
  console.log(totalProducts);

  // showing cart products that are in the cart
  // let cart;
  // if (cartProducts !== undefined && cartProducts.length > 0) {
  //   cart = cartProducts.map((product) => (
  //     <Product key={product.key} product={product}></Product>
  //   ));
  // }
  return (
    <>
      {
        /* <div>
        <h5>Order Summary</h5>
      </div>
      <div>
        <h6>Items ordered : {totalProducts}</h6>
      </div>
      <div>Items: ${price.toFixed(2) || 0}</div>
      <div>Shipping Cost: ${shippingCost.toFixed(2) || 0}</div>
      <div>Before Tax: ${totalBeforeTax.toFixed(2) || 0}</div>
      <div>Tax: ${tax.toFixed(2) || 0}</div>
      <div>Total Price: ${totalPrice.toFixed(2) || 0}</div>
      <br />
      <br /> */

        <div className={style.order_container}>
          <div className={style.order_container_left}></div>
          <div className={style.order_container_center}></div>
          <div className={style.order_container_right}>
            <Cart cart={cart}></Cart>
          </div>
        </div>
      }
    </>
  );
};

export default Order;
