import React from 'react';

export function ApplicationCard({ title, description, iconSvg }) {
  return (
    <div className="use-case-card scroll-animate">
      <div className="use-case-icon">
        {iconSvg}
      </div>
      <h3 className="use-case-title">{title}</h3>
      <p className="use-case-description">{description}</p>
    </div>
  );
}

export default ApplicationCard;
