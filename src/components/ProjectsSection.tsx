
import React, { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import FlatAvailability from './FlatAvailability';

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
      image: "/lovable-uploads/f355db18-0121-4ef2-a413-139a9392dc29.png",
      link: "/projects/aditya-gold-platinum",
      status: "Completed",
      description: "Bespoke development of 20 luxury apartments with premium amenities and scenic views."
    },
    {
      id: 2,
      name: "Blue Horizon",
      type: "Residential",
      area: "40,000 Sq.ft",
      image: "/lovable-uploads/a8449454-7955-4944-b12f-3756ccbdbf9f.png",
      link: "/projects/blue-horizon",
      status: "Under Construction",
      description: "Modern residential complex featuring contemporary design and sustainable building practices."
    }
  ];

  // CSV data URL - replace with your actual published CSV URL
  const csvDataUrl = "https://docs.google.com/spreadsheets/d/e/2PACX-1vQxUXK78Yy3DclbjSarZTUzSFZ9Eew25SYzMTrFiJzMnkUJ9N9QULXvDYVb1CQrRAPBKlikCUfwZi6V/pub?gid=0&single=true&output=csv";

  return (
    <section className="section-padding bg-gray-50">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 font-poppins text-center reveal-on-scroll">
          Our Latest Projects
        </h2>
        <div className="w-32 h-1 bg-accent mx-auto mb-16"></div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className="relative overflow-hidden rounded-xl shadow-lg h-[400px] md:h-[500px] cursor-pointer reveal-on-scroll"
              onClick={() => navigate(project.link)}
            >
              <img 
                src={project.image} 
                alt={project.name} 
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
              />
              <div className="project-overlay p-8">
                <h3 className="text-2xl md:text-3xl font-bold mb-4">{project.name}</h3>
                <p className="text-base md:text-lg mb-4">Area: {project.area}</p>
                <p className="text-base md:text-lg mb-4">Type: {project.type}</p>
                <p className="text-base md:text-lg mb-4">Status: {project.status}</p>
                <p className="text-base md:text-lg mb-6">Description: {project.description}</p>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-transparent border-white text-white hover:bg-white hover:text-primary text-lg py-6 px-8"
                >
                  View Project
                </Button>
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white p-6">
                <h3 className="text-xl md:text-2xl font-semibold">{project.name}</h3>
                <p className="text-base md:text-lg">Area: {project.area}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center reveal-on-scroll mb-16">
          <Button 
            onClick={() => navigate('/projects')}
            variant="outline"
            className="border-primary text-primary hover:bg-primary hover:text-white group text-lg py-6 px-10"
            size="lg"
          >
            See All Projects
            <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform"/>
          </Button>
        </div>
        
        <div className="reveal-on-scroll">
          <h3 className="text-2xl md:text-3xl font-bold mb-8 font-poppins text-center">Flat Availability</h3>
          <FlatAvailability csvUrl={csvDataUrl} />
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
