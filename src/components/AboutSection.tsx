import { GraduationCap, MapPin, Calendar } from 'lucide-react';

const AboutSection = () => {
  const education = [
    {
      degree: "B.Tech, Computer Science (AI & ML)",
      institution: "Noida Institute of Engineering and Technology",
      duration: "2022 – 2026",
      score: "CGPA 8.01/10",
      icon: <GraduationCap className="text-primary" size={24} />
    },
    {
      degree: "Senior Secondary (CBSE)",
      institution: "CBSE Board",
      duration: "2021",
      score: "87%",
      icon: <GraduationCap className="text-accent" size={24} />
    },
    {
      degree: "High School (UPMSP)",
      institution: "UPMSP Board", 
      duration: "2019",
      score: "89.2%",
      icon: <GraduationCap className="text-primary" size={24} />
    }
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">About Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* About Description */}
          <div className="glass-card p-8 rounded-2xl mb-12 animate-slide-up">
            <p className="text-lg text-muted-foreground leading-relaxed text-center">
              Aspiring Software Development Engineer with a strong foundation in <span className="text-primary font-semibold">DSA</span>, 
              <span className="text-primary font-semibold"> backend systems</span>, and <span className="text-primary font-semibold">AI-powered applications</span>. 
              Skilled in Python, C++, JavaScript, and building scalable systems with Flask, FastAPI, Express.js, and Docker. 
              Passionate about creating innovative solutions that bridge the gap between artificial intelligence and real-world applications.
            </p>
          </div>

          {/* Education Timeline */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-center mb-8 text-primary">Education Journey</h3>
            
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 timeline-line transform md:-translate-x-1/2"></div>
              
              <div className="space-y-8">
                {education.map((edu, index) => (
                  <div key={index} className={`flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} animate-slide-up`} style={{animationDelay: `${index * 200}ms`}}>
                    {/* Timeline Dot */}
                    <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 bg-primary rounded-full border-4 border-background flex items-center justify-center z-10">
                      {edu.icon}
                    </div>
                    
                    {/* Content Card */}
                    <div className={`ml-16 md:ml-0 w-full md:w-5/12 ${index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'}`}>
                      <div className="glass-card p-6 rounded-xl hover:scale-105 transition-all duration-300">
                        <div className="flex items-center gap-2 mb-2">
                          <Calendar className="text-primary" size={16} />
                          <span className="text-sm text-accent font-medium">{edu.duration}</span>
                        </div>
                        <h4 className="text-lg font-bold text-foreground mb-1">{edu.degree}</h4>
                        <div className="flex items-center gap-2 mb-2">
                          <MapPin className="text-muted-foreground" size={16} />
                          <p className="text-muted-foreground text-sm">{edu.institution}</p>
                        </div>
                        <p className="text-primary font-semibold">{edu.score}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;