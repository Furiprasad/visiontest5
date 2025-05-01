
import React, { useEffect } from "react";
import MainLayout from "../../layouts/MainLayout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const BlueHorizon: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <MainLayout>
      {/* Main Content Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <h1 className="text-3xl md:text-4xl font-bold font-poppins mb-8 text-primary">
                Bespoke Development Of Luxury Residences
              </h1>
              
              <div className="bg-gray-50 p-6 rounded-lg shadow-sm mb-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex flex-col">
                    <span className="text-gray-500 text-sm">Status</span>
                    <span className="font-semibold">Under Construction</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-gray-500 text-sm">Area</span>
                    <span className="font-semibold">40,000 sq. ft.</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-gray-500 text-sm">Type</span>
                    <span className="font-semibold">Residential Apartments</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-gray-500 text-sm">Location</span>
                    <span className="font-semibold">Sagarnagar, Visakhapatnam</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="lg:w-1/2">
              <img 
                src="/lovable-uploads/a8449454-7955-4944-b12f-3756ccbdbf9f.png" 
                alt="Blue Horizon Building" 
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold font-poppins mb-6 text-primary text-center">
              Welcome to Blue Horizon
            </h2>
            
            <p className="text-lg text-gray-700 mb-8 text-center">
              Welcome to Blue Horizon, an exclusive apartment project by Vision Developers. 
              Designed to cater to your dreams of luxurious living, Blue Horizon offers 20 elegant 
              sea-view apartments that redefine comfort and elegance.
            </p>

            <img 
              src="/lovable-uploads/e79d5f9e-a16b-43c1-ba01-70ea0381cb45.png" 
              alt="Blue Horizon Aerial View" 
              className="w-full h-auto rounded-lg shadow-lg mt-6 mb-6"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-4 font-poppins text-primary">Unparalleled Views</h3>
                <p className="text-gray-700">
                  Experience breathtaking sea views every day from your balcony. 
                  At Blue Horizon, nature meets modern luxury to create an exceptional lifestyle.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-4 font-poppins text-primary">Prime Location</h3>
                <p className="text-gray-700">
                  Situated in the serene neighborhood of Sagar Nagar, near the prestigious 
                  Radisson Blu Hotel, Blue Horizon places you in the heart of convenience.
                </p>
              </div>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm mb-8">
              <h3 className="text-xl font-semibold mb-4 font-poppins text-primary">Close Proximity to:</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                <li className="flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                    <polyline points="9 11 12 14 22 4"></polyline>
                    <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
                  </svg>
                  <span>GITAM University</span>
                </li>
                <li className="flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                    <polyline points="9 11 12 14 22 4"></polyline>
                    <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
                  </svg>
                  <span>TTD Temple</span>
                </li>
                <li className="flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                    <polyline points="9 11 12 14 22 4"></polyline>
                    <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
                  </svg>
                  <span>Renowned hospitals</span>
                </li>
                <li className="flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                    <polyline points="9 11 12 14 22 4"></polyline>
                    <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
                  </svg>
                  <span>Popular tourist attractions</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation Button */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto flex justify-start">
            <Link to="/projects/aditya-gold-platinum">
              <Button variant="outline" className="flex items-center gap-2 border-primary text-primary hover:bg-primary hover:text-white">
                <ArrowLeft size={16} /> Previous Project
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default BlueHorizon;
