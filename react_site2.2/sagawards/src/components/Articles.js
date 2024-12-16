import React from 'react';

function Articles() {
  return (
    <div className="footer-navbar">
        <div className="footer-content">
          <div className="contact-item">
            <i className="fas fa-envelope"></i>
            <img 
              src="/Images/email_logo.png" 
              alt="Email"
              className="social-icon"
            />
            <a href="mailto:sagawards@example.com">sagawards@gmail.com</a>
          </div>
          <div className="contact-item">
            <i className="fas fa-phone"></i>
            <img 
              src="/Images/phone_logo.png" 
              alt="Phone"
              className="social-icon"
            />
            <a href="tel:+1234567890">(323) 549-6707</a>
          </div>
          <div className="contact-item">
            <img 
              src="/Images/insta-logo.png" 
              alt="Instagram"
              className="social-icon"
            />
            <a href="http://instagram.com/sagawards" target="_blank" rel="noopener noreferrer">@sagawards</a>
          </div>
          <div className="contact-item">
            <img 
              src="/Images/facebook-logo.png" 
              alt="Facebook"
              className="social-icon"
            />
            <a href="http://facebook.com/pages/Screen-Actors-Guild-Awards/45132187794" target="_blank" rel="noopener noreferrer">SAG Awards</a>
          </div>
        </div>
      </div>
  );
}

export default Articles;