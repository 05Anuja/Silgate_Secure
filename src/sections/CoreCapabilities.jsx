import React from 'react';
import { coreCapabilitiesData } from '../data/rakshnetData';
import FeatureCard from '../components/FeatureCard';

export function CoreCapabilities() {
  const getIcon = (type) => {
    switch (type) {
      case 'shield':
        return (
          <svg viewBox="0 0 24 24">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        );
      case 'clock':
        return (
          <svg viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M12 6v6l4 2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        );
      case 'lock':
        return (
          <svg viewBox="0 0 24 24">
            <rect x="3" y="11" width="18" height="11" rx="2" ry="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M7 11V7a5 5 0 0 1 10 0v4" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        );
      case 'cube':
        return (
          <svg viewBox="0 0 24 24">
            <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" strokeLinecap="round" strokeLinejoin="round"/>
            <polyline points="3.27 6.96 12 12.01 20.73 6.96" strokeLinecap="round" strokeLinejoin="round"/>
            <line x1="12" y1="22.08" x2="12" y2="12" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        );
      case 'pulse':
        return (
          <svg viewBox="0 0 24 24">
            <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        );
      case 'layers':
        return (
          <svg viewBox="0 0 24 24">
            <path d="M12 2L2 7l10 5 10-5-10-5z" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M2 17l10 5 10-5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M2 12l10 5 10-5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <section className="features-section">
      <div className="container">
        <div className="section-header scroll-animate">
          <span className="section-label">{coreCapabilitiesData.label}</span>
          <h2 className="section-title">{coreCapabilitiesData.title}</h2>
          <p className="section-description">
            {coreCapabilitiesData.description}
          </p>
        </div>

        <div className="features-grid">
          {coreCapabilitiesData.cards.map((card, idx) => (
            <FeatureCard 
              key={idx}
              title={card.title}
              description={card.description}
              icon={getIcon(card.iconType)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default CoreCapabilities;
