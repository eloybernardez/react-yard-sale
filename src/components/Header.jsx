import React, { useState, useContext } from "react";
import Menu from "./Menu";
import AppContext from "../context/AppContext";
import MyOrder from "../containers/MyOrder";
import MenuMobile from "./MenuMobile";
import menu from "../assets/icons/icon_menu.svg";
import logo from "../assets/logos/logo_yard_sale.svg";
import shoppingCart from "../assets/icons/icon_shopping_cart.svg";
import "../styles/Header.scss";
import { Link } from "react-router-dom";

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const [toggleMobile, setToggleMobile] = useState(false);
  const [toggleOrders, setToggleOrders] = useState(false);
  const { state, updateProducts } = useContext(AppContext);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  const handleMobile = () => {
    setToggleMobile(!toggleMobile);
  };

  return (
    <nav>
      <img src={menu} alt="menu" className="menu" onClick={handleMobile} />
      <div className="navbar-left">
        <Link className="menu__logo" to="/">
          <img src={logo} alt="logo" className="nav-logo" />
        </Link>

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
            <button
              className="nav-button"
              onClick={() => updateProducts("Toys")}
            >
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
      </div>
      <div className="navbar-right">
        <ul>
          <li className="navbar-email" onClick={handleToggle}>
            eloy@example.com
          </li>
          <li
            className="navbar-shopping-cart"
            onClick={() => setToggleOrders(!toggleOrders)}
          >
            <img src={shoppingCart} alt="shopping cart" />
            {state.cart?.length > 0 ? <div>{state.cart?.length}</div> : null}
          </li>
        </ul>
      </div>
      {toggle ? <Menu /> : null}

      {toggleOrders ? (
        <MyOrder
          toggleOrders={toggleOrders}
          setToggleOrders={setToggleOrders}
        />
      ) : null}

      {toggleMobile ? (
        <MenuMobile
          toggleMobile={toggleMobile}
          setToggleMobile={setToggleMobile}
        />
      ) : null}
    </nav>
  );
};

export default Header;
