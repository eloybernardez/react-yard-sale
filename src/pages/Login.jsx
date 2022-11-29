import React, { useRef, useContext, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import AppContext from "../context/AppContext";
import "../styles/Login.scss";

import logo from "../assets/logos/logo_yard_sale.svg";

const Login = () => {
  const form = useRef(null);
  const [error, setError] = useState(false);
  let navigate = useNavigate();
  const { findUser, setCurrentUser } = useContext(AppContext);

  const handleSubmit = () => {
    const formData = new FormData(form.current);
    const data = {
      username: formData.get("email"),
      password: Number(formData.get("password")),
    };

    setError(false);
    // Check if user is registered
    const correctUser = findUser(data.username, data.password);

    console.log(data);
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
            onClick={handleSubmit}
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
