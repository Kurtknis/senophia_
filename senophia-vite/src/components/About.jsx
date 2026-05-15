import React, { useEffect, useRef } from 'react';
import './About.css';

const About = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      { threshold: 0.2 }
    );

    const elements = sectionRef.current.querySelectorAll('.reveal');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const features = [
    {
      image: '/album/STATIC.png',
      title: 'STATIC',
      description: '"STATIC" is a five-track conceptual EP that maps out the chaotic and beautiful journey of human connection. Written and recorded entirely in a garage, the EP navigates through distinct emotional chapters: the initial fear of falling in love, the blinding euphoria of surrender, the devastating crash of heartbreak, and finally, the quiet numbness of finding peace.'
    },
    {
      image: '/album/Disappear.png',
      title: 'Disappear',
      description: '"Disappear" is the devastating turning point of the STATIC EP. Senophia\'s second single before their EP release captures the haunting aftermath of a person leaving, where the sound of their voice and the warmth of their presence begin to fade, yet the weight of their memory refuses to let go.'
    },
    {
      image: "/album/I don't want things to go this way.png",
      title: "I don't want things to go this way",
      description: '"I don\'t want things to go this way" is a desperate plea disguised as an indie rock ballad. Senophia\'s debut single explores the blinding, hopeless admiration for someone you know is bad for you, even when everyone around you warns against it.'
    }
  ];

  return (
    <section id="about" className="section section-alt" ref={sectionRef}>
      <div className="container">
        <div className="about-content">
          {/* Left Side - Image/Visual */}
          <div className="about-visual reveal">
            <div className="about-image-grid">
              <div className="about-img about-img-main">
                <img src="/group4.JPG" alt="Senophia Band" />
              </div>
              <div className="about-img about-img-secondary">
                <img src="/group1.png" alt="Senophia Band Group" />
              </div>
              <div className="about-img about-img-tertiary">
                <img src="/group2.png" alt="Senophia Band Performance" />
              </div>
              <div className="about-img about-img-small">
                <img src="/group3.JPG" alt="Senophia Band" />
              </div>
              <div className="about-img about-img-bottom">
                <img src="/gallery/adoonimg213.JPG" alt="Senophia Live Performance" />
              </div>
            </div>
            <div className="about-visual-decoration">
              <div className="decoration-circle" />
              <div className="decoration-line" />
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="about-text">
            <div className="section-header about-header reveal">
              <span className="section-label">Our Story</span>
              <h2 className="section-title">About Us</h2>
              <p className="section-subtitle">A felling thst you didn't just fall in love but rather wandered into their eyes and never wanted to find your way out</p>
            </div>

            <div className="about-description reveal">
              <p>
                Senophia adalah band indie-rock asal Tangerang Selatan yang dikenal dengan aksi panggung energic dengan hook lagu yang anthemic. Mengambil inspirasi dari energi "The Strokes" dan sensibilitas melodi "The 1975", band ini telah menghabiskan tiga tahun terakhir mengubah panggung-panggung lokal menjadi lantai dansa yang penuh energi.
              </p>
              <p>
                Menyusul kesuksesan single perdana mereka, I don't want things to go this way, yang mendapatkan streams lebih dari 20.000+. Band ini telah berbagi panggung dengan HIVI, Adrian Khalif, The Lantis, Lomba Sihir dan musisi lainnya. Dengan musik yang menjembatani rock alternatif dan pop modern. Senophia siap untuk menghibur para penggemar di festival besar sekalipun.
              </p>
            </div>

            <div className="about-features">
              {features.map((feature, index) => (
                <div 
                  key={index} 
                  className="feature-card reveal"
                  style={{ transitionDelay: `${index * 0.15}s` }}
                >
                  <div className="feature-cover">
                    <img src={feature.image} alt={`${feature.title} cover`} />
                  </div>
                  <div className="feature-content">
                    <h3 className="feature-title">{feature.title}</h3>
                    <p className="feature-description">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
