import { Card } from "@/components/ui/card";
import { useState, useEffect } from "react";
import { Service, fetchServices } from "@/lib/servicesConfig";

const ServicesSection = () => {
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadServices = async () => {
      try {
        const servicesData = await fetchServices();
        setServices(servicesData);
      } catch (error) {
        console.error('Failed to fetch services:', error);
      } finally {
        setLoading(false);
      }
    };

    loadServices();
  }, []);

  return (
    <section id="services" className="py-16 sm:py-20 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 sm:mb-6">
            Our{" "}
            <span className="primary-gradient bg-clip-text text-transparent">
              Services
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed px-2">
            Comprehensive software solutions designed to accelerate your business growth 
            and streamline operations across all industries.
          </p>
        </div>

        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[...Array(6)].map((_, index) => (
              <Card
                key={index}
                className="card-gradient shadow-card p-6 sm:p-8 border-0 animate-pulse"
              >
                <div className="flex flex-col h-full">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 bg-muted rounded-2xl mb-4 sm:mb-6"></div>
                  <div className="h-6 bg-muted rounded mb-3 sm:mb-4"></div>
                  <div className="space-y-2">
                    <div className="h-4 bg-muted rounded"></div>
                    <div className="h-4 bg-muted rounded w-3/4"></div>
                    <div className="h-4 bg-muted rounded w-1/2"></div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {services.map((service, index) => (
              <Card
                key={service.id}
                className="card-gradient shadow-card hover:shadow-elevation transition-smooth p-6 sm:p-8 border-0 group hover:scale-105"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex flex-col h-full">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 primary-gradient rounded-2xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-smooth text-white">
                    {service.icon}
                  </div>
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg sm:text-xl font-semibold text-foreground">
                      {service.title}
                    </h3>
                    <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
                      {service.category}
                    </span>
                  </div>
                  <p className="text-muted-foreground leading-relaxed flex-grow text-sm sm:text-base mb-4">
                    {service.description}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        )}

        {/* CTA Section */}
        <div className="mt-12 sm:mt-16 text-center">
          <div className="glass-card rounded-3xl p-6 sm:p-8 md:p-12 max-w-4xl mx-auto">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground mb-4 sm:mb-6">
              Ready to Transform Your Business?
            </h3>
            <p className="text-muted-foreground mb-6 sm:mb-8 leading-relaxed text-sm sm:text-base px-2">
              Let's discuss how our expertise can help you achieve your digital transformation goals.
            </p>
            <button
              onClick={() => {
                const element = document.getElementById("contact");
                element?.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-flex items-center justify-center h-12 sm:h-14 px-6 sm:px-10 primary-gradient text-white font-medium rounded-xl hover:shadow-glow transition-smooth hover:scale-105 min-w-[200px]"
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