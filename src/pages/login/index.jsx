import React, { useState, useEffect } from "react";
import "./Login.css"; // Import the CSS file for styling
import { useDispatch } from "react-redux";
import { login } from "../../slices/session";
import { Link } from "react-router-dom";

export const Login = () => {
  const [email, setEmail] = useState("test1234@gmail.com");
  const [password, setpassword] = useState("test1234");

  const dispatch = useDispatch();

  const handleLogin = async (e) => {
    e.preventDefault();
    const response = await dispatch(login(email, password));
    console.log("login response is :", response);
    if (response) {
      // Handle login errors
      setErrors(response);
      console.log("login response is :", response);
    }
  };

  const [isMaximized, setIsMaximized] = useState(false);

  const toggleMaximize = () => {
    setIsMaximized(!isMaximized);
  };

  // useEffect(() => {
  //   console.log("username:", username);
  //   console.log("password:", password);
  // }, [username, password]);

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
            Please log in
          </div>
          <form onSubmit={handleLogin}>
            <div className="input-group">
              <label htmlFor="username">Email:</label>
              <input
                type="text"
                id="username"
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
                onChange={(e) => setpassword(e.target.value)}
              />
            </div>
            <button
              // onClick={() => handleLogin()}
              className="login-button"
            >
              Log In
            </button>
          </form>
          <button className="signup-button">
            {/* Sign Up */}
            <Link to="/signup">Sign Up</Link>
          </button>
        </div>
      </div>
    </div>
  );
};
