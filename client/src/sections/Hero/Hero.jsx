import React from 'react';
import Button from '../../components/ui/Button';
import { personalInfo } from '../../data/personalInfo';
import './Hero.css';

export const Hero = () => {
  return (
    <section id="hero" className="hero-section">
      <div className="container hero-grid">
        <div className="hero-content">
          <span className="hero-welcome">Hello, I'm</span>
          <h1 className="hero-name">{personalInfo.name}</h1>
          <h2 className="hero-tagline">{personalInfo.subtitle}</h2>
          <p className="hero-bio">{personalInfo.bio}</p>
          <div className="hero-actions">
            <Button variant="primary" href="#contact">
              Get in Touch
            </Button>
            <Button variant="secondary" href="#projects">
              View Work
            </Button>
          </div>
        </div>
        <div className="hero-graphics">
          <div className="hero-glow-blob" />
          <div className="hero-avatar-wrapper">
            <img
              className="hero-avatar"
              src={personalInfo.avatarUrl}
              alt={`${personalInfo.name} Profile`}
              loading="eager"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
