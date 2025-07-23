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

          if (progress >= 0.75) {
            setActiveCardIndex(3);
          } else if (progress >= 0.5) {
            setActiveCardIndex(2);
          } else if (progress >= 0.25) {
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
      w-full
    `;
  };

  // Get card style based on position relative to active card
  const getCardStyle = (index: number) => {
    const position = index - activeCardIndex;
    const zIndex = 30 - Math.abs(position);
    const visible = position >= 0 && position < 3;

    let bottom = '0px';
    let opacity = 1;

    if (position === 0) {
      bottom = '0px';
    } else if (position === 1) {
      bottom = '-15px';
      opacity = 0.8;
    } else if (position === 2) {
      bottom = '-30px';
      opacity = 0.6;
    } else {
      opacity = 0;
    }

    return {
      zIndex,
      bottom,
      left: '0px',
      right: '0px',
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
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
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
      image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1200&auto=format&fit=crop",
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
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=1200&auto=format&fit=crop",
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
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop",
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
    <div ref={sectionRef} className="relative h-[300vh]" id="projects">
      <section className="w-full h-screen sticky top-0 overflow-hidden bg-black">
        <div className="container px-4 md:px-6 lg:px-8 mx-auto h-full flex flex-col">
          <div className="flex-1 flex flex-col">
            <div className="flex flex-col items-center mt-16 md:mt-20">
              <Badge
                variant="outline"
                className="border-accent/30 text-accent glass-effect px-6 py-2 text-base mb-4"
              >
                Projects & Case Studies
              </Badge>
              <div className="text-center max-w-3xl mx-auto mb-12">
                <h2 className="text-4xl md:text-5xl font-bold text-white">
                  Recent <span className="text-primary">Work</span>
                </h2>
              </div>
            </div>

            <div ref={cardsContainerRef} className="relative h-[60vh] perspective-1000">
              {/* Mobile navigation arrows */}
              <div className="md:hidden absolute top-1/2 -translate-y-1/2 left-0 right-0 z-40 flex justify-between px-4">
                <button
                  onClick={goToPrevProject}
                  className="w-12 h-12 rounded-full bg-primary/80 backdrop-blur-sm flex items-center justify-center text-white border border-white/20 hover:bg-primary transition-colors"
                  aria-label="Previous project"
                >
                  ←
                </button>
                <button
                  onClick={goToNextProject}
                  className="w-12 h-12 rounded-full bg-primary/80 backdrop-blur-sm flex items-center justify-center text-white border border-white/20 hover:bg-primary transition-colors"
                  aria-label="Next project"
                >
                  →
                </button>
              </div>

              {/* Card stack container */}
              <div className="relative w-full max-w-5xl mx-auto h-full">
                {/* Render projects in reverse order so the active one is on top */}
                {[...projects].sort((a, b) => {
                  const indexA = projects.findIndex(p => p.title === a.title);
                  const indexB = projects.findIndex(p => p.title === b.title);
                  const posA = indexA - activeCardIndex;
                  const posB = indexB - activeCardIndex;
                  return posB - posA;
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
                        <div className="absolute inset-0 grid md:grid-cols-2 gap-4">
                          {/* Image Section */}
                          <div className="relative h-full overflow-hidden rounded-l-[20px]">
                            <div
                              className="absolute inset-0 bg-cover bg-center bg-no-repeat transform hover:scale-110 transition-transform duration-700"
                              style={{
                                backgroundImage: `url('${project.image}')`,
                              }}
                            />
                            <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />
                          </div>

                          {/* Content Section */}
                          <div className="relative flex flex-col h-full p-8 bg-black/80 backdrop-blur-sm rounded-r-[20px]">
                            <div className="mb-4">
                              <div className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-primary/90 backdrop-blur-sm text-white mb-6">
                                <span className="text-sm font-medium">{project.category}</span>
                              </div>
                              <h3 className="text-2xl sm:text-3xl md:text-4xl font-display text-white font-bold leading-tight mb-4">
                                {project.title}
                              </h3>
                              <p className="text-white/90 text-lg mb-6">
                                {project.description}
                              </p>
                              <div className="flex flex-wrap gap-3">
                                {project.technologies.map((tech) => (
                                  <span
                                    key={tech}
                                    className="px-3 py-1 rounded-full bg-gray-800/80 backdrop-blur-sm text-white/90 text-sm hover:bg-gray-700 transition-colors"
                                  >
                                    {tech}
                                  </span>
                                ))}
                              </div>
                            </div>

                            <div className="mt-auto pt-6 border-t border-gray-800/50">
                              <div className="grid md:grid-cols-2 gap-6">
                                <div className="flex flex-wrap gap-6">
                                  {project.stats && project.stats.map((stat) => (
                                    <div key={stat.label} className="text-gray-400">
                                      <div className="text-2xl font-bold text-white">{stat.value}</div>
                                      <div className="text-sm">{stat.label}</div>
                                    </div>
                                  ))}
                                </div>

                                <div className="flex gap-3 justify-end">
                                  <Button
                                    size="lg"
                                    className="bg-primary/90 hover:bg-primary backdrop-blur-sm text-white shadow-lg transition-all duration-300"
                                    onClick={() => window.open(project.links.demo, "_blank")}
                                  >
                                    <ExternalLink className="mr-2 h-4 w-4" />
                                    Demo
                                  </Button>
                                  <Button
                                    size="lg"
                                    variant="outline"
                                    className="border-white/20 hover:border-primary text-white hover:text-primary transition-colors backdrop-blur-sm"
                                    onClick={() => window.open(project.links.github, "_blank")}
                                  >
                                    <GitHubIcon className="mr-2 h-4 w-4" />
                                    Code
                                  </Button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}

                {/* Page count indicator */}
                <div className="absolute bottom-6 right-6 z-40 bg-primary/90 backdrop-blur-sm px-4 py-2 rounded-full text-white text-sm">
                  {activeCardIndex + 1} / {projects.length}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;