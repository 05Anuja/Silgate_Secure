import React from 'react';

export function SecurityLayerCard({
  colorClass = 'layer-blue',
  title,
  description,
  features = [],
  iconSvg
}) {
  return (
    <div className={`security-layer-card ${colorClass} scroll-animate`}>
      <div className="security-layer-icon">
        {iconSvg}
      </div>
      <h3 className="security-layer-title">{title}</h3>
      <p className="security-layer-description">{description}</p>
      <ul className="security-layer-features">
        {features.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default SecurityLayerCard;
