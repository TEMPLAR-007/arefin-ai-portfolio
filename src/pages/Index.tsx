import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import WhyChooseMe from "@/components/WhyChooseMe";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import TechnicalSkills from "@/components/TechnicalSkills";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <About />
      <TechnicalSkills />
      <Services />
      <Projects />
      <WhyChooseMe />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
