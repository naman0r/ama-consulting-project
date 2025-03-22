import React from "react";
import "../styles/TopNav.css";
import { Link } from 'react-router-dom';


const TopNav = () => {
  return (
  <nav className= "nav_bar">
    <Link to="/">
    <button className="nav_button">Home</button>
    </Link>
    <button className="nav_button" >New Member</button>
    <Link to="/login">
    <button className="nav_button">Login</button>
      </Link>
    <button className="nav_button">Profile
    </button>
    <button className="nav_button">Settings</button>
    </nav>
  );
}

export default TopNav;
