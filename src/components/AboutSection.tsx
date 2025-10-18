import { User } from "lucide-react";

const AboutSection = () => {
  return (
    <section className="py-20 md:py-32 bg-light">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Left Column - Photo Placeholder */}
          <div className="animate-slide-in-left">
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-xl bg-gradient-to-br from-blue/20 to-gold/20 flex items-center justify-center">
              <User className="w-32 h-32 text-blue/30" />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-dark/80 to-transparent p-6">
                <p className="text-dark-foreground font-semibold text-lg">Cristiano Hassem</p>
                <p className="text-dark-foreground/80 text-sm">Founder & CEO</p>
              </div>
            </div>
          </div>

          {/* Right Column - Text */}
          <div className="animate-slide-in-right">
            <h2 className="text-4xl md:text-5xl font-bold text-light-foreground mb-6">
              About <span className="text-gradient-blue">ELEVY</span>
            </h2>
            <div className="space-y-4 text-lg text-light-foreground/80 leading-relaxed">
              <p>
                ELEVY was born six years ago from the vision of{" "}
                <span className="font-semibold text-light-foreground">Cristiano Hassem</span>, 
                a professional with over 10 years of experience in pharmacy management and 18 years in people management.
              </p>
              <p>
                His journey led him to understand that digital marketing is more than ads — 
                it's about <span className="font-semibold text-blue">understanding people</span> and{" "}
                <span className="font-semibold text-blue">transforming results</span>.
              </p>
              <p>
                Today, ELEVY combines strategic expertise with cutting-edge technology to deliver 
                measurable results that elevate businesses to new heights.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
