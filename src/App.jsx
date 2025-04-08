import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HeroSection from './components/HeroSection'
import PersonalTraining from './pages/PersonalTraining'
import ProgramDesign from './pages/ProgramDesign'
import TrainerConsult from './pages/TrainerConsult'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HeroSection />} />
        <Route path="/personal-training" element={<PersonalTraining />} />
        <Route path="/program-design" element={<ProgramDesign />} />
        <Route path="/trainer-consult" element={<TrainerConsult />} />  
      </Routes>
    </Router>
  )
}

export default App
