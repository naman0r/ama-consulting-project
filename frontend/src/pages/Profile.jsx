import { useState } from "react";

import "../styles/Home.css";
import "../styles/Profile.css";
import "../styles/Admin.css";
import TopNav from "../components/TopNav";
import Footer from "../components/Footer";
import Header from "../components/Header";

function Profile() {
  const name = "[Name]";
  const email = "[Email]";
  const blurb = "[Blurb]";
  const funfacts = "[fun facts]";
  return (
    <>
      <Header />
      <TopNav />
      <div className="profile_page">
      <div className="profile_container">
      <p className="p5">Profile</p>
      <div className="container_content">
      
      <div className="row">
      <div className="smaller_field">
      <p className="p4">Name: {name}</p> </div>
      <div className="smaller_field">
      <p className="p4">Email: {email}</p> </div>
      </div>

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

export default Profile;
