import React, { useContext } from "react";
import { Link } from "react-router-dom";
import close from "../assets/icons/icon_close.png";
import AppContext from "../context/AppContext";
import "../styles/MenuMobile.scss";

const MenuMobile = ({ handleMobile }) => {
  const { updateProducts, currentUser, setCurrentUser } =
    useContext(AppContext);
  return (
    <div className="MenuMobile">
      <figure>
        <img src={close} alt="close" onClick={() => handleMobile(false)} />
      </figure>

      <ul>
        <li>
          <button
            className="nav-button"
            onClick={() => {
              handleMobile(false);
              updateProducts("");
            }}
          >
            All
          </button>
        </li>
        <li>
          <button
            className="nav-button"
            onClick={() => {
              handleMobile(false);
              updateProducts("Clothes");
            }}
          >
            Clothes
          </button>
        </li>
        <li>
          <button
            className="nav-button"
            onClick={() => {
              handleMobile(false);
              updateProducts("Electronics");
            }}
          >
            Electronics
          </button>
        </li>
        <li>
          <button
            className="nav-button"
            onClick={() => {
              handleMobile(false);
              updateProducts("Furniture");
            }}
          >
            Furnitures
          </button>
        </li>
        <li>
          <button
            className="nav-button"
            onClick={() => {
              handleMobile(false);
              updateProducts("Toys");
            }}
          >
            Toys
          </button>
        </li>
        <li>
          <button
            className="nav-button"
            onClick={() => {
              handleMobile(false);
              updateProducts("Others");
            }}
          >
            Others
          </button>
        </li>
      </ul>
      <ul>
        <li>
          <Link
            className={`title ${!currentUser ? "disabled" : ""}`}
            to={currentUser ? "/orders" : "/login"}
            onClick={() => handleMobile(false)}
          >
            My orders
          </Link>
        </li>
        <li>
          <Link
            to={currentUser ? "/account" : "/login"}
            className={`title ${!currentUser ? "disabled" : ""}`}
            onClick={() => handleMobile(false)}
          >
            My Account
          </Link>
        </li>
      </ul>
      <ul>
        <li>
          <p className="email">{currentUser ? currentUser.email : "Guest"}</p>
        </li>
        <li>
          <Link
            className="sign-out"
            to="/login"
            onClick={() => {
              handleMobile(false);
              currentUser ? setCurrentUser(null) : null;
            }}
          >
            {currentUser ? "Sign out" : "Sign in"}
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default MenuMobile;
