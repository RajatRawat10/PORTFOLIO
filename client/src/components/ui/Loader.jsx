import React from 'react';
import '../../styles/animations.css';

export const Loader = ({ type = 'spinner' }) => {
  if (type === 'skeleton') {
    return (
      <div style={{ display: 'grid', gap: '1rem', width: '100%' }}>
        <div className="shimmer-effect" style={{ height: '2.5rem', borderRadius: 'var(--radius-sm)', width: '60%' }}></div>
        <div className="shimmer-effect" style={{ height: '1.25rem', borderRadius: 'var(--radius-sm)', width: '100%' }}></div>
        <div className="shimmer-effect" style={{ height: '1.25rem', borderRadius: 'var(--radius-sm)', width: '90%' }}></div>
        <div className="shimmer-effect" style={{ height: '1.25rem', borderRadius: 'var(--radius-sm)', width: '40%' }}></div>
      </div>
    );
  }

  // Default: Spinner
  const spinnerStyle = {
    width: '50px',
    height: '50px',
    border: '4px solid var(--bg-surface-subtle)',
    borderTop: '4px solid var(--color-accent)',
    borderRadius: '50%',
    animation: 'spin 1s linear infinite',
    margin: '3rem auto'
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '200px', width: '100%' }}>
      <style>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
      <div style={spinnerStyle} aria-label="Loading content"></div>
    </div>
  );
};

export default Loader;
