import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import constructionLogo from "../assets/construction-logo.svg";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // Function to navigate to the home page
  const navigateToHome = () => {
    navigate("/");
    setIsMenuOpen(false);
  };

  // Function to navigate to the services page
  const navigateToServices = () => {
    navigate("/services");
    setIsMenuOpen(false);
  };

  // Function to navigate to the about us page
  const navigateToAboutUs = () => {
    navigate("/about");
    setIsMenuOpen(false);
  };

  // Function to navigate to the contact page
  const navigateToContact = () => {
    navigate("/contact");
    setIsMenuOpen(false);
  };

  const navLinks = [
    { name: "Home", path: "/", onClick: navigateToHome },
    { name: "Services", path: "/services", onClick: navigateToServices },
    { name: "About Us", path: "/about", onClick: navigateToAboutUs },
    { name: "Contact Us", path: "/contact", onClick: navigateToContact },
  ];

  return (
    <>
      <style>
        {`
        .nav-link {
          position: relative;
          display: inline-block;
          color: #006A51;
          transition: color 0.3s ease-in-out;
        }

        .nav-link::after {
          content: '';
          position: absolute;
          width: 100%;
          transform: scaleX(0);
          height: 2px;
          bottom: -4px;
          left: 0;
          background-color: #004D3A;
          transform-origin: bottom right;
          transition: transform 0.3s ease-out;
        }

        .nav-link:hover::after, .nav-link.active::after {
          transform: scaleX(1);
          transform-origin: bottom left;
        }

        .nav-link.active {
          color: #004D3A;
          font-weight: 600;
        }
        
        @media (max-width: 768px) {
          .nav-link::after {
            display: none;
          }
          .nav-link.active {
            border-bottom: 2px solid #004D3A;
            padding-bottom: 2px;
          }
        }
        `}
      </style>
      <header className="bg-white">
        <nav className="mx-auto container flex justify-between items-center py-4 md:py-6 w-11/12">
          {/* Logo and Company Name */}
          <div
            className="flex gap-2 items-center cursor-pointer"
            onClick={navigateToHome}
          >
            <img
              src={constructionLogo}
              alt="constructionLogo"
              className="w-[50px] h-[50px]"
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
            } absolute top-[70px] left-0 w-full bg-white md:static md:flex md:gap-10 md:items-center md:justify-end`}
          >
            <div className="flex flex-col md:flex-row gap-4 md:gap-22 p-4 md:p-0">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  className={`nav-link hover:text-[#004D3A] ${
                    location.pathname === link.path ? "active" : ""
                  }`}
                  onClick={link.onClick}
                >
                  {link.name}
                </button>
              ))}
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;