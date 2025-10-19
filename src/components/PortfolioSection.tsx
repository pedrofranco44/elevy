import { useState } from "react";
import { X, Image as ImageIcon } from "lucide-react";

import rede_social from "@/assets/rede_social.webp";
import producao_video from "@/assets/producao_video.webp";
import web_design from "@/assets/web_design.webp";
import branding from "@/assets/branding.webp";
import google_ads from "@/assets/google_ads.webp";
import ecommerce from "@/assets/ecommerce.webp";

const PortfolioSection = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const portfolioItems = [
    { id: 1, title: "Campanha de Mídia Social", category: "Mídia Social", imageUrl: rede_social },
    { id: 2, title: "Design de Landing Page", category: "Web Design", imageUrl: web_design },
    { id: 3, title: "Produção de Vídeo", category: "Vídeo", imageUrl: producao_video },
    { id: 4, title: "Identidade Visual", category: "Branding", imageUrl: branding },
    { id: 5, "title": "Campanha de Google Ads", "category": "Tráfego Pago", "imageUrl": google_ads },
    { id: 6, "title": "Site E-commerce", "category": "Web Design", "imageUrl": ecommerce },
  ];

  // Encontra o item selecionado para o modal
  const selectedPortfolioItem = portfolioItems.find(item => item.id === selectedImage);

  return (
    <>
      <section className="py-20 md:py-32 bg-beige">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-beige-foreground mb-4">
              Nosso <span className="text-gradient-blue">Portfólio</span>
            </h2>
            <p className="text-xl text-beige-foreground/70 max-w-2xl mx-auto">
              Descubra alguns dos projetos que elevaram os negócios de nossos clientes
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {portfolioItems.map((item, index) => (
              <div
                key={item.id}
                className="group relative aspect-video rounded-2xl overflow-hidden cursor-pointer hover-lift animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => setSelectedImage(item.id)}
              >
                {/* 3. AQUI: Substitua o placeholder pela imagem real */}
                <img 
                  src={item.imageUrl} 
                  alt={item.title} 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                
                {/* Conteúdo */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <span className="inline-block px-3 py-1 rounded-full bg-blue/20 text-blue text-xs font-semibold mb-2">
                    {item.category}
                  </span>
                  <h3 className="text-xl font-bold text-dark-foreground group-hover:text-blue transition-colors">
                    {item.title}
                  </h3>
                </div>

                {/* Efeito de Hover */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-blue/50 rounded-2xl transition-all" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal Lightbox */}
      {selectedPortfolioItem && (
        <div
          className="fixed inset-0 z-50 bg-dark/95 flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 w-12 h-12 rounded-full bg-dark-foreground/10 hover:bg-dark-foreground/20 flex items-center justify-center transition-colors z-10"
            onClick={() => setSelectedImage(null)}
          >
            <X className="w-6 h-6 text-dark-foreground" />
          </button>
          
          <div className="relative max-w-5xl w-full aspect-video rounded-2xl overflow-hidden">
            {/* 4. AQUI: Substitua o placeholder pela imagem selecionada no modal */}
            <img 
              src={selectedPortfolioItem.imageUrl} 
              alt={selectedPortfolioItem.title} 
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default PortfolioSection;