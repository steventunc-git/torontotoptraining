import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HeroSection from './components/HeroSection'
import PersonalTraining from './pages/PersonalTraining'
import ProgramDesign from './pages/ProgramDesign'
import TrainerConsultation from './pages/TrainerConsultation'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HeroSection />} />
        <Route path="/personal-training" element={<PersonalTraining />} />
        <Route path="/program-design" element={<ProgramDesign />} />
        <Route path="/trainer-consultation" element={<TrainerConsultation />} />
      </Routes>
    </Router>
  )
}

export default App
