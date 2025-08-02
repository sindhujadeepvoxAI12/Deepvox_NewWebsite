import React from 'react';
import { Link } from 'react-router-dom';
import { Layers, Database, Cloud, Zap, Users, BarChart3, ArrowRight, CheckCircle, Settings, Globe, Shield, Code } from 'lucide-react';

const Integrations: React.FC = () => {
  const integrationCategories = [
    {
      icon: <Database className="w-8 h-8 text-deepvox-blue" />,
      title: 'Enterprise Resource Planning (ERP)',
      description: 'Seamless integration with major ERP systems for comprehensive business process automation.',
      systems: ['SAP S/4HANA', 'Oracle ERP Cloud', 'Microsoft Dynamics 365', 'NetSuite', 'Workday', 'Infor CloudSuite'],
      features: ['Real-time data sync', 'Automated workflows', 'Custom field mapping', 'Bi-directional integration']
    },
    {
      icon: <Users className="w-8 h-8 text-deepvox-accent" />,
      title: 'Customer Relationship Management (CRM)',
      description: 'Connect with leading CRM platforms to enhance customer intelligence and engagement.',
      systems: ['Salesforce', 'HubSpot', 'Microsoft Dynamics CRM', 'Pipedrive', 'Zoho CRM', 'SugarCRM'],
      features: ['Contact synchronization', 'Lead scoring automation', 'Activity tracking', 'Custom object support']
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-deepvox-blue" />,
      title: 'Business Intelligence & Analytics',
      description: 'Integrate with BI tools to enhance data visualization and reporting capabilities.',
      systems: ['Microsoft Power BI', 'Tableau', 'Qlik Sense', 'Looker', 'Amazon QuickSight', 'IBM Cognos'],
      features: ['Custom dashboards', 'Real-time analytics', 'Automated reporting', 'Data visualization']
    },
    {
      icon: <Cloud className="w-8 h-8 text-deepvox-accent" />,
      title: 'Cloud Platforms & Infrastructure',
      description: 'Deploy across multiple cloud environments with native platform integrations.',
      systems: ['AWS', 'Microsoft Azure', 'Google Cloud Platform', 'IBM Cloud', 'Oracle Cloud', 'Alibaba Cloud'],
      features: ['Multi-cloud deployment', 'Auto-scaling', 'Load balancing', 'Container orchestration']
    },
    {
      icon: <Settings className="w-8 h-8 text-deepvox-blue" />,
      title: 'Communication & Collaboration',
      description: 'Integrate with team communication tools for seamless workflow automation.',
      systems: ['Microsoft Teams', 'Slack', 'Zoom', 'Google Workspace', 'Cisco Webex', 'Discord'],
      features: ['Bot integration', 'Automated notifications', 'File sharing', 'Meeting transcription']
    },
    {
      icon: <Shield className="w-8 h-8 text-deepvox-accent" />,
      title: 'Security & Identity Management',
      description: 'Connect with enterprise security solutions for comprehensive access control.',
      systems: ['Active Directory', 'Okta', 'Auth0', 'Ping Identity', 'CyberArk', 'Azure AD'],
      features: ['Single sign-on (SSO)', 'Multi-factor authentication', 'Role-based access', 'Audit logging']
    }
  ];

  const industryIntegrations = [
    {
      industry: 'Healthcare',
      icon: '🏥',
      systems: ['Epic', 'Cerner', 'Allscripts', 'MEDITECH', 'NextGen', 'eClinicalWorks', 'athenahealth', 'Practice Fusion'],
      description: 'HIPAA-compliant integrations with major Electronic Health Record (EHR) and Electronic Medical Record (EMR) systems.'
    },
    {
      industry: 'Financial Services',
      icon: '🏦',
      systems: ['FIS', 'Fiserv', 'Jack Henry', 'Temenos', 'Oracle FLEXCUBE', 'Finastra', 'Mambu', 'nCino'],
      description: 'SOC2 certified integrations with core banking systems, trading platforms, and financial infrastructure.'
    },
    {
      industry: 'Manufacturing',
      icon: '🏭',
      systems: ['SAP Manufacturing', 'Oracle SCM', 'Siemens MES', 'Rockwell FactoryTalk', 'GE Predix', 'PTC ThingWorx'],
      description: 'Industrial IoT and manufacturing execution system integrations for smart factory operations.'
    },
    {
      industry: 'Retail & E-commerce',
      icon: '🛒',
      systems: ['Shopify', 'Magento', 'WooCommerce', 'BigCommerce', 'Salesforce Commerce', 'Adobe Commerce'],
      description: 'E-commerce platform integrations for customer analytics, inventory management, and personalization.'
    }
  ];

  const integrationMethods = [
    {
      icon: <Code className="w-6 h-6 text-deepvox-blue" />,
      title: 'REST APIs',
      description: 'Standard RESTful APIs with comprehensive documentation and SDKs for popular programming languages.',
      features: ['OpenAPI 3.0 specification', 'Rate limiting', 'Authentication tokens', 'Webhook support']
    },
    {
      icon: <Zap className="w-6 h-6 text-deepvox-accent" />,
      title: 'Real-time Streaming',
      description: 'WebSocket and event-driven integrations for real-time data processing and notifications.',
      features: ['WebSocket connections', 'Event streaming', 'Message queuing', 'Real-time updates']
    },
    {
      icon: <Database className="w-6 h-6 text-deepvox-blue" />,
      title: 'Database Connectors',
      description: 'Direct database connections with support for major SQL and NoSQL databases.',
      features: ['SQL databases', 'NoSQL databases', 'Data warehouses', 'ETL pipelines']
    },
    {
      icon: <Globe className="w-6 h-6 text-deepvox-accent" />,
      title: 'Pre-built Connectors',
      description: 'Ready-to-use connectors for popular enterprise applications with minimal configuration.',
      features: ['One-click setup', 'Auto-configuration', 'Field mapping', 'Data validation']
    }
  ];

  const technicalSpecs = [
    { label: 'API Response Time', value: '<100ms' },
    { label: 'Data Throughput', value: '1M+ records/hour' },
    { label: 'Concurrent Connections', value: '10,000+' },
    { label: 'Uptime SLA', value: '99.9%' },
    { label: 'Data Formats', value: 'JSON, XML, CSV, Parquet' },
    { label: 'Security Standards', value: 'OAuth 2.0, JWT, mTLS' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-deepvox-black to-deepvox-gray text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center bg-deepvox-accent bg-opacity-20 border border-deepvox-accent border-opacity-30 rounded-full px-6 py-2 mb-6">
              <Layers className="w-4 h-4 mr-2 text-deepvox-accent" />
              <span className="text-sm font-medium">Enterprise Integration Platform</span>
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Seamless Enterprise Integrations
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Connect DeepVox.ai with your existing enterprise systems through our comprehensive 
              integration platform. Support for 200+ enterprise applications and systems.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm mb-8">
              <span className="bg-white bg-opacity-10 px-4 py-2 rounded-full">200+ Integrations</span>
              <span className="bg-white bg-opacity-10 px-4 py-2 rounded-full">Real-time Sync</span>
              <span className="bg-white bg-opacity-10 px-4 py-2 rounded-full">Enterprise Security</span>
              <span className="bg-white bg-opacity-10 px-4 py-2 rounded-full">99.9% Uptime</span>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-deepvox-blue hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold inline-flex items-center transition-colors duration-200"
              >
                Explore Integrations
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Integration Categories */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-deepvox-black mb-4">
              Enterprise System Categories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Connect with leading enterprise applications across all major business functions 
              and operational areas.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {integrationCategories.map((category, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="flex items-center mb-4">
                  {category.icon}
                  <h3 className="text-xl font-bold text-deepvox-black ml-3">
                    {category.title}
                  </h3>
                </div>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {category.description}
                </p>

                <div className="mb-6">
                  <h4 className="font-semibold text-deepvox-black mb-3">Supported Systems:</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {category.systems.map((system, systemIndex) => (
                      <div key={systemIndex} className="text-sm text-gray-600 bg-gray-50 px-2 py-1 rounded">
                        {system}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <h4 className="font-semibold text-deepvox-black text-sm">Key Features:</h4>
                  {category.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-deepvox-accent mr-2 flex-shrink-0" />
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry-Specific Integrations */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-deepvox-black mb-4">
              Industry-Specific Integrations
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Specialized integrations designed for industry-specific systems and compliance requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {industryIntegrations.map((integration, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-xl p-8 hover:bg-white hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  <span className="text-3xl mr-4">{integration.icon}</span>
                  <h3 className="text-2xl font-bold text-deepvox-black">
                    {integration.industry}
                  </h3>
                </div>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {integration.description}
                </p>

                <div className="grid grid-cols-2 gap-3">
                  {integration.systems.map((system, systemIndex) => (
                    <div key={systemIndex} className="bg-white rounded-lg p-3 text-center shadow-sm">
                      <span className="text-sm font-medium text-deepvox-black">{system}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Methods */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-deepvox-black mb-4">
              Integration Methods & Technologies
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Multiple integration approaches to meet your technical requirements and preferences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {integrationMethods.map((method, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 text-center shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex justify-center mb-4">
                  {method.icon}
                </div>
                <h3 className="text-lg font-bold text-deepvox-black mb-3">
                  {method.title}
                </h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  {method.description}
                </p>
                <div className="space-y-2">
                  {method.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="text-xs text-gray-500">
                      • {feature}
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
              Enterprise-grade performance and reliability metrics for mission-critical integrations.
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
        </div>
      </section>

      {/* Integration Architecture */}
      <section className="py-20 bg-gradient-to-r from-deepvox-blue to-deepvox-accent text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Integration Architecture
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Secure, scalable, and reliable integration architecture designed for enterprise environments.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-white bg-opacity-20 rounded-lg flex items-center justify-center mx-auto mb-3">
                <Shield className="w-6 h-6" />
              </div>
              <h4 className="font-semibold mb-2">Secure by Design</h4>
              <p className="text-sm text-blue-100">End-to-end encryption and zero-trust architecture</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-white bg-opacity-20 rounded-lg flex items-center justify-center mx-auto mb-3">
                <Zap className="w-6 h-6" />
              </div>
              <h4 className="font-semibold mb-2">High Performance</h4>
              <p className="text-sm text-blue-100">Sub-100ms response times with auto-scaling</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-white bg-opacity-20 rounded-lg flex items-center justify-center mx-auto mb-3">
                <Database className="w-6 h-6" />
              </div>
              <h4 className="font-semibold mb-2">Data Consistency</h4>
              <p className="text-sm text-blue-100">ACID compliance and transaction management</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-white bg-opacity-20 rounded-lg flex items-center justify-center mx-auto mb-3">
                <Settings className="w-6 h-6" />
              </div>
              <h4 className="font-semibold mb-2">Easy Management</h4>
              <p className="text-sm text-blue-100">Visual configuration and monitoring tools</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-deepvox-black mb-4">
              Integration FAQ
            </h2>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-lg p-6">
              <h3 className="text-lg font-semibold text-deepvox-black mb-3">
                How long does it take to set up integrations?
              </h3>
              <p className="text-gray-600">
                Most pre-built integrations can be configured in minutes using our visual interface. Custom integrations typically take 1-2 weeks depending on complexity and requirements.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6">
              <h3 className="text-lg font-semibold text-deepvox-black mb-3">
                What security measures are in place for integrations?
              </h3>
              <p className="text-gray-600">
                All integrations use enterprise-grade security including OAuth 2.0, JWT tokens, mTLS encryption, and comply with SOC2, HIPAA, and other industry standards as required.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6">
              <h3 className="text-lg font-semibold text-deepvox-black mb-3">
                Can you integrate with custom or legacy systems?
              </h3>
              <p className="text-gray-600">
                Yes, our professional services team can create custom integrations for proprietary systems, legacy applications, and unique business requirements using APIs, database connections, or file-based transfers.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6">
              <h3 className="text-lg font-semibold text-deepvox-black mb-3">
                What happens if an integration fails?
              </h3>
              <p className="text-gray-600">
                Our platform includes automatic retry mechanisms, error handling, and real-time monitoring. Failed integrations trigger alerts and can be configured for automatic failover or manual intervention.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-deepvox-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Ready to Connect Your Systems?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Start integrating DeepVox.ai with your existing enterprise systems today. 
            Our integration specialists are ready to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-deepvox-blue hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200"
            >
              Start Integration Planning
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Integrations;