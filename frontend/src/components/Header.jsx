import React from "react";
import "../styles/TopNav.css";
import logo from '../assets/logo-new.png'; 

const Header = () => {
    return (
            <header>
            <img src={logo} alt="Logo"></img>
            Ask Me Anything
            </header>
    );
};

export default Header;