import React from 'react';

const Button = ({ 
  children, 
  variant = 'default', 
  size = 'default', 
  className = '', 
  ...props 
}) => {
  // Style configurations
  const baseStyle = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '6px',
    fontWeight: '500',
    transition: 'all 0.2s ease',
    cursor: 'pointer',
    border: '1px solid transparent',
  };

  // Variant styles
  const variantStyles = {
    default: {
      backgroundColor: '#2563eb',
      color: 'white',
      borderColor: '#2563eb',
    },
    outline: {
      backgroundColor: 'transparent',
      color: '#374151',
      borderColor: '#d1d5db',
    },
    ghost: {
      backgroundColor: 'transparent',
      color: '#374151',
      borderColor: 'transparent',
    },
  };

  // Size styles
  const sizeStyles = {
    default: {
      padding: '10px 16px',
      fontSize: '14px',
    },
    sm: {
      padding: '8px 12px',
      fontSize: '13px',
    },
    lg: {
      padding: '12px 24px',
      fontSize: '16px',
    },
  };

  // Combine all styles
  const combinedStyle = {
    ...baseStyle,
    ...variantStyles[variant] || variantStyles.default,
    ...sizeStyles[size] || sizeStyles.default,
  };

  return (
    <button
      style={combinedStyle}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};

export { Button };