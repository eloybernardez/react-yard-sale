import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AppContext from "../context/AppContext";

import "../styles/Menu.scss";

const Menu = ({ handleMenus }) => {
  const { setCurrentUser } = useContext(AppContext);
  return (
    <div className="Menu">
      <ul>
        <li>
          <Link
            className="title"
            to="/orders"
            onClick={() => {
              handleMenus();
            }}
          >
            My orders
          </Link>
        </li>
        <li>
          <Link
            to="/account"
            onClick={() => {
              handleMenus();
            }}
          >
            My account
          </Link>
        </li>
        <li>
          <Link
            to="/"
            onClick={() => {
              handleMenus();
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
