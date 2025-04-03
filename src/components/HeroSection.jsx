import React from 'react';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <div className="hero-container">
      <img src="/hero.jpg" alt="Toronto Top Training" className="hero-image" />
      <div className="hero-text">
        <h1>Welcome to Toronto Top Training</h1>
        <p>Elevate Your Fitness Journey with Us</p>
        <a
          href="mailto:info@torontotoptraining.com?subject=Personal%20Training%20Inquiry&body=Hi%2C%20I'm%20interested%20in%20getting%20started%20with%20Toronto%20Top%20Training..."
          className="cta-button"
        >
          Get Started
        </a>
      </div>
    </div>
  );
};

export default HeroSection;
