// ==========================
// LOGIN.JSX
// ==========================

import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import './Auth.css';

function Login({ onLogin }) {

  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const [errors, setErrors] = useState({});

  const [message, setMessage] = useState({
    text: '',
    type: '',
  });

  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();



  // INPUT CHANGE
  const handleChange = (e) => {

    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });

    if (errors[name]) {

      setErrors({
        ...errors,
        [name]: '',
      });
    }
  };



  // LOGIN FUNCTION
  const handleLogin = async (e) => {

    e.preventDefault();

    setIsLoading(true);

    setMessage({
      text: '',
      type: '',
    });

    const newErrors = {};



    // USERNAME VALIDATION
    if (!formData.username.trim()) {

      newErrors.username = 'Username is required';
    }



    // PASSWORD VALIDATION
    if (!formData.password) {

      newErrors.password = 'Password is required';
    }



    // STOP IF ERRORS
    if (Object.keys(newErrors).length > 0) {

      setErrors(newErrors);

      setIsLoading(false);

      return;
    }



    try {

      // LOGIN API
      const response = await axios.post(
        'https://dummyjson.com/auth/login',
        {
          username: formData.username,
          password: formData.password,
        }
      );



      console.log(response.data);



      // SAVE TOKEN
      localStorage.setItem(
        'token',
        response.data.accessToken
      );



      localStorage.setItem(
        'isLoggedIn',
        'true'
      );



      // SUCCESS
      setMessage({
        text: 'Login Successful!',
        type: 'success',
      });



      // REDIRECT
      setTimeout(() => {

        onLogin(response.data.firstName);

        navigate('/');

      }, 1500);

    } catch (error) {

      console.log(error);

      setMessage({
        text: 'Invalid Credentials!',
        type: 'error',
      });

    } finally {

      setIsLoading(false);
    }
  };



  return (
    <div className="auth-wrapper">

      <div className="auth-container">

        <div className="auth-header">
          <h2>Welcome Back!</h2>
          <p>Login to access your account</p>
        </div>



        <form
          onSubmit={handleLogin}
          className="auth-form"
        >

          {/* USERNAME */}
          <div className="form-group">

            <label>Username</label>

            <input
              type="text"
              name="username"
              placeholder="Enter username"
              value={formData.username}
              onChange={handleChange}
              disabled={isLoading}
            />

            {errors.username && (
              <span className="error-text">
                {errors.username}
              </span>
            )}

          </div>



          {/* PASSWORD */}
          <div className="form-group">

            <label>Password</label>

            <input
              type="password"
              name="password"
              placeholder="Enter password"
              value={formData.password}
              onChange={handleChange}
              disabled={isLoading}
            />

            {errors.password && (
              <span className="error-text">
                {errors.password}
              </span>
            )}

          </div>



          {/* BUTTON */}
          <button
            type="submit"
            className="auth-btn"
            disabled={isLoading}
          >

            {isLoading
              ? 'Logging in...'
              : 'Login'}

          </button>

        </form>



        {/* MESSAGE */}
        {message.text && (

          <div className={`message ${message.type}`}>
            {message.text}
          </div>

        )}



        <div className="auth-footer">

          <p>
            Don't have an account?

            <Link to="/register">
              Register here
            </Link>

          </p>

        </div>

      </div>
    </div>
  );
}

export default Login;










