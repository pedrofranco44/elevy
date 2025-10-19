import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  const whatsappLink = "https://wa.me/5527996491601?text=Olá!%20Quero%20crescer%20com%20a%20ELEVY%20🚀";

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-dark">
      {/* Imagem de Fundo com Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-40"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-dark via-dark/95 to-dark" />
      
      {/* Efeito de Partículas Animadas */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-blue rounded-full opacity-30 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              bottom: `-${Math.random() * 20}px`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${8 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      {/* Conteúdo */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        {/* Logo */}
        <div className="mb-8 animate-fade-in">
          <h1 className="text-6xl md:text-7xl font-bold text-gradient-blue mb-2">
            ELEVY
          </h1>
          <p className="text-blue text-sm tracking-[0.3em] uppercase">
            Marketing Digital
          </p>
        </div>

        {/* Headline Principal */}
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-dark-foreground mb-6 leading-tight animate-slide-up max-w-5xl mx-auto">
          Elevamos empresas a outro nível de{" "}
          <span className="text-gradient-blue">visibilidade</span>,{" "}
          <span className="text-gradient-blue">resultado</span> e{" "}
          <span className="text-gradient-blue">previsibilidade</span>
        </h2>

        {/* Subheadline */}
        <p className="text-xl md:text-2xl text-dark-foreground/80 mb-12 max-w-3xl mx-auto animate-slide-up">
          Gestão de tráfego, posicionamento digital e presença online para negócios físicos e digitais.
        </p>

        {/* Botão CTA */}
        <div className="animate-slide-up">
          <Button 
            variant="cta" 
            size="xl" 
            className="group"
            onClick={() => window.open(whatsappLink, '_blank')}
          >
            Quero crescer com a ELEVY 🚀
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>

        {/* Indicador de Scroll */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-blue rounded-full p-1">
            <div className="w-1 h-3 bg-blue rounded-full mx-auto animate-pulse" />
          </div>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0) translateX(0);
            opacity: 0;
          }
          10% {
            opacity: 0.3;
          }
          90% {
            opacity: 0.3;
          }
          100% {
            transform: translateY(-100vh) translateX(${Math.random() * 100 - 50}px);
            opacity: 0;
          }
        }
        .animate-float {
          animation: float linear infinite;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
