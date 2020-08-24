import React from "react";
import styles from "./Product.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee, faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const Product = (props) => {
  const product = props.product;
  return (
    <div>
      <div className={styles.product}>
        <div>
          <img src={product.img} alt={product.catagory} />
        </div>
        <div className={styles.product_header}>
          <div>{product.name}</div>
          <div className={styles.product_header_seller}>
            by: {product.seller}
          </div>
          <div className={styles.product_description}>
            <div className={styles.product_description_detail}>
              <p className={styles.product_description_detail_price}>
                ${product.price}
              </p>
              <div>only {product.stock} is available in stock-order soon</div>
              <button
                className={styles.product_description_detail_button}
                onClick={() => props.handleButton(props.product)}
              >
                <FontAwesomeIcon icon={faShoppingCart} />
                add to cart
              </button>
            </div>
            <div className={styles.product_description_ratings}>
              <div className={styles.product_description_ratings_star}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
