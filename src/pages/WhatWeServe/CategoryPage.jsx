import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { categoriesData } from '../../data/categoriesData';
import { ChevronRight, ArrowLeft, Layers, ShieldCheck, Cpu } from 'lucide-react';

export function CategoryPage() {
  const { pillar, category } = useParams();
  const slug = `${pillar}/${category}`;
  const data = categoriesData[slug] || Object.values(categoriesData).find(c => c.slug.endsWith(category));

  if (!data) {
    return (
      <div className="min-h-screen flex flex-col bg-[#f4f6f9]">
        <Navbar />
        <main className="flex-1 flex items-center justify-center p-8">
          <div className="text-center max-w-md bg-white p-8 rounded-xl shadow-sm border border-gray-200">
            <h1 className="text-2xl font-bold text-dark-navy mb-4">Category Not Found</h1>
            <p className="text-gray-600 mb-6">The category you are looking for ({slug}) could not be located.</p>
            <Link 
              to="/rakshnet/" 
              className="inline-flex items-center gap-2 px-6 py-2.5 bg-primary-blue text-white rounded-lg font-medium hover:bg-primary-blue/90 transition-colors"
            >
              <ArrowLeft size={16} /> Return to Home
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-[#f4f6f9]">
      <Navbar />

      <main className="flex-1 py-8 px-4 sm:px-6 lg:px-8 max-w-[1450px] mx-auto w-full">
        {/* Breadcrumb Bar */}
        <nav className="flex items-center gap-2 text-xs text-gray-500 mb-6 font-medium">
          <Link to="/rakshnet/" className="hover:text-primary-blue transition-colors">Home</Link>
          <ChevronRight size={13} className="text-gray-400" />
          <span className="text-gray-600">{data.pillarTitle}</span>
          <ChevronRight size={13} className="text-gray-400" />
          <span className="text-dark-navy font-semibold">{data.title}</span>
        </nav>

        {/* Products Header */}
        <div className="mb-10">
          <h1 className="text-3xl md:text-4xl font-extrabold text-[#0d1117] tracking-tight mb-3">
            {data.title}
          </h1>
          <div className="w-12 h-1 bg-[#00cfff] rounded-full" />
        </div>

        {/* Subcategories Grid */}
        {data.subcategories && data.subcategories.length > 0 ? (
          <section className="mb-16">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {data.subcategories.map((item, idx) => (
                <div 
                  key={idx}
                  className="bg-white border border-[#e8ecf2] rounded-xl p-6 text-center hover:border-primary-blue hover:shadow-[0_10px_32px_rgba(0,207,255,0.15)] hover:-translate-y-1.5 transition-all duration-300 group flex flex-col justify-between items-center min-h-[280px]"
                >
                  <div className="w-full flex-1 flex items-center justify-center p-4">
                    {item.img ? (
                      <img 
                        src={item.img} 
                        alt={item.name} 
                        className="max-h-40 max-w-full object-contain group-hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                      />
                    ) : (
                      <div className="w-24 h-24 rounded-full bg-blue-50 flex items-center justify-center text-primary-blue">
                        <Cpu size={40} />
                      </div>
                    )}
                  </div>
                  <div className="w-full pt-4 border-t border-gray-50 flex flex-col items-center">
                    <h3 className="font-heading font-bold text-[15px] text-[#0d1117] leading-snug mb-2 line-clamp-2">
                      {item.name}
                    </h3>
                    {item.count && (
                      <span className="inline-block bg-[#f0f9ff] text-primary-blue text-xs font-semibold px-3 py-1 rounded-full border border-primary-blue/20">
                        {item.count}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>
        ) : (
          <div className="bg-white rounded-xl border border-gray-200 p-12 text-center my-8">
            <Layers size={48} className="mx-auto text-gray-300 mb-4" />
            <h3 className="text-lg font-bold text-dark-navy mb-2">Enterprise Solutions Catalog</h3>
            <p className="text-gray-500 max-w-md mx-auto text-sm mb-6">
              Explore custom architectures, technical datasheets, and enterprise deployment options with our certified network engineers.
            </p>
            <a 
              href="https://signellent.com/contact/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-2.5 bg-primary-blue text-white text-sm font-semibold rounded-lg hover:bg-primary-blue/90 shadow-md shadow-primary-blue/20 transition-all"
            >
              Request Datasheet / Enquiry
            </a>
          </div>
        )}

        {/* Direct Products Grid (if available) */}
        {data.products && data.products.length > 0 && (
          <section className="mb-16">
            <h2 className="text-xl font-bold text-dark-navy mb-6">Featured Products</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {data.products.map((prod, pIdx) => (
                <div 
                  key={pIdx}
                  className="bg-white border border-[#e8ecf2] rounded-xl p-5 text-center hover:border-primary-blue hover:shadow-lg transition-all"
                >
                  {prod.img && (
                    <img 
                      src={prod.img} 
                      alt={prod.title} 
                      className="max-h-36 mx-auto object-contain mb-4"
                      loading="lazy" 
                    />
                  )}
                  <h4 className="font-heading font-semibold text-sm text-dark-navy line-clamp-2 mb-2">
                    {prod.title}
                  </h4>
                  <a 
                    href="https://signellent.com/contact/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-block text-xs font-semibold text-primary-blue hover:underline mt-2"
                  >
                    Enquire Now →
                  </a>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Enterprise Assurance Banner */}
        <section className="bg-gradient-to-r from-dark-navy to-[#1a2942] rounded-2xl p-8 md:p-12 text-white mb-12 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary-blue/10 rounded-full blur-3xl pointer-events-none" />
          <div className="relative z-10 max-w-3xl">
            <span className="inline-block px-3 py-1 bg-primary-blue/20 text-[#00cfff] text-xs font-semibold uppercase tracking-wider rounded-full mb-4 border border-primary-blue/30">
              Enterprise Procurement & Deployment
            </span>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Need Turnkey Architecture or High-Volume Pricing?
            </h2>
            <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-6">
              Signellent is an authorized distributor and tier-1 system integrator for Cisco, Fortinet, Ruckus, Sophos, Ubiquiti, and Bosch across India. Contact our certified solution architects for design validation, proof-of-concept units, and official quotations.
            </p>
            <div className="flex flex-wrap gap-4">
              <a 
                href="https://signellent.com/contact/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-6 py-3 bg-gradient-to-r from-primary-blue to-[#00cfff] text-white font-semibold text-sm rounded-lg shadow-lg hover:brightness-110 transition-all"
              >
                Connect With Specialist
              </a>
              <a 
                href="tel:+918080004545" 
                className="px-6 py-3 bg-white/10 hover:bg-white/15 text-white font-semibold text-sm rounded-lg border border-white/20 transition-all flex items-center gap-2"
              >
                Call +91 8080 004545
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default CategoryPage;
