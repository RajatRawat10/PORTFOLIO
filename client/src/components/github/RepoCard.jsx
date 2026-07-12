import React from 'react';

export const RepoCard = ({ repo }) => {
  const cardStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: '1.5rem',
    borderRadius: 'var(--radius-md)',
    backgroundColor: 'var(--bg-surface)',
    border: '1px solid var(--border-color)',
    boxShadow: 'var(--shadow-sm)',
    transition: 'all var(--transition-normal)',
    height: '100%'
  };

  const getLanguageColor = (lang) => {
    switch (lang?.toLowerCase()) {
      case 'javascript':
        return '#f1e05a';
      case 'typescript':
        return '#3178c6';
      case 'html':
        return '#e34c26';
      case 'css':
        return '#563d7c';
      case 'python':
        return '#3572A5';
      default:
        return 'var(--color-accent)';
    }
  };

  return (
    <div style={cardStyle} className="repo-card glow-card">
      <style>{`
        .repo-card:hover {
          transform: translateY(-5px);
          border-color: var(--color-accent);
          box-shadow: var(--shadow-md);
        }
      `}</style>
      <div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.75rem' }}>
          <a
            href={repo.html_url}
            target="_blank"
            rel="noopener noreferrer"
            style={{ fontWeight: '700', fontSize: '1.1rem', color: 'var(--text-primary)' }}
            className="repo-title-link"
          >
            {repo.name}
          </a>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ color: 'var(--text-subtle)' }}>
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
            <polyline points="15 3 21 3 21 9"></polyline>
            <line x1="10" y1="14" x2="21" y2="3"></line>
          </svg>
        </div>

        <p style={{ fontSize: '0.9rem', color: 'var(--text-subtle)', marginBottom: '1rem', lineHeight: '1.4' }}>
          {repo.description || "No description provided."}
        </p>
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.85rem', color: 'var(--text-subtle)' }}>
        {repo.language && (
          <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
            <span
              style={{
                display: 'inline-block',
                width: '12px',
                height: '12px',
                borderRadius: '50%',
                backgroundColor: getLanguageColor(repo.language)
              }}
            />
            <span style={{ fontWeight: '600' }}>{repo.language}</span>
          </div>
        )}

        <div style={{ display: 'flex', gap: '1rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '3px' }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ fill: 'currentColor', color: '#ffb020' }}>
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
            </svg>
            <span style={{ fontWeight: '600' }}>{repo.stargazers_count}</span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '3px' }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20z"></path>
              <path d="M12 6v6l4 2"></path>
            </svg>
            <span style={{ fontWeight: '600' }}>{repo.forks_count}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RepoCard;
