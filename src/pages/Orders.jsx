import React from "react";
import { useContext } from "react";
import AppContext from "../context/AppContext";
import OrderItem from "../components/OrderItem";
import "../styles/Orders.scss";

const Orders = () => {
  const { state } = useContext(AppContext);
  return (
    <div className="Orders">
      <div className="Orders-container">
        <h1 className="title">My orders</h1>
        <div className="Orders-content">
          {state.cart.map((item, index) => (
            <OrderItem product={item} indexValue={`item-${index}`} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Orders;
