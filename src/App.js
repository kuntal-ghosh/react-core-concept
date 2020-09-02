import React from "react";
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

function App() {
  return (
    <div>
      <Header></Header>
      <Router>
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
          <Route exact path="/" render={() => <h1>Welcome home</h1>}></Route>
          <Route path="*" render={() => <h1>not found 404</h1>} />
        </Switch>
      </Router>

      {/* <Shop></Shop> */}
    </div>
  );
}

export default App;
