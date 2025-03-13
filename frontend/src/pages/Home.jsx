import { useState } from "react";

import "../styles/Home.css";
import TopNav from "../components/TopNav";
import Footer from "../components/Footer";
import Header from "../components/Header";

function Home() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <TopNav />
      <p className="p1">
        Our website will automate the AMA selection process, having a place where members can submit fun facts and a personal blurb.
        Then, each week, a member is chosen at random and the website will generate a response that can be posted in Slack.
      </p>
      <Footer />
    </>
  );
}

export default Home;
