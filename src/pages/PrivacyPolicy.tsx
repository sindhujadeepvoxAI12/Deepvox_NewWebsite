import React, { useState } from 'react';
import { Shield, Lock, Eye, UserCheck, Database, Globe, FileText, ChevronDown, ChevronUp } from 'lucide-react';

const PrivacyPolicy: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const privacySections = [
    {
      title: 'Information We Collect',
      icon: <Database className="w-6 h-6" />,
      content: [
        {
          subtitle: 'Personal Information',
          items: [
            'Name, email address, and contact information',
            'Company details and professional information',
            'Account credentials and authentication data',
            'Payment and billing information'
          ]
        },
        {
          subtitle: 'Voice Data',
          items: [
            'Voice recordings for AI processing and analysis',
            'Voice patterns and biometric characteristics',
            'Speech-to-text conversion data',
            'Voice recognition training data'
          ]
        },
        {
          subtitle: 'Technical Information',
          items: [
            'Device information and IP addresses',
            'Browser type and operating system',
            'Usage patterns and interaction data',
            'Performance metrics and error logs'
          ]
        }
      ]
    },
    {
      title: 'How We Use Your Information',
      icon: <Eye className="w-6 h-6" />,
      content: [
        {
          subtitle: 'Service Provision',
          items: [
            'Deliver and maintain our AI voice services',
            'Process voice commands and requests',
            'Improve voice recognition accuracy',
            'Provide customer support and assistance'
          ]
        },
        {
          subtitle: 'Platform Enhancement',
          items: [
            'Develop and improve our AI algorithms',
            'Enhance user experience and interface',
            'Conduct research and analytics',
            'Implement new features and capabilities'
          ]
        },
        {
          subtitle: 'Security and Compliance',
          items: [
            'Ensure platform security and integrity',
            'Comply with legal and regulatory requirements',
            'Prevent fraud and unauthorized access',
            'Maintain audit trails and records'
          ]
        }
      ]
    },
    {
      title: 'Data Protection Measures',
      icon: <Shield className="w-6 h-6" />,
      content: [
        {
          subtitle: 'Encryption Standards',
          items: [
            'AES-256 encryption for data at rest',
            'TLS 1.3 encryption for data in transit',
            'End-to-end encryption for voice communications',
            'Quantum-resistant cryptographic algorithms'
          ]
        },
        {
          subtitle: 'Access Controls',
          items: [
            'Multi-factor authentication (MFA)',
            'Role-based access control (RBAC)',
            'Biometric verification systems',
            'Session management and timeout protocols'
          ]
        },
        {
          subtitle: 'Security Monitoring',
          items: [
            '24/7 security monitoring and alerting',
            'AI-powered threat detection',
            'Regular security audits and assessments',
            'Incident response and recovery procedures'
          ]
        }
      ]
    },
    {
      title: 'Your Privacy Rights',
      icon: <UserCheck className="w-6 h-6" />,
      content: [
        {
          subtitle: 'Data Access and Control',
          items: [
            'Access your personal data and voice recordings',
            'Request correction of inaccurate information',
            'Download your data in portable formats',
            'Control data sharing and processing preferences'
          ]
        },
        {
          subtitle: 'Data Deletion',
          items: [
            'Request deletion of your personal data',
            'Permanently remove voice recordings',
            'Delete account and associated information',
            'Verify complete data removal'
          ]
        },
        {
          subtitle: 'Consent Management',
          items: [
            'Modify consent preferences at any time',
            'Withdraw consent for data processing',
            'Opt-out of marketing communications',
            'Control third-party data sharing'
          ]
        }
      ]
    },
    {
      title: 'Data Sharing and Third Parties',
      icon: <Globe className="w-6 h-6" />,
      content: [
        {
          subtitle: 'Service Providers',
          items: [
            'Cloud infrastructure and hosting services',
            'Payment processing and billing systems',
            'Customer support and communication tools',
            'Analytics and monitoring services'
          ]
        },
        {
          subtitle: 'Legal Requirements',
          items: [
            'Compliance with court orders and subpoenas',
            'Response to law enforcement requests',
            'Protection of rights and safety',
            'Regulatory reporting obligations'
          ]
        },
        {
          subtitle: 'Business Transfers',
          items: [
            'Merger, acquisition, or sale scenarios',
            'Asset transfer and restructuring',
            'Successor entity data handling',
            'Continuity of service provision'
          ]
        }
      ]
    },
    {
      title: 'International Data Transfers',
      icon: <FileText className="w-6 h-6" />,
      content: [
        {
          subtitle: 'Cross-Border Processing',
          items: [
            'Data transfer to approved countries',
            'Adequacy decisions and safeguards',
            'Standard contractual clauses',
            'Binding corporate rules compliance'
          ]
        },
        {
          subtitle: 'Regional Compliance',
          items: [
            'GDPR compliance for EU residents',
            'CCPA compliance for California residents',
            'Local data protection laws',
            'Cross-border cooperation frameworks'
          ]
        }
      ]
    }
  ];

  const complianceFrameworks = [
    {
      name: 'GDPR (General Data Protection Regulation)',
      description: 'Full compliance with EU data protection requirements including data subject rights, lawful processing, and accountability measures.',
      status: 'Compliant'
    },
    {
      name: 'CCPA (California Consumer Privacy Act)',
      description: 'Complete adherence to California privacy laws including consumer rights, disclosure requirements, and opt-out mechanisms.',
      status: 'Compliant'
    },
    {
      name: 'HIPAA (Health Insurance Portability and Accountability Act)',
      description: 'Healthcare data protection compliance for covered entities and business associates handling protected health information.',
      status: 'Compliant'
    },
    {
      name: 'SOC 2 Type II',
      description: 'Third-party verified security, availability, processing integrity, confidentiality, and privacy controls.',
      status: 'Certified'
    },
    {
      name: 'ISO 27001',
      description: 'International standard for information security management systems and comprehensive security controls.',
      status: 'Certified'
    }
  ];

  const faqs = [
    {
      question: 'How is my voice data protected?',
      answer: 'Your voice data is protected with multiple layers of encryption, secure storage architecture, and AI-powered access controls. We use AES-256 encryption for data at rest and TLS 1.3 for data in transit, ensuring comprehensive protection against unauthorized access.'
    },
    {
      question: 'Can I delete my voice recordings?',
      answer: 'Yes, you have complete control over your voice data. You can delete individual recordings or request complete account deletion through your privacy settings. Our verified deletion process ensures permanent removal in compliance with global privacy laws.'
    },
    {
      question: 'Do you sell my personal information?',
      answer: 'No, we do not sell your personal information. We only share data with third parties when necessary for service provision, with your explicit consent, or as required by law. All data sharing is conducted under strict privacy agreements.'
    },
    {
      question: 'How long do you retain my data?',
      answer: 'We retain your data only as long as necessary to provide our services or as required by law. You can set custom retention periods in your privacy settings, and we automatically delete data according to your preferences.'
    },
    {
      question: 'What are my rights under GDPR?',
      answer: 'Under GDPR, you have the right to access, rectify, erase, restrict processing, and port your data. You also have the right to object to processing and withdraw consent. We provide easy-to-use tools to exercise these rights.'
    },
    {
      question: 'How do you ensure AI fairness?',
      answer: 'We implement comprehensive bias detection and mitigation measures in our AI systems. Our models undergo regular fairness audits, and we use diverse training data to ensure equitable treatment across all user groups.'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-deepvox-black to-deepvox-gray text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block bg-deepvox-accent text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
            Privacy & Data Protection
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            Privacy Policy
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed">
            Your privacy is our priority. We are committed to protecting your personal information and voice data with the highest standards of security and transparency.
          </p>
          <div className="mt-8 flex items-center justify-center space-x-4 text-sm text-gray-300">
            <span>Last updated: January 2025</span>
            <span>•</span>
            <span>Effective: January 1, 2025</span>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {/* Privacy Sections */}
            {privacySections.map((section, index) => (
              <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="bg-white rounded-xl shadow-sm p-8">
                  <div className="flex items-center space-x-4 mb-8">
                    <div className="flex-shrink-0 w-12 h-12 bg-deepvox-blue rounded-lg flex items-center justify-center">
                      <div className="text-white">
                        {section.icon}
                      </div>
                    </div>
                    <h2 className="text-2xl font-bold text-deepvox-black">
                      {section.title}
                    </h2>
                  </div>
                  
                  <div className="space-y-8">
                    {section.content.map((content, contentIndex) => (
                      <div key={contentIndex} className="border-l-4 border-deepvox-accent pl-6">
                        <h3 className="text-lg font-semibold text-deepvox-black mb-4">
                          {content.subtitle}
                        </h3>
                        <div className="space-y-3">
                          {content.items.map((item, itemIndex) => (
                            <div key={itemIndex} className="flex items-start space-x-3">
                              <div className="w-2 h-2 bg-deepvox-accent rounded-full mt-2 flex-shrink-0"></div>
                              <span className="text-gray-700">{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}

            {/* Compliance Frameworks */}
            <div className="animate-fade-in">
              <div className="bg-white rounded-xl shadow-sm p-8">
                <h2 className="text-2xl font-bold text-deepvox-black mb-8 text-center">
                  Compliance & Certifications
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {complianceFrameworks.map((framework, index) => (
                    <div key={index} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="text-lg font-semibold text-deepvox-black">
                          {framework.name}
                        </h3>
                        <span className="px-3 py-1 bg-green-100 text-green-800 text-sm font-medium rounded-full">
                          {framework.status}
                        </span>
                      </div>
                      <p className="text-gray-600 text-sm">
                        {framework.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* FAQ Section */}
            <div className="animate-fade-in">
              <div className="bg-white rounded-xl shadow-sm p-8">
                <h2 className="text-2xl font-bold text-deepvox-black mb-8 text-center">
                  Frequently Asked Questions
                </h2>
                <div className="space-y-4">
                  {faqs.map((faq, index) => (
                    <div key={index} className="border border-gray-200 rounded-lg">
                      <button
                        className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                        onClick={() => toggleFaq(index)}
                      >
                        <span className="font-medium text-deepvox-black">
                          {faq.question}
                        </span>
                        {openFaq === index ? (
                          <ChevronUp className="w-5 h-5 text-deepvox-blue" />
                        ) : (
                          <ChevronDown className="w-5 h-5 text-deepvox-blue" />
                        )}
                      </button>
                      {openFaq === index && (
                        <div className="px-6 pb-4">
                          <p className="text-gray-700 leading-relaxed">
                            {faq.answer}
                          </p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="animate-fade-in">
              <div className="bg-gradient-to-br from-deepvox-blue to-deepvox-accent text-white rounded-xl p-8 text-center">
                <h2 className="text-2xl font-bold mb-4">
                  Questions About Privacy?
                </h2>
                <p className="text-lg mb-6 opacity-90">
                  Our privacy team is here to help. Contact us for any questions about your data rights or our privacy practices.
                </p>
                <div className="space-y-2 text-sm opacity-90">
                  <p>Email: <a href="mailto:sales@deepvox.ai" className="underline hover:opacity-75">sales@deepvox.ai</a></p>
                  <p>Phone: <a href="tel:+919000935106" className="underline hover:opacity-75">+91 9000935106</a></p>
                  <p>Address: T-Hub, Hyderabad Knowledge City, Telangana, India</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy; 