import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Linkedin, Twitter, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  const footerSections = [
    {
      title: 'Solutions',
      links: [
        { name: 'Enterprise AI Stack™', href: '/solutions/enterprise-ai-stack' },
        { name: 'EchoLeads.ai Agents', href: '/solutions/echoleads-agents' },
        { name: 'Healthcare AI', href: '/solutions/healthcare' },
        { name: 'Financial Services', href: '/solutions/financial-services' },
        { name: 'Voice AI Platform', href: '/solutions/voice-ai' },
        { name: 'HR AI', href: '/solutions/ai-for-hr' },
      ]
    },
    {
      title: 'Technology',
      links: [
        { name: 'Security & Privacy', href: '/technology/security' },
        { name: 'AI Models', href: '/technology/ai-models' },
        { name: 'Integrations', href: '/technology/integrations' },
      ]
    },
    {
      title: 'Resources',
      links: [
        { name: 'Case Studies', href: '/resources/case-studies' },
        { name: 'Blog', href: '/blog' },
      ]
    },
    {
      title: 'Company',
      links: [
        { name: 'About Us', href: '/company/about' },
        { name: 'Contact Us', href: '/contact' },
        { name: 'Terms & Conditions', href: '/terms' },
        { name: 'Privacy Policy', href: '/privacy-policy' },
      ]
    }
  ];

  return (
    <footer className="bg-deepvox-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center mb-4">
              <img 
                src="/footer_logo1.png" 
                alt="DeepVox Logo" 
                className="h-24 w-auto"
                style={{ maxHeight: '96px', width: 'auto' }}
              />
            </Link>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Privacy-First Enterprise AI Stack™. Transform your business securely with our 
              comprehensive AI solutions designed for enterprise-grade implementation.
            </p>
            <div className="space-y-2 text-sm text-gray-300">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>+91 9000935106</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span>sales@deepvox.ai</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4" />
                <span>Plot No 1/C Sy No 83/1, T-Hub,<br />
                Raidurgam panmaktha<br />
                Hyderabad Knowledge City,<br />
                Serilingampally(M), Hyderabad,<br />
                Telangana,500081</span>
              </div>
            </div>
          </div>

          {/* Footer Sections */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="text-lg font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-gray-300 hover:text-deepvox-accent transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            {/* Copyright */}
            <div className="text-gray-300 text-sm">
              © 2025 DeepVox.ai. All rights reserved.
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-4">
              <a
                href="https://www.facebook.com/profile.php?id=61573916049164"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-deepvox-accent transition-colors duration-200"
                aria-label="Facebook"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a
                href="https://www.instagram.com/deepvox_ai/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-deepvox-accent transition-colors duration-200"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/deepvox-ai"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-deepvox-accent transition-colors duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://x.com/Deepvox_AI"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-deepvox-accent transition-colors duration-200"
                aria-label="X (Twitter)"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a
                href="https://www.youtube.com/@deepvoxai"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-deepvox-accent transition-colors duration-200"
                aria-label="YouTube"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
            </div>

            {/* Trust Badges */}
            <div className="flex items-center space-x-4 text-xs text-gray-400">
              <span className="bg-gray-800 px-2 py-1 rounded">SOC 2 Certified</span>
              <span className="bg-gray-800 px-2 py-1 rounded">HIPAA Compliant</span>
              <span className="bg-gray-800 px-2 py-1 rounded">ISO 27001</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;