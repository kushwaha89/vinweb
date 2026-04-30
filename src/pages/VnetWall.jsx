import React from "react";
import useScrollAnimation from "../hooks/useScrollAnimation";

const FeatureItem = ({ img, title, desc, delay, icon }) => {
  const [ref, show] = useScrollAnimation();

  return (
    <div
      ref={ref}
      className={`
        transition-all duration-700 ease-out
        transform
        ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
      `}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <img
        src={img || icon}
        alt={title}
        className="mx-auto mb-4 h-16 transition-transform duration-300 hover:scale-110"
      />

      <h3 className="text-lg font-medium mb-3 text-gray-800 hover:text-blue-600 transition">
        {title}
      </h3>

      <p className="text-gray-600 text-sm leading-relaxed">
        {desc}
      </p>
    </div>
  );
};

const Vnetwall = () => {
  const [imageRef, imageShow] = useScrollAnimation();

  return (
    <div className="w-full bg-white">

      {/* HERO SECTION */}
      <section className="pt-32 pb-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6  text-center">

          <h1 className="text-2xl sm:text-3xl md:text-5xl font-light text-gray-800 mb-6 leading-tight 
            max-w-4xl mx-auto px-4 break-words whitespace-normal">
                Robust & Open ThinPC Platform
        </h1>
          <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Flexbox is an open thin PC which can be used as a firewall, thin client, or thin Home PC.
          </p>

        </div>
      </section>

      {/* FEATURE SECTION */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-3xl font-light text-center text-gray-800 mb-12">
            FlexBox Features
          </h2>

          <div className="grid md:grid-cols-4 gap-12 text-center">
            {[
              {
                img: "/images/Routing.png",
                title: "Firewall and routing features",
                desc: "Firewall filters network traffic to prevent unauthorized access. Routing selects the best path for data packets between networks."
              },
              {
                img: "/images/feature.png",
                title: "Stateful inspection, IP / DNS filtering",
                desc: "Stateful inspection monitors active connections while IP/DNS filtering allows domain and IP control for enhanced security."
              },
              {
                img: "/images/VPN.png",
                title: "Anti-spoofing, captive portal, VPN",
                desc: "Prevents IP spoofing, enables captive portal authentication, and provides secure VPN remote access."
              },
              {
                img: "/images/proxy.png",
                title: "Proxy and Content filtering",
                desc: "Controls internet traffic, blocks harmful content, and enforces enterprise security policies."
              }
            ].map((item, i) => (
              <FeatureItem key={i} {...item} delay={i * 150} />
            ))}
          </div>

        </div>
      </section>

      {/* SECOND FEATURE ROW */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12 text-center">
          {[
            {
              icon: "/images/system.png",
              title: "User authentication & System security",
              desc: "Ensures authorized user access and manages complete system security against threats."
            },
            {
              icon: "/images/NAt.png",
              title: "NAT, PAT, Policy based routing",
              desc: "NAT translates IP addresses, PAT shares IP with port translation, and policy routing directs traffic based on rules."
            },
            {
              icon: "/images/DNS.png",
              title: "CSRF protection, DNS forwarding",
              desc: "Implements CSRF protection and forwards DNS queries securely to external DNS servers."
            },
            {
              icon: "/images/IPse.png",
              title: "IPSec, L2TP, IPv6 support",
              desc: "Supports secure IPSec and L2TP VPN protocols along with next-generation IPv6 networking."
            }
          ].map((item, i) => (
            <FeatureItem key={i} {...item} delay={i * 150} />
          ))}
        </div>
      </section>

      {/* VNETWALL 400H */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-2xl font-semibold mb-6 text-blue-600">
              VNETWALL 400H
            </h2>

            <ul className="text-gray-700 space-y-3 text-sm">
              <li>L3 Forwarding: 2.55 Gbps</li>
              <li>Firewall: 2.09 Gbps (10k ACLs)</li>
              <li>IPsec VPN: 960 Mbps</li>
              <li>Silent operation (fanless)</li>
              <li>Desktop, wall, or rack mount</li>
              <li>136×125×40mm | 1.5 KG</li>
            </ul>

            <a
              href="https://vincentio.in/wp-content/uploads/2023/07/Vnetwall-400H-datasheet.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-8 px-8 py-3 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition"
            >
              Download Datasheet
            </a>
          </div>

          <img
            src="/images/400H.jpg"
            alt="VNETWALL 400H"
            className="mx-auto max-w-sm md:max-w-md"
          />
        </div>
      </section>

      {/* HERO IMAGE WITH ANIMATION */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6">
          <div
            ref={imageRef}
            className={`
              rounded-xl shadow-2xl border overflow-hidden
              transform transition-all duration-1000 ease-out
              hover:scale-105
              ${imageShow ? "opacity-100 scale-100" : "opacity-0 scale-95"}
            `}
          >
            <img
              src="/images/Vnetwall.jpg"
              alt="VnetWall Dashboard"
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      </section>

      {/* SUPPORT SECTION */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-blue-600 rounded-xl px-10 py-14 flex flex-col md:flex-row justify-between items-center">

            <div>
              <h2 className="text-white text-3xl mb-3">
                Support and documentation
              </h2>
              <p className="text-white text-lg">
                It's fast, Almost free and Reliable!
              </p>
            </div>

            <a
              href="https://docs.opnsense.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 md:mt-0 bg-red-500 text-white px-8 py-3 rounded-full hover:bg-white hover:text-red-500 transition"
            >
              READ MORE
            </a>

          </div>
        </div>
      </section>

    </div>
  );
};

export default Vnetwall;
