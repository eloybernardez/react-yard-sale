import React from "react";
import ReactDOM from "react-dom";
import "../styles/ProductInfo.scss";

import close from "../assets/icons/icon_close.png";
import addedToCart from "../assets/icons/bt_added_to_cart.svg";
import addToCart from "../assets/icons/bt_add_to_cart.svg";

const ProductInfo = ({ product, handleClose, handleClick }) => {
  return ReactDOM.createPortal(
    <div className="Modal">
      <div className="ProductInfo">
        <div className="ProductInfo-header">
          <p>{product.title}</p>
          <figure>
            <img src={close} alt="close" onClick={handleClose} />
          </figure>
        </div>

        <p>${product.price}</p>
        <p>{product.description}</p>
        <button
          className={`add-to-cart-button ${
            product.cart ? `secondary-button` : `primary-button`
          }`}
          onClick={() => handleClick(product)}
        >
          <img
            src={!product.cart ? addToCart : addedToCart}
            alt="add to cart"
          />
          {!product.cart ? "Add to cart" : "Remove from cart"}
        </button>
      </div>
    </div>,
    document.getElementById("product-info")
  );
};

export default ProductInfo;
