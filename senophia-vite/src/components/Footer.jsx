import React from 'react';
import { Music, ArrowUp } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerLinks = {
    band: [
      { label: 'About', href: '#about' },
      { label: 'Members', href: '#members' },
      { label: 'Experience', href: '#experience' },
      { label: 'Gallery', href: '#gallery' },
    ],
    connect: [
      { label: 'Contact', href: '#contact' },
      { label: 'Book Now', href: '#contact' },
      { label: 'Press Kit', href: '#' },
      { label: 'Merchandise', href: '#' },
    ],
    social: [
      { label: 'Instagram', href: '#' },
      { label: 'YouTube', href: '#' },
      { label: 'Spotify', href: '#' },
      { label: 'TikTok', href: '#' },
    ],
  };

  const handleClick = (e, href) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="container">
          <div className="footer-content">
            {/* Brand */}
            <div className="footer-brand">
              <div className="footer-logo">
                <div className="footer-logo-icon">
                  <Music size={24} />
                </div>
                <div className="footer-logo-text">
                  <span className="footer-logo-main">SENOPHIA</span>
                  <span className="footer-logo-sub">Official Band</span>
                </div>
              </div>
              <p className="footer-brand-desc">
                Bringing vintage soul and modern energy to every stage. 
                Based in Jakarta, performing worldwide.
              </p>
              <div className="footer-brand-decoration">
                <span className="deco-letter" style={{ color: 'var(--vintage-red)' }}>S</span>
                <span className="deco-letter">e</span>
                <span className="deco-letter">N</span>
                <span className="deco-letter" style={{ color: 'var(--vintage-blue)' }}>o</span>
                <span className="deco-letter">p</span>
                <span className="deco-letter">H</span>
                <span className="deco-letter">I</span>
                <span className="deco-letter" style={{ color: 'var(--vintage-yellow)' }}>A</span>
              </div>
            </div>

            {/* Links */}
            <div className="footer-links">
              <div className="footer-links-column">
                <h4 className="footer-links-title">Band</h4>
                <ul>
                  {footerLinks.band.map((link, index) => (
                    <li key={index}>
                      <a href={link.href} onClick={(e) => handleClick(e, link.href)}>
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="footer-links-column">
                <h4 className="footer-links-title">Connect</h4>
                <ul>
                  {footerLinks.connect.map((link, index) => (
                    <li key={index}>
                      <a href={link.href} onClick={(e) => handleClick(e, link.href)}>
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="footer-links-column">
                <h4 className="footer-links-title">Social</h4>
                <ul>
                  {footerLinks.social.map((link, index) => (
                    <li key={index}>
                      <a href={link.href} target="_blank" rel="noopener noreferrer">
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <div className="footer-bottom-content">
            <p className="footer-copyright">© 2024 SENOPHIA</p>
            <div className="footer-bottom-right">
              <p className="footer-credit">Website ini buatan anak Fullstack UPJ, Raihan Iyadah Iya</p>
              <button className="footer-scroll-top" onClick={scrollToTop} aria-label="Scroll to top">
                <ArrowUp size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
