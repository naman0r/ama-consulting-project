import { useState } from "react";

import "../styles/Home.css";
import "../styles/Admin.css";
import TopNav from "../components/TopNav";
import Footer from "../components/Footer";
import Header from "../components/Header";

function Admin() {
  const [view, setView] = useState("history");
  const [selectedAma, setSelectedAma] = useState(null);

  const amaList = [
    {
      id: 1,
      name: "Krisha",
      status: "ACTIVE",
      funFacts: ["Loves chocolate cake", "Loves to hike", "Fun fact 3", "fun fact 4"],
      blurb: "Hi my name is Krisha and im at a first year at Northeastern. I am from Nashua, NH. My hobbies include baking, reading, playing catch, and going on runs"
    },
    {
      id: 2,
      name: "Ioanna",
      status: "ACTIVE",
      funFacts: ["Fun Fact 1", "Fun fact 2"],
      blurb: "Ioanna's example blurb."
    },
    {
      id: 3,
      name: "Naman",
      status: "ACTIVE",
      funFacts: ["Fun fact 1", "fun fact 2"],
      blurb: "Naman's example blurb."
    },
    {
      id: 2,
      name: "Rishi",
      status: "ACTIVE",
      funFacts: ["Fun Fact 1", "Fun fact 2"],
      blurb: "Rishi's example blurb."
    },
    {
      id: 2,
      name: "Madhav",
      status: "ACTIVE",
      funFacts: ["Fun Fact 1", "Fun fact 2"],
      blurb: "Madhav's example blurb."
    },
    {
      id: 2,
      name: "Evan",
      status: "ACTIVE",
      funFacts: ["Fun Fact 1", "Fun fact 2"],
      blurb: "Evans's example blurb."
    },
    {
      id: 2,
      name: "Grace",
      status: "ACTIVE",
      funFacts: ["Fun Fact 1", "Fun fact 2"],
      blurb: "Grace's example blurb."
    }
  ];

  return (
    <>
      <Header />
      <TopNav />
      <div className="admin_page">
        <div className="toggle">
          <button className="toggle_btn" onClick={() => setView("history")}>
            History
          </button>
          <button className="toggle_btn" onClick={() => setView("select")}>
            Select
          </button>
        </div>

        {view === "history" && (
          <div className="ama_history">
            <p className="p1">
              Feed with the past AMAs, including name, fun facts, and blurb, will show here
            </p>
          </div>
        )}

        {view === "select" && (
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
                  <button className="select_member_btn">
        Select this Member
      </button>
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


export default Admin;
