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
      category: "Backend Development",
      icon: <Server className="h-6 w-6" />,
      technologies: ["Django & DRF", "Node.js/Express", "PostgreSQL/Redis", "RESTful APIs"],
      color: "text-primary"
    },
    {
      category: "Frontend Development",
      icon: <Code2 className="h-6 w-6" />,
      technologies: ["React/Next.js", "TypeScript", "TailwindCSS", "Redux/Context"],
      color: "text-accent"
    },
    {
      category: "AI Integration",
      icon: <Brain className="h-6 w-6" />,
      technologies: ["OpenAI API", "LangChain", "Vector DBs", "Prompt Engineering"],
      color: "text-primary"
    },
    {
      category: "DevOps & Tools",
      icon: <Layers className="h-6 w-6" />,
      technologies: ["Docker/Nginx", "AWS/Cloud", "Git/CI-CD", "System Design"],
      color: "text-accent"
    }
  ];

  const highlights = [
    "Developing full-stack web applications with modern tech stack",
    "Implementing AI features in business applications",
    "Building scalable and maintainable system architectures",
    "Creating efficient and secure API solutions"
  ];

  return (
    <section id="about" className="py-20 bg-background relative z-5">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 border-primary/30 text-primary glass-effect px-6 py-2.5 text-lg">
            About Me
          </Badge>
          <h2 className="text-4xl font-bold mb-6">
            Building Modern <span className="text-accent">Web Solutions</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Full-stack developer specializing in AI-powered web applications that solve real business problems.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {skills.map((skill, index) => (
            <Card key={skill.category} className="bg-gray-900/90 border border-gray-700/50 hover:shadow-ai-glow transition-all duration-300 group hover:scale-105 cursor-pointer hover:bg-gray-800/90">
              <CardContent className="p-6">
                <div className={`${skill.color} mb-4 group-hover:scale-110 transition-transform`}>
                  {skill.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">{skill.category}</h3>
                <div className="space-y-2">
                  {skill.technologies.map((tech) => (
                    <div key={tech} className="text-sm text-muted-foreground flex items-center group-hover:text-foreground/80 transition-colors">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2 group-hover:bg-accent transition-colors" />
                      {tech}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>




      </div>
    </section>
  );
};

export default About;