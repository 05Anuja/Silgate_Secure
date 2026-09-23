import React from 'react';
import { whyRakshNetData } from '../data/rakshnetData';

export function WhyRakshNet() {
  const getIcon = (type) => {
    switch (type) {
      case 'shield':
        return (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
          </svg>
        );
      case 'clock':
        return (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="10"/>
            <path d="M12 6v6l4 2"/>
          </svg>
        );
      case 'file':
        return (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
            <polyline points="14 2 14 8 20 8"/>
            <line x1="16" y1="13" x2="8" y2="13"/>
            <line x1="16" y1="17" x2="8" y2="17"/>
            <polyline points="10 9 9 9 8 9"/>
          </svg>
        );
      case 'code':
        return (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="16 18 22 12 16 6"/>
            <polyline points="8 6 2 12 8 18"/>
          </svg>
        );
      case 'lock':
        return (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
            <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
          </svg>
        );
      case 'cube':
        return (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
            <polyline points="3.27 6.96 12 12.01 20.73 6.96"/>
            <line x1="12" y1="22.08" x2="12" y2="12"/>
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <section className="uvp-section">
      <div className="container">
        <div className="uvp-header">
          <span className="section-label">{whyRakshNetData.label}</span>
          <h2 className="uvp-title">{whyRakshNetData.title}</h2>
          <p className="uvp-subtitle">{whyRakshNetData.subtitle}</p>
        </div>
        
        <div className="uvp-grid">
          {whyRakshNetData.cards.map((card, idx) => (
            <div key={idx} className="uvp-card scroll-animate">
              <div className="uvp-card-icon">
                {getIcon(card.iconType)}
              </div>
              <h3 className="uvp-card-title">{card.title}</h3>
              <p className="uvp-card-description">{card.description}</p>
              <div className="uvp-card-badge">{card.badge}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyRakshNet;
