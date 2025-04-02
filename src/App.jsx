import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import HeroSection from './components/HeroSection';
import Footer from './components/Footer';

// Placeholder components
const About = () => <div className="page"><h2>About Us</h2><p>Learn about our team and approach.</p></div>;
const Services = () => <div className="page"><h2>Services</h2><p>Explore our training and coaching options.</p></div>;
const Blog = () => <div className="page"><h2>Blog</h2><p>Articles, tips, and news coming soon!</p></div>;
const Contact = () => <div className="page"><h2>Contact</h2><p>Reach out to us directly.</p></div>;

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<HeroSection />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
