import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Code2, 
  Brain, 
  Rocket, 
  Users, 
  Award, 
  Coffee,
  MapPin,
  Calendar,
  Download,
  ExternalLink,
  Zap,
  Target,
  Heart
} from "lucide-react";
import { useState } from "react";

const About = () => {
  const [activeTab, setActiveTab] = useState("story");

  const achievements = [
    {
      icon: <Code2 className="h-6 w-6" />,
      number: "50+",
      label: "Projects Delivered",
      description: "Successfully completed projects across various industries"
    },
    {
      icon: <Users className="h-6 w-6" />,
      number: "25+",
      label: "Happy Clients",
      description: "Satisfied clients who trust my expertise"
    },
    {
      icon: <Award className="h-6 w-6" />,
      number: "5+",
      label: "Years Experience",
      description: "Professional development experience"
    },
    {
      icon: <Brain className="h-6 w-6" />,
      number: "15+",
      label: "AI Projects",
      description: "Specialized AI-powered applications built"
    }
  ];

  const skills = [
    { name: "React/Next.js", level: 95, color: "from-blue-500 to-cyan-500" },
    { name: "Node.js/Django", level: 90, color: "from-green-500 to-emerald-500" },
    { name: "AI Integration", level: 85, color: "from-purple-500 to-pink-500" },
    { name: "Database Design", level: 88, color: "from-orange-500 to-red-500" },
    { name: "Cloud Architecture", level: 82, color: "from-indigo-500 to-blue-500" },
    { name: "UI/UX Design", level: 78, color: "from-pink-500 to-rose-500" }
  ];

  const personalInfo = [
    { icon: <MapPin className="h-4 w-4" />, label: "Location", value: "Bangladesh" },
    { icon: <Calendar className="h-4 w-4" />, label: "Experience", value: "5+ Years" },
    { icon: <Coffee className="h-4 w-4" />, label: "Coffee Consumed", value: "∞ Cups" },
    { icon: <Heart className="h-4 w-4" />, label: "Passion", value: "Building Solutions" }
  ];

  const tabs = [
    { id: "story", label: "My Story", icon: <Heart className="h-4 w-4" /> },
    { id: "skills", label: "Skills", icon: <Zap className="h-4 w-4" /> },
    { id: "approach", label: "Approach", icon: <Target className="h-4 w-4" /> }
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case "story":
        return (
          <div className="space-y-6">
            <div className="prose prose-invert max-w-none">
              <p className="text-lg text-white/90 leading-relaxed">
                My journey into development started with a simple curiosity about how websites work. 
                What began as tinkering with HTML quickly evolved into a deep passion for creating 
                digital solutions that make a real difference.
              </p>
              <p className="text-white/80 leading-relaxed">
                Over the past 5+ years, I've had the privilege of working with startups, established 
                businesses, and everything in between. Each project has taught me something new, 
                whether it's a cutting-edge AI integration or a complex database optimization challenge.
              </p>
              <p className="text-white/80 leading-relaxed">
                What drives me most is the moment when a client sees their vision come to life - 
                when complex data becomes intuitive dashboards, when manual processes become 
                automated workflows, and when ideas become scalable applications.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {personalInfo.map((info, index) => (
                <div key={index} className="text-center p-4 rounded-lg bg-white/5 border border-white/10">
                  <div className="flex justify-center mb-2 text-primary">
                    {info.icon}
                  </div>
                  <div className="text-xs text-white/60 mb-1">{info.label}</div>
                  <div className="text-sm font-medium text-white">{info.value}</div>
                </div>
              ))}
            </div>
          </div>
        );
      
      case "skills":
        return (
          <div className="space-y-6">
            <p className="text-white/80 mb-6">
              Here's a breakdown of my technical expertise across different domains:
            </p>
            <div className="space-y-4">
              {skills.map((skill, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-white font-medium">{skill.name}</span>
                    <span className="text-primary text-sm">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                    <div 
                      className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out`}
                      style={{ 
                        width: `${skill.level}%`,
                        animationDelay: `${index * 100}ms`
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      
      case "approach":
        return (
          <div className="space-y-6">
            <p className="text-lg text-white/90 leading-relaxed mb-6">
              My development philosophy centers around three core principles:
            </p>
            <div className="space-y-4">
              <div className="flex gap-4 p-4 rounded-lg bg-white/5 border border-white/10">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                  <Code2 className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-2">Clean, Maintainable Code</h4>
                  <p className="text-white/70 text-sm">
                    Writing code that's not just functional, but readable, scalable, and easy to maintain for future developers.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4 p-4 rounded-lg bg-white/5 border border-white/10">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
                  <Users className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-2">User-Centric Design</h4>
                  <p className="text-white/70 text-sm">
                    Every feature is built with the end user in mind, ensuring intuitive interfaces and seamless experiences.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4 p-4 rounded-lg bg-white/5 border border-white/10">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                  <Rocket className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-2">Performance First</h4>
                  <p className="text-white/70 text-sm">
                    Optimizing for speed, efficiency, and scalability from day one, not as an afterthought.
                  </p>
                </div>
              </div>
            </div>
          </div>
        );
      
      default:
        return null;
    }
  };

  return (
    <section id="about" className="py-20 bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-12 h-[1px] bg-gradient-to-r from-transparent to-primary"></div>
            <Badge
              variant="outline"
              className="border-primary/30 text-primary glass-effect px-6 py-2.5 text-lg animate-fade-in"
            >
              <span className="inline-flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
                About Me
              </span>
            </Badge>
            <div className="w-12 h-[1px] bg-gradient-to-l from-transparent to-primary"></div>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            Passionate <span className="text-primary bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Developer</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            Transforming complex challenges into elegant solutions through code, creativity, and collaboration
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-12 gap-12 items-start max-w-7xl mx-auto">
          {/* Left Side - Image & Stats */}
          <div className="lg:col-span-4 space-y-8">
            {/* Profile Image */}
            <div className="flex justify-center">
              <div className="relative w-80 h-80">
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/30 via-primary/10 to-accent/30 animate-gradient blur-xl" />
                <div className="absolute inset-[3px] rounded-3xl bg-slate-900/90 backdrop-blur-sm" />
                <div className="relative w-full h-full rounded-3xl overflow-hidden border border-white/10 group">
                  <img
                    src="/images/1654679566211.jpg"
                    alt="Arefin Khan - Full Stack Developer"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    loading="eager"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>
            </div>

            {/* Achievement Stats */}
            <div className="grid grid-cols-2 gap-4">
              {achievements.map((achievement, index) => (
                <Card key={index} className="bg-slate-900/50 border-white/10 hover:border-primary/30 transition-all duration-300 group">
                  <CardContent className="p-4 text-center">
                    <div className="flex justify-center mb-2 text-primary group-hover:scale-110 transition-transform">
                      {achievement.icon}
                    </div>
                    <div className="text-2xl font-bold text-white mb-1">{achievement.number}</div>
                    <div className="text-sm text-primary font-medium mb-1">{achievement.label}</div>
                    <div className="text-xs text-white/60">{achievement.description}</div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col gap-3">
              <Button 
                size="lg" 
                className="w-full bg-primary hover:bg-primary/90 text-white shadow-lg hover:shadow-primary/25 transition-all duration-300"
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <ExternalLink className="mr-2 h-4 w-4" />
                Let's Work Together
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="w-full border-white/20 hover:border-primary text-white hover:text-primary transition-colors"
              >
                <Download className="mr-2 h-4 w-4" />
                Download Resume
              </Button>
            </div>
          </div>

          {/* Right Side - Tabbed Content */}
          <div className="lg:col-span-8">
            {/* Tab Navigation */}
            <div className="flex flex-wrap gap-2 mb-8 p-1 bg-white/5 rounded-lg border border-white/10">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-4 py-3 rounded-lg transition-all duration-300 ${
                    activeTab === tab.id
                      ? 'bg-primary text-white shadow-lg'
                      : 'text-white/70 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {tab.icon}
                  <span className="font-medium">{tab.label}</span>
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <Card className="bg-slate-900/50 border-white/10 min-h-[400px]">
              <CardContent className="p-8">
                {renderTabContent()}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;