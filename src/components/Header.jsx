import React, { useContext } from "react";
import Menu from "./Menu";
import useToggle from "../hooks/useToggle";
import AppContext from "../context/AppContext";
import { Link } from "react-router-dom";
import MyOrder from "../containers/MyOrder";
import MenuMobile from "./MenuMobile";
import menu from "../assets/icons/icon_menu.svg";
import logo from "../assets/logos/logo_yard_sale.svg";
import shoppingCart from "../assets/icons/icon_shopping_cart.svg";
import "../styles/Header.scss";

const Header = () => {
  const {
    toggle,
    toggleOrders,
    toggleMobile,
    handleMenus,
    handleToggle,
    handleOrders,
    handleMobile,
  } = useToggle();
  const { state, updateProducts, currentUser } = useContext(AppContext);

  return (
    <nav>
      <img src={menu} alt="menu" className="menu" onClick={handleMobile} />
      <div className="navbar-left">
        <Link
          className="menu__logo"
          to="/"
          onClick={() => {
            handleMenus();
          }}
        >
          <img src={logo} alt="logo" className="nav-logo" />
        </Link>

        <ul>
          <li>
            <button
              className="nav-button"
              onClick={() => {
                handleMenus();
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
                handleMenus();
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
                handleMenus();
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
                handleMenus();
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
                handleMenus();
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
                handleMenus();
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
          <li className="navbar-email">
            {currentUser ? (
              <p
                onClick={() => {
                  handleToggle();
                }}
              >
                {currentUser.email}
              </p>
            ) : (
              <Link to="/login">Login</Link>
            )}
          </li>
          <li
            className="navbar-shopping-cart"
            onClick={() => {
              handleToggle();
              handleOrders();
            }}
          >
            <img src={shoppingCart} alt="shopping cart" />
            {state.cart?.length > 0 ? <div>{state.cart?.length}</div> : null}
          </li>
        </ul>
      </div>
      {toggle && currentUser ? <Menu handleMenus={handleMenus} /> : null}

      {toggleOrders ? (
        <MyOrder
          handleMenus={handleMenus}
          handleOrders={handleOrders}
          handleToggle={handleToggle}
        />
      ) : null}

      {toggleMobile ? <MenuMobile handleMobile={handleMobile} /> : null}
    </nav>
  );
};

export default Header;
