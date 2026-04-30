import { Link } from "react-router-dom";
import { useState } from "react";
export default function Navbar() {
  const [serviceOpen, setServiceOpen] = useState(false);
  const [productOpen, setProductOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow z-50">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
      
  <Link to="/">
  <img 
    src="/cropped-newww.png"
    alt="Vincentio Tech Solutions"
    className="h-20 w-auto"
  />
</Link>
        <nav className="hidden md:flex gap-8 text-gray-700 font-medium items-center">

          <Link to="/" className="hover:text-blue-600">Home</Link>

          {/* Services Dropdown */}
<div
  className="relative"
  onMouseEnter={() => setServiceOpen(true)}
  onMouseLeave={() => setServiceOpen(false)}
>
  <span className="cursor-pointer hover:text-blue-600 flex items-center gap-1">
    Services
    <span
      className={`transition-transform duration-300 ${
        serviceOpen ? "rotate-180" : "rotate-0"
      }`}
    >
      ▾
    </span>
  </span>

  <div
    className={`absolute top-8 left-0 w-56 bg-white shadow-xl rounded-lg py-2 transition-all duration-300 transform ${
      serviceOpen
        ? "opacity-100 visible translate-y-0"
        : "opacity-0 invisible -translate-y-2"
    }`}
  >
    <Link
      to="/services/public-cloud"
      className="block px-4 py-2 hover:bg-blue-50 hover:text-blue-600 transition"
    >
      Public Cloud
    </Link>

    <Link
      to="/services/private-cloud"
      className="block px-4 py-2 hover:bg-blue-50 hover:text-blue-600 transition"
    >
      Private Cloud
    </Link>

    <Link
      to="/services/colocation"
      className="block px-4 py-2 hover:bg-blue-50 hover:text-blue-600 transition"
    >
      Services Colocation
    </Link>
  </div>
</div>


              {/* Products Dropdown */}
<div
  className="relative"
  onMouseEnter={() => setProductOpen(true)}
  onMouseLeave={() => setProductOpen(false)}
>
  {/* Dropdown Button */}
  <span className="cursor-pointer hover:text-blue-600 flex items-center gap-1 font-medium">
    Products
    <span
      className={`transition-transform duration-300 ${
        productOpen ? "rotate-180" : "rotate-0"
      }`}
    >
      ▾
    </span>
  </span>

  {/* Dropdown Menu */}
  <div
    className={`absolute top-8 left-0 w-56 bg-white shadow-2xl rounded-lg py-2 transition-all duration-300 transform z-50
      ${productOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2"}
    `}
  >
    {/* Network & Security */}
    <div className="relative group">
      <div className="px-4 py-2 hover:bg-blue-50 hover:text-blue-600 cursor-pointer flex justify-between items-center transition">
        Network & Security <span className="text-gray-400">›</span>
      </div>

      <div
        className="absolute top-0 left-full w-44 bg-white shadow-xl rounded-lg py-2
          opacity-0 invisible group-hover:opacity-100 group-hover:visible
          transition-all duration-300 transform -translate-y-1 group-hover:translate-y-0"
      >
        <Link
          to="/products/vnetwall"
          className="block px-4 py-2 hover:bg-blue-50 hover:text-blue-600 transition"
        >
          Flexbox
        </Link>
      </div>
    </div>

    {/* Server Hardware */}
        <div className="relative group">
      <div className="px-4 py-2 hover:bg-blue-50 hover:text-blue-600 cursor-pointer flex justify-between items-center transition">
        Server Hardware <span className="text-gray-400">›</span>
      </div>

      <div
        className="absolute top-0 left-full w-44 bg-white shadow-xl rounded-lg py-2
          opacity-0 invisible group-hover:opacity-100 group-hover:visible
          transition-all duration-300 transform -translate-y-1 group-hover:translate-y-0"
      >
        <Link
          to="/products/server-hardware/rack-servers"
          className="block px-4 py-2 hover:bg-blue-50 hover:text-blue-600 transition"
        >
          Rack Servers
        </Link>

        

        <Link
      to="/products/baremetal-hosting"
      className="block px-4 py-2 hover:bg-blue-50 hover:text-blue-600 transition"
    >
      Baremetal Hosting
    </Link>

      </div>
    </div>
    </div>
    </div>

          <Link to="/partners" className="hover:text-blue-600">Partners</Link>

          <Link to="/pricing" className="hover:text-blue-600">Pricing</Link>

          <Link to="/about" className="hover:text-blue-600">About Us</Link>

          <Link
            to="/contact"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Get Quote
          </Link>

        </nav>
      </div>
    </header>
  );
}
