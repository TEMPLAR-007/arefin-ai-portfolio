import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useState, useEffect, useRef } from "react";
import {
  Brain,
  GraduationCap,
  ExternalLink,
  Github,
  Calendar,
  Users,
  Database,
  Zap
} from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "AI Business Intelligence Dashboard",
      status: "In Development",
      description: "Revolutionary dashboard that converts natural language queries into SQL and generates real-time business visualizations. Empowers non-technical users to extract insights effortlessly.",
      icon: <Brain className="h-8 w-8" />,
      image: "/api/placeholder/600/400", // Placeholder for project screenshot
      technologies: ["Node.js", "OpenAI API", "PostgreSQL", "React", "D3.js", "NLP"],
      features: [
        "Natural language to SQL conversion",
        "Real-time data visualization",
        "Interactive business charts",
        "Multi-database support",
        "Export & sharing capabilities"
      ],
      metrics: {
        queries: "1000+ NL queries processed",
        accuracy: "95% SQL generation accuracy",
        performance: "Sub-second response time"
      },
      highlight: true,
      liveDemo: false,
      github: true,
      category: "AI & Data"
    },
    {
      title: "Student Management System (StMS)",
      status: "Completed",
      description: "Comprehensive management platform for educational institutions. Handles admissions, attendance tracking, examination management, and financial operations with role-based access control.",
      icon: <GraduationCap className="h-8 w-8" />,
      image: "/api/placeholder/600/400", // Placeholder for project screenshot
      technologies: ["Django REST", "PostgreSQL", "React", "JWT Auth", "PDF Reports"],
      features: [
        "Student admission & enrollment",
        "Attendance tracking system",
        "Examination & grading",
        "Financial management",
        "Parent-teacher portal",
        "Automated report generation"
      ],
      metrics: {
        users: "500+ concurrent users",
        students: "2000+ student records",
        uptime: "99.9% system uptime"
      },
      highlight: false,
      liveDemo: false,
      github: true,
      category: "Business Systems"
    },
    {
      title: "E-Commerce Platform",
      status: "Completed",
      description: "Modern e-commerce solution with advanced inventory management, payment processing, and analytics dashboard. Built for scalability and performance.",
      icon: <Database className="h-8 w-8" />,
      image: "/api/placeholder/600/400", // Placeholder for project screenshot
      technologies: ["Next.js", "Stripe API", "MongoDB", "Tailwind", "Vercel"],
      features: [
        "Product catalog management",
        "Secure payment processing",
        "Order tracking system",
        "Analytics dashboard",
        "Mobile-responsive design"
      ],
      metrics: {
        transactions: "10K+ transactions processed",
        performance: "99.8% uptime",
        users: "2K+ active users"
      },
      highlight: false,
      liveDemo: false,
      github: true,
      category: "E-Commerce"
    }
  ];

  const additionalWork = [
    "Learning Management System (LMS) with course delivery & progress tracking",
    "Expense Management System for internal team operations",
    "Custom CRM solutions for client relationship management",
    "API integrations for third-party business tools",
    "Database optimization and performance consulting"
  ];

  return (
    <section id="projects" className="py-24 bg-background">
      <div className="container mx-auto px-6 flex flex-col gap-24">
        {/* Header */}
        <div className="text-center">
          <Badge variant="outline" className="mb-4 border-primary/30 text-primary glass-effect px-6 py-2.5 text-lg">
            Projects & Case Studies
          </Badge>
          <h2 className="text-4xl font-bold mb-6">
            Turning <span className="text-accent">Complex Ideas</span> Into Working Solutions
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real-world applications that deliver measurable results
          </p>
        </div>

        {/* Projects */}
        <div className="max-w-5xl mx-auto w-full flex flex-col gap-24">
          {projects.map((project) => (
            <Card
              key={project.title}
              className={`w-full transition-all duration-300 ${project.highlight
                ? 'card-glass-primary border-primary/30'
                : 'card-glass-hover border-accent/20'
                }`}
            >
              <div className="grid lg:grid-cols-2 gap-0">
                {/* Project Image/Visual */}
                <div className="bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center p-12">
                  <div className="text-center">
                    <div className={`inline-flex p-6 rounded-2xl mb-4 ${project.highlight ? 'glass-gradient' : 'glass-effect'}`}>
                      <div className={`${project.highlight ? 'text-primary' : 'text-accent'} opacity-60`}>
                        {project.icon}
                      </div>
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {project.category}
                    </div>
                  </div>

                  {/* Status Badge */}
                  <div className="absolute top-4 right-4">
                    <Badge
                      variant="outline"
                      className={`glass-effect backdrop-blur-md ${project.status === "In Development"
                        ? "border-primary/30 text-primary bg-primary/10"
                        : "border-accent/30 text-accent bg-accent/10"
                        }`}
                    >
                      {project.status}
                    </Badge>
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-8 flex flex-col justify-center">
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold mb-3 text-primary">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      {project.description}
                    </p>
                  </div>

                  {/* Technologies */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold mb-3 text-muted-foreground uppercase tracking-wide">
                      Tech Stack
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="outline" className="glass-effect">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Key Features */}
                  <div className="mb-6">
                    <h4 className="font-semibold mb-3 flex items-center">
                      <Zap className="h-4 w-4 mr-2 text-primary" />
                      Key Features
                    </h4>
                    <div className="grid grid-cols-1 gap-2">
                      {project.features.slice(0, 3).map((feature) => (
                        <div key={feature} className="text-sm text-muted-foreground flex items-center glass-effect p-2 rounded-lg">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 flex-shrink-0" />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex gap-3">
                    {project.github && (
                      <Button variant="outline" size="sm" className="button-glass">
                        <Github className="mr-2 h-4 w-4" />
                        View Code
                      </Button>
                    )}
                    <Button
                      size="sm"
                      className={project.highlight ? "button-glass-primary" : "button-glass-accent"}
                      onClick={() => {
                        const contactSection = document.querySelector('#contact');
                        if (contactSection) {
                          contactSection.scrollIntoView({ behavior: 'smooth' });
                          localStorage.setItem('selectedProject', project.title);
                        }
                      }}
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Learn More
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Additional Work - Compact */}
        <div className="w-full max-w-4xl mx-auto">
          <div className="text-center">
            <h3 className="text-xl font-bold mb-4 text-accent">
              Additional Experience
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {additionalWork.map((work, index) => (
                <div key={index} className="glass-effect px-3 py-2 rounded-full">
                  <span className="text-xs text-muted-foreground">{work}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="w-full max-w-2xl mx-auto">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Build Your <span className="text-primary">Next Project</span>?
            </h3>
            <p className="text-muted-foreground mb-6">
              Let's discuss how I can help transform your business idea into a scalable,
              intelligent system that drives real results.
            </p>
            <Button
              size="lg"
              className="button-glass-primary"
              onClick={() => {
                const contactSection = document.querySelector('#contact');
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: 'smooth' });
                  localStorage.setItem('selectedService', 'Project Discussion');
                }
              }}
            >
              <Calendar className="mr-2 h-5 w-5" />
              Schedule a Project Discussion
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;