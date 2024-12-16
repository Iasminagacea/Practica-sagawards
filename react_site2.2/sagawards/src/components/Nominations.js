import React from 'react';
import '../assets/styles/Nominations.css';

function Nominations() {
  return (
    <div>
      <div className="header-container">
        {/* Dropdown - Category */}
        <div className="dropdown-container">
          <div className="dropdown">
            <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
              Category
              <img src="/Images/drop-down-arrow.png" alt="Dropdown Arrow" className="dropdown-arrow" />
            </button>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="#">26th Annual Screen Actors Guild Awards</a></li>
              <li><a className="dropdown-item" href="#">25th Annual Screen Actors Guild Awards</a></li>
              <li><a className="dropdown-item" href="#">24th Annual Screen Actors Guild Awards</a></li>
              <li><a className="dropdown-item" href="#">23rd Annual Screen Actors Guild Awards</a></li>
              <li><a className="dropdown-item" href="#">22nd Annual Screen Actors Guild Awards</a></li>
              <li><a className="dropdown-item" href="#">21st Annual Screen Actors Guild Awards</a></li>
              <li><a className="dropdown-item" href="#">20th Annual Screen Actors Guild Awards</a></li>
              <li><a className="dropdown-item" href="#">19th Annual Screen Actors Guild Awards</a></li>
              <li><a className="dropdown-item" href="#">18th Annual Screen Actors Guild Awards</a></li>
              <li><a className="dropdown-item" href="#">17rd Annual Screen Actors Guild Awards</a></li>
              <li><a className="dropdown-item" href="#">16nd Annual Screen Actors Guild Awards</a></li>
              <li><a className="dropdown-item" href="#">15st Annual Screen Actors Guild Awards</a></li>
              <li><a className="dropdown-item" href="#">14th Annual Screen Actors Guild Awards</a></li>
              <li><a className="dropdown-item" href="#">13th Annual Screen Actors Guild Awards</a></li>
              <li><a className="dropdown-item" href="#">12th Annual Screen Actors Guild Awards</a></li>
              <li><a className="dropdown-item" href="#">11th Annual Screen Actors Guild Awards</a></li>
              <li><a className="dropdown-item" href="#">10th Annual Screen Actors Guild Awards</a></li>
              <li><a className="dropdown-item" href="#">9th Annual Screen Actors Guild Awards</a></li>
              <li><a className="dropdown-item" href="#">8th Annual Screen Actors Guild Awards</a></li>
              <li><a className="dropdown-item" href="#">7th Annual Screen Actors Guild Awards</a></li>
              <li><a className="dropdown-item" href="#">6th Annual Screen Actors Guild Awards</a></li>
              <li><a className="dropdown-item" href="#">5th Annual Screen Actors Guild Awards</a></li>
              <li><a className="dropdown-item" href="#">4th Annual Screen Actors Guild Awards</a></li>
              <li><a className="dropdown-item" href="#">3rd Annual Screen Actors Guild Awards</a></li>
              <li><a className="dropdown-item" href="#">2nd Annual Screen Actors Guild Awards</a></li>
              <li><a className="dropdown-item" href="#">1st Annual Screen Actors Guild Awards</a></li>
            </ul>
          </div>
        </div>

        {/* Buttons - All, Film, Television, Stunts */}
        <div className="button-container">
          <button className="button-option">All</button>
          <button className="button-option">Film</button>
          <button className="button-option">Television</button>
          <button className="button-option">Stunts</button>
        </div>
      </div>

      {/* Footer */}
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
    </div>
  );
}

export default Nominations;
