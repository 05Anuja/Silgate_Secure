import React from 'react';

export function FeatureCard({ title, description, icon, className = '' }) {
  return (
    <div className={`feature-card scroll-animate ${className}`}>
      {icon && <div className="feature-icon">{icon}</div>}
      <h3 className="feature-title">{title}</h3>
      <p className="feature-description">{description}</p>
    </div>
  );
}

export default FeatureCard;
