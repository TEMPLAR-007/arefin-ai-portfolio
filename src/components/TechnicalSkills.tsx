import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
    Code2,
    Brain,
    Server,
    Layers
} from "lucide-react";

const TechnicalSkills = () => {
    const skills = [
        {
            category: "Frontend Development",
            icon: <Code2 className="h-6 w-6" />,
            technologies: ["React/Next.js", "TypeScript", "TailwindCSS", "Redux/Context"],
            color: "text-primary"
        },
        {
            category: "Backend Development",
            icon: <Server className="h-6 w-6" />,
            technologies: ["Node.js/Express", "Django & DRF", "PostgreSQL/Redis", "RESTful APIs"],
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

    return (
        <section id="skills" className="py-20 bg-background relative z-10">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <Badge
                        variant="outline"
                        className="border-primary/30 text-primary glass-effect px-6 py-2 text-base mb-4 backdrop-blur-sm"
                    >
                        Technical Skills
                    </Badge>
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        Core Technologies
                    </h2>
                    <p className="text-base md:text-lg text-white/80 max-w-2xl mx-auto">
                        Specialized in modern web technologies and AI integration
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                    {skills.map((skill) => (
                        <Card
                            key={skill.category}
                            className="bg-slate-900/95 border border-white/[0.08] hover:border-white/[0.12] transition-all duration-300 group"
                        >
                            <CardContent className="p-6">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className={`p-2 rounded-xl bg-slate-800/80 ${skill.color} group-hover:scale-110 transition-transform duration-300`}>
                                        {skill.icon}
                                    </div>
                                    <h3 className="text-lg font-semibold text-white group-hover:text-primary transition-colors duration-300">
                                        {skill.category}
                                    </h3>
                                </div>

                                <div className="space-y-2">
                                    {skill.technologies.map((tech) => (
                                        <div
                                            key={tech}
                                            className="flex items-center gap-2"
                                        >
                                            <div className="w-1.5 h-1.5 rounded-full bg-primary/50 group-hover:bg-primary transition-colors duration-300" />
                                            <span className="text-white/80 text-sm">{tech}</span>
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

export default TechnicalSkills;