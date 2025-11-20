import React, { useState } from "react";
import { sendContact } from "../../api/contactApi"; // API to send contact form data

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [success, setSuccess] = useState("");


  // Handle input changes
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await sendContact(form);
      if (res._id) {
        setSuccess("Message sent successfully!");
        setForm({ name: "", email: "", message: "" });
      } else {
        setSuccess(" Failed to send message.");
      }
    } catch (err) {
      setSuccess(" Error sending message.");
    }
  };

  return (
    <div>
      {/* Header */}
      <div className="flex flex-col items-center justify-center py-20 bg-gradient-to-r from-gray-50 via-red-50 to-gray-50 text-center">
        <h2 className="text-3xl font-semibold text-black mb-2">Contact Us</h2>
      </div>

      {/* Google Map */}
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.4077321783143!2d72.50516137465866!3d23.045508815473156!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e84ac539ac151%3A0x6acae7cc1aec8366!2sExcelsior%20Technologies%C2%AE!5e0!3m2!1sen!2sin!4v1757424806695!5m2!1sen!2sin"
        width="100%"
        height="450"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>

      {/* Main content */}
      <div className="container mx-auto px-4 py-7">
        <div className="grid grid-cols-1 md:grid-cols-2">
          
          {/* Store Info */}
          <div className="p-5">
            <h2 className="text-2xl font-semibold py-3">Visit Our Store</h2>
            <p className="py-1 font-semibold mt-2">Address</p>
            <p className="py-1">66 Mott St, New York, New York, Zip Code: 10006, AS</p>

            <p className="py-1 font-semibold mt-2">Phone</p>
            <p className="py-1">(623) 934-2400</p>

            <p className="py-1 font-semibold mt-2">Email</p>
            <p className="py-1">EComposer@example.com</p>

            <p className="py-1 font-semibold mt-2">Open Time</p>
            <p className="py-1">Every day 11am to 7pm</p>
          </div>

          {/* Contact Form */}
          <div className="p-5">
            <h2 className="text-2xl font-semibold py-3">Get in Touch</h2>
            <p className="py-1">
              If you’ve got great products you’re making or looking to work with us then drop us a line.
            </p>

            <form onSubmit={handleSubmit}>
              <div className="flex gap-2 my-5">
                <input
                  type="text"
                  placeholder="Name"
                  className="border border-gray-500 p-2 w-1/2"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="border border-gray-500 p-2 w-1/2"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <textarea
                className="border border-gray-500 p-2 w-full rounded"
                name="message"
                placeholder="Message"
                rows={5}
                value={form.message}
                onChange={handleChange}
                required
              />
              <button className="w-full py-2 bg-black hover:bg-white hover:border border cursor-pointer hover:text-black text-white mt-2">Send</button>
            </form>

            {/* Success/Error Message */}
            {success && <p className="mt-3 text-green-600">{success}</p>}
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;
