import React, { useState, useEffect } from "react";
import "./styles.css"; // Import the CSS file for styling
import { useDispatch, useSelector } from "react-redux";
import { signUp } from "../../slices/session";
import { Link } from "react-router-dom";

export const Signup = () => {
  const dispatch = useDispatch();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [ConfirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (Password === ConfirmPassword) {
      const data = await dispatch(signUp(username, email, Password));
      console.log("signup data is:", data);
      if (data) {
        setErrors(data);
        console.log(data);
      }
    } else {
      setErrors([
        "Confirm Password field must be the same as the Password field",
      ]);
    }
  };

  const [isMaximized, setIsMaximized] = useState(false);

  const toggleMaximize = () => {
    setIsMaximized(!isMaximized);
  };

  useEffect(() => {
    console.log("username:", username);
    console.log("email:", email);
    console.log("Password:", Password);
    console.log("ConfirmPassword:", ConfirmPassword);
  }, [username]);

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
          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <label htmlFor="username">Username:</label>
              <input
                type="text"
                id="username"
                name="username"
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="input-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="input-group">
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                id="password"
                name="password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="input-group">
              <label htmlFor="confirmPassword">Confirm Password:</label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
            <button className="login-button">Sign Up</button>
          </form>
          <div className="login-or">
            <span>or</span>
          </div>
          <button className="signup-button">Login</button>
        </div>
      </div>
    </div>
  );
};
