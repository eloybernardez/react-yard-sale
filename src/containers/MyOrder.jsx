import React, { useContext, useState } from "react";
import OrderItem from "../components/OrderItem";
import AppContext from "../context/AppContext";

import "../styles/MyOrder.scss";

import flechita from "../assets/icons/icon_close.png";

const MyOrder = ({ toggleOrders, setToggleOrders }) => {
  const { state } = useContext(AppContext);

  const sumTotal = () => {
    const reducer = (accumulator, currentValue) =>
      accumulator + currentValue.price;
    const sum = state.cart.reduce(reducer, 0);
    return sum;
  };

  return (
    <aside className="MyOrder">
      <div className="title-container">
        <p className="title">My order</p>
        <img
          src={flechita}
          alt="arrow"
          onClick={() => setToggleOrders(!toggleOrders)}
        />
      </div>
      <div className="my-order-content">
        {state.cart.map((product, index) => {
          return <OrderItem indexValue={index} key={index} product={product} />; // el indexValue es para que cuando eliminemos un producto no se eliminen los repetidos. el index es para dar keys UNICAS a cada producto
        })}
        <div className="order">
          <p>
            <span>Total</span>
          </p>
          <p>${sumTotal()}</p>
        </div>
        <button className="primary-button">Checkout</button>
      </div>
    </aside>
  );
};

export default MyOrder;
