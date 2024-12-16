// Home.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/App.css';

function Home() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeIndex2, setActiveIndex2] = useState(0);
  
  const images = [
    '/Images/image1.jpg',
    '/Images/image2.jpg',
    '/Images/image6.jpg',
    '/Images/image7.jpg'
  ];

  const images2 = [
    '/Images/image3.jpg',
    '/Images/image4.jpg',
    '/Images/image5.jpg'
  ];
  
useEffect(() => {
  const interval = setInterval(() => {
    setActiveIndex((current) => (current + 1) % images.length);
  }, 7000); // Kept your original 7-second interval
  return () => clearInterval(interval);
}, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex2((current) => (current + 1) % images2.length);
    }, 5000); // Reduced from 4000
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="homepage-container">
      {/* First slideshow */}
      <div className="slider-container">
        <div className="slideshow-container">
          <div className="slider-track">
            {images.map((image, index) => (
              <div
                key={index}
                className={`slide ${index === activeIndex ? 'active' : ''}`}
              >
                <img src={image} alt={`Slide ${index + 1}`} />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Secondary content with side-by-side layout */}
      <div className="secondary-content">
        <div className="links-box">
          <div className="info-item">
            <Link to="/articles" className="title-link">Articles</Link>
            <span className="link-description">: Profiles and analyses of notable actors.</span>
          </div>
          
          <div className="info-item">
            <Link to="/nominations" className="title-link">Nominations</Link>
            <span className="link-description">: Insights on SAG Awards nominees and achievements.</span>
          </div>
          
          <div className="info-item">
            <Link to="/awards" className="title-link">Awards</Link>
            <span className="link-description">: Recognitions for excellence in various film categories.</span>
          </div>
        </div>

        <div className="slideshow2-container">
          {/* Second slideshow content */}
          <div className="slider-track">
            {images2.map((secondImage, index) => (
              <div
                key={index}
                className={`slide ${index === activeIndex2 ? 'active' : ''}`}
              >
                <img src={secondImage} alt={`Second Slide ${index + 1}`} />
              </div>
            ))}
          </div>
        </div>
      </div>
      
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

      <div className="partners-section">
        <div className="sponsors-title">
          <h2>Partners</h2>
        </div>
        <div className="sponsors-carousel">
          <div className="sponsor-item">
            <img src="/Images/cnb.jpg" alt="CNB" />
          </div>
          <div className="sponsor-item">
            <img src="/Images/people.png" alt="People" />
          </div>
          <div className="sponsor-item">
            <img src="/Images/campari.png" alt="Campari" />
          </div>
          <div className="sponsor-item">
            <img src="/Images/united_airlines.jpg" alt="United" />
          </div>
          <div className="sponsor-item">
            <img src="/Images/coopers.jpg" alt="Coopers" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
