import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Search, Menu, ChevronDown, X } from "lucide-react";
import logo from "../../public/images/logo.png";
import { navData } from "../data/rakshnetData";
import MobileMenu from "./MobileMenu";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const location = useLocation();
  const currentPath = location.pathname;

  const isWhatWeDoActive = currentPath.includes("/what-we-do");
  const isWhatWeThinkActive =
    currentPath === "/" ||
    currentPath.includes("/rakshnet") ||
    currentPath.includes("/prime");
  const isWhatWeServeActive = currentPath.includes("/product-category");
  const isBrandsActive = currentPath.includes("/brands");
  const isCareersActive = currentPath.includes("/careers");

  const renderNavLink = (item, extraClasses = "") => {
    const isInternal = item.href.startsWith("/");
    const isActive =
      isInternal &&
      (currentPath === item.href ||
        (item.href !== "/" && currentPath.startsWith(item.href)));

    if (isInternal) {
      return (
        <Link
          to={item.href}
          className={`dropdown-link-item ${isActive ? "!text-primary-blue font-semibold bg-gray-50" : ""} ${extraClasses}`}
        >
          {item.name}
        </Link>
      );
    }
    return (
      <a
        href={item.href}
        className={`dropdown-link-item ${extraClasses}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        {item.name}
      </a>
    );
  };

  return (
    <>
      <header className="header-wrapper">
        <div className="header-container">
          {/* Logo */}
          <div className="flex items-center">
            <Link
              to="/rakshnet/"
              className="header-logo-link"
              aria-label="Signellent Home"
            >
              <img
                src={logo}
                alt="Signellent Technologies"
                className="h-10 md:h-12 w-auto object-contain"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="nav-desktop-menu">
            {/* What We Do */}
            <div className="nav-desktop-item">
              <a
                href="#"
                className={`nav-desktop-link ${isWhatWeDoActive ? "active !text-primary-blue-600" : ""}`}
                onClick={(e) => e.preventDefault()}
              >
                What We Do
                <ChevronDown className="nav-desktop-arrow" />
              </a>
              <div className="mega-dropdown-menu">
                <div className="grid grid-cols-2 gap-x-6 gap-y-2 w-80">
                  {navData.whatWeDo.map((item, idx) => (
                    <React.Fragment key={idx}>
                      {renderNavLink(item)}
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </div>

            {/* What We Think */}
            <div className="nav-desktop-item">
              <a
                href="#"
                className={`nav-desktop-link ${isWhatWeThinkActive ? "active !text-primary-blue-600" : ""}`}
                onClick={(e) => e.preventDefault()}
              >
                What We Think
                <ChevronDown className="nav-desktop-arrow" />
              </a>
              <div className="mega-dropdown-menu w-56">
                <div className="flex flex-col gap-1">
                  {navData.whatWeThink.map((item, idx) => (
                    <React.Fragment key={idx}>
                      {renderNavLink(item)}
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </div>

            {/* What We Serve */}
            <div className="nav-desktop-item">
              <a
                href="#"
                className={`nav-desktop-link ${isWhatWeServeActive ? "active !text-primary-blue-600" : ""}`}
                onClick={(e) => e.preventDefault()}
              >
                What We Serve
                <ChevronDown className="nav-desktop-arrow" />
              </a>
              <div className="mega-dropdown-menu mega-dropdown-large !min-w-[960px]">
                <div className="grid grid-cols-5 gap-6">
                  {/* Enterprise Networks */}
                  <div>
                    <h4 className="font-heading font-bold text-xs uppercase tracking-wider text-dark-navy mb-3 pb-2 border-b border-gray-100">
                      Enterprise Networks
                    </h4>
                    <div className="flex flex-col gap-1">
                      {navData.whatWeServe.enterpriseNetworks.map(
                        (item, idx) => (
                          <React.Fragment key={idx}>
                            {renderNavLink(item, "!py-1 !text-xs")}
                          </React.Fragment>
                        ),
                      )}
                    </div>
                  </div>

                  {/* Security */}
                  <div>
                    <h4 className="font-heading font-bold text-xs uppercase tracking-wider text-dark-navy mb-3 pb-2 border-b border-gray-100">
                      Security
                    </h4>
                    <div className="flex flex-col gap-1">
                      {navData.whatWeServe.security.map((item, idx) => (
                        <React.Fragment key={idx}>
                          {renderNavLink(item, "!py-1 !text-xs")}
                        </React.Fragment>
                      ))}
                    </div>
                  </div>

                  {/* Unified Collaboration */}
                  <div>
                    <h4 className="font-heading font-bold text-xs uppercase tracking-wider text-dark-navy mb-3 pb-2 border-b border-gray-100">
                      Collaboration
                    </h4>
                    <div className="flex flex-col gap-1">
                      {navData.whatWeServe.collaboration.map((item, idx) => (
                        <React.Fragment key={idx}>
                          {renderNavLink(item, "!py-1 !text-xs")}
                        </React.Fragment>
                      ))}
                    </div>
                  </div>

                  {/* ELV */}
                  <div>
                    <h4 className="font-heading font-bold text-xs uppercase tracking-wider text-dark-navy mb-3 pb-2 border-b border-gray-100">
                      ELV Solutions
                    </h4>
                    <div className="flex flex-col gap-1">
                      {navData.whatWeServe.elv.map((item, idx) => (
                        <React.Fragment key={idx}>
                          {renderNavLink(item, "!py-1 !text-xs")}
                        </React.Fragment>
                      ))}
                    </div>
                  </div>

                  {/* Smart Utilities */}
                  <div>
                    <h4 className="font-heading font-bold text-xs uppercase tracking-wider text-dark-navy mb-3 pb-2 border-b border-gray-100">
                      Smart Utilities
                    </h4>
                    <div className="flex flex-col gap-1">
                      {navData.whatWeServe.smartUtilities.map((item, idx) => (
                        <React.Fragment key={idx}>
                          {renderNavLink(item, "!py-1 !text-xs")}
                        </React.Fragment>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Brands */}
            <div className="nav-desktop-item">
              <Link
                to="/brands"
                className={`nav-desktop-link ${isBrandsActive ? "active !text-primary-blue-600 font-semibold" : ""}`}
              >
                Brands
              </Link>
            </div>

            {/* Careers */}
            <div className="nav-desktop-item">
              <Link
                to="/careers"
                className={`nav-desktop-link ${isCareersActive ? "active !text-primary-blue-600 font-semibold" : ""}`}
              >
                Careers
              </Link>
            </div>
          </nav>

          {/* Right actions: Search + Enquire Button + Hamburger */}
          <div className="header-right-actions">
            {/* Search Trigger */}
            <button
              className="search-trigger-btn"
              onClick={() => setSearchOpen(!searchOpen)}
              aria-label="Search site"
            >
              <Search size={20} />
            </button>

            {/* Enquire Now CTA Button */}
            <Link to="/contact" className="enquire-nav-btn">
              Enquire Now
            </Link>

            {/* Mobile Menu Hamburger */}
            <button
              className="mobile-hamburger-btn"
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open mobile menu"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>

        {/* Search Bar Dropdown Overlay */}
        {searchOpen && (
          <div className="bg-white border-b border-gray-200 py-4 px-6 shadow-md transition-all">
            <div className="max-w-2xl mx-auto flex items-center gap-3">
              <Search size={18} className="text-gray-400" />
              <input
                type="text"
                placeholder="Search products, solutions, technologies..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                autoFocus
                className="w-full text-sm text-dark-navy focus:outline-none"
              />
              <button
                onClick={() => setSearchOpen(false)}
                className="text-gray-400 hover:text-dark-navy"
              >
                <X size={18} />
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Mobile Drawer */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      />
    </>
  );
}

export default Navbar;
