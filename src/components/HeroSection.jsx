import React, { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
// import IntakeFlow from './intake/IntakeFlow'
import './HeroSection.css'

function HeroSection() {
  const navigate = useNavigate()
  const [showEasterEgg, setShowEasterEgg] = useState(false)
  // const [showIntake, setShowIntake] = useState(false)
  const videoRef = useRef(null)

  useEffect(() => {
    const handleClickOutside = () => {
      if (showEasterEgg) setShowEasterEgg(false)
    }

    if (showEasterEgg) {
      document.addEventListener('click', handleClickOutside)
    } else {
      document.removeEventListener('click', handleClickOutside)
    }

    return () => {
      document.removeEventListener('click', handleClickOutside)
    }
  }, [showEasterEgg])

  return (
    <section className={`hero-section ${showEasterEgg ? 'video-playing' : ''}`}>
      {showEasterEgg && (
        <video
          ref={videoRef}
          className="easter-egg-background"
          src="/easter-egg-final.mp4"
          autoPlay
          controls={false}
          playsInline
          onEnded={() => setShowEasterEgg(false)}
        />
      )}
      <div className="hero-content">
        <h1 className="hero-title">
          Toronto T
          <span className="easter-egg-trigger" onClick={(e) => {
            e.stopPropagation()
            setShowEasterEgg(true)
          }}>o</span>
          p Training
        </h1>
        <p className="hero-subtitle">
          Personal training. Online programs. Trainer consulting.
        </p>
        <a className="get-started-button" href="mailto:intake@torontotoptraining.com">Get Started</a>
        <div className="cta-section">
          <div onClick={() => navigate('/personal-training')} style={{ cursor: 'pointer' }}>
            <strong>Personal Training</strong>
            <p>1-on-1 sessions in-person or virtual. Goal-driven and progress-focused.</p>
          </div>
          <div onClick={() => navigate('/program-design')} style={{ cursor: 'pointer' }}>
            <strong>Online Programming</strong>
            <p>Custom plans with workouts, meals, and supplement guidance.</p>
          </div>
          <div onClick={() => navigate('/trainer-consulting')} style={{ cursor: 'pointer' }}>
            <strong>Trainer Consulting</strong>
            <p>Coaching for trainers to better serve tough or stuck clients.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
