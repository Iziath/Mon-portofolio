import { useState } from 'react';
import { ExternalLink, Github, Globe, Database, Palette, Code2, MessageCircle, Smartphone } from 'lucide-react';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [visibleProjects, setVisibleProjects] = useState(6);

  const categories = [
    { id: 'all', name: 'Tous', icon: Code2 },
    { id: 'application', name: 'Applications', icon: Globe },
    { id: 'library', name: 'Bibliothèques', icon: Code2 },
    { id: 'framework', name: 'Frameworks', icon: Globe },
    { id: 'tool', name: 'Outils', icon: Database },
    { id: 'ui', name: 'UI/UX', icon: Palette }
  ];

  const projects = [
    {
      title: "Shora",
      category: "application",
      description: "Application web fullstack moderne avec frontend React, backend API et chatbot intelligent intégré. Inclut un dashboard administrateur complet pour la gestion et le suivi des données en temps réel. Architecture modulaire avec trois dépôts séparés.",
      image: "/assets/images/Captureshora.JPG",
      tech: ["React", "TypeScript", "Node.js", "Chatbot AI", "Dashboard", "WhatsApp API"],
      icon: MessageCircle,
      links: { 
        demo: "https://shora-front.vercel.app/", 
        github: "https://github.com/Iziath/shora_front",
        githubBackend: "https://github.com/Iziath/shora-backend",
        githubBot: "https://github.com/Iziath/shora",
        dashboard: "https://shora-front.vercel.app/dashboard"
      },
      featured: true
    },
    {
      title: "Sellwave (Auctify)",
      category: "application",
      description: "Application mobile de vente aux enchères développée avec Flutter. Plateforme complète permettant aux utilisateurs de créer, suivre et participer à des enchères en temps réel. Inclut une application administrateur séparée pour la gestion des ventes et des utilisateurs.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80",
      tech: ["Flutter", "Dart", "Firebase", "Mobile", "Admin Panel"],
      icon: Smartphone,
      links: { 
        github: "https://github.com/Iziath/sellwave",
        githubAdmin: "https://github.com/Iziath/auctify_admin"
      },
      featured: true
    },
    {
      title: "RAMP-BENIN E-LEARNING",
      category: "application",
      description: "Plateforme e-learning complète développée avec WordPress pour RAMP-BENIN. Système de gestion de cours en ligne avec inscriptions, suivi des apprenants, certifications et gestion des enseignants. Focus sur les formations en paix, sécurité et gouvernance.",
      image: "/assets/images/Captureramp.JPG",
      tech: ["WordPress", "PHP", "MySQL", "E-Learning", "LMS"],
      icon: Globe,
      links: { 
        demo: "https://www.e-learning.ramp-afrique.org/"
      },
      featured: true
    },
    {
      title: "Gestion de Dépenses",
      category: "application",
      description: "Application mobile de gestion de dépenses personnelles développée avec React Native et TypeScript. Suivi des revenus et dépenses, catégorisation, statistiques et rapports visuels. Application en cours de développement.",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80",
      tech: ["React Native", "TypeScript", "Expo", "Mobile", "Finance"],
      icon: Smartphone,
      links: { 
        github: "https://github.com/Iziath/gestion-de-depense"
      },
      featured: false
    }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  // Exclure les projets en vedette de la liste "Tous les projets" quand on est sur "all"
  const projectsToDisplay = activeFilter === 'all' 
    ? filteredProjects.filter(project => !project.featured)
    : filteredProjects;

  const displayedProjects = projectsToDisplay.slice(0, visibleProjects);
  const hasMoreProjects = projectsToDisplay.length > visibleProjects;

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
            Projets open source auxquels j'ai contribué ou que j'utilise dans mes développements
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
              {projects.filter(project => project.featured).map((project) => {
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

                      <div className="flex flex-col gap-2">
                        <div className="flex gap-3 flex-wrap">
                          {project.links.demo && (
                            <a
                              href={project.links.demo}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center text-sm text-gray-400 hover:text-red-500 transition-colors"
                            >
                              <ExternalLink className="w-4 h-4 mr-1" />
                              Demo
                            </a>
                          )}
                          {project.links.dashboard && (
                            <a
                              href={project.links.dashboard}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center text-sm text-gray-400 hover:text-red-500 transition-colors"
                            >
                              <Database className="w-4 h-4 mr-1" />
                              Dashboard
                            </a>
                          )}
                          {project.links.github && (
                            <a
                              href={project.links.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center text-sm text-gray-400 hover:text-red-500 transition-colors"
                            >
                              <Github className="w-4 h-4 mr-1" />
                              {project.links.githubBackend || project.links.githubBot || project.links.githubAdmin ? (project.links.githubAdmin ? 'Mobile' : 'Frontend') : 'Code'}
                            </a>
                          )}
                        </div>
                        {(project.links.githubBackend || project.links.githubBot || project.links.githubAdmin) && (
                          <div className="flex gap-3 flex-wrap text-xs">
                            {project.links.githubBackend && (
                              <a
                                href={project.links.githubBackend}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center text-gray-500 hover:text-red-500 transition-colors"
                              >
                                <Github className="w-3 h-3 mr-1" />
                                Backend
                              </a>
                            )}
                            {project.links.githubBot && (
                              <a
                                href={project.links.githubBot}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center text-gray-500 hover:text-red-500 transition-colors"
                              >
                                <Github className="w-3 h-3 mr-1" />
                                Bot
                              </a>
                            )}
                            {project.links.githubAdmin && (
                              <a
                                href={project.links.githubAdmin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center text-gray-500 hover:text-red-500 transition-colors"
                              >
                                <Github className="w-3 h-3 mr-1" />
                                Admin
                              </a>
                            )}
                          </div>
                        )}
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
                ({projectsToDisplay.length} projet{projectsToDisplay.length > 1 ? 's' : ''})
              </span>
            </h3>
          )}
          {activeFilter === 'all' && projectsToDisplay.length > 0 && (
            <h3 className="text-2xl font-bold mb-8 text-center">
              Autres <span className="text-red-500">Projets</span>
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

                    <div className="flex flex-col gap-2">
                      <div className="flex gap-3 flex-wrap">
                        {project.links.demo && (
                          <a
                            href={project.links.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center text-sm text-gray-400 hover:text-red-500 transition-colors"
                          >
                            <ExternalLink className="w-4 h-4 mr-1" />
                            Demo
                          </a>
                        )}
                        {project.links.dashboard && (
                          <a
                            href={project.links.dashboard}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center text-sm text-gray-400 hover:text-red-500 transition-colors"
                          >
                            <Database className="w-4 h-4 mr-1" />
                            Dashboard
                          </a>
                        )}
                        {project.links.github && (
                          <a
                            href={project.links.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center text-sm text-gray-400 hover:text-red-500 transition-colors"
                          >
                            <Github className="w-4 h-4 mr-1" />
                            {project.links.githubBackend || project.links.githubBot || project.links.githubAdmin ? (project.links.githubAdmin ? 'Mobile' : 'Frontend') : 'Code'}
                          </a>
                        )}
                      </div>
                      {(project.links.githubBackend || project.links.githubBot || project.links.githubAdmin) && (
                        <div className="flex gap-3 flex-wrap text-xs">
                          {project.links.githubBackend && (
                            <a
                              href={project.links.githubBackend}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center text-gray-500 hover:text-red-500 transition-colors"
                            >
                              <Github className="w-3 h-3 mr-1" />
                              Backend
                            </a>
                          )}
                          {project.links.githubBot && (
                            <a
                              href={project.links.githubBot}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center text-gray-500 hover:text-red-500 transition-colors"
                            >
                              <Github className="w-3 h-3 mr-1" />
                              Bot
                            </a>
                          )}
                          {project.links.githubAdmin && (
                            <a
                              href={project.links.githubAdmin}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center text-gray-500 hover:text-red-500 transition-colors"
                            >
                              <Github className="w-3 h-3 mr-1" />
                              Admin
                            </a>
                          )}
                        </div>
                      )}
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
                Voir plus de projets ({projectsToDisplay.length - visibleProjects} restants)
              </button>
            </div>
          )}
        </div>

        {/* Message si aucun projet */}
        {projectsToDisplay.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-400 text-lg">
              {activeFilter === 'all' ? 'Tous les projets sont en vedette.' : 'Aucun projet trouvé dans cette catégorie.'}
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;