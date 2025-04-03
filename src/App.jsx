import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import HeroSection from './components/HeroSection';
import Footer from './components/Footer';
import PersonalTraining from './pages/PersonalTraining';
import ProgramDesign from './pages/ProgramDesign';
import TrainerConsultation from './pages/TrainerConsultation';

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<HeroSection />} />
        <Route path="/personal-training" element={<PersonalTraining />} />
        <Route path="/program-design" element={<ProgramDesign />} />
        <Route path="/trainer-consultation" element={<TrainerConsultation />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
