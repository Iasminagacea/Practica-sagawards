import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/Navigation.css';


function Navigation() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-left">
          <Link className="navbar-brand" to="/">
            <img src="/Images/logo2.png" alt="SAG Awards Logo" className="navbar-logo" />
            SAG Awards
          </Link>
        </div>
        <div className="navbar-right">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/login">Login/Register</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
