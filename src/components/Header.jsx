import React, { useContext, useState } from "react";
import Menu from "./Menu";
import useToggle from "../hooks/useToggle";
import AppContext from "../context/AppContext";
import { Link } from "react-router-dom";
import MyOrder from "../containers/MyOrder";
import NavButton from "./NavButton";
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

  const { state, currentUser, isAdded } = useContext(AppContext);

  return (
    <header>
      <nav>
        <img src={menu} alt="menu" className="menu" onClick={handleMobile} />
        <div className="navbar__left">
          <Link
            className="navbar-logo"
            to="/"
            onClick={() => {
              handleMenus();
            }}
          >
            <img src={logo} alt="logo" className="navbar-logo__img" />
          </Link>

          <ul>
            <NavButton handleToggle={handleMenus} />
            {["Clothes", "Electronics", "Furniture", "Toys", "Others"].map(
              (product) => (
                <NavButton
                  name={product}
                  typeOfProduct={product}
                  handleToggle={handleMenus}
                />
              )
            )}
          </ul>
        </div>
        <div className="navbar__right">
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
              {state.cart?.length > 0 ? (
                <div
                  className={`${
                    isAdded ? "navbar-shopping-cart--active" : null
                  }`}
                >
                  {state.cart?.length}
                </div>
              ) : null}
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
    </header>
  );
};

export default Header;
