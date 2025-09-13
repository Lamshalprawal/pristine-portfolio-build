import { Card } from "@/components/ui/card";
import { useState, useEffect } from "react";
import { Service, fetchServices } from "@/lib/servicesConfig";
import { useIntersectionObserver } from "@/hooks/use-parallax";

const ServicesSection = () => {
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);
  const [isVisible, setIsVisible] = useState(false);

  const sectionRef = useIntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      });
    },
    { threshold: 0.1 }
  );

  useEffect(() => {
    const loadServices = async () => {
      try {
        const servicesData = await fetchServices();
        setServices(servicesData);
      } catch (error) {
        console.error('Failed to fetch services:', error);
        // Fallback to empty array if fetch fails
        setServices([]);
      } finally {
        setLoading(false);
      }
    };

    loadServices();
  }, []);

  return (
    <section ref={sectionRef} id="services" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className={`text-center mb-8 sm:mb-12 md:mb-16 transition-all duration-1000 ${isVisible ? 'fade-in-up' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-3 sm:mb-4 md:mb-6">
            Our{" "}
            <span className="primary-gradient bg-clip-text text-transparent">
              Services
            </span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed px-1 sm:px-2">
            Comprehensive software solutions designed to accelerate your business growth 
            and streamline operations across all industries.
          </p>
        </div>

        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {[...Array(6)].map((_, index) => (
              <Card
                key={index}
                className="card-gradient shadow-card p-4 sm:p-6 lg:p-8 border-0 animate-pulse"
              >
                <div className="flex flex-col h-full">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-muted rounded-xl sm:rounded-2xl mb-3 sm:mb-4 lg:mb-6"></div>
                  <div className="h-5 sm:h-6 bg-muted rounded mb-2 sm:mb-3 lg:mb-4"></div>
                  <div className="space-y-2">
                    <div className="h-3 sm:h-4 bg-muted rounded"></div>
                    <div className="h-3 sm:h-4 bg-muted rounded w-3/4"></div>
                    <div className="h-3 sm:h-4 bg-muted rounded w-1/2"></div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        ) : services.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {services.map((service, index) => (
              <Card
                key={service.id}
                className={`card-gradient shadow-card hover:shadow-elevation transition-all duration-700 p-4 sm:p-6 lg:p-8 border-0 group hover:scale-105 smooth-hover ${
                  isVisible ? 'fade-in-up' : 'opacity-0 translate-y-8'
                }`}
                style={{ 
                  animationDelay: `${index * 0.1}s`,
                  transitionDelay: `${index * 0.1}s`
                }}
              >
                <div className="flex flex-col h-full">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 primary-gradient rounded-xl sm:rounded-2xl flex items-center justify-center mb-3 sm:mb-4 lg:mb-6 group-hover:scale-110 transition-smooth text-white">
                    {service.icon}
                  </div>
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-base sm:text-lg lg:text-xl font-semibold text-foreground">
                      {service.title}
                    </h3>
                    <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
                      {service.category}
                    </span>
                  </div>
                  <p className="text-muted-foreground leading-relaxed flex-grow text-xs sm:text-sm lg:text-base mb-3 sm:mb-4">
                    {service.description}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="text-muted-foreground">
              <p className="text-lg mb-4">No services available at the moment.</p>
              <p className="text-sm">Please check back later or contact us for more information.</p>
            </div>
          </div>
        )}

        {/* CTA Section */}
        <div className="mt-8 sm:mt-12 md:mt-16 text-center">
          <div className="glass-card rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 lg:p-12 max-w-4xl mx-auto">
            <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-foreground mb-3 sm:mb-4 md:mb-6">
              Ready to Transform Your Business?
            </h3>
            <p className="text-muted-foreground mb-4 sm:mb-6 md:mb-8 leading-relaxed text-xs sm:text-sm md:text-base px-1 sm:px-2">
              Let's discuss how our expertise can help you achieve your digital transformation goals.
            </p>
            <button
              onClick={() => {
                const element = document.getElementById("contact");
                element?.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-flex items-center justify-center h-11 sm:h-12 md:h-14 px-4 sm:px-6 md:px-10 primary-gradient text-white font-medium rounded-lg sm:rounded-xl hover:shadow-glow transition-smooth hover:scale-105 min-w-[180px] sm:min-w-[200px] touch-manipulation"
            >
              Start Your Project
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;