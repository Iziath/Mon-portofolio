import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 50;
      setIsScrolled(scrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Fermer le menu mobile lors du scroll
    if (isMobileMenuOpen) {
      const handleScroll = () => setIsMobileMenuOpen(false);
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, [isMobileMenuOpen]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const navItems = [
    { id: 'hero', label: 'Accueil' },
    { id: 'about', label: 'À propos' },
    { id: 'skills', label: 'Compétences' },
    { id: 'projects', label: 'Projets' },
    { id: 'pricing', label: 'Tarifs' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <>
      {/* Navbar Desktop */}
      <nav
        className={`hidden md:block fixed top-0 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-500 ${
          isScrolled 
            ? 'translate-y-4 opacity-100' 
            : '-translate-y-20 opacity-0'
        }`}
      >
        <div className="bg-black/80 backdrop-blur-md rounded-full px-8 py-3 border border-gray-800/50">
          <ul className="flex space-x-8 text-sm font-medium">
            {navItems.map((item) => (
              <li key={item.id}>
                <button 
                  onClick={() => scrollToSection(item.id)}
                  className="text-gray-300 hover:text-red-500 transition-colors duration-300"
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Navbar Mobile */}
      <nav
        className={`md:hidden fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-black/90 backdrop-blur-md border-b border-gray-800/50' 
            : 'bg-transparent'
        }`}
      >
        <div className="flex items-center justify-between px-4 py-3">
          <button
            onClick={() => scrollToSection('hero')}
            className="text-xl font-bold text-red-500"
          >
            Iziath
          </button>
          
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-gray-300 hover:text-red-500 transition-colors p-2"
            aria-label="Menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Menu mobile déroulant */}
        <div
          className={`overflow-hidden transition-all duration-300 ${
            isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="bg-black/95 backdrop-blur-md border-t border-gray-800/50 px-4 py-4">
            <ul className="space-y-3">
              {navItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className="w-full text-left text-gray-300 hover:text-red-500 transition-colors duration-300 py-2 px-4 rounded-lg hover:bg-gray-900/50"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;