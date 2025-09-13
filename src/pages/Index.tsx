import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import PartnersLogoLoop from "@/components/PartnersLogoLoop";
import AboutSection from "@/components/AboutSection";
import { StatsSection } from "@/components/StatsSection";
import ServicesSection from "@/components/ServicesSection";
import ClientsSection from "@/components/ClientsSection";
import PartnersSection from "@/components/PartnersSection";
import ContactSection from "@/components/ContactSection";
import ScrollProgress from "@/components/ScrollProgress";
import SmoothScroll from "@/components/SmoothScroll";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <SmoothScroll />
      <ScrollProgress />
      <Navigation />
      <HeroSection />
      <PartnersLogoLoop />
     
      <StatsSection />
      <ServicesSection />
      <ClientsSection />
      <PartnersSection />
      <ContactSection />
    </div>
  );
};

export default Index;
