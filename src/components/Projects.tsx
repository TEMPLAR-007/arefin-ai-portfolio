import { useEffect, useRef, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github as GitHubIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsContainerRef = useRef<HTMLDivElement>(null);
  const [activeCardIndex, setActiveCardIndex] = useState(0);
  const [isIntersecting, setIsIntersecting] = useState(false);
  const ticking = useRef(false);
  const lastScrollY = useRef(0);

  // Add navigation controls
  const goToNextProject = () => {
    setActiveCardIndex((prev) => (prev + 1) % projects.length);
  };

  const goToPrevProject = () => {
    setActiveCardIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        setIsIntersecting(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    const handleScroll = () => {
      if (!ticking.current) {
        lastScrollY.current = window.scrollY;

        window.requestAnimationFrame(() => {
          if (!sectionRef.current) return;

          const sectionRect = sectionRef.current.getBoundingClientRect();
          const viewportHeight = window.innerHeight;
          const totalScrollDistance = viewportHeight * 2;

          let progress = 0;
          if (sectionRect.top <= 0) {
            progress = Math.min(1, Math.max(0, Math.abs(sectionRect.top) / totalScrollDistance));
          }

          if (progress >= 0.66) {
            setActiveCardIndex(2);
          } else if (progress >= 0.33) {
            setActiveCardIndex(1);
          } else {
            setActiveCardIndex(0);
          }

          ticking.current = false;
        });

        ticking.current = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // Get card classes based on position relative to active card
  const getCardClasses = (index: number) => {
    const isActive = activeCardIndex === index;
    const isVisible = isIntersecting;

    return `
      absolute overflow-hidden
      transition-all duration-600 ease-[cubic-bezier(0.19,1,0.22,1)]
      rounded-[20px]
      transform-gpu backface-hidden will-change-transform
      bg-black border border-primary/20
      shadow-xl hover:shadow-2xl hover:border-primary/30
      ${isVisible ? 'visible' : 'invisible'}
      ${isActive ? 'animate-card-enter' : ''}
    `;
  };

  // Get card style based on position relative to active card
  const getCardStyle = (index: number) => {
    const position = index - activeCardIndex;

    // Z-index decreases as we go down the stack
    const zIndex = 30 - Math.abs(position);

    // Only show a few cards in the stack
    const visible = position >= 0 && position < 3;

    // Position cards in the stack - same width/height, just offset from bottom
    let bottom = '0px';
    let left = '0px';
    let right = '0px';
    let opacity = 1;

    if (position === 0) {
      // Active card
      bottom = '0px';
    } else if (position === 1) {
      // First card behind
      bottom = '-15px';
      opacity = 1;
    } else if (position === 2) {
      // Second card behind
      bottom = '-30px';
      opacity = 1;
    } else {
      // Hidden cards
      opacity = 0;
    }

    return {
      zIndex,
      bottom,
      left,
      right,
      opacity: visible ? opacity : 0,
      height: 'calc(60vh)',
      maxWidth: '100%',
      visibility: visible ? 'visible' : 'hidden' as 'visible' | 'hidden'
    };
  };

  // Main projects for the card stack
  const projects = [
    {
      title: "AI Business Intelligence Dashboard",
      description: "Revolutionary dashboard that converts natural language queries into SQL and generates real-time business visualizations.",
      image: "/ai-dashboard.jpg",
      category: "AI & Data",
      technologies: ["Node.js", "OpenAI API", "React"],
      stats: [
        { value: "1000+", label: "NL Queries" },
        { value: "95%", label: "Accuracy" },
        { value: "<1s", label: "Response Time" }
      ],
      links: {
        demo: "https://ai-dashboard.example.com",
        github: "https://github.com/yourusername/ai-dashboard"
      }
    },
    {
      title: "Student Management System",
      description: "Comprehensive platform for educational institutions handling admissions, attendance, examinations, and financial operations.",
      image: "/student-management.jpg",
      category: "Business Systems",
      technologies: ["Django REST", "PostgreSQL", "React"],
      stats: [
        { value: "500+", label: "Active Users" },
        { value: "2000+", label: "Students" },
        { value: "99.9%", label: "Uptime" }
      ],
      links: {
        demo: "https://sms.example.com",
        github: "https://github.com/yourusername/student-management"
      }
    },
    {
      title: "Modern E-Commerce Platform",
      description: "Full-featured e-commerce solution with advanced inventory management, secure payments, and real-time analytics.",
      image: "/ecommerce-platform.jpg",
      category: "E-Commerce",
      technologies: ["Next.js", "Stripe API", "MongoDB"],
      stats: [
        { value: "10K+", label: "Transactions" },
        { value: "99.8%", label: "Uptime" },
        { value: "2K+", label: "Active Users" }
      ],
      links: {
        demo: "https://ecommerce.example.com",
        github: "https://github.com/yourusername/ecommerce-platform"
      }
    },
    {
      title: "View More Projects",
      description: "Explore my complete portfolio with additional projects including mobile apps, data visualization tools, and more.",
      image: "/more-projects.jpg",
      category: "Portfolio",
      technologies: [],
      stats: [],
      links: {
        demo: "https://github.com/yourusername",
        github: "https://github.com/yourusername"
      },
      isViewMore: true
    }
  ];

  return (
    <div
      ref={sectionRef}
      className="relative h-[300vh]"
    >
      <section className="w-full h-screen py-10 md:py-16 sticky top-0 overflow-hidden bg-black" id="projects">
        <div className="container px-6 lg:px-8 mx-auto h-full flex flex-col">
          <div className="mb-2 md:mb-3">
            <div className="text-center mb-8">
              <Badge variant="outline" className="mb-4 border-accent/30 text-accent glass-effect px-6 py-2.5 text-lg">
                Projects & Case Studies
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                Recent <span className="text-primary">Work</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                A showcase of my recent projects spanning web development, AI integration, and full-stack applications
              </p>
            </div>
          </div>

          <div ref={cardsContainerRef} className="relative flex-1 perspective-1000 mt-12">
            {/* Navigation dots */}
            <div className="absolute bottom-4 left-0 right-0 z-40 flex justify-center gap-3">
              {projects.map((_, idx) => (
                <button
                  key={`dot-${idx}`}
                  className={`w-3 h-3 rounded-full transition-all ${activeCardIndex === idx
                    ? 'bg-primary scale-125'
                    : 'bg-white/30 hover:bg-white/50'
                    }`}
                  onClick={() => setActiveCardIndex(idx)}
                  aria-label={`Go to project ${idx + 1}`}
                />
              ))}
            </div>

            {/* Mobile navigation arrows */}
            <div className="md:hidden absolute top-1/2 left-0 right-0 z-40 flex justify-between px-4 -translate-y-1/2">
              <button
                onClick={goToPrevProject}
                className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white border border-white hover:bg-primary-dark transition-colors"
                aria-label="Previous project"
              >
                ←
              </button>
              <button
                onClick={goToNextProject}
                className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white border border-white hover:bg-primary-dark transition-colors"
                aria-label="Next project"
              >
                →
              </button>
            </div>

            {/* Card stack container */}
            <div className="relative w-full max-w-4xl mx-auto h-full">
              {/* Render projects in reverse order so the active one is on top */}
              {[...projects].sort((a, b) => {
                const indexA = projects.findIndex(p => p.title === a.title);
                const indexB = projects.findIndex(p => p.title === b.title);
                const posA = indexA - activeCardIndex;
                const posB = indexB - activeCardIndex;
                return posB - posA; // Reverse order for proper stacking
              }).map((project) => {
                const index = projects.findIndex(p => p.title === project.title);
                return (
                  <div
                    key={project.title}
                    className={getCardClasses(index)}
                    style={getCardStyle(index)}
                  >
                    {project.isViewMore ? (
                      // View More Card
                      <div className="absolute inset-0 bg-gradient-to-br from-primary to-black flex flex-col items-center justify-center text-center p-8">
                        <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
                          {project.title}
                        </h3>
                        <p className="text-white text-lg mb-8 max-w-md">
                          {project.description}
                        </p>
                        <Button
                          size="lg"
                          className="bg-white text-primary hover:bg-gray-100 shadow-lg transition-all duration-300"
                          onClick={() => window.open(project.links.demo, "_blank")}
                        >
                          View All Projects
                        </Button>
                      </div>
                    ) : (
                      // Regular Project Card
                      <>
                        <div
                          className="absolute inset-0 z-0 bg-black"
                          style={{
                            backgroundImage: `url('${project.image}')`,
                            backgroundSize: "cover",
                            backgroundPosition: "center"
                          }}
                        ></div>

                        <div className="absolute top-4 right-4 z-20">
                          <div className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-primary text-white">
                            <span className="text-sm font-medium">{project.category}</span>
                          </div>
                        </div>

                        <div className="relative z-10 p-8 h-full flex flex-col justify-between">
                          <div className="max-w-xl">
                            <h3 className="text-2xl sm:text-3xl md:text-4xl font-display text-white font-bold leading-tight mb-4">
                              {project.title}
                            </h3>
                            <p className="text-white text-lg mb-6">
                              {project.description}
                            </p>
                            <div className="flex flex-wrap gap-3">
                              {project.technologies.map((tech) => (
                                <span key={tech} className="px-3 py-1 rounded-full bg-gray-800 text-white text-sm hover:bg-gray-700 transition-colors">
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>

                          <div className="mt-8 border-t border-gray-800 pt-8">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-6">
                                {project.stats && project.stats.map((stat) => (
                                  <div key={stat.label} className="text-gray-400">
                                    <div className="text-2xl font-bold text-white">{stat.value}</div>
                                    <div className="text-sm">{stat.label}</div>
                                  </div>
                                ))}
                              </div>

                              <div className="flex gap-3">
                                <Button
                                  size="sm"
                                  className="bg-primary hover:bg-primary-dark text-white shadow-lg transition-all duration-300"
                                  onClick={() => window.open(project.links.demo, "_blank")}
                                >
                                  <ExternalLink className="mr-2 h-4 w-4" />
                                  Demo
                                </Button>
                                <Button
                                  size="sm"
                                  variant="outline"
                                  className="border-white hover:border-primary text-white hover:text-primary transition-colors"
                                  onClick={() => window.open(project.links.github, "_blank")}
                                >
                                  <GitHubIcon className="mr-2 h-4 w-4" />
                                  Code
                                </Button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                );
              })}

              {/* Page count indicator */}
              <div className="absolute bottom-4 right-4 z-40 bg-primary px-3 py-1 rounded-full text-white text-sm">
                {activeCardIndex + 1} / {projects.length}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;