import { Code, Database, Wrench, Brain, TestTube, GitBranch } from 'lucide-react';

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Languages",
      icon: <Code className="text-primary" size={24} />,
      skills: ["Python", "C++", "JavaScript", "SQL"],
      color: "from-primary to-cyan-400"
    },
    {
      title: "Frameworks & Tools",
      icon: <Wrench className="text-accent" size={24} />,
      skills: ["Express.js", "Flask", "FastAPI", "Git", "GitHub Actions", "Docker"],
      color: "from-accent to-purple-400"
    },
    {
      title: "AI/ML Libraries",
      icon: <Brain className="text-emerald-400" size={24} />,
      skills: ["TensorFlow", "PyTorch", "Scikit-learn", "OpenCV", "MediaPipe"],
      color: "from-emerald-400 to-teal-400"
    },
    {
      title: "Databases",
      icon: <Database className="text-orange-400" size={24} />,
      skills: ["MongoDB", "MySQL"],
      color: "from-orange-400 to-red-400"
    },
    {
      title: "Core Concepts",
      icon: <GitBranch className="text-pink-400" size={24} />,
      skills: ["REST APIs", "OOP", "DSA", "SDLC", "Agile", "SOLID Principles", "Version Control"],
      color: "from-pink-400 to-rose-400"
    },
    {
      title: "Testing & CI",
      icon: <TestTube className="text-violet-400" size={24} />,
      skills: ["Unit Testing", "PyTest", "Postman", "GitHub Actions"],
      color: "from-violet-400 to-indigo-400"
    }
  ];

  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">Technical Skills</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            A comprehensive toolkit for building modern, scalable applications
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div 
              key={categoryIndex} 
              className="glass-card p-6 rounded-2xl hover:scale-105 transition-all duration-500 animate-slide-up"
              style={{animationDelay: `${categoryIndex * 150}ms`}}
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className={`p-3 rounded-lg bg-gradient-to-r ${category.color} bg-opacity-20`}>
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-foreground">{category.title}</h3>
              </div>

              {/* Skills Grid */}
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="skill-badge animate-scale-in"
                    style={{animationDelay: `${(categoryIndex * 150) + (skillIndex * 50)}ms`}}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Skill Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { label: "Languages", count: "4+" },
            { label: "Frameworks", count: "6+" },
            { label: "AI/ML Tools", count: "5+" },
            { label: "Projects", count: "10+" }
          ].map((stat, index) => (
            <div 
              key={index}
              className="text-center glass-card p-6 rounded-xl animate-scale-in"
              style={{animationDelay: `${800 + (index * 100)}ms`}}
            >
              <div className="text-3xl font-bold gradient-text mb-2">{stat.count}</div>
              <div className="text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;