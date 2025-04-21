
import React from "react";
import MainLayout from "../../layouts/MainLayout";
import { Link } from "react-router-dom";

const Vodafone: React.FC = () => (
  <MainLayout>
    <section className="section-padding bg-white">
      <div className="container mx-auto max-w-3xl">
        <h1 className="text-3xl md:text-4xl font-bold font-poppins mb-8 text-primary">
          Our Journey – From Aditya Technocrats to Vision Developers
        </h1>
        <div className="mb-8">
          <p className="mb-6 text-lg text-gray-800">
            Vision Developers, originally founded as Aditya Technocrats in 2002, has grown from a modest engineering service provider into a trusted name in the telecom infrastructure space.
          </p>
          <p className="mb-6 text-lg text-gray-800">
            In our formative years, we partnered with industry giants like Vodafone, contributing to the backbone of mobile communication by installing and commissioning cellphone towers across multiple regions. Our commitment to precision, safety, and timely execution earned us recognition and laid the foundation for the values we uphold today.
          </p>
          <img
            src="/lovable-uploads/d7bbd542-45b3-4e39-bd60-882a74dde0f8.png"
            alt="Cellphone Towers"
            className="w-full max-h-72 object-contain mb-6 rounded-lg shadow-md"
            style={{ background: "#fafafd" }}
          />
          <p className="mb-6 text-lg text-gray-800">
            Over the years, we have evolved with the changing landscape of technology and infrastructure, yet our core remains rooted in quality, innovation, and a forward-thinking approach.
          </p>
          <p className="text-lg text-gray-800">
            Today, as Vision Developers, we continue to expand our horizons—driven by the same passion and dedication that marked our beginnings. With every project, we reaffirm our promise to deliver excellence and build with purpose.
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

export default Vodafone;
