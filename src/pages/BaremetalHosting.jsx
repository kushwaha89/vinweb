export default function BaremetalHosting() {
  return (
    <div className="mt-24 font-sans">

      {/* HERO SECTION */}
      <section className="bg-gradient-to-r from-blue-700 to-indigo-700 text-white py-24 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

          {/* LEFT CONTENT */}
          <div>
            <h1 className="text-5xl font-bold leading-tight">
              High Performance <br /> Baremetal Servers
            </h1>

            <p className="mt-6 text-blue-100 text-lg">
              Dedicated infrastructure built for performance, scalability
              and complete control. Perfect for enterprise workloads,
              virtualization and high traffic applications.
            </p>

            {/* BUTTONS */}
            <div className="mt-8 flex gap-4 flex-wrap">

              <a
                href="/deploy"
                className="bg-white text-blue-700 px-6 py-3 rounded-lg font-semibold shadow-lg transition-all duration-300 hover:bg-gray-200 hover:scale-105"
              >
                Deploy Server
              </a>

              <a
                href="/contact"
                className="border border-white px-6 py-3 rounded-lg transition-all duration-300 hover:bg-white hover:text-blue-700 hover:scale-105"
              >
                Contact Sales
              </a>

            </div>
          </div>

          {/* STATS */}
          <div className="grid grid-cols-2 gap-6 text-center">

            <div className="bg-white/10 p-6 rounded-xl">
              <h2 className="text-3xl font-bold">10Gbps</h2>
              <p className="text-blue-100">Network Speed</p>
            </div>

            <div className="bg-white/10 p-6 rounded-xl">
              <h2 className="text-3xl font-bold">99.99%</h2>
              <p className="text-blue-100">Uptime</p>
            </div>

            <div className="bg-white/10 p-6 rounded-xl">
              <h2 className="text-3xl font-bold">24/7</h2>
              <p className="text-blue-100">Support</p>
            </div>

            <div className="bg-white/10 p-6 rounded-xl">
              <h2 className="text-3xl font-bold">Enterprise</h2>
              <p className="text-blue-100">Hardware</p>
            </div>

          </div>

        </div>
      </section>

      {/* FEATURES */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto text-center">

          <h2 className="text-4xl font-bold mb-16">
            Enterprise Infrastructure
          </h2>

          <div className="grid md:grid-cols-3 gap-10">

            <div className="bg-white p-8 rounded-xl shadow hover:shadow-xl transition">
              <h3 className="text-xl font-semibold mb-3">
                Latest Processors
              </h3>
              <p className="text-gray-600">
                Powered by Intel Xeon & AMD EPYC processors delivering
                maximum computing performance.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow hover:shadow-xl transition">
              <h3 className="text-xl font-semibold mb-3">
                NVMe Storage
              </h3>
              <p className="text-gray-600">
                Ultra fast NVMe SSD storage designed for low latency
                and high I/O workloads.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow hover:shadow-xl transition">
              <h3 className="text-xl font-semibold mb-3">
                Advanced Security
              </h3>
              <p className="text-gray-600">
                Built-in firewall, network isolation and DDoS protection
                for enterprise grade security.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* SERVER TABLE */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">

          <h2 className="text-4xl font-bold text-center mb-16">
            Server Specifications
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full border shadow-lg rounded-lg overflow-hidden">

              <thead className="bg-blue-600 text-white">
                <tr>
                  <th className="p-4 text-left">Server</th>
                  <th className="p-4 text-left">CPU</th>
                  <th className="p-4 text-left">RAM</th>
                  <th className="p-4 text-left">Storage</th>
                  <th className="p-4 text-left">Price</th>
                </tr>
              </thead>

              <tbody>

                <tr className="border-b hover:bg-gray-50">
                  <td className="p-4 font-semibold">Starter</td>
                  <td className="p-4">Intel Xeon</td>
                  <td className="p-4">16GB</td>
                  <td className="p-4">512GB NVMe</td>
                  <td className="p-4 font-bold">$99/mo</td>
                </tr>

                <tr className="border-b hover:bg-gray-50">
                  <td className="p-4 font-semibold">Business</td>
                  <td className="p-4">Intel Xeon Gold</td>
                  <td className="p-4">32GB</td>
                  <td className="p-4">1TB NVMe</td>
                  <td className="p-4 font-bold">$199/mo</td>
                </tr>

                <tr className="hover:bg-gray-50">
                  <td className="p-4 font-semibold">Enterprise</td>
                  <td className="p-4">AMD EPYC</td>
                  <td className="p-4">64GB</td>
                  <td className="p-4">2TB NVMe</td>
                  <td className="p-4 font-bold">$399/mo</td>
                </tr>

              </tbody>

            </table>
          </div>

        </div>
      </section>

      {/* CTA SECTION */}
      <section className="bg-blue-700 text-white py-20 text-center px-6">

        <h2 className="text-4xl font-bold">
          Ready to Launch Your Server?
        </h2>

        <p className="mt-4 text-blue-100">
          Deploy high performance dedicated infrastructure within minutes.
        </p>

        <a
          href="https://www.liquidweb.com/lp/offers/paid-bare-metal-hosting/?cq_src=google_ads&cq_cmp=22057195082&cq_con=167745838730"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-block bg-white text-blue-700 px-8 py-3 rounded-lg font-semibold shadow-lg transition-all duration-300 hover:bg-gray-200 hover:scale-105"
        >
          Get Started
        </a>

      </section>

    </div>
  );
}