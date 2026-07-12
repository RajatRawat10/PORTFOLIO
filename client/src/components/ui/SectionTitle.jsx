import React from 'react';

export const SectionTitle = ({ title, subtitle, centered = true }) => {
  const containerStyle = {
    marginBottom: 'var(--space-xxl)',
    textAlign: centered ? 'center' : 'left',
    display: 'flex',
    flexDirection: 'column',
    alignItems: centered ? 'center' : 'flex-start'
  };

  const titleStyle = {
    position: 'relative',
    fontWeight: '800',
    color: 'var(--text-primary)',
    marginBottom: 'var(--space-sm)'
  };

  const lineStyle = {
    content: '""',
    display: 'block',
    width: '60px',
    height: '4px',
    backgroundColor: 'var(--color-accent)',
    borderRadius: 'var(--radius-full)',
    marginTop: 'var(--space-sm)',
    marginInline: centered ? 'auto' : '0'
  };

  const subtitleStyle = {
    color: 'var(--text-subtle)',
    fontSize: 'clamp(1rem, 0.95rem + 0.25vw, 1.25rem)',
    maxWidth: '600px',
    marginTop: 'var(--space-sm)'
  };

  return (
    <div style={containerStyle} className="section-title-container">
      <h2 style={titleStyle}>
        {title}
        <span style={lineStyle}></span>
      </h2>
      {subtitle && <p style={subtitleStyle}>{subtitle}</p>}
    </div>
  );
};

export default SectionTitle;
