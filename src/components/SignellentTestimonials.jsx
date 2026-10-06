import React, { useState } from "react";
import { Quote, ChevronLeft, ChevronRight, Star, Sparkles } from "lucide-react";
import { testimonialsData } from "../data/signellentData";

export function SignellentTestimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevTestimonial = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonialsData.length - 1 : prev - 1,
    );
  };

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonialsData.length);
  };

  return (
    <section
      className="py-20 bg-[#F8FAFC] border-b border-gray-200"
      id="testimonials"
    >
      <div className="max-w-[1450px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-blue/10 text-primary-blue text-xs font-bold uppercase tracking-wider mb-3 border border-primary-blue/20">
            <Sparkles size={14} className="text-primary-blue" />
            <span>Voices of Trust</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-dark-navy tracking-tight">
            Client’s Testimonial
          </h2>

          <div className="w-16 h-1 bg-gradient-to-r from-primary-blue to-silgate-orange rounded-full mx-auto mt-4 mb-4" />

          <p className="text-base sm:text-lg text-gray-600 font-sans">
            Hear from industry leaders and IT decision makers who rely on
            Silgate for nationwide mission-critical infrastructure.
          </p>
        </div>

        {/* Featured Testimonial Box */}
        <div className="max-w-4xl mx-auto relative">
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-gray-200/90 shadow-xl relative overflow-hidden">
            {/* Background quote mark */}
            <Quote className="absolute -bottom-6 -right-6 w-44 h-44 text-primary-blue/5 pointer-events-none" />

            <div className="flex flex-col sm:flex-row items-center sm:items-start justify-between gap-6 mb-8">
              {/* Client Logo */}
              <div className="h-16 px-6 py-2 bg-gray-50 rounded-2xl border border-gray-200/80 shadow-xs flex items-center justify-center">
                <img
                  src={testimonialsData[currentIndex].logo}
                  alt={testimonialsData[currentIndex].client}
                  className="max-h-12 max-w-[130px] w-auto object-contain"
                />
              </div>

              {/* 5 Stars */}
              <div className="flex items-center gap-1 text-silgate-gold">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-silgate-gold" />
                ))}
              </div>
            </div>

            {/* Quote */}
            <p className="text-lg sm:text-xl text-dark-navy font-medium leading-relaxed italic mb-8 font-sans">
              "{testimonialsData[currentIndex].quote}"
            </p>

            {/* Author info */}
            <div className="flex items-center justify-between pt-6 border-t border-gray-200">
              <div>
                <h4 className="text-base font-bold font-heading text-dark-navy">
                  {testimonialsData[currentIndex].author}
                </h4>
                <p className="text-xs sm:text-sm text-primary-blue font-bold font-sans">
                  {testimonialsData[currentIndex].designation} •{" "}
                  {testimonialsData[currentIndex].client}
                </p>
              </div>

              {/* Nav buttons */}
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={prevTestimonial}
                  className="p-2.5 rounded-full border border-gray-200 bg-white hover:bg-gray-50 text-gray-700 hover:text-primary-blue hover:border-primary-blue transition-colors shadow-xs"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  type="button"
                  onClick={nextTestimonial}
                  className="p-2.5 rounded-full border border-gray-200 bg-white hover:bg-gray-50 text-gray-700 hover:text-primary-blue hover:border-primary-blue transition-colors shadow-xs"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center items-center gap-2 mt-6">
            {testimonialsData.map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setCurrentIndex(idx)}
                className={`transition-all duration-300 rounded-full ${
                  currentIndex === idx
                    ? "w-8 h-2.5 bg-gradient-to-r from-primary-blue to-silgate-orange"
                    : "w-2.5 h-2.5 bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Go to testimonial ${idx + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Small Logo preview row */}
        <div className="mt-14 grid grid-cols-3 sm:grid-cols-6 gap-4 items-center opacity-85">
          {testimonialsData.map((t, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setCurrentIndex(idx)}
              className={`p-3 rounded-2xl border transition-all flex items-center justify-center h-20 ${
                currentIndex === idx
                  ? "bg-white border-primary-blue shadow-md scale-105"
                  : "bg-white border-gray-200/80 hover:bg-gray-50"
              }`}
            >
              <img
                src={t.logo}
                alt={t.client}
                className="max-h-10 max-w-[90px] w-auto object-contain grayscale hover:grayscale-0 transition-all"
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SignellentTestimonials;
