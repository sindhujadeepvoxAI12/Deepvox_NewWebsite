import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, FileText, MessageCircle } from 'lucide-react';

const CtaSection: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-deepvox-blue to-deepvox-accent text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Ready to Transform Your Organization?
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Try our AI Solutions to identify the best solutions for your specific needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Free Assessment */}
          <div className="bg-white bg-opacity-10 rounded-xl p-6 text-center hover:bg-opacity-20 transition-all duration-300 transform hover:scale-105 hover:-translate-y-2 animate-fade-in-up opacity-0 group" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
            {/* Animated Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-white to-blue-200 opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
            
            <FileText className="w-12 h-12 mx-auto mb-4 text-blue-200 transition-transform duration-500 group-hover:scale-125 group-hover:rotate-6 relative z-10" />
            <h3 className="text-lg font-semibold mb-2 relative z-10 transition-colors duration-300 group-hover:text-white">Free AI Assessment</h3>
            <p className="text-blue-100 text-sm mb-4 transition-colors duration-300 group-hover:text-white relative z-10">
              Comprehensive evaluation of your AI readiness and transformation potential
            </p>
            <Link
              to="/resources/ai-assessment"
              className="text-white font-medium hover:text-blue-200 transition-all duration-300 inline-flex items-center group-hover:translate-x-2 transform relative z-10"
            >
              Start Assessment 
              <span className="ml-1 transition-transform duration-300 group-hover:translate-x-2 group-hover:scale-110">→</span>
            </Link>
          </div>

          {/* Consultation */}
          <div className="bg-white bg-opacity-10 rounded-xl p-6 text-center hover:bg-opacity-20 transition-all duration-300 transform hover:scale-105 hover:-translate-y-2 animate-fade-in-up opacity-0 group" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
            {/* Animated Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-white to-blue-200 opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
            
            <MessageCircle className="w-12 h-12 mx-auto mb-4 text-blue-200 transition-transform duration-500 group-hover:scale-125 group-hover:rotate-6 relative z-10" />
            <h3 className="text-lg font-semibold mb-2 relative z-10 transition-colors duration-300 group-hover:text-white">Expert Consultation</h3>
            <p className="text-blue-100 text-sm mb-4 transition-colors duration-300 group-hover:text-white relative z-10">
              Speak with our AI specialists about your specific use case and requirements
            </p>
            <Link
              to="/contact/consultation"
              className="text-white font-medium hover:text-blue-200 transition-all duration-300 inline-flex items-center group-hover:translate-x-2 transform relative z-10"
            >
              Get Consultation 
              <span className="ml-1 transition-transform duration-300 group-hover:translate-x-2 group-hover:scale-110">→</span>
            </Link>
          </div>
        </div>

        <div className="text-center animate-fade-in-up opacity-0" style={{ animationDelay: '0.8s', animationFillMode: 'forwards' }}>
          <Link
            to="/contact"
            className="bg-white text-deepvox-blue px-8 py-4 rounded-lg font-semibold inline-flex items-center hover:bg-gray-100 transition-all duration-500 transform hover:scale-110 hover:-translate-y-2 shadow-lg hover:shadow-2xl group relative overflow-hidden"
          >
            {/* Shimmer Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-deepvox-blue to-transparent opacity-0 group-hover:opacity-20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-all duration-700"></div>
            <span className="relative z-10">
            Try our AI Solutions
            </span>
            <ArrowRight className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-2 group-hover:scale-110 relative z-10" />
          </Link>
          <p className="text-blue-100 text-sm mt-4 transition-colors duration-300 hover:text-white animate-fade-in opacity-0" style={{ animationDelay: '1s', animationFillMode: 'forwards' }}>
            No commitment required • 30-minute assessment • Custom recommendations
          </p>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;