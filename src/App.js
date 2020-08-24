import React from "react";
import logo from "./logo.svg";
import styles from "./App.module.scss";
import My from "./components/my";
import Header from "./components/Header/Header";
import Shop from "./components/Header/Shop";

function App() {
  return (
    <div>
      <Header></Header>
      <Shop></Shop>
    </div>
  );
}

export default App;