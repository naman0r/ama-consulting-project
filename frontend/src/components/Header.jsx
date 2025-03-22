import React from "react";
import "../styles/TopNav.css";
import logo from '../assets/blue-logo.png'; 
import tamid from '../assets/TAMID-Logo-transparent.png'; 

const Header = () => {
    return (
            <header>
<<<<<<< HEAD
            <img src={logo} alt="Logo"></img>
            Ask Me Anything Automator!
=======
            <img 
            className="ama-logo"
            src={logo} alt="Logo">
            </img>
            Ask Me Anything
            <img 
            className="tamid-logo"
            src={tamid} alt="Tamid"></img>
>>>>>>> 892046815c845a91b1d5635858581ae215748aaa
            </header>
    );
};

export default Header;