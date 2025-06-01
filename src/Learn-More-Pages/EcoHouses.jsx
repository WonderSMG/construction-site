import React from "react";
import ecoHero from "../assets/ecoHero.png";
import ecointerior1 from "../assets/ecointerior1.png";
import ecoExterior from "../assets/ecoExterior.png";
import { useNavigate } from "react-router-dom";

const EcoHouses = () => {
  const navigate = useNavigate();

  const handleNavigateToContact = () => {
    navigate("/contact");
  };
  return (
    <div className="px-6 py-10 max-w-5xl mx-auto">
      {/* Hero Section with Hover + Responsive Text */}
      <div className="relative w-full h-[400px] rounded-xl overflow-hidden shadow-lg mb-10 group">
        <img
          src={ecoHero}
          alt="Eco house exterior"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 animate__animated animate__backInUp"
        />

        {/* Desktop Text */}
        <div className="absolute inset-0 hidden lg:flex items-center justify-center">
          <div className="bg-white/10 backdrop-blur-md rounded-xl text-center text-white transition-opacity duration-500 group-hover:opacity-0 shadow-md px-4 py-6 w-[90%] max-w-md">
            <h1 className="text-2xl lg:text-4xl font-bold drop-shadow-md text-[#006A51]">
              Eco-Friendly Homes
            </h1>
            <p className="text-gray-100 mt-2 text-sm lg:text-base drop-shadow-sm">
              Smart, sustainable living built with the future in mind.
            </p>
          </div>
        </div>

        {/* Mobile Text */}
        <div className="lg:hidden absolute bottom-0 left-0 right-0 bg-white/90 text-[#006A51] px-4 py-4 text-center">
          <h1 className="text-xl font-bold">Eco-Friendly Homes</h1>
          <p className="text-sm mt-1 text-gray-800">
            Smart, sustainable living built with the future in mind.
          </p>
        </div>
      </div>

      {/* Intro */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3 text-[#006A51]">
          What Are Eco Houses?
        </h2>
        <p>
          Eco houses are designed to minimize environmental impact and maximize
          energy efficiency. These homes prioritize natural materials, solar
          power, and smart water systems to create a better future for both
          homeowners and the planet.
        </p>
      </section>

      {/* Why Build an Eco House? */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3 text-[#006A51]">
          Why Build an Eco House?
        </h2>
        <ul className="list-disc pl-6 marker:text-[#006A51]">
          <li>Lower utility bills through renewable energy</li>
          <li>Healthier living with non-toxic materials</li>
          <li>Support for a cleaner, greener future</li>
          <li>Smart technologies for better resource management</li>
        </ul>
      </section>

      {/* How We Build It */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3 text-[#006A51]">
          Our Signature Approach
        </h2>
        <p>
          We integrate passive design, solar panels, and sustainable materials
          into every eco house we create. Each project is tailored to reduce
          your carbon footprint without compromising on modern design and
          comfort.
        </p>
      </section>

      {/* Gallery */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3 text-[#006A51]">Gallery</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <img
            src={ecointerior1}
            alt="Eco interior 1"
            className="h-80 rounded-lg object-cover w-full"
          />
          <img
            src={ecoExterior}
            alt="EcoExterior "
            className="h-80 rounded-lg object-cover w-full"
          />
        </div>
      </section>

      {/* CTA */}
      <div className="text-center mt-10">
        <button onClick={handleNavigateToContact} className="bg-[#006A51] text-white py-3 px-6 rounded-lg shadow hover:bg-white hover:text-[#006A51] font-bold transition">
          Start Building Green
        </button>
      </div>
    </div>
  );
};

export default EcoHouses;
