import React, { useEffect, useRef, useState } from 'react';
import { TrendingUp, Users, Shield, Zap } from 'lucide-react';

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

const StatsSection: React.FC = () => {
  const stats = [
    {
      icon: <Zap className="w-8 h-8 text-deepvox-accent" />,
      number: '3x',
      label: 'Faster Adoption',
      description: 'Compared to traditional AI implementation approaches'
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-deepvox-blue" />,
      number: '50%',
      label: 'Cost Reduction',
      description: 'Average savings on AI infrastructure and deployment'
    },
    {
      icon: <Shield className="w-8 h-8 text-deepvox-accent" />,
      number: '99.9%',
      label: 'Security Compliance',
      description: 'Maintained across all implementations and audits'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-deepvox-black mb-4">
            Proven Results Across Industries
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our Enterprise AI Stack™ has delivered measurable impact for organizations 
            worldwide, from Fortune 500 companies to innovative startups.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 text-center shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 animate-fade-in-up opacity-0 hover:scale-110 group relative overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s`, animationFillMode: 'forwards' }}
            >
              {/* Animated Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-deepvox-blue to-deepvox-accent opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>
              
              <div className="flex justify-center mb-4">
                <div className="transition-transform duration-500 group-hover:scale-125 group-hover:rotate-12 relative z-10">
                  {stat.icon}
                </div>
              </div>
              <div className="text-4xl lg:text-5xl font-bold text-deepvox-black mb-2 transition-colors duration-300 group-hover:text-deepvox-blue relative z-10">
                <AnimatedCounter end={stat.number} delay={index * 100} />
              </div>
              <div className="text-lg font-semibold text-deepvox-black mb-2 transition-colors duration-300 group-hover:text-deepvox-blue relative z-10">
                {stat.label}
              </div>
              <p className="text-gray-600 text-sm leading-relaxed relative z-10 transition-colors duration-300 group-hover:text-gray-700">
                {stat.description}
              </p>
            </div>
          ))}
        </div>

        {/* Additional Metrics */}
        <div className="mt-16 bg-gradient-to-r from-deepvox-blue to-deepvox-accent rounded-2xl p-8 text-white animate-fade-in-up opacity-0 hover:shadow-2xl transition-all duration-500 group relative overflow-hidden" style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}>
          {/* Animated Background Pattern */}
          <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity duration-500">
            <div className="absolute top-0 left-0 w-32 h-32 bg-white rounded-full -translate-x-16 -translate-y-16 group-hover:scale-150 transition-transform duration-1000"></div>
            <div className="absolute bottom-0 right-0 w-24 h-24 bg-white rounded-full translate-x-12 translate-y-12 group-hover:scale-150 transition-transform duration-1000"></div>
          </div>
          
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4 relative z-10">Industry-Leading Performance</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
              <div className="hover:scale-110 transition-transform duration-500 group/item">
                <div className="text-3xl font-bold mb-2">
                  <AnimatedCounter end="24/7" delay={800} />
                </div>
                <div className="text-blue-100 group-hover/item:text-white transition-colors duration-300">Enterprise Support</div>
              </div>
              <div className="hover:scale-110 transition-transform duration-500 group/item" style={{ animationDelay: '0.1s' }}>
                <div className="text-3xl font-bold mb-2">
                  <AnimatedCounter end="15+" delay={900} />
                </div>
                <div className="text-blue-100 group-hover/item:text-white transition-colors duration-300">Industry Verticals</div>
              </div>
              <div className="hover:scale-110 transition-transform duration-500 group/item" style={{ animationDelay: '0.2s' }}>
                <div className="text-3xl font-bold mb-2">
                  <AnimatedCounter end="5" delay={1000} />
                </div>
                <div className="text-blue-100 group-hover/item:text-white transition-colors duration-300">Layer Architecture</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;