import React from 'react';
import { Check, Star, Zap, Crown } from 'lucide-react';

const Pricing = () => {
  const plans = [
    {
      name: "Site Vitrine",
      icon: Star,
      price: " A partir de 153€",
      description: "Parfait pour présenter votre activité "  ,
      features: [
        "Design responsive sur mesure",
        "Jusqu'à 5 pages",
        "Optimisation SEO de base",
        "Formulaire de contact",
        "Hébergement 1 an inclus",
        "Support 3 mois"
      ],
      popular: false
    },
    {
      name: "Site E-commerce",
      icon: Zap,
      price: "A partir de 458€",
      description: "Pour vendre vos produits en ligne",
      features: [
        "Boutique en ligne complète",
        "Gestion des produits",
        "Paiement sécurisé",
        "Gestion des commandes",
        "Tableau de bord admin",
        "Formation incluse",
        "Support 6 mois"
      ],
      popular: true
    },
    {
      name: "Application Web",
      icon: Crown,
      price: "Sur devis",
      description: "Solutions complexes et personnalisées",
      features: [
        "Développement sur mesure",
        "Architecture scalable",
        "Base de données avancée",
        "API et intégrations",
        "Tests et déploiement",
        "Maintenance continue"
      ],
      popular: false
    }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="pricing" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Mes <span className="text-red-500">Tarifs</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Des solutions adaptées à vos besoins et votre budget
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => {
            const IconComponent = plan.icon;
            return (
              <div
                key={plan.name}
                className={`relative p-8 rounded-2xl border transition-all duration-300 hover:transform hover:scale-105 ${
                  plan.popular 
                    ? 'border-red-500 bg-gradient-to-b from-red-500/10 to-transparent' 
                    : 'border-gray-800 hover:border-gray-600'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-red-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Populaire
                    </span>
                  </div>
                )}

                <div className="text-center mb-8">
                  <IconComponent className={`w-12 h-12 mx-auto mb-4 ${plan.popular ? 'text-red-500' : 'text-gray-400'}`} />
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <p className="text-gray-400 mb-4">{plan.description}</p>
                  <div className="text-4xl font-bold text-red-500">{plan.price}</div>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <Check className="w-5 h-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => scrollToSection('contact')}
                  className={`w-full py-3 rounded-full font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-red-500 hover:bg-red-600 text-white hover:shadow-lg hover:shadow-red-500/25'
                      : 'border border-gray-600 hover:border-red-500 text-gray-300 hover:text-white'
                  }`}
                >
                  Choisir ce plan
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Pricing;