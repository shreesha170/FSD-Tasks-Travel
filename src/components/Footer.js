// Footer.js
import React from 'react';
import '../styles/Footer.css'; // Importing the CSS

const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; 2024 Travel Explorer. All rights reserved.</p>
      <div className="social-links">
        <a href="#facebook">Facebook</a>
        <a href="#instagram">Instagram</a>
        <a href="#twitter">Twitter</a>
      </div>
    </footer>
  );
};

export default Footer;
