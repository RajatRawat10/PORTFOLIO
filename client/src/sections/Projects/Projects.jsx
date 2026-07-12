import React from 'react';
import SectionTitle from '../../components/ui/SectionTitle';
import ProjectCard from './ProjectCard';
import { projectsData } from '../../data/projects';
import useScrollAnimation from '../../hooks/useScrollAnimation';

export const Projects = () => {
  const containerRef = useScrollAnimation();

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
    gap: '2.5rem',
    width: '100%'
  };

  return (
    <section id="projects" className="section" ref={containerRef}>
      <div className="container">
        <SectionTitle
          title="Featured Projects"
          subtitle="A curated showcase of applications I have designed, built, and deployed."
        />

        <div style={gridStyle} className="projects-grid">
          {projectsData.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
