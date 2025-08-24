import { Briefcase, Calendar, MapPin, ArrowRight } from 'lucide-react';

const ExperienceSection = () => {
  const experience = {
    title: "Software Development Intern",
    company: "Aadiyog Healthtech Pvt Ltd",
    duration: "Jan 2025 – Apr 2025",
    location: "Remote",
    description: "Designed and developed AI-powered healthcare solutions with focus on computer vision and machine learning applications.",
    achievements: [
      "Designed AI assistant for 300 yoga poses using OpenCV + FastAPI APIs",
      "Built modular ML pipelines with NumPy optimizations for enhanced performance",
      "Reduced inference latency by 30% with MediaPipe + DTW-based pose matching",
      "Implemented real-time pose detection and correction algorithms",
      "Collaborated with cross-functional teams to deliver scalable healthcare solutions"
    ],
    technologies: ["Python", "OpenCV", "FastAPI", "MediaPipe", "NumPy", "Machine Learning", "Computer Vision"]
  };

  return (
    <section id="experience" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">Experience</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Professional journey in software development and AI/ML
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-4 md:left-8 top-0 bottom-0 w-0.5 timeline-line"></div>
            
            {/* Experience Card */}
            <div className="relative animate-slide-up">
              {/* Timeline Dot */}
              <div className="absolute left-4 md:left-8 transform -translate-x-1/2 w-8 h-8 bg-primary rounded-full border-4 border-background flex items-center justify-center z-10">
                <Briefcase className="text-primary-foreground" size={16} />
              </div>
              
              {/* Content */}
              <div className="ml-16 md:ml-20">
                <div className="glass-card p-8 rounded-2xl hover:scale-[1.02] transition-all duration-500">
                  {/* Header */}
                  <div className="mb-6">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                      <h3 className="text-2xl font-bold text-foreground">{experience.title}</h3>
                      <div className="flex items-center gap-2 text-accent font-semibold">
                        <Calendar size={16} />
                        <span>{experience.duration}</span>
                      </div>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-4">
                      <h4 className="text-lg font-semibold text-primary">{experience.company}</h4>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <MapPin size={16} />
                        <span>{experience.location}</span>
                      </div>
                    </div>
                    
                    <p className="text-muted-foreground leading-relaxed">{experience.description}</p>
                  </div>

                  {/* Achievements */}
                  <div className="mb-6">
                    <h5 className="text-lg font-semibold text-foreground mb-4">Key Achievements</h5>
                    <div className="space-y-3">
                      {experience.achievements.map((achievement, index) => (
                        <div 
                          key={index}
                          className="flex items-start gap-3 animate-slide-up"
                          style={{animationDelay: `${index * 100}ms`}}
                        >
                          <ArrowRight className="text-primary mt-1 flex-shrink-0" size={16} />
                          <span className="text-muted-foreground">{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h5 className="text-lg font-semibold text-foreground mb-4">Technologies Used</h5>
                    <div className="flex flex-wrap gap-2">
                      {experience.technologies.map((tech, index) => (
                        <span 
                          key={index}
                          className="skill-badge animate-scale-in"
                          style={{animationDelay: `${index * 50}ms`}}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;