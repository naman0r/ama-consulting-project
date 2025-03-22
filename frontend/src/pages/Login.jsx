import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';


import "../styles/Home.css";
import "../styles/Login.css";
import TopNav from "../components/TopNav";
import Footer from "../components/Footer";
import Header from "../components/Header";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

// Use navigate for routing
const navigate = useNavigate();

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    navigate(`/profile/${email}`);

    // Reset form fields (optional)
    setEmail("");
    setPassword("");
    setName("");
    setYear("");
    setClassName("");
  };

  return (
    <div>
      <Header />
      <TopNav />

      <main className="login_page">
      <p className="p3">Login</p>
      <form onSubmit={handleSubmit}>
        <div>
          <p className="p2">Email:</p>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <p className="p2">Password:</p>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <Link className="login_link" to="/admin">
        <button className="login_btn">
          Login
        </button>
        </Link>
      </form>
      </main>
      <Footer />
    </div>
  );
}

export default Login;
