import React, { useEffect, useRef, useState } from "react";

const Projects = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsContainerRef = useRef<HTMLDivElement>(null);
  const [activeCardIndex, setActiveCardIndex] = useState(0);
  const [isIntersecting, setIsIntersecting] = useState(false);
  const ticking = useRef(false);
  const lastScrollY = useRef(0);

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

  const getCardClasses = (index: number) => {
    const isActive = activeCardIndex === index;
    const isVisible = isIntersecting && isActive;

    return `
      absolute inset-0 overflow-hidden
      transition-all duration-600 ease-[cubic-bezier(0.19,1,0.22,1)]
      ${isActive ? 'z-30' : 'z-10'}
      ${isVisible ? 'opacity-100 visible translate-y-0 scale-100' : 'opacity-0 invisible translate-y-[100px] scale-95'}
      ${isActive ? 'animate-card-enter' : ''}
      h-[60vh] max-h-[600px] rounded-[20px]
      transform-gpu backface-hidden will-change-transform
      bg-black/40 backdrop-blur-sm border border-white/10
      shadow-xl hover:shadow-2xl hover:border-white/20 transition-all
    `;
  };

  return (
    <div
      ref={sectionRef}
      className="relative h-[300vh]"
    >
      <section className="w-full h-screen py-10 md:py-16 sticky top-0 overflow-hidden bg-black" id="projects">
        <div className="container px-6 lg:px-8 mx-auto h-full flex flex-col">
          <div className="mb-2 md:mb-3">
            <div className="flex items-center gap-4 mb-2 md:mb-2 pt-8 sm:pt-6 md:pt-4">
              <div className="pulse-chip opacity-0 animate-fade-in" style={{
                animationDelay: "0.1s"
              }}>
                <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-primary text-white mr-2">01</span>
                <span>Featured Projects</span>
              </div>
            </div>

            <h2 className="section-title text-3xl sm:text-4xl md:text-5xl font-display font-bold mb-1 md:mb-2 text-white">
              Recent Work
            </h2>
          </div>

          <div ref={cardsContainerRef} className="relative flex-1 perspective-1000">
            {/* First Project */}
            <div className={getCardClasses(0)}>
              <div
                className="absolute inset-0 z-0 bg-gradient-to-b from-primary/40 to-background/80"
                style={{
                  backgroundImage: "url('/ai-dashboard.jpg')",
                  backgroundSize: "cover",
                  backgroundPosition: "top center",
                  backgroundBlendMode: "overlay"
                }}
              ></div>

              <div className="absolute top-4 right-4 z-20">
                <div className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm text-white">
                  <span className="text-sm font-medium">AI & Data</span>
                </div>
              </div>

              <div className="relative z-10 p-8 h-full flex flex-col justify-between">
                <div className="max-w-xl">
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-display text-white font-bold leading-tight mb-4">
                    AI Business Intelligence Dashboard
                  </h3>
                  <p className="text-white/80 text-lg mb-6">
                    Revolutionary dashboard that converts natural language queries into SQL and generates real-time business visualizations.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <span className="px-3 py-1 rounded-full bg-white/10 text-white/90 text-sm">Node.js</span>
                    <span className="px-3 py-1 rounded-full bg-white/10 text-white/90 text-sm">OpenAI API</span>
                    <span className="px-3 py-1 rounded-full bg-white/10 text-white/90 text-sm">React</span>
                  </div>
                </div>
                <div className="mt-8 border-t border-white/10 pt-8">
                  <div className="flex items-center gap-6">
                    <div className="text-white/60">
                      <div className="text-2xl font-bold text-white">1000+</div>
                      <div className="text-sm">NL Queries</div>
                    </div>
                    <div className="text-white/60">
                      <div className="text-2xl font-bold text-white">95%</div>
                      <div className="text-sm">Accuracy</div>
                    </div>
                    <div className="text-white/60">
                      <div className="text-2xl font-bold text-white">&lt;1s</div>
                      <div className="text-sm">Response Time</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Second Project */}
            <div className={getCardClasses(1)}>
              <div
                className="absolute inset-0 z-0 bg-gradient-to-b from-primary/40 to-background/80"
                style={{
                  backgroundImage: "url('/student-management.jpg')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundBlendMode: "overlay"
                }}
              ></div>

              <div className="absolute top-4 right-4 z-20">
                <div className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm text-white">
                  <span className="text-sm font-medium">Business Systems</span>
                </div>
              </div>

              <div className="relative z-10 p-8 h-full flex flex-col justify-between">
                <div className="max-w-xl">
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-display text-white font-bold leading-tight mb-4">
                    Student Management System
                  </h3>
                  <p className="text-white/80 text-lg mb-6">
                    Comprehensive platform for educational institutions handling admissions, attendance, examinations, and financial operations.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <span className="px-3 py-1 rounded-full bg-white/10 text-white/90 text-sm">Django REST</span>
                    <span className="px-3 py-1 rounded-full bg-white/10 text-white/90 text-sm">PostgreSQL</span>
                    <span className="px-3 py-1 rounded-full bg-white/10 text-white/90 text-sm">React</span>
                  </div>
                </div>
                <div className="mt-8 border-t border-white/10 pt-8">
                  <div className="flex items-center gap-6">
                    <div className="text-white/60">
                      <div className="text-2xl font-bold text-white">500+</div>
                      <div className="text-sm">Active Users</div>
                    </div>
                    <div className="text-white/60">
                      <div className="text-2xl font-bold text-white">2000+</div>
                      <div className="text-sm">Students</div>
                    </div>
                    <div className="text-white/60">
                      <div className="text-2xl font-bold text-white">99.9%</div>
                      <div className="text-sm">Uptime</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Third Project */}
            <div className={getCardClasses(2)}>
              <div
                className="absolute inset-0 z-0 bg-gradient-to-b from-primary/40 to-background/80"
                style={{
                  backgroundImage: "url('/ecommerce-platform.jpg')",
                  backgroundSize: "cover",
                  backgroundPosition: "bottom center",
                  backgroundBlendMode: "overlay"
                }}
              ></div>

              <div className="absolute top-4 right-4 z-20">
                <div className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm text-white">
                  <span className="text-sm font-medium">E-Commerce</span>
                </div>
              </div>

              <div className="relative z-10 p-8 h-full flex flex-col justify-between">
                <div className="max-w-xl">
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-display text-white font-bold leading-tight mb-4">
                    Modern E-Commerce Platform
                  </h3>
                  <p className="text-white/80 text-lg mb-6">
                    Full-featured e-commerce solution with advanced inventory management, secure payments, and real-time analytics.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <span className="px-3 py-1 rounded-full bg-white/10 text-white/90 text-sm">Next.js</span>
                    <span className="px-3 py-1 rounded-full bg-white/10 text-white/90 text-sm">Stripe API</span>
                    <span className="px-3 py-1 rounded-full bg-white/10 text-white/90 text-sm">MongoDB</span>
                  </div>
                </div>
                <div className="mt-8 border-t border-white/10 pt-8">
                  <div className="flex items-center gap-6">
                    <div className="text-white/60">
                      <div className="text-2xl font-bold text-white">10K+</div>
                      <div className="text-sm">Transactions</div>
                    </div>
                    <div className="text-white/60">
                      <div className="text-2xl font-bold text-white">99.8%</div>
                      <div className="text-sm">Uptime</div>
                    </div>
                    <div className="text-white/60">
                      <div className="text-2xl font-bold text-white">2K+</div>
                      <div className="text-sm">Active Users</div>
                    </div>
                  </div>
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