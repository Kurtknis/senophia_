import React, { useState, useEffect, useRef } from 'react';
import { Send, Mail, Phone, MapPin, Music, CheckCircle } from 'lucide-react';
import './Contact.css';

const InstagramIcon = ({ size = 20 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const YoutubeIcon = ({ size = 20 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
    <path d="m10 15 5-3-5-3z" />
  </svg>
);

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const sectionRef = useRef(null);
  const bookingEmail = 'Senophia.band@gmail.com';

  const handleSubmit = (e) => {
    e.preventDefault();
    const emailBody = [
      `Name: ${formData.name}`,
      `Email: ${formData.email}`,
      '',
      formData.message,
    ].join('\n');
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(bookingEmail)}&su=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(emailBody)}`;

    window.open(gmailUrl, '_blank', 'noopener,noreferrer');
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

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

  const contactInfo = [
    { icon: <Mail size={20} />, label: 'Email', value: bookingEmail, href: `mailto:${bookingEmail}` },
    { icon: <Phone size={20} />, label: 'Phone', value: 'CP: +62-878-8251-7950 (Evan)', href: 'tel:+62-878-8251-7950' },
    { icon: <MapPin size={20} />, label: 'Location', value: 'Tanggerang Selatan', href: '#' },
  ];

  const socialLinks = [
    { icon: <InstagramIcon size={20} />, label: 'Instagram', href: 'https://www.instagram.com/senophia_/', color: 'var(--vintage-red)' },
    { icon: <YoutubeIcon size={20} />, label: 'YouTube', href: 'https://www.youtube.com/@Senophia', color: 'var(--vintage-blue)' },
    { icon: <Music size={20} />, label: 'Spotify', href: 'https://open.spotify.com/artist/5NAbaOO4ubarrkG3yaQxtI?si=WdFnFquqTDK1slPgXJqLYw', color: 'var(--vintage-yellow)' },
  ];

  return (
    <section id="contact" className="section" ref={sectionRef}>
      <div className="container">
        <div className="section-header reveal">
          <span className="section-label">Get In Touch</span>
          <h2 className="section-title">Contact</h2>
          <p className="section-subtitle">Let's make music together</p>
        </div>

        <div className="contact-content">
          {/* Contact Info Side */}
          <div className="contact-info reveal">
            <div className="contact-info-header">
              <h3 className="contact-info-title">Book Us For Your Event</h3>
              <p className="contact-info-desc">
                Whether it's a private party, corporate event, or music festival, 
                we'd love to bring our energy to your stage.
              </p>
            </div>

            <div className="contact-details">
              {contactInfo.map((item, index) => (
                <a key={index} href={item.href} className="contact-detail-item">
                  <div className="contact-detail-icon">
                    {item.icon}
                  </div>
                  <div className="contact-detail-content">
                    <span className="contact-detail-label">{item.label}</span>
                    <span className="contact-detail-value">{item.value}</span>
                  </div>
                </a>
              ))}
            </div>

            <div className="contact-social">
              <span className="social-title">Follow Us</span>
              <div className="social-links">
                {socialLinks.map((link, index) => (
                  <a 
                    key={index} 
                    href={link.href} 
                    className="social-link-large"
                    style={{ '--social-color': link.color }}
                    aria-label={link.label}
                    target={link.href.startsWith('http') ? '_blank' : undefined}
                    rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form Side */}
          <div className="contact-form-wrapper reveal">
            <div className="contact-form-note">
              <Mail size={18} />
              <span>This form opens Gmail and sends your message to {bookingEmail}.</span>
            </div>
            <form className="contact-form" onSubmit={handleSubmit}>
              {isSubmitted ? (
                <div className="form-success">
                  <CheckCircle size={48} style={{ color: 'var(--vintage-red)' }} />
                  <h3>Gmail Draft Opened</h3>
                  <p>Please review and send your message in Gmail.</p>
                </div>
              ) : (
                <>
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="name">Your Name</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">Email Address</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        required
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="subject">Subject</label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Booking Inquiry"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your event..."
                      rows={5}
                      required
                    />
                  </div>

                  <button type="submit" className="btn btn-primary form-submit">
                    <Send size={18} />
                    Send Message
                  </button>
                </>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
