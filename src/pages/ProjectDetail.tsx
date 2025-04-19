
import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import MainLayout from '../layouts/MainLayout';
import { Button } from '@/components/ui/button';

interface ProjectData {
  id: number;
  name: string;
  status: string;
  area: string;
  type: string;
  location: string;
  mainImage: string;
  description: string;
  content: React.ReactNode;
}

const ProjectDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const projectId = parseInt(id || "1");
  
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
  }, [id]);

  const projects: ProjectData[] = [
    {
      id: 1,
      name: "Aditya Gold & Platinum",
      status: "Completed",
      area: "45000 sq. ft.",
      type: "Residential Apartments",
      location: "Sagarnagar, Visakhapatnam",
      mainImage: "/lovable-uploads/e347d401-e4bc-4c4b-8030-fe3d9ada5769.png",
      description: "Bespoke Development Of Luxury Residences",
      content: (
        <>
          <div className="mb-16">
            <p className="text-lg mb-8">
              Discover our exquisite portfolio of residential marvels that redefine contemporary living. From sprawling apartments to elegant townhouses, each project is meticulously designed, blending sophistication with functionality. Our flagship projects in Visakhapatnam showcase our dedication to creating homes that resonate with discerning homebuyers. Explore our ventures and find your perfect abode amidst unparalleled elegance and modernity.
            </p>
            <img 
              src="/lovable-uploads/d3aa3f03-a931-4944-99dd-80f7dc44b7ba.png" 
              alt="Luxury Living" 
              className="w-full h-auto rounded-lg shadow-lg mb-8" 
            />
            <p className="text-lg mb-4">
              Step into a world of unmatched luxury and behold the breathtaking sea views every day from our opulent 3 BHK apartments at Aditya Gold & Aditya Platinum in Sagar Nagar, Visakhapatnam. The project offers unparalleled comfort and sophistication, making it the perfect choice.
            </p>
            <p className="text-lg">
              With its prime location, elegant interiors, and world-class amenities, Aditya Gold & Platinum is the epitome of refined living. Experience the ultimate in luxury and indulge in a lifestyle of pure opulence.
            </p>
          </div>
          
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-8">The action is at the terrace</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <img 
                src="/lovable-uploads/867d73c0-6d59-4917-a210-042ec33a681c.png" 
                alt="Jogging Track" 
                className="w-full h-auto rounded-lg shadow-lg" 
              />
              <img 
                src="/lovable-uploads/dd1b7bfa-b619-4555-863c-3e510d9019db.png" 
                alt="Terrace Garden" 
                className="w-full h-auto rounded-lg shadow-lg" 
              />
            </div>
            <p className="text-lg mb-8">
              Aditya Gold & Platinum presents a verdant haven where you can revitalise your body and soul. Our sprawling terrace gardens boast a synthetic jogging track to invigorate you, a barbecue corner to tantalise your taste buds, and a dedicated play area for your children. Relax amidst the lush greenery and scenic views from the sit-outs, and soak in the tranquil ambiance. Here, forget the stress of everyday life and relive moments of pure bliss.
            </p>
            <div className="bg-gray-50 p-8 rounded-lg">
              <h4 className="text-xl font-semibold mb-4">Amenities</h4>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-primary rounded-full mr-2"></div>
                  <span>Gymnasium</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-primary rounded-full mr-2"></div>
                  <span>Synthetic Jogging Track</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-primary rounded-full mr-2"></div>
                  <span>Landscaped Areas</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-primary rounded-full mr-2"></div>
                  <span>Multi-purpose Hall</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-primary rounded-full mr-2"></div>
                  <span>Sit-out Zones</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-primary rounded-full mr-2"></div>
                  <span>Telescope For Stargazing</span>
                </div>
              </div>
            </div>
          </div>
        </>
      )
    },
    {
      id: 2,
      name: "Blue Horizon",
      status: "Under Construction",
      area: "40000 sq. ft.",
      type: "Residential Apartments",
      location: "Sagarnagar, Visakhapatnam",
      mainImage: "/lovable-uploads/5f9b9394-ac7f-41f9-bb39-ac2610b64aea.png",
      description: "Bespoke Development Of Luxury Residences",
      content: (
        <>
          <div className="mb-16">
            <p className="text-lg mb-8">
              Welcome to Blue Horizon, an exclusive apartment project by Vision Developers. Designed to cater to your dreams of luxurious living, Blue Horizon offers 20 elegant sea-view apartments that redefine comfort and elegance.
            </p>
            <img 
              src="/lovable-uploads/13aef958-2347-40a1-8d20-b18fc2b835b9.png" 
              alt="Blue Horizon Interior" 
              className="w-full h-auto rounded-lg shadow-lg mb-8" 
            />
          </div>
          
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-4">Unparalleled Views</h3>
            <p className="text-lg mb-8">
              Experience breathtaking sea views every day from your balcony. At Blue Horizon, nature meets modern luxury to create an exceptional lifestyle.
            </p>

            <h3 className="text-2xl font-bold mb-4">Prime Location</h3>
            <p className="text-lg mb-8">
              Situated in the serene neighborhood of Sagar Nagar, near the prestigious Radisson Blu Hotel, Blue Horizon places you in the heart of convenience.
            </p>

            <div className="bg-gray-50 p-8 rounded-lg">
              <h4 className="text-xl font-semibold mb-4">Close Proximity to:</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-primary rounded-full mr-2"></div>
                  <span>GITAM University</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-primary rounded-full mr-2"></div>
                  <span>TTD Temple</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-primary rounded-full mr-2"></div>
                  <span>Renowned hospitals</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-primary rounded-full mr-2"></div>
                  <span>Popular tourist attractions</span>
                </div>
              </div>
            </div>
          </div>
        </>
      )
    }
  ];

  const currentProject = projects.find(project => project.id === projectId) || projects[0];
  const totalProjects = projects.length;
  const nextProjectId = projectId < totalProjects ? projectId + 1 : 1;
  const prevProjectId = projectId > 1 ? projectId - 1 : totalProjects;

  return (
    <MainLayout>
      <section className="relative py-20 md:py-28 bg-primary">
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-poppins">{currentProject.name}</h1>
          <p className="text-lg opacity-90">{currentProject.description}</p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-12 items-start mb-16">
            <div className="space-y-6 reveal-on-scroll">
              <h2 className="text-2xl font-bold font-poppins">{currentProject.name}</h2>
              <div className="space-y-4">
                <div className="flex justify-between border-b border-gray-200 py-3">
                  <span className="font-medium">Status</span>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    currentProject.status === 'Completed' 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-blue-100 text-blue-800'
                  }`}>
                    {currentProject.status}
                  </span>
                </div>
                <div className="flex justify-between border-b border-gray-200 py-3">
                  <span className="font-medium">Area</span>
                  <span>{currentProject.area}</span>
                </div>
                <div className="flex justify-between border-b border-gray-200 py-3">
                  <span className="font-medium">Type</span>
                  <span>{currentProject.type}</span>
                </div>
                <div className="flex justify-between border-b border-gray-200 py-3">
                  <span className="font-medium">Location</span>
                  <span>{currentProject.location}</span>
                </div>
              </div>
              <img 
                src={currentProject.mainImage} 
                alt={currentProject.name} 
                className="w-full h-auto rounded-lg shadow-lg" 
              />
            </div>

            <div className="space-y-8 reveal-on-scroll">
              {currentProject.content}
            </div>
          </div>

          <div className="flex justify-between pt-8 border-t border-gray-200">
            {currentProject.id === 1 ? (
              <Button 
                variant="outline"
                className="flex items-center space-x-2"
                onClick={() => navigate(`/project/${prevProjectId}`)}
              >
                <ArrowLeft size={16} />
                <span>Previous Project</span>
              </Button>
            ) : (
              <Button 
                variant="outline"
                className="flex items-center space-x-2"
                onClick={() => navigate(`/project/${prevProjectId}`)}
              >
                <ArrowLeft size={16} />
                <span>Previous Project</span>
              </Button>
            )}

            {currentProject.id === 2 ? (
              <Button 
                variant="outline"
                className="flex items-center space-x-2"
                onClick={() => navigate(`/project/${nextProjectId}`)}
              >
                <span>Next Project</span>
                <ArrowRight size={16} />
              </Button>
            ) : (
              <Button 
                variant="outline"
                className="flex items-center space-x-2"
                onClick={() => navigate(`/project/${nextProjectId}`)}
              >
                <span>Next Project</span>
                <ArrowRight size={16} />
              </Button>
            )}
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default ProjectDetail;
