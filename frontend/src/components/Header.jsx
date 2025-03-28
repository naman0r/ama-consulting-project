import React from "react";
import "../styles/TopNav.css";
import logo from "../assets/blue-logo.png";
import tamid from "../assets/TAMID-Logo-transparent.png";

const Header = () => {
  return (
    <header>
      <img className="ama-logo" src={logo} alt="Logo"></img>
      Ask Me Anything
      <img className="tamid-logo" src={tamid} alt="Tamid"></img>
    </header>
  );
};

export default Header;
