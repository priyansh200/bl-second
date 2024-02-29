import React from "react";

const Hero = () => {
  return (
    <div className="bg-cover bg-center h-screen flex items-center justify-center">
      <div className="container mx-auto text-center">
        <h1 className="text-6xl font-bold mb-5">
          Why Choose BLOCKCHAIN
        </h1>
        <p className="text-xl mb-10">
          Blockchain offers businesses enhanced security, decentralization,
          transparency, cost efficiency, and innovation. It ensures secure
          transactions, eliminates single points of failure, reduces
          reliance on intermediaries, and fosters growth in a competitive
          landscape.
        </p>
        <form className="form-search flex justify-center">
          <input
            type="text"
            className="form-control w-1/2 py-3 px-5 mr-5 rounded-l-full"
            placeholder="Enter Your Tracking ID"
          />
          <button type="submit" className="btn btn-primary">
            Search
          </button>
        </form>
        <div className="stats-item text-center mt-10">
          <span className="text-5xl font-bold block mb-5">100</span>
          <p>Percent Safe</p>
        </div>
        <div className="stats-item text-center mt-10">
          <span className="text-5xl font-bold block mb-5">100</span>
          <p>Percent Reliable</p>
        </div>
        <div className="stats-item text-center mt-10">
          <span className="text-5xl font-bold block mb-5">100</span>
          <p>Percent Transparent</p>
        </div>
        <div className="stats-item text-center mt-10">
          <span className="text-5xl font-bold block mb-5">100</span>
          <p>Percent Efficient</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;