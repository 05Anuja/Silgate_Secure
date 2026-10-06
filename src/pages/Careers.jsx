import React, { useEffect, useState, useRef } from "react";
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
  Clock,
  Search,
  FileText,
  X,
  ArrowUpRight,
  Building2,
  Users,
  Check,
} from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { careersData } from "../data/careersData";

export function Careers() {
  const navigate = useNavigate();
  const applyFormRef = useRef(null);

  // Filter & Search state for openings
  const [selectedDept, setSelectedDept] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  // Form submission state
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [resumeFile, setResumeFile] = useState(null);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef(null);

  const [applicant, setApplicant] = useState({
    name: "",
    email: "",
    phone: "",
    department: careersData.departments[0] || "Cybersecurity & SOC Engineering",
    experience: "3-5 Years",
    location: "",
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

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      setResumeFile(file);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files?.[0];
    if (file) {
      setResumeFile(file);
    }
  };

  const removeFile = (e) => {
    e.stopPropagation();
    setResumeFile(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const scrollToApply = (roleTitle = "", roleDept = "") => {
    if (roleDept) {
      setApplicant((prev) => ({
        ...prev,
        department: roleDept,
        message: roleTitle
          ? `I am applying for the role: ${roleTitle}. Please review my profile.`
          : prev.message,
      }));
    }
    if (applyFormRef.current) {
      applyFormRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleApplicationSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setFormSubmitted(true);
    }, 900);
  };

  const getPillarIcon = (name) => {
    switch (name) {
      case "Shield":
        return <Shield size={24} className="text-primary-blue" />;
      case "Award":
        return <Award size={24} className="text-silgate-orange" />;
      case "Globe":
        return <Globe size={24} className="text-primary-blue" />;
      case "TrendingUp":
        return <TrendingUp size={24} className="text-silgate-orange" />;
      default:
        return <Sparkles size={24} className="text-primary-blue" />;
    }
  };

  // Filter openings
  const allOpenings = careersData.featuredOpenings || [];
  const filteredOpenings = allOpenings.filter((job) => {
    const matchesDept =
      selectedDept === "All" || job.department === selectedDept;
    const matchesQuery =
      searchQuery.trim() === "" ||
      job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.skills.some((s) =>
        s.toLowerCase().includes(searchQuery.toLowerCase())
      );
    return matchesDept && matchesQuery;
  });

  return (
    <div className="careers-page-app min-h-screen flex flex-col bg-[#F8FAFC] text-dark-navy font-sans antialiased">
      {/* Top Header / Navbar */}
      <Navbar />

      <main className="flex-grow">
        {/* Breadcrumbs & Navigation Bar */}
        <div className="bg-white border-b border-gray-200 shadow-xs py-3.5 sticky top-0 z-30">
          <div className="max-w-[1450px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
              {/* Return to previous page button */}
              <button
                onClick={() => navigate(-1)}
                className="inline-flex items-center gap-2 text-sm font-semibold text-gray-600 hover:text-primary-blue transition-colors group w-fit"
                aria-label="Return to previous page"
              >
                <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-primary-blue/10 group-hover:border-primary-blue/20 transition-all border border-gray-200">
                  <ArrowLeft
                    size={15}
                    className="text-gray-600 group-hover:text-primary-blue transition-transform group-hover:-translate-x-0.5"
                  />
                </div>
                <span>Return to previous page</span>
              </button>

              {/* Breadcrumb Path */}
              <nav
                aria-label="Breadcrumb"
                className="flex items-center gap-2 text-xs sm:text-sm text-gray-500"
              >
                <Link
                  to="/"
                  className="hover:text-primary-blue transition-colors font-medium"
                >
                  Home
                </Link>
                <ChevronRight size={14} className="text-gray-400" />
                <span className="font-semibold text-primary-blue">Careers</span>
              </nav>
            </div>
          </div>
        </div>

        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-b from-white via-[#F8FAFC] to-[#F1F5F9] pt-14 sm:pt-20 pb-16 sm:pb-24 border-b border-gray-200">
          {/* Subtle ambient blur lights */}
          <div className="absolute top-0 left-1/4 -translate-x-1/2 w-96 h-96 bg-primary-blue/5 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 right-10 w-96 h-96 bg-silgate-orange/5 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-[1450px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            {/* Pill badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-blue/10 text-primary-blue text-xs font-bold uppercase tracking-wider mb-6 border border-primary-blue/20 shadow-xs">
              <Sparkles size={14} className="text-primary-blue" />
              <span>{careersData.hero.tag}</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-heading font-extrabold text-dark-navy tracking-tight leading-[1.12] max-w-4xl mx-auto mb-6">
              Build the Future of Enterprise Networking &{" "}
              <span className="bg-gradient-to-r from-primary-blue via-silgate-blue-light to-silgate-orange bg-clip-text text-transparent">
                Sovereign Defense
              </span>
            </h1>

            {/* Subtitle & Description */}
            <p className="text-base sm:text-lg md:text-xl text-gray-600 font-normal leading-relaxed max-w-3xl mx-auto mb-10">
              {careersData.hero.description}
            </p>

            {/* Action buttons */}
            <div className="flex flex-wrap items-center justify-center gap-4 mb-14">
              <button
                onClick={() => {
                  const el = document.getElementById("openings-section");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-bold text-white bg-gradient-to-r from-primary-blue to-silgate-orange hover:from-silgate-blue-dark hover:to-silgate-orange-dark shadow-md hover:shadow-lg shadow-silgate-orange/20 transition-all duration-300 transform hover:-translate-y-0.5"
              >
                <Briefcase size={16} />
                <span>Explore Open Roles</span>
              </button>

              <button
                onClick={() => scrollToApply()}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-bold text-dark-navy bg-white hover:bg-gray-50 border border-gray-300 hover:border-primary-blue hover:text-primary-blue shadow-sm transition-all duration-200"
              >
                <Send size={15} />
                <span>Submit CV / Express Interest</span>
              </button>
            </div>

            {/* Key Metrics / Stats Row */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 max-w-4xl mx-auto pt-6 border-t border-gray-200/80">
              {careersData.stats?.map((stat, idx) => (
                <div
                  key={idx}
                  className="bg-white/80 backdrop-blur-sm p-4 sm:p-5 rounded-2xl border border-gray-200 shadow-xs hover:border-primary-blue/30 transition-all"
                >
                  <p className="text-2xl sm:text-3xl font-heading font-extrabold text-primary-blue">
                    {stat.value}
                  </p>
                  <p className="text-xs sm:text-sm font-semibold text-gray-600 mt-1">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Culture / Why Build Your Career Here (4 Pillars) */}
        <section className="py-16 sm:py-24 bg-white border-b border-gray-200">
          <div className="max-w-[1450px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <span className="text-xs font-bold text-primary-blue uppercase tracking-wider block mb-2">
                Life At Silgate
              </span>
              <h2 className="text-2xl sm:text-4xl font-heading font-extrabold text-dark-navy tracking-tight mb-4">
                Why Build Your Career Here?
              </h2>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                We empower exceptional minds with sovereign-scale challenges,
                industry-leading OEM certifications, and merit-first growth.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {careersData.pillars.map((pillar, idx) => (
                <div
                  key={idx}
                  className="group bg-[#F8FAFC] rounded-2xl p-7 border border-gray-200/80 shadow-xs hover:shadow-xl hover:border-primary-blue/30 hover:bg-white transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="w-13 h-13 rounded-2xl bg-white border border-gray-200 shadow-xs flex items-center justify-center mb-6 group-hover:scale-110 group-hover:border-primary-blue/30 transition-transform">
                      {getPillarIcon(pillar.icon)}
                    </div>
                    <h3 className="font-heading font-bold text-lg text-dark-navy mb-3 group-hover:text-primary-blue transition-colors">
                      {pillar.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed font-sans">
                      {pillar.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Current Openings & Opportunities Section */}
        <section
          id="openings-section"
          className="py-16 sm:py-24 bg-[#F8FAFC] border-b border-gray-200"
        >
          <div className="max-w-[1450px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
              <div>
                <span className="text-xs font-bold text-primary-blue uppercase tracking-wider block mb-2">
                  Join Our Team
                </span>
                <h2 className="text-2xl sm:text-4xl font-heading font-extrabold text-dark-navy tracking-tight">
                  Featured Openings & Opportunities
                </h2>
                <p className="text-sm sm:text-base text-gray-600 mt-2 max-w-2xl">
                  Explore active engineering and architecture positions across
                  our Mumbai Headquarters and regional client centers.
                </p>
              </div>

              {/* Search Bar */}
              <div className="relative w-full md:w-80">
                <Search
                  size={18}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                />
                <input
                  type="text"
                  placeholder="Search by role or skill..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-11 pr-4 py-3 bg-white rounded-xl border border-gray-300 text-sm text-dark-navy placeholder:text-gray-400 focus:outline-none focus:border-primary-blue focus:ring-2 focus:ring-primary-blue/10 transition-all shadow-xs"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    <X size={16} />
                  </button>
                )}
              </div>
            </div>

            {/* Department Filter Tabs */}
            <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar scroll-smooth">
              <button
                onClick={() => setSelectedDept("All")}
                className={`px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all ${
                  selectedDept === "All"
                    ? "bg-primary-blue text-white shadow-sm"
                    : "bg-white text-gray-600 border border-gray-300 hover:border-primary-blue hover:text-primary-blue"
                }`}
              >
                All Departments ({allOpenings.length})
              </button>
              {careersData.departments.map((dept, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedDept(dept)}
                  className={`px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all ${
                    selectedDept === dept
                      ? "bg-primary-blue text-white shadow-sm"
                      : "bg-white text-gray-600 border border-gray-300 hover:border-primary-blue hover:text-primary-blue"
                  }`}
                >
                  {dept}
                </button>
              ))}
            </div>

            {/* Job Cards Grid */}
            {filteredOpenings.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
                {filteredOpenings.map((job) => (
                  <div
                    key={job.id}
                    className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm hover:shadow-xl hover:border-primary-blue/40 transition-all duration-300 flex flex-col justify-between group"
                  >
                    <div>
                      {/* Department badge & Type */}
                      <div className="flex items-center justify-between gap-2 mb-4">
                        <span className="px-3 py-1 rounded-full bg-primary-blue/10 text-primary-blue text-[11px] font-bold">
                          {job.department}
                        </span>
                        <span className="px-2.5 py-1 rounded-md bg-emerald-50 text-emerald-700 border border-emerald-200 text-[11px] font-semibold">
                          {job.type}
                        </span>
                      </div>

                      {/* Job Title */}
                      <h3 className="font-heading font-extrabold text-lg text-dark-navy mb-2.5 group-hover:text-primary-blue transition-colors">
                        {job.title}
                      </h3>

                      {/* Location & Experience meta */}
                      <div className="flex flex-wrap items-center gap-3 text-xs text-gray-500 mb-4">
                        <div className="flex items-center gap-1.5">
                          <MapPin size={13} className="text-silgate-orange" />
                          <span>{job.location}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <Clock size={13} className="text-gray-400" />
                          <span>{job.experience}</span>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-5">
                        {job.description}
                      </p>

                      {/* Skills Tags */}
                      <div className="flex flex-wrap gap-1.5 mb-6">
                        {job.skills.map((skill, sIdx) => (
                          <span
                            key={sIdx}
                            className="px-2.5 py-1 rounded-md bg-[#F1F5F9] text-gray-700 text-[11px] font-medium"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Apply Action */}
                    <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                      <button
                        onClick={() => scrollToApply(job.title, job.department)}
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-primary-blue hover:text-silgate-orange transition-colors group-hover:translate-x-0.5"
                      >
                        <span>Apply For Position</span>
                        <ArrowUpRight size={14} />
                      </button>

                      <a
                        href={`mailto:${careersData.hrContact.email}?subject=Job Application - ${job.title}`}
                        className="p-2 rounded-lg text-gray-400 hover:text-primary-blue hover:bg-gray-100 transition-colors"
                        title="Email HR regarding this role"
                      >
                        <Mail size={16} />
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="bg-white rounded-2xl p-10 text-center border border-gray-200 max-w-xl mx-auto mb-16 shadow-xs">
                <Briefcase
                  size={36}
                  className="text-gray-400 mx-auto mb-3"
                />
                <h3 className="font-heading font-bold text-lg text-dark-navy mb-1">
                  No direct match found
                </h3>
                <p className="text-sm text-gray-500 mb-5">
                  No roles currently match "{searchQuery}". You can submit a
                  general expression of interest below.
                </p>
                <button
                  onClick={() => {
                    setSelectedDept("All");
                    setSearchQuery("");
                  }}
                  className="px-5 py-2.5 rounded-full bg-primary-blue text-white text-xs font-bold hover:bg-primary-blue/90"
                >
                  Clear Filters
                </button>
              </div>
            )}

            {/* Central Talent Desk Notice / Zoho Recruit Embed */}
            {/* <div className="bg-white rounded-3xl p-6 sm:p-10 border border-gray-200 shadow-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 w-80 h-80 bg-primary-blue/5 rounded-full blur-3xl pointer-events-none" />
              <div
                id="rec_job_listing_div"
                className="flex flex-col sm:flex-row items-center justify-between gap-6 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-[#F8FAFC] to-[#F1F5F9] border border-dashed border-gray-300"
              >
                <div className="flex items-center gap-4 text-left">
                  <div className="w-12 h-12 rounded-xl bg-primary-blue/10 text-primary-blue flex items-center justify-center flex-shrink-0">
                    <Briefcase size={24} />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-base sm:text-lg text-dark-navy">
                      Central Talent Acquisition Desk
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-500 mt-0.5">
                      Continuously screening enterprise network & cybersecurity
                      talent across all India regions.
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto">
                  <a
                    href={`mailto:${careersData.hrContact.email}?subject=Direct CV Submission - Signellent Careers`}
                    className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-primary-blue text-white text-xs font-bold shadow-sm hover:bg-silgate-blue-dark transition-all w-full sm:w-auto"
                  >
                    <Mail size={14} />
                    <span>Email CV to HR</span>
                  </a>
                  <button
                    onClick={() => scrollToApply()}
                    className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-white text-dark-navy border border-gray-300 text-xs font-bold hover:border-primary-blue hover:text-primary-blue transition-all w-full sm:w-auto"
                  >
                    <span>Quick Apply Form</span>
                  </button>
                </div>
              </div>
            </div> */}
          </div>
        </section>

        {/* Talent Desk Info & Direct Application Form Section */}
        <section
          ref={applyFormRef}
          id="apply-form"
          className="py-16 sm:py-24 bg-white"
        >
          <div className="max-w-[1450px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <span className="text-xs font-bold text-silgate-orange uppercase tracking-wider block mb-2">
                Fast-Track Hiring
              </span>
              <h2 className="text-2xl sm:text-4xl font-heading font-extrabold text-dark-navy tracking-tight">
                Submit Your Application / CV
              </h2>
              <p className="text-sm sm:text-base text-gray-600 mt-2">
                Complete the application form below. Our talent acquisition
                team guarantees a review within 48 business hours.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
              {/* Left Column: HR Talent Acquisition Desk Card */}
              <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-24">
                {/* Dark Navy Enterprise Card */}
                <div className="bg-gradient-to-br from-dark-navy via-[#0E2038] to-dark-navy rounded-3xl p-7 sm:p-8 border-2 border-white/10 shadow-2xl text-white relative overflow-hidden">
                  {/* Subtle glows */}
                  <div className="absolute -top-12 -left-12 w-44 h-44 bg-primary-blue/30 rounded-full blur-3xl pointer-events-none" />
                  <div className="absolute -bottom-12 -right-12 w-44 h-44 bg-silgate-orange/20 rounded-full blur-3xl pointer-events-none" />

                  <div className="relative z-10">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-xs font-bold uppercase tracking-wider mb-5 text-silgate-orange">
                      <Sparkles size={12} />
                      <span>Direct Talent Desk</span>
                    </div>

                    <h3 className="text-2xl font-heading font-extrabold text-white mb-3">
                      Talent Acquisition Office
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-300 leading-relaxed mb-6 font-sans">
                      Connect directly with our recruitment managers regarding
                      technical vacancies, compensation frameworks, or
                      internships.
                    </p>

                    <div className="space-y-4 pt-6 border-t border-white/15">
                      {/* Email */}
                      <div className="flex items-start gap-3.5">
                        <div className="w-9 h-9 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center flex-shrink-0 text-silgate-orange">
                          <Mail size={16} />
                        </div>
                        <div>
                          <p className="text-[10px] text-gray-400 font-extrabold uppercase tracking-wider">
                            Primary Resume Inbox
                          </p>
                          <a
                            href={`mailto:${careersData.hrContact.email}`}
                            className="font-semibold text-white hover:text-silgate-orange transition-colors text-sm break-all"
                          >
                            {careersData.hrContact.email}
                          </a>
                        </div>
                      </div>

                      {/* Phone */}
                      <div className="flex items-start gap-3.5">
                        <div className="w-9 h-9 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center flex-shrink-0 text-primary-blue">
                          <Phone size={16} />
                        </div>
                        <div>
                          <p className="text-[10px] text-gray-400 font-extrabold uppercase tracking-wider">
                            Direct Recruitment Hotline
                          </p>
                          <a
                            href={`tel:${careersData.hrContact.phone}`}
                            className="font-semibold text-white hover:text-silgate-orange transition-colors text-sm"
                          >
                            {careersData.hrContact.phone}
                          </a>
                        </div>
                      </div>

                      {/* Location */}
                      <div className="flex items-start gap-3.5">
                        <div className="w-9 h-9 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center flex-shrink-0 text-emerald-400">
                          <MapPin size={16} />
                        </div>
                        <div>
                          <p className="text-[10px] text-gray-400 font-extrabold uppercase tracking-wider">
                            Corporate Recruitment Hub
                          </p>
                          <p className="text-xs text-gray-300 mt-0.5 leading-relaxed">
                            {careersData.hrContact.location}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Fast SLA badge */}
                    <div className="mt-6 pt-5 border-t border-white/10 flex items-center gap-2.5 text-xs text-gray-300">
                      <Clock size={15} className="text-emerald-400 flex-shrink-0" />
                      <span>Review SLA: Direct response within 48 business hours</span>
                    </div>
                  </div>
                </div>

                {/* Key Benefits / Employee Perks Checklist */}
                <div className="bg-[#F8FAFC] rounded-2xl p-6 sm:p-7 border border-gray-200">
                  <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-4">
                    Signellent Engineering Perks
                  </h4>
                  <div className="space-y-3.5">
                    {careersData.perks?.map((perk, pIdx) => (
                      <div key={pIdx} className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check size={12} />
                        </div>
                        <div>
                          <p className="text-xs font-bold text-dark-navy">
                            {perk.title}
                          </p>
                          <p className="text-[11px] text-gray-500 leading-normal">
                            {perk.desc}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Active Hiring Disciplines Quick Select */}
                <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-xs">
                  <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-3">
                    Active Hiring Disciplines
                  </h4>
                  <p className="text-xs text-gray-500 mb-3">
                    Click any discipline to auto-select in the form:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {careersData.departments.map((dept, idx) => (
                      <button
                        key={idx}
                        type="button"
                        onClick={() =>
                          setApplicant((prev) => ({ ...prev, department: dept }))
                        }
                        className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                          applicant.department === dept
                            ? "bg-primary-blue text-white shadow-xs"
                            : "bg-[#F1F5F9] text-gray-700 hover:bg-gray-200"
                        }`}
                      >
                        {dept}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column: Direct Application & CV Upload Form */}
              <div className="lg:col-span-7">
                <div className="bg-white rounded-3xl p-6 sm:p-10 border border-gray-200 shadow-xl">
                  {formSubmitted ? (
                    <div className="text-center py-12 px-4">
                      <div className="w-20 h-20 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-6 shadow-inner animate-in zoom-in-75 duration-300">
                        <CheckCircle2 size={44} />
                      </div>
                      <h3 className="text-2xl sm:text-3xl font-heading font-extrabold text-dark-navy mb-3">
                        Application Successfully Received!
                      </h3>
                      <p className="text-sm text-gray-600 max-w-md mx-auto leading-relaxed mb-6">
                        Thank you, <strong className="text-dark-navy">{applicant.name}</strong>.
                        Your application for the{" "}
                        <strong className="text-primary-blue">
                          {applicant.department}
                        </strong>{" "}
                        division has been routed to our recruitment desk.
                      </p>

                      <div className="bg-[#F8FAFC] p-4 rounded-2xl border border-gray-200 max-w-sm mx-auto text-left text-xs text-gray-600 mb-8 space-y-1.5">
                        <p>
                          <span className="font-semibold text-gray-800">Email:</span>{" "}
                          {applicant.email}
                        </p>
                        <p>
                          <span className="font-semibold text-gray-800">Phone:</span>{" "}
                          {applicant.phone}
                        </p>
                        {resumeFile && (
                          <p>
                            <span className="font-semibold text-gray-800">CV Attached:</span>{" "}
                            {resumeFile.name}
                          </p>
                        )}
                        <p>
                          <span className="font-semibold text-gray-800">Expected SLA:</span>{" "}
                          Within 48 hours
                        </p>
                      </div>

                      <button
                        onClick={() => {
                          setFormSubmitted(false);
                          setResumeFile(null);
                          setApplicant({
                            name: "",
                            email: "",
                            phone: "",
                            department: careersData.departments[0],
                            experience: "3-5 Years",
                            location: "",
                            linkedin: "",
                            message: "",
                          });
                        }}
                        className="px-8 py-3 rounded-full bg-primary-blue text-white text-xs font-bold uppercase tracking-wider hover:bg-silgate-blue-dark transition-all shadow-md"
                      >
                        Submit Another Profile
                      </button>
                    </div>
                  ) : (
                    <form
                      onSubmit={handleApplicationSubmit}
                      className="space-y-6"
                    >
                      <div className="border-b border-gray-200 pb-5">
                        <h3 className="text-xl sm:text-2xl font-heading font-extrabold text-dark-navy">
                          Candidate Details
                        </h3>
                        <p className="text-xs sm:text-sm text-gray-500 mt-1">
                          Fields marked with an asterisk (<span className="text-silgate-orange">*</span>) are mandatory.
                        </p>
                      </div>

                      {/* Row 1: Name & Email */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">
                            Full Name <span className="text-silgate-orange">*</span>
                          </label>
                          <input
                            type="text"
                            name="name"
                            required
                            value={applicant.name}
                            onChange={handleInputChange}
                            placeholder="e.g. John Doe"
                            className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-[#FBFCFE] text-sm text-dark-navy placeholder:text-gray-400 focus:outline-none focus:bg-white focus:border-primary-blue focus:ring-3 focus:ring-primary-blue/10 transition-all shadow-xs"
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">
                            Email Address <span className="text-silgate-orange">*</span>
                          </label>
                          <input
                            type="email"
                            name="email"
                            required
                            value={applicant.email}
                            onChange={handleInputChange}
                            placeholder="e.g. john.doe@enterprise.com"
                            className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-[#FBFCFE] text-sm text-dark-navy placeholder:text-gray-400 focus:outline-none focus:bg-white focus:border-primary-blue focus:ring-3 focus:ring-primary-blue/10 transition-all shadow-xs"
                          />
                        </div>
                      </div>

                      {/* Row 2: Phone & Department */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">
                            Phone Number <span className="text-silgate-orange">*</span>
                          </label>
                          <input
                            type="tel"
                            name="phone"
                            required
                            value={applicant.phone}
                            onChange={handleInputChange}
                            placeholder="+91 98765 43210"
                            className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-[#FBFCFE] text-sm text-dark-navy placeholder:text-gray-400 focus:outline-none focus:bg-white focus:border-primary-blue focus:ring-3 focus:ring-primary-blue/10 transition-all shadow-xs"
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">
                            Discipline / Department
                          </label>
                          <select
                            name="department"
                            value={applicant.department}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-[#FBFCFE] text-sm text-dark-navy focus:outline-none focus:bg-white focus:border-primary-blue focus:ring-3 focus:ring-primary-blue/10 transition-all shadow-xs"
                          >
                            {careersData.departments.map((d, i) => (
                              <option key={i} value={d}>
                                {d}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>

                      {/* Row 3: Experience & Location */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">
                            Total Experience
                          </label>
                          <select
                            name="experience"
                            value={applicant.experience}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-[#FBFCFE] text-sm text-dark-navy focus:outline-none focus:bg-white focus:border-primary-blue focus:ring-3 focus:ring-primary-blue/10 transition-all shadow-xs"
                          >
                            <option value="Fresher / Entry-Level">Fresher / Entry-Level</option>
                            <option value="1-3 Years">1-3 Years</option>
                            <option value="3-5 Years">3-5 Years</option>
                            <option value="5-8 Years">5-8 Years</option>
                            <option value="8+ Years (Lead / Architect)">8+ Years (Lead / Architect)</option>
                          </select>
                        </div>

                        <div>
                          <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">
                            Current Location / City
                          </label>
                          <input
                            type="text"
                            name="location"
                            value={applicant.location}
                            onChange={handleInputChange}
                            placeholder="e.g. Mumbai, Pune, Delhi NCR"
                            className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-[#FBFCFE] text-sm text-dark-navy placeholder:text-gray-400 focus:outline-none focus:bg-white focus:border-primary-blue focus:ring-3 focus:ring-primary-blue/10 transition-all shadow-xs"
                          />
                        </div>
                      </div>

                      {/* Row 4: LinkedIn Profile URL */}
                      <div>
                        <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">
                          LinkedIn / Portfolio URL
                        </label>
                        <input
                          type="url"
                          name="linkedin"
                          value={applicant.linkedin}
                          onChange={handleInputChange}
                          placeholder="https://linkedin.com/in/yourprofile"
                          className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-[#FBFCFE] text-sm text-dark-navy placeholder:text-gray-400 focus:outline-none focus:bg-white focus:border-primary-blue focus:ring-3 focus:ring-primary-blue/10 transition-all shadow-xs"
                        />
                      </div>

                      {/* Row 5: Resume / CV File Upload Drag & Drop */}
                      <div>
                        <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">
                          Upload Resume / CV (PDF, DOC, DOCX)
                        </label>

                        <input
                          type="file"
                          ref={fileInputRef}
                          onChange={handleFileChange}
                          accept=".pdf,.doc,.docx"
                          className="hidden"
                        />

                        <div
                          onDragOver={handleDragOver}
                          onDragLeave={handleDragLeave}
                          onDrop={handleDrop}
                          onClick={() => fileInputRef.current?.click()}
                          className={`cursor-pointer rounded-2xl border-2 border-dashed p-6 text-center transition-all ${
                            isDragging
                              ? "border-primary-blue bg-primary-blue/5"
                              : resumeFile
                              ? "border-emerald-400 bg-emerald-50/40"
                              : "border-gray-300 bg-[#FBFCFE] hover:border-primary-blue hover:bg-gray-50"
                          }`}
                        >
                          {resumeFile ? (
                            <div className="flex items-center justify-between gap-4">
                              <div className="flex items-center gap-3 text-left">
                                <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center flex-shrink-0">
                                  <FileText size={20} />
                                </div>
                                <div className="truncate">
                                  <p className="text-xs font-bold text-dark-navy truncate">
                                    {resumeFile.name}
                                  </p>
                                  <p className="text-[11px] text-gray-500">
                                    {(resumeFile.size / 1024).toFixed(1)} KB — Ready to send
                                  </p>
                                </div>
                              </div>
                              <button
                                type="button"
                                onClick={removeFile}
                                className="p-1.5 rounded-full hover:bg-gray-200 text-gray-500 hover:text-red-500 transition-colors"
                              >
                                <X size={16} />
                              </button>
                            </div>
                          ) : (
                            <div>
                              <div className="w-12 h-12 rounded-2xl bg-primary-blue/10 text-primary-blue flex items-center justify-center mx-auto mb-3">
                                <Upload size={22} />
                              </div>
                              <p className="text-xs sm:text-sm font-bold text-dark-navy">
                                Click to choose file or drag & drop here
                              </p>
                              <p className="text-[11px] text-gray-500 mt-1">
                                Supported formats: PDF, DOC, DOCX (Max 10MB)
                              </p>
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Row 6: Cover Note / Summary */}
                      <div>
                        <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">
                          Key Technical Certifications / Brief Summary
                        </label>
                        <textarea
                          rows={3}
                          name="message"
                          value={applicant.message}
                          onChange={handleInputChange}
                          placeholder="List OEM credentials (e.g. Cisco CCNA/CCNP, Fortinet NSE 4-7, CEH), current notice period, or notable projects..."
                          className="w-full p-4 rounded-xl border border-gray-300 bg-[#FBFCFE] text-sm text-dark-navy placeholder:text-gray-400 focus:outline-none focus:bg-white focus:border-primary-blue focus:ring-3 focus:ring-primary-blue/10 transition-all resize-none shadow-xs"
                        />
                      </div>

                      {/* Submit CTA */}
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full sm:w-auto px-10 py-4 rounded-full bg-gradient-to-r from-primary-blue to-silgate-orange hover:from-silgate-blue-dark hover:to-silgate-orange-dark text-white font-bold text-xs sm:text-sm uppercase tracking-wider shadow-lg shadow-silgate-orange/20 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5 flex items-center justify-center gap-2 disabled:opacity-70 disabled:pointer-events-none"
                      >
                        {isSubmitting ? (
                          <>
                            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                            <span>Transmitting Profile...</span>
                          </>
                        ) : (
                          <>
                            <span>Submit Application</span>
                            <Send size={15} />
                          </>
                        )}
                      </button>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Careers;

