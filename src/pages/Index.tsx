import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import MissionSection from "@/components/MissionSection";
import ServicesSection from "@/components/ServicesSection";
import ResultsSection from "@/components/ResultsSection";
import MethodologySection from "@/components/MethodologySection";
import CTASection from "@/components/CTASection";
import PortfolioSection from "@/components/PortfolioSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <MissionSection />
      <ServicesSection />
      <ResultsSection />
      <MethodologySection />
      <CTASection variant="secondary" />
      <PortfolioSection />
      <TestimonialsSection />
      <CTASection variant="primary" />
      <Footer />
    </div>
  );
};

export default Index;
