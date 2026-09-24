import React from "react";
import { Link } from "react-router-dom";
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Twitter,
  Facebook,
  Youtube,
  Instagram,
} from "lucide-react";
import { CERTIFICATION_BADGES } from "../utils/constants";
import logo from "../../public/images/logo.png";
import { footerData } from "../data/rakshnetData";

export function Footer() {
  const getSocialIcon = (name) => {
    switch (name) {
      case "LinkedIn":
        return <Linkedin size={18} />;
      case "Twitter":
        return <Twitter size={18} />;
      case "Facebook":
        return <Facebook size={18} />;
      case "YouTube":
        return <Youtube size={18} />;
      case "Instagram":
        return <Instagram size={18} />;
      default:
        return null;
    }
  };

  return (
    <footer className="site-footer">
      <div className="container">
        {/* Main Footer Columns */}
        <div className="footer-top-grid">
          {/* Column 1: Company Profile & Certifications */}
          <div>
            <a href="#" className="inline-block mb-6">
              <img
                src={logo}
                alt="Signellent Technologies"
                className="h-10 w-auto object-contain brightness-0 invert"
              />
            </a>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Precision in Talent Acquisition. We represent the gold standard in
              recruitment consultancy for elite global enterprises.
            </p>
            {/* Certification Badges */}
            {/* <div className="flex flex-wrap items-center gap-3">
              {CERTIFICATION_BADGES.map((badge, idx) => (
                <div 
                  key={idx} 
                  className="bg-white/10 p-1.5 rounded border border-white/10 hover:border-primary-blue/40 transition-colors"
                  title={badge.name}
                >
                  <img src={badge.src} alt={badge.name} className="h-6 w-auto object-contain" />
                </div>
              ))}
            </div> */}
          </div>

          {/* Column 2: What We Do */}
          <div>
            <h4 className="footer-title">What We Do</h4>
            <ul className="footer-links-list">
              {footerData.whatWeDo.map((link, idx) => (
                <li key={idx}>
                  {link.href.startsWith("/") ? (
                    <Link to={link.href}>{link.name}</Link>
                  ) : (
                    <a href={link.href}>{link.name}</a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Useful Links */}
          <div>
            <h4 className="footer-title">Useful Links</h4>
            <ul className="footer-links-list">
              {footerData.usefulLinks.map((link, idx) => (
                <li key={idx}>
                  {link.href.startsWith("/") ? (
                    <Link to={link.href}>{link.name}</Link>
                  ) : (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {link.name}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Get In Touch */}
          <div>
            <h4 className="footer-title">Get In Touch</h4>
            <div className="flex flex-col gap-4 text-sm text-gray-400 mb-6">
              <a
                href={`mailto:${footerData.getInTouch.email}`}
                className="flex items-center gap-3 text-gray-300 hover:text-primary-blue transition-colors"
              >
                <Mail size={16} className="text-primary-blue flex-shrink-0" />
                <span>{footerData.getInTouch.email}</span>
              </a>
              <a
                href={`tel:${footerData.getInTouch.phone.replace(/\s+/g, "")}`}
                className="flex items-center gap-3 text-gray-300 hover:text-primary-blue transition-colors"
              >
                <Phone size={16} className="text-primary-blue flex-shrink-0" />
                <span>{footerData.getInTouch.phone}</span>
              </a>
            </div>

            {/* Social Icons */}
            <h5 className="text-xs uppercase tracking-wider text-gray-400 font-semibold mb-3">
              Follow Us
            </h5>
            <div className="flex items-center gap-2">
              {footerData.social.map((soc, idx) => (
                <a
                  key={idx}
                  href={soc.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 hover:bg-primary-blue hover:text-white hover:border-primary-blue transition-all"
                  aria-label={soc.name}
                >
                  {getSocialIcon(soc.name)}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Head Offices Section */}
        <div className="">
          <div className="">
            {/* India Head Office */}
            {/* <div className="flex items-start gap-4 p-4 rounded-lg bg-white/[0.02] border border-white/5">
              <img src={footerData.indiaOffice.flag} alt="India Flag" className="w-8 h-auto rounded-sm mt-1" />
              <div>
                <h5 className="font-heading font-semibold text-sm text-white mb-1">
                  {footerData.indiaOffice.name}
                </h5>
                <p className="text-xs text-gray-400 leading-relaxed">
                  {footerData.indiaOffice.address}
                </p>
              </div>
            </div> */}

            {/* Canada Head Office */}
            {/* <div className="flex items-start gap-4 p-4 rounded-lg bg-white/[0.02] border border-white/5">
              <img src={footerData.canadaOffice.flag} alt="Canada Flag" className="w-8 h-auto rounded-sm mt-1" />
              <div>
                <h5 className="font-heading font-semibold text-sm text-white mb-1">
                  {footerData.canadaOffice.name}
                </h5>
                <p className="text-xs text-gray-400 leading-relaxed">
                  {footerData.canadaOffice.address}
                </p>
              </div>
            </div> */}
          </div>

          {/* Regional Offices */}
          {/* <h5 className="text-xs uppercase tracking-wider text-gray-400 font-semibold mb-3">
            Regional Offices
          </h5>
          <div className="offices-grid">
            {footerData.regionalOffices.map((office, idx) => (
              <div key={idx} className="office-tag">
                <img
                  src={office.icon}
                  alt=""
                  className="w-4 h-4 object-contain opacity-70"
                />
                <span>{office.name}</span>
              </div>
            ))}
          </div> */}
        </div>

        {/* Copyright */}
        <div className="footer-copyright">
          <p>{footerData.copyright}</p>
          <div className="flex items-center gap-6 text-xs text-gray-500">
            <a
              href="/privacy-policy"
              className="hover:text-primary-blue transition-colors"
            >
              Privacy Policy
            </a>
            <span>•</span>
            <a
              href="https://signellent.com/terms/"
              className="hover:text-primary-blue transition-colors"
            >
              Terms of Use
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
