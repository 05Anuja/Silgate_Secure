import React from 'react';
import { technologyData } from '../data/rakshnetData';

export function Technology() {
  const getIcon = (type) => {
    switch (type) {
      case 'ai':
        return (
          <svg viewBox="0 0 24 24">
            <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
          </svg>
        );
      case 'ml':
        return (
          <svg viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="3"/>
            <path d="M12 1v6m0 6v6"/>
            <path d="m5.64 5.64 4.24 4.24m4.24 4.24 4.24 4.24"/>
            <path d="M1 12h6m6 0h6"/>
            <path d="m5.64 18.36 4.24-4.24m4.24-4.24 4.24-4.24"/>
          </svg>
        );
      case 'blockchain':
        return (
          <svg viewBox="0 0 24 24">
            <path d="M12 2L2 7l10 5 10-5-10-5z"/>
            <path d="M2 17l10 5 10-5M2 12l10 5 10-5"/>
          </svg>
        );
      case 'edge':
        return (
          <svg viewBox="0 0 24 24">
            <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
          </svg>
        );
      case 'quantum':
        return (
          <svg viewBox="0 0 24 24">
            <rect x="4" y="4" width="16" height="16" rx="2" ry="2"/>
            <rect x="9" y="9" width="6" height="6"/>
            <line x1="9" y1="1" x2="9" y2="4"/>
            <line x1="15" y1="1" x2="15" y2="4"/>
            <line x1="9" y1="20" x2="9" y2="23"/>
            <line x1="15" y1="20" x2="15" y2="23"/>
            <line x1="20" y1="9" x2="23" y2="9"/>
            <line x1="20" y1="14" x2="23" y2="14"/>
            <line x1="1" y1="9" x2="4" y2="9"/>
            <line x1="1" y1="14" x2="4" y2="14"/>
          </svg>
        );
      case 'zeroTrust':
        return (
          <svg viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10"/>
            <circle cx="12" cy="12" r="6"/>
            <circle cx="12" cy="12" r="2"/>
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <section className="tech-stack-section">
      <div className="container">
        <div className="section-header scroll-animate">
          <span className="section-label">{technologyData.label}</span>
          <h2 className="section-title">{technologyData.title}</h2>
          <p className="section-description">
            {technologyData.description}
          </p>
        </div>

        <div className="tech-stack-grid">
          {technologyData.items.map((item, idx) => (
            <div key={idx} className="tech-stack-item scroll-animate">
              <div className="tech-stack-icon">
                {getIcon(item.iconType)}
              </div>
              <p className="tech-stack-name">{item.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Technology;
