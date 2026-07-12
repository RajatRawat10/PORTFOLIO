import React from 'react';
import Button from '../../components/ui/Button';

export const ProjectCard = ({ project }) => {
  const cardStyle = {
    display: 'flex',
    flexDirection: 'column',
    borderRadius: 'var(--radius-md)',
    backgroundColor: 'var(--bg-surface)',
    border: '1px solid var(--border-color)',
    boxShadow: 'var(--shadow-sm)',
    overflow: 'hidden',
    transition: 'all var(--transition-normal)',
    height: '100%'
  };

  const imageContainerStyle = {
    position: 'relative',
    aspectRatio: '16 / 9',
    overflow: 'hidden',
    backgroundColor: 'var(--bg-surface-subtle)'
  };

  const imageStyle = {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    transition: 'transform var(--transition-normal)'
  };

  const tagListStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '0.4rem',
    marginBottom: '1rem'
  };

  const tagStyle = {
    fontSize: '0.75rem',
    fontWeight: '700',
    color: 'var(--color-accent)',
    backgroundColor: 'var(--glow-color)',
    padding: '0.2rem 0.6rem',
    borderRadius: 'var(--radius-sm)'
  };

  const contentStyle = {
    padding: '1.5rem',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    flex: 1
  };

  return (
    <div style={cardStyle} className="project-card glow-card reveal">
      <style>{`
        .project-card:hover {
          transform: translateY(-6px);
          border-color: var(--color-accent);
          box-shadow: var(--shadow-md);
        }
        .project-card:hover .project-card-img {
          transform: scale(1.05);
        }
      `}</style>
      
      <div style={imageContainerStyle}>
        <img
          className="project-card-img"
          style={imageStyle}
          src={project.image}
          alt={`${project.title} screenshot`}
          loading="lazy"
        />
      </div>

      <div style={contentStyle}>
        <div>
          <h3 style={{ margin: 0, fontSize: '1.25rem', fontWeight: '700', marginBottom: '0.75rem' }}>{project.title}</h3>
          
          <div style={tagListStyle}>
            {project.tags.map((tag, idx) => (
              <span key={idx} style={tagStyle}>{tag}</span>
            ))}
          </div>

          <p style={{ fontSize: '0.9rem', color: 'var(--text-subtle)', marginBottom: '1.5rem', lineHeight: '1.5' }}>
            {project.description}
          </p>
        </div>

        <div style={{ display: 'flex', gap: '0.75rem' }}>
          <Button variant="outline" href={project.githubUrl} target="_blank" style={{ flex: 1, padding: '0.5rem 1rem', fontSize: '0.85rem' }}>
            GitHub
          </Button>
          {project.liveUrl !== '#' && (
            <Button variant="primary" href={project.liveUrl} target="_blank" style={{ flex: 1, padding: '0.5rem 1rem', fontSize: '0.85rem' }}>
              Live Demo
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
