import React from 'react';
import officeHero from '../assets/officeHero.png'
import officeInterior from '../assets/officeInterior.png';
import officeInterior2 from '../assets/officeInterior2.png';
import { useNavigate } from "react-router-dom";


const OfficeBuildings = () => {
  const navigate = useNavigate();

  const handleNavigateToContact = () => {
    navigate("/contact");
  };
  return (
    <div className="px-6 py-10 max-w-5xl mx-auto">
      {/* Hero Section */}
<div className="relative w-full h-[400px] rounded-xl overflow-hidden shadow-lg mb-10 group">

  {/* Background Image */}
  <img 
    src={officeHero}
    alt="Modern office building" 
    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 animate__animated animate__backInUp"
  />

  {/* 🌟 Glassmorphic Text - Only on large screens and up */}
  <div className="absolute inset-0 hidden lg:flex items-center justify-center">
    <div className="bg-white/10 backdrop-blur-md rounded-xl text-center text-white transition-opacity duration-500 group-hover:opacity-0 shadow-md px-4 py-6 w-[90%] max-w-md">
      <h1 className="text-2xl lg:text-4xl font-bold drop-shadow-md text-[#006A51]">Office Buildings</h1>
      <p className="text-gray-100 mt-2 text-sm lg:text-base drop-shadow-sm">
        Modern, scalable workspaces built to boost productivity and collaboration.
      </p>
    </div>
  </div>

  {/* 📱 Simple Text Overlay (No glassmorphism) for Mobile/Tablet */}
  <div className="lg:hidden absolute bottom-0 left-0 right-0 bg-white/90 text-[#006A51] px-4 py-4 text-center">
    <h1 className="text-xl font-bold">Office Buildings</h1>
    <p className="text-sm mt-1 text-gray-800">
      Modern, scalable workspaces built to boost productivity and collaboration.
    </p>
  </div>
</div>

      {/* Intro */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3 text-[#006A51]">What are Office Buildings?</h2>
        <p>
          Office buildings are commercial structures designed for businesses to operate efficiently. 
          From small startups to large enterprises, these buildings are tailored to meet the demands 
          of modern workspaces.
        </p>
      </section>

      {/* Why It Matters */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3 text-[#006A51]">Why Build an Office Space?</h2>
        <ul className="list-disc pl-6 marker:text-[#006A51]">
          <li>Professional environment that impresses clients</li>
          <li>Collaborative spaces to boost team productivity</li>
          <li>Customizable layouts to suit your business</li>
          <li>Long-term asset for your organization</li>
        </ul>
      </section>

      {/* How You Build It */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3 text-[#006A51]">Our Construction Approach</h2>
        <p>
          We combine modern design with sustainable materials to deliver office buildings that are 
          future-ready. From planning to execution, we work closely with clients to bring their vision to life.
        </p>
      </section>

      {/* Gallery */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3 text-[#006A51]">Gallery</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <img 
            src={officeInterior} 
            alt="Office 1" 
            className="rounded-lg h-64 w-full object-cover"
          />
          <img 
            src={officeInterior2} 
            alt="Office 2" 
            className="rounded-lg h-64 w-full object-cover"
          />
        </div>
      </section>

      {/* Call to Action */}
      <div className="text-center mt-10">
        <button onClick={handleNavigateToContact} className="bg-[#006A51] text-white py-3 px-6 rounded-lg shadow hover:bg-white hover:text-[#006A51] font-bold transition">
          Start Your Project
        </button>
      </div>
    </div>
  );
};

export default OfficeBuildings;