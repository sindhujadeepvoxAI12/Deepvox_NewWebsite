import React from 'react';
import { ExternalLink } from 'lucide-react';

interface Subsection {
  subtitle: string;
  content?: string;
  items?: string[];
}

interface TermsSection {
  title: string;
  content?: string;
  highlight?: string;
  items?: string[];
  subsections?: Subsection[];
}

const Terms: React.FC = () => {
  const termsSections: TermsSection[] = [
    {
      title: '1. Acceptance of Terms',
      content: 'By accessing and using DeepVox.ai, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service. These terms apply to all visitors, users, and others who access or use our service.'
    },
    {
      title: '2. About DeepVox.ai',
      content: 'DeepVox.ai is an advanced AI voice technology platform that provides cutting-edge voice synthesis, recognition, and processing services. Our comprehensive platform delivers innovative AI-powered solutions for businesses worldwide.',
      highlight: 'Important: DeepVox.ai operates under Rudravega AI Labs, delivering exceptional AI-powered voice solutions and analytics products including EchoLeads for lead generation.'
    },
    {
      title: '3. Use License',
      subsections: [
        {
          subtitle: 'Permitted Use',
          content: 'Permission is granted to temporarily access and use DeepVox.ai for personal and commercial purposes under the following conditions:',
          items: [
            'You must not remove any copyright or proprietary notations from the materials',
            'You must not transfer the materials to another person or mirror the materials on any other server',
            'You must use our services in compliance with all applicable laws and regulations',
            'You must not attempt to reverse engineer, decompile, or disassemble our AI models'
          ]
        },
        {
          subtitle: 'Prohibited Activities',
          content: 'You may not use our services for any unlawful purpose or to solicit others to perform unlawful acts. This includes but is not limited to:',
          items: [
            'Creating deepfakes or misleading audio content without proper disclosure',
            'Impersonating individuals without their consent',
            'Generating content that violates intellectual property rights',
            'Using our services to harass, abuse, or harm others',
            'Attempting to gain unauthorized access to our systems or user accounts'
          ]
        }
      ]
    },
    {
      title: '4. Privacy and Data Protection',
      content: 'We are committed to protecting your privacy and handling your data responsibly. Our privacy practices include:',
      subsections: [
        {
          subtitle: 'Data Collection and Use',
          items: [
            'We collect only necessary data to provide and improve our services',
            'Voice data is processed securely and in compliance with international privacy standards',
            'We implement advanced encryption and security measures to protect your information',
            'We do not sell or share your personal data with third parties without your consent'
          ]
        }
      ]
    },
    {
      title: '5. Service Availability and Modifications',
      content: 'DeepVox.ai reserves the right to modify, suspend, or discontinue any aspect of our services at any time without prior notice. We strive to provide consistent service availability but cannot guarantee uninterrupted access due to:',
      items: [
        'Scheduled maintenance and updates',
        'Technical difficulties or system failures',
        'Third-party service dependencies',
        'Force majeure events beyond our control'
      ]
    },
    {
      title: '6. Intellectual Property Rights',
      content: 'All content, features, and functionality of DeepVox.ai, including but not limited to text, graphics, logos, button icons, images, audio clips, digital downloads, data compilations, and software, are the exclusive property of DeepVox.ai, Rudravega AI Labs, or our content suppliers and are protected by international copyright, trademark, patent, trade secret, and other intellectual property laws.',
      subsections: [
        {
          subtitle: 'User-Generated Content',
          content: 'When you upload or input content into our DeepVox.ai platform, you retain ownership of your original content but grant us a limited license to process, analyze, and improve our services. We respect your intellectual property and will not use your content for purposes beyond service provision without your explicit consent.'
        }
      ]
    },
    {
      title: '7. Limitation of Liability',
      content: 'DeepVox.ai and Rudravega AI Labs shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your use of our services.',
      highlight: 'Important Disclaimer: Our AI voice technology is provided "as is" and "as available" without warranties of any kind, either express or implied. We do not warrant that our services will be uninterrupted, timely, secure, or error-free.'
    },
    {
      title: '8. Payment and Subscription Terms',
      subsections: [
        {
          subtitle: 'Billing and Payments',
          items: [
            'Subscription fees are billed in advance on a monthly or annual basis',
            'All payments are non-refundable except as required by law',
            'We reserve the right to change our pricing with 30 days advance notice',
            'Failure to pay may result in service suspension or termination'
          ]
        },
        {
          subtitle: 'Cancellation Policy',
          content: 'You may cancel your subscription at any time through your account settings. Cancellation will take effect at the end of your current billing period. We do not provide refunds for partial months or unused portions of annual subscriptions.'
        }
      ]
    },
    {
      title: '9. Compliance and Regulatory Standards',
      content: 'We design our solutions to meet and exceed international and industry-specific standards, ensuring compliance with various regulatory frameworks including GDPR, CCPA, and other applicable data protection regulations.',
      subsections: [
        {
          subtitle: 'Ethical AI Implementation',
          content: 'We are committed to bias mitigation, responsible data handling, and transparent AI usage practices. Our development process includes regular audits and assessments to ensure ethical AI deployment.'
        }
      ]
    },
    {
      title: '10. Termination',
      content: 'We may terminate or suspend your account and access to our services immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach these Terms and Conditions. Upon termination, your right to use our services will cease immediately.'
    },
    {
      title: '11. Governing Law and Jurisdiction',
      content: 'These Terms and Conditions are governed by and construed in accordance with the laws of the jurisdiction where Rudravega AI Labs is incorporated. Any disputes arising under these terms shall be subject to the exclusive jurisdiction of the courts in that jurisdiction.'
    },
    {
      title: '12. Changes to Terms',
      content: 'We reserve the right to modify these terms at any time. We will notify users of any significant changes via email or through our platform. Continued use of our services after such modifications constitutes acceptance of the updated terms.'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-deepvox-black to-deepvox-gray text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block bg-deepvox-accent text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
            Legal Framework
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            Terms and Conditions
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed">
            Welcome to DeepVox.ai. These terms and conditions outline the rules and regulations for the use of our advanced AI voice technology platform and services, including our comprehensive suite of AI-powered solutions.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {termsSections.map((section, index) => (
              <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="bg-white rounded-xl shadow-sm p-8">
                  <h2 className="text-2xl font-bold text-deepvox-black mb-6">
                    {section.title}
                  </h2>
                  
                  {section.content && (
                    <div className="text-gray-700 leading-relaxed mb-6">
                      {section.content}
                    </div>
                  )}

                  {section.highlight && (
                    <div className="bg-blue-50 border-l-4 border-deepvox-blue p-4 mb-6 rounded-r-lg">
                      <div className="text-deepvox-black font-medium">
                        {section.highlight}
                      </div>
                    </div>
                  )}

                  {section.items && (
                    <div className="space-y-3">
                      {section.items.map((item, itemIndex) => (
                        <div key={itemIndex} className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-deepvox-accent rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-700">{item}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {section.subsections && (
                    <div className="space-y-6">
                      {section.subsections.map((subsection, subIndex) => (
                        <div key={subIndex} className="border-l-4 border-gray-200 pl-6">
                          <h3 className="text-lg font-semibold text-deepvox-black mb-3">
                            {subsection.subtitle}
                          </h3>
                          {subsection.content && (
                            <div className="text-gray-700 leading-relaxed mb-4">
                              {subsection.content}
                            </div>
                          )}
                          {subsection.items && (
                            <div className="space-y-3">
                              {subsection.items.map((item, itemIndex) => (
                                <div key={itemIndex} className="flex items-start space-x-3">
                                  <div className="w-2 h-2 bg-deepvox-accent rounded-full mt-2 flex-shrink-0"></div>
                                  <span className="text-gray-700">{item}</span>
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}

            {/* Contact Information */}
            <div className="bg-white rounded-xl shadow-sm p-8 animate-fade-in">
              <h3 className="text-xl font-bold text-deepvox-black mb-4">
                Contact Information
              </h3>
              <p className="text-gray-700 mb-4">
                If you have any questions about these Terms and Conditions, please contact us:
              </p>
              <div className="space-y-2">
                <p className="text-gray-700">
                  Email: 
                  <a 
                    href="mailto:sales@deepvox.ai" 
                    className="text-deepvox-accent hover:underline ml-2"
                  >
                    sales@deepvox.ai
                  </a>
                </p>
                <p className="text-gray-700">
                  Website: 
                  <a 
                    href="https://deepvox.ai" 
                    className="text-deepvox-accent hover:underline ml-2 inline-flex items-center"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    https://deepvox.ai
                    <ExternalLink className="w-4 h-4 ml-1" />
                  </a>
                </p>
                <p className="text-gray-700">
                  Rudravega AI Labs: 
                  <a 
                    href="https://rudravega.com/" 
                    className="text-deepvox-accent hover:underline ml-2 inline-flex items-center"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    https://rudravega.com/
                    <ExternalLink className="w-4 h-4 ml-1" />
                  </a>
                </p>
              </div>
            </div>

            {/* Last Updated */}
            <div className="bg-gray-100 rounded-xl p-6 text-center animate-fade-in">
              <p className="text-gray-600 font-medium">Last updated: June 2, 2025</p>
              <p className="text-gray-600">Effective date: June 2, 2025</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Terms; 