import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Brain, MessageSquare, BarChart3, Cog, FileText, Building, Users, Database } from 'lucide-react';

const SolutionsPreview: React.FC = () => {
  const solutions = [
    {
      icon: <Brain className="w-8 h-8 text-deepvox-blue" />,
      title: 'Enterprise AI Stack™',
      description: 'Complete 5-layer framework for systematic AI implementation with security, platform, orchestration, insights, and experience layers.',
      href: '/solutions/enterprise-ai-stack',
      features: ['Multi-layer Architecture', 'Privacy-First Design', 'Enterprise Scale']
    },
    {
      icon: <Shield className="w-8 h-8 text-deepvox-accent" />,
      title: 'Healthcare AI',
      description: 'HIPAA-compliant AI solutions for patient data processing, diagnostic assistance, and population health analytics.',
      href: '/solutions/healthcare',
      features: ['HIPAA Compliant', 'EMR Integration', 'Clinical Decision Support']
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-deepvox-blue" />,
      title: 'Financial Services AI',
      description: 'SOC2 and PCI-DSS compliant solutions for fraud detection, risk modeling, and regulatory compliance.',
      href: '/solutions/financial-services',
      features: ['SOC2 Certified', 'Fraud Detection', 'Risk Analytics']
    },
    {
      icon: <Users className="w-8 h-8 text-purple-500" />,
      title: 'AI for HR',
      description: 'AI-powered recruitment, employee analytics, and HR process automation for modern enterprises.',
      href: '/solutions/ai-for-hr',
      features: ['Intelligent Recruitment', 'Employee Analytics', 'HR Automation']
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-blue-500" />,
      title: 'AI for Sales Analytics',
      description: 'Predictive sales forecasting, lead scoring, and customer insights for revenue optimization.',
      href: '/solutions/ai-for-sales-analytics',
      features: ['Sales Forecasting', 'Lead Scoring', 'Revenue Optimization']
    },
    {
      icon: <Database className="w-8 h-8 text-green-500" />,
      title: 'AI for Database Analytics',
      description: 'Intelligent database insights, performance optimization, and predictive analytics for data-driven decisions.',
      href: '/solutions/ai-for-database-analytics',
      features: ['Data Insights', 'Performance Optimization', 'Predictive Analytics']
    },
    {
      icon: <Building className="w-8 h-8 text-deepvox-blue" />,
      title: 'Digital Twin Platform',
      description: 'Create intelligent digital replicas of physical assets and processes for predictive analytics.',
      href: '/solutions/digital-twin',
      features: ['Real-time Simulation', 'Predictive Analytics', 'IoT Integration']
    }
  ];

  const echoLeadsFeature = {
    icon: <MessageSquare className="w-8 h-8 text-deepvox-accent" />,
    title: 'EchoLeads.ai Agents',
    description: 'Pay-per-usage AI agents for lead generation, customer engagement, and sales automation.',
    href: '/solutions/echoleads-agents',
    features: ['Pay-per-Usage Model', 'Lead Generation', 'Sales Automation'],
    isNew: true
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-deepvox-black mb-4">
            Comprehensive AI Solutions for Every Industry
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From healthcare to finance, our privacy-first AI solutions are designed to meet 
            the unique needs of your industry while maintaining the highest security standards.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* EchoLeads Feature - Highlighted */}
          <Link
            to={echoLeadsFeature.href}
            className="bg-gradient-to-br from-deepvox-accent to-green-600 rounded-xl p-8 shadow-lg text-white hover:shadow-xl transition-all duration-500 transform hover:-translate-y-3 group animate-fade-in-up opacity-0 hover:scale-105 relative overflow-hidden cursor-pointer"
            style={{ animationDelay: '0s', animationFillMode: 'forwards' }}
          >
            {/* Animated Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-green-400 to-deepvox-accent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            {/* New Badge */}
            <div className="absolute top-4 right-4 bg-white bg-opacity-20 text-white text-xs px-2 py-1 rounded-full font-bold animate-pulse group-hover:animate-bounce">
              NEW
            </div>
            
            <div className="flex items-center mb-4 relative z-10">
              <div className="transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                {echoLeadsFeature.icon}
              </div>
              <h3 className="text-xl font-bold ml-3">
                {echoLeadsFeature.title}
              </h3>
            </div>
            
            <p className="text-green-100 mb-6 leading-relaxed relative z-10 transition-colors duration-300 group-hover:text-white">
              {echoLeadsFeature.description}
            </p>

            <div className="space-y-2 mb-6 relative z-10">
              {echoLeadsFeature.features.map((feature, featureIndex) => (
                <div key={featureIndex} className="flex items-center text-sm text-green-100 transition-colors duration-300 group-hover:text-white animate-fade-in-up opacity-0" style={{ animationDelay: `${0.2 + featureIndex * 0.1}s`, animationFillMode: 'forwards' }}>
                  <div className="w-1.5 h-1.5 bg-white rounded-full mr-2 group-hover:animate-pulse"></div>
                  {feature}
                </div>
              ))}
            </div>

            <div className="inline-flex items-center text-white font-semibold hover:text-green-100 transition-all duration-300 group-hover:translate-x-2 transform relative z-10">
              Learn More
              <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-2 group-hover:scale-110" />
            </div>
          </Link>

          {solutions.map((solution, index) => (
            <Link
              key={index}
              to={solution.href}
              className="bg-white rounded-xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-500 transform hover:-translate-y-3 group animate-fade-in-up opacity-0 hover:scale-105 relative overflow-hidden cursor-pointer"
              style={{ animationDelay: `${(index + 1) * 0.1}s`, animationFillMode: 'forwards' }}
            >
              {/* Hover Background Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-deepvox-blue to-deepvox-accent opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>
              
              <div className="flex items-center mb-4">
                <div className="transition-transform duration-500 group-hover:scale-125 group-hover:rotate-6 relative z-10">
                  {solution.icon}
                </div>
                <h3 className="text-xl font-bold text-deepvox-black ml-3 relative z-10 transition-colors duration-300 group-hover:text-deepvox-blue">
                  {solution.title}
                </h3>
              </div>
              
              <p className="text-gray-600 mb-6 leading-relaxed relative z-10 transition-colors duration-300 group-hover:text-gray-700">
                {solution.description}
              </p>

              <div className="space-y-2 mb-6 relative z-10">
                {solution.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center text-sm text-gray-500 transition-colors duration-300 group-hover:text-gray-700 transform group-hover:translate-x-1">
                    <div className="w-1.5 h-1.5 bg-deepvox-accent rounded-full mr-2 group-hover:animate-pulse group-hover:scale-125 transition-transform duration-300"></div>
                    {feature}
                  </div>
                ))}
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/solutions"
            className="bg-deepvox-blue hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold inline-flex items-center transition-all duration-300 transform hover:scale-105 hover:-translate-y-2 hover:shadow-2xl group animate-fade-in-up opacity-0 relative overflow-hidden"
            style={{ animationDelay: '0.8s', animationFillMode: 'forwards' }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-all duration-700"></div>
            <span className="relative z-10">
            View All Solutions
            </span>
            <ArrowRight className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-2 group-hover:scale-110 relative z-10" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SolutionsPreview;