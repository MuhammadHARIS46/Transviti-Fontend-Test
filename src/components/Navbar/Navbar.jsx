import React from "react";
import "./Navbar.css";
import Button from "../common/Button/Button";

import AppLgo from "../../assets/images/AppLogo.png";
import searchIcon from "../../assets/icons/SearchIcon.svg";
import userAvatar from "../../assets/images/ProfileImage.png";

const menuItems = [
  { id: 1, label: "Find Jobs", active: true },
  { id: 2, label: "Top Companies" },
  { id: 3, label: "Job Tracker" },
  { id: 4, label: "My Calendar" },
  { id: 5, label: "Documents" },
  { id: 6, label: "Messages" },
  { id: 7, label: "Notifications" },
];

const Navbar = () => {
  return (
    <nav className="navbar-container-main">
      <div className="navbar-left">
        <img src={AppLgo} alt="logo" className="navbar-logo" />

        <ul className="navbar-menu">
          {menuItems.map((item) => (
            <li
              key={item.id}
              className={`navbar-menu-item ${item.active ? "active" : ""}`}
            >
              {item.label}
            </li>
          ))}
        </ul>
      </div>

      <div className="navbar-right">
        <div className="navbar-search">
          <img src={searchIcon} alt="search" />
          <input type="text" placeholder="Search" />
        </div>

        <Button label="Resume Builder" onClick={() => {}} />

        <img src={userAvatar} alt="user" className="navbar-avatar" />
      </div>
    </nav>
  );
};

export default Navbar;
