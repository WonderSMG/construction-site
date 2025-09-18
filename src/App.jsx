import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import whatsAppIcon from "../src/assets/logo-whatsapp.svg";
import Navbar from "./Layouts/Navbar";
import Hero from "./Features/Home/Hero";
import Contact from "./Features/Contact";
import ContactUs from "./Features/ContactUs";
import Services from "./Features/Services";
import OurServices from "./Features/OurServices";
import About from "./Features/About";
import Footer from "./Layouts/Footer";
import WhyUs from "./Features/WhyUs";
import OfficeBuildings from "./Learn-More-Pages/OfficeBuildings";
import EcoHouses from "./Learn-More-Pages/EcoHouses";
import Mansions from "./Learn-More-Pages/Mansions";
import ScrollToTop from "./Components/ScrollToTop";
import Testimonials from "./Features/Home/Testimonials";

const FloatingChat = () => {
  return (
    <a
      href="" 
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-[#25D366] text-white px-4 py-2 rounded-full flex items-center gap-2 shadow-lg hover:bg-[#1DA851] transition-all duration-300 z-50 md:bottom-8 md:right-8"
      aria-label="Chat with Airavata on WhatsApp"
    >
      <img
        src={whatsAppIcon}
        alt="WhatsApp Icon"
        className="w-6 h-6"
      />
      <span className="text-sm md:text-base font-medium hidden sm:inline">
        Need help? Chat with us
      </span>
    </a>
  );
};

const App = () => {
  return (
    <Router>
      {/* Navbar is displayed on all pages */}
      <Navbar />
      <ScrollToTop />

      {/* Main content changes dynamically based on the route */}
      <Routes>
        {/* Home Page */}
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Services />
              <div className="bg-[#F1FFF5]">
                <WhyUs />
                <Testimonials />
              </div>
              <Contact />
            </>
          }
        />
        <Route path="/services" element={<OurServices />} />
        <Route path="/whyus" element={<WhyUs />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/office-buildings" element={<OfficeBuildings />} />
        <Route path="/eco-houses" element={<EcoHouses />} />
        <Route path="/mansions" element={<Mansions />} />
      </Routes>

      {/* Floating WhatsApp Chat Button */}
      <FloatingChat />

      {/* Footer is displayed on all pages */}
      <Footer />
    </Router>
  );
};

export default App;