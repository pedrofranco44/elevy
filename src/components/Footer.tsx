import { Mail, Phone, Instagram, Facebook, Linkedin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark py-16 border-t border-blue/10">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Conteúdo Principal do Rodapé */}
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            {/* Coluna da Marca */}
            <div className="space-y-4">
              <h3 className="text-3xl font-bold text-gradient-blue">ELEVY</h3>
              <p className="text-dark-foreground/70 leading-relaxed">
                Um conjunto completo de soluções para o seu negócio.
              </p>
              <p className="text-dark-foreground/60 text-sm">
                Elevando empresas a novos níveis de visibilidade e resultados desde 2018.
              </p>
            </div>

            {/* Coluna de Contato */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-dark-foreground mb-4">Contato</h4>
              <div className="space-y-3">
                <a 
                  href="https://wa.me/5527996491601" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-dark-foreground/70 hover:text-blue transition-colors group"
                >
                  <Phone className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  <span>+55 27 99649-1601</span>
                </a>
                <a 
                  href="mailto:contato@elevy.com.br" 
                  className="flex items-center gap-3 text-dark-foreground/70 hover:text-blue transition-colors group"
                >
                  <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  <span>contato@elevy.com.br</span>
                </a>
              </div>
            </div>

            {/* Coluna de Redes Sociais */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-dark-foreground mb-4">Siga-nos</h4>
              <div className="flex gap-4">
                <a
                  href="https://www.instagram.com/elevy.marketingdigital/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-dark-foreground/10 hover:bg-blue flex items-center justify-center transition-all hover-lift group"
                >
                  <Instagram className="w-5 h-5 text-dark-foreground group-hover:text-blue-foreground" />
                </a>
                <a
                  href="https://facebook.com/elevydigital"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-dark-foreground/10 hover:bg-blue flex items-center justify-center transition-all hover-lift group"
                >
                  <Facebook className="w-5 h-5 text-dark-foreground group-hover:text-blue-foreground" />
                </a>
                <a
                  href="https://linkedin.com/company/elevydigital"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-dark-foreground/10 hover:bg-blue flex items-center justify-center transition-all hover-lift group"
                >
                  <Linkedin className="w-5 h-5 text-dark-foreground group-hover:text-blue-foreground" />
                </a>
              </div>
            </div>
          </div>

          {/* Barra Inferior */}
          <div className="pt-8 border-t border-blue/10">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-dark-foreground/60 text-sm">
              <p>
                © {currentYear} ELEVY Marketing Digital. Todos os direitos reservados.
              </p>
              <p className="text-center">
                ELEVY — um conjunto completo de soluções para o seu negócio.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
