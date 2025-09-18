import React from "react";
import { Helmet } from "react-helmet";
import ContactInfoSection from "../Components/ContactInfoSection";
import Contact from "./Contact";
import TalkToUs from "../Components/TalkToUs";

const ContactUsPage = () => {
  return (
    <>
      {/* SEO Meta Tags */}
      <Helmet>
        <title>Contact Us - Pfrancesco Construction</title>
        <meta
          name="description"
          content="Get in touch with Pfrancesco for construction and real estate solutions. Reach us via phone, email, or our contact form."
        />
        <meta
          name="keywords"
          content="contact, Pfrancesco, construction, real estate, Lagos, Nigeria"
        />
        <meta name="author" content="Pfrancesco" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Helmet>

<section>
    <div>
        <TalkToUs/>
    </div>
</section>
      {/* Contact Page Content */}
      <section className="bg-[#F1FFF5] py-12">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-10">
        
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Contact Info */}
            <ContactInfoSection />
            {/* Contact Form */}
            <Contact />
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactUsPage;