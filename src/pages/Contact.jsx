import React from "react";

export default function Contact() {
  return (
    <div className="pt-20">
      
      {/* Heading */}
      <div className="text-center py-16 bg-gray-50">
        <h1 className="text-4xl font-bold mb-2">Contact Us</h1>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-10">
        
        {/* Left Info */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">Get In Touch</h2>
          <p className="text-gray-600 mb-6">
            Feel free to contact us for any cloud, infrastructure or IT services.
          </p>

          <p className="mb-3"><strong>📍 Address:</strong>157, Deputyganj, Nagram - Nilmatha Rd, near DN Motors, near Railway crossing, Roberts Lines, Lucknow, Uttar Pradesh 226002</p>
          <p className="mb-3"><strong>📞 Phone:</strong> +91 1294159609</p>
          <p className="mb-3"><strong>✉ Email:</strong> support@vincentio.in</p>
        </div>

        {/* Contact Form */}
        <div className="bg-white shadow-lg rounded-xl p-8">
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full border p-3 rounded"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full border p-3 rounded"
            />
            <input
              type="text"
              placeholder="Phone Number"
              className="w-full border p-3 rounded"
            />
            <textarea
              placeholder="Your Message"
              rows="4"
              className="w-full border p-3 rounded"
            ></textarea>

            <button className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700">
              Send Message
            </button>
          </form>
        </div>
      </div>

      {/* Google Map */}
<div className="w-full h-[400px] mt-10">
  <iframe
    title="map"
    src="https://www.google.com/maps?q=157%20Deputyganj%20Nagram%20Nilmatha%20Rd%20near%20DN%20Motors%20near%20Railway%20crossing%20Roberts%20Lines%20Lucknow%20Uttar%20Pradesh%20226002&output=embed"
    className="w-full h-full border-0"
    loading="lazy"
  ></iframe>
</div>

    </div>
  );
}
