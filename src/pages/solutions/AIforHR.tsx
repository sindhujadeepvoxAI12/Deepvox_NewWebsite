import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, Brain, Shield, BarChart3, Clock, CheckCircle, TrendingUp, Zap, Target, FileText, MessageSquare, Calendar, Award, Building, Heart, DollarSign, Star, Eye, Settings } from 'lucide-react';

const AIforHR: React.FC = () => {
  const hrFeatures = [
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Intelligent Recruitment',
      description: 'AI-powered candidate screening, skill matching, and automated interview scheduling.',
      benefits: ['Reduced Time-to-Hire', 'Improved Candidate Quality', 'Bias-Free Screening', 'Automated Scheduling']
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: 'Employee Analytics',
      description: 'Comprehensive workforce analytics for retention, performance, and engagement insights.',
      benefits: ['Predictive Analytics', 'Performance Tracking', 'Engagement Monitoring', 'Retention Insights']
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: 'HR Process Automation',
      description: 'Automated onboarding, offboarding, and routine HR tasks for improved efficiency.',
      benefits: ['Streamlined Onboarding', 'Automated Compliance', 'Reduced Manual Work', 'Error Prevention']
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Compliance Management',
      description: 'Automated compliance monitoring for labor laws, data privacy, and regulatory requirements.',
      benefits: ['Real-time Monitoring', 'Automated Reporting', 'Risk Assessment', 'Audit Trail']
    }
  ];

  const hrMetrics = [
    { number: '60%', label: 'Faster Hiring', icon: <Clock className="w-8 h-8" /> },
    { number: '40%', label: 'Cost Reduction', icon: <DollarSign className="w-8 h-8" /> },
    { number: '85%', label: 'Compliance Rate', icon: <Shield className="w-8 h-8" /> },
    { number: '95%', label: 'Employee Satisfaction', icon: <Heart className="w-8 h-8" /> }
  ];

  const useCases = [
    {
      title: 'Recruitment & Talent Acquisition',
      description: 'Streamline the entire recruitment process from job posting to candidate onboarding.',
      features: ['AI-powered job matching', 'Automated candidate screening', 'Interview scheduling automation', 'Skills assessment tools']
    },
    {
      title: 'Performance Management',
      description: 'Continuous performance monitoring and development planning with AI insights.',
      features: ['Real-time performance tracking', 'Goal setting and monitoring', 'Development planning', 'Feedback automation']
    },
    {
      title: 'Employee Engagement',
      description: 'Monitor and improve employee satisfaction, retention, and workplace culture.',
      features: ['Engagement surveys', 'Sentiment analysis', 'Retention prediction', 'Culture analytics']
    },
    {
      title: 'Compliance & Reporting',
      description: 'Automated compliance monitoring and regulatory reporting for HR operations.',
      features: ['Labor law compliance', 'Data privacy protection', 'Automated reporting', 'Audit trail management']
    }
  ];

  const complianceStandards = [
    { name: 'GDPR', description: 'Data protection and privacy compliance' },
    { name: 'SOC2', description: 'Security and availability controls' },
    { name: 'ISO 27001', description: 'Information security management' },
    { name: 'EEOC', description: 'Equal employment opportunity compliance' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-deepvox-blue to-deepvox-accent text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center px-4 py-2 bg-white bg-opacity-20 rounded-full text-sm font-medium mb-6">
                <Brain className="w-4 h-4 mr-2" />
                AI-Powered HR Solutions
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6">
                Transform Your HR Operations
              </h1>
              <p className="text-xl text-blue-100 mb-8">
                Revolutionize your human resources with AI-powered recruitment, employee analytics, 
                and automated compliance management for modern enterprises.
              </p>
              <Link
                to="/contact"
                className="bg-white text-deepvox-blue px-8 py-4 rounded-lg font-semibold inline-flex items-center transition-all duration-300 hover:bg-gray-100 hover:scale-105"
              >
                Try out HR AI
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
            <div className="hidden lg:block">
              <div className="bg-white bg-opacity-10 rounded-2xl p-8 backdrop-blur-sm">
                <div className="grid grid-cols-2 gap-6">
                  {hrMetrics.slice(0, 4).map((metric, index) => (
                    <div key={index} className="text-center">
                      <div className="w-16 h-16 bg-white bg-opacity-20 rounded-xl flex items-center justify-center mx-auto mb-3">
                        {metric.icon}
                      </div>
                      <div className="text-2xl font-bold mb-1">{metric.number}</div>
                      <div className="text-sm text-blue-200">{metric.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-deepvox-black mb-4">
              AI-Powered HR Capabilities
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive HR solutions that leverage artificial intelligence to streamline 
              recruitment, enhance employee experience, and ensure compliance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {hrFeatures.map((feature, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-xl p-8 hover:bg-white hover:shadow-lg transition-all duration-300 border border-gray-200"
              >
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-deepvox-blue bg-opacity-10 rounded-lg flex items-center justify-center mr-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-deepvox-black">
                    {feature.title}
                  </h3>
                </div>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {feature.description}
                </p>

                <div className="grid grid-cols-2 gap-3">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <div key={benefitIndex} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-deepvox-accent mr-2 flex-shrink-0" />
                      {benefit}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Performance Metrics */}
      <section className="py-20 bg-gradient-to-r from-deepvox-blue to-deepvox-accent text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              HR AI Performance Metrics
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Real metrics from successful HR AI implementations across industries.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {hrMetrics.map((metric, index) => (
              <div key={index} className="text-center hover:scale-110 transition-transform duration-500 group">
                <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  {metric.icon}
                </div>
                <div className="text-4xl font-bold mb-2">{metric.number}</div>
                <div className="text-blue-100 group-hover:text-white transition-colors duration-300">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-deepvox-black mb-4">
              HR AI Use Cases
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover how AI is transforming every aspect of human resources management.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center mb-6">
                  <div className="w-10 h-10 bg-deepvox-accent bg-opacity-10 rounded-lg flex items-center justify-center mr-4">
                    <Star className="w-5 h-5 text-deepvox-accent" />
                  </div>
                  <h3 className="text-2xl font-bold text-deepvox-black">
                    {useCase.title}
                  </h3>
                </div>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {useCase.description}
                </p>

                <div className="space-y-3">
                  {useCase.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <div className="w-2 h-2 bg-deepvox-blue rounded-full mr-3 flex-shrink-0"></div>
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance & Security */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-deepvox-black mb-4">
              Enterprise-Grade Security & Compliance
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Built with enterprise security standards and compliance frameworks for HR data protection.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {complianceStandards.map((standard, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-xl p-6 text-center shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
              >
                <div className="w-12 h-12 bg-deepvox-blue bg-opacity-10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-6 h-6 text-deepvox-blue" />
                </div>
                <h3 className="text-lg font-bold text-deepvox-black mb-2">
                  {standard.name}
                </h3>
                <p className="text-sm text-gray-600">
                  {standard.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-deepvox-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Ready to Transform Your HR Operations?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Join leading organizations that have revolutionized their HR processes 
            with AI-powered solutions from DeepVox.ai.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-deepvox-blue hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200"
            >
              Try out HR AI
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIforHR; 