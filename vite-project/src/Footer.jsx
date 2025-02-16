import React from "react";
import { FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white text-gray-800 py-10 px-8">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Left Section */}
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-bold text-gray-900">boco</h2>
          <p className="mt-2 text-gray-600 max-w-md">
            We are driven by quality and we’re 0 bullshit. If you think the same way, we love a good chat.
          </p>
          {/* Social Media Icons */}
          <div className="flex justify-center md:justify-start space-x-4 mt-4">
            <FaInstagram className="text-gray-900 text-xl cursor-pointer" />
            <FaLinkedin className="text-gray-900 text-xl cursor-pointer" />
          </div>
        </div>

        {/* Right Section */}
        <div className="mt-6 md:mt-0 text-center md:text-left">
          <h3 className="font-bold text-gray-900">Products</h3>
          <ul className="mt-2 space-y-1 text-gray-600">
            <li>Shopify Store Build</li>
            <li>Custom Landing Pages</li>
            <li>Case Studies</li>
          </ul>
        </div>
      </div>

      {/* Divider and Copyright */}
      <div className="mt-8 border-t border-dashed border-gray-300 pt-4 text-center text-gray-500 text-sm">
        © Copyright, BOCO 2024
      </div>
    </footer>
  );
};

export default Footer;
