import { useState, useEffect } from "react";

import "../styles/Home.css";
import TopNav from "../components/TopNav";
import Footer from "../components/Footer";
import Header from "../components/Header";

function Home() {
  const name = "[Name]";
  const blurb = "[Blurb]";
  const funfacts = "[fun facts]";
  const [currentAma, setCurrentAma] = useState(null);

  useEffect(() => {
    fetch("http://localhost:4001/ama/history")
      .then((res) => res.json())
      .then((data) => {
        // Filter to only include AMA records that have been sent
        const sentRecords = data.message.filter(
          (entry) => entry.sent_status === true
        );
        // Sort them by selected_date descending (most recent first)
        sentRecords.sort(
          (a, b) => new Date(b.selected_date) - new Date(a.selected_date)
        );
        if (sentRecords.length > 0) {
          setCurrentAma(sentRecords[0]);
        }
      })
      .catch((err) => console.error("Error fetching current AMA:", err));
  }, []);

  // Only display the first fun fact (fact_1) from the current AMA
  const currentFact = currentAma ? currentAma.fact_1 : "[No AMA available]";


  return (
    <>
      <Header />
      <TopNav />

      <p className="p5">
        Current AMA:
      </p>
      <div className="home_page">
        <div className="container">
          <p className="p6">{name}</p>


          <div className="row">
            <div className="large_field">
              <p className="p4">Fun Facts: <br></br>{currentFact}</p>
            </div>
            <div className="large_field">
              <p className="p4">Blurb:<br></br>{blurb}</p>
            </div>
          </div>

        </div>
      </div>

      <Footer />
    </>
  );
}

export default Home;
