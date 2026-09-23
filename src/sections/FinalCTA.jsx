import React from 'react';
import { finalCTAData } from '../data/rakshnetData';

export function FinalCTA() {
  return (
    <section className="cta-section">
      <div className="container">
        <div className="cta-content">
          <h2 className="cta-title">{finalCTAData.title}</h2>
          <p className="cta-description">
            {finalCTAData.description}
          </p>
          <div className="cta-buttons">
            <a href={finalCTAData.scheduleHref} className="btn btn-primary">
              Schedule Consultation
              <svg className="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M5 12h14M12 5l7 7-7 7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <a href={finalCTAData.whitepaperHref} className="btn btn-secondary">
              Download Whitepaper
              <svg className="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FinalCTA;
