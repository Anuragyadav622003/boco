import React from "react";
import { FaCheck } from "react-icons/fa";
import { FaArrowLeft,FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";
import lp1 from "./assets/lp1.png";
import lp2 from "./assets/lp2.png";
import lp3 from "./assets/lp3.png";
import lp4 from "./assets/lp4.png";
import lp5 from "./assets/lp5.png";
import lp6 from "./assets/lp6.png";
import lp7 from "./assets/lp7.png";
import lp8 from "./assets/lp8.png";

import img1 from "./assets/img1.png";
import img2 from "./assets/img2.png";
import img3 from "./assets/img3.png";
import img4 from "./assets/img4.png";
import img5 from "./assets/img5.png";
import img6 from "./assets/img6.png";
import c1 from  './assets/c1.png';
import c2 from  './assets/c2.png';
import c3 from  './assets/c3.png';
import { Link } from "react-router-dom";
import h1 from './assets/h1.png'
import CaseStudies from "./CaseStudies";
const Home = () => {
  const companies = [lp1, lp2, lp3, lp4, lp5, lp6, lp7, lp8];
  const images = [img1, img2, img3, img4, img5, img6];
    const features = [
      {
        title: "Built for High Conversion Rate",
        description:
          "Our Core Focus for building any website is to ensure it reaches and outperforms Conversion Rate benchmarks.",
        icon: c1, // Replace with actual icon component
      },
      {
        title: "Lightning Fast & Visually Stable",
        description:
          "All our websites follow market-leading benchmarks for Speed and Stability, ensuring user engagement & enhanced conversions.",
        icon:c2, // Replace with actual icon component
      },
      {
        title: "Timelines & Budgets On Track",
        description:
          "We have a well-structured process: Strategy, Design & Development with phase-wise updates to ensure milestones are met on time.",
        icon: c3, // Replace with actual icon component
      },
    ];
  return (
    <>
      {/* Main Section */}
      <div className="flex flex-col-reverse md:flex-row items-center justify-between p-10 bg-white">
        {/* Left Content (Text & Buttons) */}
        <div className="max-w-xl p-10">
          <h1 className="text-4xl font-bold text-[#0a0532] leading-tight">
            We build high-converting Shopify stores that drive Profit
          </h1>
          <p className="text-lg text-gray-600 mt-4">
            We're a leading Shopify & Shopify Plus agency who design and develop
            strategic ecommerce websites.
          </p>

          <div className="mt-6 space-y-3">
            <div className="flex items-center text-lg text-[#0a0532] font-medium">
              <FaCheck className="text-purple-400 mr-2" />
              Unmatched Speed & Stability
            </div>
            <div className="flex items-center text-lg text-[#0a0532] font-medium">
              <FaCheck className="text-purple-400 mr-2" />
              Build for Conversions
            </div>
            <div className="flex items-center text-lg text-[#0a0532] font-medium">
              <FaCheck className="text-purple-400 mr-2" />
              Reduced App Stack & Developer Dependencies
            </div>
          </div>

          {/* Buttons */}
          <div className="flex gap-4 mt-6">
            <button className="border-2 border-indigo-900 px-6 py-3 text-indigo-900 font-bold rounded-full hover:bg-indigo-900 hover:text-white transition">
              Audit My Website
            </button>
            <Link to='/contact' className="bg-indigo-900 text-white flex items-center p-2 rounded-full">
              <div className="px-6 font-bold hidden md:flex">Talk to Us</div>
              <div className="bg-indigo-900 md:bg-white rounded-full w-10 h-10 flex items-center justify-center">
                <FaArrowLeft className="text-white md:text-indigo-950 rotate-135" />
              </div>
            </Link>
          </div>
        </div>

        {/* Right Side (Image, but on top in small screens) */}
        <div className="w-full md:w-3/4 flex justify-center">
          <img
            src={h1}
            alt="Shopify Store Preview"
            className="w-full max-w-md"
          />
        </div>
      </div>

      {/* Rating Section */}
      <div className="border-t border-gray-200 relative">
        <div className="absolute -top-3 left-1/4 items-center transform -translate-x-1/2 bg-white px-2">
          <span className="text-yellow-400 text-xl">★★★★★</span>
          <span className="ml-2 text-lg font-semibold">90+ Brands & Counting</span>
        </div>
      </div>

      {/* Scrolling Company Logos */}
      <motion.div
        className="flex gap-10 mt-4"
        animate={{ x: [0, -1000] }}
        transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
      >
        {companies.map((logo, index) => (
          <img key={index} src={logo} alt="Company Logo" className="h-12" />
        ))}
      </motion.div>
      <div>
      <div className="bg-white py-16 px-4 md:px-20 text-center">
      {/* Title Section */}
      <h2 className="text-4xl md:text-5xl font-bold text-[#0a0532]">
        Stunningly Crafted Shopify Solutions <br /> Driven by Insights
      </h2>
      <p className="text-lg text-gray-600 mt-4 max-w-3xl mx-auto">
        As Shopify Partners and a leading eCommerce Web Design Agency, we empower brands 
        to thrive through strategic design and robust Shopify development. We bring a fresh 
        strategic approach to your brand, focusing on delivering pixel-perfect websites, built 
        for Conversions & Growth.
      </p>

      {/* Image Row - Ensuring Full Images */}
      <div className="mt-10 flex justify-center items-center overflow-hidden">
        {images.map((src, index) => (
          <div key={index} className="">
            <img 
              src={src} 
              alt={`Shopify Design ${index + 1}`} 
              className="w-full h-full object-contain rounded-lg shadow-lg"
            />
          </div>
        ))}
      </div>
    </div>

 {/*card section*/}
 <div className="  py-12 px-6 bg-purple-50">
 <p className="text-xl text-center font-bold">Enhance customer experience
 by focusing on the details that matters most</p>
 <div className=" py-12 px-6 flex justify-center  ">
 
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl">
        {features.map((feature, index) => (
          <div key={index} className="bg-white p-6 rounded-xl shadow-md ">
            <img src={feature.icon} alt='#' className="w-24 mb-4"/>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">{feature.title}</h3>
            <p className="text-gray-600 text-sm">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
    </div>


<CaseStudies/>

      </div>
    </>
  );
};

export default Home;