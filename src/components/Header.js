import React from 'react';
import '../styles/Header.css'; // Import the CSS from styles folder

const Header = () => {
  return (
    <header className="header">
      <div className="logo-container">
        <img src="/images/logo.jpg" alt="Travel Explorer Logo" className="logo" />
        
      </div>
      <nav>
        <ul>
          <li><a href="#destinations">Destinations</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
