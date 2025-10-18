import { Mail, Phone, Instagram, Facebook, Linkedin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark py-16 border-t border-blue/10">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            {/* Brand Column */}
            <div className="space-y-4">
              <h3 className="text-3xl font-bold text-gradient-blue">ELEVY</h3>
              <p className="text-dark-foreground/70 leading-relaxed">
                A complete set of solutions for your business.
              </p>
              <p className="text-dark-foreground/60 text-sm">
                Elevating companies to new levels of visibility and results since 2018.
              </p>
            </div>

            {/* Contact Column */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-dark-foreground mb-4">Contact</h4>
              <div className="space-y-3">
                <a 
                  href="https://wa.me/5511999999999" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-dark-foreground/70 hover:text-blue transition-colors group"
                >
                  <Phone className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  <span>+55 11 99999-9999</span>
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

            {/* Social Media Column */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-dark-foreground mb-4">Follow Us</h4>
              <div className="flex gap-4">
                <a
                  href="https://instagram.com/elevydigital"
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

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-blue/10">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-dark-foreground/60 text-sm">
              <p>
                © {currentYear} ELEVY Digital Marketing. All rights reserved.
              </p>
              <p className="text-center">
                ELEVY — a complete set of solutions for your business.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
