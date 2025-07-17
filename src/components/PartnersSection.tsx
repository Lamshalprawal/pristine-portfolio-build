import { Card } from "@/components/ui/card";
import { Handshake, Globe, Zap } from "lucide-react";

const PartnersSection = () => {
  const partners = [
    {
      name: "Makalu Tech",
      location: "Nepal",
      description: "Leading technology solutions provider specializing in enterprise software development and digital transformation services.",
      icon: <Zap className="w-8 h-8" />,
      expertise: ["Enterprise Solutions", "Cloud Services", "Digital Transformation"]
    },
    {
      name: "Inatale",
      location: "Nepal", 
      description: "Innovative software company focused on cutting-edge web applications and mobile development solutions.",
      icon: <Globe className="w-8 h-8" />,
      expertise: ["Web Development", "Mobile Apps", "UI/UX Design"]
    }
  ];

  return (
    <section id="partners" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our{" "}
            <span className="primary-gradient bg-clip-text text-transparent">
              Partners
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Strategic partnerships that enhance our capabilities and expand our global reach. 
            Together, we deliver exceptional value to our clients worldwide.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {partners.map((partner, index) => (
            <Card
              key={partner.name}
              className="card-gradient shadow-card hover:shadow-elevation transition-smooth p-8 border-0 group hover:scale-105"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex flex-col h-full">
                <div className="flex items-start justify-between mb-6">
                  <div className="w-16 h-16 primary-gradient rounded-2xl flex items-center justify-center group-hover:scale-110 transition-smooth text-white">
                    {partner.icon}
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-primary font-medium bg-primary/10 px-3 py-1 rounded-full">
                      {partner.location}
                    </div>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-foreground mb-4">
                  {partner.name}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed mb-6 flex-grow">
                  {partner.description}
                </p>

                <div className="space-y-3">
                  <h4 className="font-semibold text-foreground">Expertise:</h4>
                  <div className="flex flex-wrap gap-2">
                    {partner.expertise.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="text-xs bg-secondary text-secondary-foreground px-3 py-1 rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Partnership Benefits */}
        <div className="glass-card rounded-3xl p-8 md:p-12">
          <div className="text-center mb-12">
            <div className="w-20 h-20 primary-gradient rounded-full flex items-center justify-center mx-auto mb-6">
              <Handshake className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Partnership Benefits
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our strategic partnerships enable us to deliver comprehensive solutions with enhanced capabilities and regional expertise.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Extended Expertise",
                description: "Access to specialized skills and technologies through our partner network."
              },
              {
                title: "Global Reach",
                description: "Enhanced service delivery across multiple regions and time zones."
              },
              {
                title: "Faster Delivery",
                description: "Accelerated project timelines through collaborative development efforts."
              }
            ].map((benefit, index) => (
              <div key={benefit.title} className="text-center">
                <h4 className="text-lg font-semibold text-foreground mb-3">
                  {benefit.title}
                </h4>
                <p className="text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;