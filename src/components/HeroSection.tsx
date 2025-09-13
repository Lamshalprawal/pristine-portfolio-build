import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import LetterGlitch from "./LetterGlitch";
import GlassSurface from "./GlassSurface";

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
    >
      {/* LetterGlitch Background */}
      <div className="absolute inset-0">
        <LetterGlitch
          glitchColors={['#2b4539', '#61dca3', '#61b3dc', '#ffffff', '#000000']}
          glitchSpeed={80}
          centerVignette={false}
          outerVignette={true}
          smooth={true}
          characters="ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$&*()-_+=/[]{};:<>.,0123456789"
        />
      </div>
      
      {/* Overlay */}
      <div className="absolute inset-0 hero-gradient opacity-90" />
      

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="animate-fade-in">
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-4 sm:mb-6 leading-tight">
            Transforming Ideas into{" "}
            <span className="primary-gradient bg-clip-text text-transparent">
              Digital Reality
            </span>
          </h1>
          
          <p className="text-lg sm:text-xl md:text-2xl text-white/80 mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed px-2">
            Custom software solutions for modern business challenges. 
            Rapidly growing with global presence and 12+ years of expertise.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4">
            <GlassSurface variant="capsule" className="w-full sm:w-auto">
              <Button
                variant="ghost"
                size="lg"
                onClick={() => scrollToSection("services")}
                className="group w-full min-h-[48px] bg-transparent hover:bg-transparent text-white font-semibold"
              >
                Discover Our Services
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </GlassSurface>
            
            <GlassSurface variant="capsule" className="w-full sm:w-auto">
              <Button
                variant="ghost"
                size="lg"
                onClick={() => scrollToSection("contact")}
                className="w-full min-h-[48px] bg-transparent hover:bg-transparent text-white font-semibold"
              >
                Get in Touch
              </Button>
            </GlassSurface>
          </div>

          <div className="mt-12 sm:mt-16 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 md:gap-8 max-w-4xl mx-auto px-4">
            {[
              { label: "Founded", value: "2024" },
              { label: "Global Offices", value: "4+" },
              { label: "Team Experience", value: "12+ Years" }
            ].map((stat, index) => (
              <GlassSurface
                key={stat.label}
                variant="capsule"
                className="group h-32 sm:h-36 hover:scale-105 transition-all duration-300"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="h-full flex flex-col justify-center items-center text-center p-6">
                  <div className="text-3xl sm:text-4xl font-bold text-white mb-2 group-hover:text-primary-glow transition-colors duration-300">
                    {stat.value}
                  </div>
                  <div className="text-white/90 text-sm uppercase tracking-wider font-medium">
                    {stat.label}
                  </div>
                </div>
              </GlassSurface>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;