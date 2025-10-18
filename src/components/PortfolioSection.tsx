import { useState } from "react";
import { X, Image as ImageIcon } from "lucide-react";

const PortfolioSection = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  // Placeholder portfolio items
  const portfolioItems = [
    { id: 1, title: "Social Media Campaign", category: "Social Media" },
    { id: 2, title: "Landing Page Design", category: "Web Design" },
    { id: 3, title: "Video Production", category: "Video" },
    { id: 4, title: "Brand Identity", category: "Branding" },
    { id: 5, title: "Google Ads Campaign", category: "Paid Traffic" },
    { id: 6, title: "E-commerce Website", category: "Web Design" },
  ];

  return (
    <>
      <section className="py-20 md:py-32 bg-beige">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-beige-foreground mb-4">
              Our <span className="text-gradient-blue">Portfolio</span>
            </h2>
            <p className="text-xl text-beige-foreground/70 max-w-2xl mx-auto">
              Discover some of the projects that elevated our clients' businesses
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
                {/* Placeholder Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue/20 via-blue/10 to-gold/20 flex items-center justify-center">
                  <ImageIcon className="w-16 h-16 text-blue/30" />
                </div>
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                
                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <span className="inline-block px-3 py-1 rounded-full bg-blue/20 text-blue text-xs font-semibold mb-2">
                    {item.category}
                  </span>
                  <h3 className="text-xl font-bold text-dark-foreground group-hover:text-blue transition-colors">
                    {item.title}
                  </h3>
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-blue/50 rounded-2xl transition-all" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage !== null && (
        <div
          className="fixed inset-0 z-50 bg-dark/95 flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 w-12 h-12 rounded-full bg-dark-foreground/10 hover:bg-dark-foreground/20 flex items-center justify-center transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X className="w-6 h-6 text-dark-foreground" />
          </button>
          
          <div className="max-w-5xl w-full aspect-video rounded-2xl overflow-hidden bg-gradient-to-br from-blue/20 via-blue/10 to-gold/20 flex items-center justify-center">
            <ImageIcon className="w-32 h-32 text-blue/30" />
          </div>
        </div>
      )}
    </>
  );
};

export default PortfolioSection;
