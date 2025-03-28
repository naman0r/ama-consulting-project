import { useState } from "react";

import "../styles/Home.css";
import "../styles/Admin.css";
import TopNav from "../components/TopNav";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { Link } from "react-router-dom";

function SelectAMA() {
  
  return (
    <>
      <Header />
      <TopNav />
    <div className="admin_page">
      <div className="toggle">
        <Link className="toggle_link" to="/admin">  
      <button className="toggle_btn">History</button> </Link>
        <Link className="toggle_link" to="/select">
      <button className="toggle_btn">Select</button>
      </Link>
        </div>
    </div>
      
      <Footer />
    </>
  );
}

export default SelectAMA;
