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
  const [message, setMessage] = useState({ text: '', type: '' });
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });

    if (errors[name]) {
      setErrors({ ...errors, [name]: '' });
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    setIsLoading(true);
    setMessage({ text: '', type: '' });

    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = 'Name is required';

    if (!formData.email.trim())
      newErrors.email = 'Email is required';
    else if (!formData.email.includes('@') || !formData.email.includes('.'))
      newErrors.email = 'Please enter valid email';

    if (!formData.password)
      newErrors.password = 'Password is required';
    else if (formData.password.length < 6)
      newErrors.password = 'Password must be at least 6 characters';

    if (!formData.confirmPassword)
      newErrors.confirmPassword = 'Please confirm password';
    else if (formData.password !== formData.confirmPassword)
      newErrors.confirmPassword = 'Passwords do not match';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setIsLoading(false);
      return;
    }

    try {

  
      await axios.post('https://dummyjson.com/users/add', {
        firstName: formData.name,
        email: formData.email,
        password: formData.password,
      });

      localStorage.setItem(
        'user',
        JSON.stringify({
          name: formData.name,
          email: formData.email,
          password: formData.password,
        })
      )

      setMessage({
        text: 'Registration Successful!',
        type: 'success',
      });

      setFormData({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
      });

      setTimeout(() => {
        navigate('/login');
      }, 2000);


    } catch (err) {
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
          <p>Join us today</p>
        </div>

        <form onSubmit={handleRegister} className="auth-form">

          <div className="form-group">
            <label>Name</label>
            <input
              name="name"
              value={formData.name}
              onChange={handleChange}
              disabled={isLoading}
            />
            {errors.name && <span className="error-text">{errors.name}</span>}
          </div>

          <div className="form-group">
            <label>Email</label>
            <input
              name="email"
              value={formData.email}
              onChange={handleChange}
              disabled={isLoading}
            />
            {errors.email && <span className="error-text">{errors.email}</span>}
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              disabled={isLoading}
            />
            {errors.password && <span className="error-text">{errors.password}</span>}
          </div>

          <div className="form-group">
            <label>Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              disabled={isLoading}
            />
            {errors.confirmPassword && (
              <span className="error-text">{errors.confirmPassword}</span>
            )}
          </div>

          <button className="auth-btn" disabled={isLoading}>
            {isLoading ? 'Creating...' : 'Register'}
          </button>

        </form>

        {message.text && (
          <div className={`message ${message.type}`}>
            {message.text}
          </div>
        )}

        <div className="auth-footer">
          <p>
            Already have account? <Link to="/login">Login</Link>
          </p>
        </div>

      </div>
    </div>
  );
}

export default Register;











