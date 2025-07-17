import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
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
      github: true
    },
    {
      title: "Student Management System (StMS)",
      status: "Completed",
      description: "Comprehensive management platform for educational institutions. Handles admissions, attendance tracking, examination management, and financial operations with role-based access control.",
      icon: <GraduationCap className="h-8 w-8" />,
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
      github: true
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
    <section id="projects" className="py-20 glass-effect">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 glass-card-dark p-8 rounded-2xl">
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

        {/* Featured Projects */}
        <div className="space-y-12 mb-16">
          {projects.map((project, index) => (
            <Card
              key={project.title}
              className={`overflow-hidden ${project.highlight
                ? 'card-glass-primary'
                : 'card-glass-hover'
                }`}
            >
              <div className="grid lg:grid-cols-2 gap-0">
                {/* Project Info */}
                <div className="p-8">
                  <div className="flex items-start justify-between mb-6">
                    <div className={`p-3 rounded-lg ${project.highlight ? 'glass-gradient' : 'glass-effect'
                      }`}>
                      <div className={project.highlight ? 'text-primary' : 'text-accent'}>
                        {project.icon}
                      </div>
                    </div>
                    <Badge
                      variant={project.status === "In Development" ? "outline" : "outline"}
                      className={`glass-effect ${project.status === "In Development"
                        ? "border-primary/30 text-primary"
                        : "border-accent/30 text-accent"}`}
                    >
                      {project.status}
                    </Badge>
                  </div>

                  <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold mb-3 text-muted-foreground uppercase tracking-wide">
                      Technologies Used
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="outline" className="glass-effect">
                          {tech}
                        </Badge>
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
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Learn More
                    </Button>
                  </div>
                </div>

                {/* Features & Metrics */}
                <div className="glass-effect p-8 border-l border-white/10">
                  <div className="space-y-6">
                    {/* Key Features */}
                    <div>
                      <h4 className="font-semibold mb-3 flex items-center">
                        <Zap className="h-4 w-4 mr-2 text-primary" />
                        Key Features
                      </h4>
                      <ul className="space-y-2">
                        {project.features.map((feature) => (
                          <li key={feature} className="text-sm text-muted-foreground flex items-start glass-effect p-2 rounded-lg">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 mt-2 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Project Metrics */}
                    <div>
                      <h4 className="font-semibold mb-3 flex items-center">
                        <Database className="h-4 w-4 mr-2 text-accent" />
                        Project Impact
                      </h4>
                      <div className="grid grid-cols-1 gap-3">
                        {Object.entries(project.metrics).map(([key, value]) => (
                          <div key={key} className="glass-effect p-3 rounded-lg">
                            <div className="text-sm font-medium">{value}</div>
                            <div className="text-xs text-muted-foreground capitalize">{key.replace(/([A-Z])/g, ' $1')}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Additional Work */}
        <Card className="card-glass-hover mb-16">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Users className="h-6 w-6 mr-3 text-accent" />
              Additional Systems & Solutions
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-6">
              Beyond the featured projects, I've built numerous other business systems and tools.
              While I don't showcase older live projects (they no longer reflect my current technical level),
              I'm happy to discuss technical details and architecture decisions.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              {additionalWork.map((work, index) => (
                <div key={index} className="flex items-start space-x-3 glass-effect p-3 rounded-lg">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">{work}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* CTA */}
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-4">
            Ready to Build Your <span className="text-primary">Next Project</span>?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Let's discuss how I can help transform your business idea into a scalable,
            intelligent system that drives real results.
          </p>
          <Button size="lg" className="button-glass-primary">
            <Calendar className="mr-2 h-5 w-5" />
            Schedule a Project Discussion
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;