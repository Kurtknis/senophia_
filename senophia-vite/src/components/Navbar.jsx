import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Update active section based on scroll position
      const sections = ['home', 'about', 'members', 'experience', 'gallery', 'contact'];
      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'members', label: 'Members' },
    { id: 'experience', label: 'Experience' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <>
      <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="navbar-container">
          {/* Logo */}
          <div className="navbar-logo" onClick={() => scrollToSection('home')}>
            <img className="navbar-logo-img" src="/logosenophia.png" alt="Senophia logo" />
            <div className="logo-text">
              <span className="logo-main">SENOPHIA</span>
              <span className="logo-sub">Official Website</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <ul className="navbar-links">
            {navLinks.map((link) => (
              <li key={link.id}>
                <button
                  className={`nav-link ${activeSection === link.id ? 'active' : ''}`}
                  onClick={() => scrollToSection(link.id)}
                >
                  <span className="nav-link-number">
                    {String(navLinks.indexOf(link) + 1).padStart(2, '0')}
                  </span>
                  <span className="nav-link-text">{link.label}</span>
                </button>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <button 
            className="mobile-menu-btn"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
        <div className="mobile-menu-content">
          <div className="mobile-menu-header">
            <span className="mobile-menu-label">Navigation</span>
          </div>
          <ul className="mobile-nav-links">
            {navLinks.map((link, index) => (
              <li key={link.id} style={{ animationDelay: `${index * 0.1}s` }}>
                <button
                  className={`mobile-nav-link ${activeSection === link.id ? 'active' : ''}`}
                  onClick={() => scrollToSection(link.id)}
                >
                  <span className="mobile-nav-number">{String(index + 1).padStart(2, '0')}</span>
                  <span className="mobile-nav-text">{link.label}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
