import React from 'react';

export function SectionHeading({
  label,
  title,
  description,
  isDark = false,
  className = '',
  center = true
}) {
  return (
    <div className={`section-header scroll-animate ${center ? 'text-center' : 'text-left'} ${className}`}>
      {label && (
        <span className={isDark ? 'section-label-dark' : 'section-label'}>
          {label}
        </span>
      )}
      {title && <h2 className="section-title">{title}</h2>}
      {description && <p className="section-description">{description}</p>}
    </div>
  );
}

export default SectionHeading;
