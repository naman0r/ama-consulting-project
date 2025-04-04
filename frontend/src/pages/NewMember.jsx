import { useState } from "react";

import "../styles/Home.css";
import "../styles/NewMember.css";
import TopNav from "../components/TopNav";
import Footer from "../components/Footer";
import Header from "../components/Header";

const NewMember = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    funFacts: ["", "", "", "", ""],
    blurb: "",
    slackId: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFunFactChange = (index, value) => {
    const updatedFacts = [...formData.funFacts];
    updatedFacts[index] = value;
    setFormData({ ...formData, funFacts: updatedFacts });
  };

  

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch('http://localhost:4001/ama/new_member', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
  
      const result = await response.json(); // Always parse JSON first
      
      if (!response.ok) {
        // Show backend's specific error message
        throw new Error(result.error || 'Submission failed');
      }
  
      alert('Member added successfully!');
      // Reset form...
    } catch (error) {
      console.error('Full error:', error);
      alert(`Error: ${error.message}`); // Now shows specific backend errors
    }
  };
  
  

  return (
    <>
      <Header />
      <TopNav />
    <div className="newmem_page">
      <p className="p3">Submit Your AMA</p>
      <form onSubmit={handleSubmit}>
        <p className="p2">Enter your name:
        <input 
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your Name"
          className="p4"
        /> </p>
        
      <p className="p2">Enter your email:
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Your Email"
          className="p4"
        /> </p>

          <p className="p2">
            Enter your email:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              className="p4"
            />{" "}
          </p>

          <p className="p2">
            Create your password:
            <input
              type="text"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Password"
              className="p4"
            />{" "}
          </p>
          <p className="p2">
            Enter your Slack ID:
            <input
              type="text"
              name="slackId"
              value={formData.slackId}
              onChange={handleChange}
              placeholder="Your Name"
              className="p4"
            />
          </p>
          <p className="p2">Enter 5 Fun Facts and a short description:</p>
          {formData.funFacts.map((fact, index) => (
            <textarea
              className="textarea_facts"
              key={index}
              type="text"
              value={fact}
              onChange={(e) => handleFunFactChange(index, e.target.value)}
              placeholder={`Fun Fact #${index + 1}`}
            ></textarea>
          ))}

          <textarea
            className="textarea_blurb"
            name="blurb"
            value={formData.blurb}
            onChange={handleChange}
            placeholder="Write a short personal blurb..."
          ></textarea>

          <button className="submit_btn">Submit</button>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default NewMember;