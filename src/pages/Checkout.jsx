import React, { useContext } from "react";
import AppContext from "../context/AppContext";
import useModal from "../hooks/useModal";
import ModalConfirm from "../components/ModalConfirm";
import OrderItem from "../components/OrderItem";
import CheckoutButton from "../components/CheckoutButton";
import "../styles/Checkout.scss";

const Checkout = () => {
  const { state, sumTotal } = useContext(AppContext);
  const { modal, setModal } = useModal();
  const date = new Date().toLocaleDateString("en-US");

  return (
    <div className="Checkout">
      <div className="Checkout__container">
        {modal ? (
          <ModalConfirm
            setModal={setModal}
            title="Order confirmed!"
            message="Your order will arrive... eventually 📦"
          />
        ) : null}
        <h1 className="Checkout__title">My order</h1>
        <div className="Checkout__content">
          <div className="Checkout__content__order">
            <p>
              <span>{date}</span>
              <span>{state.cart.length} articles</span>
            </p>
            <p className="price">${sumTotal()}</p>
            <div className="Checkout__content__order__items">
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
            {state.cart.length ? <CheckoutButton setModal={setModal} /> : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
