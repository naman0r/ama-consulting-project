import { useState } from "react";

import "../styles/Home.css";
import "../styles/Admin.css";
import TopNav from "../components/TopNav";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { Link } from "react-router-dom";

function Admin() {
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
      <div className="ama_history">
      <p className="p1">
        feed with the past AMAs, including name, fun facts, and blurb,  will show here
      </p>
      </div>
      
      </div>
      <Footer />
    </>
  );
}

export default Admin;
