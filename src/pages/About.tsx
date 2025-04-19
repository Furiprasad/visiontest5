import React, { useEffect } from 'react';
import MainLayout from '../layouts/MainLayout';
import { useNavigate } from 'react-router-dom';
import TimelineSection from '@/components/TimelineSection';

const About: React.FC = () => {
  const navigate = useNavigate();
  
  useEffect(() => {
    window.scrollTo(0, 0);
    
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

  return (
    <MainLayout>
      {/* Header Banner */}
      <section className="relative py-20 md:py-28 bg-primary">
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-poppins">About Us</h1>
          <p className="text-lg opacity-90">Our story, vision, and commitment to excellence</p>
        </div>
      </section>

      {/* About Content */}
      <section className="section-padding">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="reveal-on-scroll">
              <h2 className="text-3xl font-bold mb-6 font-poppins">Our Story</h2>
              <p className="text-gray-700 mb-4">
                Vision Developers, formerly known as Aditya Technocrats, brings decades of experience in infrastructure to the modern and luxurious residential segment. Led by the visionary Sri Suresh Madineni, we've transformed, driven by a passion for creating exceptional living spaces that redefine luxury living.
              </p>
              <p className="text-gray-700 mb-4">
                Since our inception, we have been committed to delivering construction excellence through innovative design, quality materials, and expert craftsmanship. Our journey has been defined by a relentless pursuit of perfection in every project we undertake.
              </p>
              <p className="text-gray-700">
                Today, Vision Developers stands as a testament to our dedication to creating spaces that inspire and endure, setting new standards in the construction industry across Visakhapatnam and beyond.
              </p>
            </div>
            <div className="reveal-on-scroll">
              <img 
                src="/lovable-uploads/5ec724e0-ff8f-48ec-812e-c9edc3d2e7b9.png" 
                alt="About Vision Developers" 
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
          </div>

          <div className="mb-16 reveal-on-scroll">
            <h2 className="text-3xl font-bold mb-6 font-poppins text-center">Our Mission</h2>
            <p className="text-gray-700 text-center max-w-3xl mx-auto">
              Our mission is to create exceptional living and working spaces that enhance the quality of life and exceed our clients' expectations. We strive to blend innovative design with sustainable practices, ensuring that every project we undertake delivers lasting value for our clients and communities.
            </p>
          </div>

          {/* Team Section - Modified */}
          <section className="section-padding bg-gray-50">
            <div className="container mx-auto">
              <h2 className="text-3xl font-bold mb-12 font-poppins text-center reveal-on-scroll">Our Leadership</h2>
              
              <div className="flex justify-center">
                <div className="text-center reveal-on-scroll">
                  <div className="w-48 h-48 rounded-full bg-gray-300 mx-auto mb-4"></div>
                  <h3 className="text-xl font-semibold font-poppins">Sri Suresh Maddineni</h3>
                  <p className="text-gray-600">Founder & CEO</p>
                </div>
              </div>
            </div>
          </section>

          {/* Timeline Section */}
          <TimelineSection />
        </div>
      </section>
    </MainLayout>
  );
};

export default About;
