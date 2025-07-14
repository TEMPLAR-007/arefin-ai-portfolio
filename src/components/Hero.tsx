import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Download, ExternalLink } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";
import FloatingElements from "./FloatingElements";
import ProfileBadge from "./ProfileBadge";
import TechStack from "./TechStack";
import ScrollIndicator from "./ScrollIndicator";

const Hero = () => {
  const scrollToProjects = () => {
    const element = document.querySelector('#projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="absolute inset-0 bg-background/90" />
      </div>

      {/* Floating Elements */}
      <FloatingElements />

      {/* Main Content */}
      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
        {/* Profile Badge */}
        <ProfileBadge 
          name="Arefin Khan" 
          verified={true}
          title="Full Stack Developer"
        />

        {/* Specialization Badge */}
        <Badge variant="outline" className="mb-6 bg-muted/50 border-primary/30 text-primary">
          ✨ Crafting Digital Experiences
        </Badge>

        {/* Main Heading - Inspired by Portfolite's large impactful typography */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
          <span className="block">Development that you</span>
          <span className="block bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
            need Indeed
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
          Helping startups and brands to craft expressive and engaging solutions for their digital needs. 
          Specializing in modern web applications that drive results.
        </p>

        {/* CTA Buttons - Dual buttons inspired by both sites */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <Button 
            size="lg" 
            onClick={scrollToContact}
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg font-medium rounded-full group transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/25"
          >
            Get Started Now
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          
          <Button 
            size="lg" 
            variant="outline" 
            onClick={scrollToProjects}
            className="border-primary/30 text-foreground hover:bg-primary/10 px-8 py-6 text-lg font-medium rounded-full transition-all duration-300 hover:scale-105"
          >
            See Projects
            <ExternalLink className="ml-2 h-5 w-5" />
          </Button>
        </div>

        {/* Tech Stack */}
        <TechStack />
      </div>

      {/* Scroll Indicator */}
      <ScrollIndicator 
        targetSection="#about" 
        text="Scroll down to see projects" 
      />
    </section>
  );
};

export default Hero;