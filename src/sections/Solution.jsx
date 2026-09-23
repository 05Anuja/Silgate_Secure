import React from 'react';
import { challengeData } from '../data/rakshnetData';

export function Solution() {
  const getIcon = (type) => {
    switch (type) {
      case 'shield':
        return (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
          </svg>
        );
      case 'ai':
        return (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="3"/>
            <path d="M12 1v6m0 6v6"/>
          </svg>
        );
      case 'lock':
        return (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="3" y="11" width="18" height="11" rx="2"/>
            <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <div className="solution-diagram">
      <div className="diagram-header">
        <span className="section-label-dark">{challengeData.solutionLabel}</span>
        <h3>{challengeData.solutionTitle}</h3>
      </div>
      
      <div className="diagram-layers">
        {challengeData.solutionLayers.map((layer, index) => (
          <React.Fragment key={layer.layer}>
            <div className="diagram-layer" data-layer={layer.layer}>
              <div className="layer-icon">
                {getIcon(layer.type)}
              </div>
              <div className="layer-content">
                <div className="layer-title">{layer.title}</div>
                <div className="layer-desc">{layer.desc}</div>
              </div>
            </div>
            
            {index < challengeData.solutionLayers.length - 1 && (
              <div className="diagram-arrow">↓</div>
            )}
          </React.Fragment>
        ))}
      </div>
      
      <div className="diagram-result">
        <div className="result-badge">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="20 6 9 17 4 12"/>
          </svg>
          <span>{challengeData.resultText}</span>
        </div>
      </div>
    </div>
  );
}

export default Solution;
