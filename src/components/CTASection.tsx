import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle } from "lucide-react";

interface CTASectionProps {
  variant?: 'primary' | 'secondary';
}

const CTASection = ({ variant = 'primary' }: CTASectionProps) => {
  const whatsappLink = "https://wa.me/5511999999999?text=Olá!%20Quero%20uma%20análise%20gratuita";

  if (variant === 'secondary') {
    return (
      <section className="py-20 md:py-32 bg-dark relative overflow-hidden">
        {/* Gradient Glow Effect */}
        <div className="absolute inset-0 bg-gradient-to-t from-blue/20 via-transparent to-transparent" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold text-dark-foreground mb-6">
              Your company deserves to be among the{" "}
              <span className="text-gradient-blue">market leaders</span>
            </h2>
            <p className="text-xl text-dark-foreground/70 mb-10">
              Talk to ELEVY now and discover how we can elevate your results
            </p>
            <Button 
              variant="cta" 
              size="xl"
              onClick={() => window.open(whatsappLink, '_blank')}
              className="group"
            >
              <MessageCircle className="mr-2" />
              I want a free analysis now
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 md:py-32 bg-dark relative overflow-hidden">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-t from-blue/30 via-blue/10 to-transparent animate-pulse" />
        <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-blue/20 to-transparent" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center animate-slide-up">
          <h2 className="text-5xl md:text-6xl font-bold text-dark-foreground mb-6">
            Your next level <span className="text-gradient-blue">starts now</span>
          </h2>
          <p className="text-2xl text-dark-foreground/80 mb-12">
            Click below and talk directly with ELEVY
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              variant="cta" 
              size="xl"
              onClick={() => window.open(whatsappLink, '_blank')}
              className="group"
            >
              <MessageCircle className="mr-2" />
              WhatsApp
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button 
              variant="ctaOutline" 
              size="xl"
              onClick={() => window.open("https://calendly.com/elevy", '_blank')}
            >
              Schedule a Meeting
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
