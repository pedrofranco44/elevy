import { Search, Lightbulb, Wrench, TrendingUp, Trophy } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const MethodologySection = () => {
  const [activeStep, setActiveStep] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  const steps = [
    {
      icon: Search,
      title: "Free Analysis",
      description: "We deeply analyze your business, competitors, and market opportunities.",
    },
    {
      icon: Lightbulb,
      title: "Planning",
      description: "We create a customized strategic plan focused on your specific goals.",
    },
    {
      icon: Wrench,
      title: "Creation",
      description: "We develop and implement campaigns, content, and creative assets.",
    },
    {
      icon: TrendingUp,
      title: "Optimization",
      description: "Continuous monitoring and adjustments to maximize results.",
    },
    {
      icon: Trophy,
      title: "Results",
      description: "Transparent reports showing the impact on your business.",
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const interval = setInterval(() => {
              setActiveStep((prev) => (prev < steps.length - 1 ? prev + 1 : prev));
            }, 800);
            return () => clearInterval(interval);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 md:py-32 bg-dark relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue/5 via-transparent to-blue/5" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-dark-foreground mb-4">
            How We <span className="text-gradient-blue">Work</span>
          </h2>
          <p className="text-xl text-dark-foreground/70 max-w-2xl mx-auto">
            A proven methodology that transforms strategy into results
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Timeline */}
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-blue via-blue to-gold" />

            {/* Steps */}
            <div className="space-y-12">
              {steps.map((step, index) => (
                <div
                  key={step.title}
                  className={`relative flex items-start gap-6 transition-all duration-500 ${
                    index <= activeStep ? 'opacity-100 translate-x-0' : 'opacity-30 translate-x-4'
                  }`}
                >
                  {/* Icon Circle */}
                  <div className={`relative z-10 flex-shrink-0 w-16 h-16 rounded-full flex items-center justify-center transition-all duration-500 ${
                    index <= activeStep
                      ? 'bg-gradient-to-br from-blue to-blue/70 shadow-[0_0_30px_hsl(var(--accent-blue)/0.5)]'
                      : 'bg-dark-foreground/10'
                  }`}>
                    <step.icon className={`w-8 h-8 transition-colors ${
                      index <= activeStep ? 'text-blue-foreground' : 'text-dark-foreground/30'
                    }`} />
                  </div>

                  {/* Content */}
                  <div className="flex-1 pt-2">
                    <div className="p-6 rounded-xl bg-dark-foreground/5 border border-blue/10 hover:border-blue/30 transition-all hover-lift">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-blue/50 font-bold text-sm">STEP {index + 1}</span>
                        <h3 className="text-2xl font-bold text-dark-foreground">
                          {step.title}
                        </h3>
                      </div>
                      <p className="text-dark-foreground/70 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MethodologySection;
