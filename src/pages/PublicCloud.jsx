import React from "react";

export default function PublicCloud() {
  return (
    <div className="pt-32">

      {/* Page Title */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-semibold text-gray-800">Public Cloud</h1>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-start">
        
        {/* Left Text */}
        <div>
          <h2 className="text-xl font-semibold text-sky-500 mb-4">
            Public Cloud Solution’s For Core Infrastructure, Software | Public Cloud Server
          </h2>

          <p className="text-gray-700 mb-4">
            Public cloud facilitates access to IT resources on a “pay as you go” billing model. 
            A service provider manages a public cloud solution’s core infrastructure, software 
            and other back-end architecture in a multitenant environment in order to free up the 
            customer from these responsibilities.
          </p>

          <p className="text-gray-700 mb-4">
            Choosing the right public cloud provider is becoming an increasingly nuanced discussion 
            that goes well beyond scale. There are three major players in the public cloud platforms arena – 
            Amazon Web Services (AWS), Microsoft’s Azure, Google Cloud, Digital Ocean, Linode and Rackspace Platform.
          </p>

          <p className="text-gray-700 mb-4">
            The top cloud computing companies provide a wide array of cloud-related products and services, 
            including infrastructure-as-a-service (IaaS), platform as a service (PaaS) and software-as-a-service (SaaS).
          </p>
        </div>

        {/* Right Image */}
        <div className="flex justify-center">
          <img
            src="/images/publiccloud.jpg"
            alt="Public Cloud"
            className="w-72"
          />
        </div>
      </div>

      {/* Providers Section */}
      <div className="max-w-7xl mx-auto px-6 mt-16 grid md:grid-cols-3 gap-10 text-center">

        <div>
          <img src="https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg" className="h-12 mx-auto mb-3" />
          <p className="text-sm text-gray-600">
            Amazon Web Services (AWS) is the market leader in IaaS (Infrastructure-as-a-Service)
             and PaaS (Platform-as-a-Service) for cloud ecosystems, which can be combined to create a
              scalable cloud application without worrying about delays related to infrastructure provisioning 
              (compute, storage, and network) and management.
          </p>
        </div>

        <div>
          <img src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Microsoft_Azure.svg" className="h-12 mx-auto mb-3" />
          <p className="text-sm text-gray-600">
            Enter Microsoft Azure, the industry leader’s solution for going to a partially or totally 
            cloud-based architecture. Below is a detailed look at what Azure is,
             the power of partnering with Microsoft for a cloud or hybrid cloud solution, and the 
             best way to get full and actionable visibility into your aggregated logs and infrastructure metrics so your 
             organization can react quickly to opportunities.
          </p>
        </div>

        <div>
          <img src="https://upload.wikimedia.org/wikipedia/commons/5/51/Google_Cloud_logo.svg" className="h-12 mx-auto mb-3" />
          <p className="text-sm text-gray-600">
            Enter Microsoft Azure, the industry leader’s solution for going to a partially or totally
           cloud-based architecture. Below is a detailed look at what Azure is, 
           the power of partnering with Microsoft for a cloud or hybrid cloud solution, 
           and the best way to get full and actionable visibility into your aggregated logs and 
           infrastructure metrics so your organization can react quickly to opportunitie
          </p>
        </div>

        <div>
          <img src="https://upload.wikimedia.org/wikipedia/commons/f/ff/DigitalOcean_logo.svg" className="h-12 mx-auto mb-3" />
          <p className="text-sm text-gray-600">
            DigitalOcean, Inc. is an American cloud infrastructure provider headquartered in New York City with 
            data centers worldwide. DigitalOcean provides developers, startups, 
            and SMBs with cloud infrastructure-as-a-service platforms
          </p>
        </div>

        <div>
          <img src="/images/linode.jpg" alt="Linode" className="h-12 mx-auto mb-3" />

          <p className="text-sm text-gray-600">
            Linode, LLC is an American privately-owned cloud hosting company that provides
             virtual private servers. It is based in Philadelphia, Pennsylvania
          </p>
        </div>

        <div>
          <img src="/images/rackspace.png" alt="Rackspace" className="h-12 mx-auto mb-3" />
          <p className="text-sm text-gray-600">
            As a cloud computing services pioneer, we deliver proven multicloud solutions
             across your apps, data, and security. Maximize the benefits of modern cloud.
          </p>
        </div>

      </div>
    </div>
  );
}
