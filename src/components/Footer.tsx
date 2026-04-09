import React from "react";
import { FaLinkedin, FaGithub, FaTwitter, FaEnvelope, FaFacebook } from "react-icons/fa";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    navigation: [
      { name: 'About', href: '#about' },
      { name: 'Resume', href: '#resume' },
      { name: 'Projects', href: '#projects' },
      { name: 'Contact', href: '#contact' }
    ],
    social: [
      { name: 'LinkedIn', href: '#', icon: <FaLinkedin /> },
      { name: 'GitHub', href: '#', icon: <FaGithub /> },
      { name: 'Twitter', href: '#', icon: <FaTwitter /> },
      { name: 'Facebook', href: '#', icon: <FaFacebook /> },
      { name: 'Email', href: 'mailto:ramadhanwambia83@gmail.com', icon: <FaEnvelope /> }
    ]
  };

  return (
    <footer className="bg-gray-950 border-t border-gray-800/50">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Ramadhan
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Applied Statistics & Data Analytics student with frontend development skills, focused on creating insight-driven solutions for research and business.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Quick Links</h4>
            <div className="flex flex-col space-y-2">
              {footerLinks.navigation.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-300 text-sm"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Connect */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Connect</h4>
            <div className="flex flex-col space-y-2">
              {footerLinks.social.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target={social.href.startsWith('http') ? '_blank' : undefined}
                  rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-300 text-sm flex items-center gap-2"
                >
                  <span className="text-lg">{social.icon}</span>
                  {social.name}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-gray-800/50">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              © {currentYear} Ramadhan Wambia. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-xs text-gray-500">
              <span>Built with React & TypeScript</span>
              <span>•</span>
              <span>Powered by Vite</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;