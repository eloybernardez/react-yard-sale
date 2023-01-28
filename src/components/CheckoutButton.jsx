import React, { useContext } from "react";
import AppContext from "../context/AppContext";

const CheckoutButton = ({ setModal }) => {
  const { currentUser, state, confirmOrder } = useContext(AppContext);
  return (
    <button
      className="button-checkout"
      type="button"
      onClick={() => {
        // Confirm order with the logged user and empty the cart
        confirmOrder(currentUser, state.cart);
        setModal(true);
      }}
    >
      Buy
    </button>
  );
};

export default CheckoutButton;
