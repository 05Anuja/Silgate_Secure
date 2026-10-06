import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { solutionsData } from "../data/signellentData";

export function SignellentSolutions() {
  return (
    <section className="py-20 bg-[#F8FAFC] border-b border-gray-200" id="solutions">
      <div className="max-w-[1450px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-blue/10 text-primary-blue text-xs font-bold uppercase tracking-wider mb-3 border border-primary-blue/20">
            <Sparkles size={14} className="text-primary-blue" />
            <span>Capabilities & Offerings</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-dark-navy tracking-tight">
            Our Solutions
          </h2>

          <div className="w-16 h-1 bg-gradient-to-r from-primary-blue to-silgate-orange rounded-full mx-auto mt-4 mb-4" />

          <p className="text-base sm:text-lg text-gray-600 font-sans">
            Empowering enterprises with end-to-end IT infrastructure, advanced defense-in-depth cybersecurity, and turnkey digital engineering.
          </p>
        </div>

        {/* Solutions Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-7">
          {solutionsData.map((sol) => (
            <div
              key={sol.id}
              className="group bg-white rounded-2xl overflow-hidden border border-gray-200/90 shadow-sm hover:shadow-xl hover:border-primary-blue/40 transition-all duration-300 flex flex-col justify-between transform hover:-translate-y-1.5"
            >
              <div>
                {/* Image Banner */}
                <div className="relative aspect-square w-full overflow-hidden bg-gray-100">
                  <img
                    src={sol.image}
                    alt={sol.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-106"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-navy/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="text-lg font-bold font-heading text-dark-navy group-hover:text-primary-blue transition-colors duration-200 leading-snug">
                    {sol.title}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-gray-500 font-sans leading-relaxed">
                    {sol.description}
                  </p>
                </div>
              </div>

              {/* Action Button */}
              <div className="px-5 pb-5 pt-0">
                <Link
                  to={sol.link}
                  className="w-full inline-flex items-center justify-between px-4 py-2.5 rounded-xl text-xs font-bold text-dark-navy bg-gray-50 hover:bg-gradient-to-r hover:from-primary-blue hover:to-silgate-orange hover:text-white transition-all duration-300 border border-gray-200 group-hover:border-transparent"
                >
                  <span>Know More</span>
                  <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SignellentSolutions;
