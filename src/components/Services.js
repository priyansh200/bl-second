import React from "react";

const Services = () => {
  return (
    <div className="bg-gray-100 py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-10">Our Services</h2>
        <p className="text-xl mb-20">
          Blockchain ensures supply chain tracking through transparency, traceability,
          and immutability. Each transaction is securely recorded, allowing
          stakeholders to trace products from origin to destination, reducing
          reliance on central authorities and bolstering trust among
          participants.
        </p>
      </div>
      <div className="container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-4">
        <div className="bg-white p-8 rounded-lg shadow-md">
        <div className="flex items-center mb-6">
            <i className="fas fa-cloud text-4xl text-gray-600 mr-4"></i>
            <h3 className="text-2xl font-bold">Cloud Storage</h3>
          </div>
          <p className="text-gray-600">
            Store and share your files securely using blockchain technology. With
            decentralized storage, your files are distributed across a network of
            computers, ensuring data redundancy and availability.
          </p>
        </div>
        <div className="bg-white p-8 rounded-lg shadow-md">
          <div className="flex items-center mb-6">
            <i className="fas fa-cogs text-4xl text-gray-600 mr-4"></i>
            <h3 className="text-2xl font-bold">Smart Contracts</h3>
          </div>
          <p className="text-gray-600">
            Automate and secure your business processes with smart contracts. These
            self-executing agreements are written in code and stored on the
            blockchain, ensuring transparency, security, and trust among
            participants.
          </p>
        </div>
        <div className="bg-white p-8 rounded-lg shadow-md">
          <div className="flex items-center mb-6">
            <i className="fas fa-mobile-alt text-4xl text-gray-600 mr-4"></i>
            <h3 className="text-2xl font-bold">Mobile App Development</h3>
          </div>
          <p className="text-gray-600">
            Develop cross-platform mobile apps using blockchain technology. Our
            experienced developers create secure, scalable, and user-friendly
            apps that meet your business needs and exceed your expectations.
          </p>
        </div>
        <div className="bg-white p-8 rounded-lg shadow-md">
          <div className="flex items-center mb-6">
            <i className="fas fa-cubes text-4xl text-gray-600 mr-4"></i>
            <h3 className="text-2xl font-bold">Blockchain Consulting</h3>
          </div>
          <p className="text-gray-600">
            Get expert advice on blockchain technology and its implementation in
            your business. Our consultants provide strategic guidance and
            technical support to help you leverage blockchain for your unique
            use case.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;