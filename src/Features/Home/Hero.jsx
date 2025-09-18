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

      {/* Full-width background container */}
      <section
        className="bg-[url('https://images.unsplash.com/photo-1565008447742-97f6f38c985c?q=80&w=3431&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-no-repeat bg-center h-[30rem] lg:h-[40rem] animate__animated animate__zoomIn"
      >
        {/* Content container with vertical centering and consistent padding */}
        <main className="container mx-auto flex items-center justify-center md:justify-start h-full px-4 lg:px-16 2xl:px-0">
          {/* Card with vertically centered contents */}
          <div className="w-full md:w-[550px] md:h-[320px] flex flex-col justify-center text-center md:text-left bg-white/80 p-4 rounded-md animate__animated animate__backInDown">
            <h1
              className="text-3xl md:text-4xl font-bold text-[#006A51] mb-6 leading-tight animate__animated animate__backInUp animate__slow"
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
              className="bg-[#006A51] text-white px-6 py-3 rounded hover:bg-[#004D3A] transition w-fit mx-auto md:mx-0"
              aria-label="Hire Us"
              onClick={handleHireUsClick}
            >
              Hire Us
            </button>
          </div>
        </main>
      </section>
    </>
  );
};

export default Hero;