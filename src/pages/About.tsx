
import React, { useEffect } from 'react';
import MainLayout from '../layouts/MainLayout';
import { useNavigate } from 'react-router-dom';

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
                src="/lovable-uploads/0117bda7-81b6-4e64-9372-e67e72e4284f.png" 
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

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md reveal-on-scroll">
              <h3 className="text-xl font-semibold mb-3 font-poppins">Quality</h3>
              <p className="text-gray-700">
                We are unwavering in our commitment to quality, using only the finest materials and adhering to the highest standards in every phase of construction.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md reveal-on-scroll" style={{ transitionDelay: '100ms' }}>
              <h3 className="text-xl font-semibold mb-3 font-poppins">Innovation</h3>
              <p className="text-gray-700">
                We embrace innovative approaches and technologies to create architectural designs that are both aesthetically pleasing and functionally superior.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md reveal-on-scroll" style={{ transitionDelay: '200ms' }}>
              <h3 className="text-xl font-semibold mb-3 font-poppins">Trust</h3>
              <p className="text-gray-700">
                We build relationships based on trust and transparency, ensuring that our clients feel confident and secure throughout the construction process.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-12 font-poppins text-center reveal-on-scroll">Our Leadership</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center reveal-on-scroll">
              <div className="w-48 h-48 rounded-full bg-gray-300 mx-auto mb-4"></div>
              <h3 className="text-xl font-semibold font-poppins">Sri Suresh Madineni</h3>
              <p className="text-gray-600">Founder & CEO</p>
            </div>
            <div className="text-center reveal-on-scroll" style={{ transitionDelay: '100ms' }}>
              <div className="w-48 h-48 rounded-full bg-gray-300 mx-auto mb-4"></div>
              <h3 className="text-xl font-semibold font-poppins">Rajesh Kumar</h3>
              <p className="text-gray-600">Chief Architect</p>
            </div>
            <div className="text-center reveal-on-scroll" style={{ transitionDelay: '200ms' }}>
              <div className="w-48 h-48 rounded-full bg-gray-300 mx-auto mb-4"></div>
              <h3 className="text-xl font-semibold font-poppins">Priya Sharma</h3>
              <p className="text-gray-600">Project Director</p>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default About;
