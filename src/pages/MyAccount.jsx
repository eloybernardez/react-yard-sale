import React, { useContext } from "react";
import { Link } from "react-router-dom";
import NotLogged from "../components/NotLogged";
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
                <label htmlFor="name" className="label">
                  Name
                </label>
                <p className="value">{currentUser.name}</p>
                <label htmlFor="email" className="label">
                  Email
                </label>
                <p className="value">{currentUser.email}</p>
                <label htmlFor="password" className="label">
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
          <NotLogged />
        )}
      </div>
    </div>
  );
};

export default MyAccount;
