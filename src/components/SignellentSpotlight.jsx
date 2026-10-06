import React from "react";
import { Link } from "react-router-dom";
import { Sparkles, ArrowRight, Award } from "lucide-react";
import { spotlightData } from "../data/signellentData";

export function SignellentSpotlight() {
  return (
    <section
      className="py-20 bg-gradient-to-br from-dark-navy via-[#112239] to-dark-navy text-white relative overflow-hidden border-b border-gray-800"
      id="spotlight"
    >
      {/* Glow decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-blue/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-silgate-orange/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1450px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Text */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-white text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-silgate-orange" />
              <span>{spotlightData.badge}</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-heading font-extrabold text-white leading-tight tracking-tight">
              {spotlightData.title}
            </h2>

            <div className="inline-block px-3.5 py-1.5 rounded-lg bg-primary-blue/30 text-white text-sm font-semibold border border-primary-blue/40">
              {spotlightData.subtitle}
            </div>

            <p className="text-gray-300 text-base leading-relaxed font-sans">
              {spotlightData.description}
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                to={spotlightData.ctaLink}
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full text-sm font-bold text-white bg-gradient-to-r from-primary-blue to-silgate-orange hover:from-silgate-blue-dark hover:to-silgate-orange-dark shadow-lg shadow-silgate-orange/20 transition-all transform hover:-translate-y-0.5"
              >
                <span>{spotlightData.ctaText}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Right Image Banner */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative rounded-2xl overflow-hidden border-4 border-white/20 shadow-2xl bg-white/5 backdrop-blur-md p-2 group">
              <img
                src={spotlightData.image}
                alt={spotlightData.alt}
                className="rounded-xl w-full h-auto object-cover transition-transform duration-500 group-hover:scale-103"
                loading="lazy"
              />
              <div className="absolute inset-2 rounded-xl bg-gradient-to-t from-dark-navy/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                <span className="text-xs font-bold text-white flex items-center gap-1.5">
                  <Award className="w-4 h-4 text-silgate-orange" /> CXO Event 2025 Platinum Partner
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SignellentSpotlight;
