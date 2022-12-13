import { useState } from "react";

const useToggle = () => {
  const [toggle, setToggle] = useState(false);
  const [toggleMobile, setToggleMobile] = useState(false);
  const [toggleOrders, setToggleOrders] = useState(false);

  const handleToggle = () => {
    setToggleOrders(false);
    setToggle(!toggle);
  };

  const handleMobile = () => {
    setToggleMobile(!toggleMobile);
  };

  const handleOrders = () => {
    setToggle(false);
    setToggleOrders(!toggleOrders);
  };

  const handleMenus = () => {
    setToggleOrders(false);
    setToggle(false);
  };

  return {
    toggle,
    toggleOrders,
    toggleMobile,
    handleMobile,
    handleMenus,
    handleToggle,
    handleOrders,
  };
};

export default useToggle;
