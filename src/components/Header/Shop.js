import React, { Fragment } from "react";
import fakeData from "../../fakeData/index";
const Shop = () => {
  let data = fakeData;
  console.log(data);
  let first10 = data.slice(0, 10);
  return (
    <Fragment>
      <div>this is a shoppp</div>
      <div>{first10.length}</div>
      <ul>
        {first10.map((product) => (
          //  console.log(product);
          <li key={product.key}>{product.name}</li>
        ))}
      </ul>
    </Fragment>
  );
};

export default Shop;
