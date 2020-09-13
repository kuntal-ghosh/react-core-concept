import React, { useState, useEffect, createContext } from "react";
import logo from "./logo.svg";
import styles from "./App.module.scss";
import My from "./components/my";
import Header from "./components/Header/Header";
import Shop from "./components/Shop/Shop";
// "bootstrap"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Order from "./components/Order/Order";
import Inventory from "./components/Inventory/Inventory";
import ProductDetail from "./components/Shop/Product/ProductDetail/ProductDetail";
import Authentication from "./components/Home/Home";
import AuthContext from "./context/AuthContext.js";

function App() {
  const [loggedUser, setloggedUser] = useState({});
  console.log(loggedUser);
  return (
    <AuthContext.Provider value={[loggedUser, setloggedUser]}>
      <Header user={loggedUser} googleSignOut={signOut}></Header>

      <Switch>
        <Route path="/shop">
          <Shop></Shop>
        </Route>
        <Route path="/order">
          <Order></Order>
        </Route>
        <Route path="/manage">
          <Inventory></Inventory>
        </Route>
        <Route path="/product/:key">
          <ProductDetail></ProductDetail>
        </Route>
        {/* render={() => <h1>Welcome home</h1>} */}
        <Route path="/authenticate">
          <Authentication></Authentication>
        </Route>
        <Route path="*" render={() => <h1>not found 404</h1>} />
      </Switch>

      {/* <Shop></Shop> */}
    </AuthContext.Provider>
  );

  async function signOut() {
    // let response = await googleSignOut();
    const newUser = {
      isSignedIn: false,
      name: "",
      email: "",
      photoUrl: "",
    };
    setloggedUser(newUser);
    console.log(newUser);
  }
}

export default App;
