import React from "react";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  // JavaScript function to navigate to the Contact.jsx component
const handleHireUsClick = () => {
    navigate("/contact");
  
};  

  return (
    <>
      {/* SEO Meta Tags */}
      <Helmet>
        <title>Let's Build it Together - Pfrancesco Construction</title>
        <meta
          name="description"
          content="Building beautiful homes one dream at a time with solid foundations for a brighter future. Hire our expert team of builders and designers today!"
        />
        <meta name="keywords" content="construction, homes, building, eco-friendly, budget-friendly" />
        <meta name="author" content="Pfrancesco Construction" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Helmet>

      <main
        className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 mx-4 md:mx-10 p-6 mt-10 
        bg-[url('https://images.unsplash.com/photo-1565008447742-97f6f38c985c?q=80&w=3431&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-no-repeat bg-center h-[30rem] lg:h-[40rem]  bg-gray-100"
      >
        {/* Left Content */}
        <div className="w-full md:w-[494px] text-center md:text-left bg-white/80 p-4 rounded-md">
          <h1
            className="text-3xl md:text-4xl font-bold text-[#006A51] mb-6 leading-tight"
            aria-label="Let's Build it Together"
          >
            Let's Build it Together
          </h1>
          <p
            className="text-base md:text-lg text-gray-700 mb-6 leading-[28px]"
            aria-label="Building beautiful homes one dream at a time with solid foundations for a brighter future."
          >
            Building beautiful homes one dream at a time with solid foundations
            for a brighter future is our mission. Make your vision a reality
            with our expert team of builders and designers.
          </p>
          <button
            className="bg-[#006A51] text-white px-6 py-3 rounded hover:bg-[#004D3A] transition"
            aria-label="Hire Us"
            onClick={handleHireUsClick}
          >
            Hire Us
          </button>
        </div>

        {/* Right Content */}
        <div className="relative flex justify-center md:hidden">
          {/* Absolute texts visible only on desktop */}
          <p
            className="hidden lg:block absolute top-[10%] left-[20%] bg-[#3D3D3D] text-white rounded-2xl px-4 py-1 text-sm lg:text-base border-white border-t-2"
            aria-hidden="true"
          >
            Superior design
          </p>
          <p
            className="hidden lg:block absolute bottom-[10%] left-[10%] bg-[#3D3D3D] text-white rounded-2xl px-4 py-1 text-sm lg:text-base border-t-2"
            aria-hidden="true"
          >
            Budget friendly
          </p>
          <p
            className="hidden lg:block absolute bottom-[20%] right-[5%] bg-[#3D3D3D] text-white px-4 py-1 rounded-2xl text-sm lg:text-base border-t-2"
            aria-hidden="true"
          >
            Eco-friendly buildings
          </p>
        </div>
      </main>
    </>
  );
};

export default Hero;