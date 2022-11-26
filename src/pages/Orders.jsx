import React from "react";
import { useContext } from "react";
import AppContext from "../context/AppContext";
import OrderItem from "../components/OrderItem";
import "../styles/Orders.scss";

const Orders = () => {
  const { currentUser, getUsers } = useContext(AppContext);
  const email = currentUser?.email;
  const users = getUsers();
  const { cart } = users.find((user) => user.email === email);

  const date = new Date().toLocaleDateString("en-US");
  return (
    <div className="Orders">
      <div className="Orders-container">
        <h1 className="title">Confirmed orders</h1>
        <div className="Orders-content">
          <p className="title">{date}</p>
          {!currentUser.cart
            ? null
            : cart.map((item, index) => (
                <OrderItem
                  product={item}
                  indexValue={`ordered-item-${index}`}
                />
              ))}
        </div>
      </div>
    </div>
  );
};

export default Orders;
