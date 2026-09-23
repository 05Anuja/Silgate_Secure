import React from 'react';

export function Button({ 
  children, 
  variant = 'primary', 
  href = '#', 
  icon, 
  onClick, 
  className = '', 
  ...props 
}) {
  const isLink = Boolean(href);
  const Component = isLink ? 'a' : 'button';
  const variantClass = variant === 'secondary' ? 'btn-secondary' : 'btn-primary';

  return (
    <Component
      href={href}
      onClick={onClick}
      className={`btn ${variantClass} ${className}`}
      {...props}
    >
      {children}
      {icon && <span className="btn-icon">{icon}</span>}
    </Component>
  );
}

export default Button;
