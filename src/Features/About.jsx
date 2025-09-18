import React from "react";
import visionImg from "../assets/vision.svg";
import missionImg from "../assets/mission.svg";
import Paulfrancesco from "../assets/PaulFrancesco.jpg";
import LucasBrooks from "../assets/LucasBrooks.jpg";
import MaryFred from "../assets/MaryFred.jpg";
import polygonImg from "../assets/Polygon 1.png";
import WhatWeDo from "../Components/WhatWeDo";

const About = () => {
  return (
    <>
      <main className="bg-[#F1FFF5] md:my-16">
        <WhatWeDo/>
        <section className="container mx-auto py-10 px-4 sm:px-6 md:px-8 lg:px-10">
          
          
          <h4 className="text-[24px] md:text-4xl text-center font-medium my-0 md:my-10">
            Meet our leaders
          </h4>
          <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-10 px-4">
            <div className="text-center">
              {/* Polygon Background */}
              <div className="relative w-[150px] h-[150px] md:w-[220px] md:h-[220px] mx-auto">
                <img
                  className="absolute top-0 left-0 w-full h-full"
                  src={polygonImg}
                  alt="polygonImg"
                />
                {/* Leader Image */}
                <img
                  className="absolute top-[10%] left-[10%] w-[80%] h-[80%] object-cover clip-hexagon"
                  src={Paulfrancesco}
                  alt="leaderImg"
                />
              </div>
              <p className="font-semibold mt-6">Paul Francesco</p>
              <p className="text-gray-600 text-md">CEO & Co-founder</p>
            </div>
            <div className="text-center">
              <div className="relative w-[150px] h-[150px] md:w-[220px] md:h-[220px] mx-auto">
                <img
                  className="absolute top-0 left-0 w-full h-full"
                  src={polygonImg}
                  alt="polygonImg"
                />
                <img
                  className="absolute top-[10%] left-[10%] w-[80%] h-[80%] object-cover clip-hexagon"
                  src={LucasBrooks}
                  alt="leaderImg"
                />
              </div>
              <p className="font-semibold mt-6">Lucas Brooks</p>
              <p className="text-gray-600 text-md">Chief Architect</p>
            </div>
            <div className="text-center">
              <div className="relative w-[150px] h-[150px] md:w-[220px] md:h-[220px] mx-auto">
                <img
                  className="absolute top-0 left-0 w-full h-full"
                  src={polygonImg}
                  alt="polygonImg"
                />
                <img
                  className="absolute top-[10%] left-[10%] w-[80%] h-[80%] object-cover clip-hexagon"
                  src={MaryFred}
                  alt="leaderImg"
                />
              </div>
              <p className="font-semibold mt-6">Christiana Mary Fred</p>
              <p className="text-gray-600 text-md">Head of Marketing</p>
            </div>
          </section>
        </section>
      </main>
    </>
  );
};

export default About;