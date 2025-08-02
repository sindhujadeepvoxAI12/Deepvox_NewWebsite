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

const About: React.FC = () => {



  const values = [
    {
      icon: <Target className="w-8 h-8 text-deepvox-blue" />,
      title: 'Privacy First',
      description: 'We believe privacy is a fundamental right, not a feature. Every solution we build puts data protection at its core.'
    },
    {
      icon: <Users className="w-8 h-8 text-deepvox-accent" />,
      title: 'Enterprise Focus',
      description: 'We understand enterprise needs and build solutions that meet the highest standards for security, compliance, and scale.'
    },
    {
      icon: <Lightbulb className="w-8 h-8 text-deepvox-blue" />,
      title: 'Innovation',
      description: 'We push the boundaries of what\'s possible with AI while maintaining practical, deployable solutions.'
    },
    {
      icon: <Award className="w-8 h-8 text-deepvox-accent" />,
      title: 'Excellence',
      description: 'We maintain the highest standards in everything we do, from code quality to customer service.'
    }
  ];

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

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-deepvox-black mb-6">
                Our Mission
              </h2>
              <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                To democratize enterprise AI by providing privacy-first solutions that enable 
                organizations to harness the power of artificial intelligence without 
                compromising data security or regulatory compliance.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                We believe that every organization, regardless of size or industry, should have 
                access to enterprise-grade AI capabilities that respect privacy, ensure security, 
                and deliver measurable business value.
              </p>
            </div>
            <div className="bg-gradient-to-br from-deepvox-blue to-deepvox-accent rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Our Vision</h3>
              <p className="text-lg text-blue-100 leading-relaxed">
                A world where AI enhances human capabilities while preserving privacy and dignity. 
                We envision enterprises confidently adopting AI technologies knowing their data 
                remains secure and their operations remain compliant.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-deepvox-black mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These principles guide every decision we make and every solution we build.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-xl hover:shadow-lg transition-all duration-300"
              >
                <div className="flex justify-center mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-deepvox-black mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
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

      {/* Join Us CTA */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-deepvox-black mb-4">
            Join Our Mission
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Whether you're looking to transform your organization with AI or join our team, 
            we'd love to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-deepvox-blue hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200"
            >
              Partner with Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;