import React, { useState } from "react";
import "./Login.css"; // Import the CSS file for styling

export const Login = () => {
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
          <div className="login-title">Windows XP</div>
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
            Please log in
          </div>
          <form>
            <div className="input-group">
              <label htmlFor="username">Username:</label>
              <input type="text" id="username" name="username" />
            </div>
            <div className="input-group">
              <label htmlFor="password">Password:</label>
              <input type="password" id="password" name="password" />
            </div>
            <button className="login-button">Log In</button>
          </form>
        </div>
      </div>
    </div>
  );
};
