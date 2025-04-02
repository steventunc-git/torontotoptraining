import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-links">
          <a href="/privacy-policy">Privacy Policy</a>
          <a href="/terms-of-service">Terms of Service</a>
          <a href="/contact">Contact Us</a>
        </div>
        <div className="footer-social">
          <a href="https://facebook.com/yourpage" target="_blank" rel="noopener noreferrer">Facebook</a>
          <a href="https://instagram.com/yourpage" target="_blank" rel="noopener noreferrer">Instagram</a>
          <a href="https://twitter.com/yourpage" target="_blank" rel="noopener noreferrer">Twitter</a>
        </div>
        <p>&copy; 2025 Toronto Top Training. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
