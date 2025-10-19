import { Eye, DollarSign, MapPin } from "lucide-react"; // MapPin adicionado aqui

const ResultsSection = () => {
  const results = [
    {
      icon: MapPin,
      value: "+300%",
      label: "de aumento médio em alcance local no Google",
      color: "blue",
    },
    {
      icon: Eye,
      value: "+250%",
      label: "de crescimento em visibilidade orgânica",
      color: "gold",
    },
    {
      icon: DollarSign,
      value: "Até 40%",
      label: "de aumento no faturamento com campanhas bem estruturadas",
      color: "blue",
    },
  ];

  return (
    <section className="py-20 md:py-32 bg-light relative overflow-hidden">
      {/* Elementos Decorativos */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-light-foreground mb-4">
            Resultados que <span className="text-gradient-blue">Falam</span> por Si
          </h2>
          <p className="text-xl text-light-foreground/70 max-w-2xl mx-auto">
            Dados reais de clientes que confiaram na ELEVY para crescer
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          {results.map((result, index) => (
            <div
              key={result.label}
              className="text-center p-8 rounded-2xl bg-background shadow-lg hover-lift animate-slide-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className={`inline-flex w-16 h-16 rounded-full bg-gradient-to-br ${
                result.color === 'blue' 
                  ? 'from-blue to-blue/70' 
                  : 'from-gold to-gold/70'
              } items-center justify-center mb-6`}>
                <result.icon className={`w-8 h-8 ${
                  result.color === 'blue' ? 'text-blue-foreground' : 'text-gold-foreground'
                }`} />
              </div>
              <div className={`text-5xl md:text-6xl font-bold mb-4 ${
                result.color === 'blue' ? 'text-gradient-blue' : 'text-gradient-gold'
              }`}>
                {result.value}
              </div>
              <p className="text-light-foreground/80 text-lg">
                {result.label}
              </p>
            </div>
          ))}
        </div>

        {/* Bloco de Resumo */}
        <div className="max-w-4xl mx-auto p-8 rounded-2xl bg-gradient-to-br from-blue/10 to-gold/10 border border-blue/20 animate-fade-in">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-light-foreground mb-4">
              Crescimento Real, Impacto Mensurável
            </h3>
            <p className="text-light-foreground/70 mb-6">
              Estes não são apenas números — representam negócios transformados e empreendedores que alcançaram seus objetivos com a nossa orientação estratégica.
            </p>
            <div className="flex justify-center gap-4 flex-wrap">
              <div className="px-6 py-3 rounded-full bg-blue/10 border border-blue/30">
                <span className="text-blue font-semibold">Estratégia com Dados</span>
              </div>
              <div className="px-6 py-3 rounded-full bg-gold/10 border border-gold/30">
                <span className="text-gold-foreground font-semibold">Otimização Contínua</span>
              </div>
              <div className="px-6 py-3 rounded-full bg-blue/10 border border-blue/30">
                <span className="text-blue font-semibold">Relatórios Transparentes</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;
