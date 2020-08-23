import React from "react";
import logo from "../../images/logo.png";
import styles from "./Header.module.scss";
const Header = () => {
  return (
    <div>
      <div className={styles.header}>
        <img src={logo} alt="app-logo" />
      </div>

      <nav className={styles.header_nav}>
        <a href="">Shop</a>
        <a href="">Order Review</a>
        <a href="">Manage Inventory here</a>
      </nav>
    </div>
  );
};

export default Header;
