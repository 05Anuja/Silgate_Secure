import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Hero from '../sections/Hero';
import Challenge from '../sections/Challenge';
import WhyRakshNet from '../sections/WhyRakshNet';
import Architecture from '../sections/Architecture';
import CoreCapabilities from '../sections/CoreCapabilities';
import OperationalExcellence from '../sections/OperationalExcellence';
import RakshNetLayer from '../sections/RakshNetLayer';
import StrategicAdvantages from '../sections/StrategicAdvantages';
import Applications from '../sections/Applications';
import Technology from '../sections/Technology';
import FinalCTA from '../sections/FinalCTA';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export function RakshNet() {
  useScrollAnimation();

  return (
    <div className="rakshnet-app min-h-screen flex flex-col bg-white">
      {/* Exact Navbar */}
      <Navbar />

      {/* Main Sections */}
      <main className="flex-grow">
        {/* 1. Hero Section */}
        <Hero />

        {/* 2. The Challenge & Sovereign Defense Stack Solution */}
        <Challenge />

        {/* 3. Why RakshNet */}
        <WhyRakshNet />

        {/* 4. Architecture */}
        <Architecture />

        {/* 5. Core Capabilities */}
        <CoreCapabilities />

        {/* 6. Operational Excellence (Five Pillars) */}
        <OperationalExcellence />

        {/* 7. RakshNet Layer (Comprehensive Security Stack) */}
        <RakshNetLayer />

        {/* 8. Strategic Advantages */}
        <StrategicAdvantages />

        {/* 9. Applications */}
        <Applications />

        {/* 10. Technology */}
        <Technology />

        {/* 11. Final CTA */}
        <FinalCTA />
      </main>

      {/* Exact Signellent Footer */}
      <Footer />
    </div>
  );
}

export default RakshNet;
