import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  ChevronRight,
  Briefcase,
  Sparkles,
  Shield,
  Award,
  Globe,
  TrendingUp,
  Mail,
  Phone,
  MapPin,
  Upload,
  CheckCircle2,
  Send,
} from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { careersData } from "../data/careersData";

export function Careers() {
  const navigate = useNavigate();
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [applicant, setApplicant] = useState({
    name: "",
    email: "",
    phone: "",
    department: "Cybersecurity & SOC Engineering",
    experience: "",
    linkedin: "",
    message: "",
  });

  // Attempt to load Zoho Recruit embed script if available
  useEffect(() => {
    const existingScript = document.getElementById("zoho-recruit-script");
    if (!existingScript) {
      const script = document.createElement("script");
      script.id = "zoho-recruit-script";
      script.src =
        "https://static.zohocdn.com/recruit/embed_careers_site/javascript/v1.1/embed_jobs.js";
      script.async = true;
      script.onload = () => {
        if (window.rec_embed_js) {
          try {
            window.rec_embed_js.load({
              widget_id: careersData.zohoWidget.widgetId,
              page_name: careersData.zohoWidget.pageName,
              source: careersData.zohoWidget.source,
              site: careersData.zohoWidget.site,
              brand_color: careersData.zohoWidget.brandColor,
              empty_job_msg: careersData.zohoWidget.emptyJobMsg,
            });
          } catch (e) {
            console.log("Zoho recruit init notice:", e);
          }
        }
      };
      document.body.appendChild(script);
    }
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setApplicant((prev) => ({ ...prev, [name]: value }));
  };

  const handleApplicationSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  const getPillarIcon = (name) => {
    switch (name) {
      case "Shield":
        return <Shield size={24} className="text-primary-blue" />;
      case "Award":
        return <Award size={24} className="text-primary-blue" />;
      case "Globe":
        return <Globe size={24} className="text-primary-blue" />;
      case "TrendingUp":
        return <TrendingUp size={24} className="text-primary-blue" />;
      default:
        return <Sparkles size={24} className="text-primary-blue" />;
    }
  };

  return (
    <div className="careers-page-app min-h-screen flex flex-col bg-white text-[#17233C]">
      {/* Existing Navbar */}
      <Navbar />

      <main className="flex-grow">
        {/* Breadcrumbs & Title Bar */}
        <div className="bg-white/95 backdrop-blur-md border-b border-[#E7EBF2] py-4 sticky top-0 z-30">
          <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-10">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
              {/* Return to previous page button */}
              <button
                onClick={() => navigate(-1)}
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#5B667A] hover:text-primary-blue transition-colors group w-fit"
                aria-label="Return to previous page"
              >
                <div className="w-9 h-9 rounded-full bg-[#F3F6FA] border border-[#E7EBF2] flex items-center justify-center group-hover:bg-primary-blue/10 group-hover:border-primary-blue/20 transition-all">
                  <ArrowLeft
                    size={16}
                    className="text-gray-600 group-hover:text-primary-blue transition-transform group-hover:-translate-x-0.5"
                  />
                </div>
                <span>Return to previous page</span>
              </button>

              {/* Breadcrumb Path */}
              <nav
                aria-label="Breadcrumb"
                className="flex items-center gap-2 text-xs sm:text-sm text-[#7B8494]"
              >
                <Link
                  to="/"
                  className="hover:text-primary-blue transition-colors"
                >
                  Home
                </Link>
                <ChevronRight size={14} className="text-gray-400" />
                <span className="font-semibold text-dark-navy">Careers</span>
              </nav>
            </div>
          </div>
        </div>

        {/* Hero Section */}
        <section className="relative overflow-hidden bg-[#F5F8FC] pt-16 sm:pt-20 pb-20 sm:pb-24 border-b border-[#E7EBF2]">
          <div className="max-w-[1450px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white text-primary-blue text-[11px] font-extrabold uppercase tracking-[0.18em] mb-5 border border-primary-blue/15 shadow-sm">
              <Sparkles size={14} className="text-primary-blue" />
              {careersData.hero.tag}
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-extrabold text-dark-navy tracking-[-0.035em] leading-[1.05] mb-5">
              {careersData.title}
            </h1>
            <p className="text-lg sm:text-xl font-semibold text-[#F1613E] mb-5">
              {careersData.hero.subtitle}
            </p>
            <p className="text-[#667085] text-base sm:text-lg leading-8 max-w-2xl mx-auto">
              {careersData.hero.description}
            </p>
          </div>
        </section>

        {/* Zoho Recruit Embed / Current Openings Section */}
        <section className="py-20 sm:py-24">
          <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-10">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-dark-navy tracking-tight mb-3">
                Current Openings & Opportunities
              </h2>
              <p className="text-sm sm:text-base text-[#737E91] leading-7">
                Connected directly to our central talent acquisition desk.
                Browse available roles or submit an expression of interest.
              </p>
            </div>

            {/* Embedded Zoho Recruit Listing Container */}
            <div className="relative overflow-hidden bg-white rounded-[28px] p-5 sm:p-8 lg:p-10 border border-[#E5EAF1] shadow-[0_18px_55px_rgba(23,35,60,0.07)] mb-20">
              <div
                id="rec_job_listing_div"
                className="min-h-[210px] flex items-center justify-center text-center rounded-2xl bg-[#F8FAFC] border border-dashed border-[#D9E0EA]"
              >
                <div className="py-8">
                  <div className="w-16 h-16 rounded-2xl bg-primary-blue/10 text-primary-blue flex items-center justify-center mx-auto mb-5">
                    <Briefcase size={28} />
                  </div>
                  <h3 className="text-xl font-heading font-extrabold text-dark-navy mb-2">
                    {careersData.zohoWidget.emptyJobMsg}
                  </h3>
                  <p className="text-sm text-[#737E91] leading-6 max-w-lg mx-auto mb-7">
                    We are continuously evaluating top talent across India for
                    upcoming mission-critical network and cyber security
                    deployments. Submit your CV below for immediate review.
                  </p>
                  <a
                    href={`mailto:${careersData.hrContact.email}?subject=Job Application - Signellent Careers`}
                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-primary-blue text-white text-xs font-extrabold uppercase tracking-[0.12em] shadow-[0_10px_25px_rgba(26,91,170,0.22)] hover:-translate-y-0.5 hover:bg-primary-blue/90 transition-all"
                  >
                    <Mail size={14} />
                    <span>Email CV to HR Desk</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Why Work With Us (4 Pillars) */}
            <div className="mb-24">
              <div className="text-center max-w-3xl mx-auto mb-12">
                <span className="text-[11px] font-extrabold text-primary-blue uppercase tracking-[0.18em] block mb-3">
                  Life At Signellent
                </span>
                <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-dark-navy tracking-tight">
                  Why Build Your Career Here?
                </h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                {careersData.pillars.map((pillar, idx) => (
                  <div
                    key={idx}
                    className="group bg-white rounded-[24px] p-7 border border-[#E5EAF1] shadow-[0_8px_30px_rgba(23,35,60,0.045)] hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(23,35,60,0.09)] hover:border-primary-blue/30 transition-all duration-300 flex flex-col justify-between"
                  >
                    <div>
                      <div className="w-12 h-12 rounded-2xl bg-primary-blue/10 flex items-center justify-center mb-6 group-hover:bg-primary-blue group-hover:text-white transition-colors">
                        {getPillarIcon(pillar.icon)}
                      </div>
                      <h3 className="font-heading font-extrabold text-lg text-dark-navy mb-3">
                        {pillar.title}
                      </h3>
                      <p className="text-sm text-[#6B7587] leading-6">
                        {pillar.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Express Interest / Direct Application Form */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-7 lg:gap-8 items-start">
              {/* Left Column: HR Contacts & Open Tracks */}
              <div className="lg:col-span-5 space-y-5 lg:sticky lg:top-28">
                <div className="bg-[#17233C] rounded-[28px] p-7 sm:p-8 border border-[#263553] shadow-[0_18px_50px_rgba(23,35,60,0.16)] text-white">
                  <h3 className="text-2xl font-heading font-extrabold text-white mb-4">
                    Talent Acquisition Desk
                  </h3>
                  <p className="text-sm text-white/70 leading-7 mb-7">
                    Our recruitment specialists review every submission within
                    48 business hours. Feel free to contact our HR department
                    directly with any questions.
                  </p>

                  <div className="space-y-5 pt-5 border-t border-white/10 text-sm">
                    <div className="flex items-start gap-3">
                      <Mail
                        size={18}
                        className="text-primary-blue flex-shrink-0 mt-0.5"
                      />
                      <div>
                        <p className="text-[10px] text-white/45 font-extrabold uppercase tracking-[0.14em]">
                          Primary Resume Email
                        </p>
                        <a
                          href={`mailto:${careersData.hrContact.email}`}
                          className="font-semibold text-white hover:text-[#F1613E] transition-colors"
                        >
                          {careersData.hrContact.email}
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Phone
                        size={18}
                        className="text-primary-blue flex-shrink-0 mt-0.5"
                      />
                      <div>
                        <p className="text-[10px] text-white/45 font-extrabold uppercase tracking-[0.14em]">
                          Direct Recruitment Line
                        </p>
                        <a
                          href={`tel:${careersData.hrContact.phone}`}
                          className="font-semibold text-white hover:text-[#F1613E] transition-colors"
                        >
                          {careersData.hrContact.phone}
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <MapPin
                        size={18}
                        className="text-primary-blue flex-shrink-0 mt-0.5"
                      />
                      <div>
                        <p className="text-[10px] text-white/45 font-extrabold uppercase tracking-[0.14em]">
                          Corporate Headquarters
                        </p>
                        <p className="text-xs text-white/65 mt-1 leading-5">
                          {careersData.hrContact.location}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Key Hiring Departments */}
                <div className="bg-white rounded-[24px] p-7 border border-[#E5EAF1] shadow-[0_10px_35px_rgba(23,35,60,0.055)]">
                  <h4 className="text-[10px] font-extrabold text-[#8A94A6] uppercase tracking-[0.16em] mb-4">
                    Active Hiring Disciplines
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {careersData.departments.map((dept, idx) => (
                      <span
                        key={idx}
                        className="px-3.5 py-2 rounded-full bg-[#F5F8FC] border border-[#E1E7EF] text-xs font-semibold text-[#536074] hover:border-primary-blue/30 hover:text-primary-blue transition-colors"
                      >
                        {dept}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column: Direct Application Form */}
              <div className="lg:col-span-7">
                <div className="bg-white rounded-[28px] p-7 sm:p-10 border border-[#E5EAF1] shadow-[0_20px_60px_rgba(23,35,60,0.08)]">
                  {formSubmitted ? (
                    <div className="text-center py-12">
                      <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4 animate-bounce">
                        <CheckCircle2 size={36} />
                      </div>
                      <h3 className="text-2xl font-heading font-bold text-dark-navy mb-2">
                        Application Submitted!
                      </h3>
                      <p className="text-sm text-gray-600 max-w-md mx-auto mb-6">
                        Thank you,{" "}
                        <strong className="text-dark-navy">
                          {applicant.name}
                        </strong>
                        . Our human resources team has received your profile and
                        will contact you at{" "}
                        <span className="text-primary-blue font-semibold">
                          {applicant.email}
                        </span>
                        .
                      </p>
                      <button
                        onClick={() => setFormSubmitted(false)}
                        className="px-6 py-2.5 rounded-xl bg-primary-blue text-white text-xs font-bold shadow-md hover:bg-primary-blue/90"
                      >
                        Submit Another Profile
                      </button>
                    </div>
                  ) : (
                    <form
                      onSubmit={handleApplicationSubmit}
                      className="space-y-6"
                    >
                      <div className="border-b border-[#EDF0F4] pb-5 mb-5">
                        <h3 className="text-2xl font-heading font-extrabold text-dark-navy">
                          Apply / Submit Your CV
                        </h3>
                        <p className="text-sm text-[#7A8495] mt-1.5 leading-6">
                          Share your experience and our talent team will match
                          you to current or upcoming opportunities.
                        </p>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-[10px] font-extrabold text-[#526076] uppercase tracking-[0.14em] mb-2">
                            Full Name *
                          </label>
                          <input
                            type="text"
                            name="name"
                            required
                            value={applicant.name}
                            onChange={handleInputChange}
                            placeholder="John Doe"
                            className="w-full px-4 py-3 rounded-xl border border-[#DCE2EA] bg-[#FBFCFE] text-sm text-[#17233C] placeholder:text-[#A3ACBA] outline-none transition-all focus:bg-white focus:border-primary-blue focus:ring-4 focus:ring-primary-blue/10 hover:border-[#BFC9D7]"
                          />
                        </div>

                        <div>
                          <label className="block text-[10px] font-extrabold text-[#526076] uppercase tracking-[0.14em] mb-2">
                            Email Address *
                          </label>
                          <input
                            type="email"
                            name="email"
                            required
                            value={applicant.email}
                            onChange={handleInputChange}
                            placeholder="john.doe@gmail.com"
                            className="w-full px-4 py-3 rounded-xl border border-[#DCE2EA] bg-[#FBFCFE] text-sm text-[#17233C] placeholder:text-[#A3ACBA] outline-none transition-all focus:bg-white focus:border-primary-blue focus:ring-4 focus:ring-primary-blue/10 hover:border-[#BFC9D7]"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-[10px] font-extrabold text-[#526076] uppercase tracking-[0.14em] mb-2">
                            Phone Number *
                          </label>
                          <input
                            type="tel"
                            name="phone"
                            required
                            value={applicant.phone}
                            onChange={handleInputChange}
                            placeholder="+91 98765 43210"
                            className="w-full px-4 py-3 rounded-xl border border-[#DCE2EA] bg-[#FBFCFE] text-sm text-[#17233C] placeholder:text-[#A3ACBA] outline-none transition-all focus:bg-white focus:border-primary-blue focus:ring-4 focus:ring-primary-blue/10 hover:border-[#BFC9D7]"
                          />
                        </div>

                        <div>
                          <label className="block text-[10px] font-extrabold text-[#526076] uppercase tracking-[0.14em] mb-2">
                            Area of Expertise
                          </label>
                          <select
                            name="department"
                            value={applicant.department}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 rounded-xl border border-[#DCE2EA] bg-[#FBFCFE] text-sm text-[#17233C] outline-none transition-all focus:bg-white focus:border-primary-blue focus:ring-4 focus:ring-primary-blue/10 hover:border-[#BFC9D7]"
                          >
                            {careersData.departments.map((d, i) => (
                              <option key={i} value={d}>
                                {d}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-[10px] font-extrabold text-[#526076] uppercase tracking-[0.14em] mb-2">
                            Years of Experience
                          </label>
                          <input
                            type="text"
                            name="experience"
                            value={applicant.experience}
                            onChange={handleInputChange}
                            placeholder="e.g. 3-5 Years"
                            className="w-full px-4 py-3 rounded-xl border border-[#DCE2EA] bg-[#FBFCFE] text-sm text-[#17233C] placeholder:text-[#A3ACBA] outline-none transition-all focus:bg-white focus:border-primary-blue focus:ring-4 focus:ring-primary-blue/10 hover:border-[#BFC9D7]"
                          />
                        </div>

                        <div>
                          <label className="block text-[10px] font-extrabold text-[#526076] uppercase tracking-[0.14em] mb-2">
                            LinkedIn / Portfolio Link
                          </label>
                          <input
                            type="url"
                            name="linkedin"
                            value={applicant.linkedin}
                            onChange={handleInputChange}
                            placeholder="https://linkedin.com/in/username"
                            className="w-full px-4 py-3 rounded-xl border border-[#DCE2EA] bg-[#FBFCFE] text-sm text-[#17233C] placeholder:text-[#A3ACBA] outline-none transition-all focus:bg-white focus:border-primary-blue focus:ring-4 focus:ring-primary-blue/10 hover:border-[#BFC9D7]"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-[10px] font-extrabold text-[#526076] uppercase tracking-[0.14em] mb-2">
                          Brief Cover Note / Summary
                        </label>
                        <textarea
                          rows={3}
                          name="message"
                          value={applicant.message}
                          onChange={handleInputChange}
                          placeholder="Summarize your key technical OEM certifications (Cisco, Fortinet, etc.) or infrastructure background..."
                          className="w-full p-4 rounded-xl border border-[#DCE2EA] bg-[#FBFCFE] text-sm text-[#17233C] placeholder:text-[#A3ACBA] outline-none resize-none transition-all focus:bg-white focus:border-primary-blue focus:ring-4 focus:ring-primary-blue/10 hover:border-[#BFC9D7]"
                        />
                      </div>

                      <button
                        type="submit"
                        className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-primary-blue text-white font-extrabold text-xs sm:text-sm uppercase tracking-[0.12em] shadow-[0_12px_28px_rgba(26,91,170,0.22)] hover:-translate-y-0.5 hover:bg-[#14539A] transition-all flex items-center justify-center gap-2"
                      >
                        <span>Submit Application</span>
                        <Send size={15} />
                      </button>
                    </form>
                  )}
                </div>
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

export default Careers;
