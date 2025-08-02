import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Users, Target, Lightbulb, Award, ArrowRight, MapPin, Calendar, TrendingUp } from 'lucide-react';

const AnimatedCounter: React.FC<{ end: string; duration?: number; delay?: number }> = ({ 
  end, 
  duration = 2000, 
  delay = 0 
}) => {
  const [count, setCount] = useState('0');
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const timer = setTimeout(() => {
      // Extract number from string like "200+" or "3x" or "50%"
      const numMatch = end.match(/\d+/);
      if (!numMatch) {
        setCount(end);
        return;
      }

      const targetNum = parseInt(numMatch[0]);
      const suffix = end.replace(numMatch[0], '');
      const increment = targetNum / (duration / 50);
      let current = 0;

      const counter = setInterval(() => {
        current += increment;
        if (current >= targetNum) {
          setCount(targetNum + suffix);
          clearInterval(counter);
        } else {
          setCount(Math.floor(current) + suffix);
        }
      }, 50);

      return () => clearInterval(counter);
    }, delay);

    return () => clearTimeout(timer);
  }, [isVisible, end, duration, delay]);

  return <div ref={ref}>{count}</div>;
};

const Company: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-deepvox-black to-deepvox-gray text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              About DeepVox.ai
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              We're on a mission to democratize enterprise AI while maintaining the highest 
              standards of privacy, security, and compliance.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <span className="bg-white bg-opacity-10 px-4 py-2 rounded-full">Founded 2022</span>
              <span className="bg-white bg-opacity-10 px-4 py-2 rounded-full">200+ Implementations</span>
              <span className="bg-white bg-opacity-10 px-4 py-2 rounded-full">15+ Industries</span>
              <span className="bg-white bg-opacity-10 px-4 py-2 rounded-full">San Francisco HQ</span>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link
              to="/company/about"
              className="bg-white rounded-xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group"
            >
              <div className="flex items-center mb-4">
                <Users className="w-8 h-8 text-deepvox-blue mr-4" />
                <h3 className="text-2xl font-bold text-deepvox-black">About Us</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Learn about our mission, values, and the team behind DeepVox.ai's privacy-first AI solutions.
              </p>
              <div className="inline-flex items-center text-deepvox-blue font-semibold group-hover:translate-x-1 transform transition-transform">
                Learn More
                <ArrowRight className="w-5 h-5 ml-2" />
              </div>
            </Link>

            <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="flex items-center mb-4">
                <Lightbulb className="w-8 h-8 text-deepvox-accent mr-4" />
                <h3 className="text-2xl font-bold text-deepvox-black">Research</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Discover our cutting-edge research in privacy-preserving AI and enterprise transformation.
              </p>
              <div className="inline-flex items-center text-deepvox-blue font-semibold">
                Coming Soon
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="flex items-center mb-4">
                <Award className="w-8 h-8 text-deepvox-blue mr-4" />
                <h3 className="text-2xl font-bold text-deepvox-black">Careers</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Join our team and help shape the future of privacy-first enterprise AI solutions.
              </p>
              <div className="inline-flex items-center text-deepvox-blue font-semibold">
                Coming Soon
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industry-Leading Performance */}
      <section className="py-20 bg-gradient-to-r from-deepvox-blue to-deepvox-accent text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Industry-Leading Performance
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center hover:scale-110 transition-transform duration-500 group/item">
              <div className="text-4xl font-bold mb-2">
                <AnimatedCounter end="24/7" delay={800} />
              </div>
              <div className="text-blue-100 group-hover/item:text-white transition-colors duration-300">Enterprise Support</div>
            </div>
            <div className="text-center hover:scale-110 transition-transform duration-500 group/item">
              <div className="text-4xl font-bold mb-2">
                <AnimatedCounter end="15+" delay={900} />
              </div>
              <div className="text-blue-100 group-hover/item:text-white transition-colors duration-300">Industry Verticals</div>
            </div>
            <div className="text-center hover:scale-110 transition-transform duration-500 group/item">
              <div className="text-4xl font-bold mb-2">
                <AnimatedCounter end="5" delay={1000} />
              </div>
              <div className="text-blue-100 group-hover/item:text-white transition-colors duration-300">Layer Architecture</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-deepvox-black mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Join the 200+ organizations that have successfully implemented our 
            Privacy-First Enterprise AI Stack™.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-deepvox-blue hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200"
            >
              Get Started Today
            </Link>
            <Link
              to="/company/about"
              className="border-2 border-deepvox-blue text-deepvox-blue px-8 py-4 rounded-lg font-semibold hover:bg-deepvox-blue hover:text-white transition-all duration-200"
            >
              Learn More About Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Company;