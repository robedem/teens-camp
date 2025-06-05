import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <h2>TOMS CAMP</h2>
      <div className="contact-info">
        <p>
          Contact Us: 
          <a href="tel:+2348024968773"> 08024968773</a>, 
          <a href="tel:+2348033628087"> 08033628087</a>
        </p>
      </div>
      <div className="social-icons">
        <a href="https://www.facebook.com/share/16h3m7r2b8/" target="_blank" rel="noopener noreferrer">Facebook</a>
        <a href="https://twitter.com/teenscamp" target="_blank" rel="noopener noreferrer">Twitter</a>
        <a href="https://instagram.com/teenscamp" target="_blank" rel="noopener noreferrer">Instagram</a>
      </div>
      <p>&copy; 2025 TOMS Camp. All rights reserved.</p>
    </footer>
  );
};

export default Footer;