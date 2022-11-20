import React, { useContext } from "react";
import AppContext from "../context/AppContext";
import "../styles/MyAccount.scss";

const MyAccount = () => {
  const { currentUser } = useContext(AppContext);
  return (
    <div className="MyAccount">
      <div className="MyAccount-container">
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
          <input
            type="button"
            value="Edit"
            className="secondary-button login-button"
          />
        </form>
      </div>
    </div>
  );
};

export default MyAccount;
