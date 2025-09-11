import React, { useEffect, useState } from 'react';
import { ChevronDown, Code2, Sparkles } from 'lucide-react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-red-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-red-500 rounded-full blur-3xl"></div>
      </div>

      <div className="text-center z-10 max-w-4xl mx-auto px-6">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="flex items-center justify-center mb-6">
            <Code2 className="w-12 h-12 text-red-500 mr-4" />
            <Sparkles className="w-8 h-8 text-red-500 animate-pulse" />
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
            Iziath Sena AIWA
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
            Développeuse web passionnée, je crée des expériences digitales
            <br />
            <span className="text-red-500 font-semibold">modernes et performantes</span>
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button 
              onClick={() => scrollToSection('about')}
              className="bg-red-500 hover:bg-red-600 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-red-500/25"
            >
              En savoir plus sur moi
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="border border-gray-600 hover:border-red-500 text-gray-300 hover:text-white px-8 py-4 rounded-full font-semibold transition-all duration-300"
            >
              Discutons ensemble
            </button>
          </div>
        </div>
        
        <button 
          onClick={() => scrollToSection('about')}
          className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <ChevronDown className="w-8 h-8 text-gray-400 animate-bounce hover:text-red-500 transition-colors" />
        </button>
      </div>
    </section>
  );
};

export default Hero;