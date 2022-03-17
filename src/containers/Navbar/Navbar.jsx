import React from "react";
import Navmenu from "../../components/NavMenu/NavMenu";
import "./Navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar">
      <h1 className="navbar__logo">
        Shiles
        <br />
        Farm
      </h1>
      <Navmenu />
    </div>
  );
};

export default Navbar;
