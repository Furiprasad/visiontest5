
import React from 'react';

const HeroSection: React.FC = () => {
  const slides = [
    {
      image: "/lovable-uploads/9c4f1a7b-9bbb-4564-822d-afc5b447930a.png"
    }
  ];

  // The aspect ratio of the image is 2560 / 975 ≈ 2.62
  // We will use a padding-top trick to maintain aspect ratio for responsive images.
  // On mobile, the container height will match the scaled image height perfectly.

  return (
    <section className="relative w-full overflow-hidden bg-gray-100" style={{ paddingTop: '38.16%' }}>
      {/* paddingTop = (975 / 2560)*100% = 38.16% for height proportional to width */}

      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
        {slides.map((slide, index) => (
          <div
            key={index}
            className="w-full h-full"
          >
            <img
              src={slide.image}
              alt="Vision Developers Hero"
              className="w-full h-full object-cover"
              style={{
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

