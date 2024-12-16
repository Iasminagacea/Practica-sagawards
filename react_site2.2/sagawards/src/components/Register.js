import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import '../assets/styles/Register.css';

function Register() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setMessage('Passwords do not match');
      return;
    }
    try {
      const response = await axios.post('http://localhost:3000/register', 
        {
          username,
          password,
          firstName,
          lastName,
          phoneNumber,
          dateOfBirth,
          email
        },
        {
          headers: {
            'Content-Type': 'application/json'
          }
        }
      );
      console.log('Register response:', response.data);
      // Handle successful registration (e.g., navigate to login or homepage)
      navigate('/login');  // You can adjust this as needed
    } catch (error) {
      console.error('Register error details:', {
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

  const toggleShowConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  return (
    <div className="register-wrapper">
      <div className="wrapper">
        <div className="register-box">
          <form onSubmit={handleRegister}>
            <h1>Sign up</h1>
            
            {/* First Name Input */}
            <div className="input-box">
              <input 
                type="text" 
                placeholder="First Name" 
                required 
                value={firstName} 
                onChange={(e) => setFirstName(e.target.value)} 
              />
              <i className='bx bxs-user'></i>
            </div>
            
            {/* Last Name Input */}
            <div className="input-box">
              <input 
                type="text" 
                placeholder="Last Name" 
                value={lastName} 
                onChange={(e) => setLastName(e.target.value)} 
              />
              <i className='bx bxs-user'></i>
            </div>
            
            {/* Phone Number Input */}
            <div className="input-box">
              <input 
                type="tel" 
                placeholder="Phone Number" 
                value={phoneNumber} 
                onChange={(e) => setPhoneNumber(e.target.value)} 
              />
              <i className='bx bxs-phone'></i>
            </div>
            
            {/* Date of Birth Input */}
            <div className="input-box">
              <input 
                type="date" 
                placeholder="Date of Birth" 
                required 
                value={dateOfBirth} 
                onChange={(e) => setDateOfBirth(e.target.value)} 
              />
              <i className='bx bxs-calendar'></i>
            </div>
            
            {/* Email Input */}
            <div className="input-box">
              <input 
                type="email" 
                placeholder="Email" 
                required 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
              />
              <i className='bx bxs-envelope'></i>
            </div>
            
            {/* Username Input */}
            <div className="input-box">
              <input 
                type="text" 
                placeholder="Username" 
                required 
                value={username} 
                onChange={(e) => setUsername(e.target.value)} 
              />
              <i className='bx bxs-user'></i>
            </div>
            
            {/* Password Input */}
            <div className="input-box">
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="Password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <img
                src={showPassword ? "/Images/lock-open_logo.png" : "/Images/password_logo.png"}
                alt="Password Visibility"
                className="password-logo"
                onClick={toggleShowPassword}
                style={{ cursor: 'pointer' }}
              />
              <i className='bx bxs-lock'></i>
            </div>
            
            {/* Confirm Password Input */}
            <div className="input-box">
              <input
                type={showConfirmPassword ? 'text' : 'password'}
                placeholder="Confirm Password"
                required
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              <img
                src={showConfirmPassword ? "/Images/lock-open_logo.png" : "/Images/password_logo.png"}
                alt="Password Visibility"
                className="password-logo"
                onClick={toggleShowConfirmPassword}
                style={{ cursor: 'pointer' }}
              />
              <i className='bx bxs-lock'></i>
            </div>
            
            {/* Submit Button */}
            <button type="submit" className="btn">Sign up</button>
            
            {/* Login Link */}
            <div className="register-link">
              <p>Already have an account? <Link to="/login">Login</Link></p>
            </div>
            
            {/* Error/Success Message */}
            {message && <p className="message">{message}</p>}
          </form>
          
          {/* Home Button */}
          <button className="btn home-btn" onClick={() => navigate('/')}>
            <img src="/Images/home_logo.png" alt="Home Logo" className="home-logo" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Register;