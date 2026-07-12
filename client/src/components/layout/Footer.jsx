import React from 'react';
import SocialLinks from '../ui/SocialLinks';
import { personalInfo } from '../../data/personalInfo';

export const Footer = () => {
  const footerStyle = {
    paddingBlock: '3rem',
    borderTop: '1px solid var(--border-color)',
    backgroundColor: 'var(--bg-surface)',
    textAlign: 'center'
  };

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '1.5rem',
  };

  return (
    <footer style={footerStyle}>
      <div className="container" style={containerStyle}>
        <SocialLinks />
        <p style={{ margin: 0, fontSize: '0.9rem', color: 'var(--text-subtle)' }}>
          &copy; {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
