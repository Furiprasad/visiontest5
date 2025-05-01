
import React from "react";
import MainLayout from "../../layouts/MainLayout";
import { Link } from "react-router-dom";

const AndhraPradesh: React.FC = () => (
  <MainLayout>
    <section className="section-padding bg-white">
      <div className="container mx-auto max-w-3xl">
        <h1 className="text-3xl md:text-4xl font-bold font-poppins mb-8 text-primary">
          Vision Developers – Pioneering Community-Centric Development Since 2002
        </h1>
        <div className="flex flex-col md:flex-row gap-6 mb-8 items-start">
          <div className="flex-1">
            <p className="mb-6 text-lg text-gray-800">
              Vision Developers, formerly known as Aditya Technocrats, has been a trusted name in the construction and development sector since its inception in 2002. With humble beginnings rooted in a strong commitment to quality and social impact, we began our journey by partnering with the Andhra Pradesh Government to build residential schools aimed at empowering communities through education.
            </p>
          </div>
          <img
            src="/lovable-uploads/05668241-197f-4dac-891b-034a3ee77c0b.png"
            alt="School Project"
            className="w-full md:w-full h-auto object-cover rounded-lg shadow"
            style={{ maxWidth: 480 }}
          />
        </div>
        <div className="mb-8">
          <p className="mb-4 text-lg text-gray-800">
            Over the years, our dedication to precision, integrity, and innovation has helped us grow beyond public infrastructure projects, shaping spaces that blend functionality with vision. The foundation of our work has always been community-centric development, and our early contributions to educational infrastructure still stand as proud examples of our values in action.
          </p>
          <p className="text-lg text-gray-800">
            Our transformation from Aditya Technocrats to Vision Developers reflects more than just a name change—it signifies our evolution into a forward-thinking, purpose-driven organization committed to creating spaces that matter.
          </p>
        </div>
        <div className="flex justify-end mt-8">
          <Link
            to="/portfolio"
            className="inline-block bg-primary text-white px-6 py-2 rounded hover:bg-secondary shadow transition"
          >
            Back to Portfolio
          </Link>
        </div>
      </div>
    </section>
  </MainLayout>
);

export default AndhraPradesh;
