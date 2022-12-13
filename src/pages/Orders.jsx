import React from "react";
import { useContext } from "react";
import AppContext from "../context/AppContext";
import OrderItem from "../components/OrderItem";
import NotLogged from "../components/NotLogged";
import "../styles/Orders.scss";

const Orders = () => {
  const { currentUser } = useContext(AppContext);

  const date = new Date().toLocaleDateString("en-US");
  return (
    <div className="Orders">
      <div className="Orders-container">
        {currentUser ? (
          <>
            <h1 className="title">Confirmed orders</h1>
            <div className="Orders-content">
              <p className="title">{date}</p>
              {!currentUser.cart ? (
                <p>No confirmed orders yet. Buy something 💪</p>
              ) : (
                currentUser.cart.map((item, index) => (
                  <OrderItem
                    product={item}
                    indexValue={`ordered-item-${index}`}
                  />
                ))
              )}
            </div>
          </>
        ) : (
          <NotLogged />
        )}
      </div>
    </div>
  );
};

export default Orders;
