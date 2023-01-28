import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AppContext from "../context/AppContext";
import NavButton from "./NavButton";
import MobileLink from "./MobileLink";
import CloseIcon from "./CloseIcon";
import "../styles/MenuMobile.scss";

const MenuMobile = ({ handleMobile }) => {
  const { currentUser, setCurrentUser } = useContext(AppContext);
  return (
    <div className="MenuMobile">
      <CloseIcon handleClose={handleMobile} />

      <ul>
        <NavButton handleToggle={handleMobile} />
        {["Clothes", "Electronics", "Furniture", "Toys", "Others"].map(
          (type) => (
            <NavButton
              key={`MenuMobile-${type}`}
              name={type}
              typeOfProduct={type}
              handleToggle={handleMobile}
            />
          )
        )}
      </ul>
      <ul>
        <MobileLink name="orders" handleMobile={handleMobile} />
        <MobileLink name="account" handleMobile={handleMobile} />
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
