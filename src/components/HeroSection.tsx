
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const HeroSection: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      image: "/lovable-uploads/4fe120fb-d1f3-43d9-9545-35d1dee61713.png",
      quote: "Crafting spaces that inspire, from concept to creation — we make visions reality."
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full h-[500px] md:h-[600px] lg:h-[700px] overflow-hidden">
      {/* Carousel */}
      <div className="relative w-full h-full">
        {slides.map((slide, index) => (
          <div 
            key={index}
            className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ${
              currentSlide === index ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img 
              src={slide.image} 
              alt={`Carousel slide ${index + 1}`} 
              className="w-full h-full object-cover"
            />
            <div className="hero-overlay">
              <div className="max-w-4xl mx-auto">
                <h1 className="text-white text-2xl md:text-4xl lg:text-5xl font-semibold leading-tight mb-6 font-poppins">
                  {slide.quote}
                </h1>
                <Button 
                  className="bg-accent hover:bg-accent/80 text-accent-foreground font-medium px-8 py-6"
                >
                  Explore Our Work
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button 
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full"
        onClick={prevSlide}
        aria-label="Previous slide"
      >
        <ChevronLeft size={24} />
      </button>
      <button 
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full"
        onClick={nextSlide}
        aria-label="Next slide"
      >
        <ChevronRight size={24} />
      </button>

      {/* Navigation Dots */}
      <div className="absolute bottom-6 left-0 right-0 flex justify-center space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${
              currentSlide === index ? 'bg-white' : 'bg-white/50'
            }`}
            onClick={() => setCurrentSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
