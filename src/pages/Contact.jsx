import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  Building2,
  User,
  Briefcase,
  MessageSquare,
  Globe,
  ShieldCheck,
  ExternalLink,
  ChevronRight,
  Layers,
  Sparkles,
} from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { contactData } from "../data/contactData";
import { CERTIFICATION_BADGES } from "../utils/constants";

export function Contact() {
  const navigate = useNavigate();
  const [formMode, setFormMode] = useState("interactive"); // 'interactive' | 'zoho'
  const [iframeHeight, setIframeHeight] = useState("1100px");
  const [iframeLoaded, setIframeLoaded] = useState(false);

  // Native Form State
  const [formData, setFormData] = useState({
    orgName: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    jobTitle: "",
    solution: "",
    streetAddress: "",
    city: "",
    state: "",
    country: "India",
    message: "",
  });

  const [formStatus, setFormStatus] = useState("idle"); // 'idle' | 'submitting' | 'success'
  const [formErrors, setFormErrors] = useState({});

  // Handle Zoho Iframe auto-resize message listener
  useEffect(() => {
    const handleMessage = (event) => {
      const evntData = event.data;
      if (evntData && typeof evntData === "string") {
        const zf_ifrm_data = evntData.split("|");
        if (zf_ifrm_data.length >= 2) {
          const zf_ifrm_ht_nw = `${parseInt(zf_ifrm_data[1], 10) + 20}px`;
          setIframeHeight(zf_ifrm_ht_nw);
        }
      }
    };

    window.addEventListener("message", handleMessage, false);
    return () => window.removeEventListener("message", handleMessage, false);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (formErrors[name]) {
      setFormErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.orgName.trim())
      errors.orgName = "Organisation Name is required";
    if (!formData.firstName.trim()) errors.firstName = "First Name is required";
    if (!formData.lastName.trim()) errors.lastName = "Last Name is required";
    if (!formData.email.trim()) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Please enter a valid email address";
    }
    if (!formData.phone.trim()) {
      errors.phone = "Phone number is required";
    } else if (formData.phone.replace(/\D/g, "").length < 8) {
      errors.phone = "Please enter a valid phone number";
    }
    if (!formData.jobTitle.trim()) errors.jobTitle = "Job title is required";
    if (!formData.message.trim())
      errors.message = "Please provide a message or requirement details";

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setFormStatus("submitting");
    setTimeout(() => {
      setFormStatus("success");
    }, 1000);
  };

  const handleResetForm = () => {
    setFormData({
      orgName: "",
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      jobTitle: "",
      solution: "",
      streetAddress: "",
      city: "",
      state: "",
      country: "India",
      message: "",
    });
    setFormErrors({});
    setFormStatus("idle");
  };

  return (
    <div className="contact-page-app min-h-screen flex flex-col bg-[#F8FAFC]">
      {/* Navbar */}
      <Navbar />

      <main className="flex-grow">
        {/* Breadcrumbs & Title Bar */}
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
                className="flex items-center gap-2 text-xs sm:text-sm text-gray-500"
              >
                <Link
                  to="/"
                  className="hover:text-primary-blue transition-colors"
                >
                  Home
                </Link>
                <ChevronRight size={14} className="text-gray-400" />
                <span className="font-semibold text-dark-navy">Contact us</span>
              </nav>
            </div>
          </div>
        </div>

        {/* Hero Section */}
        <section className="bg-gradient-to-b from-white via-[#F8FAFC] to-[#F1F5F9] pt-12 pb-16 border-b border-gray-200">
          <div className="max-w-[1450px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-blue/10 text-primary-blue text-xs font-bold uppercase tracking-wider mb-4 border border-primary-blue/20">
                <Sparkles size={14} className="text-primary-blue" />
                Connect With Silgate Secure
              </span>
              <h1 className="text-3xl sm:text-5xl md:text-6xl font-heading font-extrabold text-dark-navy tracking-tight mb-5">
                Contact us
              </h1>
              <p className="text-gray-600 text-base sm:text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
                {contactData.heroDescription}
              </p>
            </div>

            {/* Quick Contact Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
              {contactData.quickContacts.map((item, idx) => (
                <div
                  key={idx}
                  className={`p-6 rounded-2xl bg-white border transition-all duration-300 shadow-sm hover:shadow-md ${
                    item.highlight
                      ? "border-primary-blue/40 ring-2 ring-primary-blue/10"
                      : "border-gray-200 hover:border-primary-blue/30"
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary-blue/10 text-primary-blue flex items-center justify-center flex-shrink-0">
                      {item.type === "phone" && <Phone size={22} />}
                      {item.type === "email" && <Mail size={22} />}
                      {item.type === "location" && <MapPin size={22} />}
                      {item.type === "support" && <ShieldCheck size={22} />}
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">
                        {item.label}
                      </p>
                      {item.href.startsWith("http") ||
                      item.href.startsWith("#") ||
                      item.href.startsWith("tel:") ||
                      item.href.startsWith("mailto:") ? (
                        <a
                          href={item.href}
                          className="font-heading font-bold text-base text-dark-navy hover:text-primary-blue transition-colors block truncate"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="font-heading font-bold text-base text-dark-navy truncate">
                          {item.value}
                        </p>
                      )}
                      <p className="text-xs text-gray-500 mt-1">
                        {item.detail}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Main Content: "Get in Touch with Us" Form Section */}
        <section className="py-16 sm:py-20" id="enquiry-section">
          <div className="max-w-[1450px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              {/* Left Column: Context, Trust & Office Details */}
              <div className="lg:col-span-4 space-y-8">
                <div className="bg-white rounded-3xl p-8 border border-gray-200 shadow-sm relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-primary-blue/10 to-transparent rounded-bl-full pointer-events-none" />

                  <h2 className="text-2xl font-heading font-bold text-dark-navy mb-4">
                    Get in Touch with Us
                  </h2>
                  <p className="text-gray-600 text-sm leading-relaxed mb-6">
                    Looking to evaluate sovereign cyber defense, upgrade
                    enterprise networks, or discuss managed NOC/SOC operations?
                    Our senior solutions architects are ready to guide you.
                  </p>

                  {/* Active Business Status */}
                  <div className="flex items-center gap-3 p-3.5 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold mb-6">
                    <span className="relative flex h-3 w-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                    </span>
                    <span>Direct Consultation Desk Active (Mon – Sat)</span>
                  </div>

                  {/* Key Highlights */}
                  <div className="space-y-4 pt-4 border-t border-gray-100">
                    <div className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-primary-blue/10 text-primary-blue flex items-center justify-center flex-shrink-0 mt-0.5">
                        <CheckCircle2 size={13} />
                      </div>
                      <p className="text-xs text-gray-600">
                        <strong className="text-dark-navy">
                          11+ Years of Excellence
                        </strong>{" "}
                        delivering end-to-end enterprise IT solutions across
                        India.
                      </p>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-primary-blue/10 text-primary-blue flex items-center justify-center flex-shrink-0 mt-0.5">
                        <CheckCircle2 size={13} />
                      </div>
                      <p className="text-xs text-gray-600">
                        <strong className="text-dark-navy">
                          900+ Success Stories
                        </strong>{" "}
                        spanning government, defense, banking, and critical
                        infrastructure.
                      </p>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-primary-blue/10 text-primary-blue flex items-center justify-center flex-shrink-0 mt-0.5">
                        <CheckCircle2 size={13} />
                      </div>
                      <p className="text-xs text-gray-600">
                        <strong className="text-dark-navy">
                          Rigorous Standards:
                        </strong>{" "}
                        CMMI Level 3 & ISO 27001 / 20000 / 9001 certified
                        engineering.
                      </p>
                    </div>
                  </div>

                  {/* Direct Channels */}
                  <div className="mt-8 pt-6 border-t border-gray-100 space-y-3">
                    <a
                      href="tel:+919967730225"
                      className="flex items-center justify-between p-3 rounded-xl bg-gray-50 hover:bg-primary-blue/5 border border-gray-200/60 hover:border-primary-blue/30 text-gray-700 hover:text-primary-blue transition-all text-xs font-semibold"
                    >
                      <span className="flex items-center gap-2">
                        <Phone size={14} className="text-primary-blue" />
                        +91 8108810916
                      </span>
                      <ExternalLink size={12} className="text-gray-400" />
                    </a>

                    <a
                      href="mailto:manoj@silgatehhiring.com"
                      className="flex items-center justify-between p-3 rounded-xl bg-gray-50 hover:bg-primary-blue/5 border border-gray-200/60 hover:border-primary-blue/30 text-gray-700 hover:text-primary-blue transition-all text-xs font-semibold"
                    >
                      <span className="flex items-center gap-2">
                        <Mail size={14} className="text-primary-blue" />
                        manoj@silgatehhiring.com
                      </span>
                      <ExternalLink size={12} className="text-gray-400" />
                    </a>
                  </div>
                </div>

                {/* Certifications Card */}
                <div className="bg-white rounded-3xl p-6 border border-gray-200 shadow-sm">
                  <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-4">
                    Enterprise Quality Certifications
                  </h3>
                  <div className="grid grid-cols-2 gap-3">
                    {CERTIFICATION_BADGES.map((badge, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-3 p-3 rounded-xl bg-[#F8FAFC] border border-gray-200 hover:border-primary-blue/40 transition-colors"
                      >
                        <img
                          src={badge.src}
                          alt={badge.name}
                          className="h-7 w-auto object-contain flex-shrink-0"
                        />
                        <span className="text-xs font-bold text-dark-navy">
                          {badge.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column: The Enquiry Form (Interactive & Zoho Portal) */}
              <div className="lg:col-span-8">
                <div className="bg-white rounded-3xl border border-gray-200 shadow-xl overflow-hidden">
                  {/* Form Header with Mode Switcher */}
                  <div className="p-6 sm:p-8 bg-gradient-to-r from-dark-navy to-[#132338] text-white flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                      <span className="inline-block px-3 py-1 rounded-full bg-white/10 text-[#F8B83A] text-xs font-bold uppercase tracking-wider mb-2">
                        Official Enquiry Desk
                      </span>
                      <h3 className="text-2xl font-heading font-bold text-white">
                        Submit Your Requirement
                      </h3>
                      <p className="text-gray-300 text-xs sm:text-sm mt-1">
                        Complete the form below to receive a response from our
                        technical team.
                      </p>
                    </div>

                    {/* Mode Toggle Buttons */}
                    <div className="inline-flex p-1 bg-white/10 rounded-xl border border-white/15 w-fit">
                      <button
                        onClick={() => setFormMode("interactive")}
                        className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${
                          formMode === "interactive"
                            ? "bg-white text-dark-navy shadow-md"
                            : "text-gray-300 hover:text-white"
                        }`}
                      >
                        ⚡ Direct Form
                      </button>
                      <button
                        onClick={() => setFormMode("zoho")}
                        className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${
                          formMode === "zoho"
                            ? "bg-white text-dark-navy shadow-md"
                            : "text-gray-300 hover:text-white"
                        }`}
                      >
                        📋 Zoho Portal
                      </button>
                    </div>
                  </div>

                  {/* Mode 1: Interactive Native React Form */}
                  {formMode === "interactive" && (
                    <div className="p-6 sm:p-10">
                      {formStatus === "success" ? (
                        <div className="py-12 px-6 text-center max-w-lg mx-auto">
                          <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-inner animate-bounce">
                            <CheckCircle2 size={42} />
                          </div>
                          <h4 className="text-2xl font-heading font-bold text-dark-navy mb-3">
                            Enquiry Received Successfully!
                          </h4>
                          <p className="text-gray-600 text-sm leading-relaxed mb-6">
                            Thank you,{" "}
                            <strong className="text-dark-navy">
                              {formData.firstName}
                            </strong>
                            . We have registered your inquiry for{" "}
                            <strong className="text-dark-navy">
                              {formData.orgName}
                            </strong>
                            . Our enterprise solutions team will reach out to
                            you at{" "}
                            <span className="text-primary-blue font-semibold">
                              {formData.email}
                            </span>{" "}
                            within 24 business hours.
                          </p>
                          <div className="p-4 rounded-xl bg-gray-50 border border-gray-200 text-left text-xs text-gray-500 mb-8 space-y-1">
                            <p>
                              <strong>Reference Org:</strong> {formData.orgName}
                            </p>
                            <p>
                              <strong>Contact Person:</strong>{" "}
                              {formData.firstName} {formData.lastName} (
                              {formData.jobTitle})
                            </p>
                            <p>
                              <strong>Solution Interest:</strong>{" "}
                              {formData.solution || "Enterprise Solutions"}
                            </p>
                            <p>
                              <strong>Contact Phone:</strong> {formData.phone}
                            </p>
                          </div>
                          <button
                            onClick={handleResetForm}
                            className="px-6 py-3 rounded-xl bg-primary-blue text-white text-sm font-bold shadow-md hover:bg-primary-blue/90 transition-all"
                          >
                            Submit Another Enquiry
                          </button>
                        </div>
                      ) : (
                        <form onSubmit={handleSubmit} className="space-y-6">
                          {/* Organisation Name */}
                          <div>
                            <label className="block text-xs font-bold text-dark-navy uppercase tracking-wider mb-2">
                              Organisation Name{" "}
                              <span className="text-red-500">*</span>
                            </label>
                            <div className="relative">
                              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400">
                                <Building2 size={18} />
                              </div>
                              <input
                                type="text"
                                name="orgName"
                                value={formData.orgName}
                                onChange={handleInputChange}
                                placeholder="e.g. Acme Enterprises Ltd."
                                className={`w-full pl-11 pr-4 py-3 rounded-xl border text-sm focus:outline-none transition-all ${
                                  formErrors.orgName
                                    ? "border-red-400 bg-red-50/20 focus:ring-2 focus:ring-red-200"
                                    : "border-gray-200 focus:border-primary-blue focus:ring-2 focus:ring-primary-blue/15"
                                }`}
                              />
                            </div>
                            {formErrors.orgName && (
                              <p className="text-xs text-red-500 mt-1.5 font-medium">
                                {formErrors.orgName}
                              </p>
                            )}
                          </div>

                          {/* First & Last Name */}
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div>
                              <label className="block text-xs font-bold text-dark-navy uppercase tracking-wider mb-2">
                                First Name{" "}
                                <span className="text-red-500">*</span>
                              </label>
                              <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400">
                                  <User size={18} />
                                </div>
                                <input
                                  type="text"
                                  name="firstName"
                                  value={formData.firstName}
                                  onChange={handleInputChange}
                                  placeholder="John"
                                  className={`w-full pl-11 pr-4 py-3 rounded-xl border text-sm focus:outline-none transition-all ${
                                    formErrors.firstName
                                      ? "border-red-400 bg-red-50/20 focus:ring-2 focus:ring-red-200"
                                      : "border-gray-200 focus:border-primary-blue focus:ring-2 focus:ring-primary-blue/15"
                                  }`}
                                />
                              </div>
                              {formErrors.firstName && (
                                <p className="text-xs text-red-500 mt-1.5 font-medium">
                                  {formErrors.firstName}
                                </p>
                              )}
                            </div>

                            <div>
                              <label className="block text-xs font-bold text-dark-navy uppercase tracking-wider mb-2">
                                Last Name{" "}
                                <span className="text-red-500">*</span>
                              </label>
                              <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400">
                                  <User size={18} />
                                </div>
                                <input
                                  type="text"
                                  name="lastName"
                                  value={formData.lastName}
                                  onChange={handleInputChange}
                                  placeholder="Doe"
                                  className={`w-full pl-11 pr-4 py-3 rounded-xl border text-sm focus:outline-none transition-all ${
                                    formErrors.lastName
                                      ? "border-red-400 bg-red-50/20 focus:ring-2 focus:ring-red-200"
                                      : "border-gray-200 focus:border-primary-blue focus:ring-2 focus:ring-primary-blue/15"
                                  }`}
                                />
                              </div>
                              {formErrors.lastName && (
                                <p className="text-xs text-red-500 mt-1.5 font-medium">
                                  {formErrors.lastName}
                                </p>
                              )}
                            </div>
                          </div>

                          {/* Email & Phone */}
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div>
                              <label className="block text-xs font-bold text-dark-navy uppercase tracking-wider mb-2">
                                Official Email Address{" "}
                                <span className="text-red-500">*</span>
                              </label>
                              <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400">
                                  <Mail size={18} />
                                </div>
                                <input
                                  type="email"
                                  name="email"
                                  value={formData.email}
                                  onChange={handleInputChange}
                                  placeholder="john.doe@company.com"
                                  className={`w-full pl-11 pr-4 py-3 rounded-xl border text-sm focus:outline-none transition-all ${
                                    formErrors.email
                                      ? "border-red-400 bg-red-50/20 focus:ring-2 focus:ring-red-200"
                                      : "border-gray-200 focus:border-primary-blue focus:ring-2 focus:ring-primary-blue/15"
                                  }`}
                                />
                              </div>
                              {formErrors.email && (
                                <p className="text-xs text-red-500 mt-1.5 font-medium">
                                  {formErrors.email}
                                </p>
                              )}
                            </div>

                            <div>
                              <label className="block text-xs font-bold text-dark-navy uppercase tracking-wider mb-2">
                                Phone Number{" "}
                                <span className="text-red-500">*</span>
                              </label>
                              <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400">
                                  <Phone size={18} />
                                </div>
                                <input
                                  type="tel"
                                  name="phone"
                                  value={formData.phone}
                                  onChange={handleInputChange}
                                  placeholder="+91 98765 43210"
                                  className={`w-full pl-11 pr-4 py-3 rounded-xl border text-sm focus:outline-none transition-all ${
                                    formErrors.phone
                                      ? "border-red-400 bg-red-50/20 focus:ring-2 focus:ring-red-200"
                                      : "border-gray-200 focus:border-primary-blue focus:ring-2 focus:ring-primary-blue/15"
                                  }`}
                                />
                              </div>
                              {formErrors.phone && (
                                <p className="text-xs text-red-500 mt-1.5 font-medium">
                                  {formErrors.phone}
                                </p>
                              )}
                            </div>
                          </div>

                          {/* Job Title & Solution Interest */}
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div>
                              <label className="block text-xs font-bold text-dark-navy uppercase tracking-wider mb-2">
                                Job Title / Designation{" "}
                                <span className="text-red-500">*</span>
                              </label>
                              <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400">
                                  <Briefcase size={18} />
                                </div>
                                <input
                                  type="text"
                                  name="jobTitle"
                                  value={formData.jobTitle}
                                  onChange={handleInputChange}
                                  placeholder="e.g. CTO / Head of IT / CISO"
                                  className={`w-full pl-11 pr-4 py-3 rounded-xl border text-sm focus:outline-none transition-all ${
                                    formErrors.jobTitle
                                      ? "border-red-400 bg-red-50/20 focus:ring-2 focus:ring-red-200"
                                      : "border-gray-200 focus:border-primary-blue focus:ring-2 focus:ring-primary-blue/15"
                                  }`}
                                />
                              </div>
                              {formErrors.jobTitle && (
                                <p className="text-xs text-red-500 mt-1.5 font-medium">
                                  {formErrors.jobTitle}
                                </p>
                              )}
                            </div>

                            <div>
                              <label className="block text-xs font-bold text-dark-navy uppercase tracking-wider mb-2">
                                Solution of Interest
                              </label>
                              <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400">
                                  <Layers size={18} />
                                </div>
                                <select
                                  name="solution"
                                  value={formData.solution}
                                  onChange={handleInputChange}
                                  className="w-full pl-11 pr-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-primary-blue focus:ring-2 focus:ring-primary-blue/15 bg-white text-gray-700"
                                >
                                  <option value="">
                                    Select a Solution Category
                                  </option>
                                  {contactData.solutionsList.map((sol, idx) => (
                                    <option key={idx} value={sol}>
                                      {sol}
                                    </option>
                                  ))}
                                </select>
                              </div>
                            </div>
                          </div>

                          {/* Address Fields */}
                          <div>
                            <label className="block text-xs font-bold text-dark-navy uppercase tracking-wider mb-2">
                              Office Address
                            </label>
                            <input
                              type="text"
                              name="streetAddress"
                              value={formData.streetAddress}
                              onChange={handleInputChange}
                              placeholder="Street Address, Building, Floor"
                              className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-primary-blue focus:ring-2 focus:ring-primary-blue/15 mb-3"
                            />

                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                              <input
                                type="text"
                                name="city"
                                value={formData.city}
                                onChange={handleInputChange}
                                placeholder="City"
                                className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-primary-blue focus:ring-2 focus:ring-primary-blue/15"
                              />
                              <input
                                type="text"
                                name="state"
                                value={formData.state}
                                onChange={handleInputChange}
                                placeholder="State / Province"
                                className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-primary-blue focus:ring-2 focus:ring-primary-blue/15"
                              />
                              <input
                                type="text"
                                name="country"
                                value={formData.country}
                                onChange={handleInputChange}
                                placeholder="Country"
                                className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-primary-blue focus:ring-2 focus:ring-primary-blue/15"
                              />
                            </div>
                          </div>

                          {/* Message Area */}
                          <div>
                            <label className="block text-xs font-bold text-dark-navy uppercase tracking-wider mb-2">
                              Message / Specific Requirement{" "}
                              <span className="text-red-500">*</span>
                            </label>
                            <div className="relative">
                              <textarea
                                name="message"
                                rows={4}
                                value={formData.message}
                                onChange={handleInputChange}
                                placeholder="Describe your network architecture, security posture, or project timeline requirements..."
                                className={`w-full p-4 rounded-xl border text-sm focus:outline-none transition-all ${
                                  formErrors.message
                                    ? "border-red-400 bg-red-50/20 focus:ring-2 focus:ring-red-200"
                                    : "border-gray-200 focus:border-primary-blue focus:ring-2 focus:ring-primary-blue/15"
                                }`}
                              />
                            </div>
                            {formErrors.message && (
                              <p className="text-xs text-red-500 mt-1.5 font-medium">
                                {formErrors.message}
                              </p>
                            )}
                          </div>

                          {/* Submit Action Button */}
                          <div className="pt-2">
                            <button
                              type="submit"
                              disabled={formStatus === "submitting"}
                              className="w-full sm:w-auto px-10 py-4 rounded-full bg-gradient-to-r from-primary-blue via-[#0B5095] to-[#F1613E] text-white font-bold text-sm tracking-wide uppercase shadow-lg shadow-primary-blue/30 hover:shadow-xl hover:shadow-primary-blue/40 hover:-translate-y-0.5 active:translate-y-0 transition-all flex items-center justify-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed"
                            >
                              {formStatus === "submitting" ? (
                                <>
                                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                  <span>Submitting Enquiry...</span>
                                </>
                              ) : (
                                <>
                                  <span>Submit Enquiry</span>
                                  <Send size={16} />
                                </>
                              )}
                            </button>
                          </div>
                        </form>
                      )}
                    </div>
                  )}

                  {/* Mode 2: Official Zoho Portal Iframe Embed */}
                  {formMode === "zoho" && (
                    <div className="p-4 sm:p-8 bg-white">
                      <div className="relative min-h-[500px]">
                        {!iframeLoaded && (
                          <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-50/80 backdrop-blur-sm z-10 rounded-2xl">
                            <div className="w-10 h-10 border-3 border-primary-blue/30 border-t-primary-blue rounded-full animate-spin mb-3" />
                            <p className="text-xs font-semibold text-gray-500">
                              Connecting to Signellent Zoho CRM Portal...
                            </p>
                          </div>
                        )}
                        <iframe
                          src={contactData.zohoIframeSrc}
                          title="Signellent Zoho Enquiry Form"
                          aria-label="Enquire Now"
                          style={{
                            border: "none",
                            height: iframeHeight,
                            width: "100%",
                            transition: "height 0.3s ease",
                          }}
                          onLoad={() => setIframeLoaded(true)}
                        />
                      </div>
                    </div>
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

export default Contact;
