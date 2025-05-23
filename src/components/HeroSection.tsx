
import React from 'react';

const HeroSection: React.FC = () => {
  const slides = [
    {
      image: "/lovable-uploads/9c4f1a7b-9bbb-4564-822d-afc5b447930a.png"
    }
  ];

  return (
    <section className="relative w-full h-auto">
      <div className="relative w-full h-full">
        {slides.map((slide, index) => (
          <div 
            key={index}
            className="w-full h-full"
          >
            <img 
              src={slide.image} 
              alt="Vision Developers Hero" 
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
