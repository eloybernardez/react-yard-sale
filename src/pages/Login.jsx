import React, { useRef, useContext, useState } from "react";
import AppContext from "../context/AppContext";
import "../styles/Login.scss";

import logo from "../assets/logos/logo_yard_sale.svg";

const Login = () => {
  const form = useRef(null);
  const { findUser, currentUser, setCurrentUser } = useContext(AppContext);

  const handleSubmit = () => {
    const formData = new FormData(form.current); // para enviar la informacion del formulario al hacer submit
    const data = {
      username: formData.get("email"),
      password: Number(formData.get("password")),
    };

    // Check if user is registered
    const correctUser = findUser(data.username, data.password);

    // Log user
    !correctUser ? setCurrentUser(null) : setCurrentUser(correctUser);
  };

  return (
    <div className="Login">
      <div className="Login-container">
        <img src={logo} alt="logo" className="logo" />
        <form action="/" className="form" ref={form}>
          <label htmlFor="email" className="label">
            Email address
          </label>
          <input
            type="text"
            name="email"
            placeholder="janedoe@example.com"
            className="input input-email"
          />
          <label htmlFor="password" className="label">
            Password
          </label>
          <input
            type="password"
            name="password"
            placeholder="*********"
            className="input input-password"
          />
          <button
            type="button"
            className="primary-button login-button"
            onClick={handleSubmit}
          >
            Log in
          </button>
          <a href="/password-recovery">Forgot my password</a>
        </form>
        <button type="button" className="secondary-button signup-button">
          Sign up
        </button>
      </div>
    </div>
  );
};

export default Login;
