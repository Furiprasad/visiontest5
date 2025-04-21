
import React from "react";
import MainLayout from "../layouts/MainLayout";
import { Link } from "react-router-dom";

const images = [
  {
    src: "/lovable-uploads/ec.jpg",
    alt: "East Coast Railways",
    link: "/projects/east-coast-railways.html",
  },
  {
    src: "/lovable-uploads/piaggio.jpg",
    alt: "Vision Automobiles",
    link: "/projects/piaggio.html",
  },
  {
    src: "/lovable-uploads/vd.jpg",
    alt: "Vision Developers Telecom",
    link: "/projects/vodafone.html",
  },
  {
    src: "/lovable-uploads/ap.jpg",
    alt: "Vision Developers Education Infra",
    link: "/projects/andhra-pradesh.html",
  },
];

const Portfolio: React.FC = () => (
  <MainLayout>
    {/* Header Banner */}
    <section className="relative py-20 md:py-28 bg-primary">
      <div className="container mx-auto px-4 text-center text-white">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 font-poppins">Our Portfolio</h1>
        <p className="text-lg opacity-90">Showcasing our finest work and achievements</p>
      </div>
    </section>

    {/* Image Grid Section */}
    <section className="section-padding">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {images.map(({ src, alt, link }, idx) => (
            <Link
              to={link}
              key={idx}
              className="group relative block rounded-xl overflow-hidden shadow-lg transition transform hover:scale-105 bg-white"
              style={{ minHeight: "18rem" }}
            >
              <img
                src={src}
                alt={alt}
                className="w-full h-64 object-cover transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 flex items-center justify-center 
                bg-[#000000e6] bg-opacity-0 group-hover:bg-opacity-80 
                opacity-0 group-hover:opacity-100 transition-all duration-300
                rounded-xl 
                cursor-pointer"
                style={{ pointerEvents: "none" }}
              >
                <span className="text-white text-xl md:text-2xl font-semibold font-poppins drop-shadow" style={{ pointerEvents: "auto" }}>
                  View More...
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  </MainLayout>
);

export default Portfolio;
