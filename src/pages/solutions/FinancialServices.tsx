import React from 'react';
import { Link } from 'react-router-dom';
import { DollarSign, Shield, AlertTriangle, TrendingUp, Users, ArrowRight, CheckCircle, Lock } from 'lucide-react';

const FinancialServices: React.FC = () => {
  const solutions = [
    {
      icon: <AlertTriangle className="w-8 h-8 text-red-600" />,
      title: 'Fraud Detection & Prevention',
      description: 'Real-time fraud detection using advanced machine learning models to identify suspicious transactions and patterns.',
      features: ['Real-time Monitoring', 'Pattern Recognition', 'Risk Scoring', 'Automated Alerts']
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-blue-600" />,
      title: 'Risk Assessment & Modeling',
      description: 'Comprehensive risk analysis and predictive modeling for credit decisions, market risk, and operational risk.',
      features: ['Credit Risk Models', 'Market Risk Analysis', 'Stress Testing', 'Portfolio Optimization']
    },
    {
      icon: <Users className="w-8 h-8 text-green-600" />,
      title: 'Customer Intelligence',
      description: 'AI-powered customer insights, personalization, and engagement to improve customer experience and retention.',
      features: ['Customer Segmentation', 'Personalized Offers', 'Churn Prevention', 'Cross-sell Optimization']
    }
  ];

  const complianceStandards = [
    {
      name: 'SOC 2 Type II',
      description: 'Service Organization Control 2 certification for security, availability, and confidentiality',
      icon: <Shield className="w-6 h-6 text-blue-600" />
    },
    {
      name: 'PCI DSS',
      description: 'Payment Card Industry Data Security Standard compliance for card data protection',
      icon: <Lock className="w-6 h-6 text-green-600" />
    },
    {
      name: 'GDPR',
      description: 'General Data Protection Regulation compliance for European customer data',
      icon: <Shield className="w-6 h-6 text-purple-600" />
    },
    {
      name: 'CCPA',
      description: 'California Consumer Privacy Act compliance for California residents',
      icon: <Shield className="w-6 h-6 text-orange-600" />
    }
  ];

  const useCases = [
    {
      title: 'Credit Underwriting',
      description: 'Automated credit decisions with improved accuracy and reduced processing time.',
      metrics: ['40% faster decisions', '25% improved accuracy', '60% reduced manual review']
    },
    {
      title: 'Anti-Money Laundering',
      description: 'Advanced AML detection with reduced false positives and improved compliance.',
      metrics: ['70% fewer false positives', '90% faster investigation', 'Full audit trail']
    },
    {
      title: 'Trading Analytics',
      description: 'Real-time market analysis and algorithmic trading support with risk management.',
      metrics: ['Sub-second analysis', 'Real-time risk monitoring', 'Automated compliance checks']
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-deepvox-black to-deepvox-gray text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center bg-green-500 bg-opacity-20 border border-green-400 border-opacity-30 rounded-full px-6 py-2 mb-6">
              <DollarSign className="w-4 h-4 mr-2 text-green-400" />
              <span className="text-sm font-medium">SOC2 & PCI-DSS Certified</span>
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Financial Services AI
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              SOC2 and PCI-DSS compliant AI solutions for fraud detection, risk modeling, 
              and regulatory compliance that transform financial operations.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm mb-8">
              <span className="bg-white bg-opacity-10 px-4 py-2 rounded-full">SOC2 Certified</span>
              <span className="bg-white bg-opacity-10 px-4 py-2 rounded-full">PCI-DSS Compliant</span>
              <span className="bg-white bg-opacity-10 px-4 py-2 rounded-full">GDPR Ready</span>
              <span className="bg-white bg-opacity-10 px-4 py-2 rounded-full">Real-time Fraud Detection</span>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-deepvox-blue hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold inline-flex items-center transition-colors duration-200"
              >
                Try out Financial Services AI
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Core Solutions */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-deepvox-black mb-4">
              Comprehensive Financial AI Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From fraud detection to risk modeling, our AI solutions are designed specifically 
              for financial services environments with the highest security standards.
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
              Financial Services Compliance
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our financial AI solutions meet all major financial services compliance standards 
              and regulatory requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {complianceStandards.map((standard, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-xl p-6 text-center hover:bg-white hover:shadow-lg transition-all duration-300"
              >
                <div className="flex justify-center mb-4">
                  {standard.icon}
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

          {/* Security Features */}
          <div className="mt-16 bg-gradient-to-r from-deepvox-blue to-deepvox-accent rounded-2xl p-8 text-white">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-4">Bank-Grade Security</h3>
              <p className="text-blue-100 max-w-3xl mx-auto">
                Our financial AI platform includes the highest level of security features 
                designed for protecting sensitive financial data and transactions.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-white bg-opacity-20 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Shield className="w-6 h-6" />
                </div>
                <h4 className="font-semibold mb-2">256-bit Encryption</h4>
                <p className="text-sm text-blue-100">Military-grade encryption</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-white bg-opacity-20 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Lock className="w-6 h-6" />
                </div>
                <h4 className="font-semibold mb-2">Zero-Trust Architecture</h4>
                <p className="text-sm text-blue-100">Never trust, always verify</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-white bg-opacity-20 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <AlertTriangle className="w-6 h-6" />
                </div>
                <h4 className="font-semibold mb-2">Real-time Monitoring</h4>
                <p className="text-sm text-blue-100">24/7 threat detection</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-white bg-opacity-20 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <TrendingUp className="w-6 h-6" />
                </div>
                <h4 className="font-semibold mb-2">Continuous Compliance</h4>
                <p className="text-sm text-blue-100">Automated compliance checks</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-deepvox-black mb-4">
              Proven Use Cases & Results
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how financial institutions are leveraging our AI solutions to improve 
              operations and reduce risk.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-8 shadow-lg border border-gray-100"
              >
                <h3 className="text-xl font-bold text-deepvox-black mb-4">
                  {useCase.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {useCase.description}
                </p>
                <div className="space-y-3">
                  {useCase.metrics.map((metric, metricIndex) => (
                    <div key={metricIndex} className="flex items-center text-sm">
                      <div className="w-2 h-2 bg-deepvox-accent rounded-full mr-3"></div>
                      <span className="font-medium text-deepvox-black">{metric}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-deepvox-black mb-4">
              Core Banking & Trading System Integration
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Seamless integration with major core banking systems, trading platforms, 
              and financial infrastructure.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {['FIS', 'Fiserv', 'Jack Henry', 'Temenos', 'Oracle', 'IBM'].map((system, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-lg p-4 text-center shadow-md hover:shadow-lg transition-shadow duration-200"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-deepvox-blue to-deepvox-accent rounded-lg flex items-center justify-center mx-auto mb-2">
                  <span className="text-white font-bold text-sm">{system.substring(0, 2)}</span>
                </div>
                <div className="text-sm font-medium text-deepvox-black">{system}</div>
              </div>
            ))}
          </div>
        </div>
      </section>


    </div>
  );
};

export default FinancialServices;