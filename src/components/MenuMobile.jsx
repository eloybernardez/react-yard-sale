import React, { useContext } from "react";
import { Link } from "react-router-dom";
import close from "../assets/icons/icon_close.png";
import AppContext from "../context/AppContext";
import "../styles/MenuMobile.scss";

const MenuMobile = ({ toggleMobile, setToggleMobile }) => {
  const { updateProducts, currentUser, setCurrentUser } =
    useContext(AppContext);
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
          <button
            className="nav-button"
            onClick={() => {
              setToggleMobile(false);
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
              setToggleMobile(false);
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
              setToggleMobile(false);
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
              setToggleMobile(false);
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
              setToggleMobile(false);
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
              setToggleMobile(false);
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
            to="/orders"
            onClick={() => setToggleMobile(false)}
          >
            My orders
          </Link>
        </li>
        <li>
          <Link
            to="/account"
            className={`title ${!currentUser ? "disabled" : ""}`}
            onClick={() => setToggleMobile(false)}
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
              setToggleMobile(false);
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
