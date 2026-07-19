import React from 'react';
import Button from '../../components/ui/Button';

export const ProjectCard = ({ project }) => {
  return (
    <div className="group project-card glow-card reveal flex flex-col rounded-xl bg-bg-surf border border-border-main shadow-sm overflow-hidden hover:-translate-y-1.5 hover:border-brand hover:shadow-md transition-all duration-300 h-full">
      <div className="relative aspect-[16/9] overflow-hidden bg-bg-surf-subtle">
        <img
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          src={project.image}
          alt={`${project.title} screenshot`}
          loading="lazy"
        />
      </div>

      <div className="p-6 flex flex-col justify-between flex-1">
        <div>
          <h3 className="m-0 text-xl font-bold mb-3">{project.title}</h3>
          
          <div className="flex flex-wrap gap-1.5 mb-4">
            {project.tags.map((tag, idx) => (
              <span key={idx} className="text-[0.75rem] font-bold text-brand bg-glow-custom px-2.5 py-1 rounded-sm">
                {tag}
              </span>
            ))}
          </div>

          <p className="text-sm text-text-muted mb-6 leading-relaxed">
            {project.description}
          </p>
        </div>

        <div className="flex gap-3">
          <Button variant="outline" href={project.githubUrl} target="_blank" className="flex-1 py-2 px-4 text-[0.85rem]">
            GitHub
          </Button>
          {project.liveUrl !== '#' && (
            <Button variant="primary" href={project.liveUrl} target="_blank" className="flex-1 py-2 px-4 text-[0.85rem]">
              Live Demo
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
