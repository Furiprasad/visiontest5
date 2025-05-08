import React, { useEffect } from 'react';
import MainLayout from '../layouts/MainLayout';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import { Card, CardContent } from "@/components/ui/card";
import FlatAvailability from '../components/FlatAvailability';

const Projects: React.FC = () => {
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

  const projects = [{
    id: 1,
    name: "Aditya Gold & Platinum",
    type: "Residential",
    area: "45,000 Sq.ft",
    image: "/lovable-uploads/f355db18-0121-4ef2-a413-139a9392dc29.png",
    link: "/projects/aditya-gold-platinum",
    status: "Completed",
    description: "Bespoke development of 20 luxury apartments with premium amenities and scenic views."
  }, {
    id: 2,
    name: "Blue Horizon",
    type: "Residential",
    area: "40,000 Sq.ft",
    image: "/lovable-uploads/a8449454-7955-4944-b12f-3756ccbdbf9f.png",
    link: "/projects/blue-horizon",
    status: "Under Construction",
    description: "Modern residential complex featuring contemporary design and sustainable building practices."
  }];

  // CSV data URL - replace with your actual published CSV URL
  const csvDataUrl = "https://docs.google.com/spreadsheets/d/e/2PACX-1vQxUXK78Yy3DclbjSarZTUzSFZ9Eew25SYzMTrFiJzMnkUJ9N9QULXvDYVb1CQrRAPBKlikCUfwZi6V/pub?gid=0&single=true&output=csv";

  return (
    <MainLayout>
      {/* Header Banner */}
      <section className="relative py-20 md:py-28 bg-primary">
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-poppins">Our Projects</h1>
          <p className="text-lg opacity-90">Discover our landmark developments and ongoing initiatives</p>
        </div>
      </section>

      {/* Project Categories */}
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

      {/* Project Listings */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 font-poppins text-center reveal-on-scroll">Featured Projects</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.map((project) => (
              <Card 
                key={project.id}
                className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow reveal-on-scroll"
              >
                <div className="relative h-72">
                  <img 
                    src={project.image} 
                    alt={project.name} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/70 to-transparent p-4">
                    <h3 className="text-white text-xl font-semibold">{project.name}</h3>
                    <p className="text-white/80">{project.type} | {project.area}</p>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                      {project.status}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-6">{project.description}</p>
                  <Link to={project.link}>
                    <Button className="w-full" variant="outline">View Project Details</Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Flat Availability Section */}
      <section className="section-padding pt-0">
        <div className="container mx-auto px-4">
          <div className="w-full max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 font-poppins text-center reveal-on-scroll">Flat Availability</h2>
            <FlatAvailability csvUrl={csvDataUrl} />
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default Projects;
