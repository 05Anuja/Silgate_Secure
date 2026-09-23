import React from 'react';
import { challengeData } from '../data/rakshnetData';
import StatCard from '../components/StatCard';
import Solution from './Solution';

export function Challenge() {
  return (
    <section className="why-now-section">
      <div className="container">
        <div className="why-now-content">
          <div className="why-now-left">
            <span className="section-label-dark">{challengeData.label}</span>
            <h2 className="why-now-title">{challengeData.title}</h2>
            <p className="why-now-description">
              {challengeData.description}
            </p>
            
            <div className="threat-stats">
              {challengeData.stats.map((stat, idx) => (
                <StatCard 
                  key={idx} 
                  number={stat.number} 
                  label={stat.label} 
                />
              ))}
            </div>
          </div>
          
          <div className="why-now-right">
            <Solution />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Challenge;
