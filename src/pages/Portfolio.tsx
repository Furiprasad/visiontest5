import React from "react";
import MainLayout from "../layouts/MainLayout";
import { Link } from "react-router-dom";
const portfolioItems = [{
  id: 1,
  title: "East Coast Railways",
  image: "/lovable-uploads/0c8f906a-f4dc-4f8b-b1d5-02bf6de0a94b.png",
  link: "/projects/east-coast-railways",
  alt: "East Coast Railways"
}, {
  id: 2,
  title: "Piaggio (Vision Automobiles)",
  image: "/lovable-uploads/29adc0d4-cca9-42c6-8074-fcfecf714654.png",
  link: "/projects/piaggio",
  alt: "Piaggio (Vision Automobiles)"
}, {
  id: 3,
  title: "Vodafone (Vision Developers)",
  image: "/lovable-uploads/0d9ff37c-a1c9-4a59-8fb5-cc9c9287559e.png",
  link: "/projects/vodafone",
  alt: "Vodafone (Vision Developers)"
}, {
  id: 4,
  title: "Andhra Pradesh (Education Infra)",
  image: "/lovable-uploads/921e926f-a1fd-41f0-b7ac-73268c39b5fc.png",
  link: "/projects/andhra-pradesh",
  alt: "Andhra Pradesh (Education Infra)"
}];
const Portfolio: React.FC = () => <MainLayout>
    {/* Header Banner */}
    <section className="relative py-20 md:py-28 bg-primary">
      <div className="container mx-auto px-4 text-center text-white">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 font-poppins">Our Portfolio</h1>
        <p className="text-lg opacity-90">Showcasing our finest work and achievements</p>
      </div>
    </section>

    {/* Portfolio Grid */}
    <section className="section-padding">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {portfolioItems.map(item => <div key={item.id} className="relative rounded-xl shadow-lg overflow-hidden bg-white group transition transform hover:scale-[1.03] hover:shadow-xl">
              <img src={item.image} alt={item.alt} className="w-full h-64 object-contain bg-gray-50" loading="lazy" />
              <div className="absolute bottom-0 right-0 p-3">
                <Link to={item.link} className="inline-block bg-primary text-white text-sm px-4 py-2 rounded shadow hover:bg-secondary transition font-semibold">
                  View More...
                </Link>
              </div>
              <div className="px-5 py-3">
                
              </div>
            </div>)}
        </div>
      </div>
    </section>
  </MainLayout>;
export default Portfolio;