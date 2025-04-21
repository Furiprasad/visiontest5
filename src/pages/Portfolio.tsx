
import React, { useEffect } from "react";
import MainLayout from "../layouts/MainLayout";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const portfolioImages = [
  {
    id: 1,
    src: "/lovable-uploads/13ef268c-913e-4ec5-8fa9-9ad3472db409.png", // ec.jpg
    title: "East Coast Railway Infrastructure",
    description: "Railways, Bridges & Civil Structures – Excellence since 2002"
  },
  {
    id: 2,
    src: "/lovable-uploads/8e46d5b8-0412-46bd-a512-c50ea9bb16b6.png", // piaggio.jpg
    title: "Vision Automobiles",
    description: "Trusted Appie & Auto Dealer in Andhra Pradesh"
  },
  {
    id: 3,
    src: "/lovable-uploads/e3ee9053-5871-435e-a79b-aeeace890f24.png", // vd.jpg
    title: "Telecom & Tower Projects",
    description: "Expanding Communication Infrastructure"
  },
  {
    id: 4,
    src: "/lovable-uploads/32ad64d9-577a-4d6d-9a9a-4d3c9157b5db.png", // ap.jpg
    title: "Educational Infrastructure",
    description: "Community-centric School Building"
  }
];

const Portfolio: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <MainLayout>
      {/* Header Banner */}
      <section className="relative py-16 md:py-24 bg-primary">
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-poppins">
            Our Portfolio
          </h1>
          <p className="text-lg opacity-90">
            Exploring the scope of our work across sectors
          </p>
        </div>
      </section>
      {/* Responsive Grid Image Gallery */}
      <section className="section-padding">
        <div className="container mx-auto">
          <div
            className="
              grid gap-8
              grid-cols-1
              sm:grid-cols-2
              lg:grid-cols-4
              items-stretch
            "
          >
            {portfolioImages.map((item) => (
              <div
                key={item.id}
                className="
                  flex flex-col items-center justify-between
                  bg-white rounded-xl shadow-md hover:shadow-xl
                  transition-shadow duration-300
                  overflow-hidden
                  group
                "
              >
                <div className="w-full aspect-[4/3] flex justify-center items-center bg-gray-50">
                  <img
                    src={item.src}
                    alt={item.title}
                    className="
                      object-contain w-full h-full transition-transform duration-200
                      group-hover:scale-105
                    "
                  />
                </div>
                <div className="flex flex-col gap-2 text-center px-4 py-4 flex-1 w-full">
                  <h3 className="text-lg font-semibold font-poppins text-gray-900 mb-1">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-3 min-h-[40px]">
                    {item.description}
                  </p>
                  <Button
                    variant="default"
                    className="w-full mt-auto"
                    onClick={() => navigate(`/portfolio/${item.id}`)}
                  >
                    View Details
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default Portfolio;

