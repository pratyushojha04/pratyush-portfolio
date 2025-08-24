import { Trophy, Award, Medal, TrendingUp, Star, Target } from 'lucide-react';

const AchievementsSection = () => {
  const achievements = [
    {
      title: "Kaggle Expert",
      description: "6+ competitions, 20+ ML notebooks",
      detail: "Global Rank: 800",
      icon: <Trophy className="text-yellow-400" size={32} />,
      color: "from-yellow-400 to-orange-400",
      badge: "Expert"
    },
    {
      title: "Top 5% Hackathon",
      description: "Kaggle Hackathon Performance",
      detail: "Outstanding problem-solving skills",
      icon: <Medal className="text-primary" size={32} />,
      color: "from-primary to-cyan-400",
      badge: "Top 5%"
    },
    {
      title: "Machine Learning Certification",
      description: "Coursera Certified",
      detail: "Comprehensive ML fundamentals",
      icon: <Award className="text-accent" size={32} />,
      color: "from-accent to-purple-400",
      badge: "Certified"
    },
    {
      title: "Deep Learning for Developers",
      description: "Infosys SpringBoard",
      detail: "Advanced neural networks",
      icon: <Star className="text-emerald-400" size={32} />,
      color: "from-emerald-400 to-teal-400",
      badge: "Advanced"
    }
  ];

  const stats = [
    {
      number: "800",
      label: "Global Kaggle Rank",
      icon: <TrendingUp className="text-primary" size={24} />
    },
    {
      number: "6+",
      label: "Kaggle Competitions",
      icon: <Target className="text-accent" size={24} />
    },
    {
      number: "20+",
      label: "ML Notebooks",
      icon: <Award className="text-emerald-400" size={24} />
    },
    {
      number: "2",
      label: "Certifications",
      icon: <Medal className="text-yellow-400" size={24} />
    }
  ];

  return (
    <section id="achievements" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">Achievements & Certifications</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Recognition for excellence in machine learning and software development
          </p>
        </div>

        {/* Achievement Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="glass-card p-6 rounded-xl text-center hover:scale-105 transition-all duration-300 animate-scale-in"
              style={{animationDelay: `${index * 100}ms`}}
            >
              <div className="flex justify-center mb-3">
                {stat.icon}
              </div>
              <div className="text-3xl font-bold gradient-text mb-2">{stat.number}</div>
              <div className="text-muted-foreground text-sm">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Achievement Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {achievements.map((achievement, index) => (
            <div 
              key={index}
              className="glass-card p-8 rounded-2xl hover:scale-105 transition-all duration-500 animate-slide-up"
              style={{animationDelay: `${index * 150}ms`}}
            >
              <div className="flex items-start gap-6">
                {/* Icon */}
                <div className={`p-4 rounded-2xl bg-gradient-to-r ${achievement.color} bg-opacity-20 flex-shrink-0`}>
                  {achievement.icon}
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-bold text-foreground">{achievement.title}</h3>
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${achievement.color} text-white`}>
                      {achievement.badge}
                    </span>
                  </div>
                  
                  <p className="text-muted-foreground mb-2">{achievement.description}</p>
                  <p className="text-primary font-semibold">{achievement.detail}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Kaggle Profile Highlight */}
        <div className="mt-16 max-w-4xl mx-auto">
          <div className="glass-card p-8 rounded-2xl text-center animate-fade-in">
            <div className="flex justify-center mb-6">
              <div className="p-6 rounded-full bg-gradient-to-r from-orange-400 to-red-400 bg-opacity-20">
                <Trophy className="text-orange-400" size={48} />
              </div>
            </div>
            
            <h3 className="text-2xl font-bold text-foreground mb-4">Kaggle Expert Status</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Achieved expert status on Kaggle through consistent participation in machine learning competitions 
              and sharing of high-quality notebooks. Ranked in the top 800 globally among data science practitioners.
            </p>
            
            <div className="flex justify-center">
              <button 
                onClick={() => window.open('https://www.kaggle.com/pratyushojha12', '_blank')}
                className="glass-card border-orange-400/50 text-orange-400 hover:bg-orange-400/10 px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 neon-border"
              >
                View Kaggle Profile
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;