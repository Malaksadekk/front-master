import { useState } from "react";
import "./ContactSection.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    const phonePattern = /^[0-9]{11}$/;

    if (!formData.email.match(emailPattern)) {
      toast.error("Please enter a valid email address.");
      return;
    }

    if (!formData.phone.match(phonePattern)) {
      toast.error("Please enter a valid 11-digit phone number.");
      return;
    }

    if (formData.subject.trim() === "") {
      toast.error("Please enter a subject.");
      return;
    }

    if (formData.message.trim() === "") {
      toast.error("Please enter a message.");
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast.success("Your message has been sent successfully!");
        setFormData({
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
      } else {
        toast.error("Failed to send your message. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("An error occurred. Please try again later.");
    }
  };

  return (
    <div className="contact-form col-12 col-md-6">
      <h2>We Love To Hear From You</h2>
      <form id="contactForm" onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="email"
            id="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Your Email"
            required
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            id="phone"
            value={formData.phone}
            onChange={handleInputChange}
            placeholder="Your Phone"
            required
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            id="subject"
            value={formData.subject}
            onChange={handleInputChange}
            placeholder="Subject"
            required
          />
        </div>
        <div className="form-group">
          <textarea
            id="message"
            value={formData.message}
            onChange={handleInputChange}
            placeholder="Message"
            required
          />
        </div>
        <button type="submit">Send Message</button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default ContactForm;
