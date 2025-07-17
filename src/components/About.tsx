import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Code2,
  Database,
  Brain,
  Server,
  Layers,
  Zap,
  CheckCircle
} from "lucide-react";

const About = () => {
  const skills = [
    {
      category: "Backend",
      icon: <Server className="h-6 w-6" />,
      technologies: ["Django REST Framework", "Node.js", "PostgreSQL", "API Development"],
      color: "text-primary"
    },
    {
      category: "Frontend",
      icon: <Code2 className="h-6 w-6" />,
      technologies: ["React", "TailwindCSS", "TypeScript", "Responsive Design"],
      color: "text-accent"
    },
    {
      category: "AI & Data",
      icon: <Brain className="h-6 w-6" />,
      technologies: ["OpenAI API", "NLP-to-SQL", "Data Visualization", "Business Intelligence"],
      color: "text-primary"
    },
    {
      category: "Architecture",
      icon: <Layers className="h-6 w-6" />,
      technologies: ["Scalable Systems", "Microservices", "RESTful APIs", "Database Design"],
      color: "text-accent"
    }
  ];

  const highlights = [
    "Building AI-powered dashboards for business intelligence",
    "Developing comprehensive management systems (LMS, StMS, ERP)",
    "Converting business requirements to scalable tech solutions",
    "Creating custom service solutions for development teams"
  ];

  return (
    <section id="about" className="py-20 bg-muted/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 border-primary/30 text-primary glass-effect px-6 py-2.5 text-lg">
            About Me
          </Badge>
          <h2 className="text-4xl font-bold mb-6">
            Building the <span className="text-accent">Future</span> of Business Tech
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            I specialize in transforming business ideas into efficient digital solutions. My focus is on AI-integrated platforms
            that make complex data accessible to everyone.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {skills.map((skill, index) => (
            <Card key={skill.category} className="bg-card-gradient border-border hover:shadow-ai-glow transition-all duration-300 group">
              <CardContent className="p-6">
                <div className={`${skill.color} mb-4 group-hover:scale-110 transition-transform`}>
                  {skill.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{skill.category}</h3>
                <div className="space-y-2">
                  {skill.technologies.map((tech) => (
                    <div key={tech} className="text-sm text-muted-foreground flex items-center">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2" />
                      {tech}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Current Focus */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-3xl font-bold mb-6">
              Current Focus: <span className="text-primary">AI-Powered Business Intelligence</span>
            </h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              I'm currently building an AI-powered dashboard that revolutionizes how businesses interact
              with their data. The system converts natural language queries into SQL and presents
              real-time visualizations — making data insights accessible to everyone, not just data analysts.
            </p>

            <div className="space-y-3">
              {highlights.map((highlight, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">{highlight}</span>
                </div>
              ))}
            </div>
          </div>

          <Card className="bg-card-gradient border-border">
            <CardContent className="p-8">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                  <Zap className="h-8 w-8 text-primary" />
                </div>
                <h4 className="text-2xl font-bold mb-4">Ready to Build Something Amazing?</h4>
                <p className="text-muted-foreground mb-6">
                  Whether you need a full-stack web application, AI integration, or a complete
                  business management system, I'm here to turn your vision into reality.
                </p>
                <div className="flex flex-wrap justify-center gap-2">
                  <Badge variant="secondary">Fast Delivery</Badge>
                  <Badge variant="secondary">Scalable Solutions</Badge>
                  <Badge variant="secondary">AI Integration</Badge>
                  <Badge variant="secondary">Business Focus</Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;