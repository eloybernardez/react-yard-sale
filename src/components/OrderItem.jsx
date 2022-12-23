import React, { useContext, memo } from "react";
import AppContext from "../context/AppContext";
import "../styles/OrderItem.scss";

import iconClose from "../assets/icons/icon_close.png";

const OrderItem = memo(function OrderItem({ product, indexValue, isBought }) {
  const { removeFromCart } = useContext(AppContext);

  const handleRemove = (itemIndex) => {
    removeFromCart(itemIndex);
  };

  return (
    <div className="OrderItem">
      <figure>
        <img src={product.images[0]} alt={product.title} />
      </figure>
      <p>{product.title}</p>
      <p>${product.price}</p>
      {isBought ? null : (
        <img
          src={iconClose}
          alt="close"
          onClick={() => handleRemove(indexValue)}
        />
      )}
    </div>
  );
});

export default OrderItem;
