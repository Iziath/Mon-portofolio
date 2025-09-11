import React, { useState } from 'react';
import { ExternalLink, Github, Smartphone, Globe, ShoppingCart, Database, Palette, Code2 } from 'lucide-react';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [visibleProjects, setVisibleProjects] = useState(6);

  const categories = [
    { id: 'all', name: 'Tous', icon: Code2 },
    { id: 'e-commerce', name: 'E-commerce', icon: ShoppingCart },
    { id: 'vitrine', name: 'Sites Vitrine', icon: Globe },
    { id: 'application', name: 'Applications', icon: Smartphone },
    { id: 'design', name: 'Design', icon: Palette }
  ];

  const projects = [
    {
      title: "E-commerce Fashion",
      category: "e-commerce",
      description: "Boutique en ligne moderne avec panier, paiement sécurisé et gestion des stocks.",
      image: "https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=800",
      tech: ["React", "Node.js", "Stripe", "MongoDB"],
      icon: ShoppingCart,
      links: { demo: "#", github: "#" },
      featured: true
    },
    {
      title: "Portfolio Créatif",
      category: "vitrine",
      description: "Portfolio interactif pour un artiste avec galerie d'œuvres et animations personnalisées.",
      image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800",
      tech: ["React", "Framer Motion", "Tailwind", "Vercel"],
      icon: Globe,
      links: { demo: "#", github: "#" },
      featured: false
    },
    {
      title: "App Mobile Fitness",
      category: "application",
      description: "Application de suivi d'entraînement avec tableaux de bord et statistiques avancées.",
      image: "https://images.pexels.com/photos/4164771/pexels-photo-4164771.jpeg?auto=compress&cs=tinysrgb&w=800",
      tech: ["React Native", "Firebase", "TypeScript", "Expo"],
      icon: Smartphone,
      links: { demo: "#", github: "#" },
      featured: true
    },
    {
      title: "Dashboard Analytics",
      category: "application",
      description: "Interface d'administration avec graphiques interactifs et gestion des données en temps réel.",
      image: "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800",
      tech: ["Vue.js", "D3.js", "Express", "PostgreSQL"],
      icon: Database,
      links: { demo: "#", github: "#" },
      featured: false
    },
    {
      title: "Restaurant Gastronomique",
      category: "vitrine",
      description: "Site vitrine élégant avec réservation en ligne et menu interactif.",
      image: "https://images.pexels.com/photos/1581384/pexels-photo-1581384.jpeg?auto=compress&cs=tinysrgb&w=800",
      tech: ["Next.js", "Tailwind", "Sanity", "Netlify"],
      icon: Globe,
      links: { demo: "#", github: "#" },
      featured: false
    },
    {
      title: "Marketplace B2B",
      category: "e-commerce",
      description: "Plateforme de vente B2B avec système de commandes complexe et multi-vendeurs.",
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800",
      tech: ["React", "Node.js", "GraphQL", "AWS"],
      icon: ShoppingCart,
      links: { demo: "#", github: "#" },
      featured: true
    },
    {
      title: "App de Méditation",
      category: "application",
      description: "Application mobile de méditation avec sessions guidées et suivi de progression.",
      image: "https://images.pexels.com/photos/3822622/pexels-photo-3822622.jpeg?auto=compress&cs=tinysrgb&w=800",
      tech: ["Flutter", "Firebase", "Stripe", "REST API"],
      icon: Smartphone,
      links: { demo: "#", github: "#" },
      featured: false
    },
    {
      title: "Agence Immobilière",
      category: "vitrine",
      description: "Site vitrine moderne avec recherche avancée et visite virtuelle 360°.",
      image: "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800",
      tech: ["React", "Three.js", "Node.js", "MongoDB"],
      icon: Globe,
      links: { demo: "#", github: "#" },
      featured: false
    },
    {
      title: "Système de Réservation",
      category: "application",
      description: "Plateforme de réservation multi-services avec calendrier intelligent et notifications.",
      image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800",
      tech: ["Vue.js", "Laravel", "MySQL", "Socket.io"],
      icon: Database,
      links: { demo: "#", github: "#" },
      featured: false
    }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const displayedProjects = filteredProjects.slice(0, visibleProjects);
  const hasMoreProjects = filteredProjects.length > visibleProjects;

  const loadMoreProjects = () => {
    setVisibleProjects(prev => prev + 6);
  };

  return (
    <section id="projects" className="py-20 px-6 bg-gray-900/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Mes <span className="text-red-500">Projets</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-8">
            Une sélection de mes réalisations récentes dans différents domaines
          </p>

          {/* Filtres par catégorie */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {categories.map((category) => {
              const IconComponent = category.icon;
              return (
                <button
                  key={category.id}
                  onClick={() => {
                    setActiveFilter(category.id);
                    setVisibleProjects(6);
                  }}
                  className={`flex items-center px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeFilter === category.id
                      ? 'bg-red-500 text-white shadow-lg shadow-red-500/25'
                      : 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white'
                  }`}
                >
                  <IconComponent className="w-4 h-4 mr-2" />
                  {category.name}
                </button>
              );
            })}
          </div>
        </div>

        {/* Projets en vedette */}
        {activeFilter === 'all' && (
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-8 text-center">
              Projets <span className="text-red-500">en vedette</span>
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.filter(project => project.featured).map((project, index) => {
                const IconComponent = project.icon;
                return (
                  <div
                    key={`featured-${project.title}`}
                    className="group bg-gray-900/50 rounded-2xl overflow-hidden border-2 border-red-500/30 hover:border-red-500 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl hover:shadow-red-500/20"
                  >
                    <div className="relative overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                      <div className="absolute top-4 right-4">
                        <IconComponent className="w-6 h-6 text-white bg-red-500 p-1 rounded" />
                      </div>
                      <div className="absolute top-4 left-4">
                        <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full font-semibold">
                          Vedette
                        </span>
                      </div>
                    </div>

                    <div className="p-6">
                      <h4 className="text-xl font-bold mb-3 group-hover:text-red-500 transition-colors">
                        {project.title}
                      </h4>
                      
                      <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.tech.map((tech) => (
                          <span
                            key={tech}
                            className="text-xs px-3 py-1 bg-gray-800 text-gray-300 rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      <div className="flex gap-3">
                        <a
                          href={project.links.demo}
                          className="flex items-center text-sm text-gray-400 hover:text-red-500 transition-colors"
                        >
                          <ExternalLink className="w-4 h-4 mr-1" />
                          Demo
                        </a>
                        <a
                          href={project.links.github}
                          className="flex items-center text-sm text-gray-400 hover:text-red-500 transition-colors"
                        >
                          <Github className="w-4 h-4 mr-1" />
                          Code
                        </a>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Tous les projets */}
        <div>
          {activeFilter !== 'all' && (
            <h3 className="text-2xl font-bold mb-8 text-center">
              {categories.find(cat => cat.id === activeFilter)?.name}
              <span className="text-gray-400 text-lg ml-2">
                ({filteredProjects.length} projet{filteredProjects.length > 1 ? 's' : ''})
              </span>
            </h3>
          )}
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayedProjects.map((project, index) => {
              const IconComponent = project.icon;
              return (
                <div
                  key={`${activeFilter}-${project.title}-${index}`}
                  className="group bg-gray-900/50 rounded-2xl overflow-hidden border border-gray-800 hover:border-red-500/50 transition-all duration-300 hover:transform hover:scale-105"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <div className="absolute top-4 right-4">
                      <IconComponent className="w-6 h-6 text-white bg-red-500 p-1 rounded" />
                    </div>
                  </div>

                  <div className="p-6">
                    <h4 className="text-xl font-bold mb-3 group-hover:text-red-500 transition-colors">
                      {project.title}
                    </h4>
                    
                    <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="text-xs px-3 py-1 bg-gray-800 text-gray-300 rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-3">
                      <a
                        href={project.links.demo}
                        className="flex items-center text-sm text-gray-400 hover:text-red-500 transition-colors"
                      >
                        <ExternalLink className="w-4 h-4 mr-1" />
                        Demo
                      </a>
                      <a
                        href={project.links.github}
                        className="flex items-center text-sm text-gray-400 hover:text-red-500 transition-colors"
                      >
                        <Github className="w-4 h-4 mr-1" />
                        Code
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bouton "Voir plus" */}
          {hasMoreProjects && (
            <div className="text-center mt-12">
              <button
                onClick={loadMoreProjects}
                className="bg-gray-800 hover:bg-red-500 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-red-500/25"
              >
                Voir plus de projets ({filteredProjects.length - visibleProjects} restants)
              </button>
            </div>
          )}
        </div>

        {/* Message si aucun projet */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-400 text-lg">
              Aucun projet trouvé dans cette catégorie.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;