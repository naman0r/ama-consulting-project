import { useState } from "react";

import "../styles/Home.css";
import TopNav from "../components/TopNav";
import Footer from "../components/Footer";
import Header from "../components/Header";

function Home() {
  
  return (
    <>
      <Header />
      <TopNav />
      <div className="home_page">
      <p className="p1">
        Our website will automate the AMA selection process, having a place where members can submit fun facts and a personal blurb.
        Then, each week, a member is chosen at random and the website will generate a response that can be posted in Slack.
      </p>
      <p className="p5">
        Current AMA:
      </p>
      <div className="ama_feed">
      <p className="p1">
        feed with the current AMA, including name, fun facts, and blurb,  will show here
      </p>
      </div>
      </div>

      <Footer />
    </>
  );
}

export default Home;
