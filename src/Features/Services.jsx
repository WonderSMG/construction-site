import React from "react";
import officeBuilding from "../assets/office buildings.png";
import mansion from "../assets/mansions.png";
import ecoHouse from "../assets/eco-houses.png";

const Services = () => {
  return (
    <>
      <main className="mt-14 px-4 sm:px-6 md:px-10">
        <section>
          <div className="text-center">
            <h1 className="font-semibold mb-4 text-[24px] sm:text-[28px] md:text-[32px]">
              Our Services
            </h1>
            <p className="text-sm sm:text-base md:text-base">
              Let's partner up and start realizing your dream building
            </p>
          </div>
        </section>

        {/* Office buildings section */}
        <section className="grid grid-cols-1 sm:grid-cols-2 items-start gap-8 w-full sm:w-[90%] md:w-[80%] mx-auto p-6 mt-10">
          {/* Image */}
          <div className="flex justify-center">
            <img
              src={officeBuilding}
              alt="Office Building"
              className="w-full max-w-[300px] sm:max-w-[400px] md:max-w-none object-contain"
            />
          </div>
          {/* Text Content */}
          <div className="w-full sm:w-[400px] md:w-[525px] text-center sm:text-left">
            <h5 className="font-semibold mb-4 text-lg sm:text-xl md:text-xl">
              Office buildings
            </h5>
            <p className="text-sm sm:text-base md:text-base">
              We build elegant office buildings that can be custom-made to suit
              your office needs at an affordable price.
            </p>
            <button className="bg-[#006A51] text-white px-4 py-2 rounded hover:bg-[#004D3A] mt-3 transition">
              Learn More
            </button>
          </div>
        </section>

        <hr className="border-t-[.1px] border-[#3B4A3F] w-full sm:w-[90%] md:w-[80%] mx-auto" />

        {/* Mansion section */}
        <section className="grid grid-cols-1 sm:grid-cols-2 items-start gap-8 w-full sm:w-[90%] md:w-[80%] mx-auto p-6 mt-10">
          {/* Text Content */}
          <div className="w-full sm:w-[400px] md:w-[525px] text-center sm:text-left">
            <h5 className="font-semibold mb-4 text-lg sm:text-xl md:text-xl">
              Mansions
            </h5>
            <p className="text-sm sm:text-base md:text-base">
              We build mansions that can be custom-made to suit your unique
              preferences.
            </p>
            <button className="bg-[#006A51] text-white px-4 py-2 rounded hover:bg-[#004D3A] mt-3 transition">
              Learn More
            </button>
          </div>
          {/* Image */}
          <div className="flex justify-center">
            <img
              src={mansion}
              alt="Mansion"
              className="w-full max-w-[300px] sm:max-w-[400px] md:max-w-none object-contain"
            />
          </div>
        </section>

        <hr className="border-t-[.1px] border-[#3B4A3F] w-full sm:w-[90%] md:w-[80%] mx-auto" />

        {/* Eco houses section */}
        <section className="grid grid-cols-1 sm:grid-cols-2 items-start gap-8 w-full sm:w-[90%] md:w-[80%] mx-auto p-6 mt-10">
          {/* Image */}
          <div className="flex justify-center">
            <img
              src={ecoHouse}
              alt="Eco House"
              className="w-full max-w-[300px] sm:max-w-[400px] md:max-w-none object-contain"
            />
          </div>
          {/* Text Content */}
          <div className="w-full sm:w-[400px] md:w-[525px] text-center sm:text-left">
            <h5 className="font-semibold mb-4 text-lg sm:text-xl md:text-xl">
              Eco Houses
            </h5>
            <p className="text-sm sm:text-base md:text-base">
              We build houses that are eco-friendly and help bring a serene
              environment for any outdoor activity.
            </p>
            <button className="bg-[#006A51] text-white px-4 py-2 rounded hover:bg-[#004D3A] mt-3 transition">
              Learn More
            </button>
          </div>
        </section>
      </main>
    </>
  );
};

export default Services;