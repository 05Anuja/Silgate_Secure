import React from "react";
import { Link } from "react-router-dom";
import { FileText, ArrowRight, Clock, DownloadCloud, Sparkles } from "lucide-react";
import { whitePapersData } from "../data/signellentData";

export function SignellentWhitePapers() {
  return (
    <section className="py-20 bg-[#F8FAFC] border-b border-gray-200" id="white-papers">
      <div className="max-w-[1450px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-blue/10 text-primary-blue text-xs font-bold uppercase tracking-wider mb-2 border border-primary-blue/20">
              <Sparkles size={14} className="text-primary-blue" />
              <span>Thought Leadership</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-dark-navy tracking-tight">
              Our White Papers
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-primary-blue to-silgate-orange rounded-full mt-3" />
          </div>
          <p className="text-sm sm:text-base text-gray-500 font-sans max-w-md">
            Architectural blueprints, security research, and strategy reports published by Signellent’s Chief Solution Architects.
          </p>
        </div>

        {/* White Papers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {whitePapersData.map((paper) => (
            <div
              key={paper.id}
              className="bg-white rounded-2xl p-6 border border-gray-200/90 shadow-sm hover:shadow-xl hover:border-primary-blue/40 transition-all duration-300 flex flex-col justify-between group transform hover:-translate-y-1"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2.5 rounded-xl bg-primary-blue/10 text-primary-blue group-hover:bg-primary-blue group-hover:text-white transition-colors">
                    <FileText className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-gray-100 text-gray-600">
                    {paper.tag}
                  </span>
                </div>

                <div className="flex items-center gap-2 text-xs text-gray-400 mb-2">
                  <Clock className="w-3.5 h-3.5" />
                  <span>{paper.readTime}</span>
                  <span>•</span>
                  <span>{paper.author}</span>
                </div>

                <h3 className="text-base font-bold font-heading text-dark-navy group-hover:text-primary-blue transition-colors leading-snug">
                  {paper.title}
                </h3>

                <p className="mt-3 text-xs sm:text-sm text-gray-500 font-sans leading-relaxed line-clamp-4">
                  {paper.excerpt}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-gray-100">
                <Link
                  to={paper.link}
                  className="inline-flex items-center justify-between w-full text-xs font-bold text-primary-blue hover:text-silgate-orange transition-colors"
                >
                  <span className="flex items-center gap-1.5">
                    <DownloadCloud className="w-4 h-4" />
                    Read White Paper
                  </span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SignellentWhitePapers;
