import { useState } from "react";

import "../styles/Home.css";
import TopNav from "../components/TopNav";
import Footer from "../components/Footer";
import Header from "../components/Header";

function Home() {
  const name = "[Name]";
  const blurb = "[Blurb]";
  const funfacts = "[fun facts]";


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
      <p className="p4">Fun Facts: <br></br>{funfacts}</p> 
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
