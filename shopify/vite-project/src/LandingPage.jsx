import React from 'react'
import { motion } from "framer-motion";
import LandingPageBanner from './assets/LandingPageBanner.png';
import lp1 from './assets/lp1.png';
import lp2 from './assets/lp2.png';
import lp3 from './assets/lp3.png';
import lp4 from './assets/lp4.png';
import lp5 from './assets/lp5.png';
import lp6 from './assets/lp6.png';
import lp7 from './assets/lp7.png';
import lp8 from './assets/lp8.png';

const LandingPage = () => {

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
    </div>
  )
}

export default LandingPage;
