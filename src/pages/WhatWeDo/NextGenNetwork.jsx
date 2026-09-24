import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { whatWeDoData } from '../../data/whatWeDoData';
import { 
  ChevronRight, 
  Network, 
  Server, 
  Cpu, 
  ShieldCheck, 
  ArrowRight,
  Boxes
} from 'lucide-react';

export function NextGenNetwork() {
  const data = whatWeDoData.nextGenNetwork;

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
        <section className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#0A1628] via-[#0f233f] to-[#0A1628] text-white text-center relative overflow-hidden">
          <div className="max-w-[1200px] mx-auto relative z-10">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary-blue/20 text-[#F8B83A] text-xs font-bold uppercase tracking-wider mb-6 border border-primary-blue/30">
              {data.subtitle}
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight mb-6">
              {data.heroTitle}
            </h1>
            <p className="text-gray-300 text-base md:text-lg leading-relaxed max-w-2xl mx-auto mb-8">
              High-throughput architectures, software-defined fabrics, and automated resilience designed to power digital enterprises through 2030 and beyond.
            </p>
            <Link 
              to="/contact" 
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary-blue to-[#F1613E] text-white font-bold text-sm rounded-xl shadow-xl hover:brightness-110 transition-all"
            >
              Explore Network Blueprints <ArrowRight size={16} />
            </Link>
          </div>
        </section>

        {/* Roadmap 2025–2030 Section */}
        <section className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-[#F9FAFB]">
          <div className="max-w-[1400px] mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-extrabold text-[#0A1628] mb-4">
                {data.roadmapTitle}
              </h2>
              <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                {data.roadmapDescription}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {data.roadmapPhases.map((phase, idx) => (
                <div 
                  key={idx}
                  className="bg-white border border-gray-200 rounded-2xl p-8 hover:border-primary-blue hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-primary-blue to-[#F1613E] flex items-center justify-center font-heading font-black text-2xl text-white mb-6 shadow-md shadow-primary-blue/20">
                      0{phase.number}
                    </div>
                    <h3 className="font-heading font-bold text-xl text-[#0A1628] mb-3">
                      {phase.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {phase.desc}
                    </p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-gray-100 flex items-center gap-2 text-xs font-semibold text-primary-blue">
                    <span>Phase Roadmap Milestones</span>
                    <ChevronRight size={14} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Data Center Architecture Section */}
        <section className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-[1400px] mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary-blue/10 text-primary-blue text-xs font-bold uppercase tracking-wider mb-4">
                Enterprise Infrastructure
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-[#0A1628] mb-4">
                {data.dataCenter.title}
              </h2>
              <p className="text-gray-600 text-base">
                Modernizing foundational data centers for hybrid compute, disaggregated memory, and AI workloads.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {data.dataCenter.pillars.map((pil, idx) => (
                <div 
                  key={idx}
                  className="bg-[#F9FAFB] border border-gray-200 rounded-2xl p-8 hover:border-primary-blue hover:bg-white hover:shadow-xl transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#0A1628] text-[#F8B83A] flex items-center justify-center mb-6 shadow-md">
                    {idx === 0 && <Boxes size={24} />}
                    {idx === 1 && <Cpu size={24} />}
                    {idx === 2 && <ShieldCheck size={24} />}
                  </div>
                  <h3 className="font-heading font-bold text-lg text-[#0A1628] mb-3">
                    {pil.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {pil.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Banner */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#0A1628] text-white text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">
              Architect Tomorrow’s Enterprise Network
            </h2>
            <p className="text-gray-300 text-sm mb-6">
              Connect with Signellent’s network architects for comprehensive switching audits, SD-WAN POCs, and high-density campus Wi-Fi design.
            </p>
            <Link 
              to="/contact" 
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-gradient-to-r from-primary-blue to-[#F1613E] text-white font-semibold text-sm rounded-lg shadow-md hover:brightness-110 transition-all"
            >
              Enquire Now <ArrowRight size={16} />
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default NextGenNetwork;
