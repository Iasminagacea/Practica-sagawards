import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './components/Home';
import Articles from './components/Articles';
import Nominations from './components/Nominations';
import Awards from './components/Awards';
import Login2 from './components/Login2';
import Register from './components/Register';
import './assets/styles/App.css';

// Create a wrapper component that handles the conditional navbar rendering
function AppContent() {
  const location = useLocation();
  
  // Check if current route is login or register
  const hideNavbar = ['/login', '/register'].includes(location.pathname);

  return (
    <div className="app-container">
      {!hideNavbar && <Navigation />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/nominations" element={<Nominations />} />
        <Route path="/awards" element={<Awards />} />
        <Route path="/login" element={<Login2 />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;