import { useState } from "react";

import "../styles/Home.css";
import "../styles/Admin.css";
import TopNav from "../components/TopNav";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { Link, useLocation } from "react-router-dom";

function Admin() {
  const amaPeople = [
    { name: "Naman Rusia", blurb: "Likes coding.", funfacts: "Naman fun fact.", date: "3/17/25" },
    { name: "Ioanna Damianov", blurb: "Likes cooking.", funfacts: "Ioanna fun fact.", date: "3/24/25"},
    { name: "Krisha Dani", blurb: "Likes running.", funfacts: "Krisha fun fact.", date: "3/31/25"},
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % amaPeople.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + amaPeople.length) % amaPeople.length);
  };

  const { name, blurb, funfacts, date } = amaPeople[currentIndex];

  
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

    
      <div className="container">
        <p className="p5">AMA History</p>
        <div className="history_header">
      <button className="prev_ama" onClick={handleNext}>
        <i class="fa-solid fa-arrow-left"></i></button>
      <p className="date_text">{date}</p>
      <button className="next_ama" onClick={handleNext}>
        <i class="fa-solid fa-arrow-right"></i></button>
      </div>
      
      <div className="container_content">
      <div className="small_field">
      <p className="p4">Name: {name}</p> </div>
      <div className="row">
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
