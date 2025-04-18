
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
      name: "East Coast",
      logo: "/lovable-uploads/b4fe986b-1045-4154-9fe7-c4cb1398c53b.png"
    },
    {
      name: "Gangavaram Port",
      logo: "/lovable-uploads/eecd99b8-d228-4098-8bed-7d1371ed1c76.png"
    },
    {
      name: "Vodafone",
      logo: "/lovable-uploads/ff5ee40c-6378-4db1-a9ea-ed04768ba68f.png"
    },
    {
      name: "Tata",
      logo: "/lovable-uploads/2f5da14f-8b8e-4555-9df6-cc15b995eefd.png"
    },
    {
      name: "Indus Towers",
      logo: "/lovable-uploads/5f175ff3-cc6f-4081-b6b5-9e125ac9a73d.png"
    }
  ];

  return (
    <section className="section-padding bg-gray-100">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 font-poppins text-center reveal-on-scroll">
          Trusted by Industry Leaders
        </h2>
        <p className="text-lg md:text-xl lg:text-2xl text-center text-gray-600 mb-16 max-w-4xl mx-auto reveal-on-scroll">
          Proud to be the construction partner for top industry giants across India.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 items-center">
          {partners.map((partner, index) => (
            <div 
              key={index}
              className="flex justify-center items-center p-6 reveal-on-scroll"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <img 
                src={partner.logo} 
                alt={partner.name} 
                className="partner-logo w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
