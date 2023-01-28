import React from "react";
import close from "../assets/icons/icon_close.png";

const CloseIcon = ({ handleClose }) => {
  return (
    <figure>
      <img src={close} alt="close" onClick={() => handleClose(false)} />
    </figure>
  );
};

export default CloseIcon;
