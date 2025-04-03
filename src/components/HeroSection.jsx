import React from 'react';
import { useNavigate } from 'react-router-dom';
import './HeroSection.css';

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <div className="hero-container">
      <img src="/hero.jpg" alt="Toronto Top Training" className="hero-image" />
      <div className="hero-text">
        <h1>Toronto Top Training</h1>
        <p>Choose your path below to get started:</p>
        <div className="cta-group">
          <button className="cta-button" onClick={() => navigate('/personal-training')}>Personal Training</button>
          <button className="cta-button" onClick={() => navigate('/program-design')}>Program Design</button>
          <button className="cta-button" onClick={() => navigate('/trainer-consultation')}>Trainer Consultation</button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
