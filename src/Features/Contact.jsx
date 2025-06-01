import React, { useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [formData, setFormData] = useState({
    subject: "",
    email: "",
    fullName: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.subject) {
      newErrors.subject = "Please enter the subject of your message.";
    } else if (formData.subject.length < 3) {
      newErrors.subject = "Subject must be at least 3 characters long.";
    }
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
      setIsSubmitting(true);
      emailjs
        .send(
          import.meta.env.VITE_EMAILJS_SERVICE_ID, // Replace with your EmailJS service ID
          import.meta.env.VITE_EMAILJS_TEMPLATE_ID, // Replace with your EmailJS template ID
          {
            title: formData.subject,
            from_name: formData.fullName,
            from_email: formData.email,
            message: formData.message,
          },
          import.meta.env.VITE_EMAILJS_PUBLIC_KEY // Replace with your EmailJS public key
        )
        .then(
          (result) => {
            console.log("Email sent successfully:", result.text);
            setSuccessMessage("Your message has been sent!");
            setFormData({ subject: "", email: "", fullName: "", message: "" });
            setErrors({});
            setTimeout(() => {
              setSuccessMessage("");
            }, 3000);
          },
          (error) => {
            console.error("Error sending email:", error.text);
            setSuccessMessage("Failed to send your message. Please try again.");
          }
        )
        .finally(() => {
          setIsSubmitting(false);
        });
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
            <p className="mb-2 font-medium">Subject</p>
            <input
              className={`w-full border-2 rounded-lg p-2 focus:outline-none focus:ring-2 ${
                errors.subject
                  ? "border-red-500 focus:ring-red-500"
                  : "border-[#006A51] focus:ring-[#006A51]"
              }`}
              type="text"
              id="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
            />
            {errors.subject && (
              <p className="text-red-500 text-xs md:text-sm mt-1">
                {errors.subject}
              </p>
            )}
          </div>
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
              maxLength={2000}
              rows={6}
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
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending..." : "Send message"}
            </button>
          </div>
          {successMessage && (
            <p className="text-green-500 text-center mt-4">{successMessage}</p>
          )}
        </form>
      </section>
    </main>
  );
};

export default Contact;
