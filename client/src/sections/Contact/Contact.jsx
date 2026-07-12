import React from 'react';
import SectionTitle from '../../components/ui/SectionTitle';
import ContactForm from './ContactForm';
import { personalInfo } from '../../data/personalInfo';
import useScrollAnimation from '../../hooks/useScrollAnimation';

export const Contact = () => {
  const containerRef = useScrollAnimation();

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: '0.8fr 1.2fr',
    gap: '3rem',
    alignItems: 'start',
    width: '100%'
  };

  const detailsColumnStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem',
  };

  const detailCardStyle = {
    padding: '1.5rem',
    borderRadius: 'var(--radius-md)',
    backgroundColor: 'var(--bg-surface)',
    border: '1px solid var(--border-color)',
    boxShadow: 'var(--shadow-sm)',
    display: 'flex',
    alignItems: 'center',
    gap: '1.25rem',
  };

  return (
    <section id="contact" className="section" ref={containerRef}>
      <style>{`
        @media (max-width: 768px) {
          .contact-grid {
            grid-template-columns: 1fr !important;
            gap: 2.5rem !important;
          }
        }
      `}</style>
      
      <div className="container">
        <SectionTitle
          title="Get in Touch"
          subtitle="Interested in working together? Drop me a message and let's build something amazing."
        />

        <div style={gridStyle} className="contact-grid reveal">
          <div style={detailsColumnStyle} className="contact-details-col">
            <h3 style={{ margin: 0, fontSize: '1.4rem', fontWeight: '800', marginBottom: '0.5rem' }}>
              Let's connect
            </h3>
            <p style={{ margin: 0, color: 'var(--text-subtle)', fontSize: '0.95rem', marginBottom: '1rem' }}>
              Feel free to reach out via the form, send an email directly, or follow my professional networks.
            </p>

            <div style={detailCardStyle} className="contact-detail-card glow-card">
              <div style={{ color: 'var(--color-accent)', padding: '0.5rem', borderRadius: 'var(--radius-sm)', backgroundColor: 'var(--glow-color)', display: 'flex' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
              </div>
              <div>
                <h4 style={{ margin: 0, fontSize: '0.85rem', color: 'var(--text-subtle)', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Email</h4>
                <a href={`mailto:${personalInfo.email}`} style={{ fontWeight: '600', fontSize: '1rem' }}>{personalInfo.email}</a>
              </div>
            </div>

            <div style={detailCardStyle} className="contact-detail-card glow-card">
              <div style={{ color: 'var(--color-accent)', padding: '0.5rem', borderRadius: 'var(--radius-sm)', backgroundColor: 'var(--glow-color)', display: 'flex' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
              </div>
              <div>
                <h4 style={{ margin: 0, fontSize: '0.85rem', color: 'var(--text-subtle)', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Location</h4>
                <span style={{ fontWeight: '600', fontSize: '1rem', color: 'var(--text-primary)' }}>India</span>
              </div>
            </div>
          </div>

          <div className="contact-form-col">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
