import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import constructionLogo from "../assets/construction-logo.svg";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false); // State to control the modal
  const navigate = useNavigate();

  // Function to Navigate to the home page
  const navigateToHome = () => {
    navigate("/");
    setIsMenuOpen(false); // Close the menu after navigation

  };
  // Function to navigate to the services page
  const navigateToServices = () => {
    navigate("/services");
    setIsMenuOpen(false); // Close the menu after navigation

  };
  // Function to navigate to the about us page
  const navigateToAboutUs = () => {
    navigate("/about");
    setIsMenuOpen(false); // Close the menu after navigation

  };

  // Function to toggle the modal
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
    setIsMenuOpen(false); // Close the menu after navigation

  };
  return (
    <>
      <header className="bg-white shadow-md">
        <nav className="wrapper mx-auto md:mx-10 flex justify-between items-center p-4 md:p-6">
          {/* Logo and Company Name */}
          <div
            className="flex gap-2 items-center cursor-pointer"
            onClick={navigateToHome}
          >
            <img
              src={constructionLogo}
              alt="constructionLogo"
              className="w-[40px] h-[40px]"
            />
            <div className="text-[#006A51] font-extrabold text-lg md:text-xl">
              <h1>Pfrancesco Construction</h1>
            </div>
          </div>

          {/* Hamburger Menu for Mobile */}
          <div className="md:hidden">
            <button
              className="text-[#006A51] focus:outline-none"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              )}
            </button>
          </div>

          {/* Navigation Links */}
          <div
            className={`${
              isMenuOpen ? "block z-50" : "hidden"
            } absolute top-[70px] left-0 w-full bg-white shadow-md md:static md:flex md:gap-10 md:items-center md:justify-end`}
          >
            <div className="flex flex-col md:flex-row gap-4 md:gap-10 p-4 md:p-0">
              <button
                className="hover:text-[#004D3A] text-[#006A51]"
                onClick={navigateToHome}
              >
                Home
              </button>
              <button
                className="hover:text-[#004D3A] text-[#006A51]"
                onClick={navigateToServices}
              >
                Services
              </button>
              <button
                className="hover:text-[#004D3A] text-[#006A51]"
                onClick={navigateToAboutUs}
              >
                About Us
              </button>
              <button
                className="hover:text-[#004D3A] text-[#006A51]"
                onClick={toggleModal}
              >
                Contact Us
              </button>
            </div>
          </div>

          {/* Let's Talk Button */}
          {/* <div className="hidden md:block">
            <button
              className="bg-[#006A51] text-white px-4 py-2 rounded hover:bg-[#004D3A] transition"
              onClick={() => window.open("https://www.facebook.com", "_blank")}
            >
              Let's Talk
            </button>
          </div> */}
        </nav>
      </header>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-opacity-50 flex justify-center items-center z-50 bg-[url('https://images.unsplash.com/photo-1565008447742-97f6f38c985c?q=80&w=3431&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-no-repeat bg-center h-[20rem] md:min-h-screen">
          <div className="bg-white rounded-lg shadow-lg p-6 w-[90%] max-w-[500px]">
            <h2 className="text-2xl font-bold mb-4 text-[#006A51]">
              Contact Information
            </h2>
            <p className="mb-2">
              <strong>Email:</strong> pfrancescoconstruction@gmail.com
            </p>
            <p className="mb-2">
              <strong>Phone:</strong> +61 318 195 187
            </p>
            <p className="mb-4">
              <strong>Office Address:</strong> 2 Venus Place, Kings Langley NSW 2147
            </p>
            <button
              className="bg-[#006A51] text-white px-4 py-2 rounded hover:bg-[#004D3A] transition"
              onClick={toggleModal} // Close the modal
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;