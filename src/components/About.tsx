import React from 'react';
import { MapPin, Calendar, Coffee, Heart } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Découvrez <span className="text-red-500">qui je suis</span>
          </h2>
          {/* <h2 className="text-4xl text-gray-400 max-w-2xl mx-auto">
            Découvrez qui je suis et ce qui me passionne
          </h2> */}
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Photo */}
          <div className="text-center lg:text-left">
            <div className="relative inline-block">
              <div className="w-80 h-80 mx-auto lg:mx-0 rounded-2xl overflow-hidden border-4 border-red-500/20 hover:border-red-500/40 transition-all duration-300">
                <img
                  src="https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Iziath - Développeuse Web"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-red-500 p-4 rounded-full">
                <Coffee className="w-6 h-6 text-white" />
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="space-y-6">
            <div>
              <h3 className="text-3xl font-bold mb-4">
                Salut, moi c'est <span className="text-red-500">Iziath</span> ! 
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Développeuse web passionnée depuis plus de 2 ans, je transforme vos idées 
                en expériences digitales modernes et performantes. Mon approche combine 
                créativité, technique et attention aux détails pour créer des solutions 
                web qui marquent les esprits.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                Spécialisée dans le développement fullstack (frontend & backend), 
                j'aime créer des interfaces utilisateur intuitives et élégantes. 
                Toujours à l'affût des dernières tendances, je m'assure que chaque 
                projet soit à la pointe de la technologie.
              </p>
            </div>

            {/* Infos personnelles */}
            <div className="grid md:grid-cols-2 gap-4 pt-6">
              <div className="flex items-center">
                <MapPin className="w-5 h-5 text-red-500 mr-3" />
                <span className="text-gray-300">Benin, Remote</span>
              </div>
              <div className="flex items-center">
                <Calendar className="w-5 h-5 text-red-500 mr-3" />
                <span className="text-gray-300">2+ ans d'expérience</span>
              </div>
              <div className="flex items-center">
                <Coffee className="w-5 h-5 text-red-500 mr-3" />
                <span className="text-gray-300">Café addict</span>
              </div>
              <div className="flex items-center">
                <Heart className="w-5 h-5 text-red-500 mr-3" />
                <span className="text-gray-300">Code & Design</span>
              </div>
            </div>

            {/* Citation */}
            <div className="bg-gray-900/50 p-6 rounded-xl border border-gray-800 mt-8">
              <blockquote className="text-gray-300 italic text-lg">
                "Le code, c'est de la poésie que seuls les ordinateurs peuvent lire. 
                Mon rôle est de faire en sorte que cette poésie raconte une belle histoire 
                à vos utilisateurs."
              </blockquote>
              <cite className="text-red-500 font-semibold mt-3 block">- Iziath</cite>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;