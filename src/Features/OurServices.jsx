import React from "react";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";
import residentialImg from "../assets/mansions.png"; 
import commercialImg from "../assets/office buildings.png"; 
import realEstateImg from "../assets/eco-houses.png"; 
import projectImg from "../../src/assets/whatWeDoImg.png";

const OurServices = () => {
  const navigate = useNavigate();

  const handleContactClick = () => {
    navigate("/contact");
  };

  return (
    <>
      {/* SEO Meta Tags */}
      <Helmet>
        <title>Our Services - Pfrancesco Construction & Real Estate</title>
        <meta
          name="description"
          content="Explore Pfrancesco's construction and real estate services, including residential, commercial, and sustainable development solutions tailored to your needs."
        />
        <meta
          name="keywords"
          content="construction, real estate, eco-friendly buildings, residential, commercial, project management, Pfrancesco"
        />
        <meta name="author" content="Pfrancesco" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Helmet>

      {/* Hero Section */}
      <section
        className="bg-[url('https://images.unsplash.com/photo-1582407947304-fd86f028f716?q=80&w=3096&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-no-repeat bg-center h-[24rem] md:h-[30rem] lg:h-[36rem] flex items-center justify-center animate__animated animate__fadeIn"
      >
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-10 text-center bg-white/80 py-8 rounded-md">
          <h1
            className="text-3xl md:text-4xl font-bold text-[#006A51] mb-4 animate__animated animate__backInUp"
            aria-label="Our Services"
          >
            Our Services
          </h1>
          <p
            className="text-base md:text-lg text-gray-700 mb-6"
            aria-label="Discover Airavata's expert construction and real estate solutions"
          >
            Discover Pfrancesco's expert construction and real estate solutions, designed for durability and sustainability.
          </p>
          <button
            className="bg-[#006A51] text-white px-6 py-3 rounded hover:bg-[#004D3A] transition w-fit"
            aria-label="Contact Us"
            onClick={handleContactClick}
          >
            Contact Us
          </button>
        </div>
      </section>

      {/* Services Grid */}
      <section className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-10 py-12 bg-[#F1FFF5]">
        <h2 className="text-2xl md:text-3xl font-semibold text-center text-[#006A51] mb-8">
          What We Offer
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Service 1: Residential Construction */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition animate__animated animate__fadeInUp">
            <img
              src={residentialImg}
              alt="Residential Construction"
              className="w-16 h-16 mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold text-[#006A51] text-center">
              Residential Construction
            </h3>
            <p className="text-gray-600 text-center mt-2">
              Building eco-friendly, durable homes tailored to your vision, with top-quality craftsmanship.
            </p>
          </div>
          {/* Service 2: Commercial Development */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition animate__animated animate__fadeInUp animate__delay-1s">
            <img
              src={commercialImg}
              alt="Commercial Development"
              className="w-16 h-16 mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold text-[#006A51] text-center">
              Commercial Development
            </h3>
            <p className="text-gray-600 text-center mt-2">
              Creating innovative commercial spaces that inspire and meet business needs.
            </p>
          </div>
          {/* Service 3: Real Estate Investment */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition animate__animated animate__fadeInUp animate__delay-2s">
            <img
              src={realEstateImg}
              alt="Real Estate Investment"
              className="w-16 h-16 mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold text-[#006A51] text-center">
              Real Estate Investment
            </h3>
            <p className="text-gray-600 text-center mt-2">
              Strategic property acquisition and development to maximize value and returns.
            </p>
          </div>
          {/* Service 4: Project Management */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition animate__animated animate__fadeInUp animate__delay-3s">
            <img
              src={projectImg}
              alt="Project Management"
              className="w-16 h-16 mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold text-[#006A51] text-center">
              Project Management
            </h3>
            <p className="text-gray-600 text-center mt-2">
              Seamless project execution, ensuring timelines, budgets, and quality standards are met.
            </p>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-10 py-12 bg-white">
        <h2 className="text-2xl md:text-3xl font-semibold text-center text-[#006A51] mb-8">
          Why Choose Pfrancesco?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="text-center">
            <h3 className="text-xl font-semibold text-[#006A51] mb-4">
              Sustainability
            </h3>
            <p className="text-gray-600">
              We use eco-friendly materials and energy-efficient designs to reduce environmental impact.
            </p>
          </div>
          <div className="text-center">
            <h3 className="text-xl font-semibold text-[#006A51] mb-4">
              Client-Centric Approach
            </h3>
            <p className="text-gray-600">
              Your vision drives our work, with tailored solutions and transparent communication.
            </p>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="bg-[#004D3A] py-8">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-10 text-center">
          <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4">
            Ready to Build Your Future?
          </h2>
          <button
            className="bg-white text-[#006A51] px-6 py-3 rounded hover:bg-gray-200 transition w-fit"
            aria-label="Get Started"
            onClick={handleContactClick}
          >
            Get Started
          </button>
        </div>
      </section>
    </>
  );
};

export default OurServices;