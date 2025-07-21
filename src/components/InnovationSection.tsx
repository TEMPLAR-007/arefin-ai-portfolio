import React, { useEffect, useRef, useState, CSSProperties } from "react";

const InnovationSection = () => {
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
            <section className="w-full h-screen py-10 md:py-16 sticky top-0 overflow-hidden bg-black" id="why-humanoid">
                <div className="container px-6 lg:px-8 mx-auto h-full flex flex-col">
                    <div className="mb-2 md:mb-3">
                        <div className="flex items-center gap-4 mb-2 md:mb-2 pt-8 sm:pt-6 md:pt-4">
                            <div className="pulse-chip opacity-0 animate-fade-in" style={{
                                animationDelay: "0.1s"
                            }}>
                                <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-[#FC4D0A] text-white mr-2">02</span>
                                <span>Humanoid</span>
                            </div>
                        </div>

                        <h2 className="section-title text-3xl sm:text-4xl md:text-5xl font-display font-bold mb-1 md:mb-2 text-white">
                            Why Humanoid
                        </h2>
                    </div>

                    <div ref={cardsContainerRef} className="relative flex-1 perspective-1000">
                        {/* First Card */}
                        <div className={getCardClasses(0)}>
                            <div
                                className="absolute inset-0 z-0 bg-gradient-to-b from-[#7C2D06]/40 to-[#111827]/80"
                                style={{
                                    backgroundImage: "url('/background-section1.png')",
                                    backgroundSize: "cover",
                                    backgroundPosition: "top center",
                                    backgroundBlendMode: "overlay"
                                }}
                            ></div>

                            <div className="absolute top-4 right-4 z-20">
                                <div className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm text-white">
                                    <span className="text-sm font-medium">The vision</span>
                                </div>
                            </div>

                            <div className="relative z-10 p-8 h-full flex flex-col justify-between">
                                <div className="max-w-xl">
                                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-display text-white font-bold leading-tight mb-4">
                                        We're giving AI a way to navigate the physical world
                                    </h3>
                                    <p className="text-white/80 text-lg mb-6">
                                        Our advanced AI systems are designed to understand and interact with the physical environment, making them perfect companions for real-world tasks.
                                    </p>
                                    <div className="flex flex-wrap gap-3">
                                        <span className="px-3 py-1 rounded-full bg-white/10 text-white/90 text-sm">Computer Vision</span>
                                        <span className="px-3 py-1 rounded-full bg-white/10 text-white/90 text-sm">Spatial Awareness</span>
                                        <span className="px-3 py-1 rounded-full bg-white/10 text-white/90 text-sm">Real-time Processing</span>
                                    </div>
                                </div>
                                <div className="mt-8 border-t border-white/10 pt-8">
                                    <div className="flex items-center gap-6">
                                        <div className="text-white/60">
                                            <div className="text-2xl font-bold text-white">99%</div>
                                            <div className="text-sm">Accuracy Rate</div>
                                        </div>
                                        <div className="text-white/60">
                                            <div className="text-2xl font-bold text-white">10ms</div>
                                            <div className="text-sm">Response Time</div>
                                        </div>
                                        <div className="text-white/60">
                                            <div className="text-2xl font-bold text-white">24/7</div>
                                            <div className="text-sm">Availability</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Second Card */}
                        <div className={getCardClasses(1)}>
                            <div
                                className="absolute inset-0 z-0 bg-gradient-to-b from-[#7C2D06]/40 to-[#111827]/80"
                                style={{
                                    backgroundImage: "url('/background-section2.png')",
                                    backgroundSize: "cover",
                                    backgroundPosition: "center",
                                    backgroundBlendMode: "overlay"
                                }}
                            ></div>

                            <div className="absolute top-4 right-4 z-20">
                                <div className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm text-white">
                                    <span className="text-sm font-medium">The vision</span>
                                </div>
                            </div>

                            <div className="relative z-10 p-8 h-full flex flex-col justify-between">
                                <div className="max-w-xl">
                                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-display text-white font-bold leading-tight mb-4">
                                        We're bringing adaptive intelligence to where humans work
                                    </h3>
                                    <p className="text-white/80 text-lg mb-6">
                                        Our AI adapts to different work environments and learns from human interactions, becoming more efficient and helpful over time.
                                    </p>
                                    <div className="flex flex-wrap gap-3">
                                        <span className="px-3 py-1 rounded-full bg-white/10 text-white/90 text-sm">Adaptive Learning</span>
                                        <span className="px-3 py-1 rounded-full bg-white/10 text-white/90 text-sm">Human Collaboration</span>
                                        <span className="px-3 py-1 rounded-full bg-white/10 text-white/90 text-sm">Workflow Optimization</span>
                                    </div>
                                </div>
                                <div className="mt-8 border-t border-white/10 pt-8">
                                    <div className="flex items-center gap-6">
                                        <div className="text-white/60">
                                            <div className="text-2xl font-bold text-white">200%</div>
                                            <div className="text-sm">Productivity Boost</div>
                                        </div>
                                        <div className="text-white/60">
                                            <div className="text-2xl font-bold text-white">1M+</div>
                                            <div className="text-sm">Tasks Completed</div>
                                        </div>
                                        <div className="text-white/60">
                                            <div className="text-2xl font-bold text-white">95%</div>
                                            <div className="text-sm">User Satisfaction</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Third Card */}
                        <div className={getCardClasses(2)}>
                            <div
                                className="absolute inset-0 z-0 bg-gradient-to-b from-[#7C2D06]/40 to-[#111827]/80"
                                style={{
                                    backgroundImage: "url('/background-section3.png')",
                                    backgroundSize: "cover",
                                    backgroundPosition: "bottom center",
                                    backgroundBlendMode: "overlay"
                                }}
                            ></div>

                            <div className="absolute top-4 right-4 z-20">
                                <div className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm text-white">
                                    <span className="text-sm font-medium">The vision</span>
                                </div>
                            </div>

                            <div className="relative z-10 p-8 h-full flex flex-col justify-between">
                                <div className="max-w-xl">
                                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-display text-white font-bold leading-tight mb-4">
                                        We're creating companions, <span className="text-[#FC4D0A]">not replacements</span>
                                    </h3>
                                    <p className="text-white/80 text-lg mb-6">
                                        Our AI is designed to enhance human capabilities, not replace them. We focus on creating collaborative systems that work alongside humans.
                                    </p>
                                    <div className="flex flex-wrap gap-3">
                                        <span className="px-3 py-1 rounded-full bg-white/10 text-white/90 text-sm">Human-Centric</span>
                                        <span className="px-3 py-1 rounded-full bg-white/10 text-white/90 text-sm">Collaborative AI</span>
                                        <span className="px-3 py-1 rounded-full bg-white/10 text-white/90 text-sm">Ethical Design</span>
                                    </div>
                                </div>
                                <div className="mt-8 border-t border-white/10 pt-8">
                                    <div className="flex items-center gap-6">
                                        <div className="text-white/60">
                                            <div className="text-2xl font-bold text-white">100K+</div>
                                            <div className="text-sm">Active Users</div>
                                        </div>
                                        <div className="text-white/60">
                                            <div className="text-2xl font-bold text-white">50+</div>
                                            <div className="text-sm">Industries Served</div>
                                        </div>
                                        <div className="text-white/60">
                                            <div className="text-2xl font-bold text-white">4.9/5</div>
                                            <div className="text-sm">User Rating</div>
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

export default InnovationSection;