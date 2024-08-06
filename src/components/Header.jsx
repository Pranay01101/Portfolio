import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';

const Header = () => {
  // State to manage the mobile menu toggle
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // State to determine if the page has been scrolled
  const [isScrolled, setIsScrolled] = useState(false);

  // Function to toggle the mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Function to handle scroll event and update isScrolled state
  const handleScroll = () => {
    setIsScrolled(window.scrollY > 50); // Change the state based on scroll position
  };

  // Use useEffect to add and clean up scroll event listener
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <nav className="nav">
        <div className="logo">
          {/* Logo linking to the homepage */}
          <Link to="/">Pranay Moon</Link>
        </div>
        <button className="menu-toggle" onClick={toggleMobileMenu}>
          {/* Button to toggle the mobile menu */}
          <i className="fas fa-bars"></i>
        </button>
        <ul className={`nav-links ${isMobileMenuOpen ? 'open' : ''}`}>
          {/* Navigation links with icons */}
          <li><Link to="/about"><i className="fas fa-user"></i> About</Link></li>
          <li><Link to="/skills"><i className="fas fa-cogs"></i> Skills</Link></li>
          <li><Link to="/experience"><i className="fas fa-briefcase"></i> Experience</Link></li>
          <li><Link to="/projects"><i className="fas fa-project-diagram"></i> Projects</Link></li>
          <li><Link to="/contact"><i className="fas fa-envelope"></i> Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
