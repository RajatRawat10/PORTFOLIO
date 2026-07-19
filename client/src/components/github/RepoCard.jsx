import React from 'react';

export const RepoCard = ({ repo }) => {
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
    <div className="repo-card glow-card flex flex-col justify-between p-6 rounded-xl bg-bg-surf border border-border-main shadow-sm hover:-translate-y-1 hover:border-brand hover:shadow-md transition-all duration-300 h-full">
      <div>
        <div className="flex justify-between items-start mb-3">
          <a
            href={repo.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold text-lg text-text-main hover:text-brand transition-colors"
          >
            {repo.name}
          </a>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-text-muted">
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
            <polyline points="15 3 21 3 21 9"></polyline>
            <line x1="10" y1="14" x2="21" y2="3"></line>
          </svg>
        </div>

        <p className="text-sm text-text-muted mb-4 leading-normal">
          {repo.description || "No description provided."}
        </p>
      </div>

      <div className="flex justify-between items-center text-[0.85rem] text-text-muted">
        {repo.language && (
          <div className="flex items-center gap-1.5">
            <span
              className="inline-block w-3 h-3 rounded-full"
              style={{ backgroundColor: getLanguageColor(repo.language) }}
            />
            <span className="font-semibold">{repo.language}</span>
          </div>
        )}

        <div className="flex gap-4">
          <div className="flex items-center gap-1">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="fill-current text-[#ffb020]">
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
            </svg>
            <span className="font-semibold">{repo.stargazers_count}</span>
          </div>

          <div className="flex items-center gap-1">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20z"></path>
              <path d="M12 6v6l4 2"></path>
            </svg>
            <span className="font-semibold">{repo.forks_count}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RepoCard;
