import React from 'react';
import { Heart, Mail } from 'lucide-react';

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="border-t border-gray-800 py-8 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <p className="text-gray-400 text-sm">
              © 2024 Iziath - Développeuse web
            </p>
          </div>
          
          <div className="flex items-center space-x-6">
            <button
              onClick={() => scrollToSection('contact')}
              className="flex items-center text-gray-400 hover:text-red-500 transition-colors text-sm"
            >
              <Mail className="w-4 h-4 mr-1" />
              Contact
            </button>
            
            <div className="flex items-center text-gray-400 text-sm">
              Fait avec <Heart className="w-4 h-4 mx-1 text-red-500" /> et du code
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;