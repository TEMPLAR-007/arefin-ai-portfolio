import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Mail, Github, ExternalLink } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroBg} 
          alt="Developer workspace" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-background/90" />
      </div>
      
      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-2 h-2 bg-primary rounded-full animate-float" />
      <div className="absolute top-40 right-20 w-3 h-3 bg-accent rounded-full animate-float" style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-32 left-20 w-1 h-1 bg-primary rounded-full animate-float" style={{ animationDelay: '2s' }} />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto animate-fade-in-up">
          <Badge variant="outline" className="mb-6 border-primary/30 text-primary">
            🚀 Available for new opportunities
          </Badge>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-hero-gradient bg-clip-text text-transparent leading-tight">
            Arefin Khan
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-4">
            Senior Full Stack Developer
          </p>
          
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Helping startups and businesses build intelligent, scalable systems through 
            <span className="text-primary font-medium"> web apps, APIs, and AI-powered dashboards</span>.
            Based in Bangladesh 🇧🇩
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Button size="lg" className="bg-primary hover:bg-primary/90 shadow-tech-glow">
              <Mail className="mr-2 h-5 w-5" />
              Get In Touch
            </Button>
            <Button variant="outline" size="lg" className="border-accent text-accent hover:bg-accent/10">
              <Github className="mr-2 h-5 w-5" />
              View Projects
            </Button>
          </div>
          
          {/* Tech stack badges */}
          <div className="flex flex-wrap justify-center gap-3">
            {['React', 'Node.js', 'Django', 'PostgreSQL', 'AI/ML', 'TailwindCSS'].map((tech) => (
              <Badge key={tech} variant="secondary" className="bg-card border-border">
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center">
          <div className="w-1 h-3 bg-muted-foreground rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;