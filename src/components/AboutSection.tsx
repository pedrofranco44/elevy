import { User } from "lucide-react";
// 1. Importe a imagem do fundador aqui
import profilePicture from "@/assets/cristiano.png"; 

const AboutSection = () => {
  return (
    <section className="py-20 md:py-32 bg-light">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Coluna da Esquerda - Foto */}
          <div className="animate-slide-in-left">
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-xl">
              {/* 2. Substitua o ícone <User /> por esta tag <img> */}
              <img 
                src={profilePicture} 
                alt="Foto de Cristiano Hassem, fundador da ELEVY"
                className="absolute inset-0 w-full h-full object-cover" 
              />
              
              {/* Este overlay com o nome agora ficará SOBRE a imagem */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-dark/80 to-transparent p-6">
                <p className="text-dark-foreground font-semibold text-lg">Cristiano Hassem</p>
                <p className="text-dark-foreground/80 text-sm">Fundador & CEO</p>
              </div>
            </div>
          </div>

          {/* Coluna da Direita - Texto */}
          <div className="animate-slide-in-right">
            <h2 className="text-4xl md:text-5xl font-bold text-light-foreground mb-6">
              Sobre a <span className="text-gradient-blue">ELEVY</span>
            </h2>
            <div className="space-y-4 text-lg text-light-foreground/80 leading-relaxed">
              <p>
                A ELEVY nasceu há seis anos da visão de{" "}
                <span className="font-semibold text-light-foreground">Cristiano Hassem</span>,
                um profissional com mais de 10 anos de experiência em gestão de farmácias e 18 anos em gestão de pessoas.
              </p>
              <p>
                Sua jornada o levou a compreender que o marketing digital é mais que anúncios —
                é sobre <span className="font-semibold text-blue">entender pessoas</span> e{" "}
                <span className="font-semibold text-blue">transformar resultados</span>.
              </p>
              <p>
                Hoje, a ELEVY combina expertise estratégica com tecnologia de ponta para entregar
                resultados mensuráveis que elevam negócios a novos patamares.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;