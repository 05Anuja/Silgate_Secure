import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  ShieldCheck,
  Zap,
  Award,
  Sparkles,
  Layers
} from "lucide-react";
import { heroSlidesData } from "../data/signellentData";

export function SignellentHero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [wordIndex, setWordIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const activeSlide = heroSlidesData[currentSlide];

  // Auto slide advance every 7 seconds
  useEffect(() => {
    if (isPaused) return;
    const slideTimer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlidesData.length);
    }, 7000);
    return () => clearInterval(slideTimer);
  }, [isPaused]);

  // Rotate animated words every 2.2 seconds
  useEffect(() => {
    const wordTimer = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % activeSlide.animatedWords.length);
    }, 2200);
    return () => clearInterval(wordTimer);
  }, [activeSlide]);

  // Reset word index on slide change
  useEffect(() => {
    setWordIndex(0);
  }, [currentSlide]);

  const handlePrev = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + heroSlidesData.length) % heroSlidesData.length
    );
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlidesData.length);
  };

  return (
    <section
      className="relative overflow-hidden bg-gradient-to-b from-white via-[#F8FAFC] to-[#F1F5F9] py-14 sm:py-18 lg:py-22 border-b border-gray-200"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      id="signellent-hero"
    >
      {/* Decorative background radial accents */}
      <div className="absolute top-0 left-1/4 -translate-x-1/2 w-96 h-96 bg-primary-blue/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-96 h-96 bg-silgate-orange/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1450px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center min-h-[460px]">
          {/* Left Column: Slide Content */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Top pill badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-blue/10 text-primary-blue text-xs font-bold uppercase tracking-wider border border-primary-blue/20 shadow-xs">
              <Sparkles size={14} className="text-primary-blue" />
              <span>India's Leading IT System Integrator</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[46px] font-heading font-extrabold text-dark-navy tracking-tight leading-[1.18]">
              {activeSlide.titlePrefix}{" "}
              <span className="inline-block relative min-w-[180px] sm:min-w-[220px]">
                <span
                  key={wordIndex}
                  className="bg-gradient-to-r from-primary-blue via-silgate-blue-light to-silgate-orange bg-clip-text text-transparent inline-block animate-in fade-in slide-in-from-bottom-2 duration-300 font-extrabold"
                >
                  {activeSlide.animatedWords[wordIndex]}
                </span>
              </span>
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-2xl font-normal font-sans">
              {activeSlide.description}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                to={activeSlide.buttonLink}
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full text-sm font-bold text-white bg-gradient-to-r from-primary-blue to-silgate-orange hover:from-silgate-blue-dark hover:to-silgate-orange-dark shadow-md hover:shadow-lg shadow-silgate-orange/20 transition-all duration-300 transform hover:-translate-y-0.5"
              >
                <span>{activeSlide.buttonText}</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>

              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-sm font-semibold text-dark-navy bg-white hover:bg-gray-50 border border-gray-300 hover:border-primary-blue hover:text-primary-blue shadow-sm transition-all duration-200"
              >
                <span>Schedule Consultation</span>
              </Link>
            </div>

            {/* Trust highlights */}
            <div className="pt-4 border-t border-gray-200/80 flex flex-wrap items-center gap-6 text-xs text-gray-500 font-medium font-sans">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-primary-blue" />
                <span>Zero Trust Sovereign Stack</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Zap className="w-4 h-4 text-silgate-orange" />
                <span>~99% On-Time Delivery</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Award className="w-4 h-4 text-emerald-600" />
                <span>CMMI Level 3 Certified</span>
              </div>
            </div>
          </div>

          {/* Right Column: Graphic Visual */}
          <div className="lg:col-span-5 relative flex justify-center items-center">
            <div className="relative w-full max-w-md aspect-square flex items-center justify-center p-8 bg-gradient-to-br from-dark-navy via-[#0E2038] to-dark-navy rounded-3xl border-2 border-white/10 shadow-2xl shadow-dark-navy/30 group overflow-hidden">
              {/* Subtle ambient glows */}
              <div className="absolute -top-12 -left-12 w-48 h-48 bg-primary-blue/30 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute -bottom-12 -right-12 w-48 h-48 bg-silgate-orange/25 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute inset-0 bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

              {/* Graphic image */}
              <img
                key={activeSlide.id}
                src={activeSlide.image}
                alt={activeSlide.alt}
                className="relative max-h-64 sm:max-h-72 w-auto object-contain transition-all duration-500 transform group-hover:scale-105 drop-shadow-[0_12px_24px_rgba(0,0,0,0.5)] animate-in fade-in zoom-in-95 duration-500 z-10"
              />

              {/* Floating badge */}
              <div className="hidden sm:flex absolute bottom-4 left-4 bg-white/95 backdrop-blur-md px-3.5 py-2 rounded-xl shadow-xl border border-white/20 items-center gap-2.5 z-20">
                <div className="w-8 h-8 rounded-lg bg-primary-blue flex items-center justify-center text-white font-extrabold text-xs shadow-sm">
                  11+
                </div>
                <div className="text-left">
                  <p className="text-[11px] font-bold text-dark-navy leading-tight">
                    Years of Excellence
                  </p>
                  <p className="text-[10px] text-gray-500 leading-tight">
                    900+ Enterprises
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Slider Controls Bar */}
        <div className="mt-10 pt-6 flex items-center justify-between border-t border-gray-200">
          {/* Slide dots */}
          <div className="flex items-center gap-2.5">
            {heroSlidesData.map((slide, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setCurrentSlide(idx)}
                className={`transition-all duration-300 rounded-full ${
                  currentSlide === idx
                    ? "w-8 h-2.5 bg-gradient-to-r from-primary-blue to-silgate-orange"
                    : "w-2.5 h-2.5 bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

          {/* Arrows */}
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handlePrev}
              className="p-2 rounded-full border border-gray-200 bg-white text-gray-600 hover:text-primary-blue hover:border-primary-blue hover:bg-gray-50 shadow-sm transition-all focus:outline-none"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={handleNext}
              className="p-2 rounded-full border border-gray-200 bg-white text-gray-600 hover:text-primary-blue hover:border-primary-blue hover:bg-gray-50 shadow-sm transition-all focus:outline-none"
              aria-label="Next slide"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SignellentHero;
