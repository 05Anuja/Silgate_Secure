import React from 'react';
import { rakshNetLayerData } from '../data/rakshnetData';
import SecurityLayerCard from '../components/SecurityLayerCard';

export function RakshNetLayer() {
  const layerIcons = {
    'threat-intel': (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="32" cy="32" r="20" stroke="currentColor" strokeWidth="2.5"/>
        <circle cx="32" cy="32" r="14" stroke="currentColor" strokeWidth="2"/>
        <circle cx="32" cy="32" r="8" stroke="currentColor" strokeWidth="1.5" opacity="0.5"/>
        <path d="M32 12 L32 20 M52 32 L44 32 M32 52 L32 44 M12 32 L20 32" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <circle cx="32" cy="32" r="3" fill="currentColor"/>
        <path d="M22 22 L26 26 M42 22 L38 26 M42 42 L38 38 M22 42 L26 38" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.6"/>
      </svg>
    ),
    'nac': (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="14" y="20" width="36" height="28" rx="3" stroke="currentColor" strokeWidth="2.5"/>
        <path d="M22 20 L22 14 C22 11 24 8 28 8 L36 8 C40 8 42 11 42 14 L42 20" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
        <circle cx="32" cy="34" r="5" stroke="currentColor" strokeWidth="2"/>
        <line x1="32" y1="39" x2="32" y2="44" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <line x1="18" y1="28" x2="46" y2="28" stroke="currentColor" strokeWidth="1.5" opacity="0.4"/>
        <line x1="18" y1="40" x2="46" y2="40" stroke="currentColor" strokeWidth="1.5" opacity="0.4"/>
      </svg>
    ),
    'endpoint': (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="20" y="8" width="24" height="42" rx="3" stroke="currentColor" strokeWidth="2.5"/>
        <line x1="26" y1="46" x2="38" y2="46" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <circle cx="32" cy="28" r="8" stroke="currentColor" strokeWidth="2"/>
        <path d="M29 28 L31 30 L35 26" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        <rect x="26" y="36" width="12" height="3" rx="1.5" fill="currentColor" opacity="0.3"/>
        <line x1="20" y1="14" x2="44" y2="14" stroke="currentColor" strokeWidth="1.5" opacity="0.3"/>
      </svg>
    ),
    'email-web': (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="8" y="16" width="48" height="32" rx="3" stroke="currentColor" strokeWidth="2.5"/>
        <path d="M8 20 L32 36 L56 20" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="44" cy="38" r="10" fill="currentColor" opacity="0.15"/>
        <circle cx="44" cy="38" r="10" stroke="currentColor" strokeWidth="2"/>
        <path d="M40 38 L42 40 L48 34" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    'soc': (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="10" y="14" width="44" height="30" rx="3" stroke="currentColor" strokeWidth="2.5"/>
        <rect x="14" y="18" width="36" height="22" rx="2" stroke="currentColor" strokeWidth="2" opacity="0.5"/>
        <path d="M24 48 L40 48 M32 44 L32 48" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
        <rect x="18" y="24" width="12" height="6" rx="1" fill="currentColor" opacity="0.3"/>
        <rect x="34" y="24" width="12" height="6" rx="1" fill="currentColor" opacity="0.3"/>
        <rect x="18" y="32" width="28" height="4" rx="1" fill="currentColor" opacity="0.2"/>
        <line x1="10" y1="52" x2="54" y2="52" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
      </svg>
    ),
    'governance': (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M18 12 L38 12 L46 20 L46 50 C46 51.5 44.5 53 43 53 L18 53 C16.5 53 15 51.5 15 50 L15 15 C15 13.5 16.5 12 18 12 Z" stroke="currentColor" strokeWidth="2.5"/>
        <path d="M38 12 L38 20 L46 20" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="38" cy="38" r="8" stroke="currentColor" strokeWidth="2"/>
        <path d="M34 38 L36 40 L42 34" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        <line x1="20" y1="28" x2="32" y2="28" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.5"/>
        <line x1="20" y1="45" x2="28" y2="45" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.5"/>
      </svg>
    ),
    'iam': (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="32" cy="22" r="10" stroke="currentColor" strokeWidth="2.5"/>
        <circle cx="32" cy="22" r="6" fill="currentColor" opacity="0.2"/>
        <path d="M14 52 C14 42 22 36 32 36 C42 36 50 42 50 52" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
        <path d="M42 18 L48 18 M45 15 L45 21" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <circle cx="45" cy="18" r="8" stroke="currentColor" strokeWidth="1.5" opacity="0.4"/>
      </svg>
    ),
    'data-prot': (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M32 10 L16 16 L16 32 C16 42 22 50 32 54 C42 50 48 42 48 32 L48 16 L32 10 Z" stroke="currentColor" strokeWidth="2.5"/>
        <path d="M32 18 L22 22 L22 32 C22 38 26 42 32 44" stroke="currentColor" strokeWidth="2" opacity="0.5"/>
        <circle cx="32" cy="32" r="6" stroke="currentColor" strokeWidth="2"/>
        <line x1="32" y1="26" x2="32" y2="22" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
        <line x1="29" y1="32" x2="35" y2="32" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    'unified-dash': (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="10" y="10" width="44" height="44" rx="4" stroke="currentColor" strokeWidth="2.5"/>
        <line x1="10" y1="20" x2="54" y2="20" stroke="currentColor" strokeWidth="2.5"/>
        <circle cx="16" cy="15" r="2" fill="currentColor"/>
        <circle cx="22" cy="15" r="2" fill="currentColor"/>
        <circle cx="28" cy="15" r="2" fill="currentColor"/>
        <rect x="16" y="28" width="14" height="10" rx="2" fill="currentColor" opacity="0.2"/>
        <rect x="34" y="28" width="14" height="10" rx="2" fill="currentColor" opacity="0.2"/>
        <rect x="16" y="42" width="32" height="6" rx="2" fill="currentColor" opacity="0.15"/>
        <line x1="20" y1="32" x2="26" y2="32" stroke="currentColor" strokeWidth="1.5" opacity="0.6"/>
        <line x1="38" y1="32" x2="44" y2="32" stroke="currentColor" strokeWidth="1.5" opacity="0.6"/>
      </svg>
    )
  };

  return (
    <section className="vigil-layer-section">
      <div className="container">
        <div className="section-header scroll-animate">
          <span className="section-label">{rakshNetLayerData.label}</span>
          <h2 className="section-title">{rakshNetLayerData.title}</h2>
          <p className="section-description">
            {rakshNetLayerData.description}
          </p>
        </div>

        <div className="security-stack-grid">
          {rakshNetLayerData.layers.map((layer) => (
            <SecurityLayerCard 
              key={layer.id}
              colorClass={layer.colorClass}
              title={layer.title}
              description={layer.description}
              features={layer.features}
              iconSvg={layerIcons[layer.id]}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default RakshNetLayer;
