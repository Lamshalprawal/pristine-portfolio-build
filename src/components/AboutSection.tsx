import { Card } from "@/components/ui/card";
import { Sparkles, Users, Globe, Award } from "lucide-react";

const AboutSection = () => {
  const features = [
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "Founded in 2024",
      description: "Rapidly growing software company with global presence and innovative solutions."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Expert Team",
      description: "12+ years of experience in sophisticated software solutions and consulting."
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Global Presence",
      description: "Offices in Kathmandu, Delhi, Colorado, and Texas serving clients worldwide."
    }
  ];

  return (
    <section id="about" className="py-16 sm:py-20 md:py-24 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 sm:mb-6">
            About{" "}
            <span className="primary-gradient bg-clip-text text-transparent">
              PraNeoTech
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed px-2">
            We transform innovative ideas into powerful digital solutions that drive business growth 
            and operational excellence across diverse industries.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {features.map((feature, index) => (
            <Card
              key={feature.title}
              className="card-gradient shadow-card hover:shadow-elevation transition-smooth p-6 sm:p-8 border-0 group"
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-14 h-14 sm:w-16 sm:h-16 primary-gradient rounded-2xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-smooth text-white">
                  {feature.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-3 sm:mb-4">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                  {feature.description}
                </p>
              </div>
            </Card>
          ))}
        </div>

        {/* Achievement Stats */}
        <div className="glass-card rounded-3xl p-6 sm:p-8 md:p-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
            {[
              { number: "50+", label: "Projects Delivered" },
              { number: "20+", label: "Happy Clients" },
              { number: "4", label: "Global Offices" },
              { number: "12+", label: "Years Experience" }
            ].map((stat, index) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold primary-gradient bg-clip-text text-transparent mb-1 sm:mb-2">
                  {stat.number}
                </div>
                <div className="text-xs sm:text-sm text-muted-foreground uppercase tracking-wide">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;