import React from 'react';
import { Link } from 'react-router-dom';
import { FileText, BookOpen, Users, Calculator, CheckSquare, ArrowRight, Download, Eye, Clock } from 'lucide-react';

const Resources: React.FC = () => {
  const resourceCategories = [
    {
      icon: <FileText className="w-8 h-8 text-deepvox-blue" />,
      title: 'White Papers & Research',
      description: 'In-depth technical documentation and research papers on enterprise AI implementation.',
      href: '/resources/whitepapers',
      items: ['Enterprise AI Stack™ Framework', 'Privacy-First AI Implementation', 'ROI Measurement Guide', 'Security Best Practices']
    },
    {
      icon: <Users className="w-8 h-8 text-deepvox-accent" />,
      title: 'Case Studies',
      description: 'Real-world success stories and implementation examples across industries.',
      href: '/resources/case-studies',
      items: ['Healthcare Transformation', 'Financial Services AI', 'Manufacturing Optimization', 'Government Solutions']
    },
    {
      icon: <BookOpen className="w-8 h-8 text-deepvox-blue" />,
      title: 'Blog & Insights',
      description: 'Latest trends, best practices, and expert insights in enterprise AI.',
      href: '/blog',
      items: ['AI Implementation Guides', 'Industry Trends', 'Security Updates', 'Technology Reviews']
    },
    {
      icon: <Calculator className="w-8 h-8 text-deepvox-accent" />,
      title: 'Tools & Calculators',
      description: 'Interactive tools to assess AI readiness and calculate potential ROI.',
      href: '/resources/tools',
      items: ['AI Readiness Assessment', 'ROI Calculator', 'Compliance Checker', 'Implementation Planner']
    }
  ];

  const featuredResources = [
    {
      type: 'White Paper',
      title: 'Enterprise AI Stack™ Implementation Framework',
      description: 'Complete guide to implementing our 5-layer AI architecture in enterprise environments.',
      downloadCount: '5,000+',
      readTime: '15 min',
      href: '/resources/whitepapers/enterprise-ai-framework'
    },
    {
      type: 'Case Study',
      title: 'Healthcare AI Transformation: 300% ROI',
      description: 'How a regional healthcare network achieved dramatic cost savings and improved patient outcomes.',
      downloadCount: '3,200+',
      readTime: '8 min',
      href: '/resources/case-studies/healthcare-transformation'
    },
    {
      type: 'Tool',
      title: 'AI Readiness Assessment',
      description: 'Interactive assessment to evaluate your organization\'s readiness for AI transformation.',
      downloadCount: '8,500+',
      readTime: '10 min',
      href: '/resources/ai-assessment'
    }
  ];

  const latestBlogPosts = [
    {
      title: 'The Future of Privacy-Preserving AI in Enterprise',
      excerpt: 'Exploring how homomorphic encryption and federated learning are reshaping enterprise AI.',
      publishDate: 'March 15, 2025',
      readTime: '6 min read',
      href: '/blog/future-privacy-preserving-ai'
    },
    {
      title: 'Measuring AI ROI: Beyond Cost Savings',
      excerpt: 'A comprehensive framework for measuring the full impact of AI implementations.',
      publishDate: 'March 12, 2025',
      readTime: '4 min read',
      href: '/blog/measuring-ai-roi'
    },
    {
      title: 'HIPAA Compliance in AI: A Practical Guide',
      excerpt: 'Essential considerations for implementing AI in healthcare while maintaining compliance.',
      publishDate: 'March 10, 2025',
      readTime: '7 min read',
      href: '/blog/hipaa-compliance-ai-guide'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-deepvox-black to-deepvox-gray text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              AI Implementation Resources
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Comprehensive resources to guide your AI transformation journey, from initial 
              assessment to successful implementation and beyond.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm mb-8">
              <span className="bg-white bg-opacity-10 px-4 py-2 rounded-full">White Papers</span>
              <span className="bg-white bg-opacity-10 px-4 py-2 rounded-full">Case Studies</span>
              <span className="bg-white bg-opacity-10 px-4 py-2 rounded-full">Tools & Calculators</span>
              <span className="bg-white bg-opacity-10 px-4 py-2 rounded-full">Expert Insights</span>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/resources/ai-assessment"
                className="bg-deepvox-blue hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold inline-flex items-center transition-colors duration-200"
              >
                Start AI Assessment
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/resources/whitepapers"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-deepvox-black transition-all duration-200"
              >
                Browse White Papers
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Resource Categories */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-deepvox-black mb-4">
              Explore Our Resource Library
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Access our comprehensive collection of resources designed to support every 
              stage of your AI transformation journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {resourceCategories.map((category, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group"
              >
                <div className="flex items-center mb-6">
                  {category.icon}
                  <h3 className="text-2xl font-bold text-deepvox-black ml-4">
                    {category.title}
                  </h3>
                </div>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {category.description}
                </p>

                <div className="space-y-3 mb-6">
                  {category.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex items-center text-sm text-gray-600">
                      <div className="w-2 h-2 bg-deepvox-accent rounded-full mr-3"></div>
                      {item}
                    </div>
                  ))}
                </div>

                <Link
                  to={category.href}
                  className="inline-flex items-center text-deepvox-blue font-semibold hover:text-deepvox-accent transition-colors duration-200 group-hover:translate-x-1 transform"
                >
                  Explore Resources
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Resources */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-deepvox-black mb-4">
              Featured Resources
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our most popular and valuable resources for enterprise AI implementation.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {featuredResources.map((resource, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-xl p-6 hover:bg-white hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="bg-deepvox-blue text-white text-xs px-3 py-1 rounded-full font-medium">
                    {resource.type}
                  </span>
                  <div className="flex items-center text-sm text-gray-500">
                    <Download className="w-4 h-4 mr-1" />
                    {resource.downloadCount}
                  </div>
                </div>
                
                <h3 className="text-lg font-bold text-deepvox-black mb-3">
                  {resource.title}
                </h3>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {resource.description}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm text-gray-500">
                    <Clock className="w-4 h-4 mr-1" />
                    {resource.readTime}
                  </div>
                  <Link
                    to={resource.href}
                    className="inline-flex items-center text-deepvox-blue font-semibold hover:text-deepvox-accent transition-colors duration-200"
                  >
                    Access
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Blog Posts */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-deepvox-black mb-4">
              Latest Insights
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stay up-to-date with the latest trends, best practices, and insights 
              in enterprise AI implementation.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {latestBlogPosts.map((post, index) => (
              <article
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
              >
                <h3 className="text-lg font-bold text-deepvox-black mb-3">
                  {post.title}
                </h3>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-500">{post.publishDate}</span>
                  <span className="text-gray-500">{post.readTime}</span>
                </div>

                <Link
                  to={post.href}
                  className="inline-flex items-center text-deepvox-blue font-semibold hover:text-deepvox-accent transition-colors duration-200 mt-4"
                >
                  Read More
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </article>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
             to="#"
             onClick={(e) => {
               e.preventDefault();
               alert('White Papers & Research - Coming Soon!\n\nWe\'re preparing comprehensive white papers and research documentation. Please check back soon or contact us for early access to specific research materials.');
             }}
              className="bg-deepvox-blue hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold inline-flex items-center transition-colors duration-200"
            >
              View All Blog Posts
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-deepvox-black text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Stay Updated with AI Insights
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Get the latest resources, case studies, and insights delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-deepvox-black focus:ring-2 focus:ring-deepvox-blue focus:outline-none"
            />
            <button className="bg-deepvox-blue hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200">
              Subscribe
            </button>
          </div>
          <p className="text-gray-400 text-sm mt-4">
            No spam. Unsubscribe anytime. Privacy policy applies.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Resources;