import React from "react";

export default function ServicesColocation() {
  return (
    <div className="bg-white text-gray-900 pt-24">

      {/* Hero Section */}
      <section className="bg-blue-50 py-20 pt-32">
        <div className="max-w-6xl mx-auto px-6 text-center">

          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Data Center Services
          </h1>

          <p className="text-lg md:text-xl max-w-3xl mx-auto mb-10">
            Explore our secure and scalable data center solutions designed to
            power your business infrastructure efficiently.
          </p>

          {/* External Links Buttons */}
          <div className="flex justify-center gap-6 flex-wrap">

            {/* Colocation Link */}
            <a
              href="https://www.rackbank.com/datacenter-services/colocation.html"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700 transition duration-300"
            >
              View Colocation Services
            </a>

            {/* Managed Services Link */}
            <a
              href="https://www.rackbank.com/datacenter-services/managed-services.html"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-green-600 text-white rounded-lg shadow-lg hover:bg-green-700 transition duration-300"
            >
              View Managed Services
            </a>

          </div>
        </div>
      </section>

      {/* Optional Additional Content Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold mb-6">
            Reliable. Secure. Scalable.
          </h2>
          <p className="text-gray-700 max-w-2xl mx-auto">
            Our data center infrastructure ensures maximum uptime, advanced
            security, and 24/7 monitoring to support your critical workloads.
          </p>
        </div>
      </section>

    </div>
  );
}
