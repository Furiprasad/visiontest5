
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

const HeroSection: React.FC = () => {
  const [currentSlide] = useState(0);
  
  const slides = [
    {
      image: "/lovable-uploads/9c4f1a7b-9bbb-4564-822d-afc5b447930a.png",
      quote: "Crafting spaces that inspire, from concept to creation — we make visions reality."
    }
  ];

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
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
