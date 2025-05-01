
import React, { useEffect } from "react";
import MainLayout from "../../layouts/MainLayout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const AdityaGoldPlatinum: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <MainLayout>
      {/* SECTION 1: Project Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2 order-2 lg:order-1">
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
                    <span className="font-semibold">45,000 sq. ft.</span>
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
            
            <div className="lg:w-1/2 order-1 lg:order-2">
              <img 
                src="/lovable-uploads/f355db18-0121-4ef2-a413-139a9392dc29.png" 
                alt="Aditya Gold & Platinum Building" 
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: Project Introduction */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-700 mb-8">
              Discover our exquisite portfolio of residential marvels that redefine contemporary living. 
              From sprawling apartments to elegant townhouses, each project is meticulously designed, 
              blending sophistication with functionality. Our flagship projects in Visakhapatnam showcase 
              our dedication to creating homes that resonate with discerning homebuyers. Explore our 
              ventures and find your perfect abode amidst unparalleled elegance and modernity.
            </p>

            <img 
              src="/lovable-uploads/c68bc622-0aba-42b7-b269-7caf5c36375c.png" 
              alt="Aditya Gold" 
              className="w-full h-auto rounded-lg shadow-lg mt-6 mb-6"
            />
          </div>
        </div>
      </section>

      {/* SECTION 3: Luxury Description */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-700 mb-8">
              Step into a world of unmatched luxury and behold the breathtaking sea views 
              every day from our opulent 3 BHK apartments at Aditya Gold & Aditya Platinum 
              in Sagar Nagar, Visakhapatnam. The project offers unparalleled comfort and 
              sophistication, making it the perfect choice.
            </p>
            <p className="text-lg text-gray-700 mb-8">
              With its prime location, elegant interiors, and world-class amenities, 
              Aditya Gold & Platinum is the epitome of refined living. Experience the 
              ultimate in luxury and indulge in a lifestyle of pure opulence.
            </p>
            
            <h2 className="text-2xl font-semibold mb-6 font-poppins text-primary">
              The action is at the terrace
            </h2>
          </div>
        </div>
      </section>

      {/* SECTION 4: Lifestyle & Terrace Features */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <img 
                src="/lovable-uploads/0b9a578c-06b6-4cb5-9f3a-46cb3c2ea311.png" 
                alt="Aditya Jogging Track" 
                className="w-full h-64 object-cover rounded-lg shadow-md"
              />
              <img 
                src="/lovable-uploads/4378314e-8fc2-40b2-b199-ad9af104ed5c.png" 
                alt="Aditya Terrace Garden" 
                className="w-full h-64 object-cover rounded-lg shadow-md"
              />
            </div>
            
            <p className="text-lg text-gray-700 mb-8">
              Aditya Gold & Platinum presents a verdant haven where you can revitalise your body and soul. 
              Our sprawling terrace gardens boast a synthetic jogging track to invigorate you, a barbecue 
              corner to tantalise your taste buds, and a dedicated play area for your children. Relax amidst 
              the lush greenery and scenic views from the sit-outs, and soak in the tranquil ambiance. 
              Here, forget the stress of everyday life and relive moments of pure bliss.
            </p>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4 font-poppins text-primary">Amenities</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                      <path d="M18 8h1a4 4 0 0 1 0 8h-1"></path>
                      <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path>
                      <line x1="6" y1="1" x2="6" y2="4"></line>
                      <line x1="10" y1="1" x2="10" y2="4"></line>
                      <line x1="14" y1="1" x2="14" y2="4"></line>
                    </svg>
                  </div>
                  <span>Gymnasium</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                      <path d="M2 12c0-5.5 4.5-10 10-10s10 4.5 10 10-4.5 10-10 10c-2.6 0-5.2-.99-7.13-2.92L2 22l2.9-2.88A9.96 9.96 0 0 1 2 12Z"></path>
                    </svg>
                  </div>
                  <span>Synthetic Jogging Track</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                      <path d="M8 16a5 5 0 0 1 10 0"></path>
                      <circle cx="13" cy="7" r="3"></circle>
                      <path d="M21 16a3 3 0 0 1-6 0"></path>
                      <path d="M3 16a3 3 0 0 0 6 0"></path>
                    </svg>
                  </div>
                  <span>Landscaped Areas</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                      <path d="M8 2v4"></path>
                      <path d="M16 2v4"></path>
                      <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                      <path d="M3 10h18"></path>
                    </svg>
                  </div>
                  <span>Multi-purpose Hall</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                      <path d="M18 7V4a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h13"></path>
                      <path d="M8 12h6"></path>
                      <path d="M15 12v5.5a2.5 2.5 0 0 0 2.5 2.5 2.5 2.5 0 0 0 2.5-2.5V8.5a.5.5 0 0 1 1 0V12"></path>
                    </svg>
                  </div>
                  <span>Sit-out Zones</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                      <circle cx="12" cy="12" r="4"></circle>
                      <circle cx="12" cy="4" r="2"></circle>
                      <circle cx="20" cy="12" r="2"></circle>
                      <circle cx="12" cy="20" r="2"></circle>
                      <circle cx="4" cy="12" r="2"></circle>
                    </svg>
                  </div>
                  <span>Telescope For Stargazing</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: Navigation to Next Project */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto flex justify-end">
            <Link to="/projects/blue-horizon">
              <Button variant="outline" className="flex items-center gap-2 border-primary text-primary hover:bg-primary hover:text-white">
                Next Project <ArrowRight size={16} />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default AdityaGoldPlatinum;
