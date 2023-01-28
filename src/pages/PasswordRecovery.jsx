import React, { useRef } from "react";
import useModal from "../hooks/useModal";
import useValidation from "../hooks/useValidation";
import logo from "../assets/logos/logo_yard_sale.svg";
import ModalConfirm from "../components/ModalConfirm";
import "../styles/PasswordRecovery.scss";

const PasswordRecovery = () => {
  const { modal, setModal } = useModal();
  const { validateEmail, error, setError } = useValidation();

  const form = useRef(null);

  return (
    <div className="PasswordRecovery">
      <div className="PasswordRecovery-container">
        {modal ? (
          <ModalConfirm
            setModal={setModal}
            title={"Email sent!"}
            message={`Don't forget it next time! :)`}
          />
        ) : null}
        <img src={logo} alt="logo" className="logo" />
        <h1 className="title">Password recovery</h1>
        <p className="subtitle">
          Inform the email address used to create your account
        </p>
        <form action="/" className="form" ref={form}>
          <label
            htmlFor="email"
            className={`label ${error ? "label--error" : ""}`}
            onKeyDown={() => setError(false)}
          >
            {error ? "Email not found" : "Email adress"}
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className={`input input-email ${error ? "input--error" : ""}`}
            required
          />
          <input
            type="button"
            value="Confirm"
            className="primary-button login-button"
            onClick={() =>
              validateEmail(form) ? setModal(true) : setError(true)
            }
          />
        </form>
      </div>
    </div>
  );
};

export default PasswordRecovery;
