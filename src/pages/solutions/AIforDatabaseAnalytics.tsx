import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Database, Brain, Shield, BarChart3, Zap, CheckCircle, TrendingUp, Users, MessageSquare, Calendar, Award, Building, Heart, Eye, Settings, Cpu, Server, Network, HardDrive } from 'lucide-react';

const AIforDatabaseAnalytics: React.FC = () => {
  const databaseFeatures = [
    {
      icon: <Database className="w-8 h-8" />,
      title: 'Intelligent Data Insights',
      description: 'AI-powered database analytics for uncovering hidden patterns and actionable insights.',
      benefits: ['Pattern Recognition', 'Anomaly Detection', 'Trend Analysis', 'Predictive Insights']
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Performance Optimization',
      description: 'Automated database performance tuning and optimization for maximum efficiency.',
      benefits: ['Query Optimization', 'Index Management', 'Resource Allocation', 'Performance Monitoring']
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: 'Predictive Analytics',
      description: 'Machine learning models for forecasting database trends and capacity planning.',
      benefits: ['Capacity Planning', 'Growth Forecasting', 'Usage Prediction', 'Resource Planning']
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Security & Compliance',
      description: 'Advanced database security monitoring and compliance management with AI.',
      benefits: ['Threat Detection', 'Access Monitoring', 'Compliance Reporting', 'Data Protection']
    }
  ];

  const databaseMetrics = [
    { number: '80%', label: 'Performance Improvement', icon: <Zap className="w-8 h-8" /> },
    { number: '95%', label: 'Query Accuracy', icon: <Database className="w-8 h-8" /> },
    { number: '99.9%', label: 'Uptime', icon: <TrendingUp className="w-8 h-8" /> },
    { number: '60%', label: 'Cost Reduction', icon: <Award className="w-8 h-8" /> }
  ];

  const useCases = [
    {
      title: 'Database Performance Monitoring',
      description: 'Real-time monitoring and optimization of database performance across all systems.',
      features: ['Query performance analysis', 'Resource utilization tracking', 'Bottleneck identification', 'Automated optimization']
    },
    {
      title: 'Data Quality Management',
      description: 'AI-driven data quality assessment and improvement for reliable analytics.',
      features: ['Data validation', 'Duplicate detection', 'Quality scoring', 'Automated cleansing']
    },
    {
      title: 'Predictive Maintenance',
      description: 'Forecast database issues and plan maintenance to prevent downtime.',
      features: ['Failure prediction', 'Capacity planning', 'Maintenance scheduling', 'Risk assessment']
    },
    {
      title: 'Business Intelligence',
      description: 'Transform raw database data into actionable business insights and reports.',
      features: ['Custom dashboards', 'KPI tracking', 'Trend analysis', 'Automated reporting']
    }
  ];

  const analyticsCapabilities = [
    { name: 'Real-time Monitoring', description: 'Live database performance and health tracking' },
    { name: 'Predictive Modeling', description: 'ML-based forecasting and trend analysis' },
    { name: 'Automated Optimization', description: 'Self-tuning database performance' },
    { name: 'Security Analytics', description: 'Advanced threat detection and monitoring' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-deepvox-blue to-deepvox-accent text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 bg-white bg-opacity-20 rounded-full text-sm font-medium mb-6">
              <Brain className="w-4 h-4 mr-2" />
              AI-Powered Database Analytics
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Unlock Your Database Intelligence
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
              Transform your database operations with AI-powered analytics, performance optimization, 
              and intelligent insights for data-driven decision making.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white text-deepvox-blue px-8 py-4 rounded-lg font-semibold inline-flex items-center transition-all duration-300 hover:bg-gray-100 hover:scale-105"
              >
                Try out Database Analytics AI
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-deepvox-black mb-4">
              AI-Powered Database Analytics Capabilities
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive database analytics solutions that leverage artificial intelligence to optimize 
              performance and extract valuable insights from your data.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {databaseFeatures.map((feature, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-xl p-8 hover:bg-white hover:shadow-lg transition-all duration-300 border border-gray-200"
              >
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-deepvox-accent bg-opacity-10 rounded-lg flex items-center justify-center mr-4">
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
              Database Analytics Performance Metrics
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Real metrics from successful database analytics implementations across industries.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {databaseMetrics.map((metric, index) => (
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
              Database Analytics Use Cases
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover how AI-powered analytics is transforming database operations and data management.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center mb-6">
                  <div className="w-10 h-10 bg-deepvox-blue bg-opacity-10 rounded-lg flex items-center justify-center mr-4">
                    <Server className="w-5 h-5 text-deepvox-blue" />
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
                      <div className="w-2 h-2 bg-deepvox-accent rounded-full mr-3 flex-shrink-0"></div>
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Analytics Capabilities */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-deepvox-black mb-4">
              Advanced Analytics Capabilities
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Powerful analytics tools designed specifically for database optimization and data intelligence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {analyticsCapabilities.map((capability, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-xl p-6 text-center shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
              >
                <div className="w-12 h-12 bg-deepvox-blue bg-opacity-10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <HardDrive className="w-6 h-6 text-deepvox-blue" />
                </div>
                <h3 className="text-lg font-bold text-deepvox-black mb-2">
                  {capability.name}
                </h3>
                <p className="text-sm text-gray-600">
                  {capability.description}
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
            Ready to Transform Your Database Analytics?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Join leading organizations that have revolutionized their database operations 
            with AI-powered analytics from DeepVox.ai.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-deepvox-blue hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200"
            >
              Try out Database Analytics AI
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIforDatabaseAnalytics; 