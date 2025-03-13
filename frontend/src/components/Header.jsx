import React from "react";
import "../styles/TopNav.css";
import logo from '../assets/logo-png.png'; 

const Header = () => {
    return (
            <header>
            <img src={logo} alt="Logo"></img>
            </header>
    );
};

export default Header;