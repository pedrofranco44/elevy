import { Target, BarChart3, Heart } from "lucide-react";

const MissionSection = () => {
  const values = [
    {
      icon: Target,
      title: "Estratégia",
      description: "Planejamos cada ação com propósito e dados.",
    },
    {
      icon: BarChart3,
      title: "Transparência",
      description: "Relatórios e acompanhamento contínuo.",
    },
    {
      icon: Heart,
      title: "Humanização",
      description: "Acreditamos que quem vende é gente, não robô.",
    },
  ];

  return (
    <section className="py-20 md:py-32 bg-dark relative overflow-hidden">
      {/* Efeito de Brilho Sutil */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue/5 to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-dark-foreground mb-4">
            Nossa <span className="text-gradient-blue">Missão</span> e{" "}
            <span className="text-gradient-blue">Valores</span>
          </h2>
          <p className="text-xl text-dark-foreground/70 max-w-2xl mx-auto">
            Os princípios que guiam tudo o que fazemos
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {values.map((value, index) => (
            <div
              key={value.title}
              className="group p-8 rounded-2xl bg-dark-foreground/5 backdrop-blur-sm border border-blue/10 hover-lift hover:border-blue/30 transition-all duration-300 animate-slide-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="mb-6 w-16 h-16 rounded-xl bg-gradient-to-br from-blue/20 to-blue/5 flex items-center justify-center group-hover:from-blue/30 group-hover:to-blue/10 transition-all duration-300">
                <value.icon className="w-8 h-8 text-blue group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 className="text-2xl font-bold text-dark-foreground mb-3 group-hover:text-blue transition-colors">
                {value.title}
              </h3>
              <p className="text-dark-foreground/70 leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
