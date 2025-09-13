import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Mail, MapPin, Clock, Phone } from "lucide-react";

const ContactSection = () => {
  const locations = [
    {
      city: "Kathmandu",
      country: "Nepal",
      icon: <MapPin className="w-6 h-6" />
    },
    {
      city: "Delhi", 
      country: "India",
      icon: <MapPin className="w-6 h-6" />
    },
    {
      city: "Colorado",
      country: "USA",
      icon: <MapPin className="w-6 h-6" />
    },
    {
      city: "Texas",
      country: "USA", 
      icon: <MapPin className="w-6 h-6" />
    }
  ];

  const contactMethods = [
    {
      icon: <Mail className="w-8 h-8" />,
      title: "Email Us",
      description: "Get in touch for project inquiries",
      contact: "info@praneotech.com",
      href: "mailto:info@praneotech.com"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Prompt Service",
      description: "Quick response guaranteed",
      contact: "24/7 Support",
      href: null
    },
    {
      icon: <Phone className="w-8 h-8" />,
      title: "Call Us",
      description: "Get in touch for project inquiries",
      contact: "+1 9705991750",
      href: "tel:+19705991750"
    }
  ];

  return (
    <section id="contact" className="py-16 sm:py-20 md:py-24 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 sm:mb-6">
            Get in{" "}
            <span className="primary-gradient bg-clip-text text-transparent">
              Touch
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed px-2">
            Ready to transform your business with cutting-edge software solutions? 
            Let's discuss your project and explore how we can help you succeed.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 mb-12 sm:mb-16">
          {/* Contact Methods */}
          <div className="space-y-6 sm:space-y-8">
            <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-6 sm:mb-8">
              Contact Information
            </h3>

            {contactMethods.map((method, index) => (
              <Card
                key={method.title}
                className="card-gradient shadow-card hover:shadow-elevation transition-smooth p-4 sm:p-6 border-0 group"
              >
                <div className="flex items-center space-x-3 sm:space-x-4">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 primary-gradient rounded-2xl flex items-center justify-center text-white group-hover:scale-110 transition-smooth">
                    {method.icon}
                  </div>
                  <div className="flex-1">
                    <h4 className="text-base sm:text-lg font-semibold text-foreground mb-1">
                      {method.title}
                    </h4>
                    <p className="text-muted-foreground text-xs sm:text-sm mb-2">
                      {method.description}
                    </p>
                    {method.href ? (
                      <a
                        href={method.href}
                        className="text-primary hover:text-primary-glow font-medium transition-colors text-sm sm:text-base min-h-[44px] flex items-center"
                      >
                        {method.contact}
                      </a>
                    ) : (
                      <span className="text-primary font-medium text-sm sm:text-base">
                        {method.contact}
                      </span>
                    )}
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Global Presence */}
          <div className="space-y-6 sm:space-y-8">
            <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-6 sm:mb-8">
              Global Presence
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              {locations.map((location, index) => (
                <Card
                  key={`${location.city}-${location.country}`}
                  className="card-gradient shadow-card hover:shadow-elevation transition-smooth p-4 sm:p-6 border-0 group text-center"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 primary-gradient rounded-xl flex items-center justify-center mx-auto mb-3 sm:mb-4 text-white group-hover:scale-110 transition-smooth">
                    {location.icon}
                  </div>
                  <h4 className="font-semibold text-foreground text-base sm:text-lg mb-1">
                    {location.city}
                  </h4>
                  <p className="text-muted-foreground text-xs sm:text-sm">
                    {location.country}
                  </p>
                </Card>
              ))}
            </div>

            <Card className="glass-card p-6 sm:p-8 border-0">
              <div className="text-center">
                <h4 className="text-lg sm:text-xl font-semibold text-foreground mb-3 sm:mb-4">
                  Ready to Start Your Project?
                </h4>
                <p className="text-muted-foreground mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
                  Let's discuss your requirements and create a custom solution 
                  that drives your business forward.
                </p>
                <Button
                  variant="hero"
                  size="lg"
                  onClick={() => window.open("mailto:info@praneotech.com", "_blank")}
                  className="w-full sm:w-auto min-h-[48px]"
                >
                  Start a Conversation
                  <Mail className="w-5 h-5 ml-2" />
                </Button>
              </div>
            </Card>
          </div>
        </div>

        {/* Footer */}
        <div className="border-t border-border/20 pt-8 sm:pt-12 text-center">
          <p className="text-muted-foreground text-sm sm:text-base px-4">
            © 2025 PraNeoTech. All rights reserved. Transforming ideas into digital reality.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;