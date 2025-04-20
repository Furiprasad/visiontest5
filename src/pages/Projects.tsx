import React, { useEffect } from 'react';
import MainLayout from '../layouts/MainLayout';
import { useNavigate } from 'react-router-dom';

const Projects: React.FC = () => {
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

  const projects = [
    {
      id: 1,
      name: "Aditya Gold & Platinum",
      type: "Residential",
      area: "45,000 Sq.ft",
      image: "/lovable-uploads/e347d401-e4bc-4c4b-8030-fe3d9ada5769.png",
      status: "Completed",
      description: "Bespoke development of 20 luxury apartments with premium amenities and scenic views."
    },
    {
      id: 2,
      name: "Blue Horizon",
      type: "Residential",
      area: "40,000 Sq.ft",
      image: "/lovable-uploads/0ee2598d-751b-4c78-a0f7-0e2334b4207c.png",
      status: "Under Construction", 
      description: "Modern residential complex featuring contemporary designs."
    }
  ];
  
  return (
    <MainLayout>
      <section className="relative py-20 md:py-28 bg-primary">
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-poppins">Our Projects</h1>
          <p className="text-lg opacity-90">Discover our landmark developments and ongoing initiatives</p>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow reveal-on-scroll">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                  <polyline points="9 22 9 12 15 12 15 22"></polyline>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 font-poppins">Residential</h3>
              <p className="text-gray-600">Luxury apartments and villas designed for modern living with premium amenities.</p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow reveal-on-scroll">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                  <line x1="9" y1="3" x2="9" y2="21"></line>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 font-poppins">Commercial</h3>
              <p className="text-gray-600">Office buildings and retail spaces designed for optimal business functionality.</p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow reveal-on-scroll">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                  <path d="M18 17.5v-15H6v15"></path>
                  <path d="M2 17.5h20"></path>
                  <path d="M18 17.5v3.5"></path>
                  <path d="M6 17.5v3.5"></path>
                  <path d="M3 8h18"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 font-poppins">Infrastructure</h3>
              <p className="text-gray-600">Roads, bridges, and other civil infrastructure projects built to last.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-12 font-poppins text-center reveal-on-scroll">Featured Projects</h2>
          
          <div className="space-y-16">
            {projects.map((project, index) => (
              <div 
                key={project.id}
                className={`grid grid-cols-1 ${index % 2 === 0 ? 'md:grid-cols-[2fr_3fr]' : 'md:grid-cols-[3fr_2fr] md:flex-row-reverse'} gap-8 items-center reveal-on-scroll`}
              >
                <div className="order-2 md:order-none">
                  <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium mb-4 ${
                    project.status === 'Completed' 
                      ? 'bg-green-100 text-green-800' 
                      : project.status === 'Under Construction'
                        ? 'bg-blue-100 text-blue-800'
                        : 'bg-amber-100 text-amber-800'
                  }`}>
                    {project.status}
                  </span>
                  <h3 className="text-2xl font-bold mb-2 font-poppins">{project.name}</h3>
                  <div className="flex flex-wrap gap-4 mb-4">
                    <div className="flex items-center text-gray-600">
                      <span className="font-medium mr-2">Type:</span>
                      <span>{project.type}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <span className="font-medium mr-2">Area:</span>
                      <span>{project.area}</span>
                    </div>
                  </div>
                  <p className="text-gray-700 mb-6">{project.description}</p>
                  <button 
                    className="px-6 py-2 bg-primary text-white hover:bg-primary/90 transition rounded"
                    onClick={() => navigate(`/project/${project.id}`)}
                  >
                    Read More
                  </button>
                </div>
                <div className="order-1 md:order-none overflow-hidden rounded-lg h-[300px] md:h-[400px]">
                  <img 
                    src={project.image} 
                    alt={project.name} 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default Projects;
