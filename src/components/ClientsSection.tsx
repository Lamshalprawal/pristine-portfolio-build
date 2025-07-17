import { Card } from "@/components/ui/card";
import { Quote, Star } from "lucide-react";

const ClientsSection = () => {
  const clients = [
    {
      name: "Omniuse App",
      project: "Flutter Mobile Application Optimization",
      testimonial: "Exceptional professionalism and responsive solutions. The team delivered a flawless mobile experience that exceeded our expectations.",
      rating: 5,
      position: "CEO"
    },
    {
      name: "Elite Care Services RC",
      project: "Healthcare Management System",
      testimonial: "PraNeoTech transformed our healthcare operations with a comprehensive and user-friendly management system.",
      rating: 5,
      position: "Director",
      website: "https://elitecareservicesrc.com/"
    },
    {
      name: "MD Poblano Grill",
      project: "Restaurant Management & POS System",
      testimonial: "The custom POS and inventory management system streamlined our restaurant operations significantly.",
      rating: 5,
      position: "Owner"
    },
    {
      name: "SB Traders",
      project: "POS & Inventory Management",
      testimonial: "Transformed our business analytics with real-time insights and comprehensive inventory tracking.",
      rating: 5,
      position: "Owner"
    },
    {
      name: "LAM",
      project: "Non-Profit Member Management",
      testimonial: "Comprehensive and forward-thinking software architecture that perfectly serves our non-profit needs.",
      rating: 5,
      position: "Director"
    },
    {
      name: "Dishna Technology Pvt. Ltd.",
      project: "Accounting App + Custom Reporting",
      testimonial: "Resourceful and insightful business analysis team that delivered exactly what we needed.",
      rating: 5,
      position: "CFO"
    }
  ];

  return (
    <section id="clients" className="py-24 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our{" "}
            <span className="primary-gradient bg-clip-text text-transparent">
              Clients
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Trusted by leading organizations across diverse industries. 
            Here's what our clients say about working with us.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {clients.map((client, index) => (
            <Card
              key={client.name}
              className="card-gradient shadow-card hover:shadow-elevation transition-smooth p-8 border-0 group relative overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Quote icon */}
              <div className="absolute top-6 right-6 opacity-10">
                <Quote className="w-12 h-12 text-primary" />
              </div>

              <div className="relative z-10">
                {/* Rating */}
                <div className="flex items-center mb-4">
                  {[...Array(client.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>

                {/* Testimonial */}
                <p className="text-foreground mb-6 leading-relaxed italic">
                  "{client.testimonial}"
                </p>

                {/* Client info */}
                <div className="border-t border-border/20 pt-6">
                  <h4 className="font-semibold text-foreground text-lg">
                    {client.name}
                  </h4>
                  <p className="text-primary font-medium mb-2">
                    {client.project}
                  </p>
                  <p className="text-muted-foreground text-sm">
                    — {client.position}
                  </p>
                  {client.website && (
                    <a
                      href={client.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:text-primary-glow text-sm mt-2 inline-block transition-colors"
                    >
                      Visit Website →
                    </a>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-16">
          <div className="glass-card rounded-3xl p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
              {[
                { number: "100%", label: "Client Satisfaction" },
                { number: "50+", label: "Projects Completed" },
                { number: "12+", label: "Industries Served" },
                { number: "24/7", label: "Support Available" }
              ].map((stat, index) => (
                <div key={stat.label}>
                  <div className="text-3xl md:text-4xl font-bold primary-gradient bg-clip-text text-transparent mb-2">
                    {stat.number}
                  </div>
                  <div className="text-sm text-muted-foreground uppercase tracking-wide">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;