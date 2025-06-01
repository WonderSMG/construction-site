// import React from "react";
// import officeBuilding from "../assets/office buildings.png";
// import mansion from "../assets/mansions.png";
// import ecoHouse from "../assets/eco-houses.png";
// import { Link } from "react-router-dom";

// const Services = () => {
//   return (
//     <>
//       <main className="mt-14 px-4 sm:px-6 md:px-10">
//         <section>
//           <div className="text-center">
//             <h1 className="font-semibold mb-4 text-[24px] sm:text-[28px] md:text-[32px]">
//               Our Services
//             </h1>
//             <p className="text-sm sm:text-base md:text-base">
//               Let's partner up and start realizing your dream building
//             </p>
//           </div>
//         </section>

//         {/* Office buildings section */}
//         <section className="grid grid-cols-1 sm:grid-cols-2 items-start gap-8 w-full sm:w-[90%] md:w-[80%] mx-auto p-6 mt-10">
//           {/* Image */}
//           <div className="flex justify-center">
//             <img
//               src={officeBuilding}
//               alt="Office Building"
//               className="w-full max-w-[300px] sm:max-w-[400px] md:max-w-none object-contain"
//             />
//           </div>
//           {/* Text Content */}
//           <div className="w-full sm:w-[400px] md:w-[525px] text-center sm:text-left">
//             <h5 className="font-semibold mb-4 text-lg sm:text-xl md:text-xl">
//               Office buildings
//             </h5>
//             <p className="text-sm sm:text-base md:text-base">
//               We build elegant office buildings that can be custom-made to suit
//               your office needs at an affordable price.
//             </p>
//             <Link to="/office-buildings">
//             <button className="bg-[#006A51] text-white px-4 py-2 rounded hover:bg-[#004D3A] mt-3 transition">
//               Learn More
//             </button>
//             </Link>
//           </div>
//         </section>

//         <hr className="border-t-[.1px] border-[#3B4A3F] w-full sm:w-[90%] md:w-[80%] mx-auto" />

//         {/* Mansion section */}
//         <section className="grid grid-cols-1 sm:grid-cols-2 items-start gap-8 w-full sm:w-[90%] md:w-[80%] mx-auto p-6 mt-10">
//           {/* Text Content */}
//           <div className="w-full sm:w-[400px] md:w-[525px] text-center sm:text-left">
//             <h5 className="font-semibold mb-4 text-lg sm:text-xl md:text-xl">
//               Mansions
//             </h5>
//             <p className="text-sm sm:text-base md:text-base">
//               We build mansions that can be custom-made to suit your unique
//               preferences.
//             </p>
//             <Link to="/mansions">
//             <button className="bg-[#006A51] text-white px-4 py-2 rounded hover:bg-[#004D3A] mt-3 transition">
//               Learn More
//             </button>
//             </Link>
//           </div>
//           {/* Image */}
//           <div className="flex justify-center">
//             <img
//               src={mansion}
//               alt="Mansion"
//               className="w-full max-w-[300px] sm:max-w-[400px] md:max-w-none object-contain"
//             />
//           </div>
//         </section>

//         <hr className="border-t-[.1px] border-[#3B4A3F] w-full sm:w-[90%] md:w-[80%] mx-auto" />

//         {/* Eco houses section */}
//         <section className="grid grid-cols-1 sm:grid-cols-2 items-start gap-8 w-full sm:w-[90%] md:w-[80%] mx-auto p-6 mt-10">
//           {/* Image */}
//           <div className="flex justify-center">
//             <img
//               src={ecoHouse}
//               alt="Eco House"
//               className="w-full max-w-[300px] sm:max-w-[400px] md:max-w-none object-contain"
//             />
//           </div>
//           {/* Text Content */}
//           <div className="w-full sm:w-[400px] md:w-[525px] text-center sm:text-left">
//             <h5 className="font-semibold mb-4 text-lg sm:text-xl md:text-xl">
//               Eco Houses
//             </h5>
//             <p className="text-sm sm:text-base md:text-base">
//               We build houses that are eco-friendly and help bring a serene
//               environment for any outdoor activity.
//             </p>
//             <Link to="/eco-houses">
//             <button className="bg-[#006A51] text-white px-4 py-2 rounded hover:bg-[#004D3A] mt-3 transition">
//               Learn More
//             </button>
//             </Link>
//           </div>
//         </section>
//       </main>
//     </>
//   );
// };

// export default Services;


import React from "react";
import officeBuilding from "../assets/office buildings.png";
import mansion from "../assets/mansions.png";
import ecoHouse from "../assets/eco-houses.png";
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <main className="mt-14 px-4 sm:px-6 lg:px-20">
      <section className="text-center">
        <h1 className="font-semibold mb-4 text-2xl sm:text-3xl md:text-4xl">
          Our Services
        </h1>
        <p className="text-sm sm:text-base">
          Let's partner up and start realizing your dream building
        </p>
      </section>

      {/* Office buildings */}
      <section className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10 max-w-7xl mx-auto mt-16 px-4">
        <div className="flex justify-center">
          <img
            src={officeBuilding}
            alt="Office Building"
            className="w-full max-w-sm sm:max-w-md md:max-w-lg object-contain"
          />
        </div>
        <div className="text-center lg:text-left max-w-xl mx-auto">
          <h2 className="font-semibold mb-4 text-xl sm:text-2xl">Office Buildings</h2>
          <p className="text-sm sm:text-base">
            We build elegant office buildings that can be custom-made to suit your office needs at an affordable price.
          </p>
          <Link to="/office-buildings">
            <button className="bg-[#006A51] text-white px-5 py-2.5 rounded mt-4 hover:bg-[#004D3A] transition duration-200">
              Learn More
            </button>
          </Link>
        </div>
      </section>

      <hr className="my-12 border-t border-gray-300 w-full max-w-6xl mx-auto" />

      {/* Mansions */}
      <section className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10 max-w-7xl mx-auto px-4">
        <div className="text-center lg:text-left max-w-xl mx-auto">
          <h2 className="font-semibold mb-4 text-xl sm:text-2xl">Mansions</h2>
          <p className="text-sm sm:text-base">
            We build mansions that can be custom-made to suit your unique preferences.
          </p>
          <Link to="/mansions">
            <button className="bg-[#006A51] text-white px-5 py-2.5 rounded mt-4 hover:bg-[#004D3A] transition duration-200">
              Learn More
            </button>
          </Link>
        </div>
        <div className="flex justify-center">
          <img
            src={mansion}
            alt="Mansion"
            className="w-full max-w-sm sm:max-w-md md:max-w-lg object-contain"
          />
        </div>
      </section>

      <hr className="my-12 border-t border-gray-300 w-full max-w-6xl mx-auto" />

      {/* Eco Houses */}
      <section className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10 max-w-7xl mx-auto px-4 mb-20">
        <div className="flex justify-center">
          <img
            src={ecoHouse}
            alt="Eco House"
            className="w-full max-w-sm sm:max-w-md md:max-w-lg object-contain"
          />
        </div>
        <div className="text-center lg:text-left max-w-xl mx-auto">
          <h2 className="font-semibold mb-4 text-xl sm:text-2xl">Eco Houses</h2>
          <p className="text-sm sm:text-base">
            We build houses that are eco-friendly and help bring a serene environment for any outdoor activity.
          </p>
          <Link to="/eco-houses">
            <button className="bg-[#006A51] text-white px-5 py-2.5 rounded mt-4 hover:bg-[#004D3A] transition duration-200">
              Learn More
            </button>
          </Link>
        </div>
      </section>
    </main>
  );
};

export default Services;
