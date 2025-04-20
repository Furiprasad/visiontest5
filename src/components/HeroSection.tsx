
import React from 'react';

const HeroSection: React.FC = () => {
  const slides = [
    {
      image: "/lovable-uploads/9c4f1a7b-9bbb-4564-822d-afc5b447930a.png"
    }
  ];

  return (
    <section className="relative w-full h-auto min-h-[40vh] overflow-hidden bg-gray-100">
      <div className="relative w-full flex items-center justify-center">
        {slides.map((slide, index) => (
          <div 
            key={index}
            className="w-full"
          >
            <img 
              src={slide.image} 
              alt="Vision Developers Hero" 
              className="w-full h-auto object-cover"
              style={{
                maxWidth: '100%',
                display: 'block'
              }}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
