import React from "react";
import whatWeDoImg from "../../src/assets/whatWeDoImg.png";
import visionImg from "../assets/vision.svg";
import missionImg from "../assets/mission.svg";

const WhatWeDo = () => {
  return (
    <main>
      {/* What We Do Section */}
      <div className="bg-[#F9FFFC] w-full">
        <section className=" py-12 md:py-16 mx-auto container w-11/12 flex flex-col lg:flex-row items-center lg:items-stretch gap-12 min-h-[600px]">
          {/* Left Content: Text and Bullet Points */}
          <div className="lg:w-1/2 text-left order-first lg:order-first">
            <h2 className="text-4xl xl:text-6xl md:text-5xl font-bold text-[#333333] font-IBM w-[100%] mb-2 animate__animated animate__backInLeft">
              What We Do
            </h2>
            <div className="w-[20%] border-b-4 border-[#007A4D] mb-8 lg:mx-0"></div>
            <p className="text-[16px] md:text-lg text-[#000101] leading-relaxed mb-8 font-normal font-Inter w-[100%]">
            Pfrancesco excels in construction and real estate, delivering innovative, sustainable residential, commercial, and industrial projects. We manage design, construction, and property development, ensuring quality and timeliness. Our eco-friendly approach uses sustainable materials to create lasting, functional spaces. We also offer real estate investment and acquisition services, building value for clients and communities.
            </p>
            {/* Vision and Mission */}
            <div className="space-y-6 relative">
              {/* Connecting Line */}
              <div className="absolute left-[15px] top-[24px] h-[160px] w-[2px] bg-[#007A4D] z-0"></div>

              <div className="flex items-start gap-4">
                {/* Vision Icon */}
                <img
                  src={visionImg}
                  alt="Our Vision Icon"
                  className="flex-shrink-0 w-[32px] h-[32px] rounded-full bg-[#F1FFF5] border-[#007A4D] border-2 p-2 z-10"
                />
                <div>
                  <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                    Our Vision
                  </h3>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    To be a global leader in construction and real estate,
                    crafting innovative, sustainable spaces. We envision
                    transforming communities with eco-friendly, enduring
                    designs. Our goal is to elevate lives through quality
                    craftsmanship and thoughtful development. Every project
                    reflects our commitment to excellence and environmental
                    stewardship.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                {/* Mission Icon */}
                <img
                  src={missionImg}
                  alt="Our Mission Icon"
                  className="flex-shrink-0 w-[32px] h-[32px] rounded-full  bg-[#F1FFF5] border-[#007A4D] border-2 p-2 z-10"
                />
                <div>
                  <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                    Our Mission
                  </h3>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    We build durable, eco-conscious homes and commercial spaces
                    that inspire. Our expert team delivers projects on time,
                    within budget, and to the highest standards. We prioritize
                    client satisfaction, sustainability, and community impact in
                    every endeavor. Airavata creates lasting value for
                    generations to come.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 flex justify-center lg:justify-end order-last lg:order-last h-full">
            <img
              src={whatWeDoImg}
              alt="What We Do"
              className="rounded-[100px] w-full h-full object-cover animate__animated animate__backInRight"
            />
          </div>
        </section>
      </div>
    </main>
  );
};

export default WhatWeDo;
