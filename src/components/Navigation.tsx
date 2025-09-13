import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import GlassSurface from "./GlassSurface";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 transition-smooth">
      <div className="flex justify-center w-full">
        <GlassSurface
          variant="capsule"
          className={`max-w-4xl w-full ${
            isScrolled
              ? "shadow-elevation"
              : ""
          }`}
        >
          <div className="flex items-center justify-between h-14 sm:h-16 w-full px-4 sm:px-6 lg:px-8">
            {/* Logo */}
            <div className="flex-shrink-0">
              <button
                onClick={() => scrollToSection("hero")}
                className="flex items-center gap-2 text-lg sm:text-xl md:text-2xl font-bold primary-gradient bg-clip-text text-transparent"
              >
                <img 
                  src="/PraneoLogo.svg" 
                  alt="PraneoTech Logo" 
                  className="w-8 h-8 sm:w-10 sm:h-10"
                />
                PraNeoTech
              </button>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-6 lg:ml-10 flex items-baseline space-x-6 lg:space-x-8">
                {["About", "Services", "Clients", "Partners", "Contact"].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className="text-sm lg:text-base text-foreground hover:text-primary transition-smooth font-medium"
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="min-h-[44px] min-w-[44px] touch-manipulation"
              >
                {isMobileMenuOpen ? (
                  <X className="h-5 w-5 sm:h-6 sm:w-6" />
                ) : (
                  <Menu className="h-5 w-5 sm:h-6 sm:w-6" />
                )}
              </Button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMobileMenuOpen && (
            <div className="md:hidden absolute top-full left-0 right-0 mt-2">
            <div className="px-2 pt-2 pb-3 space-y-1 glass-card rounded-xl mx-1 sm:mx-2 bg-background/95 backdrop-blur-xl border border-border/20">
              {["About", "Services", "Clients", "Partners", "Contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="block px-4 py-3 text-foreground hover:text-primary transition-smooth w-full text-left min-h-[44px] rounded-lg hover:bg-accent/50 touch-manipulation"
                >
                  {item}
                </button>
              ))}
            </div>
            </div>
          )}
        </GlassSurface>
      </div>
    </nav>
  );
};

export default Navigation;