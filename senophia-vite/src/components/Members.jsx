import React, { useState, useEffect, useRef } from 'react';
import { Music, Mic, Guitar, Drum } from 'lucide-react';
import './Members.css';

const InstagramIcon = ({ size = 18 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const Members = () => {
  const [activeMember, setActiveMember] = useState(0);
  const sectionRef = useRef(null);

  const members = [
    {
      name: 'Zora',
      role: 'Vocalist & Frontman',
      nickname: 'Zora',
      bio: "Zora is the lead vocalist and frontman of Senophia, known for his emotionally driven performances and smooth R&B-pop influenced vocal style. Inspired by Justin Bieber, Daniel Caesar, Duta, Pamungkas, and The Overtunes, he blends soulful melodies and modern pop sensibilities with Senophia's atmospheric alternative-pop sound, creating a distinct emotional identity for the band.",
      image: '/bandmemberIMG/zora.JPG',
      icon: <Mic size={24} />,
      color: 'var(--vintage-red)',
      bgColor: '#A83232',
      social: { instagram: 'https://www.instagram.com/arka.zg?igsh=MTF6dDd1N2dlenpxdw%3D%3D&utm_source=qr' }
    },
    {
      name: 'Irgi Adyatma Yasa',
      role: 'Lead Guitarist & Producer',
      nickname: 'Irgi',
      bio: "Irgi is the producer and lead guitarist of Senophia, shaping the band's sonic identity through atmospheric textures and expressive guitar work. Influenced by Mk.gee, Jonny Greenwood, John Mayer, and David Gilmour, his sound blends raw emotion with detailed production. As the main force behind Senophia's music, he builds each track from the ground up, crafting a distinct balance between melody and mood.",
      image: '/bandmemberIMG/Irgi Adyatma Yasa%20.JPG',
      icon: <Guitar size={24} />,
      color: 'var(--vintage-blue)',
      bgColor: '#6B7B8C',
      social: { instagram: 'https://www.instagram.com/irgiadyts?igsh=d2lteTIwa2FhNzB5&utm_source=qr' }
    },
    {
      name: 'Aiman Rasyapradipta',
      role: 'Rhythm Guitarist & Lead Songwriter',
      nickname: 'Rasya',
      bio: "Rasya is the rhythmic pulse and lyrical architect behind Senophia. As the band's rhythm guitarist and songwriter, Rasya anchors their sound in heavy, emotionally charged storytelling. His lyrics read like a collection of fading memories, mapping out narratives of fear, euphoria, and heartbreak that drive the conceptual core of their music.",
      image: '/bandmemberIMG/Aiman Rasyapradipta%20.JPG',
      icon: <Guitar size={24} />,
      color: 'var(--vintage-red)',
      bgColor: '#C41E3A',
      social: { instagram: 'https://www.instagram.com/aimanrasyapradipta?igsh=c2p6ZGNjcG5tYzI=' }
    },
    {
      name: 'Resha',
      role: 'Bassist & Songwriter',
      nickname: 'Resha',
      bio: "Resha is the bassist and songwriter of Senophia, known for emotional bass arrangements and distinctive lyrical touches. He also assists in the songwriting and production process, helping shape the band's musical identity, dynamics, and emotional atmosphere.",
      image: '/bandmemberIMG/resha.JPG',
      icon: <Music size={24} />,
      color: 'var(--vintage-blue)',
      bgColor: '#4A5568',
      social: { instagram: 'https://www.instagram.com/rewzky?igsh=MXh2YjBibnoybjFpYw%3D%3D&utm_source=qr' }
    },
    {
      name: 'Rifat Athallah Rizky',
      role: 'Drummer & Drum Mixing Engineer',
      nickname: 'Rifat',
      bio: "Rifat is the drummer and drum mixing engineer behind Senophia's recordings, bringing groove, texture, and dynamic energy into each track. Influenced by Aaron Sterling, George Daniel, and Enrico Oktaviano, his playing blends modern pop sensibilities with indie-driven expression. From tracking live drums to shaping their final sound in the mix, Rifat creates rhythmic foundations that feel tight and emotionally alive.",
      image: '/bandmemberIMG/Rifat Athallah Rizky%20.JPG',
      icon: <Drum size={24} />,
      color: 'var(--vintage-yellow)',
      bgColor: '#D4A843',
      social: { instagram: 'https://www.instagram.com/rifat_athallah?igsh=NnhpendveHRkdHJs&utm_source=qr' }
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
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll('.reveal');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="members" className="section" ref={sectionRef}>
      <div className="container">
        <div className="section-header reveal">
          <span className="section-label">The Crew</span>
          <h2 className="section-title">Meet The Band</h2>
          <p className="section-subtitle">Five souls, one sound</p>
        </div>

        <div className="members-container">
          {/* Member Navigation */}
          <div className="members-nav reveal">
            {members.map((member, index) => (
              <button
                key={index}
                className={`member-nav-btn ${activeMember === index ? 'active' : ''}`}
                onClick={() => setActiveMember(index)}
                style={{ '--member-color': member.color }}
              >
                <div className="member-nav-icon" style={{ background: member.color }}>
                  <img src={member.image} alt={member.name} />
                </div>
                <div className="member-nav-info">
                  <span className="member-nav-name">{member.nickname}</span>
                  <span className="member-nav-role">{member.role}</span>
                </div>
                <div className="member-nav-role-icon" aria-hidden="true">
                  {member.icon}
                </div>
                <div className="member-nav-indicator" />
              </button>
            ))}
          </div>

          {/* Member Card Display */}
          <div className="member-card-wrapper reveal">
            {members.map((member, index) => (
              <div
                key={index}
                className={`member-card ${activeMember === index ? 'active' : ''}`}
              >
                {/* Card Header with Color Block */}
                <div className="member-card-header" style={{ background: member.bgColor }}>
                  <img className="member-card-image" src={member.image} alt={member.name} />
                  <div className="member-card-accent">
                    <div className="accent-circle" />
                    <div className="accent-line" />
                  </div>
                </div>

                {/* Card Body */}
                <div className="member-card-body">
                  <div className="member-card-top">
                    <h3 className="member-name">{member.name}</h3>
                    <span className="member-role" style={{ color: member.color }}>
                      {member.role}
                    </span>
                  </div>

                  <p className="member-bio">{member.bio}</p>

                  {/* Social Links */}
                  <div className="member-social">
                    <a href={member.social.instagram} target="_blank" rel="noreferrer" className="social-link" aria-label={`${member.name} Instagram`}>
                      <InstagramIcon size={18} />
                    </a>
                  </div>
                </div>

                {/* Card Number */}
                <div className="member-card-number" style={{ color: member.color }}>
                  {String(index + 1).padStart(2, '0')}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Cards Grid */}
        <div className="members-mobile-grid">
          {members.map((member, index) => (
            <div key={index} className="member-mobile-card reveal" style={{ transitionDelay: `${index * 0.1}s` }}>
              <div className="mobile-card-header" style={{ background: member.bgColor }}>
                <img className="mobile-card-image" src={member.image} alt={member.name} />
              </div>
              <div className="mobile-card-body">
                <h3 className="mobile-member-name">{member.name}</h3>
                <span className="mobile-member-role" style={{ color: member.color }}>{member.role}</span>
                <p className="mobile-member-bio">{member.bio}</p>
                <div className="mobile-member-social">
                  <a href={member.social.instagram} target="_blank" rel="noreferrer" className="social-link" aria-label={`${member.name} Instagram`}>
                    <InstagramIcon size={16} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Members;
