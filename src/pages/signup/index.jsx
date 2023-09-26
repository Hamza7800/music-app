import React, { useState } from "react";
import "./styles.css"; // Import the CSS file for styling

export const Signup = () => {
  const [isMaximized, setIsMaximized] = useState(false);

  const toggleMaximize = () => {
    setIsMaximized(!isMaximized);
  };

  return (
    <div className={`login-container ${isMaximized ? "maximized" : ""}`}>
      <div className="login-box">
        <div className="login-title-bar">
          <div className="logo">
            <img src="xpLogo.png" alt="Windows Logo" />
          </div>
          <div className="login-title">Golden Era Grooves</div>
          <div className="window-controls">
            <button className="minimize-button">_</button>
            <button className="maximize-button" onClick={toggleMaximize}>
              {isMaximized ? "◻" : "□"}
            </button>
            <button className="close-button">X</button>
          </div>
        </div>
        <div className="login-content">
          <div className="welcome-message">
            Golden Era Grooves
            <br />
            Please sign up
          </div>
          <form>
            <div className="input-group">
              <label htmlFor="username">Username:</label>
              <input type="text" id="username" name="username" />
            </div>
            <div className="input-group">
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" />
            </div>
            <div className="input-group">
              <label htmlFor="password">Password:</label>
              <input type="password" id="password" name="password" />
            </div>
            <div className="input-group">
              <label htmlFor="confirmPassword">Confirm Password:</label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
              />
            </div>
            <button className="login-button">Sign Up</button>
          </form>
          <div className="login-or">
            <span>or</span>
          </div>
          <button className="signup-button">Sign Up</button>
        </div>
      </div>
    </div>
  );
};
