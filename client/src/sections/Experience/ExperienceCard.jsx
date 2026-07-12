import React from 'react';

export const ExperienceCard = ({ exp }) => {
  const cardStyle = {
    position: 'relative',
    padding: '2rem',
    borderRadius: 'var(--radius-md)',
    backgroundColor: 'var(--bg-surface)',
    border: '1px solid var(--border-color)',
    boxShadow: 'var(--shadow-sm)',
    marginLeft: '2rem',
    transition: 'all var(--transition-normal)'
  };

  const timelineNodeStyle = {
    position: 'absolute',
    left: '-2.7rem',
    top: '2rem',
    width: '16px',
    height: '16px',
    borderRadius: '50%',
    backgroundColor: 'var(--color-accent)',
    border: '4px solid var(--bg-primary)',
    zIndex: 2,
    boxShadow: '0 0 10px var(--glow-color)'
  };

  return (
    <div style={{ position: 'relative', marginBottom: '2.5rem' }} className="timeline-item reveal">
      <style>{`
        .timeline-item:hover .exp-card {
          transform: translateX(4px);
          border-color: var(--color-accent);
          box-shadow: var(--shadow-md);
        }
      `}</style>
      <div style={timelineNodeStyle} />
      <div style={cardStyle} className="exp-card glow-card">
        <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1rem' }}>
          <div>
            <h3 style={{ margin: 0, fontSize: '1.25rem', fontWeight: '700' }}>{exp.role}</h3>
            <span style={{ fontSize: '1rem', color: 'var(--color-accent)', fontWeight: '600' }}>{exp.company}</span>
          </div>
          <span style={{
            fontSize: '0.85rem',
            fontWeight: '600',
            color: 'var(--text-subtle)',
            padding: '0.25rem 0.75rem',
            backgroundColor: 'var(--bg-surface-subtle)',
            borderRadius: 'var(--radius-full)',
            height: 'fit-content'
          }}>
            {exp.duration}
          </span>
        </div>
        <p style={{ margin: 0, fontSize: '0.95rem', color: 'var(--text-subtle)', lineHeight: '1.6' }}>
          {exp.description}
        </p>
      </div>
    </div>
  );
};

export default ExperienceCard;
