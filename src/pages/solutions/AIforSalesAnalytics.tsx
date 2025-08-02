import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, TrendingUp, Brain, Shield, BarChart3, Target, CheckCircle, DollarSign, Users, MessageSquare, Calendar, Award, Building, Heart, Zap, Eye, Star, PieChart, Activity } from 'lucide-react';

const AIforSalesAnalytics: React.FC = () => {
  const salesFeatures = [
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: 'Predictive Sales Forecasting',
      description: 'AI-powered sales forecasting with machine learning models for accurate revenue predictions.',
      benefits: ['Accurate Predictions', 'Seasonal Analysis', 'Market Trends', 'Risk Assessment']
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: 'Intelligent Lead Scoring',
      description: 'Advanced lead scoring algorithms that prioritize prospects based on conversion probability.',
      benefits: ['Behavioral Analysis', 'Conversion Prediction', 'Priority Ranking', 'Automated Scoring']
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: 'Customer Insights & Analytics',
      description: 'Deep customer analytics for understanding buying patterns, preferences, and lifetime value.',
      benefits: ['Customer Segmentation', 'Buying Patterns', 'Lifetime Value', 'Churn Prediction']
    },
    {
      icon: <DollarSign className="w-8 h-8" />,
      title: 'Revenue Optimization',
      description: 'AI-driven pricing strategies and revenue optimization for maximum profitability.',
      benefits: ['Dynamic Pricing', 'Revenue Maximization', 'Profit Optimization', 'Market Analysis']
    }
  ];

  const salesMetrics = [
    { number: '35%', label: 'Revenue Increase', icon: <DollarSign className="w-8 h-8" /> },
    { number: '50%', label: 'Lead Conversion', icon: <Target className="w-8 h-8" /> },
    { number: '90%', label: 'Forecast Accuracy', icon: <TrendingUp className="w-8 h-8" /> },
    { number: '60%', label: 'Sales Efficiency', icon: <Zap className="w-8 h-8" /> }
  ];

  const useCases = [
    {
      title: 'Sales Forecasting & Planning',
      description: 'Accurate sales predictions and strategic planning with AI-powered analytics.',
      features: ['Predictive modeling', 'Seasonal trend analysis', 'Market opportunity identification', 'Resource allocation optimization']
    },
    {
      title: 'Lead Qualification & Scoring',
      description: 'Automated lead scoring and qualification to focus on high-value prospects.',
      features: ['Behavioral scoring', 'Demographic analysis', 'Engagement tracking', 'Conversion probability']
    },
    {
      title: 'Customer Journey Analytics',
      description: 'Track and optimize the entire customer journey from awareness to purchase.',
      features: ['Journey mapping', 'Touchpoint analysis', 'Conversion optimization', 'Experience enhancement']
    },
    {
      title: 'Sales Performance Optimization',
      description: 'Improve sales team performance with AI-driven insights and recommendations.',
      features: ['Performance analytics', 'Skill gap identification', 'Training recommendations', 'Incentive optimization']
    }
  ];

  const analyticsCapabilities = [
    { name: 'Real-time Analytics', description: 'Live sales data and performance monitoring' },
    { name: 'Predictive Modeling', description: 'ML-based forecasting and trend analysis' },
    { name: 'Customer Segmentation', description: 'Advanced clustering and persona development' },
    { name: 'ROI Tracking', description: 'Comprehensive return on investment measurement' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-deepvox-blue to-deepvox-accent text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 bg-white bg-opacity-20 rounded-full text-sm font-medium mb-6">
              <Brain className="w-4 h-4 mr-2" />
              AI-Powered Sales Analytics
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Revolutionize Your Sales Strategy
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
              Transform your sales operations with AI-powered analytics, predictive forecasting, 
              and intelligent lead scoring for maximum revenue growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white text-deepvox-blue px-8 py-4 rounded-lg font-semibold inline-flex items-center transition-all duration-300 hover:bg-gray-100 hover:scale-105"
              >
                Try out Sales Analytics AI
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Performance Metrics */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-deepvox-black mb-4">
              Sales Analytics Performance Metrics
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real metrics from successful sales analytics implementations across industries.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {salesMetrics.map((metric, index) => (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 bg-deepvox-blue bg-opacity-10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  {metric.icon}
                </div>
                <div className="text-3xl font-bold text-deepvox-black mb-2">{metric.number}</div>
                <div className="text-gray-600 font-medium">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-deepvox-black mb-4">
              AI-Powered Sales Analytics Capabilities
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive sales analytics solutions that leverage artificial intelligence to drive 
              revenue growth and optimize sales performance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {salesFeatures.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
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

      {/* Use Cases */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-deepvox-black mb-4">
              Sales Analytics Use Cases
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover how AI-powered analytics is transforming sales operations and driving revenue growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-xl p-8 hover:bg-white hover:shadow-lg transition-all duration-300 border border-gray-200"
              >
                <div className="flex items-center mb-6">
                  <div className="w-10 h-10 bg-deepvox-blue bg-opacity-10 rounded-lg flex items-center justify-center mr-4">
                    <Activity className="w-5 h-5 text-deepvox-blue" />
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
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-deepvox-black mb-4">
              Advanced Analytics Capabilities
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Powerful analytics tools designed specifically for sales optimization and revenue growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {analyticsCapabilities.map((capability, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 text-center shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
              >
                <div className="w-12 h-12 bg-deepvox-blue bg-opacity-10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <PieChart className="w-6 h-6 text-deepvox-blue" />
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
            Ready to Transform Your Sales Analytics?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Join leading organizations that have revolutionized their sales operations 
            with AI-powered analytics from DeepVox.ai.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-deepvox-blue hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200"
            >
              Try out Sales Analytics AI
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIforSalesAnalytics; 