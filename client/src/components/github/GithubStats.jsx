import React from 'react';

export const GithubStats = ({ profile, totalContributions }) => {
  if (!profile) return null;

  const stats = [
    {
      label: "Public Repositories",
      value: profile.public_repos,
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
        </svg>
      )
    },
    {
      label: "Total Contributions",
      value: totalContributions || 0,
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
        </svg>
      )
    },
    {
      label: "Followers",
      value: profile.followers,
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
          <circle cx="9" cy="7" r="4"></circle>
          <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
        </svg>
      )
    }
  ];

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '1.5rem',
    width: '100%'
  };

  const cardStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '1.25rem',
    padding: '1.5rem',
    borderRadius: 'var(--radius-md)',
    backgroundColor: 'var(--bg-surface)',
    border: '1px solid var(--border-color)',
    boxShadow: 'var(--shadow-sm)'
  };

  return (
    <div style={gridStyle} className="github-stats-grid">
      {stats.map((stat, idx) => (
        <div key={idx} style={cardStyle} className="github-stat-card glow-card">
          <div style={{ color: 'var(--color-accent)', padding: '0.5rem', borderRadius: 'var(--radius-sm)', backgroundColor: 'var(--glow-color)' }}>
            {stat.icon}
          </div>
          <div>
            <div style={{ fontSize: '1.8rem', fontWeight: '800', lineHeight: 1 }}>{stat.value}</div>
            <div style={{ fontSize: '0.85rem', color: 'var(--text-subtle)', marginTop: '0.25rem', fontWeight: '600' }}>{stat.label}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default GithubStats;
