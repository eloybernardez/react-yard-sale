import React from "react";
import { Link } from "react-router-dom";
import "../styles/NotLogged.scss";

import logo from "../assets/logos/logo_yard_sale.svg";

const NotLogged = () => {
  return (
    <div className="logged-out__container">
      <img src={logo} alt="logo" />
      <h2 className="title">You are not logged in</h2>
      <p>To access this section you need to be logged in</p>
      <Link to="/login">Login</Link>
    </div>
  );
};

export default NotLogged;
