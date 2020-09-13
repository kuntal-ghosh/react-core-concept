import React, { useState, useEffect, useContext } from "react";
import logo from "../../images/logo.png";
import styles from "./Header.module.scss";
// import { Link } from "react-router-dom";
import Shop from "../Shop/Shop";
import Order from "../Order/Order";
import { Link } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import { NavDropdown, Image } from "react-bootstrap";
const Header = (props) => {
  const { user } = props;
  // const [user, setUser] = useContext(AuthContext);
  console.log("user", user);
  let button = user.isSignedIn ? (
    <div className=" d-flex">
      <NavDropdown
        title={user.name}
        id="basic-nav-dropdown"
        className="d-inline-block button_nav_dropdown"
      >
        <NavDropdown.Item
          onClick={props.googleSignOut}
          className={styles.button_nav_dropdown_item}
          // style={{ color: "black !important" }}
        >
          sign Out
        </NavDropdown.Item>
      </NavDropdown>

      <Image
        src={user.photoUrl}
        alt="hfeh"
        style={{ width: "50px", padding: "10px" }}
        roundedCircle
      />
    </div>
  ) : (
    <Link to="/authenticate">
      <div className="mr-2 d-flex">
        <div className="button mr-2">sign in</div>
        {/* <Image
          src={user.photoUrl}
          className={styles.button_img}
          alt="hfeh"
          roundedCircle
        /> */}
      </div>
    </Link>
  );

  return (
    <div>
      <div className={styles.header}>
        <img src={logo} alt="app-logo" />
      </div>

      <nav className={styles.header_nav}>
        <div className="d-inline-block mr-auto nav_link">
          <Link to="/shop">Shop</Link>
          <Link to="/order">Order Review</Link>
          <Link to="/manage">Manage Inventary here</Link>
        </div>

        <div className="d-inline-block mr-4">{button}</div>
      </nav>
    </div>
  );
};

export default Header;
