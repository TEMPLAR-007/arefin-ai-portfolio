import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Mail,
  Github,
  ExternalLink,
  MapPin,
  Clock,
  MessageSquare,
  Send,
  Globe
} from "lucide-react";

const Contact = () => {
  const contactMethods = [
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email",
      description: "Best for project inquiries and detailed discussions",
      value: "arefinkhan869@gmail.com",
      action: "Send Email",
      href: "mailto:arefinkhan869@gmail.com",
      primary: true
    },
    {
      icon: <Github className="h-6 w-6" />,
      title: "GitHub",
      description: "Check out my code and contributions",
      value: "github.com/TEMPLAR-007",
      action: "View Profile",
      href: "https://github.com/TEMPLAR-007",
      primary: false
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: "Current Portfolio",
      description: "View my existing portfolio site",
      value: "arefins-portfolio.netlify.app",
      action: "Visit Site",
      href: "https://arefins-portfolio.netlify.app",
      primary: false
    }
  ];

  const workingStyle = [
    {
      icon: <Clock className="h-5 w-5 text-primary" />,
      title: "Available Hours",
      description: "GMT+6 (Bangladesh Time), flexible for global clients"
    },
    {
      icon: <MessageSquare className="h-5 w-5 text-accent" />,
      title: "Communication",
      description: "Regular updates, clear timelines, collaborative approach"
    },
    {
      icon: <Send className="h-5 w-5 text-primary" />,
      title: "Project Delivery",
      description: "Agile methodology, iterative feedback, on-time delivery"
    }
  ];

  return (
    <section id="contact" className="py-20 glass-effect">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 glass-card-dark p-8 rounded-2xl">
          <Badge variant="outline" className="mb-4 border-accent/30 text-accent glass-effect px-6 py-2.5 text-lg">
            Get In Touch
          </Badge>
          <h2 className="text-4xl font-bold mb-6">
            Let's Build Something <span className="text-primary">Amazing</span> Together
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Available for new projects and collaborations
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Contact Methods */}
          <div className="lg:col-span-2 space-y-6">
            {contactMethods.map((method, index) => (
              <Card
                key={method.title}
                className={`transition-all duration-300 hover:scale-105 group ${method.primary
                  ? 'card-glass-primary'
                  : 'card-glass-hover'
                  }`}
              >
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className={`p-3 rounded-lg ${method.primary ? 'glass-gradient' : 'glass-effect'
                        }`}>
                        <div className={method.primary ? 'text-primary' : 'text-accent'}>
                          {method.icon}
                        </div>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-1">{method.title}</h3>
                        <p className="text-sm text-muted-foreground mb-2">{method.description}</p>
                        <p className="text-foreground font-medium">{method.value}</p>
                      </div>
                    </div>
                    <Button
                      asChild
                      className={method.primary ? "button-glass-primary" : "button-glass-accent"}
                    >
                      <a href={method.href} target="_blank" rel="noopener noreferrer">
                        {method.action}
                        <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Location & Availability */}
          <div className="space-y-6">
            <Card className="card-glass-hover">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <MapPin className="h-6 w-6 mr-3 text-primary" />
                  Location & Availability
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="glass-effect p-3 rounded-lg">
                  <div className="text-sm font-medium mb-1">Based in</div>
                  <div className="text-muted-foreground">Bangladesh 🇧🇩</div>
                </div>
                <div className="glass-effect p-3 rounded-lg">
                  <div className="text-sm font-medium mb-1">Work Style</div>
                  <div className="text-muted-foreground">Remote, Freelance, Full-time</div>
                </div>
                <div className="glass-effect p-3 rounded-lg">
                  <div className="text-sm font-medium mb-1">Current Status</div>
                  <Badge variant="outline" className="glass-effect border-primary/30 text-primary">
                    Available for new projects
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="card-glass-hover">
              <CardHeader>
                <CardTitle className="text-lg">Working Style</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {workingStyle.map((item, index) => (
                  <div key={index} className="glass-effect p-3 rounded-lg space-y-2">
                    <div className="flex items-center space-x-2">
                      {item.icon}
                      <span className="font-medium text-sm">{item.title}</span>
                    </div>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>

        {/* CTA Section */}
        <Card className="card-glass-primary">
          <CardContent className="p-8 text-center">
            <h3 className="text-3xl font-bold mb-4">
              Ready to Start Your <span className="text-primary">Project</span>?
            </h3>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              Whether you need a complete web application, AI integration, or want to discuss
              a custom solution, I'm here to help. Let's turn your vision into reality.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="button-glass-primary"
              >
                <a href="mailto:arefinkhan869@gmail.com">
                  <Mail className="mr-2 h-5 w-5" />
                  Start a Project
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="button-glass-accent"
              >
                <a href="https://github.com/TEMPLAR-007" target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-5 w-5" />
                  View My Work
                </a>
              </Button>
            </div>

            <div className="mt-8 text-center glass-effect p-3 rounded-lg inline-block">
              <p className="text-sm text-muted-foreground">
                Typical response time: <span className="text-primary font-medium">Within 24 hours</span>
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Contact;