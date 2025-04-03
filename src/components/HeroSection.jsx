import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './HeroSection.css';

const HeroSection = () => {
  const navigate = useNavigate();
  const [playing, setPlaying] = useState(false);

  const toggleVideo = () => setPlaying(!playing);

  return (
    <div className={`hero-container ${playing ? 'video-active' : ''}`}>
      {playing && (
        <div className="easter-egg-overlay">
          <iframe
            className="easter-egg-iframe"
            src="https://www.youtube.com/embed/okyLAKclleo?autoplay=1&controls=0&rel=0&modestbranding=1"
            title="Easter Egg Video"
            allow="autoplay"
            allowFullScreen
          ></iframe>
        </div>
      )}

      <div className="hero-text">
        <h1>
          Toronto T
          <span className="easter-egg-trigger" onClick={toggleVideo}>o</span>
          p Training
        </h1>
        <p>Personal training. Online programs. Trainer consulting.</p>
        <button className="get-started" onClick={() => window.location = 'mailto:info@torontotoptraining.com'}>
          Get Started
        </button>
        <div className="cta-links">
          <div onClick={() => navigate('/personal-training')}>Personal Training</div>
          <div onClick={() => navigate('/program-design')}>Program Design</div>
          <div onClick={() => navigate('/trainer-consultation')}>Trainer Consultation</div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
