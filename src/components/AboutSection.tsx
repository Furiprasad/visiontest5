import React, { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const AboutSection: React.FC = () => {
  const navigate = useNavigate();
  useEffect(() => {
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
    <section className="section-padding bg-white">
      <div className="container mx-auto max-w-7xl">
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 font-poppins text-center reveal-on-scroll">
            About Us
          </h2>
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg md:text-xl lg:text-2xl text-gray-700 mb-10 reveal-on-scroll">
              Vision Developers, formerly known as Aditya Technocrats, brings decades of experience in infrastructure to the modern and luxurious residential segment. Led by the visionary Sri Suresh Madineni, we've transformed, driven by a passion for creating exceptional living spaces that redefine luxury living.
            </p>
            <Button onClick={() => navigate('/about')} className="bg-primary hover:bg-primary/90 text-white text-lg py-6 px-8 reveal-on-scroll" size="lg">
              Read More
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-stretch mb-20">
          <div className="reveal-on-scroll h-[600px]">
            <img 
              src="/lovable-uploads/de3e986a-4aaf-4274-a9c0-71292e9d15a4.png" 
              alt="About Vision Developers" 
              className="rounded-lg shadow-lg w-full h-full object-cover"
            />
          </div>
          <div className="reveal-on-scroll space-y-8">
            <p className="text-lg md:text-xl lg:text-2xl text-gray-700">
              Vision Developers stands as a symbol of trust, quality, and innovation in construction. With a commitment to excellence and timely delivery, we turn your dream spaces into reality. From residential to commercial projects, our expert team ensures perfection in every brick we lay. Build your future with Vision Developers!
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-10">
              <div className="text-center p-6 bg-gray-50 rounded-lg hover:shadow-md transition-all">
                <div className="flex justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                    <polyline points="9 22 9 12 15 12 15 22"></polyline>
                  </svg>
                </div>
                <h3 className="text-lg md:text-xl font-semibold">Gated Communities</h3>
              </div>
              
              <div className="text-center p-6 bg-gray-50 rounded-lg hover:shadow-md transition-all">
                <div className="flex justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                    <line x1="9" y1="3" x2="9" y2="21"></line>
                  </svg>
                </div>
                <h3 className="text-lg md:text-xl font-semibold">Commercial</h3>
              </div>
              
              <div className="text-center p-6 bg-gray-50 rounded-lg hover:shadow-md transition-all">
                <div className="flex justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                    <path d="M18 17.5v-15H6v15"></path>
                    <path d="M2 17.5h20"></path>
                    <path d="M18 17.5v3.5"></path>
                    <path d="M6 17.5v3.5"></path>
                    <path d="M3 8h18"></path>
                  </svg>
                </div>
                <h3 className="text-lg md:text-xl font-semibold">Infrastructure</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
