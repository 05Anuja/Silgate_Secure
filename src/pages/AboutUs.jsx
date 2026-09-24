import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  ArrowLeft, 
  ChevronRight, 
  Target, 
  Compass, 
  Users, 
  ShieldCheck, 
  Award, 
  ArrowRight, 
  Sparkles,
  CheckCircle2,
  Building2,
  Layers
} from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { aboutUsData } from '../data/aboutUsData';

export function AboutUs() {
  const navigate = useNavigate();

  return (
    <div className="about-us-page min-h-screen flex flex-col bg-[#F8FAFC]">
      {/* Existing Navbar */}
      <Navbar />

      <main className="flex-grow">
        {/* Breadcrumb & Navigation Bar */}
        <div className="bg-white border-b border-gray-200 shadow-sm py-4">
          <div className="max-w-[1450px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
              {/* Return to previous page button */}
              <button
                onClick={() => navigate(-1)}
                className="inline-flex items-center gap-2 text-sm font-semibold text-gray-600 hover:text-primary-blue transition-colors group w-fit"
                aria-label="Return to previous page"
              >
                <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-primary-blue/10 transition-colors">
                  <ArrowLeft size={16} className="text-gray-600 group-hover:text-primary-blue transition-transform group-hover:-translate-x-0.5" />
                </div>
                <span>Return to previous page</span>
              </button>

              {/* Breadcrumb Path */}
              <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs sm:text-sm text-gray-500">
                <Link to="/" className="hover:text-primary-blue transition-colors">Home</Link>
                <ChevronRight size={14} className="text-gray-400" />
                <span className="font-semibold text-dark-navy">About Us</span>
              </nav>
            </div>
          </div>
        </div>

        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-b from-white via-[#F8FAFC] to-[#F1F5F9] py-16 lg:py-24 border-b border-gray-200">
          <div className="max-w-[1450px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              {/* Left Column: Heading & Mission text */}
              <div className="lg:col-span-7">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-blue/10 text-primary-blue text-xs font-bold uppercase tracking-wider mb-6 border border-primary-blue/20">
                  <Sparkles size={14} className="text-primary-blue" />
                  {aboutUsData.hero.tag}
                </div>

                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[42px] font-heading font-extrabold text-dark-navy tracking-tight leading-tight mb-6">
                  {aboutUsData.hero.title}
                </h1>

                <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-8">
                  {aboutUsData.hero.description}
                </p>

                <div className="flex flex-wrap items-center gap-4">
                  <Link
                    to={aboutUsData.hero.ctaHref}
                    className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-primary-orange text-white font-bold text-sm tracking-wide shadow-lg shadow-primary-orange/20 hover:bg-primary-orange/90 hover:shadow-xl transition-all duration-300"
                  >
                    <span>{aboutUsData.hero.ctaText}</span>
                    <ArrowRight size={16} />
                  </Link>

                  <Link
                    to="/prime"
                    className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-white border border-gray-300 text-dark-navy font-bold text-sm hover:border-primary-blue hover:text-primary-blue transition-all duration-300 shadow-sm"
                  >
                    <Layers size={16} className="text-primary-blue" />
                    <span>Explore PRIME Framework</span>
                  </Link>
                </div>
              </div>

              {/* Right Column: Hero Visual Showcase */}
              <div className="lg:col-span-5 relative">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-white group">
                  <img
                    src={aboutUsData.hero.image}
                    alt="Signellent Overview & Engineering Team"
                    className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-navy/80 via-transparent to-transparent opacity-80" />
                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <span className="inline-block px-3 py-1 rounded-full bg-accent-gold text-dark-navy text-xs font-bold uppercase mb-2">
                      Pan-India & International
                    </span>
                    <p className="text-sm font-medium text-gray-200">
                      Tier-1 Integrated Technology Architecture & Digital Defense
                    </p>
                  </div>
                </div>

                {/* Decorative floating badge */}
                <div className="hidden sm:flex absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-xl border border-gray-100 items-center gap-3">
                  <div className="w-12 h-12 rounded-lg bg-primary-blue flex items-center justify-center text-white font-extrabold text-xl">
                    11+
                  </div>
                  <div>
                    <p className="text-xs font-bold text-dark-navy">Years of Excellence</p>
                    <p className="text-[11px] text-gray-500">900+ Enterprise Deployments</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Grid */}
        <section className="py-12 bg-white border-b border-gray-200">
          <div className="max-w-[1450px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {aboutUsData.stats.map((stat, idx) => (
                <div 
                  key={idx}
                  className="bg-[#F8FAFC] border border-gray-200/80 rounded-2xl p-6 relative overflow-hidden group hover:border-primary-blue hover:shadow-lg transition-all duration-300"
                >
                  <div className="absolute top-0 left-0 w-1.5 h-full bg-primary-blue group-hover:bg-primary-orange transition-colors" />
                  <div className="text-4xl font-extrabold font-heading text-primary-blue mb-1">
                    {stat.number}
                  </div>
                  <h3 className="text-base font-bold text-dark-navy mb-2">
                    {stat.label}
                  </h3>
                  <p className="text-xs text-gray-500 leading-relaxed">
                    {stat.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission & Vision Section */}
        <section className="py-20 bg-[#F8FAFC]">
          <div className="max-w-[1450px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-accent-gold/15 text-dark-navy text-xs font-bold uppercase tracking-wider mb-3">
                Guiding Principles
              </span>
              <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-dark-navy tracking-tight">
                Our Purpose and Ambition
              </h2>
              <p className="text-gray-600 text-sm sm:text-base mt-3">
                Engineering resilient digital infrastructure that drives commercial agility, operational integrity, and sovereign cyber defense.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Mission Card */}
              <div className="bg-white rounded-2xl p-8 sm:p-10 border border-gray-200 shadow-sm relative overflow-hidden group hover:shadow-xl transition-all duration-300">
                <div className="w-14 h-14 rounded-2xl bg-primary-blue/10 flex items-center justify-center text-primary-blue mb-6 group-hover:scale-110 transition-transform">
                  <Target size={28} />
                </div>
                <h3 className="text-2xl font-bold font-heading text-dark-navy mb-4 flex items-center gap-2">
                  <span>{aboutUsData.missionVision.mission.title}</span>
                </h3>
                <p className="text-gray-600 text-base leading-relaxed mb-6">
                  {aboutUsData.missionVision.mission.description}
                </p>
                <ul className="space-y-3 pt-4 border-t border-gray-100">
                  <li className="flex items-start gap-2.5 text-sm text-gray-700">
                    <CheckCircle2 size={18} className="text-primary-orange flex-shrink-0 mt-0.5" />
                    <span>Vendor-agnostic, objective infrastructure architecture design</span>
                  </li>
                  <li className="flex items-start gap-2.5 text-sm text-gray-700">
                    <CheckCircle2 size={18} className="text-primary-orange flex-shrink-0 mt-0.5" />
                    <span>Predictable SLAs with 24/7 proactive NOC & SOC coverage</span>
                  </li>
                  <li className="flex items-start gap-2.5 text-sm text-gray-700">
                    <CheckCircle2 size={18} className="text-primary-orange flex-shrink-0 mt-0.5" />
                    <span>Measurable ROI and reduced Total Cost of Ownership (TCO)</span>
                  </li>
                </ul>
              </div>

              {/* Vision Card */}
              <div className="bg-white rounded-2xl p-8 sm:p-10 border border-gray-200 shadow-sm relative overflow-hidden group hover:shadow-xl transition-all duration-300">
                <div className="w-14 h-14 rounded-2xl bg-primary-orange/10 flex items-center justify-center text-primary-orange mb-6 group-hover:scale-110 transition-transform">
                  <Compass size={28} />
                </div>
                <h3 className="text-2xl font-bold font-heading text-dark-navy mb-4 flex items-center gap-2">
                  <span>{aboutUsData.missionVision.vision.title}</span>
                </h3>
                <p className="text-gray-600 text-base leading-relaxed mb-6">
                  {aboutUsData.missionVision.vision.description}
                </p>
                <ul className="space-y-3 pt-4 border-t border-gray-100">
                  <li className="flex items-start gap-2.5 text-sm text-gray-700">
                    <CheckCircle2 size={18} className="text-primary-blue flex-shrink-0 mt-0.5" />
                    <span>Sovereign Indian digital defense aligned with RakshNet paradigms</span>
                  </li>
                  <li className="flex items-start gap-2.5 text-sm text-gray-700">
                    <CheckCircle2 size={18} className="text-primary-blue flex-shrink-0 mt-0.5" />
                    <span>Zero-trust network integration across multi-cloud environments</span>
                  </li>
                  <li className="flex items-start gap-2.5 text-sm text-gray-700">
                    <CheckCircle2 size={18} className="text-primary-blue flex-shrink-0 mt-0.5" />
                    <span>Continuous innovation through the proprietary PRIME Framework</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Leadership Team Section */}
        <section className="py-20 bg-white border-t border-gray-200">
          <div className="max-w-[1450px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-primary-blue/10 text-primary-blue text-xs font-bold uppercase tracking-wider mb-3">
                <Users size={14} />
                Executive Leadership
              </span>
              <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-dark-navy tracking-tight">
                Meet the Minds Guiding Signellent
              </h2>
              <p className="text-gray-600 text-sm sm:text-base mt-3">
                Industry veterans, system integrators, and strategic minds uniting technology prowess with disciplined execution.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {aboutUsData.leadership.map((leader, idx) => (
                <div 
                  key={idx}
                  className="bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-xl hover:border-primary-blue/50 transition-all duration-300 flex flex-col group"
                >
                  {/* Photo Container */}
                  <div className="relative aspect-[4/3] bg-gray-100 overflow-hidden">
                    <img
                      src={leader.image}
                      alt={leader.name}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-navy/70 via-transparent to-transparent" />
                    <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between">
                      <span className="px-3 py-1 rounded-full bg-primary-blue/90 text-white text-xs font-semibold backdrop-blur-sm">
                        {leader.role}
                      </span>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 flex-grow flex flex-col justify-between">
                    <div>
                      <h3 className="text-xl font-bold font-heading text-dark-navy mb-2 group-hover:text-primary-blue transition-colors">
                        {leader.name}
                      </h3>
                      <p className="text-sm text-gray-600 leading-relaxed mb-4">
                        {leader.bio}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-gray-100 flex items-center justify-between text-xs text-gray-500">
                      <span className="font-semibold text-primary-orange">Signellent Leadership</span>
                      <span className="text-gray-400">Executive Council</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Trusted By Enterprise Clients */}
        <section className="py-20 bg-[#F8FAFC] border-t border-gray-200">
          <div className="max-w-[1450px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-accent-gold/20 text-dark-navy text-xs font-bold uppercase tracking-wider mb-3">
                <Building2 size={14} />
                Client Ecosystem
              </span>
              <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-dark-navy tracking-tight">
                Trusted by 900+ Industry Leaders
              </h2>
              <p className="text-gray-600 text-sm sm:text-base mt-3">
                Delivering enterprise networks, high-security data centers, and ELV integration across Fortune 500 multinationals and leading national enterprises.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
              {aboutUsData.trustedBy.map((client, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm flex items-center justify-center hover:shadow-md hover:border-primary-blue/30 transition-all duration-300 group"
                >
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="max-h-16 w-auto object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300 opacity-80 group-hover:opacity-100"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PRIME Framework CTA Section */}
        <section className="py-16 bg-gradient-to-r from-dark-navy via-[#0B2545] to-dark-navy text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#F8B83A_1px,transparent_1px)] [background-size:24px_24px]" />
          
          <div className="max-w-[1450px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent-gold/20 text-accent-gold text-xs font-bold uppercase tracking-wider mb-6 border border-accent-gold/30">
                <Award size={14} />
                Proven Engineering Framework
              </span>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold tracking-tight mb-6">
                {aboutUsData.cta.heading}
              </h2>

              <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-8">
                {aboutUsData.cta.description}
              </p>

              <div className="flex flex-wrap items-center justify-center gap-4">
                <Link
                  to={aboutUsData.cta.buttonHref}
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-primary-orange text-white font-bold text-sm tracking-wide shadow-lg shadow-primary-orange/30 hover:bg-primary-orange/90 hover:scale-105 transition-all duration-300"
                >
                  <span>{aboutUsData.cta.buttonText}</span>
                  <ArrowRight size={16} />
                </Link>

                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-white/10 text-white font-bold text-sm hover:bg-white/20 transition-all duration-300 border border-white/20"
                >
                  <span>Contact Our Consultants</span>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Existing Footer */}
      <Footer />
    </div>
  );
}

export default AboutUs;
