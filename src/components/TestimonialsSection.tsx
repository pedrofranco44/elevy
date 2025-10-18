import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";

const TestimonialsSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      name: "Maria Silva",
      city: "São Paulo, SP",
      text: "ELEVY transformed our Google presence — today we're a local reference. Our visibility increased by over 300% and we're receiving qualified leads daily.",
      rating: 5,
    },
    {
      name: "João Santos",
      city: "Rio de Janeiro, RJ",
      text: "ELEVY's campaigns brought real clients and measurable results. The transparency in reporting and constant optimization made all the difference for our business.",
      rating: 5,
    },
    {
      name: "Ana Costa",
      city: "Belo Horizonte, MG",
      text: "The professionalism and dedication of the ELEVY team exceeded our expectations. They truly understand digital marketing and know how to generate results.",
      rating: 5,
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 md:py-32 bg-beige relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-10 left-10 w-20 h-20 text-blue/10">
        <Quote className="w-full h-full" />
      </div>
      <div className="absolute bottom-10 right-10 w-20 h-20 text-gold/10 rotate-180">
        <Quote className="w-full h-full" />
      </div>

      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-beige-foreground mb-4">
            What Our <span className="text-gradient-blue">Clients</span> Say
          </h2>
          <p className="text-xl text-beige-foreground/70 max-w-2xl mx-auto">
            Real testimonials from entrepreneurs who elevated their businesses with ELEVY
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Testimonial Card */}
            <div className="bg-background rounded-3xl shadow-2xl p-8 md:p-12 animate-fade-in">
              <div className="flex flex-col items-center text-center">
                {/* Avatar Placeholder */}
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue to-gold/70 mb-6 flex items-center justify-center">
                  <span className="text-2xl font-bold text-blue-foreground">
                    {testimonials[currentSlide].name.charAt(0)}
                  </span>
                </div>

                {/* Stars */}
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonials[currentSlide].rating)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 fill-gold text-gold" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <blockquote className="text-xl md:text-2xl text-beige-foreground/90 mb-8 leading-relaxed">
                  "{testimonials[currentSlide].text}"
                </blockquote>

                {/* Author Info */}
                <div>
                  <p className="font-bold text-beige-foreground text-lg">
                    {testimonials[currentSlide].name}
                  </p>
                  <p className="text-beige-foreground/60">
                    {testimonials[currentSlide].city}
                  </p>
                </div>
              </div>
            </div>

            {/* Navigation Buttons */}
            <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between pointer-events-none px-4">
              <Button
                variant="outline"
                size="icon"
                onClick={prevSlide}
                className="pointer-events-auto rounded-full w-12 h-12 shadow-lg hover-lift bg-background"
              >
                <ChevronLeft className="w-6 h-6" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={nextSlide}
                className="pointer-events-auto rounded-full w-12 h-12 shadow-lg hover-lift bg-background"
              >
                <ChevronRight className="w-6 h-6" />
              </Button>
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentSlide
                    ? 'bg-blue w-8'
                    : 'bg-beige-foreground/30 hover:bg-beige-foreground/50'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
