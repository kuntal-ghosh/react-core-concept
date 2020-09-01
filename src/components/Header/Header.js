import React from "react";
import logo from "../../images/logo.png";
import styles from "./Header.module.scss";
import { Link } from "react-router-dom";
import Shop from "../Shop/Shop";
import Order from "../Order/Order";

const Header = () => {
  return (
    <div>
      <div className={styles.header}>
        <img src={logo} alt="app-logo" />
      </div>

      <nav className={styles.header_nav}>
        <a href="/shop">Shop</a>
        <a href="/order">Order Review</a>
        <a href="/manage">Manage Inventary here</a>
      </nav>
    </div>
  );
};

export default Header;
