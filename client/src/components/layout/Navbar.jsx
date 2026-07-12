import React, { useState, useEffect } from 'react';
import { NAV_LINKS, APP_NAME } from '../../utils/constants';

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [isDarkMode, setIsDarkMode] = useState(true);

  // Handle scroll active states and background changes
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Determine active section on scroll
      const sections = NAV_LINKS.map(link => document.getElementById(link.id));
      const scrollPosition = window.scrollY + 150; // offset for nav height

      for (let i = 0; i < sections.length; i++) {
        const section = sections[i];
        if (section) {
          const top = section.offsetTop;
          const height = section.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(NAV_LINKS[i].id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Theme Toggler
  const toggleTheme = () => {
    const root = document.documentElement;
    const currentScheme = root.style.getPropertyValue('color-scheme') || 'dark';
    const nextScheme = currentScheme === 'dark' ? 'light' : 'dark';
    
    root.style.setProperty('color-scheme', nextScheme);
    setIsDarkMode(nextScheme === 'dark');
  };

  const navStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    zIndex: 1000,
    transition: 'all var(--transition-normal)',
    paddingBlock: scrolled ? '0.75rem' : '1.5rem',
    borderBottom: scrolled ? '1px solid var(--glass-border)' : '1px solid transparent'
  };

  const containerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  };

  const logoStyle = {
    fontWeight: '800',
    fontSize: '1.25rem',
    color: 'var(--text-primary)',
    letterSpacing: '-0.5px'
  };

  const menuStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '2rem',
  };

  const linkStyle = (id) => ({
    color: activeSection === id ? 'var(--color-accent)' : 'var(--text-subtle)',
    fontWeight: '600',
    fontSize: '0.95rem',
    cursor: 'pointer',
    position: 'relative',
    transition: 'color var(--transition-fast)',
  });

  const toggleButtonStyle = {
    background: 'none',
    border: 'none',
    color: 'var(--text-primary)',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '0.5rem',
    borderRadius: 'var(--radius-sm)',
    backgroundColor: 'var(--bg-surface-subtle)'
  };

  return (
    <nav
      style={navStyle}
      className={scrolled ? 'glassmorphism' : ''}
    >
      <div className="container" style={containerStyle}>
        <a href="#hero" style={logoStyle}>
          {APP_NAME}
        </a>

        {/* Desktop Menu */}
        <div style={menuStyle} className="desktop-nav-menu">
          {NAV_LINKS.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              style={linkStyle(link.id)}
              className="nav-link-item"
            >
              {link.label}
              {activeSection === link.id && (
                <span
                  style={{
                    position: 'absolute',
                    bottom: '-4px',
                    left: 0,
                    width: '100%',
                    height: '2px',
                    backgroundColor: 'var(--color-accent)',
                    borderRadius: 'var(--radius-full)'
                  }}
                />
              )}
            </a>
          ))}

          <button
            onClick={toggleTheme}
            style={toggleButtonStyle}
            aria-label="Toggle light and dark mode theme"
          >
            {isDarkMode ? (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="5"></circle>
                <line x1="12" y1="1" x2="12" y2="3"></line>
                <line x1="12" y1="21" x2="12" y2="23"></line>
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                <line x1="1" y1="12" x2="3" y2="12"></line>
                <line x1="21" y1="12" x2="23" y2="12"></line>
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
              </svg>
            ) : (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="mobile-toggle-btn"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          style={{
            ...toggleButtonStyle,
            display: 'none',
          }}
          aria-label="Toggle mobile menu"
        >
          {mobileMenuOpen ? (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          ) : (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          className="mobile-nav-drawer glassmorphism"
          style={{
            position: 'absolute',
            top: '100%',
            left: 0,
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            padding: '1.5rem',
            gap: '1rem',
            borderBottom: '1px solid var(--border-color)',
          }}
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              style={{
                ...linkStyle(link.id),
                paddingBlock: '0.5rem'
              }}
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <button
            onClick={() => {
              toggleTheme();
              setMobileMenuOpen(false);
            }}
            style={{
              ...toggleButtonStyle,
              marginTop: '0.5rem',
              alignSelf: 'flex-start',
            }}
          >
            Toggle Theme
          </button>
        </div>
      )}

      {/* Embedded CSS rules for layout queries */}
      <style>{`
        @media (max-width: 768px) {
          .desktop-nav-menu {
            display: none !important;
          }
          .mobile-toggle-btn {
            display: flex !important;
          }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
