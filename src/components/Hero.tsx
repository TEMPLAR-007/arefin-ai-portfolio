import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Mail, Github } from "lucide-react";
import SmokeBackground from "./SmokeBackground";
import { useEffect, useState } from "react";

const skillSets = [
  // Set 1
  ['React', 'Node.js', 'PostgreSQL', 'AWS', 'TensorFlow', 'Docker'],
  // Set 2
  ['Next.js', 'Express', 'MongoDB', 'Kubernetes', 'PyTorch', 'Jest'],
  // Set 3
  ['TypeScript', 'Django', 'Redis', 'CI/CD', 'OpenAI', 'Figma'],
  // Set 4
  ['Vue.js', 'FastAPI', 'GraphQL', 'Linux', 'LangChain', 'Cypress'],
];

const Hero = () => {
  const [currentSetIndex, setCurrentSetIndex] = useState(0);
  const [isFlipping, setIsFlipping] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsFlipping(true);
      setCurrentSetIndex((prev) => (prev + 1) % skillSets.length);

      // Reset flip animation
      setTimeout(() => {
        setIsFlipping(false);
      }, 1500);
    }, 3000); // Change entire set every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative min-h-[100vh] flex items-center">
      {/* Background with smoke effect */}
      <div className="absolute inset-0">
        <SmokeBackground />
        {/* Gradient overlay for smooth bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left Content */}
          <div className="text-left animate-fade-in-up">
            <Badge variant="outline" className="mb-6 border-primary/50 bg-primary/5 text-primary font-medium">
              🚀 Available for new opportunities
            </Badge>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight tracking-tight bg-gradient-to-r from-gray-200 via-gray-100 to-gray-300 text-transparent bg-clip-text [text-shadow:_0_1px_1px_rgb(0_0_0_/_20%)] animate-gradient">
              Arefin Khan
            </h1>

            <p className="text-xl md:text-2xl font-medium text-foreground/90 mb-4">
              Full Stack Developer
            </p>

            <p className="text-lg text-foreground/80 mb-8 max-w-2xl leading-relaxed">
              Crafting innovative solutions through
              <span className="text-accent font-semibold inline-flex items-center mx-1.5">web apps</span>
              <span className="text-foreground/60 mx-1">&</span>
              <span className="text-primary font-semibold inline-flex items-center mx-1.5">APIs</span>
              <span className="text-foreground/60 mx-1">with</span>
              <span className="text-accent font-semibold inline-flex items-center mx-1.5">AI integration</span>
            </p>

            <div className="flex flex-col sm:flex-row gap-4 items-start mb-12">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 border-2 border-primary/50 hover:border-primary text-primary-foreground shadow-lg hover:shadow-primary/25 hover:shadow-xl transition-all duration-300"
              >
                <Mail className="mr-2 h-5 w-5" />
                Get In Touch
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="relative group overflow-hidden bg-background/80 hover:bg-accent/10 border-2 border-accent/50 hover:border-accent text-accent hover:text-accent shadow-[0_0_15px_rgba(147,51,234,0.1)] hover:shadow-[0_0_25px_rgba(147,51,234,0.2)] transition-all duration-300"
              >
                <Github className="mr-2 h-5 w-5" />
                View Projects
                <span className="absolute inset-0 transform translate-y-full group-hover:translate-y-0 bg-accent/10 transition-transform duration-300" />
              </Button>
            </div>

            {/* Tech stack badges */}
            <div className="flex flex-wrap gap-3">
              {skillSets[currentSetIndex].map((skill, index) => (
                <Badge
                  key={`${skill}-${currentSetIndex}`}
                  variant="secondary"
                  className={`bg-secondary/50 text-foreground/90 font-medium border border-white/5 shadow-sm
                           perspective-1000 relative transition-all duration-300 transform-gpu
                           ${isFlipping ? 'animate-badge-flip' : ''}`}
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </div>

          {/* Right side - empty space for the animation to be more visible */}
          <div className="hidden lg:block relative h-full" />
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-20">
        <div className="w-6 h-10 border-2 border-muted-foreground/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-muted-foreground/50 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;