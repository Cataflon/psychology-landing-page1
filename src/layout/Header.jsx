import React, { useState } from "react";
import "../styles/header.scss";
import { Link } from "react-router-dom";
import menuIcon from "../assets/menu-icon.png";
import logo from "../assets/logo.jpg";
import background from "../layout/Layout";

const Header = () => {
  const [triggerMenu, setTriggerMenu] = useState(false);

  return (
    <header className="site-header">
      <nav className="navigation-menu">
        <Link to="/" className="logolink">
          <img src={logo} className="logobtn" />
        </Link>

        <img
          src={menuIcon}
          className="menu"
          onClick={() => {
            setTriggerMenu(true);
          }}
        ></img>
      </nav>
      <div className={`menu-overlay ${triggerMenu ? "active" : ""}`}>
        <button
          onClick={() => {
            setTriggerMenu(false);
          }}
        >
          X
        </button>
        <Link
          to="/about"
          onClick={() => {
            setTriggerMenu(false);
          }}
        >
          About me
        </Link>
        <Link
          to="/consiliere"
          onClick={() => {
            setTriggerMenu(false);
          }}
        >
          Consiliere
        </Link>
      </div>
    </header>
  );
};

export default Header;
