import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { whatWeDoData } from '../../data/whatWeDoData';
import { 
  ChevronRight, 
  Cctv, 
  Megaphone, 
  Flame, 
  DoorClosed, 
  Network, 
  Building2, 
  ArrowRight,
  ShieldCheck
} from 'lucide-react';

export function ELVSolutions() {
  const data = whatWeDoData.elv;

  const getSubsystemIcon = (idx) => {
    switch (idx) {
      case 0: return <Cctv size={26} className="text-[#00cfff]" />;
      case 1: return <Megaphone size={26} className="text-[#00cfff]" />;
      case 2: return <Flame size={26} className="text-[#00cfff]" />;
      case 3: return <DoorClosed size={26} className="text-[#00cfff]" />;
      case 4: return <Network size={26} className="text-[#00cfff]" />;
      case 5: return <Building2 size={26} className="text-[#00cfff]" />;
      default: return <ShieldCheck size={26} className="text-[#00cfff]" />;
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
        <section className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#0A1628] via-[#0d213a] to-[#0A1628] text-white text-center relative overflow-hidden">
          <div className="max-w-3xl mx-auto relative z-10">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary-blue/20 text-[#00cfff] text-xs font-bold uppercase tracking-wider mb-6 border border-primary-blue/30">
              Extra Low Voltage Infrastructure
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight mb-4">
              {data.heroTitle}
            </h1>
            <p className="text-xl sm:text-2xl font-medium text-[#45A8BD] mb-8">
              {data.heroSubtitle}
            </p>
            <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-8 max-w-2xl mx-auto">
              Integrated building management, CCTV surveillance, access control, and fire detection systems aligned to enterprise governance and safety.
            </p>
            <a 
              href="https://signellent.com/contact/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary-blue to-[#00cfff] text-white font-bold text-sm rounded-xl shadow-xl hover:brightness-110 transition-all"
            >
              Consult ELV Engineer <ArrowRight size={16} />
            </a>
          </div>
        </section>

        {/* Approach Section with Graphic */}
        <section className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-[1400px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
              <div className="lg:col-span-7">
                <span className="inline-block px-4 py-1.5 rounded-full bg-primary-blue/10 text-primary-blue text-xs font-bold uppercase tracking-wider mb-4">
                  Turnkey Integration
                </span>
                <h2 className="text-3xl md:text-4xl font-extrabold text-[#0A1628] mb-6 leading-tight">
                  {data.approachTitle}
                </h2>
                <p className="text-gray-600 text-base leading-relaxed mb-4">
                  {data.introP1}
                </p>
                <p className="text-gray-600 text-base leading-relaxed mb-8">
                  {data.introP2}
                </p>
              </div>

              <div className="lg:col-span-5 flex justify-center">
                <div className="bg-[#f8fafc] border border-gray-200 rounded-3xl p-6 shadow-xl max-w-md">
                  <img 
                    src={data.image} 
                    alt="ELV Solutions Diagram" 
                    className="w-full h-auto object-contain rounded-2xl" 
                    loading="lazy"
                  />
                </div>
              </div>
            </div>

            {/* 6 Subsystems Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {data.subsystems.map((sub, idx) => (
                <div 
                  key={idx}
                  className="bg-[#F9FAFB] border border-gray-200 rounded-2xl p-8 hover:border-primary-blue hover:bg-white hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="w-14 h-14 rounded-2xl bg-[#0A1628] flex items-center justify-center mb-6 shadow-md">
                      {getSubsystemIcon(idx)}
                    </div>
                    <h3 className="font-heading font-bold text-xl text-[#0A1628] mb-3">
                      {sub.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-6">
                      {sub.desc}
                    </p>
                  </div>
                  <div className="pt-4 border-t border-gray-200/80">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-primary-blue block mb-1">
                      Business Alignment
                    </span>
                    <p className="text-xs text-gray-700 font-medium leading-relaxed">
                      {sub.alignment}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Banner */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#0A1628] text-white text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">
              Plan Your Campus or Facility ELV Infrastructure
            </h2>
            <p className="text-gray-300 text-sm mb-6">
              Connect with Signellent for compliant, high-availability ELV system design, OEM procurement, and ongoing AMC management.
            </p>
            <a 
              href="https://signellent.com/contact/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-gradient-to-r from-primary-blue to-[#00cfff] text-white font-semibold text-sm rounded-lg shadow-md hover:brightness-110 transition-all"
            >
              Enquire Now <ArrowRight size={16} />
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default ELVSolutions;
