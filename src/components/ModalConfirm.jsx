import React from "react";
import { createPortal } from "react-dom";
import "../styles/ModalConfirm.scss";

import email from "../assets/icons/email.svg";

const ModalConfirm = ({ title, message }) => {
  return createPortal(
    <div className="modal">
      <div className="modal__container">
        <figure className="modal__icon">
          <img src={email} alt="email logo" />
        </figure>
        <h3 className="modal__title">{title}</h3>
        <p className="modal__message">{message}</p>
      </div>
    </div>,
    document.getElementById("modal-root")
  );
};

export default ModalConfirm;
