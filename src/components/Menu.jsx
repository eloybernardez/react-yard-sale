import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AppContext from "../context/AppContext";

import "../styles/Menu.scss";

const Menu = ({ setToggle, setToggleOrders }) => {
  const { setCurrentUser } = useContext(AppContext);
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
            to="/"
            onClick={() => {
              setToggleOrders(false);
              setToggle(false);
              setCurrentUser(null);
            }}
          >
            Logout
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
