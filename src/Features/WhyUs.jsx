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
      {/* Section for why choose us */}
<section className="px-4 sm:px-6 md:px-10">
  <h4 className="text-[24px] sm:text-[28px] md:text-[32px] text-center font-bold">
    Why Choose Us
  </h4>
</section>

<section className="flex flex-col sm:flex-row justify-between gap-8 w-full sm:w-[90%] md:w-[80%] mx-auto mt-10">
  {/* Image Section */}
  <section className="hidden sm:flex justify-center">
    <div>
      <img
        className="h-auto w-full max-w-[300px] sm:max-w-[400px] md:max-w-[494px] pb-10 object-contain"
        src={mobilePhoneImg}
        alt="mobilePhoneImg"
      />
    </div>
  </section>

  {/* Text and Features Section */}
  <section>
    <div className="leading-[28px] text-sm sm:text-base md:text-base text-center sm:text-left w-full sm:w-[400px] md:w-[660px] mb-7">
      <p>
      At Pfrancesco construction, we place the client's needs first and build structures
      that will have a positive impact on their lives.
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
        <p className="text-sm sm:text-base mt-2">Sustainable solutions</p>
      </div>
      <div className="text-center sm:text-left">
        <img
          className="w-[60px] h-[60px] sm:w-[80px] sm:h-[80px] mx-auto sm:mx-0"
          src={extensiveResearchIcon}
          alt="extensiveResearchIcon"
        />
        <p className="text-sm sm:text-base mt-2">Extensive research</p>
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
    </>
  );
};

export default WhyUs;