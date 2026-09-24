import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

export function BrandCard({ brand }) {
  return (
    <Link
      to="/contact"
      className="group bg-white rounded-2xl p-6 border border-gray-200/90 shadow-sm hover:shadow-xl hover:border-primary-blue/50 hover:-translate-y-1.5 transition-all duration-300 flex flex-col items-center justify-between text-center relative overflow-hidden h-full"
      title={`Explore ${brand.name} solutions`}
    >
      {/* Subtle brand corner accent */}
      <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-primary-blue/5 to-transparent rounded-bl-3xl pointer-events-none group-hover:from-primary-blue/15 transition-all" />
      
      {/* Brand Logo Container */}
      <div className="w-full h-24 sm:h-28 flex items-center justify-center p-2 mb-4">
        <img
          src={brand.logo}
          alt={`${brand.name} logo`}
          className="max-h-16 sm:max-h-20 max-w-[85%] object-contain filter group-hover:brightness-105 transition-all duration-300 group-hover:scale-105"
          loading="lazy"
        />
      </div>

      {/* Brand Title & Info */}
      <div className="w-full pt-3 border-t border-gray-100 flex flex-col items-center">
        <div className="flex items-center justify-center gap-1.5 w-full">
          <h3 className="font-heading font-bold text-sm sm:text-base text-dark-navy group-hover:text-primary-blue transition-colors line-clamp-1">
            {brand.name}
          </h3>
          <ArrowUpRight size={14} className="text-gray-400 group-hover:text-primary-blue opacity-0 group-hover:opacity-100 transition-all transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </div>
        {brand.category && (
          <span className="text-[11px] text-gray-500 font-medium mt-1 line-clamp-1">
            {brand.category}
          </span>
        )}
      </div>
    </Link>
  );
}

export default BrandCard;
