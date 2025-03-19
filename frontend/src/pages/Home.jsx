import { useState } from "react";

import "../styles/Home.css";
import TopNav from "../components/TopNav";
import Footer from "../components/Footer";

function Home() {
  const [count, setCount] = useState(0);

  return (
    <>
      <TopNav />
      <p className="example">
        this is the homepage 'component' in react. note that this is not
        actually a componennt, rathet a page
      </p>
      <Footer />
    </>
  );
}

export default Home;
