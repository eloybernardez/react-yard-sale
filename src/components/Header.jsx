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
  const { state, updateProducts, currentUser } = useContext(AppContext);

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
        <Link
          className="menu__logo"
          to="/"
          onClick={() => {
            setToggleOrders(false);
            setToggle(false);
          }}
        >
          <img src={logo} alt="logo" className="nav-logo" />
        </Link>

        <ul>
          <li>
            <button
              className="nav-button"
              onClick={() => {
                setToggleOrders(false);
                setToggle(false);
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
                setToggleOrders(false);
                setToggle(false);
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
                setToggleOrders(false);
                setToggle(false);
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
                setToggleOrders(false);
                setToggle(false);
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
                setToggleOrders(false);
                setToggle(false);
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
                setToggleOrders(false);
                setToggle(false);
                updateProducts("Others");
              }}
            >
              Others
            </button>
          </li>
        </ul>
      </div>
      <div className="navbar-right">
        <ul>
          <li
            className="navbar-email"
            onClick={() => {
              handleToggle();
              setToggleOrders(false);
            }}
          >
            {currentUser ? currentUser.email : <Link to="/login">Login</Link>}
          </li>
          <li
            className="navbar-shopping-cart"
            onClick={() => {
              setToggle(false);
              setToggleOrders(!toggleOrders);
            }}
          >
            <img src={shoppingCart} alt="shopping cart" />
            {state.cart?.length > 0 ? <div>{state.cart?.length}</div> : null}
          </li>
        </ul>
      </div>
      {toggle && currentUser ? (
        <Menu setToggle={setToggle} setToggleOrders={setToggleOrders} />
      ) : null}

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
