import { MapPin, Target, Share2, Globe, Video, FileText } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: MapPin,
      title: "Google Business Profile",
      description: "Seu negócio visível para quem te procura agora.",
    },
    {
      icon: Target,
      title: "Tráfego Pago Estratégico",
      description: "Anúncios com propósito, não achismo.",
    },
    {
      icon: Share2,
      title: "Redes Sociais & Branding",
      description: "Sua marca vista e lembrada.",
    },
    {
      icon: Globe,
      title: "Sites & Landing Pages",
      description: "Páginas que encantam e convertem.",
    },
    {
      icon: Video,
      title: "Produção Audiovisual",
      description: "Vídeos e criativos que geram conexão.",
    },
    {
      icon: FileText,
      title: "Encarte Digital e Catálogo Interativo",
      description: "Seu portfólio em formato moderno e clicável.",
    },
  ];

  return (
    <section className="py-20 md:py-32 bg-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-light-foreground mb-4">
            Soluções Completas para <span className="text-gradient-blue">Elevar</span> o Seu Negócio
          </h2>
          <p className="text-xl text-light-foreground/70 max-w-3xl mx-auto">
            Da estratégia à execução, temos tudo que seu negócio precisa para dominar o mercado digital.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group p-8 rounded-2xl bg-background shadow-lg hover-lift border border-border hover:border-blue/30 transition-all duration-300 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-6 w-14 h-14 rounded-xl bg-gradient-to-br from-blue to-blue/70 flex items-center justify-center group-hover:shadow-[0_0_30px_hsl(var(--accent-blue)/0.4)] transition-all duration-300">
                <service.icon className="w-7 h-7 text-blue-foreground" />
              </div>
              <h3 className="text-xl font-bold text-light-foreground mb-3 group-hover:text-blue transition-colors">
                {service.title}
              </h3>
              <p className="text-light-foreground/70 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
