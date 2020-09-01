import React from "react";
import styles from "./Product.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Product = (props) => {
  const product = props.product;
  let warning;
  let buttonText = "add to cart";
  if (product.stock <= 0) {
    warning = styles.product_description_warning;
    buttonText = "Out of Stock";
  }
  return (
    <div>
      <div className={styles.product}>
        <div>
          <img src={product.img} alt={product.catagory} />
        </div>
        <div className={styles.product_header}>
          <div>
            <Link to={`/product/${product.key}`}> {product.name}</Link>
          </div>
          <div className={styles.product_header_seller}>
            by: {product.seller}
          </div>
          <div className={styles.product_description}>
            <div className={styles.product_description_detail}>
              <p className={styles.product_description_detail_price}>
                ${product.price}
              </p>
              <div className={warning}>
                {product.stock > 0
                  ? `only ${product.stock} is available in stock-order soon`
                  : "Out of Stock"}
              </div>
              {props.showAddToCartButton && (
                <button
                  className={styles.product_description_detail_button}
                  onClick={() => props.handleButton(props.product)}
                  disabled={product.stock <= 0}
                >
                  {product.stock > 0 ? (
                    <FontAwesomeIcon icon={faShoppingCart} />
                  ) : (
                    ""
                  )}
                  {buttonText}
                </button>
              )}
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
