import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle, Calendar } from "lucide-react"; // Adicionei o ícone Calendar para o botão de agendamento

interface CTASectionProps {
  variant?: 'primary' | 'secondary';
}

const CTASection = ({ variant = 'primary' }: CTASectionProps) => {
  const whatsappLink = "https://wa.me/5527996491601?text=Olá!%20Quero%20uma%20análise%20gratuita";

  if (variant === 'secondary') {
    return (
      <section className="py-20 md:py-32 bg-dark relative overflow-hidden">
        {/* Efeito de brilho em degradê */}
        <div className="absolute inset-0 bg-gradient-to-t from-blue/20 via-transparent to-transparent" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold text-dark-foreground mb-6">
              Sua empresa merece estar entre as{" "}
              <span className="text-gradient-blue">grandes do mercado</span>
            </h2>
            <p className="text-xl text-dark-foreground/70 mb-10">
              Fale com a ELEVY agora e descubra como podemos elevar seus resultados
            </p>
            <Button 
              variant="cta" 
              size="xl"
              onClick={() => window.open(whatsappLink, '_blank')}
              className="group"
            >
              <MessageCircle className="mr-2" />
              Quero uma análise gratuita agora
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </section>
    );
  }

  // Variante Principal (Final)
  return (
    <section className="py-20 md:py-32 bg-dark relative overflow-hidden">
      {/* Fundo com degradê animado */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-t from-blue/30 via-blue/10 to-transparent animate-pulse" />
        <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-blue/20 to-transparent" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center animate-slide-up">
          <h2 className="text-5xl md:text-6xl font-bold text-dark-foreground mb-6">
            O seu próximo nível <span className="text-gradient-blue">começa agora</span>
          </h2>
          <p className="text-2xl text-dark-foreground/80 mb-12">
            Clique abaixo e fale diretamente com a ELEVY
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
              <Calendar className="mr-2 h-5 w-5" /> {/* Ícone adicionado para consistência */}
              Agendar Reunião
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
