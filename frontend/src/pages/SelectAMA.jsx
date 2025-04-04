import { useState } from "react";

import "../styles/Home.css";
import "../styles/Admin.css";
import TopNav from "../components/TopNav";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { Link, useLocation } from "react-router-dom";

function SelectAMA() {
  
const [selectedAma, setSelectedAma] = useState(null);

const amaList = [
{
id: 1,
name: "Krisha",
status: "ACTIVE",
funFacts: ["Loves chocolate cake", "Loves to hike", "Fun fact 3", "Fun fact 4"],
blurb: "Hi my name is Krisha and I’m a first year at Northeastern...",
},
{
id: 2,
name: "Ioanna",
status: "ACTIVE",
funFacts: ["Fun Fact 1", "Fun Fact 2"],
blurb: "Ioanna's example blurb.",
},
{
id: 3,
name: "Naman",
status: "ACTIVE",
funFacts: ["Fun Fact 1", "Fun Fact 2"],
blurb: "Naman's example blurb.",
},
{
id: 4,
name: "Rishi",
status: "ACTIVE",
funFacts: ["Fun Fact 1", "Fun Fact 2"],
blurb: "Rishi's example blurb.",
},
{
id: 5,
name: "Madhav",
status: "ACTIVE",
funFacts: ["Fun Fact 1", "Fun Fact 2"],
blurb: "Madhav's example blurb.",
},
{
id: 6,
name: "Evan",
status: "ACTIVE",
funFacts: ["Fun Fact 1", "Fun Fact 2"],
blurb: "Evan's example blurb.",
},
{
id: 7,
name: "Grace",
status: "ACTIVE",
funFacts: ["Fun Fact 1", "Fun Fact 2"],
blurb: "Grace's example blurb.",
}
];

const location = useLocation();

const path = location.pathname;
  
const getActiveButton = () => {
    if (location.pathname === "/admin") {
      return "history";
    }
    if (location.pathname === "/select") {
      return "select";
    }
    return null; 
  };
  
  const activeButton = getActiveButton();

  return (
    <>
      <Header />
      <TopNav />
    <div className="admin_page">
    <div className="toggle">
        <Link className="toggle_link" to="/admin">  
      <button className={`hist_btn ${activeButton === 'history' ? 'active' : ''}`}>
        History </button> </Link>
        <Link className="toggle_link" to="/select">
      <button className={`select_btn ${activeButton === 'select' ? 'active' : ''}`}>
        Select</button>
      </Link>
    </div>

{path === "/select" && (
<div className="select_view">
<div className="card_grid">
{amaList.map((ama) => (
<div
key={ama.id}
className="ama_card"
onClick={() => setSelectedAma(ama)}
>
<h4>{ama.name}</h4>
<p className={ama.status === "ACTIVE" ? "active" : "inactive"}>
{ama.status}
</p>
<ul>
{ama.funFacts.map((fact, i) => (
<li key={i}>{fact}</li>
))}
</ul>
</div>
))}
</div>

<div className="card_detail">
{selectedAma ? (
<>
<h2>{selectedAma.name}</h2>
<p>Status: {selectedAma.status}</p>
<h4>Fun Facts</h4>
<ul>
{selectedAma.funFacts.map((fact, i) => (
<li key={i}>{fact}</li>
))}
</ul>
<h4>Blurb</h4>
<p>{selectedAma.blurb}</p>
<button className="select_member_btn">Select this Member</button>
</>
) : (
<p>Select a card to view more info</p>
)}
</div>
</div>
)}
</div>
<Footer />
</>
);

}

 // For /select cards
 const [selectedAma, setSelectedAma] = useState(null);

 const amaList = [
   {
     id: 1,
     name: "Krisha",
     status: "ACTIVE",
     funFacts: ["Loves chocolate cake", "Loves to hike", "Fun fact 3", "Fun fact 4"],
     blurb: "Hi my name is Krisha and I’m a first year at Northeastern...",
   },
   {
     id: 2,
     name: "Ioanna",
     status: "ACTIVE",
     funFacts: ["Fun Fact 1", "Fun Fact 2"],
     blurb: "Ioanna's example blurb.",
   },
   {
     id: 3,
     name: "Naman",
     status: "ACTIVE",
     funFacts: ["Fun Fact 1", "Fun Fact 2"],
     blurb: "Naman's example blurb.",
   },
   {
     id: 4,
     name: "Rishi",
     status: "ACTIVE",
     funFacts: ["Fun Fact 1", "Fun Fact 2"],
     blurb: "Rishi's example blurb.",
   },
   {
     id: 5,
     name: "Madhav",
     status: "ACTIVE",
     funFacts: ["Fun Fact 1", "Fun Fact 2"],
     blurb: "Madhav's example blurb.",
   },
   {
     id: 6,
     name: "Evan",
     status: "ACTIVE",
     funFacts: ["Fun Fact 1", "Fun Fact 2"],
     blurb: "Evan's example blurb.",
   },
   {
     id: 7,
     name: "Grace",
     status: "ACTIVE",
     funFacts: ["Fun Fact 1", "Fun Fact 2"],
     blurb: "Grace's example blurb.",
   }
 ];

 const path = location.pathname;

 return (
   <>
     <Header />
     <TopNav />
     <div className="admin_page">

       {/* Toggle Buttons */}
       <div className="toggle">
         <Link className="toggle_link" to="/admin">
           <button className="toggle_btn">History</button>
         </Link>
         <Link className="toggle_link" to="/select">
           <button className="toggle_btn">Select</button>
         </Link>
       </div>

       {/* === HISTORY PAGE === */}
       {path === "/admin" && (
         <div className="container">
           <p className="p5">AMA History</p>
           <div className="history_header">
             <button className="prev_ama" onClick={handlePrev}>
               <i className="fa-solid fa-arrow-left"></i>
             </button>
             <p className="date_text">{date}</p>
             <button className="next_ama" onClick={handleNext}>
               <i className="fa-solid fa-arrow-right"></i>
             </button>
           </div>

           <div className="container_content">
             <div className="small_field">
               <p className="p4">Name: {name}</p>
             </div>
             <div className="row">
               <div className="large_field">
                 <p className="p4">Fun Facts:<br />{funfacts}</p>
               </div>
               <div className="large_field">
                 <p className="p4">Blurb:<br />{blurb}</p>
               </div>
             </div>
           </div>
         </div>
       )}

       {/* === SELECT PAGE === */}
       {path === "/select" && (
         <div className="select_view">
           <div className="card_grid">
             {amaList.map((ama) => (
               <div
                 key={ama.id}
                 className="ama_card"
                 onClick={() => setSelectedAma(ama)}
               >
                 <h4>{ama.name}</h4>
                 <p className={ama.status === "ACTIVE" ? "active" : "inactive"}>
                   {ama.status}
                 </p>
                 <ul>
                   {ama.funFacts.map((fact, i) => (
                     <li key={i}>{fact}</li>
                   ))}
                 </ul>
               </div>
             ))}
           </div>

           <div className="card_detail">
             {selectedAma ? (
               <>
                 <h2>{selectedAma.name}</h2>
                 <p>Status: {selectedAma.status}</p>
                 <h4>Fun Facts</h4>
                 <ul>
                   {selectedAma.funFacts.map((fact, i) => (
                     <li key={i}>{fact}</li>
                   ))}
                 </ul>
                 <h4>Blurb</h4>
                 <p>{selectedAma.blurb}</p>
                 <button className="select_member_btn">Select this Member</button>
               </>
             ) : (
               <p>Select a card to view more info</p>
             )}
           </div>
         </div>
       )}
     </div>
     <Footer />
   </>
 );

export default SelectAMA;
