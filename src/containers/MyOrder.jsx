import React, { useContext } from "react";
import OrderItem from "../components/OrderItem";
import { Link } from "react-router-dom";
import AppContext from "../context/AppContext";

import "../styles/MyOrder.scss";

import close from "../assets/icons/icon_close.png";

const MyOrder = ({ toggleOrders, setToggleOrders }) => {
  const { state, sumTotal } = useContext(AppContext);

  return (
    <aside className="MyOrder">
      <div className="title-container">
        <p className="title">My order</p>
        <img
          src={close}
          alt="close icon"
          onClick={() => setToggleOrders(!toggleOrders)}
        />
      </div>
      <div className="my-order-content">
        {state.cart.map((product, index) => {
          return (
            <OrderItem
              indexValue={index}
              key={`product-n${index}`}
              product={product}
            />
          );
        })}
        <div className="order">
          <p>
            <span>Total</span>
          </p>
          <p className="order-price">${sumTotal()}</p>
        </div>
        <button className="primary-button">
          <Link className="button-text" to="/checkout">
            Checkout
          </Link>
        </button>
      </div>
    </aside>
  );
};

export default MyOrder;
