import React from "react";

const Features = () => {
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
            <i className="fas fa-truck text-4xl text-gray-600 mr-4"></i>
            <h3 className="text-2xl font-bold">Tracking</h3>
          </div>
          <p className="text-gray-600">
            Blockchain ensures supply chain tracking through transparency, traceability,
            and immutability. Each transaction is securely recorded, allowing
            stakeholders to trace products from origin to destination, reducing
            reliance on central authorities and bolstering trust among
            participants.
          </p>
        </div>
        <div className="bg-white p-8 rounded-lg shadow-md">
          <div className="flex items-center mb-6">
            <i className="fas fa-shield-alt text-4xl text-gray-600 mr-4"></i>
            <h3 className="text-2xl font-bold">Security</h3>
          </div>
          <p className="text-gray-600">
            Blockchain ensures supply chain security through cryptographic protocols,
            decentralized consensus mechanisms, and immutable record-keeping.
            This safeguards against tampering, unauthorized access, and
            counterfeiting, enhancing trust and integrity across the supply
            chain ecosystem.
          </p>
        </div>
        <div className="bg-white p-8 rounded-lg shadow-md">
          <div className="flex items-center mb-6">
            <i className="fas fa-exchange-alt text-4xl text-gray-600 mr-4"></i>
            <h3 className="text-2xl font-bold">Transparency</h3>
          </div>
          <p className="text-gray-600">
            Blockchain provides supply chain transparency by recording
            transactions on a decentralized ledger accessible to all
            participants. This ensures visibility into the entire product
            journey, fostering trust, accountability, and ethical
            practices while reducing the risk of fraud and misinformation.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Features;