import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { primeData } from '../../data/primeData';
import { CheckCircle2, ArrowRight, ShieldCheck, Zap, Globe, Layers, ArrowUpRight } from 'lucide-react';

export function PrimePage() {
  const { hero, processSection, whyPrimeWorks, builtFor, cta } = primeData;

  const getStepIcon = (letter) => {
    switch (letter) {
      case 'P': return <Layers className="text-white" size={24} />;
      case 'R': return <Globe className="text-white" size={24} />;
      case 'I': return <Zap className="text-white" size={24} />;
      case 'M': return <ShieldCheck className="text-white" size={24} />;
      case 'E': return <ArrowUpRight className="text-white" size={24} />;
      default: return null;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-b from-[#0A1628] via-[#0e1d35] to-[#0A1628] text-white py-20 lg:py-28 px-4 sm:px-6 lg:px-8">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(33,160,224,0.15)_0%,transparent_50%)] pointer-events-none" />
          <div className="max-w-[1400px] mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-blue/20 border border-primary-blue/40 text-primary-blue text-xs font-bold tracking-wider uppercase mb-6">
                {hero.badge}
              </span>
              <h2 className="text-lg md:text-xl font-medium text-[#45A8BD] mb-3">
                {hero.subtitle}
              </h2>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15] mb-6">
                {hero.title}
              </h1>
              <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-8 max-w-2xl">
                {hero.description}
              </p>

              {/* Promises List */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                {hero.promises.map((promise, idx) => (
                  <div key={idx} className="flex items-start gap-3 bg-white/5 border border-white/10 rounded-xl p-3.5 backdrop-blur-sm">
                    <CheckCircle2 className="text-[#00cfff] flex-shrink-0 mt-0.5" size={18} />
                    <span className="text-sm font-medium text-gray-200">{promise}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-4">
                <a 
                  href="https://signellent.com/contact/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-8 py-4 bg-gradient-to-r from-primary-blue to-[#45A8BD] text-white font-bold rounded-xl shadow-lg shadow-primary-blue/30 hover:brightness-110 transition-all flex items-center gap-2"
                >
                  Schedule Assessment <ArrowRight size={18} />
                </a>
              </div>
            </div>

            <div className="lg:col-span-5 flex justify-center">
              <div className="relative p-4 bg-white/5 rounded-2xl border border-white/10 shadow-2xl backdrop-blur-md max-w-md">
                <img 
                  src={hero.logoImg} 
                  alt="PRIME Framework Logo" 
                  className="w-full h-auto object-contain drop-shadow-2xl" 
                />
              </div>
            </div>
          </div>
        </section>

        {/* Process Section — 5 Phases */}
        <section className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-[#F9FAFB]">
          <div className="max-w-[1400px] mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary-blue/10 border border-primary-blue/20 text-primary-blue text-xs font-bold tracking-wider uppercase mb-4">
                Structured Execution
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-[#0A1628] mb-4">
                {processSection.title}
              </h2>
              <p className="text-gray-600 text-base md:text-lg">
                {processSection.description}
              </p>
            </div>

            {/* Steps Container */}
            <div className="space-y-6 mb-16">
              {processSection.steps.map((step, idx) => (
                <div 
                  key={idx}
                  className="bg-white rounded-2xl border border-gray-200 p-6 md:p-8 shadow-sm hover:shadow-xl hover:border-primary-blue/50 transition-all duration-300 grid grid-cols-1 md:grid-cols-12 gap-6 items-center"
                >
                  <div className="md:col-span-3 flex items-center gap-4">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary-blue to-[#00cfff] flex items-center justify-center font-heading font-black text-2xl text-white shadow-md shadow-primary-blue/20 flex-shrink-0">
                      {step.letter}
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-xl text-[#0A1628]">
                        {step.phase}
                      </h3>
                      <p className="text-xs uppercase tracking-wider font-semibold text-primary-blue">
                        {step.tagline}
                      </p>
                    </div>
                  </div>

                  <div className="md:col-span-5">
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  <div className="md:col-span-4 border-t md:border-t-0 md:border-l border-gray-100 pt-4 md:pt-0 md:pl-6">
                    <ul className="space-y-2">
                      {step.points.map((pt, pIdx) => (
                        <li key={pIdx} className="flex items-center gap-2 text-xs text-gray-700 font-medium">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary-blue flex-shrink-0" />
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>

            {/* Architecture Overview Diagram */}
            {processSection.architectureImg && (
              <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-md text-center">
                <h3 className="text-xl font-bold text-[#0A1628] mb-6">
                  PRIME Consulting & Architecture Blueprint
                </h3>
                <img 
                  src={processSection.architectureImg} 
                  alt="PRIME Blueprint Overview" 
                  className="max-h-[500px] mx-auto object-contain rounded-xl"
                  loading="lazy" 
                />
              </div>
            )}
          </div>
        </section>

        {/* Why PRIME Works */}
        <section className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-[1400px] mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-extrabold text-[#0A1628] mb-3">
                {whyPrimeWorks.title}
              </h2>
              <p className="text-lg font-semibold text-primary-blue mb-4">
                {whyPrimeWorks.subtitle}
              </p>
              <p className="text-gray-600 text-base">
                {whyPrimeWorks.description}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {whyPrimeWorks.cards.map((card, idx) => (
                <div 
                  key={idx}
                  className="bg-[#F9FAFB] border border-gray-200 rounded-2xl p-8 text-center hover:border-primary-blue hover:bg-white hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300"
                >
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-primary-blue to-[#45A8BD] flex items-center justify-center text-white mx-auto mb-6 shadow-md shadow-primary-blue/20">
                    <ShieldCheck size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-[#0A1628] mb-3">
                    {card.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {card.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* What Sets PRIME Apart */}
            <div className="bg-[#0A1628] text-white rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
              <div className="absolute right-0 bottom-0 w-96 h-96 bg-primary-blue/10 rounded-full blur-3xl pointer-events-none" />
              <div className="relative z-10">
                <h3 className="text-2xl md:text-3xl font-extrabold mb-8 text-center">
                  What Sets PRIME Apart
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {whyPrimeWorks.whatSetsApart.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/10">
                      <CheckCircle2 className="text-[#00cfff] flex-shrink-0" size={20} />
                      <span className="text-sm font-medium text-gray-200">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Built for Enterprises Ready to Transform */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#F9FAFB]">
          <div className="max-w-[1400px] mx-auto">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-extrabold text-[#0A1628] mb-4">
                {builtFor.title}
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {builtFor.audiences.map((aud, idx) => (
                <div 
                  key={idx}
                  className="bg-white border border-gray-200 rounded-2xl p-6 hover:border-primary-blue hover:shadow-lg transition-all"
                >
                  <div className="w-10 h-10 rounded-xl bg-primary-blue/10 text-primary-blue flex items-center justify-center mb-4 font-bold text-lg">
                    0{idx + 1}
                  </div>
                  <h3 className="font-heading font-bold text-base text-[#0A1628] mb-2 leading-snug">
                    {aud.title}
                  </h3>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    {aud.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Banner */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-[#0A1628] to-[#1a2942] text-white text-center relative overflow-hidden">
          <div className="max-w-3xl mx-auto relative z-10">
            <span className="inline-block px-4 py-1 bg-primary-blue/20 text-[#00cfff] text-xs font-bold uppercase tracking-wider rounded-full mb-4 border border-primary-blue/30">
              {cta.subtitle}
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold mb-6 tracking-tight">
              {cta.title}
            </h2>
            <p className="text-gray-300 text-base md:text-lg mb-8 leading-relaxed">
              {cta.description}
            </p>
            <a 
              href={cta.buttonHref} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary-blue to-[#00cfff] text-white font-bold text-base rounded-xl shadow-xl hover:brightness-110 transition-all"
            >
              {cta.buttonText} <ArrowRight size={18} />
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default PrimePage;
