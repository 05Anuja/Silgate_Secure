import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, User, X, CheckCircle2, Sparkles } from "lucide-react";
import { caseStudiesData } from "../data/signellentData";

export function SignellentCaseStudies() {
  const [selectedCase, setSelectedCase] = useState(null);

  const fullCaseStudyDetails = {
    1: {
      client: "Zing Bus",
      challenge:
        "Providing uninterrupted, high-speed Wi-Fi to intercity passengers across varying terrain, while capturing fleet telemetry for real-time operations.",
      solution:
        "Engineered multi-SIM automotive cellular routers with dual-carrier failover, centralized cloud fleet management, and a branded passenger captive portal.",
      outcome:
        "99.4% passenger connection satisfaction, 35% reduction in transit downtime, and instantaneous remote diagnostics for the operations center.",
    },
    2: {
      client: "Stanza Living",
      challenge:
        "Managing thousands of decentralized IT and physical living assets across hundreds of buildings in 10+ tier-1 and tier-2 Indian cities.",
      solution:
        "Deployed unified RFID/QR asset tagging with automated mobile reconciliation software and central ERP integration.",
      outcome:
        "Zero asset leakage, 90% reduction in audit timelines, and total visibility over lifecycle maintenance and warranty renewals.",
    },
    3: {
      client: "OYO",
      challenge:
        "Hyper-growth onboarding of 1,500+ properties nationwide requiring standardized guest networking, firewall protection, and fast turnaround.",
      solution:
        "Turnkey hardware provisioning and standardized staging with rapid-response field dispatch teams achieving up to 45 properties live in a single month.",
      outcome:
        "Standardized brand experience across all tier categories with centralized Meraki/Aruba management and 24/7 proactive monitoring.",
    },
    4: {
      client: "Awfis",
      challenge:
        "High-density co-working spaces with fluctuating client loads requiring zero-lag video conferencing and isolated multi-tenant network security.",
      solution:
        "Enterprise Wi-Fi 6 access points with dynamic bandwidth orchestration, VLAN per tenant, and next-gen perimeter firewalling.",
      outcome:
        "94% reduction in member network tickets, high NPS scores from corporate clients, and seamless hybrid meeting room performance.",
    },
  };

  return (
    <section
      className="py-20 bg-white border-b border-gray-200"
      id="case-studies"
    >
      <div className="max-w-[1450px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-blue/10 text-primary-blue text-xs font-bold uppercase tracking-wider mb-2 border border-primary-blue/20">
              <Sparkles size={14} className="text-primary-blue" />
              <span>Proven Results</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-dark-navy tracking-tight">
              Case Studies
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-primary-blue to-silgate-orange rounded-full mt-3" />
          </div>
          <p className="text-sm sm:text-base text-gray-500 font-sans max-w-md">
            Discover how Silgate transforms mission-critical networks and
            delivers measurable impact for India's fastest-growing enterprises.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {caseStudiesData.map((study) => (
            <article
              key={study.id}
              className="bg-white rounded-2xl overflow-hidden border border-gray-200/90 shadow-sm hover:shadow-xl hover:border-primary-blue/40 transition-all duration-300 flex flex-col justify-between group transform hover:-translate-y-1"
            >
              <div>
                {/* Thumbnail */}
                <div className="relative aspect-[16/10] overflow-hidden bg-gray-100">
                  <img
                    src={study.image}
                    alt={study.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 rounded-md text-[11px] font-bold uppercase tracking-wider bg-dark-navy/90 text-white backdrop-blur-md">
                      {study.client}
                    </span>
                  </div>
                </div>

                {/* Body */}
                <div className="p-5">
                  <div className="flex items-center gap-3 text-xs text-gray-400 mb-2">
                    <span className="inline-flex items-center gap-1 font-medium">
                      <User className="w-3.5 h-3.5 text-primary-blue" />
                      {study.author}
                    </span>
                  </div>

                  <h3 className="text-base font-bold font-heading text-dark-navy group-hover:text-primary-blue transition-colors duration-200 line-clamp-2 leading-snug">
                    {study.title}
                  </h3>

                  <p className="mt-2.5 text-xs sm:text-sm text-gray-500 font-sans line-clamp-3 leading-relaxed">
                    {study.excerpt}
                  </p>
                </div>
              </div>

              {/* Action */}
              <div className="px-5 pb-5 pt-0">
                <button
                  type="button"
                  onClick={() => setSelectedCase(study)}
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold text-primary-blue bg-primary-blue/5 hover:bg-gradient-to-r hover:from-primary-blue hover:to-silgate-orange hover:text-white transition-all duration-300 border border-primary-blue/15 hover:border-transparent"
                >
                  <span>Continue Reading</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Case Study Modal */}
      {selectedCase && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-dark-navy/70 backdrop-blur-sm animate-in fade-in">
          <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl p-6 sm:p-8 overflow-hidden max-h-[90vh] overflow-y-auto border border-gray-100">
            <button
              type="button"
              onClick={() => setSelectedCase(null)}
              className="absolute top-5 right-5 p-2 rounded-full text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 mb-3">
              <span className="px-3 py-1 rounded-full text-xs font-bold uppercase bg-primary-blue/10 text-primary-blue border border-primary-blue/20">
                {selectedCase.client} Case Study
              </span>
            </div>

            <h3 className="text-xl sm:text-2xl font-heading font-extrabold text-dark-navy leading-snug">
              {selectedCase.title}
            </h3>

            <div className="my-5 rounded-2xl overflow-hidden aspect-video bg-gray-100 border border-gray-200">
              <img
                src={selectedCase.image}
                alt={selectedCase.title}
                className="w-full h-full object-cover"
              />
            </div>

            {fullCaseStudyDetails[selectedCase.id] && (
              <div className="space-y-4 text-sm text-gray-600 font-sans">
                <div className="p-4 rounded-xl bg-gray-50 border border-gray-200/80">
                  <h4 className="font-bold font-heading text-dark-navy text-xs uppercase tracking-wider mb-1">
                    The Challenge
                  </h4>
                  <p>{fullCaseStudyDetails[selectedCase.id].challenge}</p>
                </div>

                <div className="p-4 rounded-xl bg-primary-blue/5 border border-primary-blue/15">
                  <h4 className="font-bold font-heading text-primary-blue text-xs uppercase tracking-wider mb-1">
                    The Signellent Solution
                  </h4>
                  <p>{fullCaseStudyDetails[selectedCase.id].solution}</p>
                </div>

                <div className="p-4 rounded-xl bg-emerald-50/60 border border-emerald-100">
                  <h4 className="font-bold font-heading text-emerald-900 text-xs uppercase tracking-wider mb-1 flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    Key Business Outcome
                  </h4>
                  <p>{fullCaseStudyDetails[selectedCase.id].outcome}</p>
                </div>
              </div>
            )}

            <div className="mt-6 pt-4 border-t border-gray-200 flex items-center justify-between">
              <span className="text-xs text-gray-400 font-medium">
                Author: {selectedCase.author}
              </span>
              <Link
                to="/contact"
                onClick={() => setSelectedCase(null)}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-primary-blue to-silgate-orange hover:from-silgate-blue-dark hover:to-silgate-orange-dark shadow-md"
              >
                Inquire Similar Solution
              </Link>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default SignellentCaseStudies;
