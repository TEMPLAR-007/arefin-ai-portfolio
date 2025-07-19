import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Mail, Github } from "lucide-react";
import SmokeBackground from "./SmokeBackground";
import { useEffect, useState } from "react";

const skillSets = [
  // Frontend
  ['React', 'Next.js', 'TypeScript', 'TailwindCSS', 'Redux', 'Vue.js'],
  // Backend
  ['Django', 'Node.js', 'PostgreSQL', 'Express', 'Redis', 'GraphQL'],
  // DevOps & Tools
  ['Docker', 'AWS', 'Git', 'Linux', 'Nginx', 'CI/CD'],
  // AI & Data
  ['OpenAI', 'TensorFlow', 'NLP', 'Data Analysis', 'PyTorch', 'APIs']
];

const Hero = () => {
  const [currentSetIndex, setCurrentSetIndex] = useState(0);
  const [isFlipping, setIsFlipping] = useState(false);
  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  
  const titles = ['Full Stack Developer', 'AI Integration Specialist', 'Modern Web Architect'];
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);

  // Skill sets rotation
  useEffect(() => {
    const interval = setInterval(() => {
      setIsFlipping(true);
      setCurrentSetIndex((prev) => (prev + 1) % skillSets.length);

      // Reset flip animation
      setTimeout(() => {
        setIsFlipping(false);
      }, 1500);
    }, 4500); // Change entire set every 4.5 seconds for better readability

    return () => clearInterval(interval);
  }, []);

  // Typing effect for titles
  useEffect(() => {
    const currentTitle = titles[currentTitleIndex];
    let currentIndex = 0;
    setDisplayedText('');
    setIsTyping(true);
    
    const typeInterval = setInterval(() => {
      if (currentIndex <= currentTitle.length) {
        setDisplayedText(currentTitle.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typeInterval);
        setIsTyping(false);
        
        // Wait before starting next title
        setTimeout(() => {
          setCurrentTitleIndex((prev) => (prev + 1) % titles.length);
        }, 3000); // Show completed text for 3 seconds
      }
    }, 80); // Slightly slower typing

    return () => clearInterval(typeInterval);
  }, [currentTitleIndex]);

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
            <Badge 
              variant="outline" 
              className="mb-6 border-primary/50 bg-primary/5 text-primary font-medium cursor-pointer hover:bg-primary/10 transition-colors"
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              🚀 Available for new opportunities
            </Badge>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight tracking-tight bg-gradient-to-r from-gray-200 via-gray-100 to-gray-300 text-transparent bg-clip-text [text-shadow:_0_1px_1px_rgb(0_0_0_/_20%)] animate-gradient">
              Arefin Khan
            </h1>

            <p className="text-xl md:text-2xl font-medium text-foreground/90 mb-4 h-8">
              {displayedText}
              <span className={`inline-block w-0.5 h-6 bg-primary ml-1 ${isTyping ? 'animate-pulse' : 'opacity-0'}`} />
            </p>

            <p className="text-lg text-foreground/80 mb-8 max-w-2xl leading-relaxed">
              Transforming business ideas into
              <span className="text-primary font-semibold inline-flex items-center mx-1.5">intelligent web applications</span>
              <span className="text-foreground/60 mx-1">that</span>
              <span className="text-accent font-semibold inline-flex items-center mx-1.5">scale globally</span>
            </p>

            <div className="flex flex-col sm:flex-row gap-4 items-start mb-12">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 border-2 border-primary/50 hover:border-primary text-primary-foreground shadow-lg hover:shadow-primary/25 hover:shadow-xl transition-all duration-300"
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Mail className="mr-2 h-5 w-5" />
                Start a Project
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="relative group overflow-hidden bg-background/80 hover:bg-accent/10 border-2 border-accent/50 hover:border-accent text-accent hover:text-accent shadow-[0_0_15px_rgba(147,51,234,0.1)] hover:shadow-[0_0_25px_rgba(147,51,234,0.2)] transition-all duration-300"
                onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Github className="mr-2 h-5 w-5" />
                See My Work
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

      {/* Enhanced Scroll indicator - Positioned relative to full viewport */}
      <div 
        className="absolute bottom-8 z-50 cursor-pointer group animate-bounce"
        style={{ 
          left: '50vw',
          transform: 'translateX(-50%)',
          marginLeft: '-50vw',
          width: '100vw',
          textAlign: 'center'
        }}
        onClick={() => document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <div className="flex flex-col items-center space-y-2 group-hover:scale-110 transition-transform duration-300">
          <div className="w-7 h-12 border-2 border-white/60 rounded-full flex justify-center glass-effect group-hover:border-white/80 transition-colors duration-300 shadow-lg">
            <div className="w-1.5 h-4 bg-white/60 rounded-full mt-2 animate-pulse group-hover:bg-white/80 transition-colors duration-300" />
          </div>
          <span className="text-sm text-white/70 group-hover:text-white/90 transition-colors duration-300 font-medium">
            Scroll to explore
          </span>
        </div>
      </div>
    </section>
  );
};

export default Hero;