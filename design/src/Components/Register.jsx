import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Auth.css';

function Register() {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
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

    // REMOVE ERROR ON TYPING
    if (errors[name]) {

      setErrors({
        ...errors,
        [name]: '',
      });
    }
  };



  // REGISTER FUNCTION
  const handleRegister = async (e) => {

    e.preventDefault();

    setIsLoading(true);

    setMessage({
      text: '',
      type: '',
    });

    const newErrors = {};



    // NAME VALIDATION
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }



    // EMAIL VALIDATION
    if (!formData.email.trim()) {

      newErrors.email = 'Email is required';

    } else if (
      !formData.email.includes('@') ||
      !formData.email.includes('.')
    ) {

      newErrors.email = 'Please enter valid email';
    }



    // PASSWORD VALIDATION
    if (!formData.password) {

      newErrors.password = 'Password is required';

    } else if (formData.password.length < 6) {

      newErrors.password =
        'Password must be at least 6 characters';
    }



    // CONFIRM PASSWORD
    if (!formData.confirmPassword) {

      newErrors.confirmPassword =
        'Please confirm password';

    } else if (
      formData.password !== formData.confirmPassword
    ) {

      newErrors.confirmPassword =
        'Passwords do not match';
    }



    // STOP IF ERRORS
    if (Object.keys(newErrors).length > 0) {

      setErrors(newErrors);

      setIsLoading(false);

      return;
    }



    try {

      // REGISTER API
      const response = await axios.post(
        'https://dummyjson.com/users/add',
        {
          firstName: formData.name,
          email: formData.email,
          password: formData.password,
        }
      );



      console.log(response.data);



      // SAVE USER
      localStorage.setItem(
        'registeredUser',
        JSON.stringify({
          username: 'emilys',
          password: 'emilyspass',
        })
      );



      // SUCCESS MESSAGE
      setMessage({
        text: 'Registration Successful!',
        type: 'success',
      });



      // RESET FORM
      setFormData({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
      });



      // REDIRECT
      setTimeout(() => {
        navigate('/login');
      }, 1500);

    } catch (error) {

      console.log(error);

      setMessage({
        text: 'Something went wrong!',
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
          <h2>Create Account</h2>
          <p>Join us today and get started</p>
        </div>



        <form
          onSubmit={handleRegister}
          className="auth-form"
        >

          {/* NAME */}
          <div className="form-group">

            <label>Full Name</label>

            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              disabled={isLoading}
            />

            {errors.name && (
              <span className="error-text">
                {errors.name}
              </span>
            )}

          </div>



          {/* EMAIL */}
          <div className="form-group">

            <label>Email</label>

            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              disabled={isLoading}
            />

            {errors.email && (
              <span className="error-text">
                {errors.email}
              </span>
            )}

          </div>



          {/* PASSWORD */}
          <div className="form-group">

            <label>Password</label>

            <input
              type="password"
              name="password"
              placeholder="Create password"
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



          {/* CONFIRM PASSWORD */}
          <div className="form-group">

            <label>Confirm Password</label>

            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm password"
              value={formData.confirmPassword}
              onChange={handleChange}
              disabled={isLoading}
            />

            {errors.confirmPassword && (
              <span className="error-text">
                {errors.confirmPassword}
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
              ? 'Creating Account...'
              : 'Register'}

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
            Already have an account?

            <Link to="/login">
              Login here
            </Link>

          </p>

        </div>

      </div>
    </div>
  );
}

export default Register;









