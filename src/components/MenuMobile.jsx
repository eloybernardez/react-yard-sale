import React, { useContext } from "react";
import { Link } from "react-router-dom";
import close from "../assets/icons/icon_close.png";
import AppContext from "../context/AppContext";
import "../styles/MenuMobile.scss";

const MenuMobile = ({ toggleMobile, setToggleMobile }) => {
  const { updateProducts } = useContext(AppContext);
  return (
    <div className="MenuMobile">
      <figure>
        <img
          src={close}
          alt="close"
          onClick={() => setToggleMobile(!toggleMobile)}
        />
      </figure>

      <ul>
        <li>
          <button className="nav-button" onClick={() => updateProducts("")}>
            All
          </button>
        </li>
        <li>
          <button
            className="nav-button"
            onClick={() => updateProducts("Clothes")}
          >
            Clothes
          </button>
        </li>
        <li>
          <button
            className="nav-button"
            onClick={() => updateProducts("Electronics")}
          >
            Electronics
          </button>
        </li>
        <li>
          <button
            className="nav-button"
            onClick={() => updateProducts("Furniture")}
          >
            Furnitures
          </button>
        </li>
        <li>
          <button className="nav-button" onClick={() => updateProducts("Toys")}>
            Toys
          </button>
        </li>
        <li>
          <button
            className="nav-button"
            onClick={() => updateProducts("Others")}
          >
            Others
          </button>
        </li>
      </ul>
      <ul>
        <li>
          <Link className="title" to="/orders">
            My orders
          </Link>
        </li>
        <li>
          <Link className="title" to="/account">
            My account
          </Link>
        </li>
      </ul>
      <ul>
        <li>
          <p className="email">eloy@example.com</p>
        </li>
        <li>
          <Link className="sign-out" to="/login">
            Sign out
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default MenuMobile;
