import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { whatWeDoData } from '../../data/whatWeDoData';
import { 
  ChevronRight, 
  Tv, 
  Cpu, 
  Printer, 
  ArrowRight,
  Sparkles
} from 'lucide-react';

export function SmartSolutions() {
  const data = whatWeDoData.smartSolutions;

  const getFeatureIcon = (idx) => {
    switch (idx) {
      case 0: return <Tv size={28} className="text-primary-blue" />;
      case 1: return <Cpu size={28} className="text-primary-blue" />;
      case 2: return <Printer size={28} className="text-primary-blue" />;
      default: return <Sparkles size={28} className="text-primary-blue" />;
    }
  };

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
        <section className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-[#f8fafc] to-white text-center">
          <div className="max-w-3xl mx-auto">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary-blue/10 text-primary-blue text-xs font-bold uppercase tracking-wider mb-6">
              Connected Enterprise Spaces
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#0A1628] tracking-tight leading-tight mb-6">
              {data.heroTitle}
            </h1>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-8">
              {data.description}
            </p>
            <Link 
              to="/contact" 
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-primary-blue text-white font-semibold text-sm rounded-lg shadow-md hover:bg-primary-blue/90 transition-all"
            >
              Enquire Now <ArrowRight size={16} />
            </Link>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#F9FAFB] border-t border-gray-100">
          <div className="max-w-[1400px] mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {data.features.map((feat, idx) => (
                <div 
                  key={idx}
                  className="bg-white border border-gray-200 rounded-2xl p-8 hover:border-primary-blue hover:shadow-xl transition-all duration-300 text-center"
                >
                  <div className="w-16 h-16 rounded-2xl bg-blue-50 flex items-center justify-center mx-auto mb-6">
                    {getFeatureIcon(idx)}
                  </div>
                  <h3 className="font-heading font-bold text-xl text-[#0A1628] mb-3">
                    {feat.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {feat.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Bottom Banner */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#0A1628] text-white text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">
              Need Turnkey Smart Utilities Deployment?
            </h2>
            <p className="text-gray-300 text-sm mb-6">
              Signellent delivers end-to-end integration for display walls, commercial printers, and environmental IoT systems across enterprise premises.
            </p>
            <Link 
              to="/contact" 
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-gradient-to-r from-primary-blue to-[#F1613E] text-white font-semibold text-sm rounded-lg shadow-md hover:brightness-110 transition-all"
            >
              Contact Our Engineers <ArrowRight size={16} />
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default SmartSolutions;
