import React from "react";
import { useParams, useRouteMatch } from "react-router-dom";
import fakeData from "../../../../fakeData/index";
import Product from "../Product";

const ProductDetail = (props) => {
  const match = useRouteMatch();
  console.log(match.params.key);

  const { key } = useParams();
  const product = fakeData.find((p) => p.key === key);
  return (
    <>
      <div>Product Detail-{match.params.key}</div>
      <Product showAddToCartButton={false} product={product}></Product>
    </>
  );
};

export default ProductDetail;
