import React from "react";
import "../styles/TopNav.css";

const TopNav = () => {
  return (
  <nav className= "nav_bar">
    <button className="nav_button">Home</button>
    <button className="nav_button" >New Member</button>
    <button className="nav_button">Login</button>
    <button className="nav_button">Profile
      <ion-icon name="person-circle-outline"></ion-icon>
    </button>
    <button className="nav_button">Settings</button>
    </nav>
  );
}

export default TopNav;
