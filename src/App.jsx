import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';

// Pages
import RakshNet from './pages/RakshNet';
import PrimePage from './pages/WhatWeThink/PrimePage';
import CategoryPage from './pages/WhatWeServe/CategoryPage';
import Contact from './pages/Contact';
import Brands from './pages/Brands';
import Careers from './pages/Careers';
import AboutUs from './pages/AboutUs';
import PrivacyPolicy from './pages/PrivacyPolicy';

// What We Do Pages
import AssessmentConsulting from './pages/WhatWeDo/AssessmentConsulting';
import ManagedServices from './pages/WhatWeDo/ManagedServices';
import Cybersecurity from './pages/WhatWeDo/Cybersecurity';
import NextGenNetwork from './pages/WhatWeDo/NextGenNetwork';
import AIDrivenSolutions from './pages/WhatWeDo/AIDrivenSolutions';
import SmartSolutions from './pages/WhatWeDo/SmartSolutions';
import UnifiedCollaboration from './pages/WhatWeDo/UnifiedCollaboration';
import ELVSolutions from './pages/WhatWeDo/ELVSolutions';

export function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        {/* RakshNet — Existing Platform Landing Page */}
        <Route path="/" element={<RakshNet />} />
        <Route path="/rakshnet" element={<RakshNet />} />
        <Route path="/rakshnet/" element={<RakshNet />} />

        {/* Brands */}
        <Route path="/brands" element={<Brands />} />
        <Route path="/brands/" element={<Brands />} />

        {/* Careers */}
        <Route path="/careers" element={<Careers />} />
        <Route path="/careers/" element={<Careers />} />

        {/* About Us / Who We Are */}
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/about-us/" element={<AboutUs />} />
        <Route path="/who-we-are" element={<AboutUs />} />
        <Route path="/who-we-are/" element={<AboutUs />} />

        {/* Privacy Policy */}
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/privacy-policy/" element={<PrivacyPolicy />} />

        {/* What We Think */}
        <Route path="/prime" element={<PrimePage />} />
        <Route path="/prime/" element={<PrimePage />} />

        {/* Contact Us & Enquire Now */}
        <Route path="/contact" element={<Contact />} />
        <Route path="/contact/" element={<Contact />} />
        <Route path="/enquire-now" element={<Contact />} />
        <Route path="/enquire-now/" element={<Contact />} />

        {/* What We Do */}
        <Route path="/what-we-do/services/assessment-counsulting" element={<AssessmentConsulting />} />
        {/* <Route path="/what-we-do/services/assessment-counsulting/" element={<AssessmentConsulting />} />
        <Route path="/what-we-do/assessment-consulting" element={<AssessmentConsulting />} />
        <Route path="/what-we-do/assessment-consulting/" element={<AssessmentConsulting />} /> */}

        <Route path="/what-we-do/services/managed-services" element={<ManagedServices />} />
        {/* <Route path="/what-we-do/services/managed-services/" element={<ManagedServices />} /> */}
        {/* <Route path="/what-we-do/managed-services" element={<ManagedServices />} /> */}
        {/* <Route path="/what-we-do/managed-services/" element={<ManagedServices />} /> */}

        <Route path="/what-we-do/services/cyber-security" element={<Cybersecurity />} />
        {/* <Route path="/what-we-do/services/cyber-security/" element={<Cybersecurity />} />
        <Route path="/what-we-do/cyber-security" element={<Cybersecurity />} />
        <Route path="/what-we-do/cybersecurity" element={<Cybersecurity />} /> */}

        <Route path="/what-we-do/services/next-gen-network" element={<NextGenNetwork />} />
        {/* <Route path="/what-we-do/services/next-gen-network/" element={<NextGenNetwork />} />
        <Route path="/what-we-do/next-gen-network" element={<NextGenNetwork />} /> */}

        <Route path="/what-we-do/services/ai-driven-solutions" element={<AIDrivenSolutions />} />
        {/* <Route path="/what-we-do/services/ai-driven-solutions/" element={<AIDrivenSolutions />} />
        <Route path="/what-we-do/ai-driven-solutions" element={<AIDrivenSolutions />} /> */}

        <Route path="/what-we-do/services/smart-solutions" element={<SmartSolutions />} />
        {/* <Route path="/what-we-do/services/smart-solutions/" element={<SmartSolutions />} />
        <Route path="/what-we-do/smart-solutions" element={<SmartSolutions />} /> */}

        <Route path="/what-we-do/services/unified-collaboration-communication" element={<UnifiedCollaboration />} />
        {/* <Route path="/what-we-do/services/unified-collaboration-communication/" element={<UnifiedCollaboration />} />
        <Route path="/what-we-do/unified-collaboration-communication" element={<UnifiedCollaboration />} /> */}

        <Route path="/what-we-do/services/elv" element={<ELVSolutions />} />
        <Route path="/what-we-do/services/elv/" element={<ELVSolutions />} />
        <Route path="/what-we-do/elv" element={<ELVSolutions />} />

        {/* What We Serve — Product Categories */}
        <Route path="/product-category/:pillar/:category" element={<CategoryPage />} />
        <Route path="/product-category/:pillar/:category/" element={<CategoryPage />} />

        {/* Catch-all fallback */}
        <Route path="*" element={<Navigate to="/rakshnet/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
