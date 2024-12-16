import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../assets/styles/Login2.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'email') setEmail(value);
    if (name === 'password') setPassword(value);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/api/auth/login', 
        { email, password },
        {
          headers: {
            'Content-Type': 'application/json'
          }
        }
      );
      console.log('Login response:', response.data);
      // Handle successful login
    } catch (error) {
      console.error('Login error details:', {
        status: error.response?.status,
        data: error.response?.data,
        message: error.message,
        config: error.config
      });
      setMessage(`Error: ${error.response?.data?.message || error.message}`);
    }
  };
  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="login-wrapper">
      <div className="wrapper">
        <div className="login-box">
          <form onSubmit={handleFormSubmit}>
            <h1>Login</h1>
            <div className="input-box">
              <img src="/Images/email_logo.png" alt="Email Logo" className="email-logo" />
              <input
                type="email"
                name="email"
                placeholder="Email"
                required
                value={email}
                onChange={handleInputChange}
              />
              <i className='bx bxs-user'></i>
            </div>
            <div className="input-box">
              <img
                src={showPassword ? "/Images/lock-open_logo.png" : "/Images/password_logo.png"}
                alt="Password Logo"
                className="password-logo"
                onClick={toggleShowPassword}
                style={{ cursor: 'pointer' }}
              />
              <input
                type={showPassword ? 'text' : 'password'}
                name="password"
                placeholder="Password"
                required
                value={password}
                onChange={handleInputChange}
              />
              <i className='bx bxs-lock'></i>
            </div>
            <div className="remember-forgot">
              <label><input type="checkbox" /> Remember me</label>
            </div>
            <button type="submit" className="btn">Login</button>
            <div className="register-link">
              <p>Don't have an account? <a href="/register">Register</a></p>
            </div>
            {message && <p className="message">{message}</p>}
          </form>
          <button className="btn home-btn" onClick={() => navigate('/')}>
            <img src="\Images\home_logo.png" alt="Home Logo" className="home-logo" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
