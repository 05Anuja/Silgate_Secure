import React from 'react';

export function ArchitectureCard({ number, title, stageClass, items = [] }) {
  return (
    <div className={`flow-stage ${stageClass}`}>
      <div className="stage-number">{number}</div>
      <div className="stage-content">
        <h4>{title}</h4>
        <div className="stage-items">
          {items.map((item, idx) => (
            <div key={idx} className="stage-item">
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ArchitectureCard;
