import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Shield, Brain, Layers, BarChart3, Users, ArrowRight, CheckCircle, Zap, Eye, Lock, Database, Cloud, Server, Globe, Code, Cpu } from 'lucide-react';

const EnterpriseAIStack: React.FC = () => {
  const [activeLayer, setActiveLayer] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const stackLayers = [
    {
      level: 5,
      name: 'Experience Layer',
      icon: <Users className="w-8 h-8 text-white" />,
      color: 'from-emerald-500 to-teal-600',
      borderColor: 'border-emerald-500',
      description: 'User interfaces, APIs, and interaction points that deliver AI capabilities to end users',
      components: ['Web Applications', 'Mobile Apps', 'API Gateway', 'Voice Interfaces', 'Chatbots', 'Dashboards'],
      benefits: ['Enhanced User Experience', 'Multi-channel Access', 'Personalization', 'Real-time Interaction'],
      technologies: ['React', 'React Native', 'GraphQL', 'WebRTC', 'WebSocket', 'Progressive Web Apps']
    },
    {
      level: 4,
      name: 'Insights Layer',
      icon: <BarChart3 className="w-8 h-8 text-white" />,
      color: 'from-blue-500 to-indigo-600',
      borderColor: 'border-blue-500',
      description: 'Analytics, reporting, and business intelligence that transform data into actionable insights',
      components: ['Real-time Analytics', 'Custom Dashboards', 'Predictive Models', 'Business Intelligence', 'Data Visualization', 'KPI Monitoring'],
      benefits: ['Data-Driven Decisions', 'Predictive Analytics', 'Performance Monitoring', 'Strategic Planning'],
      technologies: ['Apache Spark', 'Elasticsearch', 'Tableau', 'Power BI', 'TensorFlow', 'Apache Kafka']
    },
    {
      level: 3,
      name: 'Orchestration Layer',
      icon: <Layers className="w-8 h-8 text-white" />,
      color: 'from-purple-500 to-violet-600',
      borderColor: 'border-purple-500',
      description: 'Workflow management and process automation that coordinates AI operations across systems',
      components: ['Workflow Engine', 'Process Automation', 'Task Scheduling', 'Event Processing', 'API Orchestration', 'Service Mesh'],
      benefits: ['Automated Workflows', 'Process Optimization', 'Scalable Operations', 'System Integration'],
      technologies: ['Kubernetes', 'Apache Airflow', 'Istio', 'Redis', 'RabbitMQ', 'Docker Swarm']
    },
    {
      level: 2,
      name: 'AI Platform Layer',
      icon: <Brain className="w-8 h-8 text-white" />,
      color: 'from-indigo-500 to-blue-600',
      borderColor: 'border-indigo-500',
      description: 'Core AI models, ML operations, and model management infrastructure',
      components: ['LLM Models', 'ML Pipeline', 'Model Registry', 'Training Infrastructure', 'Inference Engine', 'AutoML'],
      benefits: ['Advanced AI Capabilities', 'Model Governance', 'Continuous Learning', 'Scalable Inference'],
      technologies: ['PyTorch', 'TensorFlow', 'Hugging Face', 'MLflow', 'Kubeflow', 'NVIDIA Triton']
    },
    {
      level: 1,
      name: 'Security & Compliance',
      icon: <Shield className="w-8 h-8 text-white" />,
      color: 'from-red-500 to-pink-600',
      borderColor: 'border-red-500',
      description: 'Privacy-first foundation with enterprise-grade security and regulatory compliance',
      components: ['Homomorphic Encryption', 'Zero-Trust Architecture', 'Compliance Framework', 'Audit Logging', 'Identity Management', 'Data Governance'],
      benefits: ['Data Privacy', 'Regulatory Compliance', 'Risk Mitigation', 'Trust & Transparency'],
      technologies: ['HashiCorp Vault', 'Keycloak', 'OpenPolicyAgent', 'Falco', 'Istio', 'Cert-Manager']
    }
  ];

  const keyFeatures = [
    {
      icon: <Shield className="w-12 h-12 text-deepvox-blue" />,
      title: 'Privacy-First Architecture',
      description: 'Built with homomorphic encryption and federated learning to protect sensitive data throughout the AI pipeline.',
      metrics: ['256-bit Encryption', 'Zero-Knowledge Processing', 'GDPR Compliant']
    },
    {
      icon: <Zap className="w-12 h-12 text-deepvox-accent" />,
      title: 'Rapid Deployment',
      description: '3x faster implementation compared to traditional AI solutions with pre-built modules and automated setup.',
      metrics: ['3x Faster Setup', '90% Pre-configured', '24hr Deployment']
    },
    {
      icon: <Layers className="w-12 h-12 text-deepvox-blue" />,
      title: 'Modular Design',
      description: 'Implement layers independently or as a complete system based on your specific needs and timeline.',
      metrics: ['5 Independent Layers', 'Flexible Integration', 'Scalable Architecture']
    }
  ];

  const architectureBenefits = [
    {
      icon: <Database className="w-6 h-6 text-deepvox-blue" />,
      title: 'Data Sovereignty',
      description: 'Maintain complete control over your data with on-premises and hybrid deployment options.'
    },
    {
      icon: <Cloud className="w-6 h-6 text-deepvox-accent" />,
      title: 'Cloud Native',
      description: 'Built for modern cloud environments with auto-scaling and container orchestration.'
    },
    {
      icon: <Server className="w-6 h-6 text-deepvox-blue" />,
      title: 'Enterprise Scale',
      description: 'Handle millions of transactions with enterprise-grade performance and reliability.'
    },
    {
      icon: <Globe className="w-6 h-6 text-deepvox-accent" />,
      title: 'Global Deployment',
      description: 'Deploy across multiple regions with data residency and compliance requirements.'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 overflow-hidden">
      {/* Hero Section with Parallax Effect */}
      <section className="relative bg-gradient-to-br from-deepvox-black via-deepvox-gray to-deepvox-black text-white py-20 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-deepvox-blue rounded-full opacity-20 animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-deepvox-accent rounded-full opacity-15 animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-deepvox-blue to-deepvox-accent rounded-full opacity-10 animate-spin" style={{ animationDuration: '20s' }}></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className={`inline-flex items-center bg-deepvox-blue bg-opacity-20 border border-deepvox-blue border-opacity-30 rounded-full px-6 py-2 mb-8 transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <Brain className="w-4 h-4 mr-2 text-deepvox-accent animate-pulse" />
              <span className="text-sm font-medium">Proprietary 5-Layer Framework</span>
            </div>
            
            <h1 className={`text-4xl lg:text-6xl font-bold mb-6 leading-tight transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{ transitionDelay: '0.2s' }}>
              Enterprise AI Stack™
            </h1>
            
            <p className={`text-xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{ transitionDelay: '0.4s' }}>
              A comprehensive 5-layer framework for systematic enterprise AI implementation 
              with privacy-first design and enterprise-grade security.
            </p>

            <div className={`flex flex-wrap justify-center gap-4 text-sm mb-8 transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{ transitionDelay: '0.6s' }}>
              {['Privacy-First Design', 'Enterprise Scale', 'Modular Architecture', 'Rapid Deployment'].map((feature, index) => (
                <span key={index} className="bg-white bg-opacity-10 px-4 py-2 rounded-full hover:bg-opacity-20 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1">
                  {feature}
                </span>
              ))}
            </div>
            
            <div className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{ transitionDelay: '0.8s' }}>
              <Link
                to="/contact"
                className="bg-deepvox-blue hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold inline-flex items-center transition-all duration-300 transform hover:scale-105 hover:-translate-y-2 shadow-lg hover:shadow-2xl group relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-all duration-700"></div>
                <span className="relative z-10">Get Implementation Guide</span>
                <ArrowRight className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-2 relative z-10" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Stack Architecture */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-deepvox-black mb-4">
              Interactive 5-Layer Architecture
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore each layer of our proprietary framework. Click on any layer to see detailed components and benefits.
            </p>
          </div>

          <div className="relative">
            {/* Stack Visualization */}
            <div className="space-y-4">
              {stackLayers.map((layer, index) => (
                <div
                  key={index}
                  className={`relative transition-all duration-500 transform ${
                    activeLayer === layer.level 
                      ? 'scale-105 z-20' 
                      : activeLayer !== null 
                        ? 'scale-95 opacity-60' 
                        : 'scale-100 opacity-100'
                  }`}
                  onMouseEnter={() => setActiveLayer(layer.level)}
                  onMouseLeave={() => setActiveLayer(null)}
                >
                  <div className={`bg-gradient-to-r ${layer.color} rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer border-2 ${layer.borderColor} relative overflow-hidden group`}>
                    {/* Animated Background Pattern */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500">
                      <div className="absolute top-0 right-0 w-32 h-32 bg-white rounded-full transform translate-x-16 -translate-y-16 group-hover:scale-150 transition-transform duration-1000"></div>
                      <div className="absolute bottom-0 left-0 w-24 h-24 bg-white rounded-full transform -translate-x-12 translate-y-12 group-hover:scale-150 transition-transform duration-1000"></div>
                    </div>

                    <div className="relative z-10">
                      <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center space-x-4">
                          <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center backdrop-blur-sm transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12">
                            <span className="text-2xl font-bold text-white">{layer.level}</span>
                          </div>
                          <div className="flex items-center space-x-3">
                            <div className="transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                              {layer.icon}
                            </div>
                            <div>
                              <h3 className="text-2xl font-bold text-white">{layer.name}</h3>
                              <p className="text-white text-opacity-90">{layer.description}</p>
                            </div>
                          </div>
                        </div>
                        <ArrowRight className="w-6 h-6 text-white opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-2" />
                      </div>

                      {/* Expandable Content */}
                      <div className={`transition-all duration-500 overflow-hidden ${
                        activeLayer === layer.level ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                      }`}>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 border-t border-white border-opacity-20">
                          {/* Components */}
                          <div>
                            <h4 className="font-semibold text-white mb-3 flex items-center">
                              <Code className="w-4 h-4 mr-2" />
                              Components
                            </h4>
                            <div className="space-y-2">
                              {layer.components.map((component, componentIndex) => (
                                <div key={componentIndex} className="flex items-center text-sm text-white text-opacity-90 transform transition-all duration-300 hover:translate-x-2">
                                  <div className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse"></div>
                                  {component}
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* Benefits */}
                          <div>
                            <h4 className="font-semibold text-white mb-3 flex items-center">
                              <CheckCircle className="w-4 h-4 mr-2" />
                              Benefits
                            </h4>
                            <div className="space-y-2">
                              {layer.benefits.map((benefit, benefitIndex) => (
                                <div key={benefitIndex} className="flex items-center text-sm text-white text-opacity-90 transform transition-all duration-300 hover:translate-x-2">
                                  <CheckCircle className="w-4 h-4 text-white mr-2 flex-shrink-0" />
                                  {benefit}
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* Technologies */}
                          <div>
                            <h4 className="font-semibold text-white mb-3 flex items-center">
                              <Cpu className="w-4 h-4 mr-2" />
                              Technologies
                            </h4>
                            <div className="flex flex-wrap gap-2">
                              {layer.technologies.map((tech, techIndex) => (
                                <span key={techIndex} className="bg-white bg-opacity-20 text-white text-xs px-2 py-1 rounded-full hover:bg-opacity-30 transition-all duration-300 transform hover:scale-105">
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Interactive Guide */}
            <div className="text-center mt-8">
              <p className="text-gray-600 text-sm animate-bounce">
                💡 Hover over any layer to explore its components and technologies
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features with Animated Cards */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-deepvox-black mb-4">
              Why Choose Enterprise AI Stack™?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our proprietary framework has been proven across 200+ enterprise implementations 
              with measurable results and industry-leading performance.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {keyFeatures.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 hover:scale-105 group relative overflow-hidden"
                style={{ 
                  animationDelay: `${index * 0.2}s`,
                  animation: isVisible ? 'fadeInUp 0.8s ease-out forwards' : 'none',
                  opacity: isVisible ? 1 : 0
                }}
              >
                {/* Animated Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-deepvox-blue to-deepvox-accent opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>
                
                {/* Floating Icon */}
                <div className="flex justify-center mb-6">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-deepvox-blue to-deepvox-accent rounded-full opacity-20 animate-ping"></div>
                    <div className="relative bg-gradient-to-r from-deepvox-blue to-deepvox-accent p-4 rounded-full transition-transform duration-500 group-hover:scale-110 group-hover:rotate-12">
                      {feature.icon}
                    </div>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-deepvox-black mb-4 text-center transition-colors duration-300 group-hover:text-deepvox-blue">
                  {feature.title}
                </h3>
                
                <p className="text-gray-600 mb-6 text-center leading-relaxed transition-colors duration-300 group-hover:text-gray-700">
                  {feature.description}
                </p>

                {/* Metrics */}
                <div className="flex justify-center space-x-4">
                  {feature.metrics.map((metric, metricIndex) => (
                    <div key={metricIndex} className="text-center">
                      <div className="bg-gradient-to-r from-deepvox-blue to-deepvox-accent text-white text-xs px-3 py-1 rounded-full font-semibold transition-transform duration-300 hover:scale-105">
                        {metric}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Architecture Benefits */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-deepvox-black mb-4">
              Enterprise Architecture Benefits
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Built for enterprise requirements with scalability, security, and compliance at every layer.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {architectureBenefits.map((benefit, index) => (
              <div
                key={index}
                className="text-center p-6 bg-gray-50 rounded-xl hover:bg-white hover:shadow-lg transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 group"
              >
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-gradient-to-r from-deepvox-blue to-deepvox-accent rounded-full transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12">
                    {benefit.icon}
                  </div>
                </div>
                <h3 className="text-lg font-bold text-deepvox-black mb-3 transition-colors duration-300 group-hover:text-deepvox-blue">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed transition-colors duration-300 group-hover:text-gray-700">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Performance Metrics with Animated Counters */}
      <section className="py-20 bg-gradient-to-r from-deepvox-blue to-deepvox-accent text-white relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full opacity-5 animate-pulse transform -translate-x-32 -translate-y-32"></div>
          <div className="absolute bottom-0 right-0 w-48 h-48 bg-white rounded-full opacity-5 animate-pulse transform translate-x-24 translate-y-24" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Proven Enterprise Performance
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Real metrics from successful implementations across industries.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { number: '3x', label: 'Faster Deployment', icon: <Zap className="w-8 h-8" /> },
              { number: '50%', label: 'Cost Reduction', icon: <BarChart3 className="w-8 h-8" /> },
              { number: '99.9%', label: 'Uptime SLA', icon: <Shield className="w-8 h-8" /> }
            ].map((metric, index) => (
              <div
                key={index}
                className="text-center group"
              >
                <div className="w-20 h-20 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4 transition-all duration-500 group-hover:scale-125 group-hover:rotate-12 group-hover:bg-opacity-30">
                  {metric.icon}
                </div>
                <div className="text-4xl font-bold mb-2 transition-transform duration-300 group-hover:scale-110">
                  {metric.number}
                </div>
                <div className="text-blue-100 transition-colors duration-300 group-hover:text-white">
                  {metric.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ROI Calculator CTA with Animation */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-deepvox-black via-deepvox-gray to-deepvox-black rounded-3xl p-12 text-white text-center relative overflow-hidden">
            {/* Animated Background Elements */}
            <div className="absolute inset-0">
              <div className="absolute top-0 left-1/4 w-32 h-32 bg-deepvox-blue rounded-full opacity-20 animate-float"></div>
              <div className="absolute bottom-0 right-1/4 w-24 h-24 bg-deepvox-accent rounded-full opacity-20 animate-float" style={{ animationDelay: '2s' }}></div>
              <div className="absolute top-1/2 left-0 w-16 h-16 bg-deepvox-blue rounded-full opacity-15 animate-float" style={{ animationDelay: '1s' }}></div>
            </div>

            <div className="relative z-10">
              <div className="inline-flex items-center bg-deepvox-blue bg-opacity-30 rounded-full px-6 py-2 mb-6">
                <BarChart3 className="w-4 h-4 mr-2 text-deepvox-accent animate-pulse" />
                <span className="text-sm font-medium">Interactive ROI Calculator</span>
              </div>
              
              <h3 className="text-3xl font-bold mb-4">
                Calculate Your AI Transformation ROI
              </h3>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
                See how the Enterprise AI Stack™ can transform your organization with our 
                interactive ROI calculator. Get personalized projections based on your industry and scale.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-deepvox-blue hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:-translate-y-2 shadow-lg hover:shadow-2xl group relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-all duration-700"></div>
                  <span className="relative z-10 flex items-center">
                    <BarChart3 className="w-5 h-5 mr-2" />
                    Try ROI Calculator
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section with Accordion Animation */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-deepvox-black mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Get answers to common questions about the Enterprise AI Stack™.
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                question: "What is the DeepVox Enterprise AI Stack™?",
                answer: "The DeepVox Enterprise AI Stack™ is a proprietary five-layer framework for systematic enterprise AI implementation, covering security/compliance, AI platform, orchestration, insights, and experience layers."
              },
              {
                question: "How does DeepVox ensure data privacy?",
                answer: "DeepVox uses homomorphic encryption, federated learning, differential privacy, and zero-knowledge proofs to protect data while enabling AI processing."
              },
              {
                question: "What industries does the Enterprise AI Stack™ serve?",
                answer: "The Enterprise AI Stack™ serves healthcare, finance, manufacturing, retail, legal, government, insurance, real estate, and B2B sales industries with industry-specific compliance and security requirements."
              },
              {
                question: "How long does implementation typically take?",
                answer: "Implementation typically takes 3-6 months depending on scope and complexity, which is 3x faster than traditional AI implementations due to our modular, pre-built framework."
              }
            ].map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group"
              >
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-deepvox-black mb-3 transition-colors duration-300 group-hover:text-deepvox-blue">
                    {faq.question}
                  </h3>
                  <p className="text-gray-600 leading-relaxed transition-colors duration-300 group-hover:text-gray-700">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


    </div>
  );
};

export default EnterpriseAIStack;