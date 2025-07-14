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
  Sparkles 
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Full Stack Web Development",
      description: "Complete web applications from concept to deployment. Modern, responsive, and scalable solutions using React, Node.js, and Django.",
      features: ["React + TypeScript", "RESTful APIs", "Database Design", "Responsive UI"],
      price: "Starting at $2,000",
      highlight: false
    },
    {
      icon: <Brain className="h-8 w-8" />,
      title: "AI Dashboard & Data Tools",
      description: "Intelligent dashboards that convert natural language to SQL queries. Make your business data accessible to everyone.",
      features: ["NLP to SQL", "Real-time Visualization", "OpenAI Integration", "Business Intelligence"],
      price: "Starting at $3,500",
      highlight: true
    },
    {
      icon: <Server className="h-8 w-8" />,
      title: "Backend API Development",
      description: "Robust, scalable APIs built with Django REST Framework and Node.js. Secure, documented, and ready for production.",
      features: ["REST & GraphQL", "Authentication", "Database Optimization", "API Documentation"],
      price: "Starting at $1,500",
      highlight: false
    },
    {
      icon: <Settings className="h-8 w-8" />,
      title: "Internal Business Tools",
      description: "Custom management systems: LMS, CRM, ERP, Student Management. Streamline your operations with tailored solutions.",
      features: ["Custom Workflows", "User Management", "Reporting Systems", "Integration Ready"],
      price: "Starting at $4,000",
      highlight: false
    },
    {
      icon: <BarChart3 className="h-8 w-8" />,
      title: "Business Logic Automation",
      description: "Automate complex business processes and generate insightful reports. Turn manual work into intelligent systems.",
      features: ["Process Automation", "Custom Reports", "Data Analytics", "Workflow Optimization"],
      price: "Starting at $2,500",
      highlight: false
    }
  ];

  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 border-accent/30 text-accent">
            Services
          </Badge>
          <h2 className="text-4xl font-bold mb-6">
            Transform Your <span className="bg-hero-gradient bg-clip-text text-transparent">Business Ideas</span> Into Reality
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            From AI-powered dashboards to complete business management systems, 
            I help startups and businesses build scalable, intelligent solutions.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Card 
              key={service.title} 
              className={`relative overflow-hidden transition-all duration-300 hover:scale-105 group ${
                service.highlight 
                  ? 'bg-card-gradient border-primary shadow-tech-glow' 
                  : 'bg-card border-border hover:shadow-ai-glow'
              }`}
            >
              {service.highlight && (
                <div className="absolute top-0 right-0 bg-primary text-primary-foreground px-3 py-1 text-sm font-medium">
                  <Sparkles className="h-3 w-3 inline mr-1" />
                  Popular
                </div>
              )}
              
              <CardHeader>
                <div className={`inline-flex w-fit p-3 rounded-lg mb-4 ${
                  service.highlight ? 'bg-primary/10' : 'bg-accent/10'
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
                    <div key={feature} className="flex items-center text-sm">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3" />
                      <span className="text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <div className="pt-4 border-t border-border">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-bold text-foreground">{service.price}</span>
                  </div>
                  <Button 
                    className={`w-full ${
                      service.highlight 
                        ? 'bg-primary hover:bg-primary/90' 
                        : 'bg-accent hover:bg-accent/90'
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
          <Card className="bg-card-gradient border-border">
            <CardContent className="p-8">
              <h3 className="text-3xl font-bold mb-4">
                Need Something <span className="text-primary">Custom</span>?
              </h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Every business is unique. Let's discuss your specific requirements and create 
                a tailored solution that perfectly fits your needs and budget.
              </p>
              <Button size="lg" className="bg-primary hover:bg-primary/90 shadow-tech-glow">
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