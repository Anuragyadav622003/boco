import { useState, useEffect, useRef } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { FaArrowLeft, FaBars, FaTimes } from "react-icons/fa";
import Footer from "./Footer";

function Layout() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const location = useLocation(); // Get current route

  // Close menu when clicking outside
  useEffect(() => {
    function handleOutsideClick(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    }
    if (menuOpen) {
      document.addEventListener("mousedown", handleOutsideClick);
    } else {
      document.removeEventListener("mousedown", handleOutsideClick);
    }
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [menuOpen]);

  return (
    <div className="">
      <div className="p-4">
        {/* Navbar */}
        <div className="flex justify-between md:justify-evenly items-center relative">
          {/* Mobile Menu Button */}
          <div
            className="md:hidden cursor-pointer"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FaTimes className="text-2xl text-indigo-900" /> : <FaBars className="text-2xl text-indigo-900" />}
          </div>

          {/* Logo */}
          <div className="text-4xl text-indigo-900 font-bold">boco</div>

          {/* Desktop Menu with Active Link */}
          <div className="hidden md:flex justify-evenly border border-gray-300 rounded-full text-md text-indigo-900 font-bold p-2 w-1/2">
            <Link
              to="/boco-shopify-store-build"
              className={`px-4 py-2 rounded-full ${location.pathname === "/boco-shopify-store-build" ? "bg-gray-200" : ""}`}
            >
              Shopify Store Build
            </Link>
            <Link
              to="/custom-shopify-landing-page"
              className={`px-4 py-2 rounded-full ${location.pathname === "/custom-shopify-landing-page" ? "bg-gray-200" : ""}`}
            >
              Landing Page Design
            </Link>
            <Link
              to="/case-studies"
              className={`px-4 py-2 rounded-full ${location.pathname === "/case-studies" ? "bg-gray-200" : ""}`}
            >
              Case Studies
            </Link>
          </div>

          {/* Contact Button */}
          <Link to="#" className="bg-indigo-900 text-white flex items-center p-2 rounded-full">
            <div className="px-6 font-bold hidden md:flex">Talk to Us</div>
            <div className="bg-indigo-900 md:bg-white rounded-full w-10 h-10 flex items-center justify-center">
              <FaArrowLeft className="text-white md:text-indigo-950 rotate-135" />
            </div>
          </Link>
        </div>

        {/* Mobile Dropdown Menu with Active Link */}
        <div
          ref={menuRef}
          className={`absolute top-16 left-4 right-4 bg-white border border-gray-300 rounded-lg shadow-lg p-4 flex flex-col space-y-3 md:hidden transition-all duration-300 ${
            menuOpen ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"
          }`}
        >
          <Link
            to="/boco-shopify-store-build"
            className={`px-4 py-2 rounded-lg ${location.pathname === "/boco-shopify-store-build" ? "bg-gray-300" : ""}`}
            onClick={() => setMenuOpen(false)}
          >
            Shopify Store Build
          </Link>
          <Link
            to="/custom-shopify-landing-page"
            className={`px-4 py-2 rounded-lg ${location.pathname === "/custom-shopify-landing-page" ? "bg-gray-300" : ""}`}
            onClick={() => setMenuOpen(false)}
          >
            Landing Page Design
          </Link>
          <Link
            to="/case-studies"
            className={`px-4 py-2 rounded-lg ${location.pathname === "/case-studies" ? "bg-gray-300" : ""}`}
            onClick={() => setMenuOpen(false)}
          >
            Case Studies
          </Link>
        </div>
      </div>

      {/* Page Content */}
      <div className="">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default Layout;
