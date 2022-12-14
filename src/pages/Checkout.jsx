import React, { useContext } from "react";
import AppContext from "../context/AppContext";
import useModal from "../hooks/useModal";
import ModalConfirm from "../components/ModalConfirm";
import OrderItem from "../components/OrderItem";
import "../styles/Checkout.scss";

const Checkout = () => {
  const { state, setState, sumTotal, handleItems, currentUser } =
    useContext(AppContext);
  const { modal, setModal } = useModal();
  const date = new Date().toLocaleDateString("en-US");

  return (
    <div className="Checkout">
      <div className="Checkout-container">
        {modal ? (
          <ModalConfirm
            setModal={setModal}
            title="Order confirmed!"
            message="Your order will arrive... eventually 📦"
          />
        ) : null}
        <h1 className="title">My order</h1>
        <div className="Checkout-content">
          <div className="order">
            <p>
              <span>{date}</span>
              <span>{state.cart.length} articles</span>
            </p>
            <p className="order-price">${sumTotal()}</p>
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
            <button
              className="primary-button button-checkout"
              type="button"
              onClick={() => {
                handleItems(currentUser, state.cart);
                setState({ ...state, cart: [] });
                setModal(true);
              }}
            >
              Buy
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
