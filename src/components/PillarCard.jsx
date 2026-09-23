import React from 'react';

export function PillarCard({ color, title, description, iconSvg }) {
  // Title can have line break if it contains newline or split
  const titleParts = title.split('\n');

  return (
    <div className="pillar-card scroll-animate" data-color={color}>
      <div className="pillar-card-inner">
        <div className="circuit-lines"></div>
        <div className="pillar-glow"></div>
        
        <div className="pillar-icon-wrapper">
          {iconSvg}
        </div>

        <h3 className="pillar-title">
          {titleParts.map((part, i) => (
            <React.Fragment key={i}>
              {part}
              {i < titleParts.length - 1 && <br />}
            </React.Fragment>
          ))}
        </h3>
        
        <p className="pillar-description">
          {description}
        </p>

        <div className="pillar-connector"></div>
      </div>
    </div>
  );
}

export default PillarCard;
