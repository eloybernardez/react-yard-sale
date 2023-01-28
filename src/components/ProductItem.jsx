import React, { useContext, useState, memo } from "react";
import AppContext from "../context/AppContext";
import "../styles/ProductItem.scss";
import addToCartImage from "../assets/icons/bt_add_to_cart.svg";
import addedToCartImage from "../assets/icons/bt_added_to_cart.svg";
import ProductInfo from "./ProductInfo";

const ProductItem = memo(function ProductItem({ product }) {
  const { handleCart } = useContext(AppContext);
  const [open, setOpen] = useState(false);

  const handleClose = () => setOpen((prevState) => !prevState);

  return (
    <div className="ProductItem">
      <img src={product.images[0]} alt={product.title} onClick={handleClose} />
      <div className="ProductItem__info">
        <div>
          <p>${product.price}</p>
          <p>{product.title}</p>
        </div>
        <figure onClick={() => handleCart(product)}>
          <img
            src={product.cart ? addedToCartImage : addToCartImage}
            alt="add to cart"
          />
        </figure>
      </div>
      {open ? (
        <ProductInfo
          handleCart={handleCart}
          product={product}
          handleClose={handleClose}
        />
      ) : null}
    </div>
  );
});

export default ProductItem;
