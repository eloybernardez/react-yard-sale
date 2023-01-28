import React, { useContext } from "react";
import AppContext from "../context/AppContext";

const NavButton = ({ name = "All", typeOfProduct = "", handleToggle }) => {
  const { updateProducts } = useContext(AppContext);
  return (
    <li>
      <button
        className="nav-button"
        onClick={() => {
          handleToggle(false);
          updateProducts(typeOfProduct);
        }}
      >
        {name}
      </button>
    </li>
  );
};

export default NavButton;
