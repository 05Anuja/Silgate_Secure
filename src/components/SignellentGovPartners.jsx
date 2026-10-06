import React from "react";
import { ShieldCheck, Landmark } from "lucide-react";
import { govPartnersData } from "../data/signellentData";

export function SignellentGovPartners() {
  return (
    <section className="py-20 bg-white border-b border-gray-200" id="gov-leaders">
      <div className="max-w-[1450px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-blue/10 text-primary-blue text-xs font-bold uppercase tracking-wider mb-3 border border-primary-blue/20">
            <Landmark className="w-3.5 h-3.5 text-primary-blue" />
            <span>{govPartnersData.badge}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-dark-navy tracking-tight">
            {govPartnersData.title}
          </h2>

          <div className="w-16 h-1 bg-gradient-to-r from-primary-blue to-silgate-orange rounded-full mx-auto mt-4 mb-4" />

          <p className="text-base sm:text-lg text-gray-600 font-sans">
            {govPartnersData.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center max-w-5xl mx-auto">
          {govPartnersData.partners.map((partner, idx) => (
            <div
              key={idx}
              className="bg-[#F8FAFC] rounded-2xl p-8 border border-gray-200/90 shadow-sm hover:shadow-xl hover:border-primary-blue/40 transition-all duration-300 flex flex-col items-center text-center group transform hover:-translate-y-1"
            >
              <div className="w-full h-28 flex items-center justify-center p-4 bg-white rounded-xl mb-5 border border-gray-200/80 group-hover:border-primary-blue/30 transition-colors shadow-xs">
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="max-h-20 max-w-[200px] w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
              </div>

              <h3 className="text-xl font-bold font-heading text-dark-navy mb-1">
                {partner.name}
              </h3>

              <p className="text-xs sm:text-sm text-gray-500 font-sans font-medium">
                {partner.role}
              </p>

              <div className="mt-4 flex items-center gap-1.5 text-xs text-primary-blue font-bold">
                <ShieldCheck className="w-4 h-4 text-primary-blue" />
                <span>Mission-Critical Partner</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SignellentGovPartners;
