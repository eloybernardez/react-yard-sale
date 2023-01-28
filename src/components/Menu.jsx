import React, { useContext } from "react";
import MenuLink from "./MenuLink";

import "../styles/Menu.scss";

const Menu = ({ handleMenus }) => {
  return (
    <div className="Menu">
      <ul>
        <MenuLink
          name={"My Orders"}
          route={"/orders"}
          handleMenus={handleMenus}
        />

        <MenuLink
          name={"My account"}
          route={"/account"}
          handleMenus={handleMenus}
        />

        <MenuLink handleMenus={handleMenus} />
      </ul>
    </div>
  );
};

export default Menu;
