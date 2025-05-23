import React from "react";
import MainLayout from "../../layouts/MainLayout";
import { Link } from "react-router-dom";
const EastCoastRailways: React.FC = () => <MainLayout>
    <section className="section-padding bg-white">
      <div className="container mx-auto max-w-3xl">
        <h1 className="text-3xl md:text-4xl font-bold font-poppins mb-8 text-primary">
          Vision Developers – Building Infrastructure Since 2002
        </h1>

        <div className="flex flex-col md:flex-row gap-6 mb-8 items-start">
          <div className="flex-1">
            <p className="mb-6 text-lg text-gray-800">
              Vision Developers, formerly known as Aditya Technocrats, is a trusted name in infrastructure and civil engineering. Since our founding in 2002, we have been instrumental in executing key infrastructure projects, particularly in the East Coast Railways sector.
            </p>
          </div>
          <img alt="Train" className="w-full md:w-72 h-48 object-cover rounded-lg shadow-md" style={{
          maxWidth: 300
        }} src="/lovable-uploads/698133bd-b2e8-40d7-8bf6-8cc12670c3f4.jpg" />
        </div>

        <div className="mb-8">
          <p className="mb-6 text-lg text-gray-800">
            With a proven track record in constructing durable railway bridges, culverts, and various civil structures, we take pride in our contribution to building the backbone of regional connectivity. Every project we deliver reflects our commitment to quality, innovation, and long-term value.
          </p>
          <img alt="Railway Bridge" className="w-full max-h-64 object-cover mb-4 rounded-lg shadow" src="/lovable-uploads/21d2fc35-2ec2-4261-b007-20109f0a2260.jpg" />
        </div>
        <div className="mb-8">
          <p className="mb-4 text-lg text-gray-800">
            Our evolution from Aditya Technocrats to Vision Developers represents not just a rebranding, but a reimagining of our goals—to lead with vision, deliver with integrity, and build with purpose. Backed by an experienced team and over two decades of expertise, we continue to expand our capabilities while upholding the highest standards of safety, sustainability, and engineering excellence.
          </p>
          <p className="text-lg text-gray-800">
            At Vision Developers, we don’t just build structures—we build lasting partnerships and infrastructure that supports the progress of future generations.
          </p>
        </div>
        <div className="flex justify-end mt-8">
          <Link to="/portfolio" className="inline-block bg-primary text-white px-6 py-2 rounded hover:bg-secondary shadow transition">
            Back to Portfolio
          </Link>
        </div>
      </div>
    </section>
  </MainLayout>;
export default EastCoastRailways;