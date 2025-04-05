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
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:4001/users/');
      const data = await response.json();
      console.log(data);

      if (!response.ok) {
        throw new Error(data.message || 'Failed to fetch users');
      }

      // Find a user matching the email and password
      const matchedUser = data.users.find(user => user.email === email && user.password === password);

      if (matchedUser) {
        sessionStorage.setItem("user", JSON.stringify(matchedUser));
        navigate(`/profile`);
      } else {
        alert('Invalid email or password');
      }

      setEmail("");
      setPassword("");
    } catch (err) {
      alert('Error: ' + err.message);
    }
  };

  return (
    <div>
      <Header />
      <TopNav />

      <main className="login_page">
        <p className="p5">Login</p>
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
          <button className="login_btn">
            Login
          </button>
        </form>
      </main>
      <Footer />
    </div>
  );
}

export default Login;
