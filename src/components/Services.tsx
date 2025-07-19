import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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

const Services = () => {
  const services = [
    {
      icon: <Brain className="h-6 w-6" />,
      title: "AI-Powered Solutions",
      description: "Transform your applications with intelligent features. From chatbots to data analysis, I integrate cutting-edge AI to solve real business problems.",
      features: ["OpenAI Integration", "Natural Language Processing", "Intelligent Automation", "Custom AI Models"],
      highlight: true,
      badge: "Specialized"
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: "Modern Web Development",
      description: "Crafting beautiful, fast, and responsive web experiences. Every project is built with performance, accessibility, and user experience in mind.",
      features: ["React & Next.js", "TypeScript", "Performance Optimization", "Mobile-First Design"],
      highlight: true,
      badge: "Core Expertise"
    },
    {
      icon: <Smartphone className="h-6 w-6" />,
      title: "Full-Stack Applications",
      description: "End-to-end web applications that scale. From concept to deployment, I handle both frontend elegance and backend robustness.",
      features: ["Complete Architecture", "Database Design", "User Authentication", "Admin Panels"],
      highlight: false
    },
    {
      icon: <BarChart3 className="h-6 w-6" />,
      title: "Data Visualization",
      description: "Turn complex data into actionable insights. Interactive dashboards and analytics that help you make informed decisions.",
      features: ["Interactive Charts", "Real-time Analytics", "Custom Dashboards", "Export Capabilities"],
      highlight: false
    },
    {
      icon: <Server className="h-6 w-6" />,
      title: "Backend Architecture",
      description: "Solid foundations for your applications. Secure, scalable server solutions with clean APIs and optimized databases.",
      features: ["Django & Node.js", "RESTful APIs", "Database Optimization", "Security Best Practices"],
      highlight: false
    },
    {
      icon: <Settings className="h-6 w-6" />,
      title: "System Integration",
      description: "Connect and automate your business processes. Custom solutions that streamline workflows and eliminate repetitive tasks.",
      features: ["Workflow Automation", "Third-party APIs", "Process Optimization", "Legacy System Updates"],
      highlight: false
    }
  ];

  return (
    <section id="services" className="py-12 glass-effect">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4 border-accent/30 text-accent glass-effect px-6 py-2.5 text-lg">
            Services
          </Badge>
          <h2 className="text-4xl font-bold mb-6">
            Transform Your <span className="text-primary">Business Ideas</span> Into Reality
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Specialized in web development, AI integration, and business automation
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {services.map((service, index) => (
            <Card
              key={service.title}
              className={`relative overflow-hidden transition-all duration-500 hover:scale-105 group cursor-pointer ${service.highlight
                ? 'card-glass-primary border-primary/30 shadow-lg hover:shadow-primary/20'
                : 'card-glass-hover border-accent/20 hover:shadow-accent/10'
                } animate-fade-in-up flex flex-col min-h-[350px]`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {service.highlight && (
                <div className="absolute top-3 right-3 glass-gradient-dark text-primary-foreground px-2 py-1 text-xs font-medium rounded-full">
                  <Sparkles className="h-3 w-3 inline mr-1" />
                  {service.badge}
                </div>
              )}

              <CardContent className="p-6 flex flex-col h-full">
                {/* Header Section */}
                <div className="text-center mb-4">
                  <div className={`inline-flex p-3 rounded-lg mb-3 ${service.highlight ? 'glass-gradient' : 'glass-effect'
                    } group-hover:scale-110 transition-transform`}>
                    <div className={service.highlight ? 'text-primary' : 'text-accent'}>
                      {service.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-muted-foreground text-base leading-relaxed mb-4 text-center flex-grow">
                  {service.description}
                </p>

                {/* Features List */}
                <div className="space-y-2 mb-6">
                  {service.features.map((feature) => (
                    <div key={feature} className="flex items-center glass-effect p-2 rounded-lg group-hover:bg-white/10 transition-colors">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2 flex-shrink-0" />
                      <span className="text-muted-foreground text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <Button
                  className={`w-full mt-auto ${service.highlight
                    ? 'button-glass-primary'
                    : 'button-glass-accent'
                    } group-hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300`}
                  onClick={() => {
                    const contactSection = document.querySelector('#contact');
                    if (contactSection) {
                      contactSection.scrollIntoView({ behavior: 'smooth' });
                      localStorage.setItem('selectedService', service.title);
                    }
                  }}
                >
                  Let's Discuss
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;