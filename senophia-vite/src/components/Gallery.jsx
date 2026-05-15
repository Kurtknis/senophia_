import React, { useState, useEffect, useRef } from 'react';
import { X, ChevronLeft, ChevronRight, Camera } from 'lucide-react';
import './Gallery.css';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const sectionRef = useRef(null);

  const images = [
    { id: 1, src: '/shefyvsuyf.JPG', label: 'Live at Jakarta' },
    { id: 2, src: '/gallery/IMG_8667.JPG', label: 'Studio Session' },
    { id: 3, src: '/gallery/IMG_8721.JPG', label: 'Backstage' },
    { id: 4, src: '/gallery/IMG_8819.JPG', label: 'Festival Stage' },
    { id: 5, src: '/gallery/IMG_8826.JPG', label: 'Rehearsal' },
    { id: 6, src: '/gallery/fqs 2026-03-27 0042152F2F10009A88.JPG', label: 'Sound Check' },
    { id: 7, src: '/gallery/fqs 2026-03-27 00442358FA913C36A6.JPG', label: 'Tour Bus' },
    { id: 8, src: '/gallery/fqs 2026-03-27 004636B37BE7AFEE84.JPG', label: 'After Party' },
    { id: 9, src: '/gallery/fqs 2026-03-27 004751348F441F0AB1.JPG', label: 'On Stage' },
    { id: 10, src: '/gallery/fqs 2026-03-27 0050177FD04159E3C4.JPG', label: 'Encore' },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll('.reveal');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const openLightbox = (index) => {
    setSelectedImage(index);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  const navigateImage = (direction) => {
    if (selectedImage === null) return;
    const newIndex = selectedImage + direction;
    if (newIndex >= 0 && newIndex < images.length) {
      setSelectedImage(newIndex);
    }
  };

  return (
    <section id="gallery" className="section section-alt" ref={sectionRef}>
      <div className="container">
        <div className="section-header reveal">
          <span className="section-label">Visuals</span>
          <h2 className="section-title">Gallery</h2>
          <p className="section-subtitle">Moments captured in time</p>
        </div>

        <div className="gallery-grid">
          {images.map((image, index) => (
            <div
              key={image.id}
              className={`gallery-item reveal ${index === 0 || index === 5 ? 'large' : ''}`}
              style={{ transitionDelay: `${index * 0.1}s` }}
              onClick={() => openLightbox(index)}
            >
              <div className="gallery-image">
                <img src={image.src} alt={image.label} className="gallery-img" loading="lazy" />
                <div className="gallery-overlay">
                  <div className="gallery-overlay-content">
                    <Camera size={24} />
                    <span className="gallery-label">{image.label}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage !== null && (
        <div className="lightbox" onClick={closeLightbox}>
          <button className="lightbox-close" onClick={closeLightbox}>
            <X size={28} />
          </button>

          <button 
            className="lightbox-nav lightbox-prev"
            onClick={(e) => { e.stopPropagation(); navigateImage(-1); }}
            disabled={selectedImage === 0}
          >
            <ChevronLeft size={32} />
          </button>

          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <img 
              src={images[selectedImage].src} 
              alt={images[selectedImage].label} 
              className="lightbox-img" 
            />
            <div className="lightbox-info">
              <span className="lightbox-counter">
                {selectedImage + 1} / {images.length}
              </span>
              <span className="lightbox-label">{images[selectedImage].label}</span>
            </div>
          </div>

          <button 
            className="lightbox-nav lightbox-next"
            onClick={(e) => { e.stopPropagation(); navigateImage(1); }}
            disabled={selectedImage === images.length - 1}
          >
            <ChevronRight size={32} />
          </button>
        </div>
      )}
    </section>
  );
};

export default Gallery;
