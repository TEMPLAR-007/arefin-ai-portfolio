import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Code2, 
  Brain, 
  Users, 
  Award, 
  MapPin,
  Calendar,
  Download,
  ExternalLink,
  Mail
} from "lucide-react";

const About = () => {
  const stats = [
    { icon: <Code2 className="h-5 w-5" />, number: "50+", label: "Projects" },
    { icon: <Users className="h-5 w-5" />, number: "25+", label: "Clients" },
    { icon: <Award className="h-5 w-5" />, number: "5+", label: "Years" },
    { icon: <Brain className="h-5 w-5" />, number: "15+", label: "AI Apps" }
  ];



  const info = [
    { icon: <MapPin className="h-4 w-4" />, label: "Bangladesh" },
    { icon: <Calendar className="h-4 w-4" />, label: "5+ Years Experience" },
    { icon: <Mail className="h-4 w-4" />, label: "Available for Projects" }
  ];

  return (
    <section id="about" className="py-16 bg-background">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <Badge variant="outline" className="border-primary/30 text-primary mb-4">
            About Me
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Full Stack <span className="text-primary">Developer</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Building modern web applications with clean code and user-focused design
          </p>
        </div>

        {/* Main Content */}
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            
            {/* Profile Card */}
            <div className="lg:col-span-1">
              <Card className="bg-card border-border">
                <CardContent className="p-6">
                  {/* Profile Image */}
                  <div className="relative w-48 h-48 mx-auto mb-6">
                    <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/30 via-primary/10 to-accent/30 blur-xl" />
                    <div className="absolute inset-[2px] rounded-3xl bg-card backdrop-blur-sm" />
                    <div className="relative w-full h-full rounded-3xl overflow-hidden border border-border group">
                      <img
                        src="/images/1654679566211.jpg"
                        alt="Arefin Khan - Full Stack Developer"
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        loading="eager"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      
                      {/* Status Indicator */}
                      <div className="absolute top-3 right-3 flex items-center gap-2 bg-green-500/20 backdrop-blur-sm rounded-full px-2 py-1 border border-green-500/30">
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                        <span className="text-xs text-green-300 font-medium">Available</span>
                      </div>
                      
                      {/* Skill Tags */}
                      <div className="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <div className="flex flex-wrap gap-1">
                          <Badge className="text-xs bg-primary/20 text-primary border-primary/30">React</Badge>
                          <Badge className="text-xs bg-accent/20 text-accent border-accent/30">AI</Badge>
                          <Badge className="text-xs bg-blue-500/20 text-blue-400 border-blue-500/30">Node.js</Badge>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Name & Title */}
                  <div className="text-center mb-6">
                    <h3 className="text-xl font-semibold text-foreground mb-1">Arefin Khan</h3>
                    <p className="text-primary text-sm font-medium">Full Stack Developer</p>
                  </div>

                  {/* Info */}
                  <div className="space-y-3 mb-6">
                    {info.map((item, index) => (
                      <div key={index} className="flex items-center gap-3 text-sm text-muted-foreground">
                        <div className="text-primary">{item.icon}</div>
                        <span>{item.label}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Buttons */}
                  <div className="space-y-2">
                    <Button 
                      className="w-full bg-primary hover:bg-primary/90"
                      onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Get In Touch
                    </Button>
                    <Button variant="outline" className="w-full">
                      <Download className="mr-2 h-4 w-4" />
                      Resume
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Content Area */}
            <div className="lg:col-span-2 space-y-6">
              
              {/* About Text */}
              <Card className="bg-card border-border">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-4">About Me</h3>
                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      Passionate full stack developer with 5+ years of experience building 
                      scalable web applications. I specialize in React, Node.js, and AI integration, 
                      helping businesses transform their ideas into powerful digital solutions.
                    </p>
                    <p>
                      My approach focuses on clean, maintainable code and user-centric design. 
                      I've successfully delivered 50+ projects across various industries, 
                      from startups to established enterprises.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {stats.map((stat, index) => (
                  <Card key={index} className="bg-card border-border">
                    <CardContent className="p-4 text-center">
                      <div className="flex justify-center mb-2 text-primary">
                        {stat.icon}
                      </div>
                      <div className="text-2xl font-bold text-foreground mb-1">
                        {stat.number}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {stat.label}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>



              {/* Approach */}
              <Card className="bg-card border-border">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-4">My Approach</h3>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="text-center p-4 rounded-lg bg-muted/50">
                      <Code2 className="h-8 w-8 text-primary mx-auto mb-2" />
                      <h4 className="font-medium text-sm mb-1">Clean Code</h4>
                      <p className="text-xs text-muted-foreground">
                        Maintainable and scalable solutions
                      </p>
                    </div>
                    <div className="text-center p-4 rounded-lg bg-muted/50">
                      <Users className="h-8 w-8 text-primary mx-auto mb-2" />
                      <h4 className="font-medium text-sm mb-1">User Focus</h4>
                      <p className="text-xs text-muted-foreground">
                        Intuitive and accessible interfaces
                      </p>
                    </div>
                    <div className="text-center p-4 rounded-lg bg-muted/50">
                      <Brain className="h-8 w-8 text-primary mx-auto mb-2" />
                      <h4 className="font-medium text-sm mb-1">Innovation</h4>
                      <p className="text-xs text-muted-foreground">
                        Modern tech and AI integration
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;