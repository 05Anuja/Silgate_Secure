import React from 'react';

export function AdvantageCard({ number, title, description }) {
  return (
    <div className="benefit-card scroll-animate">
      <div className="benefit-number">{number}</div>
      <h3 className="benefit-title">{title}</h3>
      <p className="benefit-description">{description}</p>
    </div>
  );
}

export default AdvantageCard;
