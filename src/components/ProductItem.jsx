import React, { useContext } from "react";
import AppContext from "../context/AppContext";

import "../styles/ProductItem.scss";

import addToCartImage from "../assets/icons/bt_add_to_cart.svg";
import addedToCartImage from "../assets/icons/bt_added_to_cart.svg";

const ProductItem = ({ product }) => {
  const { addToCart, removeFromCartWithId } = useContext(AppContext);

  const handleClick = (item) => {
    if (!item.cart) {
      addToCart(item);
      item.cart = true;
    } else {
      removeFromCartWithId(item.id);
      item.cart = false;
    }
  };

  return (
    <div className="ProductItem">
      <img src={product.images[0]} alt={product.title} />
      <div className="product-info">
        <div>
          <p>${product.price}</p>
          <p>{product.title}</p>
        </div>
        <figure onClick={() => handleClick(product)}>
          <img
            src={product.cart ? addedToCartImage : addToCartImage}
            alt="add to cart"
          />
        </figure>
      </div>
    </div>
  );
};

export default ProductItem;
