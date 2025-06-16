import React from "react";
import visionImg from "../assets/vision.svg";
import missionImg from "../assets/mission.svg";
import Paulfrancesco from "../assets/PaulFrancesco.jpg";
import LucasBrooks from "../assets/LucasBrooks.jpg";
import MaryFred from "../assets/MaryFred.jpg";
import polygonImg from "../assets/Polygon 1.png";

const About = () => {
  return (
    <>
      <main className="h-auto bg-[#F1FFF5] mt-10">
        <section className="pb-10">
          <h4 className="text-[24px] text-center font-semibold pt-8">
            About Us
          </h4>
          <section className="grid grid-cols-2 mt-10 gap-8 w-[90%] md:w-[50%] mx-auto">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <img src={visionImg} alt="Vision" />
                <p className="font-semibold">Our Vision:</p>
              </div>
              <div>
                <p>
                  Being a world-class organization that transforms lives one
                  building at a time.
                </p>
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2 mb-4">
                <img src={missionImg} alt="Mission" />
                <p className="font-semibold">Our Mission:</p>
              </div>
              <div>
                <p>
                  Build durable and eco-friendly buildings that will serve many
                  generations to come.
                </p>
              </div>
            </div>
          </section>
          <h4 className="text-[18px] text-center font-medium pt-14">
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
              <p className="text-gray-600 text-sm">CEO & Co-founder</p>
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
              <p className="text-gray-600 text-sm">Chief Architect</p>
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
              <p className="text-gray-600 text-sm">Head of Marketing</p>
            </div>
          </section>
        </section>
      </main>
    </>
  );
};

export default About;