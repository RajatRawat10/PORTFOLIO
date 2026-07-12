import '../../index.css';

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
  if (href) {
    return (
      <a
        href={href}
        className={`custom-btn btn-${variant} ${className}`}
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
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
