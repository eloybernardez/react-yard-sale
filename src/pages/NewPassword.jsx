import React, { useContext, useState, useRef } from "react";
import ModalConfirm from "../components/ModalConfirm";
import "../styles/NewPassword.scss";

import logo from "../assets/logos/logo_yard_sale.svg";
import AppContext from "../context/AppContext";
import NotLogged from "../components/NotLogged";

const NewPassword = () => {
  const { currentUser, saveData, users, setUsers } = useContext(AppContext);
  const [modal, setModal] = useState(false);
  const [error, setError] = useState(false);
  const form = useRef(null);

  const changePassword = (newPassword) => {
    const oldUser = users.find((user) => user.email === currentUser.email);

    const changedPasswordUser = { ...oldUser, pass: Number(newPassword) };

    const oldUsers = users.filter((user) => user.email !== currentUser.email);

    const newUsers = [...oldUsers, changedPasswordUser];

    setUsers(newUsers);
    saveData("users", newUsers);
  };

  const validatePassword = () => {
    const userInputs = new FormData(form.current);

    const data = {
      password: userInputs.get("password"),
      newPassword: userInputs.get("newPassword"),
    };

    setError(false);
    data.password === data.newPassword
      ? changePassword(data.newPassword)
      : null;
    return data.password === data.newPassword;
  };

  return (
    <div className="NewPassword">
      <div className="NewPassword-container">
        {modal ? (
          <ModalConfirm
            setModal={setModal}
            title={"Password changed"}
            message={"You changed your password correctly!"}
          />
        ) : null}
        {currentUser ? (
          <>
            <img src={logo} alt="logo" className="logo" />
            <h1 className="title">Create a new password</h1>
            <p className="subtitle">Enter a new password for your account</p>
            <form action="/" className="form" ref={form}>
              <label htmlFor="password" className="label">
                Password
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
              <label htmlFor="new-password" className="label">
                Confirm new Password
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
                  validatePassword() ? setModal(true) : setError(true)
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
