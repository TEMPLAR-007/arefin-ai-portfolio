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
      icon: <Globe className="h-8 w-8" />,
      title: "Full Stack Web Development",
      description: "Building modern web applications with clean architecture and best practices. Specializing in React ecosystem with Django and Node.js backend solutions.",
      features: ["React & Next.js", "Django & Node.js", "PostgreSQL & Redis", "TypeScript"],
      highlight: false
    },
    {
      icon: <Brain className="h-8 w-8" />,
      title: "AI Dashboard & Data Tools",
      description: "Creating intelligent data platforms that make complex analytics simple. Powered by natural language processing and real-time insights.",
      features: ["OpenAI Integration", "Data Visualization", "Real-time Analytics", "Custom Dashboards"],
      highlight: true
    },
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: "Modern Web Applications",
      description: "Crafting responsive, fast-loading web applications with modern features. Focus on performance, accessibility, and great user experience.",
      features: ["TailwindCSS", "Responsive Design", "PWA Support", "Performance Optimization"],
      highlight: true
    },
    {
      icon: <Server className="h-8 w-8" />,
      title: "Backend API Development",
      description: "Developing secure and scalable REST APIs with comprehensive documentation. Built with modern frameworks and best security practices.",
      features: ["Django REST", "API Security", "JWT Auth", "Swagger Docs"],
      highlight: false
    },
    {
      icon: <Settings className="h-8 w-8" />,
      title: "Business Management Systems",
      description: "Custom-built management platforms that streamline your operations. From learning platforms to ERP systems tailored to your needs.",
      features: ["Role-based Access", "Custom Workflows", "Data Analytics", "Third-party Integration"],
      highlight: false
    },
    {
      icon: <BarChart3 className="h-8 w-8" />,
      title: "Data Analytics Solutions",
      description: "Transform raw data into actionable insights. Building custom analytics solutions that help make data-driven decisions.",
      features: ["Data Visualization", "Custom Reports", "Real-time Metrics", "Analytics Dashboard"],
      highlight: false
    }
  ];

  return (
    <section id="services" className="py-20 glass-effect">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 glass-card-dark p-8 rounded-2xl">
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

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Card
              key={service.title}
              className={`relative overflow-hidden transition-all duration-300 hover:scale-105 group ${service.highlight
                ? 'card-glass-primary'
                : 'card-glass-hover'
                }`}
            >
              {service.highlight && (
                <div className="absolute top-0 right-0 glass-gradient-dark text-primary-foreground px-3 py-1 text-sm font-medium rounded-bl-lg">
                  <Sparkles className="h-3 w-3 inline mr-1" />
                  Popular
                </div>
              )}

              <CardHeader>
                <div className={`inline-flex w-fit p-3 rounded-lg ${service.highlight ? 'glass-gradient' : 'glass-effect'
                  }`}>
                  <div className={service.highlight ? 'text-primary' : 'text-accent'}>
                    {service.icon}
                  </div>
                </div>
                <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
              </CardHeader>

              <CardContent className="space-y-6">
                <div className="space-y-2">
                  {service.features.map((feature) => (
                    <div key={feature} className="flex items-center text-sm glass-effect p-2 rounded-lg">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3" />
                      <span className="text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-4 border-t border-white/10">
                  <Button
                    className={`w-full ${service.highlight
                      ? 'button-glass-primary'
                      : 'button-glass-accent'
                      }`}
                  >
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <Card className="card-glass-primary">
            <CardContent className="p-8">
              <h3 className="text-3xl font-bold mb-4">
                Need Something <span className="text-primary">Custom</span>?
              </h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Every business is unique. Let's discuss your specific requirements and create
                a tailored solution that perfectly fits your needs and budget.
              </p>
              <Button size="lg" className="button-glass-primary">
                Schedule a Free Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Services;