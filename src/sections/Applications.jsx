import React from 'react';
import { applicationsData } from '../data/rakshnetData';
import ApplicationCard from '../components/ApplicationCard';

export function Applications() {
  const getIcon = (type, color) => {
    switch (type) {
      case 'building':
        return (
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2">
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
            <polyline points="9 22 9 12 15 12 15 22"/>
          </svg>
        );
      case 'shield':
        return (
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
          </svg>
        );
      case 'creditCard':
        return (
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2">
            <rect x="1" y="4" width="22" height="16" rx="2" ry="2"/>
            <line x1="1" y1="10" x2="23" y2="10"/>
          </svg>
        );
      case 'clock':
        return (
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2">
            <circle cx="12" cy="12" r="10"/>
            <polyline points="12 6 12 12 16 14"/>
          </svg>
        );
      case 'checkCircle':
        return (
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2">
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
            <polyline points="22 4 12 14.01 9 11.01"/>
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <section className="use-cases-section">
      <div className="container">
        <div className="section-header scroll-animate">
          <span className="section-label">{applicationsData.label}</span>
          <h2 className="section-title">{applicationsData.title}</h2>
          <p className="section-description">
            {applicationsData.description}
          </p>
        </div>

        <div className="use-cases-grid">
          {applicationsData.applications.map((app, idx) => (
            <ApplicationCard 
              key={idx}
              title={app.title}
              description={app.description}
              iconSvg={getIcon(app.iconType, app.color)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Applications;
