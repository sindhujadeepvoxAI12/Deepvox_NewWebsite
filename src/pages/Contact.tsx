import React, { useEffect } from 'react';
import { Mail, Phone, MapPin, MessageCircle, Calendar, ArrowRight, Clock, Users, Globe } from 'lucide-react';

const Contact: React.FC = () => {
  useEffect(() => {
    // Load Calendly widget script
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  const contactInfo = [
    {
      icon: <MapPin className="w-6 h-6" />,
      title: 'Location',
      content: 'T-Hub, Plot No 1/C Sy No 83/1, Raidurgam panmaktha Hyderabad Knowledge City, Serilingampally(M), Hyderabad, Telangana, 500081',
      link: '',
      color: 'text-deepvox-accent'
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'Email Us',
      content: 'sales@deepvox.ai',
      link: 'mailto:sales@deepvox.ai',
      color: 'text-deepvox-accent'
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: 'Phone',
      content: '+91 9000935106',
      link: 'tel:+91 9000935106',
      color: 'text-deepvox-accent'
    }
  ];

  const socialLinks = [
    {
      name: 'Facebook',
      url: 'https://www.facebook.com/profile.php?id=61573916049164',
      icon: 'https://cdn-icons-png.flaticon.com/512/145/145802.png'
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/deepvox_ai/',
      icon: 'https://cdn-icons-png.flaticon.com/512/2111/2111463.png'
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/deepvox-ai',
      icon: 'https://cdn-icons-png.flaticon.com/512/145/145807.png'
    },
    {
      name: 'X (Twitter)',
      url: 'https://x.com/Deepvox_AI',
      icon: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE4LjI0NCAyLjI1SDIxLjU1MkwxNC4zMjcgMTAuNTFMMjIuODI5IDIxLjQ5SDE2LjE3TDEwLjk1NiAxNC42NzNMNC45OSAyMS43NUgxLjY4TDkuNDEgMTIuOTE1TDEuMjU0IDIuMjVIOEwxMi43MTMgOC40ODFaIiBmaWxsPSJjdXJyZW50Q29sb3IiLz4KPHBhdGggZD0iTTE3LjA4MyAxOS43N0gxOC45MTZMNy4wODQgNC4xMjZINS4xMTdaIiBmaWxsPSJjdXJyZW50Q29sb3IiLz4KPC9zdmc+'
    },
    {
      name: 'YouTube',
      url: 'https://www.youtube.com/@deepvoxai',
      icon: 'https://cdn-icons-png.flaticon.com/512/1384/1384060.png'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-deepvox-black to-deepvox-gray text-white py-20 overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-20 right-20 w-32 h-32 bg-deepvox-accent rounded-full opacity-20 animate-float"></div>
        <div className="absolute bottom-20 left-20 w-24 h-24 bg-deepvox-blue rounded-full opacity-20 animate-float" style={{ animationDelay: '2s' }}></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Contact Us
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Ready to transform your business with AI? Let's start a conversation about how we can help you achieve your goals.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info & Form Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-2 animate-fade-in">
              <div className="bg-white rounded-2xl shadow-lg p-8 h-full">
                <div className="mb-8">
                  <h6 className="text-deepvox-accent font-medium mb-2">Our Information</h6>
                  <h2 className="text-3xl font-bold text-deepvox-black">Contact Info</h2>
                </div>
                
                <div className="space-y-6">
                  {contactInfo.map((item, index) => (
                    <div key={index} className="flex items-start space-x-4 p-4 bg-gray-50 rounded-xl hover:shadow-md transition-shadow">
                      <div className="flex-shrink-0 w-12 h-12 bg-deepvox-blue rounded-lg flex items-center justify-center">
                        <div className="text-white">
                          {item.icon}
                        </div>
                      </div>
                      <div className="flex-1">
                        <h5 className="text-lg font-semibold text-deepvox-black mb-2">{item.title}</h5>
                        {item.link ? (
                          <a 
                            href={item.link} 
                            className="text-gray-700 hover:text-deepvox-accent transition-colors"
                          >
                            {item.content}
                          </a>
                        ) : (
                          <p className="text-gray-700 leading-relaxed">{item.content}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Social Media Links */}
                <div className="mt-8 pt-8 border-t border-gray-200">
                  <h3 className="text-lg font-semibold text-deepvox-black mb-4">Follow Us</h3>
                  <div className="flex space-x-4">
                    {socialLinks.map((social, index) => (
                      <a
                        key={index}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-deepvox-blue hover:shadow-md transition-all duration-200"
                      >
                        <img src={social.icon} alt={social.name} className="w-5 h-5" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            {/* Contact Form - Calendly Integration */}
            <div className="lg:col-span-3 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h4 className="text-2xl font-bold text-deepvox-black mb-2 text-center">
                  📅 Schedule Your Meeting Now
                </h4>
                <p className="text-gray-600 text-center mb-6">
                  Book a 30-minute consultation to discuss your AI transformation needs
                </p>
                <div className="calendly-inline-widget" 
                     data-url="https://calendly.com/deepvox-sales/30min" 
                     style={{ minWidth: '320px', height: '630px' }}>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-deepvox-black mb-4">
              Visit Our Office
            </h2>
            <p className="text-gray-600">
              Located at T-Hub, Hyderabad Knowledge City - the heart of India's innovation ecosystem
            </p>
          </div>
          
          <div className="animate-scale-in">
            <div className="rounded-xl overflow-hidden shadow-lg">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.525269768851!2d78.3766435746841!3d17.434555701445618!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb93e37831f177%3A0x32d4499d34baaa78!2sT-Hub%20Phase%202!5e0!3m2!1sen!2sin!4v1742646616877!5m2!1sen!2sin" 
                width="100%" 
                height="560" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="DeepVox Office Location"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Get Started Section */}
      <section className="py-20 bg-gradient-to-br from-deepvox-blue to-deepvox-accent text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h6 className="text-blue-200 font-medium mb-4">Get Started</h6>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                Let's Make Something Great Together
              </h2>
              <p className="text-lg text-blue-100 mb-8">
                Ready to transform your business with cutting-edge AI solutions? Our team is here to help you navigate the future of technology.
              </p>
              <div className="flex flex-wrap gap-4">
                <a 
                  href="/contact" 
                  className="bg-white text-deepvox-blue px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 inline-flex items-center"
                >
                  Contact Us
                  <ArrowRight className="w-5 h-5 ml-2" />
                </a>
                <a 
                  href="/solutions" 
                  className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-deepvox-blue transition-colors duration-200"
                >
                  Explore Solutions
                </a>
              </div>
            </div>
            
            <div className="animate-fade-in-up" style={{ animationDelay: '200ms' }}>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Users className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Expert Team</h3>
                    <p className="text-blue-100">AI specialists ready to guide your transformation</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Globe className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Global Reach</h3>
                    <p className="text-blue-100">Serving clients worldwide with local expertise</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Clock className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
                    <p className="text-blue-100">Round-the-clock assistance for your needs</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Calendar className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Quick Start</h3>
                    <p className="text-blue-100">Begin your AI journey in just 30 minutes</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;