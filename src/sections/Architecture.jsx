import React from 'react';
import { architectureData } from '../data/rakshnetData';
import ArchitectureCard from '../components/ArchitectureCard';

export function Architecture() {
  return (
    <section className="architecture-section">
      <div className="container">
        <div className="section-header">
          <span className="section-label">{architectureData.label}</span>
          <h2 className="section-title">{architectureData.title}</h2>
          <p className="section-description">
            {architectureData.description}
          </p>
        </div>
        
        <div className="architecture-visual">
          <div className="arch-flow">
            {architectureData.stages.map((stage, idx) => (
              <React.Fragment key={stage.number}>
                <ArchitectureCard 
                  number={stage.number}
                  title={stage.title}
                  stageClass={stage.stageClass}
                  items={stage.items}
                />
                
                {idx < architectureData.stages.length - 1 && (
                  <div className="flow-connector">
                    <div className="connector-line"></div>
                    <div className="connector-arrow">→</div>
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
          
          <div className="arch-metrics">
            {architectureData.metrics.map((metric, idx) => (
              <div key={idx} className="metric-badge">
                <div className="metric-value">{metric.value}</div>
                <div className="metric-label">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Architecture;
