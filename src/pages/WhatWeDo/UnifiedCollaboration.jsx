import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { whatWeDoData } from '../../data/whatWeDoData';
import { 
  ChevronRight, 
  Video, 
  Sparkles, 
  ShieldCheck, 
  ArrowRight
} from 'lucide-react';

export function UnifiedCollaboration() {
  const data = whatWeDoData.unifiedCollaboration;

  const getPillarIcon = (idx) => {
    switch (idx) {
      case 0: return <Video size={28} className="text-[#00cfff]" />;
      case 1: return <Sparkles size={28} className="text-[#00cfff]" />;
      case 2: return <ShieldCheck size={28} className="text-[#00cfff]" />;
      default: return <Video size={28} className="text-[#00cfff]" />;
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
        <section className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#0A1628] via-[#0e213b] to-[#0A1628] text-white text-center relative overflow-hidden">
          <div className="max-w-3xl mx-auto relative z-10">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary-blue/20 text-[#00cfff] text-xs font-bold uppercase tracking-wider mb-6 border border-primary-blue/30">
              {data.badge}
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight mb-4">
              {data.heroTitle}
            </h1>
            <p className="text-xl sm:text-2xl font-medium text-[#45A8BD] mb-8">
              {data.heroSubtitle}
            </p>
            <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-8 max-w-2xl mx-auto">
              Empowering hybrid workforces with unified voice, high-definition video conferencing, IPBX architectures, and AI-enabled smart meeting rooms.
            </p>
            <a 
              href="https://signellent.com/contact/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary-blue to-[#00cfff] text-white font-bold text-sm rounded-xl shadow-xl hover:brightness-110 transition-all"
            >
              Consult Collaboration Specialist <ArrowRight size={16} />
            </a>
          </div>
        </section>

        {/* Key Pillars Section */}
        <section className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-[#F9FAFB]">
          <div className="max-w-[1400px] mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {data.pillars.map((pil, idx) => (
                <div 
                  key={idx}
                  className="bg-white border border-gray-200 rounded-2xl p-8 hover:border-primary-blue hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="w-14 h-14 rounded-2xl bg-[#0A1628] flex items-center justify-center mb-6 shadow-md">
                      {getPillarIcon(idx)}
                    </div>
                    <h3 className="font-heading font-bold text-xl text-[#0A1628] mb-3">
                      {pil.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {pil.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Managed Services Master Banner Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white border-t border-gray-100">
          <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary-blue/10 text-primary-blue text-xs font-bold uppercase tracking-wider mb-4">
                Operational Assurance
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-[#0A1628] mb-4">
                {data.managedBanner.heading}
              </h2>
              <p className="text-gray-600 text-base leading-relaxed mb-8 max-w-xl">
                {data.managedBanner.description}
              </p>
              <a 
                href="https://signellent.com/contact/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-3.5 bg-primary-blue text-white font-semibold text-sm rounded-lg shadow-md hover:bg-primary-blue/90 transition-all"
              >
                Enquire Now <ArrowRight size={16} />
              </a>
            </div>

            <div className="lg:col-span-5 flex justify-center">
              <div className="bg-[#f8fafc] border border-gray-200 rounded-2xl p-6 shadow-xl max-w-md">
                <img 
                  src={data.managedBanner.image} 
                  alt="Managed Services" 
                  className="w-full h-auto object-contain rounded-xl"
                  loading="lazy" 
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default UnifiedCollaboration;
