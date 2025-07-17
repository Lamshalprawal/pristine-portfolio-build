import { Card } from "@/components/ui/card";
import { 
  FileText, 
  Calculator, 
  Heart, 
  Code, 
  Package, 
  Smartphone, 
  Network, 
  Lightbulb,
  Palette
} from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: <FileText className="w-8 h-8" />,
      title: "Report Generation",
      description: "Custom tailored report generation solutions for businesses of all sizes with real-time analytics and insights."
    },
    {
      icon: <Calculator className="w-8 h-8" />,
      title: "Accounting Services",
      description: "Digital solutions for accounting and financial management with automated workflows and compliance."
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Medical Services",
      description: "Comprehensive software solutions for healthcare providers and medical practices with HIPAA compliance."
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "Custom Software & Websites",
      description: "Bespoke software development and web applications tailored to meet your specific business needs."
    },
    {
      icon: <Package className="w-8 h-8" />,
      title: "Inventory Management",
      description: "Streamline your inventory processes with intelligent tracking, automated reordering, and analytics."
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Flutter Development",
      description: "Cross-platform mobile applications using Flutter framework for iOS and Android platforms."
    },
    {
      icon: <Network className="w-8 h-8" />,
      title: "Software Ecosystems",
      description: "Integrated software ecosystems for seamless business operations and digital transformation."
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Software Consulting",
      description: "Expert advice on software strategies, architecture decisions, and implementation best practices."
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "UI/UX Design",
      description: "Expert design services using Figma and modern tools to create intuitive user experiences."
    }
  ];

  return (
    <section id="services" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our{" "}
            <span className="primary-gradient bg-clip-text text-transparent">
              Services
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Comprehensive software solutions designed to accelerate your business growth 
            and streamline operations across all industries.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={service.title}
              className="card-gradient shadow-card hover:shadow-elevation transition-smooth p-8 border-0 group hover:scale-105"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex flex-col h-full">
                <div className="w-16 h-16 primary-gradient rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-smooth text-white">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed flex-grow">
                  {service.description}
                </p>
              </div>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="glass-card rounded-3xl p-8 md:p-12 max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
              Ready to Transform Your Business?
            </h3>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Let's discuss how our expertise can help you achieve your digital transformation goals.
            </p>
            <button
              onClick={() => {
                const element = document.getElementById("contact");
                element?.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-flex items-center justify-center h-14 px-10 primary-gradient text-white font-medium rounded-xl hover:shadow-glow transition-smooth hover:scale-105"
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