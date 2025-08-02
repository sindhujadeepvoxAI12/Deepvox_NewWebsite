import React from 'react';

const ClientLogos: React.FC = () => {
  const industries = [
    { name: 'Healthcare', logo: 'HC' },
    { name: 'Financial Services', logo: 'FS' },
    { name: 'Manufacturing', logo: 'MF' },
    { name: 'Legal', logo: 'LG' },
    { name: 'Retail', logo: 'RT' },
    { name: 'Real Estate', logo: 'RE' },
    { name: 'Insurance', logo: 'IN' },
    { name: 'HR', logo: 'HR' }
  ];

  return (
    <section className="py-16 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold text-deepvox-black mb-4">
            Trusted Across Industries
          </h2>
          <p className="text-gray-600">
            200+ organizations rely on DeepVox.ai for their AI transformation
          </p>
        </div>

        <div className="grid grid-cols-4 md:grid-cols-8 gap-6">
          {industries.map((industry, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-all duration-500 transform hover:scale-110 hover:-translate-y-2 animate-fade-in-up opacity-0 group relative overflow-hidden"
              style={{ animationDelay: `${index * 0.05}s`, animationFillMode: 'forwards' }}
            >
              {/* Hover Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-deepvox-blue to-deepvox-accent opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-lg"></div>
              
              <div className="w-12 h-12 bg-gradient-to-br from-deepvox-blue to-deepvox-accent rounded-lg flex items-center justify-center mb-2 transition-transform duration-500 group-hover:rotate-12 group-hover:scale-125 relative z-10 shadow-lg group-hover:shadow-xl">
                <span className="text-white font-bold text-sm">{industry.logo}</span>
              </div>
              <span className="text-xs text-gray-600 text-center transition-colors duration-300 group-hover:text-deepvox-blue relative z-10 group-hover:font-semibold">{industry.name}</span>
            </div>
          ))}
        </div>

        {/* Trust Badges */}
        <div className="flex justify-center items-center space-x-8 mt-12 pt-8 border-t border-gray-200 animate-fade-in opacity-0" style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}>
          <div className="flex items-center space-x-2 text-gray-500 hover:text-green-600 transition-all duration-500 transform hover:scale-110 hover:-translate-y-1 group">
            <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center transition-all duration-500 hover:bg-green-200 group-hover:rotate-12 group-hover:shadow-lg">
              <span className="text-green-600 font-bold text-xs">SOC</span>
            </div>
            <span className="text-sm font-medium group-hover:font-semibold transition-all duration-300">SOC 2 Type II</span>
          </div>
          <div className="flex items-center space-x-2 text-gray-500 hover:text-blue-600 transition-all duration-500 transform hover:scale-110 hover:-translate-y-1 group">
            <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center transition-all duration-500 hover:bg-blue-200 group-hover:rotate-12 group-hover:shadow-lg">
              <span className="text-blue-600 font-bold text-xs">ISO</span>
            </div>
            <span className="text-sm font-medium group-hover:font-semibold transition-all duration-300">ISO 27001</span>
          </div>
          <div className="flex items-center space-x-2 text-gray-500 hover:text-purple-600 transition-all duration-500 transform hover:scale-110 hover:-translate-y-1 group">
            <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center transition-all duration-500 hover:bg-purple-200 group-hover:rotate-12 group-hover:shadow-lg">
              <span className="text-purple-600 font-bold text-xs">HIPAA</span>
            </div>
            <span className="text-sm font-medium group-hover:font-semibold transition-all duration-300">HIPAA Compliant</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientLogos;