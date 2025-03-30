import { useState } from "react";

import "../styles/Home.css";
import TopNav from "../components/TopNav";
import Footer from "../components/Footer";
import Header from "../components/Header";

function NewMember() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <TopNav />
      <p className="p1">
        New Member
      </p>
      <Footer />
    </>
  );
}

export default NewMember;
