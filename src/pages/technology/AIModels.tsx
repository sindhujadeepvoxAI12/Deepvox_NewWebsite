import React from 'react';
import { Link } from 'react-router-dom';
import { Brain, Zap, Shield, Globe, Code, Database, ArrowRight, CheckCircle, Star, TrendingUp, Users, Settings, Cloud } from 'lucide-react';

const AIModels: React.FC = () => {
  const modelCategories = [
    {
      icon: <Brain className="w-8 h-8 text-deepvox-blue" />,
      title: 'Large Language Models (LLMs)',
      description: 'State-of-the-art language models for text generation, analysis, and understanding.',
      models: [
        { name: 'GPT-4 Turbo', provider: 'OpenAI', type: 'Commercial', capabilities: ['Text Generation', 'Code Generation', 'Analysis', 'Reasoning'] },
        { name: 'Claude 3 Opus', provider: 'Anthropic', type: 'Commercial', capabilities: ['Long Context', 'Safety', 'Analysis', 'Creative Writing'] },
        { name: 'Llama 2 70B', provider: 'Meta', type: 'Open Source', capabilities: ['Text Generation', 'Instruction Following', 'Code Generation'] },
        { name: 'Mistral 8x7B', provider: 'Mistral AI', type: 'Open Source', capabilities: ['Multilingual', 'Code Generation', 'Reasoning'] }
      ]
    },
    {
      icon: <Globe className="w-8 h-8 text-deepvox-accent" />,
      title: 'Multimodal Models',
      description: 'Advanced models that process and understand multiple data types including text, images, and audio.',
      models: [
        { name: 'GPT-4 Vision', provider: 'OpenAI', type: 'Commercial', capabilities: ['Image Analysis', 'OCR', 'Visual Reasoning', 'Chart Reading'] },
        { name: 'Claude 3 Vision', provider: 'Anthropic', type: 'Commercial', capabilities: ['Document Analysis', 'Image Understanding', 'Visual Q&A'] },
        { name: 'LLaVA', provider: 'Open Source', type: 'Open Source', capabilities: ['Visual Instruction Following', 'Image Captioning'] },
        { name: 'DALL-E 3', provider: 'OpenAI', type: 'Commercial', capabilities: ['Image Generation', 'Creative Design', 'Visual Content'] }
      ]
    },
    {
      icon: <Code className="w-8 h-8 text-deepvox-blue" />,
      title: 'Code Generation Models',
      description: 'Specialized models for software development, code analysis, and programming assistance.',
      models: [
        { name: 'GitHub Copilot', provider: 'GitHub/OpenAI', type: 'Commercial', capabilities: ['Code Completion', 'Bug Detection', 'Code Review'] },
        { name: 'CodeLlama 34B', provider: 'Meta', type: 'Open Source', capabilities: ['Code Generation', 'Code Explanation', 'Debugging'] },
        { name: 'StarCoder', provider: 'BigCode', type: 'Open Source', capabilities: ['Multi-language Support', 'Code Translation'] },
        { name: 'Codex', provider: 'OpenAI', type: 'Commercial', capabilities: ['Natural Language to Code', 'Code Documentation'] }
      ]
    },
    {
      icon: <Database className="w-8 h-8 text-deepvox-accent" />,
      title: 'Specialized Domain Models',
      description: 'Industry-specific and domain-specialized models for targeted use cases.',
      models: [
        { name: 'BioBERT', provider: 'Open Source', type: 'Open Source', capabilities: ['Medical Text Analysis', 'Biomedical NER', 'Clinical Notes'] },
        { name: 'FinBERT', provider: 'Open Source', type: 'Open Source', capabilities: ['Financial Sentiment', 'Risk Analysis', 'Market Intelligence'] },
        { name: 'LegalBERT', provider: 'Open Source', type: 'Open Source', capabilities: ['Legal Document Analysis', 'Contract Review', 'Compliance'] },
        { name: 'SciBERT', provider: 'Allen AI', type: 'Open Source', capabilities: ['Scientific Literature', 'Research Analysis', 'Citation Analysis'] }
      ]
    }
  ];

  const modelComparison = [
    {
      model: 'GPT-4 Turbo',
      provider: 'OpenAI',
      contextLength: '128K tokens',
      performance: 'Excellent',
      cost: 'High',
      privacy: 'Standard',
      useCase: 'General purpose, complex reasoning'
    },
    {
      model: 'Claude 3 Opus',
      provider: 'Anthropic',
      contextLength: '200K tokens',
      performance: 'Excellent',
      cost: 'High',
      privacy: 'Enhanced',
      useCase: 'Long documents, safety-critical'
    },
    {
      model: 'Llama 2 70B',
      provider: 'Meta',
      contextLength: '4K tokens',
      performance: 'Very Good',
      cost: 'Low',
      privacy: 'Full Control',
      useCase: 'On-premises, cost-sensitive'
    },
    {
      model: 'Mistral 8x7B',
      provider: 'Mistral AI',
      contextLength: '32K tokens',
      performance: 'Very Good',
      cost: 'Medium',
      privacy: 'Good',
      useCase: 'Multilingual, European compliance'
    }
  ];

  const deploymentOptions = [
    {
      icon: <Cloud className="w-6 h-6 text-deepvox-blue" />,
      title: 'Cloud-Hosted Models',
      description: 'Access to the latest commercial models via secure API connections.',
      features: ['Latest model versions', 'Automatic updates', 'Global availability', 'Pay-per-use pricing']
    },
    {
      icon: <Shield className="w-6 h-6 text-deepvox-accent" />,
      title: 'On-Premises Deployment',
      description: 'Deploy open-source models within your secure infrastructure.',
      features: ['Complete data control', 'No external API calls', 'Custom fine-tuning', 'Compliance ready']
    },
    {
      icon: <Settings className="w-6 h-6 text-deepvox-blue" />,
      title: 'Hybrid Architecture',
      description: 'Combine cloud and on-premises models based on data sensitivity.',
      features: ['Flexible routing', 'Data classification', 'Cost optimization', 'Risk management']
    },
    {
      icon: <Zap className="w-6 h-6 text-deepvox-accent" />,
      title: 'Edge Computing',
      description: 'Deploy lightweight models at the edge for real-time processing.',
      features: ['Low latency', 'Offline capability', 'Reduced bandwidth', 'Local processing']
    }
  ];

  const modelManagement = [
    {
      feature: 'Model Registry',
      description: 'Centralized repository for all AI models with version control and metadata management.'
    },
    {
      feature: 'A/B Testing',
      description: 'Compare model performance and gradually roll out new models with confidence.'
    },
    {
      feature: 'Performance Monitoring',
      description: 'Real-time monitoring of model accuracy, latency, and resource utilization.'
    },
    {
      feature: 'Auto-scaling',
      description: 'Automatically scale model inference based on demand and performance requirements.'
    },
    {
      feature: 'Fine-tuning Pipeline',
      description: 'Custom model training and fine-tuning with your proprietary data.'
    },
    {
      feature: 'Fallback Mechanisms',
      description: 'Automatic failover to backup models to ensure continuous service availability.'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-deepvox-black to-deepvox-gray text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center bg-deepvox-blue bg-opacity-20 border border-deepvox-blue border-opacity-30 rounded-full px-6 py-2 mb-6">
              <Brain className="w-4 h-4 mr-2 text-deepvox-blue" />
              <span className="text-sm font-medium">Advanced AI Model Platform</span>
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              AI Models & Platforms
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Access the world's most advanced AI models through our unified platform. From 
              commercial LLMs to open-source alternatives, deploy the right model for your use case.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm mb-8">
              <span className="bg-white bg-opacity-10 px-4 py-2 rounded-full">50+ AI Models</span>
              <span className="bg-white bg-opacity-10 px-4 py-2 rounded-full">Commercial & Open Source</span>
              <span className="bg-white bg-opacity-10 px-4 py-2 rounded-full">Custom Fine-tuning</span>
              <span className="bg-white bg-opacity-10 px-4 py-2 rounded-full">Enterprise Management</span>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-deepvox-blue hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold inline-flex items-center transition-colors duration-200"
              >
                Explore AI Models
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Model Categories */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-deepvox-black mb-4">
              Comprehensive AI Model Library
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Access cutting-edge AI models across multiple categories, from general-purpose 
              language models to specialized domain-specific solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {modelCategories.map((category, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
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

                <div className="space-y-4">
                  {category.models.map((model, modelIndex) => (
                    <div key={modelIndex} className="bg-gray-50 rounded-lg p-4">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-semibold text-deepvox-black">{model.name}</h4>
                        <div className="flex items-center space-x-2">
                          <span className="text-xs text-gray-500">{model.provider}</span>
                          <span className={`text-xs px-2 py-1 rounded-full ${
                            model.type === 'Commercial' 
                              ? 'bg-blue-100 text-blue-800' 
                              : 'bg-green-100 text-green-800'
                          }`}>
                            {model.type}
                          </span>
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {model.capabilities.map((capability, capIndex) => (
                          <span key={capIndex} className="text-xs bg-white px-2 py-1 rounded border">
                            {capability}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Model Comparison */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-deepvox-black mb-4">
              Model Comparison Matrix
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Compare key characteristics of popular AI models to choose the best fit for your use case.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-xl shadow-lg border border-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-4 text-left font-semibold text-deepvox-black">Model</th>
                  <th className="px-6 py-4 text-left font-semibold text-deepvox-black">Provider</th>
                  <th className="px-6 py-4 text-left font-semibold text-deepvox-black">Context Length</th>
                  <th className="px-6 py-4 text-left font-semibold text-deepvox-black">Performance</th>
                  <th className="px-6 py-4 text-left font-semibold text-deepvox-black">Cost</th>
                  <th className="px-6 py-4 text-left font-semibold text-deepvox-black">Privacy</th>
                  <th className="px-6 py-4 text-left font-semibold text-deepvox-black">Best Use Case</th>
                </tr>
              </thead>
              <tbody>
                {modelComparison.map((model, index) => (
                  <tr key={index} className="border-t border-gray-200 hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium text-deepvox-black">{model.model}</td>
                    <td className="px-6 py-4 text-gray-600">{model.provider}</td>
                    <td className="px-6 py-4 text-gray-600">{model.contextLength}</td>
                    <td className="px-6 py-4">
                      <span className={`px-2 py-1 rounded-full text-xs ${
                        model.performance === 'Excellent' 
                          ? 'bg-green-100 text-green-800'
                          : 'bg-blue-100 text-blue-800'
                      }`}>
                        {model.performance}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`px-2 py-1 rounded-full text-xs ${
                        model.cost === 'High' 
                          ? 'bg-red-100 text-red-800'
                          : model.cost === 'Medium'
                          ? 'bg-yellow-100 text-yellow-800'
                          : 'bg-green-100 text-green-800'
                      }`}>
                        {model.cost}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`px-2 py-1 rounded-full text-xs ${
                        model.privacy === 'Full Control' 
                          ? 'bg-green-100 text-green-800'
                          : model.privacy === 'Enhanced'
                          ? 'bg-blue-100 text-blue-800'
                          : 'bg-gray-100 text-gray-800'
                      }`}>
                        {model.privacy}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-gray-600 text-sm">{model.useCase}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Deployment Options */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-deepvox-black mb-4">
              Flexible Deployment Options
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Deploy AI models in the environment that best meets your security, 
              performance, and compliance requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {deploymentOptions.map((option, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 text-center shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="flex justify-center mb-4">
                  {option.icon}
                </div>
                <h3 className="text-lg font-bold text-deepvox-black mb-3">
                  {option.title}
                </h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  {option.description}
                </p>
                <div className="space-y-2">
                  {option.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-xs text-gray-600">
                      <CheckCircle className="w-3 h-3 text-deepvox-accent mr-2 flex-shrink-0" />
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Model Management */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-deepvox-black mb-4">
              Enterprise Model Management
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive MLOps capabilities for managing AI models throughout their lifecycle.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {modelManagement.map((item, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-xl p-6 hover:bg-white hover:shadow-lg transition-all duration-300"
              >
                <h3 className="text-lg font-bold text-deepvox-black mb-3">
                  {item.feature}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>
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
              Enterprise-Grade Performance
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Our AI model platform delivers consistent performance and reliability 
              for mission-critical enterprise applications.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8" />
              </div>
              <div className="text-4xl font-bold mb-2">50+</div>
              <div className="text-blue-100">AI Models Available</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8" />
              </div>
              <div className="text-4xl font-bold mb-2">99.9%</div>
              <div className="text-blue-100">Model Uptime</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8" />
              </div>
              <div className="text-4xl font-bold mb-2">10K+</div>
              <div className="text-blue-100">Concurrent Requests</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8" />
              </div>
              <div className="text-4xl font-bold mb-2">100%</div>
              <div className="text-blue-100">Data Privacy</div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-deepvox-black mb-4">
              AI Models FAQ
            </h2>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-lg p-6">
              <h3 className="text-lg font-semibold text-deepvox-black mb-3">
                What AI models does DeepVox.ai support?
              </h3>
              <p className="text-gray-600">
                We support 50+ AI models including commercial LLMs (GPT-4, Claude, Gemini), open-source models (Llama 2, Mistral, BLOOM), and specialized domain models for healthcare, finance, and other industries.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6">
              <h3 className="text-lg font-semibold text-deepvox-black mb-3">
                Can I use my own custom models?
              </h3>
              <p className="text-gray-600">
                Yes, our platform supports custom model deployment and fine-tuning. You can bring your own models or fine-tune existing models with your proprietary data while maintaining full privacy and control.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6">
              <h3 className="text-lg font-semibold text-deepvox-black mb-3">
                How do you ensure model performance and reliability?
              </h3>
              <p className="text-gray-600">
                We provide comprehensive model monitoring, A/B testing capabilities, automatic failover mechanisms, and performance analytics to ensure consistent model performance and 99.9% uptime.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6">
              <h3 className="text-lg font-semibent text-deepvox-black mb-3">
                What deployment options are available?
              </h3>
              <p className="text-gray-600">
                We offer flexible deployment options including cloud-hosted models, on-premises deployment, hybrid architectures, and edge computing solutions to meet your specific security and performance requirements.
              </p>
            </div>
          </div>
        </div>
      </section>


    </div>
  );
};

export default AIModels;