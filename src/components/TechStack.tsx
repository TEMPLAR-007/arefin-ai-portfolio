import { 
  SiReact, 
  SiTypescript, 
  SiNextdotjs, 
  SiNodedotjs, 
  SiTailwindcss, 
  SiMongodb, 
  SiPostgresql 
} from "react-icons/si";

const TechStack = () => {
  const technologies = [
    { Icon: SiReact, name: "React", color: "#61DAFB" },
    { Icon: SiTypescript, name: "TypeScript", color: "#3178C6" },
    { Icon: SiNextdotjs, name: "Next.js", color: "#000000" },
    { Icon: SiNodedotjs, name: "Node.js", color: "#339933" },
    { Icon: SiTailwindcss, name: "Tailwind CSS", color: "#06B6D4" },
    { Icon: SiMongodb, name: "MongoDB", color: "#47A248" },
    { Icon: SiPostgresql, name: "PostgreSQL", color: "#336791" },
  ];

  return (
    <div className="flex flex-wrap justify-center items-center gap-8 mt-12 mb-8">
      {technologies.map(({ Icon, name, color }) => (
        <div
          key={name}
          className="group flex flex-col items-center space-y-2 p-4 rounded-lg transition-all duration-300 hover:bg-muted/30 hover:scale-110"
        >
          <div className="relative">
            <Icon 
              className="w-8 h-8 transition-all duration-300 group-hover:scale-125" 
              style={{ color }} 
            />
            <div 
              className="absolute inset-0 opacity-0 group-hover:opacity-30 rounded-full blur-md transition-opacity duration-300"
              style={{ backgroundColor: color }}
            />
          </div>
          <span className="text-xs text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {name}
          </span>
        </div>
      ))}
    </div>
  );
};

export default TechStack;