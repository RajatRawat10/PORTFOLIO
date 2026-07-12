import React from 'react';

export const SkillCard = ({ category }) => {
  const cardStyle = {
    padding: '2rem',
    borderRadius: 'var(--radius-md)',
    backgroundColor: 'var(--bg-surface)',
    border: '1px solid var(--border-color)',
    boxShadow: 'var(--shadow-sm)',
    transition: 'all var(--transition-normal)'
  };

  const listStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.25rem',
    marginTop: '1.5rem'
  };

  const skillRowStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.4rem'
  };

  const labelRowStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    fontSize: '0.9rem',
    fontWeight: '600'
  };

  const progressTrackStyle = {
    width: '100%',
    height: '6px',
    backgroundColor: 'var(--bg-surface-subtle)',
    borderRadius: 'var(--radius-full)',
    overflow: 'hidden'
  };

  const progressFillStyle = (level) => ({
    width: `${level}%`,
    height: '100%',
    backgroundColor: 'var(--color-accent)',
    borderRadius: 'var(--radius-full)',
    boxShadow: '0 0 8px var(--glow-color)',
    transition: 'width 1s cubic-bezier(0.16, 1, 0.3, 1)'
  });

  return (
    <div style={cardStyle} className="skill-card-container glow-card reveal">
      <style>{`
        .skill-card-container:hover {
          transform: translateY(-4px);
          border-color: var(--color-accent);
          box-shadow: var(--shadow-md);
        }
      `}</style>
      <h3 style={{ margin: 0, fontSize: '1.25rem', fontWeight: '700', borderBottom: '1px solid var(--border-color)', paddingBottom: '0.75rem' }}>
        {category.category}
      </h3>

      <div style={listStyle}>
        {category.skills.map((skill, idx) => (
          <div key={idx} style={skillRowStyle}>
            <div style={labelRowStyle}>
              <span style={{ color: 'var(--text-primary)' }}>{skill.name}</span>
              <span style={{ color: 'var(--color-accent)' }}>{skill.level}%</span>
            </div>
            <div style={progressTrackStyle}>
              <div style={progressFillStyle(skill.level)} className="progress-fill" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillCard;
