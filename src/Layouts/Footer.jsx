import React from "react";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  // Function to Navigate to Home page
  const navigateToHome = () =>{
    navigate("/");
  };
    // Function to navigate to the services page
  const navigateToServices = () => {
    navigate("/services");
  };
    // Function to navigate to the about us page
    const navigateToAboutUs = () => {
      navigate("/about");
    };

  return (
    <>
      <footer className="bg-black text-white py-10">
        <div className="wrapper mx-auto w-[90%] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* Navigation Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4" >Quick Links</h4>
            <p className="mb-2 hover:underline cursor-pointer" onClick={navigateToHome}>Home</p>
            <p className="mb-2 hover:underline cursor-pointer" onClick={navigateToServices}>Services</p>
            <p className="hover:underline cursor-pointer" onClick={navigateToAboutUs}>About Us</p>
          </div>

          {/* About Section */}
          <div>
            <h4 className="text-lg font-semibold mb-4">About Us</h4>
            <p className="text-sm">
              We are committed to building eco-friendly and sustainable
              structures that transform lives and communities.
            </p>
          </div>

          {/* Contact Section */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <p className="text-sm">Email: pfrancescoconstruction@gmail.com</p>
            <p className="text-sm">Phone: +61 318 195 187</p>
            <p className="text-sm">Address: 2 Venus Place, Kings Langley NSW 2147</p>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="text-center mt-8 border-t border-white pt-4">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Eco-Builders. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;