import { LogoLoop } from './LogoLoop';

const PartnersLogoLoop = () => {
  // Check for reduced motion preference
  const prefersReducedMotion = typeof window !== 'undefined' && 
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  
  const partnerLogos = [
    {
      node: (
        <div className="flex items-center justify-center h-12 w-32 glass-card rounded-xl px-4 border border-primary/20 shadow-card hover:shadow-elevation transition-smooth group">
          <span className="text-foreground font-bold text-sm primary-gradient bg-clip-text text-transparent group-hover:scale-105 transition-transform">Makalu Tech</span>
        </div>
      ),
      title: "Makalu Tech - Technology Partner"
    },
    {
      node: (
        <div className="flex items-center justify-center h-12 w-32 glass-card rounded-xl px-4 border border-primary/20 shadow-card hover:shadow-elevation transition-smooth group">
          <span className="text-foreground font-bold text-sm primary-gradient bg-clip-text text-transparent group-hover:scale-105 transition-transform">Inatale</span>
        </div>
      ),
      title: "Inatale - Development Partner"
    },
    {
      node: (
        <div className="flex items-center justify-center h-12 w-32 glass-card rounded-xl px-4 border border-primary/20 shadow-card hover:shadow-elevation transition-smooth group">
          <span className="text-foreground font-bold text-sm primary-gradient bg-clip-text text-transparent group-hover:scale-105 transition-transform">Elite Care</span>
        </div>
      ),
      title: "Elite Care Services - Healthcare Client"
    },
    {
      node: (
        <div className="flex items-center justify-center h-12 w-32 glass-card rounded-xl px-4 border border-primary/20 shadow-card hover:shadow-elevation transition-smooth group">
          <span className="text-foreground font-bold text-sm primary-gradient bg-clip-text text-transparent group-hover:scale-105 transition-transform">MD Poblano</span>
        </div>
      ),
      title: "MD Poblano Grill - Restaurant Client"
    },
    {
      node: (
        <div className="flex items-center justify-center h-12 w-32 glass-card rounded-xl px-4 border border-primary/20 shadow-card hover:shadow-elevation transition-smooth group">
          <span className="text-foreground font-bold text-sm primary-gradient bg-clip-text text-transparent group-hover:scale-105 transition-transform">SB Traders</span>
        </div>
      ),
      title: "SB Traders - Retail Client"
    },
    {
      node: (
        <div className="flex items-center justify-center h-12 w-32 glass-card rounded-xl px-4 border border-primary/20 shadow-card hover:shadow-elevation transition-smooth group">
          <span className="text-foreground font-bold text-sm primary-gradient bg-clip-text text-transparent group-hover:scale-105 transition-transform">LAM</span>
        </div>
      ),
      title: "LAM - Non-Profit Client"
    },
    {
      node: (
        <div className="flex items-center justify-center h-12 w-32 glass-card rounded-xl px-4 border border-primary/20 shadow-card hover:shadow-elevation transition-smooth group">
          <span className="text-foreground font-bold text-sm primary-gradient bg-clip-text text-transparent group-hover:scale-105 transition-transform">Dishna Tech</span>
        </div>
      ),
      title: "Dishna Technology - Accounting Client"
    },
    {
      node: (
        <div className="flex items-center justify-center h-12 w-32 glass-card rounded-xl px-4 border border-primary/20 shadow-card hover:shadow-elevation transition-smooth group">
          <span className="text-foreground font-bold text-sm primary-gradient bg-clip-text text-transparent group-hover:scale-105 transition-transform">Omniuse</span>
        </div>
      ),
      title: "Omniuse App - Mobile Client"
    }
  ];

  return (
    <section className="py-8 sm:py-12 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-6 sm:mb-8">
          <p className="text-foreground text-sm sm:text-base font-semibold">
            Trusted by leading organizations worldwide
          </p>
        </div>
        
        <div className="w-full overflow-hidden">
          <LogoLoop
            logos={partnerLogos}
            speed={prefersReducedMotion ? 0 : 80}
            direction="left"
            logoHeight={48}
            gap={64}
            pauseOnHover={!prefersReducedMotion}
            fadeOut={true}
            fadeOutColor="hsl(var(--background))"
            scaleOnHover={!prefersReducedMotion}
            ariaLabel="Partner and client logos showcasing our trusted relationships"
            className="w-full"
            width="100%"
          />
        </div>
      </div>
    </section>
  );
};

export default PartnersLogoLoop;
