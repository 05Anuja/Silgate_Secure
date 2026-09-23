import React from 'react';
import { strategicAdvantagesData } from '../data/rakshnetData';
import AdvantageCard from '../components/AdvantageCard';

export function StrategicAdvantages() {
  return (
    <section className="benefits-section">
      <div className="container">
        <div className="section-header scroll-animate">
          <span className="section-label">{strategicAdvantagesData.label}</span>
          <h2 className="section-title">{strategicAdvantagesData.title}</h2>
          <p className="section-description">
            {strategicAdvantagesData.description}
          </p>
        </div>

        <div className="benefits-grid">
          {strategicAdvantagesData.advantages.map((adv) => (
            <AdvantageCard 
              key={adv.number}
              number={adv.number}
              title={adv.title}
              description={adv.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default StrategicAdvantages;
