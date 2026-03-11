import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-[#0b1d3a] text-white pt-12">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">

        {/* About */}
        <div>
          <h3 className="text-lg font-semibold mb-3">About Us</h3>
          <p className="text-sm text-gray-300 leading-relaxed">
            Deals in IT Infrastructure setup, Data Center Design, Cloud Implementation, etc.
          </p>

          <div className="flex gap-4 mt-4 text-xl">
            <a href="https://facebook.com" target="_blank"><i className="fab fa-facebook-f"></i></a>
            <a href="https://twitter.com" target="_blank"><i className="fab fa-twitter"></i></a>
            <a href="https://instagram.com" target="_blank"><i className="fab fa-instagram"></i></a>
            <a href="https://linkedin.com" target="_blank"><i className="fab fa-linkedin-in"></i></a>
            <a href="https://youtube.com" target="_blank"><i className="fab fa-youtube"></i></a>
          </div>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Contact Us</h3>
          <p className="text-sm text-gray-300">📞 +91 1294159609</p>
          <p className="text-sm text-gray-300 mt-2">📍 157, Deputyganj, Nagram - Nilmatha Rd, near DN Motors, near Railway crossing, Roberts Lines, Lucknow, Uttar Pradesh 226002</p>
          <p className="text-sm text-gray-300 mt-2">✉ support@vincentio.in</p>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Our Services</h3>
          <ul className="text-sm text-gray-300 space-y-2">
            <li><Link to="/services/public-cloud" className="hover:underline">Public Cloud</Link></li>
            <li><Link to="/services/private-cloud" className="hover:underline">Private Cloud</Link></li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="text-sm text-gray-300 space-y-2">
            <li><Link to="/about" className="hover:underline">About Us</Link></li>
            <li><Link to="/contact" className="hover:underline">Contact</Link></li>
            <li><Link to="/how-it-works" className="hover:underline">How It Works</Link></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-600 mt-10 py-4 text-center text-sm text-gray-400">
        © 2020–2026 Vincentio Tech Solutions. All rights reserved.
      </div>
    </footer>
  );
}
