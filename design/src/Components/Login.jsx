import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import "./Auth.css";

function Login({ onLogin }) {
  // FORM DATA
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  // ERRORS
  const [errors, setErrors] = useState({});

  // MESSAGE
  const [message, setMessage] = useState({
    text: "",
    type: "",
  });

  // LOADING
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  // HANDLE CHANGE
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });

    // REMOVE ERROR WHEN USER TYPES
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: "",
      });
    }
  };

  // HANDLE LOGIN
  const handleLogin = async (e) => {
    e.preventDefault();

    setIsLoading(true);

    setMessage({
      text: "",
      type: "",
    });

    const newErrors = {};

    // EMAIL VALIDATION
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    }

    // PASSWORD VALIDATION
    if (!formData.password) {
      newErrors.password = "Password is required";
    }

    // SHOW ERRORS
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);

      setIsLoading(false);

      return;
    }

    try {
      // DUMMY API
      await axios.post("https://dummyjson.com/auth/login", {
        username: formData.email,

        password: formData.password,
      });
    } catch (err) {
      console.log("API ignored");
    }

    // GET USER FROM LOCAL STORAGE
    const storedUser = JSON.parse(localStorage.getItem("user"));

    // CHECK LOGIN
    if (
      storedUser &&
      storedUser.email === formData.email &&
      storedUser.password === formData.password
    ) {
      // SAVE LOGIN STATE
      localStorage.setItem("isLoggedIn", "true");

      localStorage.setItem("token", "dummy-token");

      localStorage.setItem("currentUser", JSON.stringify(storedUser));

      // SUCCESS MESSAGE
      setMessage({
        text: "Login Successful!",
        type: "success",
      });

      // REDIRECT
      setTimeout(() => {
        onLogin(storedUser.name);

        navigate("/");
      }, 2000);
    } else {
      // INVALID MESSAGE
      setMessage({
        text: "Invalid Credentials!",
        type: "error",
      });
    }

    setIsLoading(false);
  };

  return (
    <div className="auth-wrapper">
      <div className="auth-container">
        {/* HEADER */}
        <div className="auth-header">
          <h2>Welcome Back</h2>

          <p>Login to continue</p>
        </div>

        {/* FORM */}
        <form onSubmit={handleLogin} className="auth-form">
          {/* EMAIL */}
          <div className="form-group">
            <label>Email</label>

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              disabled={isLoading}
            />

            {errors.email && <span className="error-text">{errors.email}</span>}
          </div>

          {/* PASSWORD */}
          <div className="form-group">
            <label>Password</label>

            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              disabled={isLoading}
            />

            {errors.password && (
              <span className="error-text">{errors.password}</span>
            )}
          </div>

          {/* BUTTON */}
          <button className="auth-btn" disabled={isLoading}>
            {isLoading ? "Logging in..." : "Login"}
          </button>
        </form>

        {/* MESSAGE */}
        {message.text && (
          <div className={`message ${message.type}`}>{message.text}</div>
        )}

        {/* FOOTER */}
        <div className="auth-footer">
          <p>
            No account? <Link to="/register">Register</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
