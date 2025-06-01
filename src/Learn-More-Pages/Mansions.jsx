import React from "react";
import mansionhero from "../assets/mansionHero.png";
import mansioninterior from "../assets/mansioninterior.png";
import mansioninterior2 from "../assets/mansioninterior2.png";
import { useNavigate } from "react-router-dom";

const Mansions = () => {
  const navigate = useNavigate();

  const handleNavigateToContact = () => {
    navigate("/contact");
  };
  return (
    <div className="px-6 py-10 max-w-5xl mx-auto">
      {/* Hero Section with Hover + Responsive Text */}
      <div className="relative w-full h-[400px] rounded-xl overflow-hidden shadow-lg mb-10 group">
        {/* Image */}
        <img
          src={mansionhero}
          alt="Luxury mansion exterior"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 animate__animated animate__backInUp"
        />

        {/* Glassmorphic Text (Desktop only) */}
        <div className="absolute inset-0 hidden lg:flex items-center justify-center">
          <div className="bg-white/10 backdrop-blur-md rounded-xl text-center text-white transition-opacity duration-500 group-hover:opacity-0 shadow-md px-4 py-6 w-[90%] max-w-md">
            <h1 className="text-2xl lg:text-4xl font-bold drop-shadow-md text-[#006A51]">
              Luxury Mansions
            </h1>
            <p className="text-gray-100 mt-2 text-sm lg:text-base drop-shadow-sm">
              Opulent, timeless homes crafted for those who demand the finest in
              life.
            </p>
          </div>
        </div>

        {/* Simple Bottom Text (Mobile/Tablet) */}
        <div className="lg:hidden absolute bottom-0 left-0 right-0 bg-white/90 text-[#006A51] px-4 py-4 text-center">
          <h1 className="text-xl font-bold">Luxury Mansions</h1>
          <p className="text-sm mt-1 text-gray-800">
            Opulent, timeless homes crafted for those who demand the finest in
            life.
          </p>
        </div>
      </div>

      {/* Intro */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3 text-[#006A51]">
          What Are Mansions?
        </h2>
        <p>
          Mansions are grand residences designed for luxury, space, and
          prestige. They’re more than homes—they’re statements of success,
          taste, and legacy.
        </p>
      </section>

      {/* Why Build a Mansion? */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3 text-[#006A51]">
          Why Build a Mansion?
        </h2>
        <ul className="list-disc pl-6 marker:text-[#006A51]">
          <li>Spacious living that redefines comfort</li>
          <li>Architectural brilliance that turns heads</li>
          <li>Custom features like pools, theaters, and private gyms</li>
          <li>Legacy homes that stand the test of time</li>
        </ul>
      </section>

      {/* How We Build It */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3 text-[#006A51]">
          Our Signature Approach
        </h2>
        <p>
          From Italian marble floors to smart home automation, we blend classic
          elegance with modern sophistication. Every mansion we build is a
          one-of-a-kind masterpiece.
        </p>
      </section>

      {/* Gallery */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3 text-[#006A51]">Gallery</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <img
            src={mansioninterior}
            alt="Mansion 1"
            className="h-80 rounded-lg object-cover w-full"
          />
          <img
            src={mansioninterior2}
            alt="Mansion 2"
            className="h-80 rounded-lg object-cover w-full"
          />
        </div>
      </section>

      {/* CTA */}
      <div className="text-center mt-10">
        <button onClick={handleNavigateToContact} className="bg-[#006A51] text-white py-3 px-6 rounded-lg shadow hover:bg-white hover:text-[#006A51] font-bold transition">
          Start Your Dream Mansion
        </button>
      </div>
    </div>
  );
};

export default Mansions;
