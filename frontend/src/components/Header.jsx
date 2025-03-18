import React from "react";
import "../styles/TopNav.css";
import logo from '../assets/blue-logo.png'; 
import tamid from '../assets/TAMID-Logo-transparent.png'; 

const Header = () => {
    return (
            <header>
<<<<<<< HEAD
            <img 
            className="ama-logo"
            src={logo} alt="Logo">
            </img>
            Ask Me Anything
            <img 
            className="tamid-logo"
            src={tamid} alt="Tamid"></img>
=======
            <img src={logo} alt="Logo"></img>
            Ask Me Anything Automator!
>>>>>>> 7b19f73 (changed the header slightly, added a title next to the logo)
            </header>
    );
};

export default Header;