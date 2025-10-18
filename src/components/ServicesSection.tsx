import { MapPin, Target, Share2, Globe, Video, FileText } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: MapPin,
      title: "Google Business Profile",
      description: "Your business visible to those searching right now.",
    },
    {
      icon: Target,
      title: "Strategic Paid Traffic",
      description: "Ads with purpose, not guesswork.",
    },
    {
      icon: Share2,
      title: "Social Media & Branding",
      description: "Your brand seen and remembered.",
    },
    {
      icon: Globe,
      title: "Websites & Landing Pages",
      description: "Pages that enchant and convert.",
    },
    {
      icon: Video,
      title: "Audiovisual Production",
      description: "Videos and creatives that build connection.",
    },
    {
      icon: FileText,
      title: "Digital Flyers & Interactive Catalogs",
      description: "Your portfolio in a modern, clickable format.",
    },
  ];

  return (
    <section className="py-20 md:py-32 bg-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-light-foreground mb-4">
            Complete Solutions to <span className="text-gradient-blue">Elevate</span> Your Business
          </h2>
          <p className="text-xl text-light-foreground/70 max-w-3xl mx-auto">
            From strategy to execution, we have everything your business needs to dominate the digital market
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
