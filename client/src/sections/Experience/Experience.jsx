import React from 'react';
import SectionTitle from '../../components/ui/SectionTitle';
import ExperienceCard from './ExperienceCard';
import { experienceData } from '../../data/experience';
import useScrollAnimation from '../../hooks/useScrollAnimation';

export const Experience = () => {
  const containerRef = useScrollAnimation();

  const timelineContainerStyle = {
    position: 'relative',
    maxWidth: '800px',
    marginInline: 'auto',
    paddingLeft: '1rem',
  };

  const lineStyle = {
    position: 'absolute',
    left: '0.45rem',
    top: '2rem',
    bottom: '2rem',
    width: '2px',
    backgroundColor: 'var(--border-color)',
    zIndex: 1
  };

  return (
    <section id="experience" className="section" ref={containerRef}>
      <div className="container">
        <SectionTitle
          title="Work Experience"
          subtitle="A summary of my professional progression and key career milestones."
        />

        <div style={timelineContainerStyle} className="experience-timeline">
          <div style={lineStyle} />
          {experienceData.map((exp) => (
            <ExperienceCard key={exp.id} exp={exp} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
