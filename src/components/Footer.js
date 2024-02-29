import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-10">
      <div className="container mx-auto text-center">
        <p className="text-lg">
          © 2023 BLOCKCHAIN. All rights reserved.
        </p>
        <p className="text-lg mt-2">
          Made with 💖 by{" "}
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            Your Company
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;