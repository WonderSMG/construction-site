import React from "react";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  // Function to Navigate to Home page
  const navigateToHome = () => {
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
        <div className="container mx-auto w-11/12 grid grid-cols-1 xl:grid-cols-3 gap-10">
          {/* Navigation Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <p
              className=" hover:underline cursor-pointer"
              onClick={navigateToHome}
            >
              Home
            </p>
            <p
              className="hover:underline cursor-pointer"
              onClick={navigateToServices}
            >
              Services
            </p>
            <p
              className="hover:underline cursor-pointer"
              onClick={navigateToAboutUs}
            >
              About Us
            </p>
          </div>

          {/* About Section */}
          <div className="flex flex-col">
            <h4 className="text-lg font-semibold mb-4">Connect With Us</h4>
            <a
              className="hover:underline"
              href=""
            >
              Instagram
            </a>
            <a className="hover:underline" href="">
              Facebook
            </a>
            <a className="hover:underline" href="">
              X
            </a>
          </div>

          {/* Contact Section */}
          <div className="flex flex-col">
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <p>Email: pfrancescoconstruction@gmail.com</p>
            <p>Phone: +61 318 195 187</p>
            <p>Address: 2 Venus Place, Kings Langley NSW 2147</p>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="text-center mt-8 border-t border-white pt-4">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Pfrancesco. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
