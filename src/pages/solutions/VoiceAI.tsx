import React from 'react';
import { Link } from 'react-router-dom';
import { MessageSquare, Mic, Volume2, Globe, Users, ArrowRight, CheckCircle, Zap, Brain, Shield } from 'lucide-react';

const VoiceAI: React.FC = () => {
  const voiceFeatures = [
    {
      icon: <Mic className="w-8 h-8 text-deepvox-blue" />,
      title: 'Natural Language Processing',
      description: 'Advanced NLP capabilities that understand context, intent, and nuanced human communication.',
      features: ['Intent Recognition', 'Context Awareness', 'Sentiment Analysis', 'Entity Extraction']
    },
    {
      icon: <Globe className="w-8 h-8 text-deepvox-accent" />,
      title: 'Multi-Language Support',
      description: 'Support for 50+ languages with real-time translation and cultural context understanding.',
      features: ['50+ Languages', 'Real-time Translation', 'Cultural Context', 'Dialect Recognition']
    },
    {
      icon: <Zap className="w-8 h-8 text-deepvox-blue" />,
      title: 'Real-Time Processing',
      description: 'Ultra-low latency voice processing with real-time response generation and streaming.',
      features: ['Sub-second Response', 'Streaming Audio', 'Edge Processing', 'Offline Capability']
    }
  ];

  const useCases = [
    {
      title: 'Customer Service Automation',
      description: 'Intelligent voice assistants that handle customer inquiries with human-like conversation.',
      metrics: ['80% query resolution', '24/7 availability', '60% cost reduction']
    },
    {
      title: 'Healthcare Voice Documentation',
      description: 'HIPAA-compliant voice-to-text for medical documentation and patient interaction.',
      metrics: ['99.5% accuracy', 'HIPAA compliant', '70% time savings']
    },
    {
      title: 'Enterprise Voice Command',
      description: 'Voice-controlled enterprise applications and workflow automation.',
      metrics: ['Voice-first interface', 'Hands-free operation', 'Improved accessibility']
    }
  ];

  const technicalSpecs = [
    { label: 'Response Time', value: '<200ms' },
    { label: 'Accuracy', value: '99.5%' },
    { label: 'Languages', value: '50+' },
    { label: 'Concurrent Users', value: '10,000+' },
    { label: 'API Availability', value: '99.9%' },
    { label: 'Voice Formats', value: 'All Major' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-deepvox-black to-deepvox-gray text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center bg-deepvox-accent bg-opacity-20 border border-deepvox-accent border-opacity-30 rounded-full px-6 py-2 mb-6">
              <MessageSquare className="w-4 h-4 mr-2 text-deepvox-accent" />
              <span className="text-sm font-medium">Natural Language AI</span>
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Voice AI Platform
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Advanced conversational AI with natural language processing, multi-language support, 
              and real-time voice interaction capabilities for enterprise applications.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm mb-8">
              <span className="bg-white bg-opacity-10 px-4 py-2 rounded-full">50+ Languages</span>
              <span className="bg-white bg-opacity-10 px-4 py-2 rounded-full">Real-time Processing</span>
              <span className="bg-white bg-opacity-10 px-4 py-2 rounded-full">99.5% Accuracy</span>
              <span className="bg-white bg-opacity-10 px-4 py-2 rounded-full">Enterprise Scale</span>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-deepvox-blue hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold inline-flex items-center transition-colors duration-200"
              >
                Get Voice AI Demo
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Core Features */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-deepvox-black mb-4">
              Enterprise Voice AI Capabilities
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive voice AI platform designed for enterprise-scale deployment 
              with advanced natural language understanding and processing.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {voiceFeatures.map((feature, index) => (
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
                  {feature.features.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-deepvox-accent mr-2" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-deepvox-black mb-4">
              Technical Specifications
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Enterprise-grade performance metrics and capabilities designed for 
              mission-critical voice AI applications.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {technicalSpecs.map((spec, index) => (
              <div
                key={index}
                className="text-center p-6 bg-gray-50 rounded-xl hover:bg-white hover:shadow-lg transition-all duration-300"
              >
                <div className="text-3xl font-bold text-deepvox-blue mb-2">
                  {spec.value}
                </div>
                <div className="text-sm text-gray-600">
                  {spec.label}
                </div>
              </div>
            ))}
          </div>

          {/* Voice AI Architecture */}
          <div className="mt-16 bg-gradient-to-r from-deepvox-blue to-deepvox-accent rounded-2xl p-8 text-white">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-4">Voice AI Architecture</h3>
              <p className="text-blue-100 max-w-3xl mx-auto">
                Multi-layer architecture optimized for real-time voice processing with 
                enterprise security and scalability.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-white bg-opacity-20 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Volume2 className="w-6 h-6" />
                </div>
                <h4 className="font-semibold mb-2">Audio Processing</h4>
                <p className="text-sm text-blue-100">Advanced signal processing</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-white bg-opacity-20 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Brain className="w-6 h-6" />
                </div>
                <h4 className="font-semibold mb-2">NLP Engine</h4>
                <p className="text-sm text-blue-100">Intent and context understanding</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-white bg-opacity-20 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Zap className="w-6 h-6" />
                </div>
                <h4 className="font-semibold mb-2">Response Generation</h4>
                <p className="text-sm text-blue-100">Real-time AI responses</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-white bg-opacity-20 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Shield className="w-6 h-6" />
                </div>
                <h4 className="font-semibold mb-2">Security Layer</h4>
                <p className="text-sm text-blue-100">Privacy-first processing</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-deepvox-black mb-4">
              Voice AI Use Cases & Results
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how organizations are leveraging our Voice AI Platform to transform 
              customer interactions and operational efficiency.
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

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-deepvox-black mb-4">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-6">
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-deepvox-black mb-3">
                What languages does the Voice AI Platform support?
              </h3>
              <p className="text-gray-600">
                Our Voice AI Platform supports 50+ languages including English, Spanish, French, German, Japanese, Mandarin, and many others, with real-time translation capabilities.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-deepvox-black mb-3">
                How does DeepVox ensure voice data privacy?
              </h3>
              <p className="text-gray-600">
                Voice data is processed using homomorphic encryption and federated learning, ensuring that sensitive audio data never leaves your secure environment while still enabling AI processing.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-deepvox-black mb-3">
                Can the Voice AI Platform integrate with existing systems?
              </h3>
              <p className="text-gray-600">
                Yes, our Voice AI Platform provides REST APIs, WebSocket connections, and SDKs for popular programming languages, enabling seamless integration with existing applications and workflows.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-deepvox-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Ready to Transform with Voice AI?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Experience the power of enterprise-grade voice AI with our interactive demo 
            and see how it can transform your organization's communication.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-deepvox-blue hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200"
            >
              Get Voice AI Demo
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default VoiceAI;