import React from "react";
import "../styles/TopNav.css";
import { Link } from 'react-router-dom';


const TopNav = () => {
  return (
  <nav className= "nav_bar">
    <Link className="nav_link" to="/">
    <button className="nav_button">Home</button>
    </Link>
    <Link className="nav_link" to="/new-member">
    <button className="nav_button" >New Member</button>
    </Link>
    <Link className="nav_link" to="/login">
    <button className="nav_button">Login</button>
      </Link>
    <Link className="nav_link" to="/profile">
    <button className="nav_button">Profile</button>
    </Link>
    <Link className="nav_link" to="/admin">
    <button className="nav_button">Dashboard</button>
    </Link>
    </nav>
  );
}

export default TopNav;
