import { ExternalLink, Github, Eye, Brain, Activity } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ProjectsSection = () => {
  const projects = [
    {
      title: "MetaHire",
      subtitle: "AI-Powered Mock Interview Platform",
      description: "Comprehensive mock interview platform with AI-driven feedback and real-time proctoring capabilities. Features include webcam-based monitoring, question generation, and detailed performance analytics.",
      features: [
        "Backend built with Express.js, FastAPI, and MongoDB",
        "Google Gemini APIs for real-time feedback & question generation",
        "Webcam-based proctoring (face detection, gaze tracking)",
        "YOLO-based phone detection for exam integrity",
        "Real-time interview scoring and feedback system"
      ],
      technologies: ["Express.js", "FastAPI", "MongoDB", "Google Gemini", "OpenCV", "YOLO", "JavaScript", "Python"],
      icon: <Brain className="text-primary" size={32} />,
      color: "from-primary to-cyan-400",
      github: "https://github.com/pratyushojha04/metahire",
      demo: "https://metahire-demo.com"
    },
    {
      title: "FITTAB",
      subtitle: "AI Fitness Tracker & Planner",
      description: "Smart fitness tracking web application that monitors posture, analyzes workout form, and generates personalized meal and workout plans using advanced computer vision and AI.",
      features: [
        "Posture monitoring with Flask + OpenCV + MediaPipe",
        "Real-time exercise form analysis and correction",
        "Integrated Gemini LLMs for meal/workout planning",
        "Progressive workout difficulty adjustment",
        "Comprehensive fitness dashboard and analytics"
      ],
      technologies: ["Flask", "OpenCV", "MediaPipe", "Gemini LLM", "Python", "TensorFlow", "Computer Vision"],
      icon: <Activity className="text-accent" size={32} />,
      color: "from-accent to-purple-400",
      github: "https://github.com/pratyushojha04/fittab",
      demo: "https://fittab-demo.com"
    }
  ];

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">Featured Projects</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Innovative AI-powered applications solving real-world problems
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="project-card p-8 rounded-2xl animate-slide-up"
              style={{animationDelay: `${index * 200}ms`}}
            >
              {/* Project Header */}
              <div className="mb-6">
                <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${project.color} bg-opacity-20 mb-4`}>
                  {project.icon}
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-2">{project.title}</h3>
                <p className="text-lg text-primary font-semibold mb-4">{project.subtitle}</p>
                <p className="text-muted-foreground leading-relaxed">{project.description}</p>
              </div>

              {/* Features */}
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-foreground mb-4">Key Features</h4>
                <ul className="space-y-2">
                  {project.features.map((feature, featureIndex) => (
                    <li 
                      key={featureIndex}
                      className="flex items-start gap-2 text-muted-foreground animate-fade-in"
                      style={{animationDelay: `${(index * 200) + (featureIndex * 50)}ms`}}
                    >
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies */}
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-foreground mb-4">Technologies</h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="skill-badge animate-scale-in"
                      style={{animationDelay: `${(index * 200) + (techIndex * 30)}ms`}}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground transition-all duration-300 hover:scale-105"
                  onClick={() => window.open(project.github, '_blank')}
                >
                  <Github className="mr-2" size={20} />
                  View Code
                </Button>
                
                <Button 
                  variant="outline"
                  className="flex-1 glass-card border-primary/50 text-primary hover:bg-primary/10 transition-all duration-300 hover:scale-105"
                  onClick={() => window.open(project.demo, '_blank')}
                >
                  <ExternalLink className="mr-2" size={20} />
                  Live Demo
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* View More Projects */}
        <div className="text-center mt-12 animate-fade-in">
          <Button 
            variant="outline"
            className="glass-card border-accent/50 text-accent hover:bg-accent/10 px-8 py-3 transition-all duration-300 hover:scale-105"
            onClick={() => window.open('https://github.com/pratyushojha04', '_blank')}
          >
            <Eye className="mr-2" size={20} />
            View All Projects on GitHub
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;