import React, { useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [formData, setFormData] = useState({
    email: "",
    fullName: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.email) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
    }
    if (!formData.fullName) {
      newErrors.fullName = "Full name is required.";
    } else if (formData.fullName.length < 3) {
      newErrors.fullName = "Full name must be at least 3 characters long.";
    }
    if (!formData.message) {
      newErrors.message = "Message is required.";
    } else if (formData.message.length < 10) {
      newErrors.message = "Message must be at least 10 characters long.";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      emailjs
        .send(
          "service_7yi7g2l", // Replace with your EmailJS service ID
          "template_gnwllsf", // Replace with your EmailJS template ID
          {
            from_name: formData.fullName,
            from_email: formData.email,
            message: formData.message,
          },
          "c7Zb99sVMqysYqqJI" // Replace with your EmailJS public key
        )
        .then(
          (result) => {
            console.log("Email sent successfully:", result.text);
            setSuccessMessage("Your message has been sent!");
            setFormData({ email: "", fullName: "", message: "" });
            setErrors({});
          },
          (error) => {
            console.error("Error sending email:", error.text);
            setSuccessMessage("Failed to send your message. Please try again.");
          }
        );
    }
  };

  return (
    <main className="flex justify-center items-center">
      <section className="w-full max-w-[700px] p-6 rounded-lg shadow-lg">
        <h4 className="text-[24px] text-center font-semibold mb-6">
          Let's talk
        </h4>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <p className="mb-2 font-medium">Enter your email</p>
            <input
              className={`w-full border-2 rounded-lg p-2 focus:outline-none focus:ring-2 ${
                errors.email
                  ? "border-red-500 focus:ring-red-500"
                  : "border-[#006A51] focus:ring-[#006A51]"
              }`}
              type="email"
              id="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && (
              <p className="text-red-500 text-xs md:text-sm mt-1">
                {errors.email}
              </p>
            )}
          </div>
          <div className="mb-4">
            <p className="mb-2 font-medium">Enter your full name</p>
            <input
              className={`w-full border-2 rounded-lg p-2 focus:outline-none focus:ring-2 ${
                errors.fullName
                  ? "border-red-500 focus:ring-red-500"
                  : "border-[#006A51] focus:ring-[#006A51]"
              }`}
              type="text"
              id="fullName"
              placeholder="Full name"
              value={formData.fullName}
              onChange={handleChange}
            />
            {errors.fullName && (
              <p className="text-red-500 text-xs md:text-sm mt-1">
                {errors.fullName}
              </p>
            )}
          </div>
          <div className="mb-4">
            <p className="mb-2 font-medium">Enter your message</p>
            <textarea
              className={`w-full border-2 rounded-lg p-2 focus:outline-none focus:ring-2 ${
                errors.message
                  ? "border-red-500 focus:ring-red-500"
                  : "border-[#006A51] focus:ring-[#006A51]"
              }`}
              id="message"
              placeholder="Message"
              maxLength={1000}
              rows={4}
              value={formData.message}
              onChange={handleChange}
            ></textarea>
            {errors.message && (
              <p className="text-red-500 text-xs md:text-sm mt-1">
                {errors.message}
              </p>
            )}
          </div>
          <div className="flex justify-center mt-4">
            <button
              type="submit"
              className="bg-[#006A51] text-white py-2 px-6 rounded-lg hover:bg-[#004D3A] transition"
            >
              Send message
            </button>
          </div>
          {successMessage && (
            <p className="text-green-500 text-center mt-4">
              {successMessage}
            </p>
          )}
        </form>
      </section>
    </main>
  );
};

export default Contact;