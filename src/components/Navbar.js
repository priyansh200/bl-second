import React from "react";
import {Link} from "react-router-dom"
const Navbar = () => {
  return (
    <>
    <nav className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 py-5 flex justify-between items-center">
        <Link to="/" className="font-bold text-2xl">
          BLOCKCHAIN
        </Link>
        <div className="flex items-center">
          <Link to="/" className="text-white hover:text-gray-200 mr-5">
            Home
          </Link>
          <Link to="/about" className="text-white hover:text-gray-200 mr-5">
            About
          </Link>
          <Link to="/services" className="text-white hover:text-gray-200 mr-5">
            Services
          </Link>
          <Link to="/contact" className="text-white hover:text-gray-200">
            Contact
          </Link>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-5">
            Log In
          </button>
        </div>
      </div>
    </nav>
    </>
  );
};

export default Navbar;