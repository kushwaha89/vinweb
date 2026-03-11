import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import HowItWorks from "./pages/HowItWorks";
import PublicCloud from "./pages/PublicCloud";
import PrivateCloud from "./pages/PrivateCloud";
import ServicesColocation from "./pages/ServicesColocation";
import VnetWall from "./pages/VnetWall";
import VnetMox from "./pages/VnetMox";
import BaremetalHosting from "./pages/BaremetalHosting";
import Partners404 from "./pages/Partners404";

// Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        {/* Navbar */}
        <Navbar />

        {/* Main content */}
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/how-it-works" element={<HowItWorks />} />
            <Route path="/services/public-cloud" element={<PublicCloud />} />
            <Route path="/services/private-cloud" element={<PrivateCloud />} />
            <Route path="/services/colocation" element={<ServicesColocation />} />
            <Route path="/products/vnetwall" element={<VnetWall />} />
            <Route path="/products/vnetmox" element={<VnetMox />} />
            <Route path="/products/baremetal-hosting" element={<BaremetalHosting />} />
            <Route path="/partners" element={<Partners404 />} />
          </Routes>
        </div>

        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
