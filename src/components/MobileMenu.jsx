import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown, X, Search } from 'lucide-react';
import { navData } from '../data/rakshnetData';

export function MobileMenu({ isOpen, onClose }) {
  const [openSection, setOpenSection] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const location = useLocation();
  const currentPath = location.pathname;

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  const renderMobileLink = (item, isSubmenu = false) => {
    const isInternal = item.href.startsWith('/');
    const isActive = isInternal && (currentPath === item.href || (item.href !== '/' && currentPath.startsWith(item.href)));

    if (isInternal) {
      return (
        <Link
          to={item.href}
          onClick={onClose}
          className={`block py-1.5 text-xs transition-colors ${
            isActive ? '!text-primary-blue font-bold' : 'text-gray-600 hover:text-primary-blue'
          }`}
        >
          {item.name}
        </Link>
      );
    }

    return (
      <a
        href={item.href}
        target="_blank"
        rel="noopener noreferrer"
        onClick={onClose}
        className="block py-1.5 text-xs text-gray-600 hover:text-primary-blue transition-colors"
      >
        {item.name}
      </a>
    );
  };

  return (
    <>
      <div 
        className={`mobile-backdrop ${isOpen ? 'open' : ''}`} 
        onClick={onClose} 
      />

      <div className={`mobile-drawer ${isOpen ? 'open' : ''}`}>
        <div className="flex items-center justify-between pb-4 border-b border-gray-200">
          <span className="font-heading font-bold text-lg text-dark-navy">Menu</span>
          <button 
            onClick={onClose} 
            className="p-1 rounded-md text-gray-500 hover:text-dark-navy transition-colors"
            aria-label="Close Menu"
          >
            <X size={24} />
          </button>
        </div>

        {/* Search Input inside mobile menu */}
        <div className="mt-4 mb-6">
          <div className="relative">
            <input 
              type="text" 
              placeholder="Search products & solutions..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 text-sm bg-gray-100 rounded-lg border border-gray-200 focus:outline-none focus:border-primary-blue"
            />
            <Search size={16} className="absolute left-3 top-2.5 text-gray-400" />
          </div>
        </div>

        <nav className="flex flex-col gap-2">
          {/* What We Do */}
          <div>
            <button 
              onClick={() => toggleSection('whatWeDo')}
              className="w-full flex items-center justify-between py-2.5 text-left text-sm font-semibold text-dark-navy hover:text-primary-blue transition-colors"
            >
              <span>What We Do</span>
              <ChevronDown 
                size={16} 
                className={`transition-transform duration-200 ${openSection === 'whatWeDo' ? 'rotate-180' : ''}`} 
              />
            </button>
            {openSection === 'whatWeDo' && (
              <div className="pl-4 pb-2 flex flex-col gap-1 border-l-2 border-primary-blue/30 ml-2">
                {navData.whatWeDo.map((item, idx) => (
                  <React.Fragment key={idx}>
                    {renderMobileLink(item)}
                  </React.Fragment>
                ))}
              </div>
            )}
          </div>

          {/* What We Think */}
          <div>
            <button 
              onClick={() => toggleSection('whatWeThink')}
              className="w-full flex items-center justify-between py-2.5 text-left text-sm font-semibold text-dark-navy hover:text-primary-blue transition-colors"
            >
              <span>What We Think</span>
              <ChevronDown 
                size={16} 
                className={`transition-transform duration-200 ${openSection === 'whatWeThink' ? 'rotate-180' : ''}`} 
              />
            </button>
            {openSection === 'whatWeThink' && (
              <div className="pl-4 pb-2 flex flex-col gap-1 border-l-2 border-primary-blue/30 ml-2">
                {navData.whatWeThink.map((item, idx) => (
                  <React.Fragment key={idx}>
                    {renderMobileLink(item)}
                  </React.Fragment>
                ))}
              </div>
            )}
          </div>

          {/* What We Serve */}
          <div>
            <button 
              onClick={() => toggleSection('whatWeServe')}
              className="w-full flex items-center justify-between py-2.5 text-left text-sm font-semibold text-dark-navy hover:text-primary-blue transition-colors"
            >
              <span>What We Serve</span>
              <ChevronDown 
                size={16} 
                className={`transition-transform duration-200 ${openSection === 'whatWeServe' ? 'rotate-180' : ''}`} 
              />
            </button>
            {openSection === 'whatWeServe' && (
              <div className="pl-4 pb-2 flex flex-col gap-3 border-l-2 border-primary-blue/30 ml-2 text-xs">
                <div>
                  <div className="font-bold text-gray-700 mb-1">Enterprise Networks</div>
                  {navData.whatWeServe.enterpriseNetworks.map((item, idx) => (
                    <React.Fragment key={idx}>{renderMobileLink(item)}</React.Fragment>
                  ))}
                </div>
                <div>
                  <div className="font-bold text-gray-700 mb-1">Security</div>
                  {navData.whatWeServe.security.map((item, idx) => (
                    <React.Fragment key={idx}>{renderMobileLink(item)}</React.Fragment>
                  ))}
                </div>
                <div>
                  <div className="font-bold text-gray-700 mb-1">Unified Collaboration</div>
                  {navData.whatWeServe.collaboration.map((item, idx) => (
                    <React.Fragment key={idx}>{renderMobileLink(item)}</React.Fragment>
                  ))}
                </div>
                <div>
                  <div className="font-bold text-gray-700 mb-1">ELV</div>
                  {navData.whatWeServe.elv.map((item, idx) => (
                    <React.Fragment key={idx}>{renderMobileLink(item)}</React.Fragment>
                  ))}
                </div>
                <div>
                  <div className="font-bold text-gray-700 mb-1">Smart Utilities</div>
                  {navData.whatWeServe.smartUtilities.map((item, idx) => (
                    <React.Fragment key={idx}>{renderMobileLink(item)}</React.Fragment>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Brands */}
          <Link 
            to="/brands" 
            onClick={onClose}
            className="py-2.5 text-sm font-semibold text-dark-navy hover:text-primary-blue transition-colors"
          >
            Brands
          </Link>

          {/* Careers */}
          <Link 
            to="/careers" 
            onClick={onClose}
            className="py-2.5 text-sm font-semibold text-dark-navy hover:text-primary-blue transition-colors"
          >
            Careers
          </Link>
        </nav>

        {/* CTA */}
        <div className="mt-8 pt-4 border-t border-gray-200">
          <Link 
            to="/contact" 
            onClick={onClose}
            className="enquire-nav-btn w-full justify-center text-center !flex"
          >
            Enquire Now
          </Link>
        </div>
      </div>
    </>
  );
}

export default MobileMenu;
