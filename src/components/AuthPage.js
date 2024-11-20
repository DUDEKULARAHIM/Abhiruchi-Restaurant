// src/pages/AuthPage.js
import React, { useState } from "react";
import { FaUser, FaPhone, FaEnvelope, FaLock } from "react-icons/fa"; // Import icons from react-icons
import "./AuthPage.css";

function AuthPage() {
  const [isLogin, setIsLogin] = useState(true); // Track which form to show (login or signup)

  const toggleForm = () => {
    setIsLogin(!isLogin); // Toggle between login and signup
  };

  return (
    <div className="auth-container">
      <div className="auth-box">
        <div className="form-toggle">
          <button
            className={`toggle-btn ${isLogin ? "active" : ""}`}
            onClick={() => setIsLogin(true)}
          >
            Login
          </button>
          <button
            className={`toggle-btn ${!isLogin ? "active" : ""}`}
            onClick={() => setIsLogin(false)}
          >
            Sign Up
          </button>
        </div>
        <h2>{isLogin ? "Login" : "Sign Up"}</h2>
        {isLogin ? <LoginForm /> : <SignUpForm />}
      </div>
    </div>
  );
}

// Login Form Component
function LoginForm() {
  return (
    <form className="auth-form">
      <div className="input-group">
        <input type="email" placeholder="Email" required />
        <FaEnvelope className="input-icon" />
      </div>
      <div className="input-group">
        <input type="password" placeholder="Password" required />
        <FaLock className="input-icon" />
      </div>
      <button type="submit">Login</button>
    </form>
  );
}

// Sign Up Form Component
function SignUpForm() {
  return (
    <form className="auth-form">
      <div className="input-group">
        <input type="text" placeholder="Name" required />
        <FaUser className="input-icon" />
      </div>
      <div className="input-group">
        <input type="tel" placeholder="Phone Number" required />
        <FaPhone className="input-icon" />
      </div>
      <div className="input-group">
        <input type="email" placeholder="Email" required />
        <FaEnvelope className="input-icon" />
      </div>
      <div className="input-group">
        <input type="password" placeholder="Password" required />
        <FaLock className="input-icon" />
      </div>
      <div className="input-group">
        <input type="password" placeholder="Confirm Password" required />
        <FaLock className="input-icon" />
      </div>
      <button type="submit">Sign Up</button>
    </form>
  );
}

export default AuthPage;
