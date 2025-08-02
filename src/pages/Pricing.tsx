import React from 'react';
import { Link } from 'react-router-dom';
import { Check, ArrowRight, Star, Shield, Zap, Users, Phone } from 'lucide-react';

const Pricing: React.FC = () => {
  const pricingTiers = [
    {
      name: 'Starter',
      description: 'Perfect for small teams getting started with AI',
      price: 'Contact Us',
      priceDetail: 'Custom pricing based on usage',
      features: [
        'Up to 5 users',
        'Basic AI models',
        'Standard support',
        'Basic analytics',
        'Email support',
        'Community access'
      ],
      limitations: [
        'Limited API calls',
        'Standard security features',
        'No custom integrations'
      ],
      cta: 'Start Free Trial',
      popular: false,
      href: '/contact?plan=starter'
    },
    {
      name: 'Professional',
      description: 'Advanced features for growing organizations',
      price: 'Contact Us',
      priceDetail: 'Volume-based pricing',
      features: [
        'Up to 50 users',
        'Advanced AI models',
        'Priority support',
        'Advanced analytics',
        'Phone & email support',
        'Custom integrations',
        'SOC2 compliance',
        'Advanced security features'
      ],
      limitations: [
        'Usage limits apply',
        'Standard SLA'
      ],
      cta: 'Contact Sales',
      popular: true,
      href: '/contact?plan=professional'
    },
    {
      name: 'Enterprise',
      description: 'Complete AI platform for large organizations',
      price: 'Custom',
      priceDetail: 'Tailored to your needs',
      features: [
        'Unlimited users',
        'Full Enterprise AI Stack™',
        'Dedicated support team',
        'Custom analytics & reporting',
        '24/7 phone support',
        'Custom integrations & APIs',
        'Full compliance suite',
        'On-premises deployment',
        'Custom model training',
        'Dedicated account manager'
      ],
      limitations: [],
      cta: 'Contact Sales',
      popular: false,
      href: '/contact?plan=enterprise'
    }
  ];

  const addOns = [
    {
      name: 'Professional Services',
      description: 'Expert implementation and consulting services',
      features: ['Implementation planning', 'Custom model development', 'Training & workshops', 'Change management'],
      pricing: 'Quoted separately'
    },
    {
      name: 'Extended Support',
      description: '24/7 premium support with guaranteed response times',
      features: ['24/7 phone support', '1-hour response SLA', 'Dedicated support team', 'Priority issue resolution'],
      pricing: 'From $10K/month'
    },
    {
      name: 'Advanced Security',
      description: 'Enhanced security features for high-compliance environments',
      features: ['Advanced encryption', 'Custom security controls', 'Compliance reporting', 'Security audits'],
      pricing: 'Custom pricing'
    }
  ];

  const faqs = [
    {
      question: 'How is pricing determined?',
      answer: 'Pricing is based on several factors including number of users, usage volume, deployment model, and specific feature requirements. We provide custom quotes tailored to your organization\'s needs.'
    },
    {
      question: 'Is there a free trial available?',
      answer: 'Yes, we offer a 30-day free trial for the Starter plan. Enterprise customers can also request a proof-of-concept implementation to evaluate our platform.'
    },
    {
      question: 'What deployment options are available?',
      answer: 'We support cloud (SaaS), hybrid, and on-premises deployments. Enterprise customers can choose the deployment model that best fits their security and compliance requirements.'
    },
    {
      question: 'What kind of support is included?',
      answer: 'All plans include support, with higher tiers receiving priority response times and dedicated support teams. Enterprise customers get 24/7 support with guaranteed SLAs.'
    },
    {
      question: 'Can I upgrade or downgrade my plan?',
      answer: 'Yes, you can change your plan at any time. We\'ll work with you to ensure a smooth transition and adjust pricing accordingly.'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-deepvox-black to-deepvox-gray text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Enterprise AI Pricing
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Flexible pricing options designed to scale with your organization. 
              From startup to enterprise, we have a plan that fits your AI transformation needs.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <span className="bg-white bg-opacity-10 px-4 py-2 rounded-full">No Setup Fees</span>
              <span className="bg-white bg-opacity-10 px-4 py-2 rounded-full">30-Day Free Trial</span>
              <span className="bg-white bg-opacity-10 px-4 py-2 rounded-full">Cancel Anytime</span>
              <span className="bg-white bg-opacity-10 px-4 py-2 rounded-full">Custom Enterprise Plans</span>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-deepvox-black mb-4">
              Choose Your Plan
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              All plans include our core privacy-first AI features. Upgrade anytime as your needs grow.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {pricingTiers.map((tier, index) => (
              <div
                key={index}
                className={`bg-white rounded-2xl shadow-lg border-2 p-8 relative ${
                  tier.popular ? 'border-deepvox-blue' : 'border-gray-200'
                } hover:shadow-xl transition-all duration-300`}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-deepvox-blue text-white px-6 py-2 rounded-full text-sm font-semibold flex items-center">
                      <Star className="w-4 h-4 mr-2" />
                      Most Popular
                    </div>
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-deepvox-black mb-2">
                    {tier.name}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {tier.description}
                  </p>
                  <div className="mb-2">
                    <span className="text-4xl font-bold text-deepvox-black">
                      {tier.price}
                    </span>
                  </div>
                  <p className="text-sm text-gray-500">
                    {tier.priceDetail}
                  </p>
                </div>

                <div className="space-y-4 mb-8">
                  <h4 className="font-semibold text-deepvox-black">Included Features:</h4>
                  {tier.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start">
                      <Check className="w-5 h-5 text-deepvox-accent mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                {tier.limitations.length > 0 && (
                  <div className="space-y-2 mb-8">
                    <h4 className="font-semibold text-gray-500 text-sm">Limitations:</h4>
                    {tier.limitations.map((limitation, limitIndex) => (
                      <div key={limitIndex} className="text-sm text-gray-500 ml-4">
                        • {limitation}
                      </div>
                    ))}
                  </div>
                )}

                <Link
                  to={tier.href}
                  className={`w-full py-4 px-6 rounded-lg font-semibold text-center inline-flex items-center justify-center transition-colors duration-200 ${
                    tier.popular
                      ? 'bg-deepvox-blue hover:bg-blue-700 text-white'
                      : 'bg-gray-100 hover:bg-gray-200 text-deepvox-black'
                  }`}
                >
                  {tier.cta}
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Add-ons */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-deepvox-black mb-4">
              Add-On Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Enhance your AI implementation with additional services and support options.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {addOns.map((addon, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 hover:bg-white hover:shadow-lg transition-all duration-300">
                <h3 className="text-xl font-bold text-deepvox-black mb-3">
                  {addon.name}
                </h3>
                <p className="text-gray-600 mb-6">
                  {addon.description}
                </p>
                <div className="space-y-3 mb-6">
                  {addon.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-sm">
                      <div className="w-2 h-2 bg-deepvox-accent rounded-full mr-3"></div>
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
                <div className="text-deepvox-blue font-semibold">
                  {addon.pricing}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ROI Calculator CTA */}
      <section className="py-20 bg-gradient-to-r from-deepvox-blue to-deepvox-accent text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Calculate Your ROI
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              See how the Enterprise AI Stack™ can deliver value for your organization 
              with our interactive ROI calculator.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8" />
                </div>
                <div className="text-3xl font-bold mb-2">50%</div>
                <div className="text-blue-100">Average Cost Reduction</div>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8" />
                </div>
                <div className="text-3xl font-bold mb-2">3x</div>
                <div className="text-blue-100">Faster Implementation</div>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8" />
                </div>
                <div className="text-3xl font-bold mb-2">250%</div>
                <div className="text-blue-100">Average ROI</div>
              </div>
            </div>
            <Link
              to="/resources/roi-calculator"
              className="bg-white text-deepvox-blue px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 inline-flex items-center"
            >
              Try ROI Calculator
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-deepvox-black mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Get answers to common questions about our pricing and plans.
            </p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-lg">
                <h3 className="text-lg font-semibold text-deepvox-black mb-3">
                  {faq.question}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Sales CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-deepvox-black rounded-2xl p-8 text-white text-center">
            <h2 className="text-3xl font-bold mb-4">
              Need a Custom Solution?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Our enterprise team can create a custom package tailored to your specific 
              requirements, compliance needs, and deployment preferences.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-deepvox-blue hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200 inline-flex items-center"
              >
                <Phone className="w-5 h-5 mr-2" />
                Talk to Sales
              </Link>
              <Link
                to="/contact/demo"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-deepvox-black transition-all duration-200"
              >
                Schedule Demo
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;