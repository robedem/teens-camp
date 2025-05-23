import React, { useState } from 'react';
import logo from '../assets/logo.png'; // Adjust path as needed

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    setIsNavOpen(false); // Close the nav on mobile after clicking
  };

  return (
    <header className="header">
      <img src={logo} alt="Teens Camp Logo" className="logo" />
      <div className="hamburger" onClick={toggleNav}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <nav className={`nav ${isNavOpen ? 'open' : ''}`}>
        <ul>
          <li>
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('home');
              }}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#about"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('about');
              }}
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#register"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('register');
              }}
            >
              Register
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;