import React, { useContext } from "react";
import close from "../assets/icons/icon_close.png";
import AppContext from "../context/AppContext";
import "../styles/MenuMobile.scss";

const MenuMobile = ({ toggleMobile, setToggleMobile }) => {
  const { state } = useContext(AppContext);
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
          <a href="/">CATEGORIES</a>
        </li>
        <li>
          <a href="/">All</a>
        </li>
        <li>
          <a href="/">Clothes</a>
        </li>
        <li>
          <a href="/">Electronics</a>
        </li>
        <li>
          <a href="/">Furnitures</a>
        </li>
        <li>
          <a href="/">Toys</a>
        </li>
        <li>
          <a href="/">Other</a>
        </li>
      </ul>
      <ul>
        <li>
          <a href="/">My orders</a>
        </li>
        <li>
          <a href="/">My account</a>
        </li>
      </ul>
      <ul>
        <li>
          <a href="/" className="email">
            platzi@example.com
          </a>
        </li>
        <li>
          <a href="/" className="sign-out">
            Sign out
          </a>
        </li>
      </ul>
    </div>
  );
};

export default MenuMobile;
