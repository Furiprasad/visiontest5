
import React from "react";
import MainLayout from "../../layouts/MainLayout";
import { Link } from "react-router-dom";

const Piaggio: React.FC = () => (
  <MainLayout>
    <section className="section-padding bg-white">
      <div className="container mx-auto max-w-3xl">
        <h1 className="text-3xl md:text-4xl font-bold font-poppins mb-8 text-primary">
          Vision Automobiles – Driven by Trust Since 2010
        </h1>

        <div className="flex flex-col md:flex-row gap-6 mb-8 items-start">
          <div className="flex-1">
            <p className="mb-6 text-lg text-gray-800">
              Welcome to Vision Automobiles<br/>
              Established in 2010 in the heart of Prakasam district, Andhra Pradesh, Vision Automobiles has grown into a trusted name in the automobile industry. With over a decade of dedication and excellence, we specialize in the sale of high-quality auto rickshaws and Appie vehicles, catering to the evolving transportation needs of our customers.
            </p>
          </div>
          <img
            src="/lovable-uploads/05916bad-fef3-4e65-a2e9-30402f88ae3a.png"
            alt="Auto Rickshaw"
            className="w-full md:w-72 h-48 object-contain rounded-lg shadow-md"
            style={{ maxWidth: 300 }}
          />
        </div>

        <div className="mb-8">
          <p className="mb-6 text-lg text-gray-800">
            At Vision Automobiles, we don’t just sell vehicles — we build relationships. Our commitment extends beyond sales with our well-equipped service center, providing reliable maintenance and repair services to ensure your vehicle remains road-ready at all times.
          </p>
          <img
            src="/lovable-uploads/48faa0f4-8837-4005-a403-828dcc406d25.png"
            alt="Appie Vehicle Service"
            className="w-full max-h-64 object-contain mb-4 rounded-lg shadow"
          />
        </div>
        <div className="mb-8">
          <p className="text-lg text-gray-800">
            Whether you're looking to buy a dependable auto or need expert servicing, Vision Automobiles is your one-stop destination for quality, trust, and value.
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

export default Piaggio;
