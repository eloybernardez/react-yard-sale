import React, { useContext } from "react";
import AppContext from "../context/AppContext";
import { Link } from "react-router-dom";

const MobileLink = ({ name, handleMobile }) => {
  const { currentUser } = useContext(AppContext);
  return (
    <li>
      <Link
        className={`title ${!currentUser ? "disabled" : ""}`}
        to={currentUser ? `/${name}` : "/login"}
        onClick={() => handleMobile(false)}
      >
        My {name}
      </Link>
    </li>
  );
};

export default MobileLink;
