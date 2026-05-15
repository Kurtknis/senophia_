import React, { useEffect, useRef } from 'react';
import { Play, Calendar, MapPin } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  const heroRef = useRef(null);
  const lettersRef = useRef([]);

  useEffect(() => {
    // Animate letters on load
    lettersRef.current.forEach((letter, index) => {
      if (letter) {
        setTimeout(() => {
          letter.style.opacity = '1';
          letter.style.transform = 'translateY(0)';
        }, index * 100);
      }
    });

    // Parallax effect on scroll
    const handleScroll = () => {
      if (heroRef.current) {
        const scrolled = window.scrollY;
        const heroContent = heroRef.current.querySelector('.hero-content');
        if (heroContent) {
          heroContent.style.transform = `translateY(${scrolled * 0.4}px)`;
          heroContent.style.opacity = 1 - scrolled / 800;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const bandName = 'SENOPHIA';
  const letterColors = [
    'var(--vintage-red)',
    'var(--dark-charcoal)',
    'var(--dark-charcoal)',
    'var(--vintage-blue)',
    'var(--dark-charcoal)',
    'var(--dark-charcoal)',
    'var(--dark-charcoal)',
    'var(--vintage-yellow)'
  ];

  return (
    <section id="home" className="hero" ref={heroRef}>
      {/* Background Elements */}
      <div className="hero-bg">
        <div className="hero-bg-grid">
          {Array.from({ length: 9 }).map((_, i) => (
            <div key={i} className="grid-item">
              <div className="grid-letter" style={{ 
                backgroundImage: `linear-gradient(135deg, var(--cream) 0%, var(--light-gray) 100%)`,
              }}>
                <span style={{ color: letterColors[i] || 'var(--dark-charcoal)' }}>
                  {bandName[i] || ''}
                </span>
              </div>
            </div>
          ))}
        </div>
        <div className="hero-bg-texture" />
      </div>

      {/* Floating Elements */}
      <div className="floating-shapes">
        <div className="shape shape-1" />
        <div className="shape shape-2" />
        <div className="shape shape-3" />
        <div className="shape shape-4" />
      </div>

      {/* Main Content */}
      <div className="hero-content">
        <div className="hero-label">
          <span className="label-line" />
          <span>Est. 2022</span>
          <span className="label-line" />
        </div>

        <h1 className="hero-title">
          {bandName.split('').map((letter, index) => (
            <span
              key={index}
              ref={el => lettersRef.current[index] = el}
              className="hero-letter"
              style={{ 
                color: letterColors[index],
                transitionDelay: `${index * 0.1}s`
              }}
            >
              {letter}
            </span>
          ))}
        </h1>

        <p className="hero-subtitle">
          Have you ever been afraid to fall in love?
        </p>

        <div className="hero-description">
          <p>
           Voicing the fear, the euphoria, and all the noise in between. We are Senophia.
          </p>
        </div>

        <div className="hero-buttons">
          <a 
            href="https://open.spotify.com/artist/5NAbaOO4ubarrkG3yaQxtI?si=pNiJfYyGTICIpv4yWv7QiA" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn btn-primary hero-btn-primary"
          >
            <Play size={18} />
            Listen Now
          </a>
          <button className="btn btn-secondary hero-btn-secondary" onClick={scrollToAbout}>
            Explore More
          </button>
        </div>

        {/* Next Show Card */}
        <div className="next-show-card">
          <div className="show-label">Next Show</div>
          <div className="show-details">
            <div className="show-item">
              <Calendar size={16} />
              <span>Dec 15, 2024</span>
            </div>
            <div className="show-item">
              <MapPin size={16} />
              <span>Jakarta, Indonesia</span>
            </div>
          </div>
          <div className="show-pulse" />
        </div>
      </div>

      {/* Scroll Indicator */}
      <button className="scroll-indicator" onClick={scrollToAbout}>
        <span className="scroll-text">Scroll to explore</span>
      </button>

      {/* Side Stats */}
      <div className="hero-stats">
        <div className="stat-item">
          <span className="stat-number">50+</span>
          <span className="stat-label">Shows</span>
        </div>
        <div className="stat-divider" />
        <div className="stat-item">
          <span className="stat-number">4</span>
          <span className="stat-label">Years</span>
        </div>
        <div className="stat-divider" />
        <div className="stat-item">
          <span className="stat-number">6</span>
          <span className="stat-label">Members</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
