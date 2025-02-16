import React from "react";
import f2 from  "./assets/f2.png";
import f1 from  "./assets/f1.png";
const CaseStudies = () => {
  return (
    <div className="bg-white py-12 px-6 md:px-16">
      <div className="text-center mb-10">
        <h3 className="text-lg text-black font-semibold">Case Studies</h3>
        <h2 className="text-4xl font-bold text-black">Success Stories & Results</h2>
        <p className="text-black mt-4 max-w-2xl mx-auto">
          We've worked with nearly 100 brands in different modes and capacities over the years. Here's a few of our favorite success stories.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Fashion Case Study */}
        <div className="bg-white rounded-2xl shadow-lg p-6 relative">
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-purple-300 text-black mt-9 text-center py-1 px-3 rounded-full">
            Fashion
          </div>
          <img src={f1} alt="Fashion Case Study" className="w-full rounded-2xl mt-6" />
          <h3 className="text-xl font-semibold mt-4 text-black">
            Stylish Wodrobe saw a 3X growth in revenue within 90 days of revamp
          </h3>
          <div className="mt-4 grid grid-cols-3 text-center text-black">
            <div>
              <p className="text-2xl font-bold">3x</p>
              <p className="text-sm">Revenue Growth</p>
            </div>
            <div>
              <p className="text-2xl font-bold">1.87s</p>
              <p className="text-sm">Site Load Speed</p>
            </div>
            <div>
              <p className="text-2xl font-bold">48%</p>
              <p className="text-sm">Increased CVR</p>
            </div>
          </div>
          {/* Centered Read Full Case Study */}
          <a href="#" className="text-black underline mt-4 w-full block text-center font-semibold">
            Read Full Case Study →
          </a>
        </div>

        {/* Health & Wellness Case Study */}
        <div className="bg-white rounded-2xl shadow-lg p-6 relative">
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-purple-300 text-black mt-8 text-center py-1 px-3 rounded-full">
            Health & Wellness
          </div>
          <img src={f2} alt="Health & Wellness Case Study" className="w-full rounded-2xl mt-6" />
          <h3 className="text-xl font-semibold mt-4 text-black">
            Store Revamp for The Good Leaf doubles Revenue & Boosts Conversions by 40%
          </h3>
          <div className="mt-4 grid grid-cols-3 text-center text-black">
            <div>
              <p className="text-2xl font-bold">150%</p>
              <p className="text-sm">Increased CVR</p>
            </div>
            <div>
              <p className="text-2xl font-bold">1.87s</p>
              <p className="text-sm">Site Load Speed</p>
            </div>
            <div>
              <p className="text-2xl font-bold">25%</p>
              <p className="text-sm">Lift in AOV</p>
            </div>
          </div>
          {/* Centered Read Full Case Study */}
          <a href="#" className="text-black underline mt-4 w-full block text-center font-semibold">
            Read Full Case Study →
          </a>
        </div>
      </div>
      <div className="border border-gray-300 px-9 py-9 mt-10 text-center">
      <h2 className="text-3xl font-bold text-[#0a0532]">
        Faster Websites. Higher conversion. More revenue.
      </h2>
    </div>
    </div>
    
  );
};

export default CaseStudies;