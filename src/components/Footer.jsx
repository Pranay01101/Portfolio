import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      {/* Displaying the copyright notice with the current year */}
      <p>&copy; {new Date().getFullYear()} Pranay Moon. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
