import React from 'react';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <div className="hero-container">
      <img src="/hero.jpg" alt="Toronto Top Training" className="hero-image" />
      <div className="hero-text">
        <h1>Welcome to Toronto Top Training</h1>
        <p>Elevate Your Fitness Journey with Us</p>
        <a href="/services" className="cta-button">Explore Services</a>
      </div>
    </div>
  );
};

export default HeroSection;
