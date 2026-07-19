import React from 'react';
import Button from '../../components/ui/Button';
import { personalInfo } from '../../data/personalInfo';

export const Hero = () => {
  return (
    <section id="hero" className="flex items-center justify-center min-h-screen relative overflow-hidden pt-20">
      <div className="container grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] items-center gap-12 w-full text-center lg:text-left">
        <div className="flex flex-col items-center lg:items-start">
          <span 
            className="hero-animated-item text-lg font-semibold text-brand uppercase tracking-[2px] mb-2"
            style={{ animationDelay: '0.1s' }}
          >
            Hello, I'm
          </span>
          <h1 
            className="hero-animated-item text-[clamp(2.5rem,2rem+3vw,4.5rem)] font-extrabold leading-[1.1] tracking-tight mb-4"
            style={{ animationDelay: '0.2s' }}
          >
            {personalInfo.name}
          </h1>
          <h2 
            className="hero-animated-item text-[clamp(1.25rem,1.1rem+1vw,2rem)] font-bold text-text-main mb-6"
            style={{ animationDelay: '0.3s' }}
          >
            {personalInfo.subtitle}
          </h2>
          <p 
            className="hero-animated-item text-[1.1rem] text-text-muted max-w-[550px] mb-8"
            style={{ animationDelay: '0.4s' }}
          >
            {personalInfo.heroBio}
          </p>
          <div 
            className="hero-animated-item flex gap-4 flex-wrap justify-center lg:justify-start"
            style={{ animationDelay: '0.5s' }}
          >
            <Button variant="primary" href="#contact">
              Get in Touch
            </Button>
            <Button variant="secondary" href="#projects">
              View Work
            </Button>
          </div>
        </div>
        <div className="flex justify-center items-center relative">
          <div className="absolute w-[350px] h-[350px] rounded-full bg-[radial-gradient(circle,var(--glow-color)_0%,transparent_70%)] -z-10 blur-[20px] pointer-events-none" />
          <div className="relative w-[220px] h-[220px] lg:w-[280px] lg:h-[280px] rounded-full p-2 bg-gradient-to-br from-brand to-transparent shadow-2xl animate-float-avatar">
            <img
              className="w-full h-full object-cover rounded-full border-4 border-bg-surf bg-bg-surf-subtle"
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
