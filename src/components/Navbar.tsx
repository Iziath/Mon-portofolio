import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 50;
      setIsScrolled(scrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'translate-y-4 opacity-100' 
          : '-translate-y-20 opacity-0'
      }`}
    >
      <div className="bg-black/80 backdrop-blur-md rounded-full px-8 py-3 border border-gray-800/50">
        <ul className="flex space-x-8 text-sm font-medium">
          <li>
            <button 
              onClick={() => scrollToSection('hero')}
              className="text-gray-300 hover:text-red-500 transition-colors duration-300"
            >
              Accueil
            </button>
          </li>
          <li>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-gray-300 hover:text-red-500 transition-colors duration-300"
            >
              À propos
            </button>
          </li>
          <li>
            <button 
              onClick={() => scrollToSection('skills')}
              className="text-gray-300 hover:text-red-500 transition-colors duration-300"
            >
              Compétences
            </button>
          </li>
          <li>
            <button 
              onClick={() => scrollToSection('projects')}
              className="text-gray-300 hover:text-red-500 transition-colors duration-300"
            >
              Projets
            </button>
          </li>
          <li>
            <button 
              onClick={() => scrollToSection('pricing')}
              className="text-gray-300 hover:text-red-500 transition-colors duration-300"
            >
              Tarifs
            </button>
          </li>
          <li>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-gray-300 hover:text-red-500 transition-colors duration-300"
            >
              Contact
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;