import React from 'react';
import SectionTitle from '../../components/ui/SectionTitle';
import ContactForm from './ContactForm';
import { personalInfo } from '../../data/personalInfo';
import useScrollAnimation from '../../hooks/useScrollAnimation';

export const Contact = () => {
  const containerRef = useScrollAnimation();

  return (
    <section id="contact" className="section" ref={containerRef}>
      <div className="container">
        <SectionTitle
          title="Get in Touch"
          subtitle="Interested in working together? Drop me a message and let's build something amazing."
        />

        <div className="grid grid-cols-1 md:grid-cols-[0.8fr_1.2fr] gap-12 items-start w-full contact-grid reveal">
          <div className="flex flex-col gap-6 contact-details-col">
            <div>
              <h3 className="m-0 text-2xl font-extrabold mb-2">
                Let's connect
              </h3>
              <p className="m-0 text-text-muted text-[0.95rem] mb-4">
                Feel free to reach out via the form, send an email directly, or follow my professional networks.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-bg-surf border border-border-main shadow-sm flex items-center gap-5 contact-detail-card glow-card">
              <div className="text-brand p-2 rounded-sm bg-glow-custom flex">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
              </div>
              <div>
                <h4 className="m-0 text-[0.85rem] text-text-muted font-bold uppercase tracking-[0.5px]">Email</h4>
                <a href={`mailto:${personalInfo.email}`} className="font-semibold text-[1rem] hover:text-brand transition-colors">{personalInfo.email}</a>
              </div>
            </div>

            <div className="p-6 rounded-xl bg-bg-surf border border-border-main shadow-sm flex items-center gap-5 contact-detail-card glow-card">
              <div className="text-brand p-2 rounded-sm bg-glow-custom flex">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
              </div>
              <div>
                <h4 className="m-0 text-[0.85rem] text-text-muted font-bold uppercase tracking-[0.5px]">Location</h4>
                <span className="font-semibold text-[1rem] text-text-main">India</span>
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
