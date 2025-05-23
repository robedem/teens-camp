import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <h2>Contact Us</h2>
      <p>Email: <a href="mailto:info@tominternational.org">info@tominternational.org</a></p>
      <p>Phone: +234 123 456 7890</p>
      <div className="social-icons">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
      </div>
    </footer>
  );
};

export default Footer;