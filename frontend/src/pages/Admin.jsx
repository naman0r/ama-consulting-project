import { useState } from "react";

import "../styles/Home.css";
import "../styles/Admin.css";
import TopNav from "../components/TopNav";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { Link, useLocation } from "react-router-dom";

function Admin() {
  const name = "[Name]";
  const email = "[Email]";
  const blurb = "[Blurb]";
  const funfacts = "[fun facts]";
  
  const location = useLocation();
  
  const getActiveButton = () => {
    if (location.pathname === "/admin") {
      return "history";
    }
    if (location.pathname === "/select") {
      return "select";
    }
    return null; // No active button if the path is something else
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

    
      <div className="ama_history">
        <p className="p5">AMA History</p>
        <div className="history_header">
      <button className="prev_ama"><i class="fa-solid fa-arrow-left"></i></button>
      <p className="date_text">date goes here</p>
      <button className="next_ama"><i class="fa-solid fa-arrow-right"></i></button>
      </div>
      
      <div className="history_content">
      <div className="small_field">
      <p className="p4">Name: {name}</p> </div>
      <div className="second_row">
      <div className="large_field">
      <p className="p4">Fun Facts: <br></br>{funfacts}</p> 
      </div>
      <div className="large_field">
      <p className="p4">Blurb:<br></br>{blurb}</p> 
      </div>
      </div>
    </div> 
    </div>
  </div>
  <Footer />
    </>
  );
}

export default Admin;
