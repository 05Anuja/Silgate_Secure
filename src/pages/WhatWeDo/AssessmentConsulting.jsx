import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { whatWeDoData } from '../../data/whatWeDoData';
import { ChevronRight, ArrowRight } from 'lucide-react';

export function AssessmentConsulting() {
  const data = whatWeDoData.assessmentConsulting;

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />

      <main className="flex-1">
        {/* Breadcrumb Bar */}
        <div className="bg-[#f8fafc] border-b border-gray-100 py-3 px-4 sm:px-6 lg:px-8">
          <div className="max-w-[1400px] mx-auto flex items-center gap-2 text-xs text-gray-500 font-medium">
            <Link to="/rakshnet/" className="hover:text-primary-blue transition-colors">Home</Link>
            <ChevronRight size={13} className="text-gray-400" />
            <span>What We Do</span>
            <ChevronRight size={13} className="text-gray-400" />
            <span>Services</span>
            <ChevronRight size={13} className="text-gray-400" />
            <span className="text-dark-navy font-semibold">{data.title}</span>
          </div>
        </div>

        {/* Hero Section */}
        <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-[#f8fafc]">
          <div className="max-w-[1200px] mx-auto text-center">
            <span className="inline-block px-4 py-1 rounded-full bg-primary-blue/10 text-primary-blue text-xs font-bold tracking-wider uppercase mb-4">
              {data.badge}
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0A1628] tracking-tight leading-tight mb-6">
              {data.heading}
            </h1>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed max-w-3xl mx-auto mb-8">
              {data.description}
            </p>
            <div>
              <Link 
                to={data.ctaHref} 
                className="inline-flex items-center gap-2 px-8 py-3.5 bg-primary-blue text-white font-semibold text-sm rounded-lg shadow-lg shadow-primary-blue/20 hover:bg-primary-blue/90 transition-all"
              >
                {data.ctaText} <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </section>

        {/* PRIME Stands For Infographic Section */}
        <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-white border-t border-gray-100">
          <div className="max-w-[1200px] mx-auto text-center">
            <h2 className="text-2xl md:text-4xl font-extrabold text-[#0A1628] mb-12">
              {data.primeStandsForHeading}
            </h2>
            <div className="bg-[#f8fafc] border border-gray-200 rounded-3xl p-6 sm:p-10 shadow-lg inline-block w-full max-w-4xl">
              <img 
                src={data.primeStandsForImage} 
                alt="PRIME Stands For" 
                className="w-full h-auto object-contain mx-auto rounded-xl"
                loading="lazy" 
              />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default AssessmentConsulting;
