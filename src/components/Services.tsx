import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Globe,
  Brain,
  Server,
  Settings,
  BarChart3,
  ArrowRight,
  Sparkles,
  Smartphone
} from "lucide-react";
import { useRef, useEffect } from "react";

const Services = () => {
  const services = [
    {
      icon: <Brain className="h-7 w-7" />,
      title: "AI Solutions",
      description: "Integrating cutting-edge AI to solve real business problems with intelligent features.",
      features: ["OpenAI", "NLP", "Automation", "Custom Models"],
      highlight: true,
      badge: "Specialized",
      color: "bg-slate-800/40"
    },
    {
      icon: <Globe className="h-7 w-7" />,
      title: "Web Development",
      description: "Building fast and responsive web experiences with modern technologies.",
      features: ["React", "Next.js", "TypeScript", "Mobile-First"],
      highlight: true,
      badge: "Core",
      color: "bg-slate-800/40"
    },
    {
      icon: <Smartphone className="h-7 w-7" />,
      title: "Full-Stack Apps",
      description: "End-to-end applications that scale, from concept to deployment.",
      features: ["Architecture", "Database", "Auth", "Admin"],
      highlight: false,
      color: "bg-slate-800/40"
    },
    {
      icon: <BarChart3 className="h-7 w-7" />,
      title: "Data Visualization",
      description: "Interactive dashboards and analytics for informed decision making.",
      features: ["Charts", "Analytics", "Dashboards", "Exports"],
      highlight: false,
      color: "bg-slate-800/40"
    },
    {
      icon: <Server className="h-7 w-7" />,
      title: "Backend Systems",
      description: "Secure and scalable server solutions with optimized databases.",
      features: ["APIs", "Django", "Node.js", "Security"],
      highlight: false,
      color: "bg-slate-800/40"
    },
    {
      icon: <Settings className="h-7 w-7" />,
      title: "Integration",
      description: "Connecting and automating business processes efficiently.",
      features: ["Automation", "APIs", "Workflows", "Updates"],
      highlight: false,
      color: "bg-slate-800/40"
    }
  ];

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>, card: HTMLDivElement) => {
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = (y - centerY) / 20;
    const rotateY = (centerX - x) / 20;

    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
  };

  const handleMouseLeave = (card: HTMLDivElement) => {
    if (!card) return;
    card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
  };

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 border-primary border-2 text-primary px-6 py-2 text-base">
            Services
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Transform Your <span className="text-primary">Ideas</span> Into Reality
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Web Development • AI Integration • Business Automation
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {services.map((service, index) => (
            <Card
              key={service.title}
              className={`relative overflow-hidden group cursor-pointer
                ${service.color} border-slate-700/50
                shadow-[0_4px_12px_0px_rgba(0,0,0,0.05)]
                hover:shadow-[0_8px_24px_0px_rgba(0,0,0,0.12)]
                hover:border-slate-600/50
                ${service.highlight ? 'ring-1 ring-primary/10' : ''}
                animate-fade-in-up rounded-xl min-h-[360px]
                transition-[transform,shadow] duration-300 ease-out will-change-transform`}
              style={{
                animationDelay: `${index * 100}ms`,
                transformStyle: 'preserve-3d'
              }}
              onMouseMove={(e) => handleMouseMove(e, e.currentTarget)}
              onMouseLeave={(e) => handleMouseLeave(e.currentTarget)}
            >
              {service.highlight && (
                <div className="absolute top-4 right-4 bg-primary/5 text-primary/90 px-3 py-1.5 text-xs font-medium rounded-full border border-primary/10 z-10">
                  {service.badge}
                </div>
              )}

              <CardContent className="p-8 flex flex-col h-full relative z-0">
                {/* Header Section */}
                <div className="flex items-start gap-5 mb-8">
                  <div className={`p-3 rounded-lg ${service.highlight ? 'bg-primary/5 border border-primary/10' : 'bg-slate-700/30'}
                    group-hover:scale-110 transition-transform duration-300 ease-out`}>
                    <div className={service.highlight ? 'text-primary' : 'text-white/90'}>
                      {service.icon}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white/90 group-hover:text-primary transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-slate-300/80 text-sm mt-2 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>

                {/* Features List */}
                <div className="grid grid-cols-2 gap-3 mt-auto">
                  {service.features.map((feature) => (
                    <div key={feature}
                      className={`px-4 py-2 rounded-lg text-sm font-medium border
                        ${service.highlight
                          ? 'bg-primary/5 text-primary/90 border-primary/10'
                          : 'bg-slate-700/30 text-slate-300/90 border-slate-600/30'}
                        hover:bg-slate-700/50 transition-all duration-300 ease-out
                        hover:scale-105 transform-gpu`}>
                      {feature}
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <Button
                  className={`w-full mt-8 h-12 ${service.highlight
                    ? 'bg-primary/90 hover:bg-primary border border-primary/20'
                    : 'bg-slate-700/50 hover:bg-slate-700/70 border border-slate-600/30'
                    } text-white/90 rounded-lg transition-all duration-300 ease-out text-base
                    hover:scale-[1.02] transform-gpu`}
                  onClick={() => {
                    const contactSection = document.querySelector('#contact');
                    if (contactSection) {
                      contactSection.scrollIntoView({ behavior: 'smooth' });
                      localStorage.setItem('selectedService', service.title);
                    }
                  }}
                >
                  Learn More
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>

              {/* Hover Effect Overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.07] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;