import { useState } from "react";

import "../styles/Home.css";
import "../styles/Profile.css";
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
      <p className="p3">Profile</p>
      <div className="profile_page">
        <div className="profile_field">
          <p className="p2">Name: {name}</p>
         
        </div>
        <div className="profile_field">
          <p className="p2">Email: {email} </p>
        </div>
        <div className="profile_field_lg">
          <p className="p2">Fun Facts: </p>
          <p className="p2"> {funfacts} </p> 
        </div>
        <div className="profile_field_lg">
          <p className="p2">About Me: </p>
          <p className="p2"> {blurb} </p> 
        </div>
        </div>
      <Footer />
    </>
  );
}

export default Profile;
