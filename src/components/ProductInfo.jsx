import React from "react";
import ReactDOM from "react-dom";
import "../styles/ProductInfo.scss";

import close from "../assets/icons/icon_close.png";
import addedToCart from "../assets/icons/bt_added_to_cart.svg";
import addToCart from "../assets/icons/bt_add_to_cart.svg";

const ProductInfo = ({ product, handleClose, handleCart }) => {
  return ReactDOM.createPortal(
    <div className="Modal">
      <div className="ProductInfo">
        <div className="ProductInfo__header">
          <p>{product.title}</p>
          <figure>
            <img src={close} alt="close" onClick={handleClose} />
          </figure>
        </div>
        <figure className="ProductInfo__img">
          <img src={product.images[0]} alt={product.title} />
        </figure>

        <p>{product.description}</p>

        <div className="ProductInfo__footer">
          <button
            className={`add-to-cart-button ${
              product.cart ? `secondary-button--cart` : `primary-button--cart`
            }`}
            onClick={() => handleCart(product)}
          >
            <img
              src={!product.cart ? addToCart : addedToCart}
              alt="add to cart icon"
            />
            {!product.cart ? "Add" : "Remove"}
          </button>
          <p>${product.price}</p>
        </div>
      </div>
    </div>,
    document.getElementById("product-info")
  );
};

export default ProductInfo;
