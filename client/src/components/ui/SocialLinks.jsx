import React from 'react';
import { personalInfo } from '../../data/personalInfo';

export const SocialLinks = ({ className = '' }) => {
  const containerStyle = {
    display: 'flex',
    gap: '1.25rem',
    alignItems: 'center'
  };

  const linkStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '44px',
    height: '44px',
    borderRadius: '50%',
    backgroundColor: 'var(--bg-surface)',
    border: '1px solid var(--border-color)',
    color: 'var(--text-subtle)',
    fontSize: '1.25rem',
    transition: 'all var(--transition-fast)',
    boxShadow: 'var(--shadow-sm)'
  };

  const linkHoverStyle = `
    .social-link-item:hover {
      color: var(--color-accent) !important;
      border-color: var(--color-accent) !important;
      transform: translateY(-4px);
      box-shadow: var(--shadow-md);
      background-color: var(--glow-color) !important;
    }
  `;

  return (
    <div style={containerStyle} className={`social-links-list ${className}`}>
      <style>{linkHoverStyle}</style>
      
      <a
        href={personalInfo.github}
        target="_blank"
        rel="noopener noreferrer"
        style={linkStyle}
        className="social-link-item"
        aria-label="GitHub Profile"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
        </svg>
      </a>

      <a
        href={personalInfo.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        style={linkStyle}
        className="social-link-item"
        aria-label="LinkedIn Profile"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
          <rect x="2" y="9" width="4" height="12"></rect>
          <circle cx="4" cy="4" r="2"></circle>
        </svg>
      </a>

      <a
        href={personalInfo.twitter}
        target="_blank"
        rel="noopener noreferrer"
        style={linkStyle}
        className="social-link-item"
        aria-label="Twitter Profile"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
        </svg>
      </a>

      <a
        href={`mailto:${personalInfo.email}`}
        style={linkStyle}
        className="social-link-item"
        aria-label="Email Address"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
          <polyline points="22,6 12,13 2,6"></polyline>
        </svg>
      </a>
    </div>
  );
};

export default SocialLinks;
