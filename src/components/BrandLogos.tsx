import { Badge } from "@/components/ui/badge";

const BrandLogos = () => {
  const brands = [
    { name: "Microsoft", logo: "🚀" },
    { name: "Google", logo: "🔍" },
    { name: "Meta", logo: "📘" },
    { name: "Netflix", logo: "🎬" },
    { name: "Spotify", logo: "🎵" },
    { name: "Uber", logo: "🚗" },
    { name: "Airbnb", logo: "🏠" },
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4 bg-background/50 border-primary/30 text-primary">
            Trusted by Industry Leaders
          </Badge>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Building solutions for companies worldwide
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Collaborating with startups to Fortune 500 companies to deliver exceptional digital experiences
          </p>
        </div>

        {/* Brand logos grid */}
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-60 hover:opacity-100 transition-opacity duration-500">
          {brands.map((brand, index) => (
            <div
              key={brand.name}
              className="group flex flex-col items-center space-y-2 p-4 rounded-lg transition-all duration-300 hover:bg-background/50 hover:scale-110"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="text-3xl mb-2 group-hover:scale-125 transition-transform duration-300">
                {brand.logo}
              </div>
              <span className="text-sm text-muted-foreground font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {brand.name}
              </span>
            </div>
          ))}
        </div>

        {/* Stats section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-16 border-t border-border/50">
          {[
            { value: "50+", label: "Projects Completed" },
            { value: "25+", label: "Happy Clients" },
            { value: "3+", label: "Years Experience" },
            { value: "99%", label: "Client Satisfaction" },
          ].map((stat, index) => (
            <div key={stat.label} className="text-center group">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform duration-300">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandLogos;