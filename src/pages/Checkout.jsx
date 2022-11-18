import React, { useContext } from "react";
import AppContext from "../context/AppContext";
import OrderItem from "../components/OrderItem";
import "../styles/Checkout.scss";

const Checkout = () => {
  const { state } = useContext(AppContext);
  const date = new Date().toLocaleDateString("en-US");

  // console.log(state.cart);
  return (
    <div className="Checkout">
      <div className="Checkout-container">
        <h1 className="title">My order</h1>
        <div className="Checkout-content">
          <div className="order">
            <p>
              <span>{date}</span>
              <span>{state.cart.length} articles</span>
            </p>
            <p>$560.00</p>
            <div className="order-items">
              {state.cart.length > 0 ? (
                state.cart.map((product, index) => {
                  return (
                    <OrderItem
                      product={product}
                      indexValue={index}
                      key={`product-${index}`}
                    />
                  );
                })
              ) : (
                <p>There are no products in your cart</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
