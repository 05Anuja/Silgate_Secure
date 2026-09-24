import React from 'react';
import { Link } from 'react-router-dom';
// import { RAKSHNET_VIDEO_URL } from '../utils/constants';
import video from '../../public/video/Silgate_Secure_video_event.mp4';
import { heroData } from '../data/rakshnetData';

export function Hero() {
  return (
    <section className="hero-section">
      {/* Video Background */}
      <video className="hero-video-background" autoPlay muted loop playsInline>
        <source src={video} type="video/mp4" />
      </video>
      
      {/* Video Overlay */}
      <div className="hero-video-overlay"></div>
      
      <div className="container">
        <div className="hero-content">
          <div className="hero-badge">
            <span className="hero-badge-dot"></span>
            <span className="hero-badge-text">{heroData.badge}</span>
          </div>
          
          <h1 className="hero-title">
            {heroData.titleMain}<br />
            <span className="gradient-text">{heroData.titleGradient}</span>
          </h1>
          
          <p className="hero-description">
            {heroData.description}
          </p>
          
          <div className="hero-cta">
            <Link to={heroData.scheduleHref} className="btn btn-primary">
              Schedule Consultation
              <svg className="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M5 12h14M12 5l7 7-7 7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
            <a href={heroData.whitepaperHref} className="btn btn-secondary">
              Download Whitepaper
              <svg className="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
