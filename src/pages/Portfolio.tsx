import React, { useEffect } from 'react';
import MainLayout from '../layouts/MainLayout';
const Portfolio: React.FC = () => {
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
  const portfolioItems = [{
    id: 1,
    title: "Luxury Residential Complex",
    category: "Residential",
    image: "/lovable-uploads/5e90ec59-eb61-4111-8349-0c5783d63349.png"
  }, {
    id: 2,
    title: "Modern Office Building",
    category: "Commercial",
    image: "/lovable-uploads/69ad697d-6e68-4911-a83d-8d2833104d02.png"
  }, {
    id: 3,
    title: "Waterfront Development",
    category: "Infrastructure",
    image: "/lovable-uploads/4fe120fb-d1f3-43d9-9545-35d1dee61713.png"
  }, {
    id: 4,
    title: "Urban Apartment Complex",
    category: "Residential",
    image: "/lovable-uploads/0117bda7-81b6-4e64-9372-e67e72e4284f.png"
  }];
  return <MainLayout>
      {/* Header Banner */}
      <section className="relative py-20 md:py-28 bg-primary">
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-poppins">Our Portfolio</h1>
          <p className="text-lg opacity-90">Showcasing our finest work and achievements</p>
        </div>
      </section>

      {/* Portfolio Gallery */}
      <section className="section-padding">
        <div className="container mx-auto">
          {/* Filter Categories */}
          <div className="flex flex-wrap justify-center mb-12">
            <button className="px-6 py-2 m-2 bg-primary text-white rounded-full transition duration-300">
              All
            </button>
            <button className="px-6 py-2 m-2 bg-white border border-gray-300 text-gray-700 hover:bg-gray-100 rounded-full transition duration-300">
              Residential
            </button>
            <button className="px-6 py-2 m-2 bg-white border border-gray-300 text-gray-700 hover:bg-gray-100 rounded-full transition duration-300">
              Commercial
            </button>
            <button className="px-6 py-2 m-2 bg-white border border-gray-300 text-gray-700 hover:bg-gray-100 rounded-full transition duration-300">
              Infrastructure
            </button>
          </div>

          {/* Portfolio Items */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {portfolioItems.map((item, index) => <div key={item.id} className="group relative overflow-hidden rounded-lg shadow-md reveal-on-scroll" style={{
            transitionDelay: `${index * 100}ms`
          }}>
                <img src={item.image} alt={item.title} className="w-full h-72 object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent p-6 flex flex-col justify-end">
                  <span className="text-accent text-sm font-medium">{item.category}</span>
                  <h3 className="text-white text-xl font-semibold">{item.title}</h3>
                </div>
                <div className="absolute inset-0 bg-primary/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="text-center p-4">
                    <h3 className="text-white text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-white/90 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <button className="px-4 py-2 bg-white text-primary font-medium rounded hover:bg-gray-100 transition">
                      View Details
                    </button>
                  </div>
                </div>
              </div>)}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div className="reveal-on-scroll">
              <h3 className="text-4xl font-bold text-accent mb-2">65+</h3>
              <p className="text-gray-300">Projects Completed</p>
            </div>
            <div className="reveal-on-scroll" style={{
            transitionDelay: '100ms'
          }}>
              <h3 className="text-4xl font-bold text-accent mb-2">20+</h3>
              <p className="text-gray-300">Years Experience</p>
            </div>
            <div className="reveal-on-scroll" style={{
            transitionDelay: '200ms'
          }}>
              <h3 className="text-4xl font-bold text-accent mb-2">85+</h3>
              <p className="text-gray-300">Happy Clients</p>
            </div>
            <div className="reveal-on-scroll" style={{
            transitionDelay: '300ms'
          }}>
              <h3 className="text-4xl font-bold text-accent mb-2">10+</h3>
              <p className="text-gray-300">Industry Awards</p>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>;
};
export default Portfolio;