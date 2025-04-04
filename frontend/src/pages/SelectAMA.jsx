import { useState, useEffect } from "react";

import "../styles/Home.css";
import "../styles/Admin.css";
import TopNav from "../components/TopNav";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { Link, useLocation } from "react-router-dom";

function SelectAMA() {
  const [selectedAma, setSelectedAma] = useState(null);
  const [amaList, setAmaList] = useState([]);

  const location = useLocation();
  const path = location.pathname;

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

  useEffect(() => {
    fetch("http://localhost:4001/ama/history")
      .then(res => res.json())
      .then(data => {
        const formatted = data.message.map(entry => {
          const funFactsArray = [
            entry.fact_1,
            entry.fact_2,
            entry.fact_3,
            entry.fact_4,
            entry.fact_5,
          ].filter(Boolean);

          return {
            id: entry.id,
            name: entry.users?.name || `User ${entry.user_id}`,
            status: entry.sent_status ? "SENT" : "ACTIVE",
            funFacts: funFactsArray,
            blurb: entry.blurb || "No blurb provided.",
          };
        });

        setAmaList(formatted);
      })
      .catch(err => console.error("Failed to fetch AMA data:", err));
  }, []);

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

        {path === "/select" && (
          <div className="select_view">
            <div className="card_grid">
              {amaList.map((ama) => (
                <div
                  key={ama.id}
                  className="ama_card"
                  onClick={() => setSelectedAma(ama)}
                >
                  <h4>{ama.name}</h4>
                  <p className={ama.status === "ACTIVE" ? "active" : "inactive"}>
                    {ama.status}
                  </p>
                  <ul>
                    {ama.funFacts.map((fact, i) => (
                      <li key={i}>{fact}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="card_detail">
              {selectedAma ? (
                <>
                  <h2>{selectedAma.name}</h2>
                  <p>Status: {selectedAma.status}</p>
                  <h4>Fun Facts</h4>
                  <ul>
                    {selectedAma.funFacts.map((fact, i) => (
                      <li key={i}>{fact}</li>
                    ))}
                  </ul>
                  <h4>Blurb</h4>
                  <p>{selectedAma.blurb}</p>
                  {selectedAma.status === "ACTIVE" && (
                    <button className="select_member_btn">
                      Select this Member
                    </button>
                  )}
                </>
              ) : (
                <p>Select a card to view more info</p>
              )}
            </div>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
}

export default SelectAMA;
