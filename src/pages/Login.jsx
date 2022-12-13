import React, { useRef, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import useValidation from "../hooks/useValidation";
import AppContext from "../context/AppContext";
import "../styles/Login.scss";

import logo from "../assets/logos/logo_yard_sale.svg";

const Login = () => {
  const form = useRef(null);
  const { findUser, setCurrentUser } = useContext(AppContext);
  const { error, setError } = useValidation();
  let navigate = useNavigate();

  const handleSubmit = (form) => {
    const formData = new FormData(form.current);

    const data = {
      username: formData.get("email"),
      password: Number(formData.get("password")),
    };

    setError(false);
    // Check if user is registered
    const correctUser = findUser(data.username, data.password);

    // Guard clause
    if (!correctUser) return setError(true);
    // Continue logging

    setCurrentUser(correctUser);
    navigate("/");
  };

  return (
    <div className="Login">
      <div className="Login-container">
        <img src={logo} alt="logo" className="logo" />
        <form action="/" className="form" ref={form}>
          <label
            htmlFor="email"
            className={`label ${error ? "label--error" : ""}`}
          >
            {error ? "Incorrect email or password" : "Email"}
          </label>
          <input
            type="email"
            name="email"
            placeholder="janedoe@example.com"
            className={`input input-email ${error ? `input--error` : null}`}
            onKeyDown={() => setError(false)}
            required
          />
          <label
            htmlFor="password"
            className={`label ${error ? "label--error" : ""}`}
          >
            {error ? "Incorrect email or password" : "Password"}
          </label>
          <input
            type="password"
            name="password"
            placeholder="*********"
            className={`input input-password ${error ? `input--error` : null}`}
            onKeyDown={() => setError(false)}
            required
          />
          <button
            type="button"
            className="primary-button login-button"
            onClick={() => handleSubmit(form)}
          >
            Log in
          </button>
          <Link to="/password-recovery">Forgot my password</Link>
        </form>
        <Link to="/signup" className="secondary-button signup-button">
          Sign up
        </Link>
      </div>
    </div>
  );
};

export default Login;
