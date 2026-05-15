import React, { useEffect, useRef } from 'react';
import { Calendar, Disc3, Music2, Radio, Sparkles, TrendingUp, Users } from 'lucide-react';
import './Experience.css';

const Experience = () => {
  const sectionRef = useRef(null);

  const experiences = [
    {
      year: '2022',
      title: 'Band Formed',
      description: 'Senophia began as a full-band project, building the chemistry and live energy that would become the foundation of their sound.',
      image: '/group1.png',
      imageAlt: 'Senophia full band group photo',
      icon: <Users size={20} />,
      color: 'var(--vintage-red)',
      highlight: 'The Beginning'
    },
    {
      year: '2023',
      title: 'Original Music Era',
      description: 'The band shifted from playing covers into writing original material, shaping the emotional alternative-pop identity heard across their releases.',
      image: '/gallery/adoonimg213.JPG',
      imageAlt: 'Senophia live performance',
      icon: <Music2 size={20} />,
      color: 'var(--vintage-blue)',
      highlight: 'New Direction'
    },
    {
      year: '2024',
      title: 'Debut Single & 10,000+ Streams',
      description: 'The first single, "I Don\'t Want Things to Go This Way", introduced Senophia through a desperate indie-rock ballad and crossed 10,000+ streams.',
      image: "/album/I don't want things to go this way.png",
      imageAlt: "I Don't Want Things to Go This Way album cover",
      icon: <TrendingUp size={20} />,
      color: 'var(--vintage-yellow)',
      stats: { release: '1st single', streams: '10,000+' }
    },
    {
      year: '2025',
      title: 'First Major Festival',
      description: 'Senophia stepped onto a larger festival stage, carrying their garage-born sound into a wider live audience.',
      image: '/concert.png',
      imageAlt: 'Senophia major festival performance',
      imageClass: 'festival-image',
      icon: <Calendar size={20} />,
      color: 'var(--vintage-red)',
      highlight: 'Festival Stage'
    },
    {
      year: '2025',
      title: 'Second Single: Disappear',
      description: '"Disappear" became the devastating turning point before the EP release, continuing the band\'s rise past 15,000+ streams.',
      image: '/album/Disappear.png',
      imageAlt: 'Disappear album cover',
      icon: <Radio size={20} />,
      color: 'var(--vintage-blue)',
      stats: { release: '2nd single', streams: '15,000+' }
    },
    {
      year: '2026',
      title: 'STATIC EP & 20,000+ Streams',
      description: 'Senophia released "STATIC", a five-track conceptual EP tracing fear, euphoria, heartbreak, and the quiet numbness of finding peace.',
      image: '/album/STATIC.png',
      imageAlt: 'STATIC EP cover',
      accentImage: '/spotify.png',
      accentAlt: 'Spotify logo',
      icon: <Disc3 size={20} />,
      color: 'var(--vintage-yellow)',
      stats: { tracks: '5', streams: '20,000+' },
      highlight: 'First EP'
    }
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
      { threshold: 0.15 }
    );

    const elements = sectionRef.current?.querySelectorAll('.reveal');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="experience" className="section section-dark" ref={sectionRef}>
      <div className="container">
        <div className="section-header reveal">
          <span className="section-label">Our Journey</span>
          <h2 className="section-title">Experience</h2>
          <p className="section-subtitle">From garage to stage</p>
        </div>

        {/* Timeline */}
        <div className="timeline">
          <div className="timeline-line" />

          {experiences.map((exp, index) => (
            <div 
              key={index} 
              className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'} reveal`}
              style={{
                '--node-color': exp.color,
                transitionDelay: `${index * 0.15}s`
              }}
            >
              {/* Timeline Node */}
              <div className="timeline-node" style={{ '--node-color': exp.color }}>
                <div className="node-icon" style={{ background: exp.color }}>
                  {exp.icon}
                </div>
                <div className="node-year">{exp.year}</div>
              </div>

              {/* Content Card */}
              <div className="timeline-card">
                {exp.highlight && (
                  <div className="card-badge" style={{ background: exp.color }}>
                    {exp.highlight}
                  </div>
                )}

                <div className="card-header">
                  <h3 className="card-title">{exp.title}</h3>
                  <span className="card-year">{exp.year}</span>
                </div>

                <p className="card-description">{exp.description}</p>

                {exp.image && (
                  <div className="timeline-media">
                    <img className={exp.imageClass} src={exp.image} alt={exp.imageAlt} />
                    {exp.accentImage && (
                      <div className="timeline-media-accent">
                        <img src={exp.accentImage} alt={exp.accentAlt} />
                      </div>
                    )}
                  </div>
                )}

                {exp.stats && (
                  <div className="card-stats">
                    {Object.entries(exp.stats).map(([key, value]) => (
                      <div key={key} className="card-stat">
                        <span className="card-stat-value">{value}</span>
                        <span className="card-stat-label">{key}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Stats Bar */}
        <div className="experience-stats reveal">
          <div className="exp-stat-item">
            <div className="exp-stat-icon" style={{ background: 'var(--vintage-red)' }}>
              <Calendar size={24} />
            </div>
            <div className="exp-stat-content">
              <span className="exp-stat-number">50+</span>
              <span className="exp-stat-label">Shows Performed</span>
            </div>
          </div>
          <div className="exp-stat-item">
            <div className="exp-stat-icon" style={{ background: 'var(--vintage-blue)' }}>
              <Radio size={24} />
            </div>
            <div className="exp-stat-content">
              <span className="exp-stat-number">2</span>
              <span className="exp-stat-label">Singles Released</span>
            </div>
          </div>
          <div className="exp-stat-item">
            <div className="exp-stat-icon" style={{ background: 'var(--vintage-yellow)' }}>
              <Disc3 size={24} />
            </div>
            <div className="exp-stat-content">
              <span className="exp-stat-number">1</span>
              <span className="exp-stat-label">Concept EP</span>
            </div>
          </div>
          <div className="exp-stat-item">
            <div className="exp-stat-icon" style={{ background: 'var(--vintage-red)' }}>
              <Sparkles size={24} />
            </div>
            <div className="exp-stat-content">
              <span className="exp-stat-number">20K+</span>
              <span className="exp-stat-label">Streams Milestone</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
