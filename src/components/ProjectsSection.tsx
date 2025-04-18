import React, { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const ProjectsSection: React.FC = () => {
  const navigate = useNavigate();

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
  
  const projects = [
    {
      id: 1,
      name: "Aditya Gold & Platinum",
      type: "Residential",
      area: "45,000 Sq.ft",
      image: "/lovable-uploads/c72bf87e-6d73-4667-beb8-4e189b70fb1e.png",
      status: "Completed",
      description: "Bespoke development of 20 luxury apartments with premium amenities and scenic views."
    },
    {
      id: 2,
      name: "Blue Horizon",
      type: "Residential",
      area: "40,000 Sq.ft",
      image: "/lovable-uploads/8a16c7d1-8f7f-4f81-8c3f-0daec9b20438.png",
      status: "Completed",
      description: "Modern residential complex featuring contemporary design and sustainable building practices."
    }
  ];

  return (
    <section className="section-padding bg-gray-50">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-2 font-poppins text-center reveal-on-scroll">
          Our Latest Projects
        </h2>
        <div className="w-24 h-1 bg-accent mx-auto mb-12"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className="relative overflow-hidden rounded-lg shadow-lg h-[300px] md:h-[400px] cursor-pointer reveal-on-scroll"
              onClick={() => navigate(`/projects/${project.id}`)}
            >
              <img 
                src={project.image} 
                alt={project.name} 
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
              />
              <div className="project-overlay p-6">
                <h3 className="text-xl md:text-2xl font-bold mb-2">{project.name}</h3>
                <p className="text-sm md:text-base mb-4">Area: {project.area}</p>
                <p className="text-sm md:text-base mb-4">Type: {project.type}</p>
                <p className="text-sm md:text-base mb-4">Status: {project.status}</p>
                <p className="text-sm md:text-base mb-4">Description: {project.description}</p>
                <Button
                  size="sm"
                  variant="outline"
                  className="bg-transparent border-white text-white hover:bg-white hover:text-primary"
                >
                  View Project
                </Button>
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white p-4">
                <h3 className="text-lg font-semibold">{project.name}</h3>
                <p className="text-sm">Area: {project.area}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center reveal-on-scroll">
          <Button 
            onClick={() => navigate('/projects')}
            variant="outline"
            className="border-primary text-primary hover:bg-primary hover:text-white group"
          >
            See All Projects
            <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform"/>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
