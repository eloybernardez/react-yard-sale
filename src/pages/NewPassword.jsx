import React, { useContext, useRef } from "react";
import ModalConfirm from "../components/ModalConfirm";
import useModal from "../hooks/useModal";
import useValidation from "../hooks/useValidation";
import NotLogged from "../components/NotLogged";
import AppContext from "../context/AppContext";
import logo from "../assets/logos/logo_yard_sale.svg";
import "../styles/NewPassword.scss";

const NewPassword = () => {
  const { currentUser } = useContext(AppContext);
  const { error, setError, validatePassword } = useValidation();
  const { modal, setModal } = useModal();
  const form = useRef(null);

  return (
    <div className="NewPassword">
      <div className="NewPassword-container">
        {modal ? (
          <ModalConfirm
            setModal={setModal}
            title={"Password changed"}
            message={"You've changed your password correctly!"}
          />
        ) : null}
        {currentUser ? (
          <>
            <img src={logo} alt="logo" className="logo" />
            <h1 className="title">Create a new password</h1>
            <p className="subtitle">Enter a new password for your account</p>
            <form action="/" className="form" ref={form}>
              <label
                htmlFor="password"
                className={error ? `label label--error` : `label`}
              >
                {error ? "Passwords don't match" : "New Password"}
              </label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="*********"
                className={`input input-password ${
                  error ? "input--error" : ""
                }`}
                required
              />
              <label
                htmlFor="new-password"
                className={error ? `label label--error` : `label`}
              >
                {error ? "Passwords don't match" : "Confirm new password"}
              </label>
              <input
                type="password"
                name="newPassword"
                id="new-password"
                placeholder="*********"
                className={`input input-password ${
                  error ? "input--error" : ""
                }`}
                required
              />
              <input
                type="button"
                value="Confirm"
                className="primary-button login-button"
                onClick={() =>
                  validatePassword(form) ? setModal(true) : setError(true)
                }
              />
            </form>
          </>
        ) : (
          <NotLogged />
        )}
      </div>
    </div>
  );
};

export default NewPassword;
