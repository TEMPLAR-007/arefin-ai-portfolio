import { ChevronDown } from "lucide-react";

interface ScrollIndicatorProps {
  targetSection?: string;
  text?: string;
}

const ScrollIndicator = ({ 
  targetSection = "#about", 
  text = "Scroll down to see projects" 
}: ScrollIndicatorProps) => {
  const handleScroll = () => {
    const element = document.querySelector(targetSection);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center space-y-2 animate-bounce">
      <span className="text-sm text-muted-foreground">{text}</span>
      <button
        onClick={handleScroll}
        className="p-2 rounded-full border border-border/50 bg-background/10 backdrop-blur-sm hover:bg-background/20 transition-all duration-300 group"
      >
        <ChevronDown className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
      </button>
    </div>
  );
};

export default ScrollIndicator;