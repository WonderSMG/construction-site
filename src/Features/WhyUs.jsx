import React from "react";
import mobilePhoneImg from "../assets/mobilePhoneImg.png";
import ecoFriendlyIcon from "../assets/eco-friendly icon.png";
import budgetFriendlyIcon from "../assets/budget-friendly icon.png";
import strongFoundationIcon from "../assets/strong-foundation icon.png";
import sustainableSolutionsIcon from "../assets/sustainable-solution icon.png";
import extensiveResearchIcon from "../assets/extensive-research icon.png";
import excellentServiceIcon from "../assets/excellent service icon.png";

const WhyUs = () => {
  return (
    <>
      <div className="w-full my-10 ">
        <div className="container mx-auto">
          {/* Section for why choose us */}
          <section className="">
            <h4 className="xl:text-[54.85px] md:text-5xl font-[700] font-IBM text-[25.49px] text-[#013F1E] text-center pt-6 ">
              Why Choose Us
            </h4>
          </section>

          <section className="flex flex-col md:flex-row justify-between  my-10">
            {/* Image Section */}
            <section className="hidden sm:flex justify-center">
              <div>
                <img
                  className=" object-contain w-full"
                  src={mobilePhoneImg}
                  alt="mobilePhoneImg"
                />
              </div>
            </section>

            {/* Text and Features Section */}
            <section>
              <div className="leading-[28px] text-lg md:text-xl text-center sm:text-left w-full sm:w-[400px] md:w-[660px] mb-7">
                <p>
                  At Pfrancesco, we place the client's needs first and build
                  structures that will have a positive impact on their lives.
                </p>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 sm:gap-10 mx-auto pt-4">
                <div className="text-center sm:text-left">
                  <img
                    className="w-[60px] h-[60px] sm:w-[80px] sm:h-[80px] mx-auto sm:mx-0"
                    src={ecoFriendlyIcon}
                    alt="ecoFriendlyIcon"
                  />
                  <p className="text-sm sm:text-base mt-2">Eco-friendly</p>
                </div>
                <div className="text-center sm:text-left">
                  <img
                    className="w-[60px] h-[60px] sm:w-[80px] sm:h-[80px] mx-auto sm:mx-0"
                    src={budgetFriendlyIcon}
                    alt="budgetFriendlyIcon"
                  />
                  <p className="text-sm sm:text-base mt-2">Budget friendly</p>
                </div>
                <div className="text-center sm:text-left">
                  <img
                    className="w-[60px] h-[60px] sm:w-[80px] sm:h-[80px] mx-auto sm:mx-0"
                    src={strongFoundationIcon}
                    alt="strongFoundationIcon"
                  />
                  <p className="text-sm sm:text-base mt-2">Strong foundation</p>
                </div>
                <div className="text-center sm:text-left">
                  <img
                    className="w-[60px] h-[60px] sm:w-[80px] sm:h-[80px] mx-auto sm:mx-0"
                    src={sustainableSolutionsIcon}
                    alt="sustainableSolutionsIcon"
                  />
                  <p className="text-sm sm:text-base mt-2">
                    Sustainable solutions
                  </p>
                </div>
                <div className="text-center sm:text-left">
                  <img
                    className="w-[60px] h-[60px] sm:w-[80px] sm:h-[80px] mx-auto sm:mx-0"
                    src={extensiveResearchIcon}
                    alt="extensiveResearchIcon"
                  />
                  <p className="text-sm sm:text-base mt-2">
                    Extensive research
                  </p>
                </div>
                <div className="text-center sm:text-left">
                  <img
                    className="w-[60px] h-[60px] sm:w-[80px] sm:h-[80px] mx-auto sm:mx-0"
                    src={excellentServiceIcon}
                    alt="excellentServiceIcon"
                  />
                  <p className="text-sm sm:text-base mt-2">Excellent service</p>
                </div>
              </div>
            </section>
          </section>
        </div>
      </div>
    </>
  );
};

export default WhyUs;
