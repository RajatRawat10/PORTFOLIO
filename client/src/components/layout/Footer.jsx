import React from 'react';
import SocialLinks from '../ui/SocialLinks';
import { personalInfo } from '../../data/personalInfo';

export const Footer = () => {
  return (
    <footer className="py-12 border-t border-border-main bg-bg-surf text-center">
      <div className="container flex flex-col items-center gap-6">
        <SocialLinks />
        <p className="m-0 text-sm text-text-muted">
          &copy; {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
