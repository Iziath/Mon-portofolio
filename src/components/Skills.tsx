import { 
  Code2, 
  Palette, 
  Database,  
  Terminal,
  Users,
  Lightbulb,
  Target,
  MessageCircle
} from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Langages & Technologies",
      icon: Code2,
      skills: [
        { name: "HTML5", level: 95 },
        { name: "CSS3 / SCSS", level: 90 },
        { name: "JavaScript", level: 88 },
        { name: "TypeScript", level: 85 },
        { name: "React", level: 90 },
        { name: "React Native", level: 85 },
        { name: "Node.js", level: 80 }
      ]
    },
    {
      title: "Design & UI/UX",
      icon: Palette,
      skills: [
        { name: "Tailwind CSS", level: 92 },
        { name: "Responsive Design", level: 95 },
        { name: "UI/UX Design", level: 85 },
        { name: "Figma", level: 80 },
        { name: "Adobe Creative", level: 75 },
        { name: "Animations CSS", level: 88 }
      ]
    },
    {
      title: "Backend & Base de données",
      icon: Database,
      skills: [
        { name: "Next.js", level: 88 },
        { name: "Express.js", level: 85 },
        { name: "Node.js", level: 80 },
        { name: "MongoDB", level: 75 },
        { name: "PostgreSQL", level: 70 },
        { name: "Firebase", level: 80 },
        { name: "REST APIs", level: 82 },
        { name: "GraphQL", level: 65 }
      ]
    },
    {
      title: "Outils & Workflow",
      icon: Terminal,
      skills: [
        { name: "Git / GitHub", level: 90 },
        { name: "VS Code", level: 95 },
        { name: "Vite", level: 88 },
        { name: "Webpack", level: 75 },
        { name: "NPM / Yarn", level: 85 },
        { name: "Vercel / Netlify", level: 90 }
      ]
    }
  ];

  const softSkills = [
    {
      icon: Users,
      title: "Collaboration",
      description: "Travail en équipe et communication efficace"
    },
    {
      icon: Lightbulb,
      title: "Créativité",
      description: "Solutions innovantes et design original"
    },
    {
      icon: Target,
      title: "Orientée résultats",
      description: "Focus sur les objectifs et la performance"
    },
    {
      icon: MessageCircle,
      title: "Communication",
      description: "Écoute active et conseil personnalisé"
    }
  ];

  return (
    <section id="skills" className="py-20 px-6 bg-gray-900/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Mes <span className="text-red-500">Compétences</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Technologies maîtrisées et outils que j'utilise au quotidien
          </p>
        </div>

        {/* Technical Skills */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category) => {
            const IconComponent = category.icon;
            return (
              <div
                key={category.title}
                className="bg-gray-900/30 p-8 rounded-2xl border border-gray-800 hover:border-red-500/30 transition-all duration-300"
              >
                <div className="flex items-center mb-6">
                  <IconComponent className="w-8 h-8 text-red-500 mr-3" />
                  <h3 className="text-xl font-bold">{category.title}</h3>
                </div>
                
                <div className="space-y-4">
                  {category.skills.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-300 font-medium">{skill.name}</span>
                        <span className="text-red-500 text-sm font-semibold">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-800 rounded-full h-2">
                        <div
                          className="bg-gradient-to-r from-red-500 to-red-400 h-2 rounded-full transition-all duration-1000 ease-out"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Soft Skills */}
        <div>
          <h3 className="text-2xl font-bold text-center mb-8">
            Qualités <span className="text-red-500">Humaines</span>
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {softSkills.map((skill) => {
              const IconComponent = skill.icon;
              return (
                <div
                  key={skill.title}
                  className="text-center p-6 bg-gray-900/30 rounded-xl border border-gray-800 hover:border-red-500/30 transition-all duration-300 hover:transform hover:scale-105"
                >
                  <div className="bg-red-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="font-semibold mb-2">{skill.title}</h4>
                  <p className="text-gray-400 text-sm">{skill.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-red-500/10 to-transparent p-8 rounded-2xl border border-red-500/20">
            <h3 className="text-xl font-bold mb-4">En constante évolution</h3>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Passionnée par les nouvelles technologies, je me forme continuellement 
              pour rester à la pointe des dernières tendances du développement web 
              et offrir des solutions modernes et performantes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;