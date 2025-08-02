import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, DollarSign, Factory, Building, ArrowRight, TrendingUp, Users, Zap, CheckCircle } from 'lucide-react';

const CaseStudies: React.FC = () => {
  const caseStudies = [
    {
      icon: <Heart className="w-8 h-8 text-red-500" />,
      industry: 'Healthcare',
      title: 'Regional Medical Center: 300% ROI with AI Transformation',
      description: 'How a 500-bed hospital system reduced costs by $2.3M annually while improving patient outcomes through HIPAA-compliant AI implementation.',
      metrics: [
        { label: 'Cost Reduction', value: '$2.3M annually' },
        { label: 'Processing Time', value: '75% faster' },
        { label: 'Accuracy Improvement', value: '95% diagnostic accuracy' },
        { label: 'Implementation Time', value: '4 months' }
      ],
      keyAchievements: [
        'Automated clinical documentation',
        'Predictive patient risk assessment',
        'Optimized resource allocation',
        'Enhanced care coordination'
      ],
      href: '/resources/case-studies/healthcare-transformation'
    },
    {
      icon: <DollarSign className="w-8 h-8 text-green-500" />,
      industry: 'Financial Services',
      title: 'Community Bank: 60% Fraud Reduction with AI',
      description: 'Mid-size bank achieves dramatic fraud reduction and improved customer experience with real-time AI-powered fraud detection.',
      metrics: [
        { label: 'Fraud Reduction', value: '60% decrease' },
        { label: 'False Positives', value: '80% reduction' },
        { label: 'Processing Speed', value: 'Real-time detection' },
        { label: 'Customer Satisfaction', value: '25% increase' }
      ],
      keyAchievements: [
        'Real-time fraud detection',
        'Reduced false positives',
        'Enhanced customer experience',
        'Regulatory compliance maintained'
      ],
      href: '/resources/case-studies/financial-fraud-detection'
    },
    {
      icon: <Factory className="w-8 h-8 text-blue-500" />,
      industry: 'Manufacturing',
      title: 'Manufacturing Corp: 40% Downtime Reduction',
      description: 'Industrial manufacturer implements predictive maintenance AI, resulting in significant operational improvements and cost savings.',
      metrics: [
        { label: 'Downtime Reduction', value: '40% decrease' },
        { label: 'Maintenance Costs', value: '30% savings' },
        { label: 'Product Quality', value: '15% improvement' },
        { label: 'Energy Efficiency', value: '20% improvement' }
      ],
      keyAchievements: [
        'Predictive maintenance scheduling',
        'Quality control automation',
        'Supply chain optimization',
        'Energy usage optimization'
      ],
      href: '/resources/case-studies/manufacturing-optimization'
    },
    {
      icon: <Building className="w-8 h-8 text-purple-500" />,
      industry: 'Government',
      title: 'City Government: Digital Transformation Success',
      description: 'Large metropolitan city streamlines citizen services and improves operational efficiency through secure AI implementation.',
      metrics: [
        { label: 'Service Speed', value: '65% faster' },
        { label: 'Citizen Satisfaction', value: '45% increase' },
        { label: 'Processing Costs', value: '50% reduction' },
        { label: 'Staff Productivity', value: '35% increase' }
      ],
      keyAchievements: [
        'Automated document processing',
        'Intelligent citizen services',
        'Streamlined workflows',
        'Enhanced data security'
      ],
      href: '/resources/case-studies/government-digital-transformation'
    }
  ];

  const industryStats = [
    { industry: 'Healthcare', implementations: '50+', avgROI: '280%' },
    { industry: 'Financial Services', implementations: '35+', avgROI: '320%' },
    { industry: 'Manufacturing', implementations: '45+', avgROI: '250%' },
    { industry: 'Government', implementations: '25+', avgROI: '200%' },
    { industry: 'Legal', implementations: '20+', avgROI: '190%' },
    { industry: 'Real Estate', implementations: '15+', avgROI: '220%' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-deepvox-black to-deepvox-gray text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Customer Success Stories
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Real-world case studies showcasing how organizations across industries have 
              achieved transformational results with our Enterprise AI Stack™.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm mb-8">
              <span className="bg-white bg-opacity-10 px-4 py-2 rounded-full">200+ Implementations</span>
              <span className="bg-white bg-opacity-10 px-4 py-2 rounded-full">Average 250% ROI</span>
              <span className="bg-white bg-opacity-10 px-4 py-2 rounded-full">15+ Industries</span>
              <span className="bg-white bg-opacity-10 px-4 py-2 rounded-full">Proven Results</span>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Case Studies */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-deepvox-black mb-4">
              Featured Success Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover how organizations like yours have transformed their operations 
              with our privacy-first AI solutions.
            </p>
          </div>

          <div className="space-y-12">
            {caseStudies.map((study, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
              >
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  {/* Study Overview */}
                  <div className="lg:col-span-2">
                    <div className="flex items-center mb-4">
                      {study.icon}
                      <div className="ml-4">
                        <span className="text-sm font-medium text-gray-500 uppercase tracking-wide">
                          {study.industry}
                        </span>
                        <h3 className="text-2xl font-bold text-deepvox-black">
                          {study.title}
                        </h3>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                      {study.description}
                    </p>

                    <div className="grid grid-cols-2 gap-4 mb-6">
                      {study.metrics.map((metric, metricIndex) => (
                        <div key={metricIndex} className="bg-gray-50 rounded-lg p-4">
                          <div className="text-2xl font-bold text-deepvox-blue mb-1">
                            {metric.value}
                          </div>
                          <div className="text-sm text-gray-600">
                            {metric.label}
                          </div>
                        </div>
                      ))}
                    </div>

                    <Link
                      to={study.href}
                      className="inline-flex items-center text-deepvox-blue font-semibold hover:text-deepvox-accent transition-colors duration-200"
                    >
                      Read Full Case Study
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </Link>
                  </div>

                  {/* Key Achievements */}
                  <div className="bg-gray-50 rounded-xl p-6">
                    <h4 className="text-lg font-bold text-deepvox-black mb-4">
                      Key Achievements
                    </h4>
                    <div className="space-y-3">
                      {study.keyAchievements.map((achievement, achIndex) => (
                        <div key={achIndex} className="flex items-center text-sm">
                          <CheckCircle className="w-4 h-4 text-deepvox-accent mr-3 flex-shrink-0" />
                          <span className="text-gray-700">{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Statistics */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-deepvox-black mb-4">
              Success Across Industries
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our Enterprise AI Stack™ has delivered consistent results across 
              diverse industry verticals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industryStats.map((stat, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-xl p-6 text-center hover:bg-white hover:shadow-lg transition-all duration-300"
              >
                <h3 className="text-xl font-bold text-deepvox-black mb-4">
                  {stat.industry}
                </h3>
                <div className="space-y-3">
                  <div>
                    <div className="text-3xl font-bold text-deepvox-blue">
                      {stat.implementations}
                    </div>
                    <div className="text-sm text-gray-600">
                      Implementations
                    </div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-deepvox-accent">
                      {stat.avgROI}
                    </div>
                    <div className="text-sm text-gray-600">
                      Average ROI
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results Overview */}
      <section className="py-20 bg-gradient-to-r from-deepvox-blue to-deepvox-accent text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Proven Impact Across All Implementations
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Consistent results that demonstrate the power of our Enterprise AI Stack™.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8" />
              </div>
              <div className="text-4xl font-bold mb-2">250%</div>
              <div className="text-blue-100">Average ROI</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8" />
              </div>
              <div className="text-4xl font-bold mb-2">4 Mo</div>
              <div className="text-blue-100">Avg Implementation</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8" />
              </div>
              <div className="text-4xl font-bold mb-2">98%</div>
              <div className="text-blue-100">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8" />
              </div>
              <div className="text-4xl font-bold mb-2">100%</div>
              <div className="text-blue-100">Compliance Success</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-deepvox-black mb-4">
            Ready to Write Your Success Story?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Join the 200+ organizations that have transformed their operations 
            with our Enterprise AI Stack™.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-deepvox-blue hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200"
            >
              Start Your Transformation
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudies;