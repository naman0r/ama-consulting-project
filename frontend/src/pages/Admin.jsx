import { useState } from "react";

import "../styles/Home.css";
import "../styles/Admin.css";
import TopNav from "../components/TopNav";
import Footer from "../components/Footer";
import Header from "../components/Header";

function Admin() {
  return (
    <>
      <Header />
      <TopNav />
      <p className="p3">Admin Dashboard</p>
      <button className="select_btn">Select AMA!</button>
      <div className="admin_page">
        <div className="ama_history">
          <p className="p1">
            feed with the past AMAs, including name, fun facts, and blurb, will
            show here
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Admin;
