import React from 'react';
import '../../styles/globals.css';

export const Button = ({
  children,
  variant = 'primary',
  onClick,
  type = 'button',
  disabled = false,
  className = '',
  href,
  ...props
}) => {
  const baseStyle = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '0.5rem',
    fontFamily: 'var(--font-sans)',
    fontWeight: '600',
    padding: '0.75rem 1.5rem',
    borderRadius: 'var(--radius-md)',
    transition: 'all var(--transition-fast)',
    cursor: disabled ? 'not-allowed' : 'pointer',
    border: '1px solid transparent',
    opacity: disabled ? 0.6 : 1,
    fontSize: '0.95rem'
  };

  const getVariantStyles = () => {
    switch (variant) {
      case 'primary':
        return {
          backgroundColor: 'var(--color-accent)',
          color: '#ffffff',
          boxShadow: 'var(--shadow-md)',
          ':hover': {
            backgroundColor: 'var(--color-accent-hover)',
            transform: 'translateY(-2px)'
          }
        };
      case 'secondary':
        return {
          backgroundColor: 'var(--bg-surface-subtle)',
          color: 'var(--text-primary)',
          border: '1px solid var(--border-color)',
          ':hover': {
            backgroundColor: 'var(--border-color)',
            transform: 'translateY(-2px)'
          }
        };
      case 'outline':
        return {
          backgroundColor: 'transparent',
          color: 'var(--color-accent)',
          border: '2px solid var(--color-accent)',
          ':hover': {
            backgroundColor: 'var(--glow-color)',
            transform: 'translateY(-2px)'
          }
        };
      case 'ghost':
        return {
          backgroundColor: 'transparent',
          color: 'var(--text-subtle)',
          ':hover': {
            backgroundColor: 'var(--bg-surface-subtle)',
            color: 'var(--text-primary)'
          }
        };
      default:
        return {};
    }
  };

  const variantStyles = getVariantStyles();

  // Combine inline styles with customizable classes
  const appliedStyle = {
    ...baseStyle,
    ...variantStyles
  };

  // Support link wrapper
  if (href) {
    return (
      <a
        href={href}
        className={`custom-btn btn-${variant} ${className}`}
        style={appliedStyle}
        {...props}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`custom-btn btn-${variant} ${className}`}
      style={appliedStyle}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
