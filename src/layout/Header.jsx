import React, { useState } from "react";
import "../styles/header.scss";
import { Link } from "react-router-dom";
import menuIcon from "../assets/menu-icon.png";
import logo from "../assets/logo.png";
import logoTitle from "../assets/logo-title.png";
import background from "./Layout";
import StaggeredMenu from "../components/StaggeredMenu/StaggeredMenu";

const Header = () => {
  const [triggerMenu, setTriggerMenu] = useState(false);
  const menuItems = [
    { label: "Acasa", link: "/", ariaLabel: "Pagina principala" },
    { label: "Despre Mine", link: "/about", ariaLabel: "Despre Irina Manarca" },
    {
      label: "Consiliere",
      link: "/consiliere",
      ariaLabel: "Servicii de consiliere",
    },
  ];

  return (
    <header className="site-header">
      <nav className="navigation-menu">
        <div className="logo-wrapper">
          <a
            href="/"
            className="logolink"
            onClick={() => window.location.reload()}
          >
            <img src={logo} className="logobtn" alt="logo" />
          </a>
          <img src={logoTitle} className="logo-title" alt="logo" />
        </div>
        <StaggeredMenu
          isFixed={true}
          position="right"
          logoUrl={menuIcon}
          items={menuItems}
          accentColor="#561818"
          menuButtonColor="#160f3d"
          openMenuButtonColor="#160f3d"
          colors={["#ffffff", "#160f3d", "#d1aae6"]}
        />
      </nav>
    </header>
  );
};

export default Header;
