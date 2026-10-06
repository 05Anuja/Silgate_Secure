import React, { useEffect } from "react";
import SignellentHero from "../components/SignellentHero";
import SignellentStats from "../components/SignellentStats";
import SignellentSolutions from "../components/SignellentSolutions";
import SignellentCaseStudies from "../components/SignellentCaseStudies";
import SignellentWhitePapers from "../components/SignellentWhitePapers";
import SignellentSpotlight from "../components/SignellentSpotlight";
import SignellentGovPartners from "../components/SignellentGovPartners";
import SignellentTestimonials from "../components/SignellentTestimonials";
import SignellentClients from "../components/SignellentClients";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export function SignellentHome() {
  useEffect(() => {
    // // Set page title to match Signellent official SEO title
    // document.title =
    //   "Signellent Technologies Limited | IT System Integrator & Network Solutions";

    // Set meta description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement("meta");
      metaDesc.name = "description";
      document.head.appendChild(metaDesc);
    }
    metaDesc.content =
      "Signellent is India's leading IT System Integrator offering Enterprise Networking, Cyber Security, CCTV, and AV solutions. Authorized Cisco, Fortinet & Ruckus partner.";
  }, []);

  return (
    <div className="signellent-landing-page min-h-screen flex flex-col bg-white text-dark-navy font-sans antialiased selection:bg-primary-blue selection:text-white">
      {/* 1. Header / Navbar */}
      {/* <SignellentNavbar /> */}
      <Navbar />

      {/* Main Landing Page Sections */}
      <main className="flex-grow">
        {/* 2. Hero Section with dynamic slider */}
        <SignellentHero />

        {/* 3. Stats & Metrics Counter Bar */}
        <SignellentStats />

        {/* 4. Solutions Grid (8 offerings) */}
        <SignellentSolutions />

        {/* 5. Case Studies with interactive modal preview */}
        <SignellentCaseStudies />

        {/* 6. White Papers Thought Leadership */}
        <SignellentWhitePapers />

        {/* 7. Signellent In Spotlight (CXO Event 2025) */}
        <SignellentSpotlight />

        {/* 8. Trusted by Government Leaders (BSNL, TCIL, RailTel) */}
        <SignellentGovPartners />

        {/* 9. Client Testimonials Carousel */}
        <SignellentTestimonials />

        {/* 10. Trusted By Client Ecosystem & Certifications */}
        <SignellentClients />
      </main>

      {/* 11. Footer with Global & Regional Offices */}
      {/* <SignellentFooter /> */}
      <Footer />
    </div>
  );
}

export default SignellentHome;
