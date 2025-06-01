import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import Navbar from "./Layouts/Navbar";
import Hero from "./Features/Home/Hero";
import Contact from "./Features/Contact";
import Services from "./Features/Services";
import About from "./Features/About";
import Footer from "./Layouts/Footer";
import WhyUs from "./Features/WhyUs";
import OfficeBuildings from "./Learn-More-Pages/OfficeBuildings";
import EcoHouses from "./Learn-More-Pages/EcoHouses";
import Mansions from "./Learn-More-Pages/Mansions";
import ScrollToTop from "./Components/ScrollToTop";

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
              <WhyUs />
              <About />
              <Contact />
            </>
          }
        />
        <Route path="/services" element={<Services />} />
        <Route path="/whyus" element={<WhyUs />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/office-buildings" element={<OfficeBuildings />} />
        <Route path="/eco-houses" element={<EcoHouses />} />
        <Route path="/mansions" element={<Mansions />} />

      </Routes>

      {/* Footer is displayed on all pages */}
      <Footer />
    </Router>
  );
};

export default App;