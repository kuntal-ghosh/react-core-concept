import React, { useState, useEffect, useContext } from "react";
import styles from "./Home.module.scss";
import cx from "classnames";
// import firebaseConfig from "../firebase.config";
// Firebase App (the core Firebase SDK) is always required and must be listed first
import * as firebase from "firebase/app";

// If you enabled Analytics in your project, add the Firebase SDK for Analytics
// import "firebase/analytics";

// Add the Firebase products that you want to use
import "firebase/auth";
// import "firebase/firestore";
import AuthContext from "../../context/AuthContext";
import { googleSignIn, googleSignOut } from "../../services/firebase-auth";

const Authentication = () => {
  // const [signIn] = useContext(AuthContext);
  // console.log("object");
  // console.log(signIn);
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    error: "",
    photoUrl: "",
  });

  const [loggedUser, setloggedUser] = useContext(AuthContext);

  let warning = <div className="alert alert-danger">{user.error}</div>;
  return (
    <div className={styles.home}>
      <div className={cx(styles.home_container, "container text-center mt-5")}>
        <div>{user.email}</div>
        <form onSubmit={onFormSubmit}>
          {user.error && warning}

          <input
            type="text"
            name="email"
            onChange={onUserInputChange}
            placeholder="Email"
            required
          />
          <br />
          <input
            type="password"
            onChange={onUserInputChange}
            name="password"
            placeholder="Password"
            required
          />
          <br />
          <input type="submit" value="Submit" />
        </form>
        <div className="social-login mt-5">
          <div className="google-login" onClick={signIn}>
            <button>Google Login</button>
          </div>
        </div>
      </div>
    </div>
  );

  function onUserInputChange(e) {
    console.log(e.target.value);
    let isValid = true;
    if (e.target.name === "email") {
      const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
      isValid = regex.test(e.target.value);
      console.log(isValid);
    }
    if (e.target.name === "password") {
      const isPasswordValid = e.target.value.length > 6;
      if (!isPasswordValid) {
        isValid = false;
      }
    }
    if (isValid) {
      const newUser = { ...user };
      newUser[e.target.name] = e.target.value;
      setUser(newUser);
    }
  }
  function onFormSubmit(e) {
    // console.log("onSubmit");
    // console.log(user.email);
    console.log(user.password);
    if (user.email && user.password) {
      // alert("form is submitted");
      console.log("submitted");
      firebase
        .auth()
        .createUserWithEmailAndPassword(user.email, user.password)
        .then((response) => console.log(response))
        .catch(function (error) {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          const newUser = { ...user };
          newUser.error = errorMessage;
          setUser(newUser);
          // ...
          console.log("errorMessage");
          console.log(errorCode, errorMessage);
        });
    }
    e.preventDefault();
  }

  async function signIn() {
    let response;
    try {
      response = await googleSignIn();
    } catch (error) {
      console.log("error " + error);
    }
    console.log("response");
    console.log(response);
    if (response) {
      let loggedUser = response.user;
    }

    console.log("loggedUser");
    console.log(loggedUser);
    if (loggedUser && loggedUser.email && loggedUser.displayName) {
      console.log(loggedUser);
      const signedInUser = {
        isSignedIn: true,
        name: loggedUser.displayName,
        email: loggedUser.email,
        photoUrl: loggedUser.photoURL,
      };
      console.log(loggedUser.email, loggedUser.name);
      setUser(signedInUser);
      setloggedUser(signedInUser);
      // console.log(result);
    }
  }
};

export default Authentication;
