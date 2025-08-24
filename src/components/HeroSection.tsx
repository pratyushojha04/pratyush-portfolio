import { ChevronDown, Download, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleResumeDownload = () => {
    window.open(
      "https://drive.google.com/file/d/193pbZLBLJG2dvKFixIxgk_gg_tN6EkuV/view?usp=sharing",
      "_blank"
    );
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary/10 rounded-full blur-2xl float"></div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="animate-fade-in">
          {/* Name */}
          <h1 className="text-5xl md:text-7xl font-bold mb-4 gradient-text animate-glow">
            Pratyush Ojha
          </h1>

          {/* Tagline */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-2 animate-slide-up">
            Aspiring Software Development Engineer
          </p>
          <p className="text-lg md:text-xl text-primary mb-6 animate-slide-up delay-200">
            AI & ML Enthusiast
          </p>

          {/* Location */}
          <p className="text-muted-foreground mb-8 animate-slide-up delay-300">
            📍 Greater Noida, Uttar Pradesh, India
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-scale-in delay-500">
            <Button 
              onClick={scrollToProjects}
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 neon-border"
            >
              <Eye className="mr-2" size={20} />
              View My Work
            </Button>
            
            <Button 
              variant="outline"
              onClick={handleResumeDownload}
              className="glass-card border-primary/50 text-primary hover:bg-primary/10 px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
            >
              <Download className="mr-2" size={20} />
              Download Resume
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="text-primary" size={32} />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
