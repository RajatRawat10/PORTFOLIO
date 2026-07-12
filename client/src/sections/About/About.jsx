import React from 'react';
import SectionTitle from '../../components/ui/SectionTitle';
import Button from '../../components/ui/Button';
import { personalInfo } from '../../data/personalInfo';
import useScrollAnimation from '../../hooks/useScrollAnimation';
import './About.css';

export const About = () => {
  const containerRef = useScrollAnimation();

  return (
    <section id="about" className="section" ref={containerRef}>
      <div className="container">
        <SectionTitle
          title="About Me"
          subtitle="Get to know my background, experience, and what drives me as a software developer."
        />

        <div className="about-grid reveal">
          <div className="about-details">
            <p className="about-text">
              {personalInfo.bio}
            </p>
            
            <div className="about-info-table">
              <span className="info-label">Name:</span>
              <span className="info-value">{personalInfo.name}</span>
              
              <span className="info-label">Email:</span>
              <span className="info-value">{personalInfo.email}</span>
              
              <span className="info-label">Location:</span>
              <span className="info-value">India</span>
              
              <span className="info-label">Specialty:</span>
              <span className="info-value">{personalInfo.title}</span>
            </div>

            <Button variant="primary" href={personalInfo.resumeUrl} download style={{ alignSelf: 'flex-start' }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '0.25rem' }}>
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="7 10 12 15 17 10"></polyline>
                <line x1="12" y1="15" x2="12" y2="3"></line>
              </svg>
              Download Resume
            </Button>
          </div>

          <div className="about-stats">
            <div className="stat-box">
              <div className="stat-num">1+</div>
              <div className="stat-label">Years Experience</div>
            </div>
            <div className="stat-box">
              <div className="stat-num">10+</div>
              <div className="stat-label">Projects Completed</div>
            </div>
            <div className="stat-box">
              <div className="stat-num">5+</div>
              <div className="stat-label">Live Modules</div>
            </div>
            <div className="stat-box">
              <div className="stat-num">500+</div>
              <div className="stat-label">Git Commits</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
