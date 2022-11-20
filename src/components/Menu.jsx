import React from "react";
import { Link } from "react-router-dom";

import "../styles/Menu.scss";

const Menu = ({ setToggle, setToggleOrders }) => {
  return (
    <div className="Menu">
      <ul>
        <li>
          <Link
            className="title"
            to="/orders"
            onClick={() => {
              setToggleOrders(false);
              setToggle(false);
            }}
          >
            My orders
          </Link>
        </li>
        <li>
          <Link
            to="/account"
            onClick={() => {
              setToggleOrders(false);
              setToggle(false);
            }}
          >
            My account
          </Link>
        </li>
        <li>
          <Link
            to="/login"
            onClick={() => {
              setToggleOrders(false);
              setToggle(false);
            }}
          >
            Login
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
