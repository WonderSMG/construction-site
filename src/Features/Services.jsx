import React from "react";
import officeBuilding from "../assets/office buildings.png";
import mansion from "../assets/mansions.png";
import ecoHouse from "../assets/eco-houses.png";
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <main className="mt-14 w-full">
      <section className="text-center">
        <h1 className="xl:text-[54.85px] md:text-5xl font-[700] font-IBM text-[25.49px] text-[#013F1E] mb-4">Our Services</h1>
        <p className="text-normal">
          Let's partner up and start realizing your dream building
        </p>
      </section>

      {/* Office buildings */}
      <section className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10 w-11/12 my-16 container mx-auto">
        <div className="flex justify-center">
          <img
            src={officeBuilding}
            alt="Office Building"
            className="w-full object-contain "
          />
        </div>
        <div className="text-center lg:text-left mx-auto">
          <h2 className="font-semibold mb-4 text-2xl md:text-4xl">
            Office Buildings
          </h2>
          <p className="text-[16px] md:text-[20px]">
            We build elegant office buildings that can be custom-made to suit
            your office needs at an affordable price.
          </p>
          <Link to="/office-buildings">
            <button className="bg-[#006A51] text-white px-5 py-3 text-[16px] rounded mt-4 hover:bg-[#004D3A] transition duration-200 hover:cursor-pointer">
              Learn More
            </button>
          </Link>
        </div>
      </section>

      <hr className="my-12 border-t border-gray-300 w-full mx-auto" />

      {/* Mansions */}
      <section className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10 w-11/12 my-16 container mx-auto">
        <div className="text-center lg:text-left mx-auto hidden lg:block">
          <h2 className="font-semibold mb-4 text-2xl md:text-4xl">Mansions</h2>
          <p className="text-[16px] md:text-[20px]">
            We build mansions that can be custom-made to suit your unique
            preferences.
          </p>
          <Link to="/mansions">
            <button className="bg-[#006A51] text-white px-5 py-3 text-[16px] rounded mt-4 hover:bg-[#004D3A] transition duration-200 hover:cursor-pointer">
              Learn More
            </button>
          </Link>
        </div>
        <div className="flex justify-center">
          <img src={mansion} alt="Mansion" className="w-full object-contain" />
        </div>
        <div className="text-center lg:text-left mx-auto lg:hidden ">
          <h2 className="font-semibold mb-4 text-2xl md:text-4xl">Mansions</h2>
          <p className="text-[16px] md:text-[20px]">
            We build mansions that can be custom-made to suit your unique
            preferences.
          </p>
          <Link to="/mansions">
            <button className="bg-[#006A51] text-white px-5 py-3 text-[16px] rounded mt-4 hover:bg-[#004D3A] transition duration-200 hover:cursor-pointer">
              Learn More
            </button>
          </Link>
        </div>
      </section>

      <hr className="my-12 border-t border-gray-300 w-full mx-auto" />

      {/* Eco Houses */}
      <section className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10 w-11/12 my-16 container mx-auto">
        <div className="flex justify-center">
          <img
            src={ecoHouse}
            alt="Eco House"
            className="w-full object-contain"
          />
        </div>
        <div className="text-center lg:text-left mx-auto">
          <h2 className="font-semibold mb-4 text-2xl md:text-4xl">
            Eco Houses
          </h2>
          <p className="text-[16px] md:text-[20px]">
            We build houses that are eco-friendly and help bring a serene
            environment for any outdoor activity.
          </p>
          <Link to="/eco-houses">
            <button className="bg-[#006A51] text-white px-5 py-3 text-[16px] rounded mt-4 hover:bg-[#004D3A] transition duration-200 hover:cursor-pointer">
              Learn More
            </button>
          </Link>
        </div>
      </section>
    </main>
  );
};

export default Services;
