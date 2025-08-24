import { Mail, Phone, Linkedin, Github, Award, Send, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ContactSection = () => {
  const contactInfo = [
    {
      icon: <Mail className="text-primary" size={24} />,
      label: "Email",
      value: "pratyushojha77@gmail.com",
      href: "mailto:pratyushojha77@gmail.com",
      color: "from-primary to-cyan-400"
    },
    {
      icon: <Phone className="text-emerald-400" size={24} />,
      label: "Phone",
      value: "+91 8081800455",
      href: "tel:+918081800455",
      color: "from-emerald-400 to-teal-400"
    },
    {
      icon: <MapPin className="text-accent" size={24} />,
      label: "Location",
      value: "Greater Noida, UP, India",
      href: "#",
      color: "from-accent to-purple-400"
    }
  ];

  const socialLinks = [
    {
      name: "LinkedIn",
      icon: <Linkedin size={24} />,
      url: "https://www.linkedin.com/in/pratyush-ojha-185817253/",
      color: "from-blue-400 to-blue-600",
      handle: "@pratyush-ojha"
    },
    {
      name: "GitHub",
      icon: <Github size={24} />,
      url: "https://github.com/pratyushojha04",
      color: "from-gray-400 to-gray-600",
      handle: "@pratyushojha04"
    },
    {
      name: "Kaggle",
      icon: <Award size={24} />,
      url: "https://www.kaggle.com/pratyushojha12",
      color: "from-orange-400 to-red-400",
      handle: "@pratyushojha12"
    }
  ];

  const handleContactClick = (href: string) => {
    if (href !== "#") {
      window.open(href, '_blank');
    }
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">Get In Touch</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Let's connect and discuss opportunities in software development and AI/ML
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Contact Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {contactInfo.map((contact, index) => (
              <div 
                key={index}
                className="glass-card p-6 rounded-xl text-center hover:scale-105 transition-all duration-300 cursor-pointer animate-slide-up"
                style={{animationDelay: `${index * 100}ms`}}
                onClick={() => handleContactClick(contact.href)}
              >
                <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${contact.color} bg-opacity-20 mb-4`}>
                  {contact.icon}
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{contact.label}</h3>
                <p className="text-muted-foreground">{contact.value}</p>
              </div>
            ))}
          </div>

          {/* Social Links */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-center mb-8 text-primary">Connect With Me</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {socialLinks.map((social, index) => (
                <div 
                  key={index}
                  className="glass-card p-6 rounded-xl hover:scale-105 transition-all duration-300 cursor-pointer animate-scale-in"
                  style={{animationDelay: `${index * 150}ms`}}
                  onClick={() => window.open(social.url, '_blank')}
                >
                  <div className="flex items-center gap-4">
                    <div className={`p-3 rounded-lg bg-gradient-to-r ${social.color} bg-opacity-20`}>
                      {social.icon}
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-foreground">{social.name}</h4>
                      <p className="text-muted-foreground text-sm">{social.handle}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="glass-card p-8 rounded-2xl text-center animate-fade-in">
            <h3 className="text-2xl font-bold text-foreground mb-4">Ready to Collaborate?</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              I'm always excited to work on innovative projects that combine cutting-edge technology 
              with real-world impact. Whether it's building AI-powered applications, developing scalable 
              backend systems, or solving complex algorithmic challenges, let's create something amazing together.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 transition-all duration-300 hover:scale-105 neon-border"
                onClick={() => window.open('mailto:pratyushojha77@gmail.com', '_blank')}
              >
                <Send className="mr-2" size={20} />
                Send Email
              </Button>
              
              <Button 
                variant="outline"
                className="glass-card border-primary/50 text-primary hover:bg-primary/10 px-8 py-3 transition-all duration-300 hover:scale-105"
                onClick={() => window.open('https://www.linkedin.com/in/pratyush-ojha-185817253/', '_blank')}
              >
                <Linkedin className="mr-2" size={20} />
                Connect on LinkedIn
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-16 pt-8 border-t border-border text-center">
        <p className="text-muted-foreground">
          © 2025 Pratyush Ojha. Built with ❤️ using React, TypeScript, and Tailwind CSS.
        </p>
      </div>
    </section>
  );
};

export default ContactSection;