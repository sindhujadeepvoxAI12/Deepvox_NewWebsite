import React from 'react';
import { Link } from 'react-router-dom';
import { Building, Cpu, BarChart3, Zap, Settings, Globe, ArrowRight, CheckCircle, TrendingUp, Shield, Database, Cloud, Eye } from 'lucide-react';

const DigitalTwin: React.FC = () => {
  const digitalTwinTypes = [
    {
      icon: <Building className="w-8 h-8 text-deepvox-blue" />,
      title: 'Asset Digital Twins',
      description: 'Virtual replicas of physical equipment, machinery, and infrastructure for predictive maintenance and optimization.',
      features: ['Equipment Monitoring', 'Predictive Maintenance', 'Performance Analytics', 'Lifecycle Management']
    },
    {
      icon: <Settings className="w-8 h-8 text-deepvox-accent" />,
      title: 'Process Digital Twins',
      description: 'Digital models of business processes and workflows for optimization, simulation, and continuous improvement.',
      features: ['Process Simulation', 'Workflow Optimization', 'Bottleneck Analysis', 'Efficiency Metrics']
    },
    {
      icon: <Globe className="w-8 h-8 text-deepvox-blue" />,
      title: 'System Digital Twins',
      description: 'Comprehensive digital representations of entire systems, facilities, or operations for holistic management.',
      features: ['System Integration', 'Holistic Monitoring', 'Cross-system Analytics', 'Strategic Planning']
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-deepvox-accent" />,
      title: 'Performance Digital Twins',
      description: 'AI-powered models that predict and optimize performance across various operational dimensions.',
      features: ['Performance Prediction', 'Optimization Algorithms', 'Real-time Adjustments', 'KPI Tracking']
    }
  ];

  const industryApplications = [
    {
      industry: 'Manufacturing',
      icon: '🏭',
      applications: [
        'Production Line Optimization',
        'Equipment Predictive Maintenance',
        'Quality Control Simulation',
        'Supply Chain Digital Twins',
        'Energy Consumption Optimization',
        'Safety Protocol Simulation'
      ],
      benefits: ['40% reduction in downtime', '30% maintenance cost savings', '25% energy efficiency improvement']
    },
    {
      industry: 'Healthcare',
      icon: '🏥',
      applications: [
        'Patient Digital Twins',
        'Hospital Operations Modeling',
        'Treatment Simulation',
        'Drug Discovery Acceleration',
        'Medical Device Optimization',
        'Epidemic Modeling'
      ],
      benefits: ['50% faster drug discovery', '35% improved treatment outcomes', '60% better resource allocation']
    },
    {
      industry: 'Smart Cities',
      icon: '🏙️',
      applications: [
        'Traffic Flow Optimization',
        'Energy Grid Management',
        'Infrastructure Planning',
        'Emergency Response Simulation',
        'Environmental Monitoring',
        'Public Service Optimization'
      ],
      benefits: ['30% traffic congestion reduction', '25% energy savings', '40% faster emergency response']
    },
    {
      industry: 'Financial Services',
      icon: '🏦',
      applications: [
        'Risk Model Simulation',
        'Portfolio Optimization',
        'Market Scenario Testing',
        'Operational Risk Modeling',
        'Customer Journey Mapping',
        'Regulatory Compliance Testing'
      ],
      benefits: ['45% better risk prediction', '20% portfolio performance improvement', '60% faster compliance testing']
    }
  ];

  const technicalCapabilities = [
    {
      icon: <Database className="w-6 h-6 text-deepvox-blue" />,
      title: 'Real-time Data Integration',
      description: 'Seamless integration with IoT sensors, enterprise systems, and external data sources for real-time synchronization.'
    },
    {
      icon: <Cpu className="w-6 h-6 text-deepvox-accent" />,
      title: 'Advanced Simulation Engine',
      description: 'High-fidelity physics-based and AI-powered simulation capabilities for accurate modeling and prediction.'
    },
    {
      icon: <Cloud className="w-6 h-6 text-deepvox-blue" />,
      title: 'Scalable Cloud Architecture',
      description: 'Enterprise-grade cloud infrastructure that scales from single assets to entire ecosystems.'
    },
    {
      icon: <Shield className="w-6 h-6 text-deepvox-accent" />,
      title: 'Enterprise Security',
      description: 'SOC2 certified platform with end-to-end encryption and comprehensive access controls.'
    }
  ];

  const implementationSteps = [
    {
      step: 1,
      title: 'Assessment & Planning',
      description: 'Evaluate current systems, define objectives, and create implementation roadmap.',
      duration: '2-4 weeks'
    },
    {
      step: 2,
      title: 'Data Integration',
      description: 'Connect data sources, establish real-time feeds, and validate data quality.',
      duration: '3-6 weeks'
    },
    {
      step: 3,
      title: 'Model Development',
      description: 'Build digital twin models, calibrate simulations, and validate accuracy.',
      duration: '6-12 weeks'
    },
    {
      step: 4,
      title: 'Deployment & Training',
      description: 'Deploy platform, train users, and establish monitoring procedures.',
      duration: '2-4 weeks'
    },
    {
      step: 5,
      title: 'Optimization & Scale',
      description: 'Continuous improvement, model refinement, and expansion to additional use cases.',
      duration: 'Ongoing'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-deepvox-black to-deepvox-gray text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center bg-deepvox-blue bg-opacity-20 border border-deepvox-blue border-opacity-30 rounded-full px-6 py-2 mb-6">
              <Building className="w-4 h-4 mr-2 text-deepvox-blue" />
              <span className="text-sm font-medium">Advanced Simulation Technology</span>
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Digital Twin Platform
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Create intelligent digital replicas of your physical assets, processes, and systems. 
              Enable predictive analytics, optimization, and strategic planning with real-time insights.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm mb-8">
              <span className="bg-white bg-opacity-10 px-4 py-2 rounded-full">Real-time Simulation</span>
              <span className="bg-white bg-opacity-10 px-4 py-2 rounded-full">Predictive Analytics</span>
              <span className="bg-white bg-opacity-10 px-4 py-2 rounded-full">IoT Integration</span>
              <span className="bg-white bg-opacity-10 px-4 py-2 rounded-full">Enterprise Scale</span>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-deepvox-blue hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold inline-flex items-center transition-colors duration-200"
              >
                Try out Digital Twin Platform
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Digital Twin Types */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-deepvox-black mb-4">
              Comprehensive Digital Twin Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our digital twin platform supports multiple types of digital replicas, 
              from individual assets to complex systems and processes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {digitalTwinTypes.map((type, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="flex items-center mb-6">
                  {type.icon}
                  <h3 className="text-xl font-bold text-deepvox-black ml-4">
                    {type.title}
                  </h3>
                </div>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {type.description}
                </p>

                <div className="space-y-3">
                  {type.features.map((feature, featureIndex) => (
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

      {/* Technical Capabilities */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-deepvox-black mb-4">
              Advanced Technical Capabilities
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Built on cutting-edge simulation technology with enterprise-grade security, 
              scalability, and integration capabilities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {technicalCapabilities.map((capability, index) => (
              <div
                key={index}
                className="text-center p-6 bg-gray-50 rounded-xl hover:bg-white hover:shadow-lg transition-all duration-300"
              >
                <div className="flex justify-center mb-4">
                  {capability.icon}
                </div>
                <h3 className="text-lg font-bold text-deepvox-black mb-3">
                  {capability.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {capability.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Applications */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-deepvox-black mb-4">
              Industry Applications & Results
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Digital twins are transforming operations across industries, delivering 
              measurable improvements in efficiency, cost reduction, and performance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {industryApplications.map((industry, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center mb-6">
                  <span className="text-3xl mr-4">{industry.icon}</span>
                  <h3 className="text-2xl font-bold text-deepvox-black">
                    {industry.industry}
                  </h3>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-deepvox-black mb-3">Key Applications:</h4>
                  <div className="grid grid-cols-1 gap-2">
                    {industry.applications.map((app, appIndex) => (
                      <div key={appIndex} className="flex items-center text-sm text-gray-600">
                        <div className="w-2 h-2 bg-deepvox-blue rounded-full mr-3 flex-shrink-0"></div>
                        {app}
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-deepvox-black mb-3">Proven Benefits:</h4>
                  <div className="space-y-2">
                    {industry.benefits.map((benefit, benefitIndex) => (
                      <div key={benefitIndex} className="flex items-center text-sm">
                        <TrendingUp className="w-4 h-4 text-deepvox-accent mr-2 flex-shrink-0" />
                        <span className="font-medium text-deepvox-black">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Implementation Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-deepvox-black mb-4">
              Digital Twin Implementation Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our proven methodology ensures successful digital twin deployment 
              with measurable business impact.
            </p>
          </div>

          <div className="space-y-8">
            {implementationSteps.map((step, index) => (
              <div
                key={index}
                className="flex items-start space-x-6 bg-gray-50 rounded-xl p-6 hover:bg-white hover:shadow-lg transition-all duration-300"
              >
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-deepvox-blue rounded-full flex items-center justify-center text-white font-bold text-lg">
                    {step.step}
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-bold text-deepvox-black">
                      {step.title}
                    </h3>
                    <span className="text-sm text-deepvox-blue font-medium bg-blue-50 px-3 py-1 rounded-full">
                      {step.duration}
                    </span>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
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
              Digital Twin Platform Performance
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Enterprise-grade performance metrics that ensure reliable, 
              accurate, and scalable digital twin operations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8" />
              </div>
              <div className="text-4xl font-bold mb-2">99.9%</div>
              <div className="text-blue-100">Simulation Accuracy</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Eye className="w-8 h-8" />
              </div>
              <div className="text-4xl font-bold mb-2">24/7</div>
              <div className="text-blue-100">Real-time Monitoring</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <BarChart3 className="w-8 h-8" />
              </div>
              <div className="text-4xl font-bold mb-2">95%</div>
              <div className="text-blue-100">Predictive Accuracy</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8" />
              </div>
              <div className="text-4xl font-bold mb-2">50%</div>
              <div className="text-blue-100">Average Cost Reduction</div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-deepvox-black mb-4">
              Digital Twin FAQ
            </h2>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-lg p-6">
              <h3 className="text-lg font-semibold text-deepvox-black mb-3">
                What is a digital twin and how does it work?
              </h3>
              <p className="text-gray-600">
                A digital twin is a virtual replica of a physical asset, process, or system that uses real-time data to mirror its physical counterpart. It enables simulation, monitoring, and optimization through AI-powered analytics and predictive modeling.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6">
              <h3 className="text-lg font-semibold text-deepvox-black mb-3">
                What types of systems can be digitally twinned?
              </h3>
              <p className="text-gray-600">
                Our platform can create digital twins for manufacturing equipment, healthcare systems, smart buildings, supply chains, financial portfolios, and entire business processes. Any system with measurable parameters can be digitally twinned.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6">
              <h3 className="text-lg font-semibold text-deepvox-black mb-3">
                How accurate are the digital twin simulations?
              </h3>
              <p className="text-gray-600">
                Our digital twins achieve 99.9% simulation accuracy through advanced physics-based modeling, machine learning algorithms, and continuous calibration with real-time data from IoT sensors and enterprise systems.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6">
              <h3 className="text-lg font-semibold text-deepvox-black mb-3">
                What ROI can I expect from digital twin implementation?
              </h3>
              <p className="text-gray-600">
                Organizations typically see 20-50% cost reductions, 30-60% improvement in operational efficiency, and 40-80% reduction in unplanned downtime. ROI is usually achieved within 6-12 months of implementation.
              </p>
            </div>
          </div>
        </div>
      </section>


    </div>
  );
};

export default DigitalTwin;