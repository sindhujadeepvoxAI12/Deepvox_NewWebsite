import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Brain, Layers, Server, Database, Cloud, ArrowRight, CheckCircle, Zap, Lock } from 'lucide-react';

const Technology: React.FC = () => {
  const technologyAreas = [
    {
      icon: <Shield className="w-8 h-8 text-deepvox-blue" />,
      title: 'Security & Privacy',
      description: 'Privacy-first AI architecture with homomorphic encryption, federated learning, and zero-trust security.',
      href: '/technology/security',
      features: ['Homomorphic Encryption', 'Federated Learning', 'Zero-Trust Architecture', 'Differential Privacy']
    },
    {
      icon: <Brain className="w-8 h-8 text-deepvox-accent" />,
      title: 'AI Models & Platforms',
      description: 'Comprehensive AI model library including open-source and commercial LLMs with model management.',
      href: '/technology/ai-models',
      features: ['Open Source Models', 'Commercial LLMs', 'Model Registry', 'Custom Training']
    },
    {
      icon: <Layers className="w-8 h-8 text-deepvox-blue" />,
      title: 'Integration Capabilities',
      description: 'Seamless integration with enterprise systems including ERP, CRM, and business intelligence platforms.',
      href: '/technology/integrations',
      features: ['API Gateway', 'Enterprise Connectors', 'Real-time Sync', 'Data Transformation']
    },
    {
      icon: <Server className="w-8 h-8 text-deepvox-accent" />,
      title: 'Infrastructure & Deployment',
      description: 'Multi-cloud, hybrid, and on-premises deployment options with container orchestration and MLOps.',
      href: '/technology/infrastructure',
      features: ['Multi-Cloud Support', 'Container Orchestration', 'MLOps Pipeline', 'Edge Computing']
    }
  ];

  const techStack = [
    {
      category: 'AI Frameworks',
      technologies: ['TensorFlow', 'PyTorch', 'Hugging Face', 'LangChain', 'OpenAI', 'Anthropic']
    },
    {
      category: 'Security',
      technologies: ['Homomorphic Encryption', 'Zero-Knowledge Proofs', 'Differential Privacy', 'Secure Multi-party Computation']
    },
    {
      category: 'Infrastructure',
      technologies: ['Kubernetes', 'Docker', 'AWS', 'Azure', 'GCP', 'Terraform']
    },
    {
      category: 'Data Processing',
      technologies: ['Apache Spark', 'Apache Kafka', 'Elasticsearch', 'Redis', 'PostgreSQL', 'MongoDB']
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-deepvox-black to-deepvox-gray text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center bg-deepvox-blue bg-opacity-20 border border-deepvox-blue border-opacity-30 rounded-full px-6 py-2 mb-6">
              <Zap className="w-4 h-4 mr-2 text-deepvox-accent" />
              <span className="text-sm font-medium">Enterprise-Grade Technology</span>
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Advanced AI Technology Stack
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Built on cutting-edge privacy-preserving AI technologies with enterprise-grade 
              security, scalability, and integration capabilities.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm mb-8">
              <span className="bg-white bg-opacity-10 px-4 py-2 rounded-full">Privacy-First Architecture</span>
              <span className="bg-white bg-opacity-10 px-4 py-2 rounded-full">Multi-Cloud Deployment</span>
              <span className="bg-white bg-opacity-10 px-4 py-2 rounded-full">Enterprise Integration</span>
              <span className="bg-white bg-opacity-10 px-4 py-2 rounded-full">SOC2 Certified</span>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/technology/security"
                className="bg-deepvox-blue hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold inline-flex items-center transition-colors duration-200"
              >
                Explore Security Features
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/contact/demo"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-deepvox-black transition-all duration-200"
              >
                Request Technical Demo
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Areas */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-deepvox-black mb-4">
              Core Technology Pillars
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our technology stack is built on four foundational pillars that ensure security, 
              performance, integration, and scalability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {technologyAreas.map((area, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group"
              >
                <div className="flex items-center mb-6">
                  {area.icon}
                  <h3 className="text-2xl font-bold text-deepvox-black ml-4">
                    {area.title}
                  </h3>
                </div>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {area.description}
                </p>

                <div className="grid grid-cols-2 gap-3 mb-6">
                  {area.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-deepvox-accent mr-2 flex-shrink-0" />
                      {feature}
                    </div>
                  ))}
                </div>

                <Link
                  to={area.href}
                  className="inline-flex items-center text-deepvox-blue font-semibold hover:text-deepvox-accent transition-colors duration-200 group-hover:translate-x-1 transform"
                >
                  Learn More
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-deepvox-black mb-4">
              Technology Stack
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Built with industry-leading technologies and frameworks to ensure reliability, 
              performance, and enterprise-grade capabilities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {techStack.map((category, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-xl p-6 hover:bg-white hover:shadow-lg transition-all duration-300"
              >
                <h3 className="text-lg font-bold text-deepvox-black mb-4">
                  {category.category}
                </h3>
                <div className="space-y-3">
                  {category.technologies.map((tech, techIndex) => (
                    <div key={techIndex} className="flex items-center text-sm text-gray-600">
                      <div className="w-2 h-2 bg-deepvox-accent rounded-full mr-3 flex-shrink-0"></div>
                      {tech}
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
              Enterprise Performance Metrics
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Our technology stack delivers enterprise-grade performance and reliability 
              across all deployment scenarios.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">99.9%</div>
              <div className="text-blue-100">System Uptime</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">&lt;100ms</div>
              <div className="text-blue-100">API Response Time</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">10,000+</div>
              <div className="text-blue-100">Concurrent Users</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">256-bit</div>
              <div className="text-blue-100">Encryption Standard</div>
            </div>
          </div>
        </div>
      </section>

      {/* Architecture Diagram CTA */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-deepvox-black mb-4">
            Explore Our Architecture
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Get detailed technical documentation and architecture diagrams for your 
            implementation planning.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/resources/architecture"
              className="bg-deepvox-blue hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200"
            >
              View Architecture Guide
            </Link>
            <Link
              to="/contact"
              className="border-2 border-deepvox-blue text-deepvox-blue px-8 py-4 rounded-lg font-semibold hover:bg-deepvox-blue hover:text-white transition-all duration-200"
            >
              Speak with Technical Team
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Technology;