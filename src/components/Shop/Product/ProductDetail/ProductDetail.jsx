import React from "react";
import { useParams } from "react-router-dom";
import fakeData from "../../../../fakeData/index";
import Product from "../Product";

const ProductDetail = () => {
  const { key } = useParams();
  const product = fakeData.find((p) => p.key === key);
  return (
    <>
      <div>Product Detail</div>
      <Product showAddToCartButton={false} product={product}></Product>
    </>
  );
};

export default ProductDetail;
