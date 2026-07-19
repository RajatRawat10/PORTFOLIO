import React from 'react';
import SectionTitle from '../../components/ui/SectionTitle';
import ExperienceCard from './ExperienceCard';
import { experienceData } from '../../data/experience';
import useScrollAnimation from '../../hooks/useScrollAnimation';

export const Experience = () => {
  const containerRef = useScrollAnimation();

  return (
    <section id="experience" className="section" ref={containerRef}>
      <div className="container">
        <SectionTitle
          title="Work Experience"
          subtitle="A summary of my professional progression and key career milestones."
        />

        <div className="relative max-w-[800px] mx-auto pl-4 experience-timeline">
          <div className="absolute left-[0.45rem] top-8 bottom-8 w-[2px] bg-border-main z-10" />
          {experienceData.map((exp) => (
            <ExperienceCard key={exp.id} exp={exp} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
