import React, { Fragment, useState } from "react";
import fakeData from "../../fakeData/index";
import Product from "./Product/Product";
import Styles from "./Shop.module.scss";

const Shop = () => {
  //   let data = fakeData;
  console.log(fakeData);
  let first10 = fakeData.slice(0, 10);
  const [firstTenProducts, setFirstTenProducts] = useState(first10);
  return (
    <Fragment>
      <div className={Styles.shop_container}>
        <div className={Styles.shop_container_left}></div>
        <div className={Styles.shop_container_center}>
          {firstTenProducts.map((product) => (
            <Product key={product.key} product={product}></Product>
          ))}
        </div>
        <div className={Styles.shop_container_right}>dsvsd</div>
      </div>
    </Fragment>
  );
};

export default Shop;
