import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AppContext from "../context/AppContext";

const MenuLink = ({ route = "/", name = "Logout", handleMenus }) => {
  const { setCurrentUser } = useContext(AppContext);
  return (
    <li>
      <Link
        to={route}
        onClick={() => {
          handleMenus();
          if (name === "Logout") setCurrentUser(null);
        }}
      >
        {name}
      </Link>
    </li>
  );
};

export default MenuLink;
