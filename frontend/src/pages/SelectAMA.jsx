import { useState } from "react";

import "../styles/Home.css";
import "../styles/Admin.css";
import TopNav from "../components/TopNav";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { Link, useLocation } from "react-router-dom";

function SelectAMA() {
  
 
  const location = useLocation();
  
  const getActiveButton = () => {
    if (location.pathname === "/admin") {
      return "history";
    }
    if (location.pathname === "/select") {
      return "select";
    }
    return null; 
  };
  
  const activeButton = getActiveButton();

  return (
    <>
      <Header />
      <TopNav />
    <div className="admin_page">
    <div className="toggle">
        <Link className="toggle_link" to="/admin">  
      <button className={`hist_btn ${activeButton === 'history' ? 'active' : ''}`}>
        History </button> </Link>
        <Link className="toggle_link" to="/select">
      <button className={`select_btn ${activeButton === 'select' ? 'active' : ''}`}>
        Select</button>
      </Link>
    </div>
    </div>  
      <Footer />
    </>
  );
}

export default SelectAMA;
