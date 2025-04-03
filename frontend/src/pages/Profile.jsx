import { useState, useEffect } from "react";

import "../styles/Home.css";
import "../styles/Profile.css";
import "../styles/Admin.css";
import TopNav from "../components/TopNav";
import Footer from "../components/Footer";
import Header from "../components/Header";

function Profile() {
  const user = JSON.parse(localStorage.getItem("user"));
  const [funFacts, setFunFacts] = useState([]);
  const [blurb, setBlurb] = useState("Loading...");

  useEffect(() => {
    if (!user) {
      alert("User not found. Please log in."); // ideally they wouldn't be able to get to this page unless they are logged in so we should always find the user
      return;
    }

    // Get user's blurb and fun facts
    fetch("http://localhost:4001/ama/history/")
      .then((res) => res.json())
      .then((data) => {
        const userAMA = data.message
          .filter((record) => record.user_id === user.id)
          .sort((a, b) => new Date(b.selected_date) - new Date(a.selected_date))[0];

        if (userAMA) {
          setBlurb(userAMA.blurb || "No AMA blurb yet.");

          // Extract fun facts into an array
          const facts = [
            userAMA.fact_1,
            userAMA.fact_2,
            userAMA.fact_3,
            userAMA.fact_4,
            userAMA.fact_5,
          ].filter(Boolean); // Remove null or undefined

          setFunFacts(facts);
        } else {
          setBlurb("No AMA blurb yet.");
          setFunFacts([]);
        }
      })
      .catch((err) => {
        console.error("Error fetching AMA history:", err);
      });
  }, [user]);

  return (
    <>
      <Header />
      <TopNav />
      <p className="p3">Profile</p>

      <div className="profile_page_row">
        <div className="profile_field_column">
          <p className="p2">Name: {user?.name || "N/A"}</p>
        </div>
        <div className="profile_field_column">
          <p className="p2">Email: {user?.email || "N/A"}</p>
        </div>
      </div>

      <div className="profile_page_row">
        <div className="profile_field_lg_column">
          <p className="p2">Fun Facts:</p>
          <ul>
            {funFacts.length > 0 ? (
              funFacts.map((fact, i) => <li key={i} className="p2">{fact}</li>)
            ) : (
              <p className="p2">No fun facts submitted yet.</p>
            )}
          </ul>
        </div>

        <div className="profile_field_lg_column">
          <p className="p2">About Me (AMA Blurb):</p>
          <p className="p2">{blurb}</p>
        </div>
      </div>

      <Footer />
    </>
  );

}

export default Profile;
