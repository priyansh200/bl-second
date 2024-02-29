import React from "react";

const Faq = () => {
  return (
    <div className="bg-gray-100 py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-10">Frequently Asked Questions</h2>
        <p className="text-xl mb-20">
          Here are some frequently asked questions about blockchain technology and
          its applications.
        </p>
      </div>
      <div className="container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
        <div className="bg-white p-8 rounded-lg shadow-md">
          <h3 className="text-2xl font-bold mb-4">
            What is blockchain technology?
          </h3>
          <p className="text-gray-600">
            Blockchain is a decentralized, distributed ledger technology that
            records transactions across multiple computers in a way that ensures the
            integrity and security of the data. Each block in the chain
            contains a cryptographic hash of the previous block, making it
            resistant to tampering and fraud.
          </p>
        </div>
        <div className="bg-white p-8 rounded-lg shadow-md">
          <h3 className="text-2xl font-bold mb-4">
            How does blockchain work?
          </h3>
          <p className="text-gray-600">
            Blockchain works by creating a digital ledger of transactions that
            are grouped into blocks, which are then linked together in
            chronological order to form a chain. Each block contains a unique
            cryptographic hash of the previous block, ensuring the
            immutability of the data. Transactions are validated and added
            to the blockchain through a process called consensus, typically
            performed by a network of computers (nodes) following predefined
            protocols.
          </p>
        </div>
        <div className="bg-white p-8 rounded-lg shadow-md">
          <h3 className="text-2xl font-bold mb-4">
            What are the advantages of blockchain?
          </h3>
          <p className="text-gray-600">
            Blockchain offers several advantages, including enhanced security
            through cryptography and decentralization, transparency and
            immutability of data, cost efficiency by eliminating
            intermediaries, and opportunities for innovation in various
            industries such as finance, supply chain, healthcare, and more.
          </p>
        </div>
        <div className="bg-white p-8 rounded-lg shadow-md">
          <h3 className="text-2xl font-bold mb-4">
            What are the challenges of blockchain?
          </h3>
          <p className="text-gray-600">
            Despite its benefits, blockchain technology faces challenges such as
            scalability issues, energy consumption associated with proof-of-work
            consensus mechanisms, regulatory uncertainty, interoperability between
            different blockchain networks, and concerns about privacy and data
            protection.
          </p>
        </div>
        <div className="bg-white p-8 rounded-lg shadow-md">
          <h3 className="text-2xl font-bold mb-4">
            What are some real-world applications of blockchain?
          </h3>
          <p className="text-gray-600">
            Blockchain technology is being utilized in various industries for
            applications such as cryptocurrency transactions, supply chain
            management, identity verification, voting systems, digital rights
            management, healthcare record-keeping, real estate transactions, and
            more. Its decentralized and transparent nature makes it suitable
            for any use case requiring secure and tamper-proof data
            management.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Faq;