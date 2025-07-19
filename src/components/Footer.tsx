import { Badge } from "@/components/ui/badge";
import { Mail, Github, ExternalLink, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  const socialLinks = [
    {
      icon: <Mail className="h-5 w-5" />,
      label: "Email",
      href: "mailto:arefinkhan869@gmail.com"
    },
    {
      icon: <Github className="h-5 w-5" />,
      label: "GitHub",
      href: "https://github.com/TEMPLAR-007"
    },
    {
      icon: <ExternalLink className="h-5 w-5" />,
      label: "Portfolio",
      href: "https://arefins-portfolio.netlify.app"
    }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-background border-t border-border relative z-20">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand & Description */}
          <div className="space-y-4">
            <div className="text-2xl font-bold text-primary">
              Arefin Khan
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Full Stack Developer focused on AI-powered business solutions.
              Building the future of intelligent, scalable systems.
            </p>
            <Badge variant="outline" className="border-primary/30 text-primary w-fit">
              🚀 Available for new projects
            </Badge>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Quick Links</h3>
            <div className="space-y-2">
              {quickLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => scrollToSection(link.href)}
                  className="block text-muted-foreground hover:text-primary transition-colors text-left"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Contact & Social */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Connect</h3>
            <div className="space-y-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 text-muted-foreground hover:text-primary transition-colors group"
                >
                  <div className="group-hover:scale-110 transition-transform">
                    {social.icon}
                  </div>
                  <span>{social.label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <span>© {currentYear} Arefin Khan. Built with</span>
              <Heart className="h-4 w-4 text-red-500 animate-pulse" />
              <span>using React & TailwindCSS</span>
            </div>

            <div className="flex items-center space-x-4 text-sm text-muted-foreground">
              <span>🇧🇩 Based in Bangladesh</span>
              <span>•</span>
              <span>Open to remote work worldwide</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;