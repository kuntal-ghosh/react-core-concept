import React from "react";
import logo from "../../images/logo.png";
import styles from "./Header.module.scss";
// import { Link } from "react-router-dom";
import Shop from "../Shop/Shop";
import Order from "../Order/Order";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <div className={styles.header}>
        <img src={logo} alt="app-logo" />
      </div>

      <nav className={styles.header_nav}>
        <Link to="/shop">Shop</Link>
        <Link to="/order">Order Review</Link>
        <Link to="/manage">Manage Inventary here</Link>
      </nav>
    </div>
  );
};

export default Header;
