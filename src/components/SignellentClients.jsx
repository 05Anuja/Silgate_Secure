import React from "react";
import { trustedClientsData, certificationsData } from "../data/signellentData";
import { ShieldCheck, Sparkles } from "lucide-react";

export function SignellentClients() {
  return (
    <section className="py-20 bg-white border-b border-gray-200 overflow-hidden" id="clients">
      <div className="max-w-[1450px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-blue/10 text-primary-blue text-xs font-bold uppercase tracking-wider mb-3 border border-primary-blue/20">
            <Sparkles size={14} className="text-primary-blue" />
            <span>Ecosystem of Excellence</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-dark-navy tracking-tight">
            Trusted By
          </h2>

          <div className="w-16 h-1 bg-gradient-to-r from-primary-blue to-silgate-orange rounded-full mx-auto mt-4 mb-4" />

          <p className="text-base sm:text-lg text-gray-600 font-sans">
            Signellent Technologies empowers enterprises with secure, future-ready networking and cybersecurity solutions—backed by 11+ years of excellence and 900+ success stories across India.
          </p>
        </div>

        {/* Client Logos Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4 sm:gap-5 items-center">
          {trustedClientsData.map((client, idx) => (
            <div
              key={idx}
              className="h-20 bg-[#F8FAFC] rounded-2xl p-3 border border-gray-200/80 shadow-2xs hover:shadow-md hover:border-primary-blue/40 hover:bg-white transition-all duration-300 flex items-center justify-center group"
              title={client.name}
            >
              <img
                src={client.logo}
                alt={client.name}
                className="max-h-12 max-w-[100px] w-auto object-contain filter grayscale group-hover:grayscale-0 group-hover:scale-108 transition-all duration-300"
                loading="lazy"
              />
            </div>
          ))}
        </div>

        {/* Certifications Showcase */}
        <div className="mt-16 p-8 sm:p-10 rounded-3xl bg-[#F8FAFC] border border-gray-200/90 shadow-sm">
          <div className="text-center mb-8">
            <span className="text-xs font-bold font-heading uppercase tracking-wider text-primary-blue flex items-center justify-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-primary-blue" />
              Global Standards & Compliance
            </span>
            <h3 className="text-xl font-bold font-heading text-dark-navy mt-1.5">
              Certified for Quality & Security Excellence
            </h3>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-center max-w-4xl mx-auto">
            {certificationsData.map((cert, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center justify-center p-5 rounded-2xl bg-white border border-gray-200 hover:border-primary-blue/40 transition-all hover:shadow-md group"
              >
                <img
                  src={cert.logo}
                  alt={cert.name}
                  className="h-16 w-auto object-contain transition-transform group-hover:scale-105"
                  loading="lazy"
                />
                <span className="mt-3 text-xs font-bold font-heading text-dark-navy">
                  {cert.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default SignellentClients;
