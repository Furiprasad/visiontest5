
import React, { useEffect } from 'react';
import MainLayout from '../layouts/MainLayout';

const imageData = [
  {
    src: "/lovable-uploads/88feddeb-4ba9-48a5-8cca-5fb4855150f4.png", // ec.jpg
    alt: "East Coast Railway"
  },
  {
    src: "/lovable-uploads/3a08ee4e-8b60-4768-b4c3-5e5c6dad0cff.png", // piaggio.jpg
    alt: "Piaggio"
  },
  {
    src: "/lovable-uploads/bb12781b-281f-4e82-bcd4-2e39e82be2bb.png", // vd.jpg
    alt: "Vodafone"
  },
  {
    src: "/lovable-uploads/cf62d2e4-6eb6-44f8-9e51-97c827f4492e.png", // ap.jpg
    alt: "Andhra Pradesh Government"
  }
];

const Portfolio: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
        }
      });
    }, {
      threshold: 0.1
    });
    const elements = document.querySelectorAll('.reveal-on-scroll');
    elements.forEach(el => observer.observe(el));
    return () => {
      elements.forEach(el => observer.unobserve(el));
    };
  }, []);

  return (
    <MainLayout>
      {/* Header Banner */}
      <section className="relative py-20 md:py-28 bg-primary">
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-poppins">Our Portfolio</h1>
          <p className="text-lg opacity-90">Showcasing our finest work and achievements</p>
        </div>
      </section>

      {/* Image Grid */}
      <section className="section-padding">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {imageData.map((img, idx) => (
              <div
                key={img.src}
                className="bg-white rounded-lg shadow-md overflow-hidden flex items-center justify-center p-8 transition-transform duration-300 hover:scale-105 hover:shadow-lg reveal-on-scroll"
                style={{ background: "#fff" }}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="object-contain max-h-44 w-full"
                  style={{ filter: 'grayscale(0%)', transition: "filter 0.3s, transform 0.3s" }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div className="reveal-on-scroll">
              <h3 className="text-4xl font-bold text-accent mb-2">55+</h3>
              <p className="text-gray-300">Projects Completed</p>
            </div>
            <div className="reveal-on-scroll" style={{ transitionDelay: '100ms' }}>
              <h3 className="text-4xl font-bold text-accent mb-2">20+</h3>
              <p className="text-gray-300">Years Experience</p>
            </div>
            <div className="reveal-on-scroll" style={{ transitionDelay: '200ms' }}>
              <h3 className="text-4xl font-bold text-accent mb-2">85+</h3>
              <p className="text-gray-300">Happy Clients</p>
            </div>
            <div className="reveal-on-scroll" style={{ transitionDelay: '300ms' }}>
              <h3 className="text-4xl font-bold text-accent mb-2">10+</h3>
              <p className="text-gray-300">Industry Awards</p>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default Portfolio;
