import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Zap, Globe } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section className="relative bg-deepvox-black text-white overflow-hidden min-h-screen flex items-center">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-30"
          poster="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1920 1080'%3E%3Cdefs%3E%3ClinearGradient id='grad' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%23%231f1f2a;stop-opacity:1' /%3E%3Cstop offset='50%25' style='stop-color:%23%232e2e39;stop-opacity:1' /%3E%3Cstop offset='100%25' style='stop-color:%23%231f1f2a;stop-opacity:1' /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23grad)' /%3E%3C/svg%3E"
        >
          {/* Fallback for different video formats */}
          <source src="https://assets.mixkit.co/videos/preview/mixkit-digital-animation-of-data-and-information-1007-large.mp4" type="video/mp4" />
          <source src="https://assets.mixkit.co/videos/preview/mixkit-network-of-connections-and-data-1006-large.mp4" type="video/mp4" />
          {/* Fallback content */}
          Your browser does not support the video tag.
        </video>
        
        {/* Video Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-deepvox-black/80 via-deepvox-gray/70 to-deepvox-black/80"></div>
        
        {/* Animated Overlay Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(77,48,251,0.4),transparent_50%)] animate-pulse"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(53,202,106,0.3),transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 w-full">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center bg-deepvox-blue bg-opacity-20 border border-deepvox-blue border-opacity-30 rounded-full px-6 py-2 mb-8 animate-fade-in-up opacity-0 hover:bg-opacity-30 hover:scale-105 transition-all duration-300" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
            <Shield className="w-4 h-4 mr-2 text-deepvox-accent" />
            <span className="text-sm font-medium">Trusted by 200+ Enterprise Organizations</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight animate-fade-in-up opacity-0 hover:scale-105 transition-transform duration-500" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
            Privacy-First{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-deepvox-blue to-deepvox-accent animate-pulse-slow">
              Enterprise AI Stack™
            </span>
          </h1>
          
          <p className="text-xl lg:text-2xl text-gray-300 mb-8 leading-relaxed animate-fade-in-up opacity-0" style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}>
            Transform Your Business Securely with Our Comprehensive 5-Layer AI Framework
          </p>

          {/* Key Benefits */}
          <div className="flex flex-wrap justify-center gap-6 mb-12 text-sm animate-fade-in-up opacity-0" style={{ animationDelay: '0.8s', animationFillMode: 'forwards' }}>
            <div className="flex items-center bg-white bg-opacity-10 rounded-full px-4 py-2 hover:bg-opacity-20 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 hover:shadow-lg group">
              <Zap className="w-4 h-4 mr-2 text-deepvox-accent group-hover:animate-pulse" />
              <span>3x Faster Implementation</span>
            </div>
            <div className="flex items-center bg-white bg-opacity-10 rounded-full px-4 py-2 hover:bg-opacity-20 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 hover:shadow-lg group" style={{ animationDelay: '0.1s' }}>
              <Shield className="w-4 h-4 mr-2 text-deepvox-blue group-hover:rotate-12 transition-transform duration-300" />
              <span>HIPAA & SOC2 Compliant</span>
            </div>
            <div className="flex items-center bg-white bg-opacity-10 rounded-full px-4 py-2 hover:bg-opacity-20 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 hover:shadow-lg group" style={{ animationDelay: '0.2s' }}>
              <Globe className="w-4 h-4 mr-2 text-deepvox-accent group-hover:animate-spin transition-transform duration-500" />
              <span>50% Cost Reduction</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up opacity-0" style={{ animationDelay: '1s', animationFillMode: 'forwards' }}>
            <Link
              to="/contact"
              className="bg-deepvox-blue hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold flex items-center justify-center transition-all duration-300 transform hover:scale-105 hover:-translate-y-2 shadow-lg hover:shadow-2xl group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-all duration-700"></div>
              <div className="relative z-10 flex items-center">
                Try our AI Solutions
                <ArrowRight className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-2 group-hover:scale-110" />
              </div>
            </Link>
            <Link
              to="/solutions/enterprise-ai-stack"
              className="border-2 border-white hover:bg-white hover:text-deepvox-black text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:-translate-y-2 hover:shadow-xl group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="relative z-10 transition-colors duration-300">
                Explore the Framework
              </span>
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 text-center animate-fade-in opacity-0" style={{ animationDelay: '1.2s', animationFillMode: 'forwards' }}>
            <p className="text-gray-400 text-sm mb-4">Trusted by leading organizations worldwide</p>
            <div className="flex justify-center items-center space-x-8 opacity-60 hover:opacity-80 transition-opacity duration-300">
              <div className="text-2xl font-bold hover:text-deepvox-accent transition-colors duration-300 hover:scale-110 transform cursor-default">Fortune 500</div>
              <div className="w-px h-8 bg-gray-600"></div>
              <div className="text-2xl font-bold hover:text-deepvox-blue transition-colors duration-300 hover:scale-110 transform cursor-default">Healthcare</div>
              <div className="w-px h-8 bg-gray-600"></div>
              <div className="text-2xl font-bold hover:text-deepvox-accent transition-colors duration-300 hover:scale-110 transform cursor-default">Financial</div>
              <div className="w-px h-8 bg-gray-600"></div>
              <div className="text-2xl font-bold hover:text-deepvox-blue transition-colors duration-300 hover:scale-110 transform cursor-default">Government</div>
            </div>
          </div>
        </div>
      </div>

      {/* Video Controls (Optional - can be removed for cleaner look) */}
      <div className="absolute bottom-4 right-4 z-20">
        <button
          onClick={(e) => {
            const video = document.querySelector('video');
            if (video) {
              if (video.paused) {
                video.play();
                e.currentTarget.innerHTML = '⏸️';
              } else {
                video.pause();
                e.currentTarget.innerHTML = '▶️';
              }
            }
          }}
          className="bg-black bg-opacity-50 hover:bg-opacity-70 text-white p-2 rounded-full transition-all duration-300 text-sm backdrop-blur-sm"
          aria-label="Toggle video playback"
        >
          ⏸️
        </button>
      </div>
    </section>
  );
};

export default HeroSection;