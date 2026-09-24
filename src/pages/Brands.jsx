import React, { useState, useMemo } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  ChevronRight,
  Search,
  ShieldCheck,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BrandCard from "../components/BrandCard";
import { brandsData } from "../data/brandsData";

export function Brands() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Categories list
  const categories = useMemo(() => {
    const cats = new Set(
      brandsData.brands.map((b) => b.category).filter(Boolean),
    );
    return ["All", ...Array.from(cats)];
  }, []);

  // Filtered brands
  const filteredBrands = useMemo(() => {
    return brandsData.brands.filter((b) => {
      const matchesSearch =
        b.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (b.category &&
          b.category.toLowerCase().includes(searchQuery.toLowerCase()));
      const matchesCategory =
        selectedCategory === "All" || b.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  return (
    <div className="brands-page-app min-h-screen flex flex-col bg-[#F8FAFC]">
      {/* Existing Navbar */}
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
                <span className="font-semibold text-dark-navy">Brands</span>
              </nav>
            </div>
          </div>
        </div>

        {/* Hero Section */}
        <section className="bg-gradient-to-b from-white via-[#F8FAFC] to-[#F1F5F9] pt-12 pb-16 border-b border-gray-200">
          <div className="max-w-[1450px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-blue/10 text-primary-blue text-xs font-bold uppercase tracking-wider mb-4 border border-primary-blue/20">
              <Sparkles size={14} className="text-primary-blue" />
              Strategic Technology Alliances
            </span>
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-heading font-extrabold text-dark-navy tracking-tight mb-5">
              Brands
            </h1>
            <p className="text-gray-600 text-base sm:text-lg md:text-xl leading-relaxed max-w-3xl mx-auto mb-10">
              {brandsData.heroDescription}
            </p>

            {/* Search & Filter Controls */}
            <div className="max-w-2xl mx-auto flex flex-col sm:flex-row items-center gap-3">
              <div className="relative w-full">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
                  <Search size={18} />
                </div>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search brand name or technology (e.g. Cisco, Fortinet, Aruba)..."
                  className="w-full pl-11 pr-4 py-3.5 rounded-xl border border-gray-200 bg-white text-sm focus:outline-none focus:border-primary-blue focus:ring-2 focus:ring-primary-blue/15 shadow-sm transition-all"
                />
              </div>

              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="px-4 py-3.5 rounded-xl bg-gray-200 hover:bg-gray-300 text-xs font-bold text-gray-700 transition-colors whitespace-nowrap"
                >
                  Clear Search
                </button>
              )}
            </div>

            {/* Category Pills */}
            <div className="flex flex-wrap items-center justify-center gap-2 mt-6 max-w-4xl mx-auto">
              {categories.map((cat, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all ${
                    selectedCategory === cat
                      ? "bg-primary-blue text-white shadow-md shadow-primary-blue/25"
                      : "bg-white text-gray-600 border border-gray-200 hover:border-primary-blue/40 hover:text-primary-blue"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Brand Grid Section */}
        <section className="py-16 sm:py-20">
          <div className="max-w-[1450px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-8 pb-4 border-b border-gray-200">
              <h2 className="text-xl sm:text-2xl font-heading font-bold text-dark-navy">
                OEM Portfolio{" "}
                <span className="text-primary-blue text-lg">
                  ({filteredBrands.length} Partners)
                </span>
              </h2>
              <Link
                to="/contact"
                className="text-xs font-bold text-primary-blue hover:underline flex items-center gap-1"
              >
                <span>Request Custom Solution</span>
                <ArrowRight size={14} />
              </Link>
            </div>

            {/* Grid */}
            {filteredBrands.length > 0 ? (
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 sm:gap-6">
                {filteredBrands.map((brand, idx) => (
                  <BrandCard key={idx} brand={brand} />
                ))}
              </div>
            ) : (
              <div className="text-center py-16 bg-white rounded-3xl border border-gray-200 p-8 max-w-lg mx-auto">
                <Search size={40} className="text-gray-300 mx-auto mb-4" />
                <h3 className="text-lg font-bold text-dark-navy mb-2">
                  No Matching Brands Found
                </h3>
                <p className="text-xs text-gray-500 mb-6">
                  We work with hundreds of niche OEMs beyond our primary
                  catalog. Let our solutions engineers source your exact
                  requirement.
                </p>
                <button
                  onClick={() => {
                    setSearchQuery("");
                    setSelectedCategory("All");
                  }}
                  className="px-6 py-2.5 bg-primary-blue text-white rounded-xl text-xs font-bold shadow-md hover:bg-primary-blue/90"
                >
                  Reset Filters
                </button>
              </div>
            )}

            {/* OEM Assurance Banner */}
            <div className="mt-16 bg-gradient-to-r from-dark-navy via-[#132338] to-[#1A2E47] rounded-3xl p-8 sm:p-12 text-white shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-80 h-80 bg-primary-blue/15 rounded-full blur-3xl pointer-events-none" />
              <div className="relative z-10 max-w-3xl">
                <span className="inline-block px-3 py-1 rounded-full bg-white/10 text-[#F8B83A] text-xs font-bold uppercase tracking-wider mb-4 border border-white/15">
                  Enterprise Procurement & Deployment
                </span>
                <h3 className="text-2xl sm:text-3xl font-heading font-extrabold mb-4">
                  Need Turnkey Bill of Materials (BOM) or High-Volume Pricing?
                </h3>
                <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-8">
                  Signellent provides direct OEM warranty coverage,
                  proof-of-concept testing, staging, and nationwide on-premise
                  installation for all brand partners.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link
                    to="/contact"
                    className="px-8 py-3.5 bg-gradient-to-r from-primary-blue to-[#F1613E] text-white font-bold text-xs sm:text-sm uppercase tracking-wider rounded-xl shadow-lg hover:brightness-110 transition-all flex items-center gap-2"
                  >
                    <span>Connect With Brand Specialist</span>
                    <ArrowRight size={16} />
                  </Link>
                  <a
                    href="tel:+919967730225"
                    className="px-6 py-3.5 bg-white/10 hover:bg-white/15 border border-white/20 text-white font-bold text-xs sm:text-sm rounded-xl transition-all"
                  >
                    Call Sales Desk: +91 8108810916
                  </a>
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

export default Brands;
