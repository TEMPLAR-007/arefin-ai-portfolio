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
      rounded-[28px]
      transform-gpu backface-hidden will-change-transform
      bg-slate-900/95 border border-white/[0.08]
      shadow-[0_8px_30px_rgba(0,0,0,0.12)] hover:shadow-[0_20px_60px_rgba(0,0,0,0.3)]
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
      {/* Background gradient overlay for blending */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-transparent pointer-events-none" />

      <section className="w-full h-screen sticky top-0 overflow-hidden">
        {/* Background with gradient blend */}
        <div className="absolute inset-0 bg-gradient-to-b from-background via-[#0A0A0A] to-background" />

        <div className="container relative px-4 md:px-6 lg:px-8 mx-auto h-full flex flex-col">
          <div className="flex-1 flex flex-col">
            <div className="flex flex-col items-center mt-16 md:mt-20">
              <Badge
                variant="outline"
                className="border-accent/30 text-accent glass-effect px-6 py-2 text-base mb-4 backdrop-blur-sm"
              >
                Featured Projects
              </Badge>
              <div className="text-center max-w-3xl mx-auto mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Real-world Applications
                </h2>
                <p className="text-base md:text-lg text-white/80">
                  Showcasing modern development practices, AI integration, and scalable architecture solutions.
                </p>
              </div>
            </div>

            <div ref={cardsContainerRef} className="relative h-[60vh] perspective-1000">
              {/* Navigation arrows - visible on all screen sizes */}
              <div className="absolute top-1/2 -translate-y-1/2 left-4 md:left-8 lg:left-12 z-40">
                <button
                  onClick={goToPrevProject}
                  className="w-12 h-12 rounded-full bg-slate-800/90 backdrop-blur-sm flex items-center justify-center text-white border border-white/[0.08] hover:bg-slate-700/90 hover:scale-110 transition-all duration-300 shadow-[0_4px_15px_rgba(0,0,0,0.15)]"
                  aria-label="Previous project"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-5 h-5"
                  >
                    <path d="m15 18-6-6 6-6" />
                  </svg>
                </button>
              </div>

              <div className="absolute top-1/2 -translate-y-1/2 right-4 md:right-8 lg:right-12 z-40">
                <button
                  onClick={goToNextProject}
                  className="w-12 h-12 rounded-full bg-slate-800/90 backdrop-blur-sm flex items-center justify-center text-white border border-white/[0.08] hover:bg-slate-700/90 hover:scale-110 transition-all duration-300 shadow-[0_4px_15px_rgba(0,0,0,0.15)]"
                  aria-label="Next project"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-5 h-5"
                  >
                    <path d="m9 18 6-6-6-6" />
                  </svg>
                </button>
              </div>

              {/* Card stack container */}
              <div className="relative w-full max-w-7xl mx-auto h-full">
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
                        <div className="absolute inset-0 bg-slate-900/95 flex flex-col items-center justify-center text-center p-8 rounded-[28px] border border-white/[0.08]">
                          <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
                            {project.title}
                          </h3>
                          <p className="text-white/90 text-lg mb-8 max-w-md">
                            {project.description}
                          </p>
                          <Button
                            size="lg"
                            className="bg-slate-800 hover:bg-slate-700 text-white border border-white/[0.08] shadow-[0_4px_20px_rgba(0,0,0,0.15)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.25)] transition-all duration-300 rounded-2xl"
                            onClick={() => window.open(project.links.demo, "_blank")}
                          >
                            View All Projects
                          </Button>
                        </div>
                      ) : (
                        // Regular Project Card
                        <div className="absolute inset-0 grid md:grid-cols-2 gap-4">
                          {/* Image Section */}
                          <div className="relative h-full overflow-hidden rounded-l-[28px] border-r border-white/[0.08]">
                            <div
                              className="absolute inset-0 bg-cover bg-center bg-no-repeat transform hover:scale-110 transition-transform duration-700"
                              style={{
                                backgroundImage: `url('${project.image}')`,
                              }}
                            />
                            <div className="absolute inset-0 bg-black/80" />
                          </div>

                          {/* Content Section */}
                          <div className="relative flex flex-col h-full p-8 bg-slate-900/95 rounded-r-[28px]">
                            <div className="mb-4">
                              <div className="inline-flex items-center justify-center px-4 py-2 rounded-2xl bg-slate-800 text-white mb-6 border border-white/[0.08] shadow-[0_4px_15px_rgba(0,0,0,0.15)]">
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
                                    className="px-4 py-1.5 rounded-2xl bg-slate-800 text-white/90 text-sm hover:bg-slate-700 transition-colors border border-white/[0.08] shadow-[0_4px_15px_rgba(0,0,0,0.15)]"
                                  >
                                    {tech}
                                  </span>
                                ))}
                              </div>
                            </div>

                            <div className="mt-auto pt-6 border-t border-white/[0.08]">
                              <div className="grid md:grid-cols-2 gap-6">
                                <div className="flex flex-wrap gap-6">
                                  {project.stats && project.stats.map((stat) => (
                                    <div key={stat.label} className="text-white/60">
                                      <div className="text-2xl font-bold text-white">{stat.value}</div>
                                      <div className="text-sm">{stat.label}</div>
                                    </div>
                                  ))}
                                </div>

                                <div className="flex gap-3 justify-end">
                                  <Button
                                    size="lg"
                                    className="bg-slate-800 hover:bg-slate-700 text-white border border-white/[0.08] shadow-[0_4px_20px_rgba(0,0,0,0.15)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.25)] transition-all duration-300 rounded-2xl"
                                    onClick={() => window.open(project.links.demo, "_blank")}
                                  >
                                    <ExternalLink className="mr-2 h-4 w-4" />
                                    Demo
                                  </Button>
                                  <Button
                                    size="lg"
                                    variant="outline"
                                    className="bg-slate-800 hover:bg-slate-700 text-white border border-white/[0.08] shadow-[0_4px_20px_rgba(0,0,0,0.15)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.25)] transition-colors rounded-2xl"
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
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;