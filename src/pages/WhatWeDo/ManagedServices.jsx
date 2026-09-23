import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { whatWeDoData } from '../../data/whatWeDoData';
import { 
  ChevronRight, 
  Zap, 
  Shield, 
  TrendingUp, 
  CheckCircle2, 
  ArrowRight,
  Server,
  Activity,
  Users,
  Award
} from 'lucide-react';

export function ManagedServices() {
  const data = whatWeDoData.managedServices;

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

        {/* Hero Section with Dark Theme & Mesh Gradient */}
        <section className="relative overflow-hidden bg-gradient-to-b from-[#0A1628] via-[#102038] to-[#0A1628] text-white py-20 lg:py-28 px-4 sm:px-6 lg:px-8">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(33,160,224,0.15)_0%,transparent_50%)] pointer-events-none" />
          <div className="max-w-[1400px] mx-auto relative z-10 text-center max-w-4xl mx-auto">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-blue/20 border border-primary-blue/40 text-primary-blue text-xs font-bold tracking-wider uppercase mb-6">
              {data.badge}
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15] mb-4">
              {data.heroTitle}
            </h1>
            <p className="text-xl sm:text-2xl font-semibold bg-gradient-to-r from-primary-blue via-[#45A8BD] to-[#00cfff] bg-clip-text text-transparent mb-6">
              {data.heroSubtitle}
            </p>
            <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-6 max-w-3xl mx-auto">
              {data.heroDescription}
            </p>
            <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-10 max-w-2xl mx-auto">
              {data.heroContext}
            </p>
            <div className="flex justify-center gap-4">
              <a 
                href="https://signellent.com/contact/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-8 py-4 bg-gradient-to-r from-primary-blue to-[#45A8BD] text-white font-bold rounded-xl shadow-lg shadow-primary-blue/30 hover:brightness-110 transition-all flex items-center gap-2"
              >
                Schedule Operations Consultation <ArrowRight size={18} />
              </a>
            </div>
          </div>
        </section>

        {/* Benefits Cards Section */}
        <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white -mt-10 relative z-20">
          <div className="max-w-[1400px] mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {data.benefits.map((b, idx) => (
                <div 
                  key={idx}
                  className="bg-white border border-gray-200 rounded-2xl p-8 shadow-lg hover:shadow-2xl hover:border-primary-blue hover:-translate-y-1 transition-all duration-300 text-center"
                >
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-primary-blue to-[#00cfff] flex items-center justify-center text-white mx-auto mb-6 shadow-md shadow-primary-blue/20">
                    {idx === 0 && <Zap size={28} />}
                    {idx === 1 && <Shield size={28} />}
                    {idx === 2 && <TrendingUp size={28} />}
                  </div>
                  <h3 className="font-heading font-bold text-xl text-[#0A1628] mb-3">
                    {b.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {b.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What Makes Smart NOC & SOC Different */}
        <section className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-[#F9FAFB]">
          <div className="max-w-[1400px] mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-extrabold text-[#0A1628] mb-4">
                {data.whatMakesDifferent.title}
              </h2>
              <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                {data.whatMakesDifferent.desc}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {data.whatMakesDifferent.features.map((feat, idx) => (
                <div 
                  key={idx}
                  className="bg-white border border-gray-200 rounded-xl p-6 hover:border-primary-blue hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="w-8 h-8 rounded-lg bg-primary-blue/10 text-primary-blue flex items-center justify-center font-bold text-xs mb-4">
                      {idx + 1 < 10 ? `0${idx + 1}` : idx + 1}
                    </div>
                    <h3 className="font-heading font-bold text-base text-[#0A1628] mb-2">
                      {feat.title}
                    </h3>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      {feat.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Comprehensive Operations Coverage */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-[1400px] mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-extrabold text-[#0A1628] mb-4">
                {data.coverage.title}
              </h2>
              <p className="text-gray-600 text-base">
                {data.coverage.desc}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {data.coverage.items.map((cov, idx) => (
                <div 
                  key={idx}
                  className="p-6 rounded-2xl bg-[#F9FAFB] border border-gray-200 hover:border-primary-blue hover:bg-white hover:shadow-lg transition-all"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <CheckCircle2 className="text-[#00cfff] flex-shrink-0" size={20} />
                    <h3 className="font-heading font-bold text-base text-[#0A1628]">
                      {cov.title}
                    </h3>
                  </div>
                  <p className="text-xs text-gray-600 leading-relaxed pl-8">
                    {cov.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Flexible Operating Models */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#F9FAFB]">
          <div className="max-w-[1400px] mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-extrabold text-[#0A1628] mb-4">
                {data.operatingModels.title}
              </h2>
              <p className="text-gray-600 text-base">
                {data.operatingModels.desc}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {data.operatingModels.models.map((mod, idx) => (
                <div 
                  key={idx}
                  className="bg-white border border-gray-200 rounded-2xl p-6 hover:border-primary-blue hover:shadow-xl transition-all"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary-blue/10 text-primary-blue flex items-center justify-center font-bold text-lg mb-4">
                    <Server size={22} />
                  </div>
                  <h3 className="font-heading font-bold text-lg text-[#0A1628] mb-2">
                    {mod.title}
                  </h3>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    {mod.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Signellent & Stats */}
        <section className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-[1400px] mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-extrabold text-[#0A1628] mb-4">
                {data.whySignellent.title}
              </h2>
              <p className="text-gray-600 text-base">
                {data.whySignellent.desc}
              </p>
            </div>

            {/* Stats Counter Bar */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 p-8 rounded-3xl bg-[#0A1628] text-white shadow-xl text-center">
              {data.whySignellent.stats.map((st, idx) => (
                <div key={idx} className="p-4">
                  <div className="font-heading font-extrabold text-4xl lg:text-5xl text-[#00cfff] mb-2">
                    {st.number}
                  </div>
                  <div className="text-xs uppercase tracking-wider text-gray-300 font-semibold">
                    {st.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Why Signellent Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {data.whySignellent.cards.map((wc, idx) => (
                <div 
                  key={idx}
                  className="bg-[#F9FAFB] border border-gray-200 rounded-2xl p-6 hover:border-primary-blue hover:bg-white hover:shadow-lg transition-all"
                >
                  <h3 className="font-heading font-bold text-base text-[#0A1628] mb-2">
                    {wc.title}
                  </h3>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    {wc.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Banner */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-[#0A1628] to-[#1a2942] text-white text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
              Ready to Transform Your Operations?
            </h2>
            <p className="text-gray-300 text-sm md:text-base mb-8 max-w-xl mx-auto">
              Partner with Signellent for guaranteed SLA adherence, proactive defense, and complete IT peace of mind.
            </p>
            <a 
              href="https://signellent.com/contact/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary-blue to-[#00cfff] text-white font-bold text-sm rounded-xl shadow-xl hover:brightness-110 transition-all"
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

export default ManagedServices;
