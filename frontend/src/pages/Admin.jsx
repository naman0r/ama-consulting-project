import { useState, useEffect } from "react";

import "../styles/Home.css";
import "../styles/Admin.css";
import TopNav from "../components/TopNav";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { Link, useLocation } from "react-router-dom";

function Admin() {
  const [amaPeople, setAmaPeople] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    fetch("http://localhost:4001/ama/history/")
      .then(res => res.json())
      .then(data => {
        // ✅ Sort by oldest first (chronological)
        const sorted = data.message.sort((a, b) => new Date(a.selected_date) - new Date(b.selected_date));

        const formatted = sorted.map(entry => ({
          name: entry.users?.name || `User ${entry.user_id}`,
          blurb: entry.blurb || "No blurb provided.",
          funfacts: [entry.fact_1, entry.fact_2, entry.fact_3, entry.fact_4, entry.fact_5].filter(Boolean).join(" • "),
          date: new Date(entry.selected_date).toLocaleDateString()
        }));

        setAmaPeople(formatted);
      })
      .catch(err => console.error("Error fetching AMA history:", err));
  }, []);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % amaPeople.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + amaPeople.length) % amaPeople.length);
  };

  const { name, blurb, funfacts, date } = amaPeople[currentIndex] || {};

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
            <button className={`hist_btn ${activeButton === "history" ? "active" : ""}`}>
              History
            </button>
          </Link>
          <Link className="toggle_link" to="/select">
            <button className={`select_btn ${activeButton === "select" ? "active" : ""}`}>
              Select
            </button>
          </Link>
        </div>

        <div className="container">
          <p className="p5">AMA History</p>
          {amaPeople.length > 0 ? (
            <>
              <div className="history_header">
                <button className="prev_ama" onClick={handlePrev}>
                  <i className="fa-solid fa-arrow-left"></i>
                </button>
                <p className="date_text">{date}</p>
                <button className="next_ama" onClick={handleNext}>
                  <i className="fa-solid fa-arrow-right"></i>
                </button>
              </div>

              <div className="container_content">
                <div className="small_field">
                  <p className="p4">Name: {name}</p>
                </div>
                <div className="row">
                  <div className="large_field">
                    <p className="p4">Fun Facts:<br />{funfacts}</p>
                  </div>
                  <div className="large_field">
                    <p className="p4">Blurb:<br />{blurb}</p>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <p className="p4">Loading AMA history...</p>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Admin;
