import React from 'react';
import { operationalExcellenceData } from '../data/rakshnetData';
import PillarCard from '../components/PillarCard';

export function OperationalExcellence() {
  const pillarIcons = {
    'cyber-defence': (
      <svg className="pillar-icon" viewBox="0 0 80 80" fill="none">
        <path d="M40 8L12 18V38C12 54 22 68 40 74C58 68 68 54 68 38V18L40 8Z" stroke="currentColor" strokeWidth="1" opacity="0.2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M40 10L14 19V37C14 52 23 65 40 71C57 65 66 52 66 37V19L40 10Z" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M40 16L20 23V37C20 48 28 58 40 63C52 58 60 48 60 37V23L40 16Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.4"/>
        <line x1="40" y1="16" x2="40" y2="63" stroke="currentColor" strokeWidth="1" opacity="0.3"/>
        <circle cx="36" cy="36" r="11" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
        <circle cx="36" cy="36" r="8" stroke="currentColor" strokeWidth="1.5" opacity="0.3"/>
        <path d="M44 44L52 52" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
        <path d="M44 44L52 52" stroke="currentColor" strokeWidth="1.5" opacity="0.5"/>
        <line x1="36" y1="31" x2="36" y2="41" stroke="currentColor" strokeWidth="1.5" opacity="0.4"/>
        <line x1="31" y1="36" x2="41" y2="36" stroke="currentColor" strokeWidth="1.5" opacity="0.4"/>
        <circle cx="36" cy="36" r="2" fill="currentColor" opacity="0.6"/>
        <path d="M28 28L32 32M48 28L44 32M28 44L32 40M48 44L44 40" stroke="currentColor" strokeWidth="1" opacity="0.3" strokeLinecap="round"/>
        <path d="M40 10C40 10 35 15 35 20" stroke="currentColor" strokeWidth="1" opacity="0.25" strokeDasharray="2,3"/>
        <path d="M40 10C40 10 45 15 45 20" stroke="currentColor" strokeWidth="1" opacity="0.25" strokeDasharray="2,3"/>
      </svg>
    ),
    'core-operation': (
      <svg className="pillar-icon" viewBox="0 0 80 80" fill="none">
        <rect x="10" y="18" width="60" height="40" rx="3" stroke="currentColor" strokeWidth="1" opacity="0.2"/>
        <rect x="12" y="20" width="56" height="36" rx="2" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        <rect x="16" y="24" width="48" height="28" rx="1" stroke="currentColor" strokeWidth="1" opacity="0.3"/>
        <path d="M35 56L45 56M40 56V62M32 62L48 62" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        <rect x="38" y="59" width="4" height="3" fill="currentColor" opacity="0.3"/>
        <rect x="26" y="32" width="28" height="14" rx="2" fill="currentColor" opacity="0.1"/>
        <text x="40" y="42" fontFamily="Poppins, sans-serif" fontSize="11" fontWeight="700" fill="currentColor" textAnchor="middle" letterSpacing="1">SOC</text>
        <circle cx="18" cy="26" r="1.5" fill="currentColor" opacity="0.8"/>
        <circle cx="23" cy="26" r="1.5" fill="currentColor" opacity="0.6"/>
        <circle cx="28" cy="26" r="1.5" fill="currentColor" opacity="0.4"/>
        <polyline points="18,48 22,45 26,47 30,43 34,45" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" opacity="0.5"/>
        <polyline points="46,48 50,44 54,46 58,42 62,44" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" opacity="0.5"/>
        <rect x="18" y="50" width="2" height="4" rx="1" fill="currentColor" opacity="0.4"/>
        <rect x="22" y="48" width="2" height="6" rx="1" fill="currentColor" opacity="0.5"/>
        <rect x="26" y="49" width="2" height="5" rx="1" fill="currentColor" opacity="0.3"/>
        <rect x="30" y="47" width="2" height="7" rx="1" fill="currentColor" opacity="0.6"/>
        <rect x="48" y="51" width="2" height="3" rx="1" fill="currentColor" opacity="0.4"/>
        <rect x="52" y="49" width="2" height="5" rx="1" fill="currentColor" opacity="0.5"/>
        <rect x="56" y="48" width="2" height="6" rx="1" fill="currentColor" opacity="0.6"/>
        <rect x="60" y="50" width="2" height="4" rx="1" fill="currentColor" opacity="0.3"/>
        <circle cx="58" cy="30" r="3" stroke="currentColor" strokeWidth="1.5" opacity="0.6"/>
        <circle cx="58" cy="30" r="1.5" fill="currentColor" opacity="0.4"/>
        <circle cx="20" cy="38" r="1" fill="currentColor" opacity="0.5"/>
        <circle cx="60" cy="38" r="1" fill="currentColor" opacity="0.5"/>
      </svg>
    ),
    'infrastructure-protection': (
      <svg className="pillar-icon" viewBox="0 0 80 80" fill="none">
        <rect x="22" y="34" width="36" height="32" rx="4" stroke="currentColor" strokeWidth="1" opacity="0.2"/>
        <rect x="24" y="36" width="32" height="28" rx="3" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        <rect x="28" y="40" width="24" height="20" rx="2" stroke="currentColor" strokeWidth="1" opacity="0.3"/>
        <path d="M30 36V24C30 17.4 34.5 12 40 12C45.5 12 50 17.4 50 24V36" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M33 36V24C33 19 36 15 40 15C44 15 47 19 47 24V36" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.4"/>
        <circle cx="40" cy="48" r="4" stroke="currentColor" strokeWidth="2" fill="currentColor" opacity="0.1"/>
        <circle cx="40" cy="48" r="2.5" fill="currentColor" opacity="0.3"/>
        <path d="M40 50L40 56" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
        <path d="M38 56L42 56" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <circle cx="40" cy="24" r="3" stroke="currentColor" strokeWidth="1.5" opacity="0.5"/>
        <circle cx="40" cy="24" r="1.5" fill="currentColor" opacity="0.4"/>
        <line x1="33" y1="20" x2="30" y2="17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.5"/>
        <line x1="47" y1="20" x2="50" y2="17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.5"/>
        <line x1="40" y1="12" x2="40" y2="8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.5"/>
        <circle cx="30" cy="17" r="1.5" fill="currentColor" opacity="0.5"/>
        <circle cx="50" cy="17" r="1.5" fill="currentColor" opacity="0.5"/>
        <circle cx="40" cy="8" r="1.5" fill="currentColor" opacity="0.5"/>
        <path d="M18 32L18 28L22 28" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.6"/>
        <path d="M62 32L62 28L58 28" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.6"/>
        <path d="M18 68L18 72L22 72" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.6"/>
        <path d="M62 68L62 72L58 72" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.6"/>
        <circle cx="20" cy="50" r="1.5" fill="currentColor" opacity="0.4"/>
        <circle cx="60" cy="50" r="1.5" fill="currentColor" opacity="0.4"/>
        <rect x="36" y="44" width="8" height="3" rx="1" fill="currentColor" opacity="0.2"/>
      </svg>
    ),
    'investigations-forensics': (
      <svg className="pillar-icon" viewBox="0 0 80 80" fill="none">
        <path d="M40 8C26 8 16 18 16 32C16 46 26 56 40 56" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" opacity="0.3"/>
        <path d="M40 8C54 8 64 18 64 32C64 46 54 56 40 56" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" opacity="0.3"/>
        <path d="M40 12C28 12 20 20 20 32C20 44 28 52 40 52" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
        <path d="M40 12C52 12 60 20 60 32C60 44 52 52 40 52" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
        <path d="M40 18C31 18 25 24 25 32C25 40 31 46 40 46" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.8"/>
        <path d="M40 18C49 18 55 24 55 32C55 40 49 46 40 46" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.8"/>
        <path d="M40 24C34 24 30 28 30 32C30 36 34 40 40 40" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.6"/>
        <path d="M40 24C46 24 50 28 50 32C50 36 46 40 40 40" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.6"/>
        <path d="M40 28C37 28 35 30 35 32C35 34 37 36 40 36" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.5"/>
        <path d="M40 28C43 28 45 30 45 32C45 34 43 36 40 36" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.5"/>
        <line x1="40" y1="8" x2="40" y2="56" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <path d="M12 36C12 22 22 10 40 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.3" strokeDasharray="3,2"/>
        <path d="M68 36C68 22 58 10 40 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.3" strokeDasharray="3,2"/>
        <line x1="10" y1="60" x2="70" y2="60" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.5"/>
        <line x1="14" y1="64" x2="66" y2="64" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.4"/>
        <circle cx="12" cy="60" r="2" fill="currentColor" opacity="0.6"/>
        <circle cx="68" cy="60" r="2" fill="currentColor" opacity="0.6"/>
        <circle cx="40" cy="32" r="2" fill="currentColor" opacity="0.7"/>
      </svg>
    ),
    'governance-compliance': (
      <svg className="pillar-icon" viewBox="0 0 80 80" fill="none">
        <path d="M22 12H46L60 26V68C60 70 58 72 56 72H22C20 72 18 70 18 68V16C18 14 20 12 22 12Z" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M24 16H44L56 28V66C56 67 55 68 54 68H24C23 68 22 67 22 66V18C22 17 23 16 24 16Z" stroke="currentColor" strokeWidth="1" opacity="0.3"/>
        <path d="M46 12V26H60" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        <line x1="26" y1="32" x2="52" y2="32" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" opacity="0.7"/>
        <line x1="26" y1="38" x2="50" y2="38" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.6"/>
        <line x1="26" y1="42" x2="52" y2="42" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.5"/>
        <line x1="26" y1="46" x2="48" y2="46" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.4"/>
        <circle cx="50" cy="60" r="10" stroke="currentColor" strokeWidth="2.5"/>
        <path d="M44 60L48 64L56 56" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M10 14L10 20M10 14L16 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.5"/>
        <path d="M68 14L68 20M68 14L62 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.5"/>
      </svg>
    )
  };

  return (
    <section className="five-pillars-section">
      <div className="container">
        <div className="section-header scroll-animate">
          <span className="section-label">{operationalExcellenceData.label}</span>
          <h2 className="section-title">{operationalExcellenceData.title}</h2>
          <p className="section-description">
            {operationalExcellenceData.description}
          </p>
        </div>

        <div className="pillars-grid">
          {operationalExcellenceData.pillars.map((pillar) => (
            <PillarCard 
              key={pillar.id}
              color={pillar.color}
              title={pillar.title}
              description={pillar.description}
              iconSvg={pillarIcons[pillar.id]}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default OperationalExcellence;
