import React, { useRef } from "react";
import { Link } from "react-router-dom";
import useValidation from "../hooks/useValidation";
import "../styles/Login.scss";

import logo from "../assets/logos/logo_yard_sale.svg";

const Login = () => {
  const form = useRef(null);
  const { handleLogin, error, setError } = useValidation();

  return (
    <div className="Login">
      <div className="Login__container">
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
            className={`input input--email ${error ? `input--error` : null}`}
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
            className={`input input--password ${error ? `input--error` : null}`}
            onKeyDown={() => setError(false)}
            required
          />
          <button
            type="button"
            className="login-button"
            onClick={async () => {
              await handleLogin(form);
            }}
          >
            Log in
          </button>
          <Link to="/password-recovery">Forgot my password</Link>
        </form>
        <Link to="/signup" className="signup-button">
          Sign up
        </Link>
      </div>
    </div>
  );
};

export default Login;
