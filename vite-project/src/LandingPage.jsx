import React,{useState} from 'react'
import { FaArrowLeft, FaArrowRight, FaTimes } from "react-icons/fa";
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from "lucide-react";
import lp1 from './assets/lp1.png';
import lp2 from './assets/lp2.png';
import lp3 from './assets/lp3.png';
import lp4 from './assets/lp4.png';
import lp5 from './assets/lp5.png';
import lp6 from './assets/lp6.png';
import lp7 from './assets/lp7.png';
import lp8 from './assets/lp8.png';
import banner3 from './assets/banner1.png';
import banner4 from './assets/banner2.png';
import banner5 from './assets/banner3.png';
import banner6 from './assets/banner4.png';
import banner7 from './assets/banner5.png';
import banner8 from './assets/banner6.png';


import LandingPageBanner from './assets/banner1.png';
import banner2 from './assets/banner2.png';
const LandingPage = () => {

const images = [
  // banner3,banner4,
  banner5,banner6,banner7,banner8,
 
];
const [currentIndex, setCurrentIndex] = useState(0);
const totalSlides = images.length;

const nextSlide = () => {
  setCurrentIndex((prev) => (prev + 1) % totalSlides);
};

const prevSlide = () => {
  setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
};

  const companies = [lp1, lp2, lp3, lp4, lp5, lp6, lp7, lp8];

  return (
    <div className="bg-white text-center p-10 font-sans">
      {/* Hero Section */}
      <h1 className="text-4xl font-bold text-gray-900">
        Custom Shopify Landing Pages <br /> Designed to Convert
      </h1>
      <p className="text-gray-600 mt-4 max-w-xl mx-auto">
        Whether you're launching a new product, collection, running a campaign, or want to boost sales, our landing pages turn visitors into loyal customers.
      </p>
      <div className="mt-6 flex justify-center gap-4">
        <button className="bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold">Book a Call</button>
        <button className="border border-indigo-600 text-indigo-600 px-6 py-3 rounded-lg font-semibold">Talk to Us</button>
      </div>

      {/* Mockup Section (Single Image) */}
      <div className="mt-10 flex justify-center">
        <img src={LandingPageBanner} alt="Mockup" className="w-3/4 rounded-xl shadow-lg" />
      </div>

      {/* Scrolling Company Logos (Centered) */}
      <div className="flex justify-center mt-10">
        <div className="overflow-hidden bg-gray-100 py-4 w-full max-w-3xl">
          <motion.div
            className="flex gap-10"
            animate={{ x: [0, -1000] }}
            transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
          >
            {companies.map((logo, index) => (
              <img key={index} src={logo} alt="Company Logo" className="h-12" />
            ))}
          </motion.div>
        </div>
      </div>
      <div className="flex flex-col-reverse md:flex-row items-center justify-between px-10 py-16 bg-white text-gray-900">
      {/* Left Side Content */}
      <div className="md:w-1/2">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Done for you end-to-end
        </h1>
        <p className="text-lg text-gray-600 mb-6">
          Conversion-optimized landing pages that turn clicks into customers
        </p>
       
        <ul className="mb-6 space-y-4">
        <li className="flex items-center space-x-3">We do the heavy lifting</li>
          <li className="flex items-center space-x-3">
            <span className="text-xl">📁</span>
            <span>Strategic Planning & Research</span>
          </li>
          <li className="flex items-center space-x-3">
            <span className="text-xl">💻</span>
            <span>Complete Figma Design</span>
          </li>
          <li className="flex items-center space-x-3">
            <span className="text-xl">📜</span>
            <span>Deployment & Testing</span>
          </li>
        </ul>
       
          {/* Contact Button */}
                <Link to="/contact" className="bg-indigo-900 text-white flex items-center p-2 rounded-full w-fit">
                  <div className="px-4 font-bold  flex">Order my Landing Page Design</div>
                  <div className=" bg-white rounded-full w-10 h-10 flex items-center justify-center">
                    <FaArrowLeft className="text-indigo-950 rotate-135" />
                  </div>
                </Link>
      </div>

      {/* Right Side Image */}
      <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center">
        <img
          src={banner2}
          alt="Landing Page Design"
          className="w-full max-w-lg shadow-lg rounded-lg"
        />
      </div>
    </div>
    <div className="flex flex-col items-center justify-center px-6 py-12">
      <h2 className="text-3xl font-bold text-center mb-4">
        Fast, Fresh, and Conversion Optimized
      </h2>
      <p className="text-center text-gray-600 max-w-2xl mb-6">
        Whatever you sell online, our full-stack conversion experts will find
        your brand’s unique features and weave them into a conversion-optimized
        landing page.
      </p>
      <div className="relative w-full max-w-5xl flex items-center justify-center overflow-hidden">
        <button
          onClick={prevSlide}
          className="absolute left-4 p-3 bg-white shadow-md rounded-full z-10"
        >
          <ChevronLeft size={32} />
        </button>
        <div className="w-full max-w-3xl flex overflow-hidden relative">
          <motion.div
            className="flex gap-4"
            initial={{ x: "0%" }}
            animate={{ x: `-${currentIndex * 100}%` }}
            transition={{ duration: 0.5 }}
          >
            {images.map((src, index) => (
              <img
                key={index}
                src={src}
                alt="Mockup"
                className="w-60 h-auto rounded-lg transition-transform duration-500"
              />
            ))}
          </motion.div>
        </div>
        <button
          onClick={nextSlide}
          className="absolute right-4 p-3 bg-white shadow-md rounded-full z-10"
        >
          <ChevronRight size={32} />
        </button>
      </div>
      <button className="mt-6 px-6 py-3 text-lg">Explore Case Studies</button>
    </div>



    </div>
  )
}

export default LandingPage;
