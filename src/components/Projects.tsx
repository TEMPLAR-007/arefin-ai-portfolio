import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useEffect, useRef, useState } from "react";
import {
  Brain,
  GraduationCap,
  ExternalLink,
  Github,
  Database,
  Zap,
  TrendingUp,
  Award,
  ArrowRight,
  Star,
  CheckCircle
} from "lucide-react";

const Projects = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    let ticking = false;
    
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          if (!sectionRef.current) return;

          const rect = sectionRef.current.getBoundingClientRect();
          const sectionHeight = sectionRef.current.offsetHeight;
          const windowHeight = window.innerHeight;

          // Calculate scroll progress through the section with smoother easing
          const scrollStart = -rect.top;
          const scrollEnd = sectionHeight - windowHeight;
          const rawProgress = Math.max(0, Math.min(1, scrollStart / scrollEnd));
          
          // Apply easing function for smoother animation
          const easedProgress = rawProgress < 0.5 
            ? 2 * rawProgress * rawProgress 
            : 1 - Math.pow(-2 * rawProgress + 2, 3) / 2;

          setScrollProgress(easedProgress);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial calculation

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const cardStyle = {
    height: '75vh',
    maxHeight: '800px',
    minHeight: '600px',
    borderRadius: '32px',
    transition: 'transform 0.2s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
    willChange: 'transform, opacity',
  };

  // Enhanced card transform calculations with better easing
  const getCardTransform = (index: number) => {
    const baseOffset = [140, 90, 45][index] || 0;
    const baseScale = [0.82, 0.90, 1][index] || 1;
    const baseOpacity = [0.6, 0.8, 1][index] || 1;
    const baseRotation = [2, 1, 0][index] || 0;

    // Smoother animation progression
    const animationStart = index * 0.25;
    const animationProgress = Math.max(0, Math.min(1, (scrollProgress - animationStart) / (1 - animationStart)));
    
    // Apply cubic-bezier easing
    const easedProgress = animationProgress < 0.5 
      ? 4 * animationProgress * animationProgress * animationProgress
      : 1 - Math.pow(-2 * animationProgress + 2, 3) / 2;

    const translateY = baseOffset * (1 - easedProgress);
    const scale = baseScale + (easedProgress * (1 - baseScale));
    const opacity = baseOpacity + (easedProgress * (1 - baseOpacity));
    const rotation = baseRotation * (1 - easedProgress);

    return {
      transform: `translateY(${translateY}px) scale(${scale}) rotate(${rotation}deg)`,
      opacity: opacity,
      zIndex: 30 - index * 10,
      filter: `blur(${(1 - easedProgress) * 2}px)`,
    };
  };

  const projects = [
    {
      title: "AI Business Intelligence Dashboard",
      status: "In Development",
      description: "Revolutionary dashboard that converts natural language queries into SQL and generates real-time business visualizations. Empowers non-technical users to extract insights effortlessly.",
      icon: <Brain className="h-8 w-8" />,
      technologies: ["Node.js", "OpenAI API", "PostgreSQL", "React", "D3.js", "NLP"],
      features: [
        "Natural language to SQL conversion",
        "Real-time data visualization",
        "Interactive business charts"
      ],
      highlight: true,
      github: true,
      category: "AI & Data"
    },
    {
      title: "Student Management System (StMS)",
      status: "Completed",
      description: "Comprehensive management platform for educational institutions. Handles admissions, attendance tracking, examination management, and financial operations with role-based access control.",
      icon: <GraduationCap className="h-8 w-8" />,
      technologies: ["Django REST", "PostgreSQL", "React", "JWT Auth", "PDF Reports"],
      features: [
        "Student admission & enrollment",
        "Attendance tracking system",
        "Examination & grading"
      ],
      highlight: false,
      github: true,
      category: "Business Systems"
    },
    {
      title: "E-Commerce Platform",
      status: "Completed",
      description: "Modern e-commerce solution with advanced inventory management, payment processing, and analytics dashboard. Built for scalability and performance.",
      icon: <Database className="h-8 w-8" />,
      technologies: ["Next.js", "Stripe API", "MongoDB", "Tailwind", "Vercel"],
      features: [
        "Product catalog management",
        "Secure payment processing",
        "Order tracking system"
      ],
      highlight: false,
      github: true,
      category: "E-Commerce"
    }
  ];

  return (
    <div ref={sectionRef} className="relative" style={{ height: '450vh' }}>
      <section className="w-full h-screen py-8 md:py-12 sticky top-0 overflow-hidden bg-gradient-to-b from-background via-background to-background/95" id="projects">
        <div className="container px-4 sm:px-6 lg:px-8 mx-auto h-full flex flex-col">
          {/* Enhanced Header */}
          <div className="mb-6 md:mb-8 pt-6 sm:pt-4 md:pt-2">
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 mb-4">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                <Badge variant="outline" className="border-primary/30 text-primary glass-effect px-6 py-2.5 text-base font-medium">
                  <Star className="w-4 h-4 mr-2" />
                  Featured Projects
                </Badge>
                <div className="w-2 h-2 bg-accent rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-foreground via-primary to-accent bg-clip-text text-transparent">
                Transforming Ideas Into
                <br />
                <span className="text-accent">Digital Reality</span>
              </h2>
              <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Discover how I've helped businesses scale with intelligent, modern web solutions that drive real results
              </p>
              
              {/* Progress Indicator */}
              <div className="mt-6 flex justify-center">
                <div className="flex items-center gap-2">
                  {[0, 1, 2].map((i) => (
                    <div
                      key={i}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        scrollProgress > i * 0.33 ? 'bg-primary scale-125' : 'bg-muted-foreground/30'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Stacked Project Cards */}
          <div className="relative flex-1 perspective-1000">
            {projects.map((project, index) => (
              <div 
                key={project.title}
                className="absolute inset-0 overflow-hidden shadow-2xl backdrop-blur-sm"
                style={{
                  ...cardStyle,
                  ...getCardTransform(index),
                }}
              >
                <div className={`relative h-full rounded-[32px] bg-gradient-to-br ${
                  project.highlight 
                    ? 'from-primary/10 via-primary/5 to-transparent border-primary/20' 
                    : 'from-accent/10 via-accent/5 to-transparent border-accent/20'
                } border backdrop-blur-xl shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)]`}>
                  
                  {/* Animated Background Pattern */}
                  <div className="absolute inset-0 opacity-30">
                    <div className={`absolute top-0 left-0 w-full h-full bg-gradient-to-br ${
                      project.highlight ? 'from-primary/20' : 'from-accent/20'
                    } to-transparent rounded-[32px]`}></div>
                    <div className={`absolute top-4 right-4 w-32 h-32 ${
                      project.highlight ? 'bg-primary/10' : 'bg-accent/10'
                    } rounded-full blur-3xl`}></div>
                  </div>

                  <div className="relative grid lg:grid-cols-5 gap-0 h-full">
                    {/* Project Visual */}
                    <div className="lg:col-span-2 relative flex items-center justify-center p-8 lg:p-12">
                      <div className="text-center">
                        <div className="relative mb-6">
                          <div className={`inline-flex p-8 rounded-3xl ${
                            project.highlight ? 'glass-gradient' : 'glass-effect'
                          } shadow-2xl transform hover:scale-105 transition-transform duration-300`}>
                            <div className={project.highlight ? 'text-primary' : 'text-accent'}>
                              {project.icon}
                            </div>
                          </div>
                          <div className={`absolute -top-2 -right-2 w-6 h-6 ${
                            project.status === 'In Development' ? 'bg-green-500' : 'bg-blue-500'
                          } rounded-full flex items-center justify-center`}>
                            {project.status === 'In Development' ? (
                              <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                            ) : (
                              <CheckCircle className="w-4 h-4 text-white" />
                            )}
                          </div>
                        </div>
                        <Badge variant="outline" className={`glass-effect ${
                          project.highlight 
                            ? 'border-primary/30 text-primary bg-primary/10' 
                            : 'border-accent/30 text-accent bg-accent/10'
                        } px-4 py-2`}>
                          {project.category}
                        </Badge>
                      </div>
                      
                      {/* Status Badge */}
                      <div className="absolute top-6 right-6">
                        <Badge className={`${
                          project.status === 'In Development'
                            ? 'bg-gradient-to-r from-primary to-primary/80 animate-pulse'
                            : 'bg-gradient-to-r from-green-500 to-green-600'
                        } text-white shadow-lg`}>
                          {project.status === 'In Development' ? (
                            <div className="w-2 h-2 bg-white rounded-full mr-2"></div>
                          ) : (
                            <CheckCircle className="w-3 h-3 mr-2" />
                          )}
                          {project.status}
                        </Badge>
                      </div>
                    </div>

                    {/* Project Info */}
                    <div className="lg:col-span-3 p-6 lg:p-12 flex flex-col justify-center">
                      <div className="mb-6">
                        <h3 className={`text-2xl lg:text-4xl font-bold mb-4 leading-tight ${
                          project.highlight ? 'text-primary' : 'text-accent'
                        }`}>
                          {project.title}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed text-base lg:text-lg mb-6">
                          {project.description}
                        </p>
                      </div>

                      {/* Key Features */}
                      <div className="mb-6">
                        <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-3 flex items-center">
                          <Zap className={`w-4 h-4 mr-2 ${project.highlight ? 'text-primary' : 'text-accent'}`} />
                          Key Features
                        </h4>
                        <div className="grid grid-cols-1 gap-2">
                          {project.features.map((feature) => (
                            <div key={feature} className="flex items-center text-sm text-muted-foreground">
                              <CheckCircle className={`w-4 h-4 mr-3 flex-shrink-0 ${
                                project.highlight ? 'text-primary' : 'text-accent'
                              }`} />
                              {feature}
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Tech Stack */}
                      <div className="mb-8">
                        <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-3">
                          Technology Stack
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech) => (
                            <Badge key={tech} variant="outline" className={`glass-effect hover:${
                              project.highlight ? 'bg-primary/10' : 'bg-accent/10'
                            } transition-colors`}>
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      {/* Actions */}
                      <div className="flex flex-col sm:flex-row gap-3">
                        <Button variant="outline" className="button-glass group flex-1">
                          <Github className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                          View Source Code
                        </Button>
                        <Button className={`${
                          project.highlight ? 'button-glass-primary' : 'button-glass-accent'
                        } group flex-1`}>
                          <ExternalLink className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                          {project.status === 'In Development' ? 'Live Demo' : 'Case Study'}
                          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;