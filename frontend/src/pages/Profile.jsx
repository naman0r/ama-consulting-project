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
      <div className="profile_page_row">
        <div className="profile_field_column">
          <p className="p2">Name: {name}</p>
         
        </div>
        <div className="profile_field_column">
          <p className="p2">Email: {email} </p>
        </div>
      </div>
      <div className="profile_page_row">
        <div className="profile_field_lg_column">
          <p className="p2">Fun Facts: </p>
          <p className="p2"> {funfacts} </p> 
        </div>
        <div className="profile_field_lg_column">
          <p className="p2">About Me: </p>
          <p className="p2"> {blurb} </p> 
        </div>
        </div>
      <Footer />
    </>
  );

  <div class='some-page-wrapper'>
  <div class='row'>
    <div class='column'>
      <div class='orange-column'>
        Some Text in Column One
      </div>
    </div>
    <div class='column'>
      <div class='blue-column'>
        Some Text in Column Two
      </div>
    </div>
    <div class='column'>
      <div class='green-column'>
        Some Text in Column Three
      </div>
    </div>
  </div>
  <div class='row 2'>
    <div class='column'>
      <div class='green-column'>
        Some Text in Row 2, Column One
      </div>
    </div>
    <div class='column'>
      <div class='orange-column'>
        Some Text in Row 2, Column Two
      </div>
    </div>
    <div class='column'>
      <div class='blue-column'>
        Some Text in Row2, Column Three
      </div>
    </div>
  </div>
</div>

}

export default Profile;
