import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Shield, FileText, Users, BarChart3, ArrowRight, CheckCircle, AlertTriangle } from 'lucide-react';

const Healthcare: React.FC = () => {
  const solutions = [
    {
      icon: <FileText className="w-8 h-8 text-blue-600" />,
      title: 'Clinical Decision Support',
      description: 'AI-powered diagnostic assistance and treatment recommendations based on patient data and medical literature.',
      features: ['Diagnostic Assistance', 'Treatment Recommendations', 'Drug Interaction Alerts', 'Risk Assessment']
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-green-600" />,
      title: 'Population Health Analytics',
      description: 'Comprehensive population health insights with predictive modeling for better patient outcomes.',
      features: ['Population Insights', 'Predictive Modeling', 'Risk Stratification', 'Outcome Tracking']
    },
    {
      icon: <Users className="w-8 h-8 text-purple-600" />,
      title: 'Patient Engagement',
      description: 'Intelligent patient communication and engagement tools with personalized care plans.',
      features: ['Personalized Care Plans', 'Automated Communications', 'Patient Portals', 'Appointment Scheduling']
    }
  ];

  const complianceFeatures = [
    {
      standard: 'HIPAA',
      description: 'Full Health Insurance Portability and Accountability Act compliance',
      icon: <Shield className="w-6 h-6 text-green-600" />
    },
    {
      standard: 'HITECH',
      description: 'Health Information Technology for Economic and Clinical Health Act compliance',
      icon: <Shield className="w-6 h-6 text-blue-600" />
    },
    {
      standard: 'FDA',
      description: 'FDA guidelines for AI/ML-based medical devices',
      icon: <Shield className="w-6 h-6 text-purple-600" />
    },
    {
      standard: 'SOC 2',
      description: 'Service Organization Control 2 Type II certification',
      icon: <Shield className="w-6 h-6 text-red-600" />
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-deepvox-black to-deepvox-gray text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center bg-red-500 bg-opacity-20 border border-red-400 border-opacity-30 rounded-full px-6 py-2 mb-6">
              <Heart className="w-4 h-4 mr-2 text-red-400" />
              <span className="text-sm font-medium">HIPAA Compliant</span>
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Healthcare AI Solutions
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              HIPAA-compliant AI solutions for patient data processing, diagnostic assistance, 
              and population health analytics that transform healthcare delivery.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm mb-8">
              <span className="bg-white bg-opacity-10 px-4 py-2 rounded-full">HIPAA Compliant</span>
              <span className="bg-white bg-opacity-10 px-4 py-2 rounded-full">EMR Integration</span>
              <span className="bg-white bg-opacity-10 px-4 py-2 rounded-full">FDA Guidelines</span>
              <span className="bg-white bg-opacity-10 px-4 py-2 rounded-full">Clinical Decision Support</span>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-deepvox-blue hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold inline-flex items-center transition-colors duration-200"
              >
                Try out Healthcare AI
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-deepvox-black mb-4">
              Comprehensive Healthcare AI Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From clinical decision support to population health analytics, our AI solutions 
              are designed specifically for healthcare environments.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="flex items-center mb-6">
                  {solution.icon}
                  <h3 className="text-xl font-bold text-deepvox-black ml-3">
                    {solution.title}
                  </h3>
                </div>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {solution.description}
                </p>

                <div className="space-y-3">
                  {solution.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-deepvox-accent mr-2" />
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-deepvox-black mb-4">
              Healthcare Compliance & Security
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our healthcare AI solutions meet all major healthcare compliance standards 
              and security requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {complianceFeatures.map((feature, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-xl p-6 text-center hover:bg-white hover:shadow-lg transition-all duration-300"
              >
                <div className="flex justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-bold text-deepvox-black mb-2">
                  {feature.standard}
                </h3>
                <p className="text-sm text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          {/* Security Features */}
          <div className="mt-16 bg-gradient-to-r from-deepvox-blue to-deepvox-accent rounded-2xl p-8 text-white">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-4">Advanced Security Features</h3>
              <p className="text-blue-100 max-w-3xl mx-auto">
                Our healthcare AI platform includes enterprise-grade security features designed 
                specifically for protecting sensitive health information.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-white bg-opacity-20 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Shield className="w-6 h-6" />
                </div>
                <h4 className="font-semibold mb-2">End-to-End Encryption</h4>
                <p className="text-sm text-blue-100">Data encrypted at rest and in transit</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-white bg-opacity-20 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Users className="w-6 h-6" />
                </div>
                <h4 className="font-semibold mb-2">Role-Based Access</h4>
                <p className="text-sm text-blue-100">Granular permissions and access controls</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-white bg-opacity-20 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <FileText className="w-6 h-6" />
                </div>
                <h4 className="font-semibold mb-2">Audit Logging</h4>
                <p className="text-sm text-blue-100">Complete audit trail for compliance</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Integration Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-deepvox-black mb-4">
              Seamless EMR/EHR Integration
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our healthcare AI solutions integrate seamlessly with major Electronic Medical Record 
              and Electronic Health Record systems.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {['Epic', 'Cerner', 'Allscripts', 'MEDITECH', 'NextGen', 'eClinicalWorks'].map((emr, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-4 text-center shadow-md hover:shadow-lg transition-shadow duration-200"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-deepvox-blue to-deepvox-accent rounded-lg flex items-center justify-center mx-auto mb-2">
                  <span className="text-white font-bold text-sm">{emr.substring(0, 2)}</span>
                </div>
                <div className="text-sm font-medium text-deepvox-black">{emr}</div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 max-w-3xl mx-auto">
              <div className="flex items-center justify-center mb-4">
                <AlertTriangle className="w-6 h-6 text-yellow-600 mr-2" />
                <h3 className="text-lg font-semibold text-yellow-800">Custom Integration Available</h3>
              </div>
              <p className="text-yellow-700">
                Don't see your EMR/EHR system? We provide custom integration services for healthcare 
                organizations using proprietary or less common systems.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-deepvox-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Ready to Transform Healthcare with AI?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Start with a comprehensive healthcare AI assessment to identify opportunities 
            for improving patient outcomes while maintaining compliance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-deepvox-blue hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200"
            >
              Try out Healthcare AI
            </Link>
            <Link
              to="/resources/case-studies"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-deepvox-black transition-all duration-200"
            >
              View Healthcare Case Studies
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Healthcare;