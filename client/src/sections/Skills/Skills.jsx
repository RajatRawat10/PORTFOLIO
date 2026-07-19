import React from 'react';
import SectionTitle from '../../components/ui/SectionTitle';
import SkillCard from './SkillCard';
import { skillsData } from '../../data/skills';
import useScrollAnimation from '../../hooks/useScrollAnimation';

export const Skills = () => {
  const containerRef = useScrollAnimation();

  return (
    <section id="skills" className="section" ref={containerRef}>
      <div className="container">
        <SectionTitle
          title="My Skills"
          subtitle="A visual roadmap of my technical capabilities and proficiency levels."
        />

        <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-10 w-full skills-grid">
          {skillsData.map((cat, idx) => (
            <SkillCard key={idx} category={cat} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
