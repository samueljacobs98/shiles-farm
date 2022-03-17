import React from "react";
import "./NavMenu.scss";

const Navmenu = () => {
  return (
    <ul className="navmenu">
      <li className="navmenu__item">
        <a href="#activities" className="navmenu__anchor">
          Activities
        </a>
      </li>
      <li className="navmenu__item">
        <a href="#animals" className="navmenu__anchor">
          Animals
        </a>
      </li>
    </ul>
  );
};

export default Navmenu;
