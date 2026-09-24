import React from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  ChevronRight,
  Shield,
  Lock,
  FileText,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  CheckCircle2,
  Clock,
  Sparkles,
} from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { privacyPolicyData } from "../data/privacyPolicyData";

export function PrivacyPolicy() {
  const navigate = useNavigate();

  return (
    <div className="privacy-policy-page min-h-screen flex flex-col bg-[#F8FAFC]">
      {/* Existing Navbar */}
      <Navbar />

      <main className="flex-grow">
        {/* Navigation & Breadcrumb Bar */}
        <div className="bg-white border-b border-gray-200 shadow-sm py-4">
          <div className="max-w-[1450px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
              {/* Return to previous page button */}
              <button
                onClick={() => navigate(-1)}
                className="inline-flex items-center gap-2 text-sm font-semibold text-gray-600 hover:text-primary-blue transition-colors group w-fit"
                aria-label="Return to previous page"
              >
                <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-primary-blue/10 transition-colors">
                  <ArrowLeft
                    size={16}
                    className="text-gray-600 group-hover:text-primary-blue transition-transform group-hover:-translate-x-0.5"
                  />
                </div>
                <span>Return to previous page</span>
              </button>

              {/* Breadcrumb Path */}
              <nav
                aria-label="Breadcrumb"
                className="flex items-center gap-2 text-xs sm:text-sm text-gray-500"
              >
                <Link
                  to="/"
                  className="hover:text-primary-blue transition-colors"
                >
                  Home
                </Link>
                <ChevronRight size={14} className="text-gray-400" />
                <span className="font-semibold text-dark-navy">
                  Privacy Policy
                </span>
              </nav>
            </div>
          </div>
        </div>

        {/* Hero Section */}
        <section className="bg-gradient-to-b from-white via-[#F8FAFC] to-[#F1F5F9] pt-12 pb-16 border-b border-gray-200">
          <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-blue/10 text-primary-blue text-xs font-bold uppercase tracking-wider mb-4 border border-primary-blue/20">
              <Shield size={14} className="text-primary-blue" />
              Information Governance & Data Protection
            </span>

            <h1 className="text-3xl sm:text-5xl font-heading font-extrabold text-dark-navy tracking-tight mb-4">
              {privacyPolicyData.title}
            </h1>

            <div className="flex items-center justify-center gap-2 text-xs sm:text-sm text-gray-500 mb-6">
              <Clock size={15} className="text-primary-orange" />
              <span>
                Effective & Last Revised:{" "}
                <strong className="text-dark-navy font-semibold">
                  {privacyPolicyData.lastUpdated}
                </strong>
              </span>
            </div>

            <p className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-3xl mx-auto bg-white p-6 rounded-2xl border border-gray-200 shadow-sm text-left">
              {privacyPolicyData.intro}
            </p>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16 bg-[#F8FAFC]">
          <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
              {/* Left Column: Quick Navigation (sticky on desktop) */}
              <div className="lg:col-span-4">
                <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm sticky top-28">
                  <h3 className="text-base font-bold font-heading text-dark-navy mb-4 flex items-center gap-2">
                    <FileText size={18} className="text-primary-blue" />
                    <span>Table of Contents</span>
                  </h3>
                  <nav className="space-y-1 text-sm">
                    {privacyPolicyData.sections.map((sec, idx) => (
                      <a
                        key={idx}
                        href={`#${sec.id}`}
                        className="block py-2 px-3 rounded-lg text-gray-600 hover:text-primary-blue hover:bg-primary-blue/5 transition-colors font-medium text-xs sm:text-sm"
                      >
                        {sec.title}
                      </a>
                    ))}
                  </nav>

                  <div className="mt-8 pt-6 border-t border-gray-100">
                    <p className="text-xs text-gray-500 mb-3">
                      Have questions about our data practices?
                    </p>
                    <a
                      href="mailto:manoj@silgatehhiring.com"
                      className="inline-flex items-center gap-2 text-xs font-bold text-primary-orange hover:underline"
                    >
                      <Mail size={14} />
                      <span>manoj@silgatehhiring.com</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Right Column: Full Structured Policy Sections */}
              <div className="lg:col-span-8 space-y-8">
                {privacyPolicyData.sections.map((section, idx) => (
                  <div
                    key={idx}
                    id={section.id}
                    className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-200 shadow-sm scroll-mt-28 hover:border-primary-blue/30 transition-colors"
                  >
                    <h2 className="text-xl sm:text-2xl font-bold font-heading text-dark-navy mb-4 pb-3 border-b border-gray-100 flex items-center justify-between">
                      <span>{section.title}</span>
                      <span className="text-xs px-2.5 py-1 rounded bg-gray-100 text-gray-500 font-normal">
                        Section 0{idx + 1}
                      </span>
                    </h2>

                    <div className="space-y-3 text-sm sm:text-base text-gray-700 leading-relaxed">
                      {section.content.map((paragraph, pIdx) => {
                        const isBullet = paragraph.startsWith("•");
                        return (
                          <div
                            key={pIdx}
                            className={
                              isBullet
                                ? "flex items-start gap-2.5 pl-2 py-1"
                                : "py-1"
                            }
                          >
                            {isBullet ? (
                              <>
                                <CheckCircle2
                                  size={16}
                                  className="text-primary-blue flex-shrink-0 mt-1"
                                />
                                <span>{paragraph.replace("•", "").trim()}</span>
                              </>
                            ) : (
                              <p>{paragraph}</p>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                ))}

                {/* Direct Contact & Inquiry Box */}
                <div className="bg-gradient-to-r from-primary-blue to-[#083b6f] text-white rounded-2xl p-8 shadow-xl relative overflow-hidden">
                  <div className="relative z-10">
                    <h3 className="text-2xl font-bold font-heading mb-3 flex items-center gap-2">
                      <Lock size={22} className="text-accent-gold" />
                      <span>Data Protection Officer</span>
                    </h3>
                    <p className="text-gray-200 text-sm leading-relaxed mb-6 max-w-2xl">
                      If you wish to exercise your rights under Indian data
                      protection regulations (DPDP Act) or international
                      frameworks, or request data rectification or erasure,
                      please contact our designated privacy officer.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                      <div className="flex items-center gap-3 bg-white/10 p-3 rounded-xl border border-white/10">
                        <Mail size={18} className="text-accent-gold" />
                        <div>
                          <p className="text-xs text-gray-300">Privacy Desk</p>
                          <a
                            href="mailto:manoj@silgatehhiring.com"
                            className="font-semibold hover:underline"
                          >
                            manoj@silgatehhiring.com
                          </a>
                        </div>
                      </div>

                      <div className="flex items-center gap-3 bg-white/10 p-3 rounded-xl border border-white/10">
                        <Phone size={18} className="text-accent-gold" />
                        <div>
                          <p className="text-xs text-gray-300">
                            Corporate Helpline
                          </p>
                          <a
                            href="tel:+919967730225"
                            className="font-semibold hover:underline"
                          >
                            +91 8108810916
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Existing Footer */}
      <Footer />
    </div>
  );
}

export default PrivacyPolicy;
