import React from 'react';
import { Link } from 'react-router-dom';
import { MessageSquare, Users, TrendingUp, Zap, DollarSign, ArrowRight, CheckCircle, Phone, Mail, Calendar, Target, BarChart3, Clock } from 'lucide-react';

const EchoLeadsAgents: React.FC = () => {
  const agentTypes = [
    {
      icon: <Phone className="w-8 h-8 text-deepvox-blue" />,
      title: 'Voice Call Agents',
      description: 'AI-powered voice agents that make outbound calls, qualify leads, and schedule appointments with natural conversation.',
      features: ['Natural Voice Conversations', 'Lead Qualification', 'Appointment Scheduling', 'Call Analytics']
    },
    {
      icon: <MessageSquare className="w-8 h-8 text-deepvox-accent" />,
      title: 'WhatsApp Call Agents',
      description: 'AI agents that engage prospects through WhatsApp with personalized messaging and multimedia content.',
      features: ['WhatsApp Integration', 'Multimedia Messaging', 'Automated Follow-ups', 'Global Reach']
    },
    {
      icon: <Phone className="w-8 h-8 text-deepvox-blue" />,
      title: 'AI Callback Agents',
      description: 'Intelligent callback agents that automatically follow up with leads and prospects at optimal times.',
      features: ['Automated Callbacks', 'Optimal Timing', 'Lead Nurturing', 'Conversion Tracking']
    },
    {
      icon: <MessageSquare className="w-8 h-8 text-deepvox-accent" />,
      title: 'Web Call Agents',
      description: 'AI-powered web-based calling agents that engage website visitors and convert them into qualified leads.',
      features: ['Website Integration', 'Real-time Engagement', 'Lead Capture', 'Visitor Analytics']
    }
  ];

  const useCases = [
    {
      industry: 'B2B SaaS',
      challenge: 'High cost of lead generation and low conversion rates',
      solution: 'EchoLeads agents identify high-intent prospects and personalize outreach',
      results: ['300% increase in qualified leads', '45% reduction in cost per lead', '60% improvement in conversion rates']
    },
    {
      industry: 'Real Estate',
      challenge: 'Time-consuming lead qualification and follow-up processes',
      solution: 'AI agents qualify leads and schedule appointments automatically',
      results: ['80% reduction in qualification time', '200% increase in appointments', '35% improvement in close rates']
    },
    {
      industry: 'Professional Services',
      challenge: 'Difficulty scaling personalized client outreach',
      solution: 'Intelligent agents personalize communications at scale',
      results: ['500% increase in outreach capacity', '25% higher response rates', '40% faster sales cycles']
    }
  ];

  const pricingTiers = [
    {
      name: 'Starter',
      description: 'Perfect for small businesses getting started',
      monthlyCredits: '1,000 credits',
      price: '$99/month',
      features: [
        'Lead Generation Agents',
        'Email Campaign Agents',
        'Basic Analytics',
        'CRM Integration',
        'Email Support'
      ],
      popular: false
    },
    {
      name: 'Professional',
      description: 'Advanced features for growing sales teams',
      monthlyCredits: '5,000 credits',
      price: '$399/month',
      features: [
        'All Agent Types',
        'Advanced Analytics',
        'Custom Workflows',
        'Priority Support',
        'API Access',
        'White-label Options'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      description: 'Custom solutions for large organizations',
      monthlyCredits: 'Unlimited',
      price: 'Custom Pricing',
      features: [
        'Custom Agent Development',
        'Dedicated Support',
        'On-premises Deployment',
        'Advanced Security',
        'SLA Guarantees',
        'Training & Onboarding'
      ],
      popular: false
    }
  ];

  const features = [
    {
      icon: <DollarSign className="w-6 h-6 text-deepvox-accent" />,
      title: 'Pay-per-Usage Model',
      description: 'Only pay for what you use with transparent, usage-based pricing'
    },
    {
      icon: <Zap className="w-6 h-6 text-deepvox-blue" />,
      title: 'Instant Deployment',
      description: 'Deploy AI agents in minutes with no setup fees or long-term contracts'
    },
    {
      icon: <Target className="w-6 h-6 text-deepvox-accent" />,
      title: 'High-Quality Leads',
      description: 'AI-powered qualification ensures you only pay for high-intent prospects'
    },
    {
      icon: <BarChart3 className="w-6 h-6 text-deepvox-blue" />,
      title: 'Real-time Analytics',
      description: 'Track performance and ROI with comprehensive analytics dashboards'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-deepvox-black to-deepvox-gray text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center bg-deepvox-accent bg-opacity-20 border border-deepvox-accent border-opacity-30 rounded-full px-6 py-2 mb-6">
              <MessageSquare className="w-4 h-4 mr-2 text-deepvox-accent" />
              <span className="text-sm font-medium">Pay-per-Usage AI Agents</span>
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              <a 
                href="https://echoleads.ai" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-deepvox-accent transition-colors duration-300"
              >
                EchoLeads.ai
              </a>
              {' '}Agents
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Revolutionary pay-per-usage AI agents for lead generation, customer engagement, 
              and sales automation. Only pay for results, not infrastructure.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm mb-8">
              <span className="bg-white bg-opacity-10 px-4 py-2 rounded-full">Pay-per-Usage</span>
              <span className="bg-white bg-opacity-10 px-4 py-2 rounded-full">No Setup Fees</span>
              <span className="bg-white bg-opacity-10 px-4 py-2 rounded-full">Instant Deployment</span>
              <span className="bg-white bg-opacity-10 px-4 py-2 rounded-full">High-Quality Leads</span>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-deepvox-accent hover:bg-green-600 text-white px-8 py-4 rounded-lg font-semibold inline-flex items-center transition-colors duration-200"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/technology/ai-models"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-deepvox-black transition-all duration-200"
              >
                See Agents in Action
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-deepvox-black mb-4">
              Why Choose EchoLeads.ai Agents?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Revolutionary pay-per-usage model that aligns our success with yours. 
              No upfront costs, no monthly minimums, just results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 text-center shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="flex justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-bold text-deepvox-black mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Agent Types */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-deepvox-black mb-4">
              AI Agent Portfolio
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose from our comprehensive suite of specialized AI agents, 
              each designed for specific sales and marketing functions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {agentTypes.map((agent, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-xl p-8 hover:bg-white hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="flex items-center mb-6">
                  {agent.icon}
                  <h3 className="text-xl font-bold text-deepvox-black ml-4">
                    {agent.title}
                  </h3>
                </div>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {agent.description}
                </p>

                <div className="space-y-3">
                  {agent.features.map((feature, featureIndex) => (
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

      {/* Use Cases */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-deepvox-black mb-4">
              Success Stories Across Industries
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how organizations across different industries are achieving 
              remarkable results with EchoLeads.ai agents.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-8 shadow-lg border border-gray-100"
              >
                <h3 className="text-xl font-bold text-deepvox-black mb-4">
                  {useCase.industry}
                </h3>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-700 mb-2">Challenge:</h4>
                  <p className="text-gray-600 text-sm">{useCase.challenge}</p>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-700 mb-2">Solution:</h4>
                  <p className="text-gray-600 text-sm">{useCase.solution}</p>
                </div>

                <div>
                  <h4 className="font-semibold text-deepvox-black mb-3">Results:</h4>
                  <div className="space-y-2">
                    {useCase.results.map((result, resultIndex) => (
                      <div key={resultIndex} className="flex items-center text-sm">
                        <div className="w-2 h-2 bg-deepvox-accent rounded-full mr-3"></div>
                        <span className="font-medium text-deepvox-black">{result}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      {/* Agent Capabilities */}
      <section className="py-20 bg-gradient-to-r from-deepvox-accent to-green-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Advanced AI Agent Capabilities
            </h2>
            <p className="text-xl text-green-100 max-w-3xl mx-auto">
              Our AI agents leverage advanced natural language processing and machine learning 
              to deliver human-like interactions across all communication channels.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageSquare className="w-8 h-8" />
              </div>
              <div className="text-3xl font-bold mb-2">50+</div>
              <div className="text-green-100">Languages Supported</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8" />
              </div>
              <div className="text-3xl font-bold mb-2">24/7</div>
              <div className="text-green-100">Availability</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8" />
              </div>
              <div className="text-3xl font-bold mb-2">99.5%</div>
              <div className="text-green-100">Accuracy Rate</div>
            </div>
          </div>

          <div className="text-center">
            <Link
              to="/technology/ai-models"
              className="bg-white text-deepvox-accent px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 inline-flex items-center"
            >
              Learn More About Integration
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Integration */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-deepvox-black mb-4">
              Seamless CRM Integration
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              EchoLeads.ai agents integrate seamlessly with your existing CRM and 
              sales tools for a unified workflow.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {['Salesforce', 'HubSpot', 'Pipedrive', 'Zoho', 'Monday.com', 'Airtable'].map((crm, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-4 text-center shadow-md hover:shadow-lg transition-shadow duration-200"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-deepvox-accent to-green-600 rounded-lg flex items-center justify-center mx-auto mb-2">
                  <span className="text-white font-bold text-sm">{crm.substring(0, 2)}</span>
                </div>
                <div className="text-sm font-medium text-deepvox-black">{crm}</div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 max-w-3xl mx-auto">
              <h3 className="text-lg font-semibold text-yellow-800 mb-2">
                Custom Integration Available
              </h3>
              <p className="text-yellow-700">
                Don't see your CRM? We provide custom integration services for any 
                sales platform or proprietary system.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
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
                What types of AI agents are available?
              </h3>
              <p className="text-gray-600">
                We offer Voice Call agents for phone outreach, WhatsApp agents for messaging, AI Callback agents for follow-ups, and Web Call agents for website engagement. Each agent type is specialized for specific communication channels.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-deepvox-black mb-3">
                How natural are the AI agent conversations?
              </h3>
              <p className="text-gray-600">
                Our AI agents use advanced natural language processing to conduct human-like conversations. They understand context, handle objections, and can seamlessly transfer to human agents when needed.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibent text-deepvox-black mb-3">
                Can the agents integrate with my existing CRM?
              </h3>
              <p className="text-gray-600">
                Yes, our agents integrate seamlessly with all major CRM platforms including Salesforce, HubSpot, Pipedrive, and more. All interactions and data are automatically synced to your CRM.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-deepvox-black mb-3">
                What languages do the agents support?
              </h3>
              <p className="text-gray-600">
                Our AI agents support 50+ languages and can automatically detect and respond in the prospect's preferred language. This enables global outreach and engagement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-deepvox-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Ready to Transform Your Sales Process?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Start your free trial today and see how EchoLeads.ai agents can 
            revolutionize your lead generation and customer engagement.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://echoleads.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-deepvox-accent hover:bg-green-600 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200"
            >
              Try AI Agents
            </a>
            <a
              href="https://echoleads.ai"
              target="_blank"
              to="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-deepvox-black transition-all duration-200"
            >
              Learn More
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EchoLeadsAgents;