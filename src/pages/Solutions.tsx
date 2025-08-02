import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Brain, Shield, MessageSquare, BarChart3, Cog, Users, Building, Heart, DollarSign, Factory, Scale, Home, Car, FileText, ShoppingCart, Truck, GraduationCap, Briefcase, Globe, Database } from 'lucide-react';

const Solutions: React.FC = () => {
  const enterpriseSolutions = [
    {
      icon: <MessageSquare className="w-8 h-8 text-deepvox-accent" />,
      title: 'EchoLeads.ai Agents',
      description: 'Pay-per-usage AI agents for lead generation, customer engagement, and sales automation with flexible pricing.',
      href: '/solutions/echoleads-agents',
      features: ['Pay-per-Usage Model', 'Lead Generation', 'Sales Automation', 'Customer Engagement'],
      hasPage: true
    },
    {
      icon: <Brain className="w-8 h-8 text-deepvox-blue" />,
      title: 'Enterprise AI Stack™',
      description: 'Complete 5-layer framework for systematic AI implementation with enterprise-grade security and scalability.',
      href: '/solutions/enterprise-ai-stack',
      features: ['Multi-layer Architecture', 'Privacy-First Design', 'Enterprise Scale', 'Complete Framework'],
      hasPage: true
    },
    {
      icon: <MessageSquare className="w-8 h-8 text-deepvox-accent" />,
      title: 'Voice & Conversational AI',
      description: 'Natural language processing with multi-language support and real-time conversation capabilities.',
      href: '/solutions/voice-ai',
      features: ['Natural Language Processing', 'Multi-Language Support', 'Real-time Processing', 'Custom Training'],
      hasPage: true
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-deepvox-blue" />,
      title: 'Data Analytics & Intelligence',
      description: 'Advanced analytics platform with predictive modeling and business intelligence capabilities.',
      href: '/solutions/analytics',
      features: ['Predictive Analytics', 'Real-time Insights', 'Custom Dashboards', 'ML Models'],
      hasPage: false
    },
    {
      icon: <Cog className="w-8 h-8 text-deepvox-accent" />,
      title: 'Process Automation',
      description: 'Intelligent workflow automation that reduces manual effort and improves operational efficiency.',
      href: '/solutions/automation',
      features: ['Workflow Automation', 'Smart Routing', 'Error Reduction', 'Integration Ready'],
      hasPage: false
    },
    {
      icon: <Building className="w-8 h-8 text-deepvox-blue" />,
      title: 'Digital Twin Platform',
      description: 'Create intelligent digital replicas of physical assets, processes, and systems for predictive analytics and optimization.',
      href: '/solutions/digital-twin',
      features: ['Real-time Simulation', 'Predictive Analytics', 'IoT Integration', 'Performance Optimization'],
      hasPage: true
    },
    {
      icon: <Users className="w-8 h-8 text-purple-500" />,
      title: 'AI for HR',
      description: 'AI-powered recruitment, employee analytics, and HR process automation for modern enterprises.',
      href: '/solutions/ai-for-hr',
      features: ['Intelligent Recruitment', 'Employee Analytics', 'HR Automation', 'Compliance Management'],
      hasPage: true
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-blue-500" />,
      title: 'AI for Sales Analytics',
      description: 'Predictive sales forecasting, lead scoring, and customer insights for revenue optimization.',
      href: '/solutions/ai-for-sales-analytics',
      features: ['Sales Forecasting', 'Lead Scoring', 'Customer Analytics', 'Revenue Optimization'],
      hasPage: true
    },
    {
      icon: <Database className="w-8 h-8 text-green-500" />,
      title: 'AI for Database Analytics',
      description: 'Intelligent database insights, performance optimization, and predictive analytics for data-driven decisions.',
      href: '/solutions/ai-for-database-analytics',
      features: ['Data Insights', 'Performance Optimization', 'Predictive Analytics', 'Security Monitoring'],
      hasPage: true
    }
  ];

  const functionalSolutions = [
    {
      icon: <FileText className="w-8 h-8 text-deepvox-blue" />,
      title: 'Document Intelligence',
      description: 'AI-powered document processing, extraction, and automated workflows for enterprise document management.',
      href: '/solutions/document-ai',
      features: ['OCR Technology', 'Data Extraction', 'Workflow Integration', 'Multi-format Support'],
      hasPage: false
    },
    {
      icon: <ShoppingCart className="w-8 h-8 text-deepvox-accent" />,
      title: 'Customer Intelligence',
      description: 'Advanced customer analytics, personalization, and engagement optimization for improved customer experience.',
      href: '/solutions/customer-intelligence',
      features: ['Customer Segmentation', 'Personalization Engine', 'Churn Prediction', 'Lifetime Value Analysis'],
      hasPage: false
    },
    {
      icon: <Truck className="w-8 h-8 text-deepvox-blue" />,
      title: 'Supply Chain Optimization',
      description: 'AI-driven supply chain management with demand forecasting, inventory optimization, and logistics planning.',
      href: '/solutions/supply-chain',
      features: ['Demand Forecasting', 'Inventory Optimization', 'Route Planning', 'Supplier Analytics'],
      hasPage: false
    },
    {
      icon: <Globe className="w-8 h-8 text-deepvox-accent" />,
      title: 'Compliance & Risk Management',
      description: 'Automated compliance monitoring, risk assessment, and regulatory reporting across industries.',
      href: '/solutions/compliance-risk',
      features: ['Regulatory Monitoring', 'Risk Assessment', 'Automated Reporting', 'Audit Trail Management'],
      hasPage: false
    }
  ];

  const industrySolutions = [
    {
      icon: <Heart className="w-8 h-8 text-red-500" />,
      title: 'Healthcare AI',
      description: 'HIPAA-compliant solutions for patient data, diagnostics, and population health analytics.',
      href: '/solutions/healthcare',
      compliance: ['HIPAA', 'HITECH', 'FDA'],
      keyFeatures: ['EMR Integration', 'Clinical Decision Support', 'Patient Analytics'],
      hasPage: true
    },
    {
      icon: <DollarSign className="w-8 h-8 text-green-500" />,
      title: 'Financial Services',
      description: 'SOC2 and PCI-DSS compliant AI for fraud detection, risk modeling, and compliance.',
      href: '/solutions/financial-services',
      compliance: ['SOC2', 'PCI-DSS', 'GDPR'],
      keyFeatures: ['Fraud Detection', 'Risk Analytics', 'Compliance Automation'],
      hasPage: true
    },
    {
      icon: <Factory className="w-8 h-8 text-blue-500" />,
      title: 'Manufacturing',
      description: 'Predictive maintenance, quality control, and supply chain optimization solutions.',
      href: '/solutions/manufacturing',
      compliance: ['ISO 27001', 'SOC2'],
      keyFeatures: ['Predictive Maintenance', 'Quality Control', 'Supply Chain'],
      hasPage: false
    },
    {
      icon: <Scale className="w-8 h-8 text-purple-500" />,
      title: 'Legal & Government',
      description: 'Document processing, compliance automation, and regulatory reporting solutions.',
      href: '/solutions/legal-government',
      compliance: ['FedRAMP', 'FISMA', 'SOC2'],
      keyFeatures: ['Document Processing', 'Compliance Automation', 'Regulatory Reporting'],
      hasPage: false
    },
    {
      icon: <Home className="w-8 h-8 text-orange-500" />,
      title: 'Real Estate',
      description: 'Property valuation, market analysis, and customer relationship management AI.',
      href: '/solutions/real-estate',
      compliance: ['SOC2', 'GDPR'],
      keyFeatures: ['Property Valuation', 'Market Analysis', 'Lead Management'],
      hasPage: false
    },
    {
      icon: <Car className="w-8 h-8 text-indigo-500" />,
      title: 'Insurance',
      description: 'Claims processing, risk assessment, and fraud detection for insurance companies.',
      href: '/solutions/insurance',
      compliance: ['SOC2', 'ISO 27001'],
      keyFeatures: ['Claims Processing', 'Risk Assessment', 'Fraud Detection'],
      hasPage: false
    },
    {
      icon: <ShoppingCart className="w-8 h-8 text-green-500" />,
      title: 'Retail & E-commerce',
      description: 'Customer analytics, inventory optimization, and personalized shopping experiences for retail.',
      href: '/solutions/retail',
      compliance: ['SOC2', 'GDPR', 'PCI-DSS'],
      keyFeatures: ['Customer Analytics', 'Inventory Optimization', 'Personalization'],
      hasPage: false
    },
    {
      icon: <GraduationCap className="w-8 h-8 text-blue-500" />,
      title: 'Education',
      description: 'Personalized learning, student analytics, and administrative automation for educational institutions.',
      href: '/solutions/education',
      compliance: ['FERPA', 'SOC2', 'GDPR'],
      keyFeatures: ['Personalized Learning', 'Student Analytics', 'Administrative Automation'],
      hasPage: false
    },
    {
      icon: <Briefcase className="w-8 h-8 text-indigo-500" />,
      title: 'Professional Services',
      description: 'Project management, resource optimization, and client intelligence for consulting and services firms.',
      href: '/solutions/professional-services',
      compliance: ['SOC2', 'GDPR'],
      keyFeatures: ['Project Analytics', 'Resource Optimization', 'Client Intelligence'],
      hasPage: false
    },
    {
      icon: <Users className="w-8 h-8 text-purple-500" />,
      title: 'AI for HR',
      description: 'AI-powered recruitment, employee analytics, and HR process automation for modern enterprises.',
      href: '/solutions/ai-for-hr',
      compliance: ['GDPR', 'SOC2', 'EEOC'],
      keyFeatures: ['Intelligent Recruitment', 'Employee Analytics', 'HR Automation', 'Compliance Management'],
      hasPage: true
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-blue-500" />,
      title: 'AI for Sales Analytics',
      description: 'Predictive sales forecasting, lead scoring, and customer insights for revenue optimization.',
      href: '/solutions/ai-for-sales-analytics',
      compliance: ['SOC2', 'GDPR'],
      keyFeatures: ['Sales Forecasting', 'Lead Scoring', 'Customer Analytics', 'Revenue Optimization'],
      hasPage: true
    },
    {
      icon: <Database className="w-8 h-8 text-green-500" />,
      title: 'AI for Database Analytics',
      description: 'Intelligent database insights, performance optimization, and predictive analytics for data-driven decisions.',
      href: '/solutions/ai-for-database-analytics',
      compliance: ['SOC2', 'ISO 27001', 'GDPR'],
      keyFeatures: ['Data Insights', 'Performance Optimization', 'Predictive Analytics', 'Security Monitoring'],
      hasPage: true
    }
  ];

  const useCasesByIndustry = [
    {
      industry: 'Healthcare',
      icon: <Heart className="w-6 h-6 text-red-500" />,
      useCases: [
        'Clinical Decision Support Systems',
        'Medical Image Analysis & Radiology',
        'Drug Discovery & Development',
        'Patient Risk Stratification',
        'Electronic Health Record Optimization',
        'Telemedicine & Remote Monitoring',
        'Healthcare Fraud Detection',
        'Population Health Management'
      ]
    },
    {
      industry: 'Financial Services',
      icon: <DollarSign className="w-6 h-6 text-green-500" />,
      useCases: [
        'Real-time Fraud Detection',
        'Credit Risk Assessment',
        'Algorithmic Trading',
        'Anti-Money Laundering (AML)',
        'Customer Onboarding Automation',
        'Regulatory Compliance Monitoring',
        'Robo-Advisory Services',
        'Insurance Claims Processing'
      ]
    },
    {
      industry: 'Manufacturing',
      icon: <Factory className="w-6 h-6 text-blue-500" />,
      useCases: [
        'Predictive Maintenance',
        'Quality Control & Defect Detection',
        'Supply Chain Optimization',
        'Production Planning & Scheduling',
        'Energy Management',
        'Safety Monitoring',
        'Inventory Management',
        'Equipment Performance Analytics'
      ]
    },
    {
      industry: 'Retail & E-commerce',
      icon: <ShoppingCart className="w-6 h-6 text-purple-500" />,
      useCases: [
        'Personalized Product Recommendations',
        'Dynamic Pricing Optimization',
        'Inventory Demand Forecasting',
        'Customer Churn Prevention',
        'Visual Search & Recognition',
        'Chatbots & Virtual Assistants',
        'Fraud Prevention',
        'Market Basket Analysis'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-deepvox-black to-deepvox-gray text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Comprehensive AI Solutions for Enterprise
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Discover our complete suite of privacy-first AI solutions designed for enterprise-grade 
              implementation across industries and use cases.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <span className="bg-white bg-opacity-10 px-4 py-2 rounded-full">200+ Implementations</span>
              <span className="bg-white bg-opacity-10 px-4 py-2 rounded-full">15+ Industries</span>
              <span className="bg-white bg-opacity-10 px-4 py-2 rounded-full">SOC2 Certified</span>
              <span className="bg-white bg-opacity-10 px-4 py-2 rounded-full">HIPAA Compliant</span>
            </div>
          </div>
        </div>
      </section>

      {/* Enterprise Solutions */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-deepvox-black mb-4">
              Enterprise AI Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive AI platforms and tools designed for enterprise deployment and scale.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {enterpriseSolutions.map((solution, index) => (
              solution.hasPage ? (
                <Link
                  key={index}
                  to={solution.href}
                  className="bg-white rounded-xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group block"
                >
                  <div className="flex items-center mb-6">
                    {solution.icon}
                    <h3 className="text-2xl font-bold text-deepvox-black ml-4">
                      {solution.title}
                    </h3>
                  </div>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {solution.description}
                  </p>

                  <div className="grid grid-cols-2 gap-3 mb-6">
                    {solution.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <div className="w-2 h-2 bg-deepvox-accent rounded-full mr-2"></div>
                        {feature}
                      </div>
                    ))}
                  </div>

                  {index === 0 ? (
                    <div className="space-y-2">
                      <div className="inline-flex items-center text-deepvox-blue font-semibold group-hover:text-deepvox-accent transition-colors duration-200 group-hover:translate-x-1 transform">
                        Learn More on DeepVox
                        <ArrowRight className="w-5 h-5 ml-2" />
                      </div>
                      
                      <div className="inline-flex items-center text-deepvox-accent font-semibold group-hover:text-green-600 transition-colors duration-200 group-hover:translate-x-1 transform mt-2">
                        Visit EchoLeads.ai
                        <ArrowRight className="w-5 h-5 ml-2" />
                      </div>
                    </div>
                  ) : (
                    <div className="inline-flex items-center text-deepvox-blue font-semibold group-hover:text-deepvox-accent transition-colors duration-200 group-hover:translate-x-1 transform">
                      Explore Solution
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </div>
                  )}
                </Link>
              ) : (
                <div
                  key={index}
                  className="bg-white rounded-xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group"
                >
                  <div className="flex items-center mb-6">
                    {solution.icon}
                    <h3 className="text-2xl font-bold text-deepvox-black ml-4">
                      {solution.title}
                    </h3>
                  </div>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {solution.description}
                  </p>

                  <div className="grid grid-cols-2 gap-3 mb-6">
                    {solution.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <div className="w-2 h-2 bg-deepvox-accent rounded-full mr-2"></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              )
            ))}
          </div>
        </div>
      </section>

      {/* Functional Solutions */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-deepvox-black mb-4">
              Functional AI Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Specialized AI capabilities that address specific business functions 
              and operational challenges across industries.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {functionalSolutions.map((solution, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group"
              >
                <div className="flex items-center mb-6">
                  {solution.icon}
                  <h3 className="text-2xl font-bold text-deepvox-black ml-4">
                    {solution.title}
                  </h3>
                </div>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {solution.description}
                </p>

                <div className="grid grid-cols-2 gap-3 mb-6">
                  {solution.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <div className="w-2 h-2 bg-deepvox-accent rounded-full mr-2"></div>
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Solutions */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-deepvox-black mb-4">
              Industry-Specific Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tailored AI solutions that meet the unique compliance, security, and operational 
              requirements of your industry.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industrySolutions.map((solution, index) => (
              solution.hasPage ? (
                <Link
                  key={index}
                  to={solution.href}
                  className="bg-gray-50 rounded-xl p-6 hover:bg-white hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 block"
                >
                  <div className="flex items-center mb-4">
                    {solution.icon}
                    <h3 className="text-xl font-bold text-deepvox-black ml-3">
                      {solution.title}
                    </h3>
                  </div>
                  
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {solution.description}
                  </p>

                  {/* Compliance Badges */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {solution.compliance.map((cert, certIndex) => (
                      <span
                        key={certIndex}
                        className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full font-medium"
                      >
                        {cert}
                      </span>
                    ))}
                  </div>

                  {/* Key Features */}
                  <div className="space-y-2 mb-6">
                    {solution.keyFeatures.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <div className="w-1.5 h-1.5 bg-deepvox-blue rounded-full mr-2"></div>
                        {feature}
                      </div>
                    ))}
                  </div>

                  <div className="inline-flex items-center text-deepvox-blue font-semibold hover:text-deepvox-accent transition-colors duration-200">
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </div>
                </Link>
              ) : (
                <div
                  key={index}
                  className="bg-gray-50 rounded-xl p-6 hover:bg-white hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
                >
                  <div className="flex items-center mb-4">
                    {solution.icon}
                    <h3 className="text-xl font-bold text-deepvox-black ml-3">
                      {solution.title}
                    </h3>
                  </div>
                  
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {solution.description}
                  </p>

                  {/* Compliance Badges */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {solution.compliance.map((cert, certIndex) => (
                      <span
                        key={certIndex}
                        className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full font-medium"
                      >
                        {cert}
                      </span>
                    ))}
                  </div>

                  {/* Key Features */}
                  <div className="space-y-2 mb-6">
                    {solution.keyFeatures.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <div className="w-1.5 h-1.5 bg-deepvox-blue rounded-full mr-2"></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              )
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases by Industry */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-deepvox-black mb-4">
              AI Use Cases by Industry
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore specific AI applications and use cases tailored to your industry's 
              unique challenges and opportunities.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {useCasesByIndustry.map((industry, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center mb-6">
                  {industry.icon}
                  <h3 className="text-2xl font-bold text-deepvox-black ml-3">
                    {industry.industry}
                  </h3>
                </div>
                
                <div className="grid grid-cols-1 gap-3">
                  {industry.useCases.map((useCase, useCaseIndex) => (
                    <div key={useCaseIndex} className="flex items-center text-gray-700">
                      <div className="w-2 h-2 bg-deepvox-blue rounded-full mr-3 flex-shrink-0"></div>
                      <span className="text-sm">{useCase}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


    </div>
  );
};

export default Solutions;