import React, { useContext, useState } from "react";
import AppContext from "../context/AppContext";

import "../styles/ProductItem.scss";

import addToCartImage from "../assets/icons/bt_add_to_cart.svg";
import addedToCartImage from "../assets/icons/bt_added_to_cart.svg";
import ProductInfo from "./ProductInfo";

const ProductItem = ({ product }) => {
  const { addToCart, removeFromCartWithId, setToggleOrders } =
    useContext(AppContext);
  const [open, setOpen] = useState(false);

  const handleClick = (item) => {
    if (!item.cart) {
      addToCart(item);
      item.cart = true;
    } else {
      removeFromCartWithId(item.id);
      item.cart = false;
    }
  };

  const handleClose = () => setOpen((prevState) => !prevState);

  return (
    <div className="ProductItem">
      <img src={product.images[0]} alt={product.title} onClick={handleClose} />
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
      {open ? (
        <ProductInfo
          handleClick={handleClick}
          product={product}
          handleClose={handleClose}
        />
      ) : null}
    </div>
  );
};

export default ProductItem;
