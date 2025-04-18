
import React, { useEffect } from 'react';

const PartnersSection: React.FC = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.reveal-on-scroll');
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);
  
  const partners = [
    {
      name: "Tata",
      logo: "/lovable-uploads/3a53abaf-ce73-4e90-bd27-fb4993066465.png"
    },
    {
      name: "Vodafone",
      logo: "/lovable-uploads/90dbc074-2d2e-4814-a2fd-6885e09298f6.png"
    },
    {
      name: "East Coast",
      logo: "/lovable-uploads/40a4c108-b576-41ed-9282-1b013f221c56.png"
    },
    {
      name: "Gangavaram Port",
      logo: "/lovable-uploads/85c1f10c-72ca-4efb-a5e6-8a729f32cc46.png"
    },
    {
      name: "Indus Towers",
      logo: "/lovable-uploads/30223631-3df9-43c8-88e1-f001ae318c21.png"
    }
  ];

  return (
    <section className="section-padding bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-2 font-poppins text-center reveal-on-scroll">
          Trusted by Industry Leaders
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto reveal-on-scroll">
          Proud to be the construction partner for top industry giants across India.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center">
          {partners.map((partner, index) => (
            <div 
              key={index}
              className="flex justify-center items-center p-4 reveal-on-scroll"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <img 
                src={partner.logo} 
                alt={partner.name} 
                className="partner-logo max-h-16 md:max-h-20 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
