import React from "react";

const Testimonials = () => {
  return (
    <div className="bg-gray-100 py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-10">Testimonials</h2>
        <p className="text-xl mb-20">
          Hear from our satisfied clients and partners who have experienced the
          benefits of blockchain technology in their businesses.
        </p>
      </div>
      <div className="container mx-auto px-4">
        <div className="swiper-container testimonials-slider">
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="flex items-center mb-6">
                  <img
                    src="https://source.unsplash.com/random/100x100"
                    alt="Testimonial"
                    className="rounded-full w-16 h-16 mr-4"
                  />
                  <div>
                    <p className="text-gray-800 font-bold">John Doe</p>
                    <p className="text-gray-600">CEO, ABC Company</p>
                </div>
              </div>
              <p className="text-gray-600 mt-6">
                "Blockchain has revolutionized our supply chain management, providing
                transparency, security, and efficiency like never before. We're
                thrilled with the results and look forward to a long-term
                partnership with BLOCKCHAIN."
              </p>
            </div>
            <div className="swiper-slide">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="flex items-center mb-6">
                  <img
                    src="https://source.unsplash.com/random/100x100"
                    alt="Testimonial"
                    className="rounded-full w-16 h-16 mr-4"
                  />
                  <div>
                    <p className="text-gray-800 font-bold">Jane Doe</p>
                    <p className="text-gray-600">CTO, XYZ Corporation</p>
                  </div>
                </div>
                <p className="text-gray-600 mt-6">
                  "The BLOCKCHAIN team has been instrumental in implementing
                  blockchain technology in our financial systems, resulting in
                  increased security, transparency, and cost savings. We highly
                  recommend their services."
                </p>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="flex items-center mb-6">
                  <img
                    src="https://source.unsplash.com/random/100x100"
                    alt="Testimonial"
                    className="rounded-full w-16 h-16 mr-4"
                  />
                  <div>
                    <p className="text-gray-800 font-bold">Mike Johnson</p>
                    <p className="text-gray-600">Founder, Innovative Solutions</p>
                  </div>
                </div>
                  <p className="text-gray-600 mt-6">
                    "BLOCKCHAIN's expertise in blockchain technology has helped
                    us stay ahead of the competition in the fast-paced tech
                    industry. Their innovative solutions and exceptional support
                    have exceeded our expectations."
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;