import React from 'react';
import SectionTitle from '../../components/ui/SectionTitle';
import SkillCard from './SkillCard';
import { skillsData } from '../../data/skills';
import useScrollAnimation from '../../hooks/useScrollAnimation';

export const Skills = () => {
  const containerRef = useScrollAnimation();

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '2.5rem',
    width: '100%'
  };

  return (
    <section id="skills" className="section" ref={containerRef}>
      <div className="container">
        <SectionTitle
          title="My Skills"
          subtitle="A visual roadmap of my technical capabilities and proficiency levels."
        />

        <div style={gridStyle} className="skills-grid">
          {skillsData.map((cat, idx) => (
            <SkillCard key={idx} category={cat} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
