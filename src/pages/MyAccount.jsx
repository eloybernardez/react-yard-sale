import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AppContext from "../context/AppContext";
import "../styles/MyAccount.scss";

const MyAccount = () => {
  const { currentUser } = useContext(AppContext);
  return (
    <div className="MyAccount">
      <div className="MyAccount-container">
        {currentUser ? (
          <>
            <h1 className="title">My account</h1>
            <form action="/" className="form">
              <div>
                <label for="name" className="label">
                  Name
                </label>
                <p className="value">{currentUser.name}</p>
                <label for="email" className="label">
                  Email
                </label>
                <p className="value">{currentUser.email}</p>
                <label for="password" className="label">
                  Password
                </label>
                <p className="value">*********</p>
              </div>
              <Link to="/new-password" className="secondary-button edit-button">
                Edit Password
              </Link>
            </form>
          </>
        ) : (
          <div className="logged-out__container">
            <h2 className="title">You are not logged in</h2>
            <Link className="login-button" to="/login">
              Login
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyAccount;
