import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Lock, Eye, Key, Server, Users, ArrowRight, CheckCircle, AlertTriangle, Zap } from 'lucide-react';

const Security: React.FC = () => {
  const securityFeatures = [
    {
      icon: <Lock className="w-8 h-8 text-deepvox-blue" />,
      title: 'Homomorphic Encryption',
      description: 'Process encrypted data without decryption, ensuring data privacy throughout the AI pipeline.',
      benefits: ['Data never decrypted', 'Full computation privacy', 'Regulatory compliance', 'Zero-knowledge processing']
    },
    {
      icon: <Server className="w-8 h-8 text-deepvox-accent" />,
      title: 'Federated Learning',
      description: 'Train AI models across distributed data sources without centralizing sensitive information.',
      benefits: ['Decentralized training', 'Data source privacy', 'Reduced data movement', 'Collaborative learning']
    },
    {
      icon: <Eye className="w-8 h-8 text-deepvox-blue" />,
      title: 'Differential Privacy',
      description: 'Mathematical guarantee of privacy protection while enabling statistical analysis and insights.',
      benefits: ['Mathematical privacy guarantee', 'Noise injection', 'Privacy budget control', 'GDPR compliance']
    },
    {
      icon: <Key className="w-8 h-8 text-deepvox-accent" />,
      title: 'Zero-Knowledge Proofs',
      description: 'Verify computations and results without revealing underlying data or computation details.',
      benefits: ['Computation verification', 'No data revelation', 'Trustless validation', 'Audit capabilities']
    }
  ];

  const complianceStandards = [
    {
      name: 'SOC 2 Type II',
      description: 'Service Organization Control 2 certification',
      status: 'Certified',
      icon: <Shield className="w-6 h-6 text-green-600" />
    },
    {
      name: 'ISO 27001',
      description: 'Information security management standard',
      status: 'Certified',
      icon: <Shield className="w-6 h-6 text-blue-600" />
    },
    {
      name: 'HIPAA',
      description: 'Health Insurance Portability and Accountability Act',
      status: 'Compliant',
      icon: <Shield className="w-6 h-6 text-purple-600" />
    },
    {
      name: 'GDPR',
      description: 'General Data Protection Regulation',
      status: 'Compliant',
      icon: <Shield className="w-6 h-6 text-red-600" />
    },
    {
      name: 'PCI DSS',
      description: 'Payment Card Industry Data Security Standard',
      status: 'Compliant',
      icon: <Shield className="w-6 h-6 text-orange-600" />
    },
    {
      name: 'FedRAMP',
      description: 'Federal Risk and Authorization Management Program',
      status: 'In Progress',
      icon: <Shield className="w-6 h-6 text-yellow-600" />
    }
  ];

  const securityLayers = [
    {
      layer: 'Application Security',
      features: ['Secure coding practices', 'Input validation', 'Output encoding', 'OWASP compliance']
    },
    {
      layer: 'API Security',
      features: ['OAuth 2.0 / JWT tokens', 'Rate limiting', 'API gateway protection', 'Request validation']
    },
    {
      layer: 'Data Security',
      features: ['Encryption at rest', 'Encryption in transit', 'Key management', 'Data classification']
    },
    {
      layer: 'Infrastructure Security',
      features: ['Network segmentation', 'VPC isolation', 'Firewall protection', 'Intrusion detection']
    },
    {
      layer: 'Identity & Access',
      features: ['Multi-factor authentication', 'Role-based access control', 'Single sign-on', 'Audit logging']
    },
    {
      layer: 'Monitoring & Response',
      features: ['24/7 SOC monitoring', 'Threat intelligence', 'Incident response', 'Vulnerability management']
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-deepvox-black to-deepvox-gray text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center bg-green-500 bg-opacity-20 border border-green-400 border-opacity-30 rounded-full px-6 py-2 mb-6">
              <Shield className="w-4 h-4 mr-2 text-green-400" />
              <span className="text-sm font-medium">Privacy-First Architecture</span>
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Security & Privacy
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Advanced privacy-preserving AI technologies that protect your data while enabling 
              powerful AI capabilities. Built for the most stringent enterprise security requirements.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm mb-8">
              <span className="bg-white bg-opacity-10 px-4 py-2 rounded-full">Homomorphic Encryption</span>
              <span className="bg-white bg-opacity-10 px-4 py-2 rounded-full">Federated Learning</span>
              <span className="bg-white bg-opacity-10 px-4 py-2 rounded-full">Zero-Knowledge Proofs</span>
              <span className="bg-white bg-opacity-10 px-4 py-2 rounded-full">SOC2 Certified</span>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-deepvox-blue hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold inline-flex items-center transition-colors duration-200"
              >
                Get Security Assessment
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Privacy-Preserving Technologies */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-deepvox-black mb-4">
              Privacy-Preserving AI Technologies
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our privacy-first approach uses cutting-edge cryptographic and machine learning 
              techniques to protect data while enabling AI processing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {securityFeatures.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="flex items-center mb-6">
                  {feature.icon}
                  <h3 className="text-xl font-bold text-deepvox-black ml-3">
                    {feature.title}
                  </h3>
                </div>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {feature.description}
                </p>

                <div className="space-y-3">
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

      {/* Compliance Standards */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-deepvox-black mb-4">
              Compliance & Certifications
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We maintain the highest levels of compliance and certification across 
              industry standards and regulatory requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                <p className="text-sm text-gray-600 mb-3">
                  {standard.description}
                </p>
                <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
                  standard.status === 'Certified' || standard.status === 'Compliant'
                    ? 'bg-green-100 text-green-800'
                    : 'bg-yellow-100 text-yellow-800'
                }`}>
                  {standard.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Layers */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-deepvox-black mb-4">
              Multi-Layer Security Architecture
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Defense-in-depth security strategy with multiple layers of protection 
              across the entire technology stack.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {securityLayers.map((layer, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg border border-gray-100"
              >
                <h3 className="text-lg font-bold text-deepvox-black mb-4">
                  {layer.layer}
                </h3>
                <div className="space-y-3">
                  {layer.features.map((feature, featureIndex) => (
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

      {/* Security Monitoring */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-deepvox-blue to-deepvox-accent rounded-2xl p-8 text-white">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">24/7 Security Operations Center</h2>
              <p className="text-blue-100 max-w-3xl mx-auto">
                Our dedicated Security Operations Center provides round-the-clock monitoring, 
                threat detection, and incident response capabilities.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-white bg-opacity-20 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Zap className="w-6 h-6" />
                </div>
                <h4 className="font-semibold mb-2">Real-time Monitoring</h4>
                <p className="text-sm text-blue-100">Continuous security monitoring</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-white bg-opacity-20 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <AlertTriangle className="w-6 h-6" />
                </div>
                <h4 className="font-semibold mb-2">Threat Detection</h4>
                <p className="text-sm text-blue-100">AI-powered threat intelligence</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-white bg-opacity-20 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Users className="w-6 h-6" />
                </div>
                <h4 className="font-semibold mb-2">Incident Response</h4>
                <p className="text-sm text-blue-100">24/7 expert response team</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-white bg-opacity-20 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Shield className="w-6 h-6" />
                </div>
                <h4 className="font-semibold mb-2">Compliance Monitoring</h4>
                <p className="text-sm text-blue-100">Continuous compliance validation</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-deepvox-black mb-4">
              Security & Privacy FAQ
            </h2>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-lg p-6">
              <h3 className="text-lg font-semibold text-deepvox-black mb-3">
                How does homomorphic encryption work in practice?
              </h3>
              <p className="text-gray-600">
                Homomorphic encryption allows computations to be performed on encrypted data without decrypting it. This means your sensitive data remains encrypted throughout the entire AI processing pipeline, providing mathematical guarantees of privacy.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6">
              <h3 className="text-lg font-semibold text-deepvox-black mb-3">
                What is federated learning and how does it protect privacy?
              </h3>
              <p className="text-gray-600">
                Federated learning trains AI models across multiple data sources without centralizing the data. Each location trains on its local data, and only model updates (not raw data) are shared, ensuring data never leaves its secure environment.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6">
              <h3 className="text-lg font-semibold text-deepvox-black mb-3">
                How do you ensure compliance with multiple regulations?
              </h3>
              <p className="text-gray-600">
                Our platform is designed with compliance-by-design principles, automatically enforcing requirements like GDPR, HIPAA, and SOC2. We maintain continuous compliance monitoring and provide audit trails for all data processing activities.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Security;