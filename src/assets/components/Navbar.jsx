import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div id="root">
      <header
        id="navbar"
        className="fixed w-full bg-white/90 backdrop-blur-sm z-50 shadow-sm"
      >
        <div className="container mx-auto px-4">
          <nav className="flex items-center justify-between h-20">
            {/* Brand Logo */}
            <div className="flex items-center">
              <Link
                to="/"
                className="text-2xl font-serif font-bold text-gray-800"
                aria-label="InteriorCraft Homepage"
              >
                InteriorCraft
              </Link>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <Link to="/" className="text-gray-600 hover:text-gray-900 transition-colors">
                Home
              </Link>
              <Link to="/about-us" className="text-gray-600 hover:text-gray-900 transition-colors">
                About
              </Link>
              <Link to="/services" className="text-gray-600 hover:text-gray-900 transition-colors">
                Services
              </Link>
              <Link to="/portfolio" className="text-gray-600 hover:text-gray-900 transition-colors">
                Portfolio
              </Link>
              <Link to="/process" className="text-gray-600 hover:text-gray-900 transition-colors">
                Process
              </Link>
              <Link
                to="/contact"
                className="bg-gray-800 text-white px-6 py-2 rounded-lg hover:bg-gray-700 transition-colors"
              >
                Contact Us
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                type="button"
                className="text-gray-600 hover:text-gray-900 focus:outline-none"
                onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Toggle menu"
                aria-expanded={isMobileMenuOpen}
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </nav>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1">
                <Link
                  to="/"
                  className="block px-3 py-2 text-gray-600 hover:text-gray-900 transition-colors"
                >
                  Home
                </Link>
                <Link
                  to="/about-us"
                  className="block px-3 py-2 text-gray-600 hover:text-gray-900 transition-colors"
                >
                  About
                </Link>
                <Link
                  to="/services"
                  className="block px-3 py-2 text-gray-600 hover:text-gray-900 transition-colors"
                >
                  Services
                </Link>
                <Link
                  to="/portfolio"
                  className="block px-3 py-2 text-gray-600 hover:text-gray-900 transition-colors"
                >
                  Portfolio
                </Link>
                <Link
                  to="/process"
                  className="block px-3 py-2 text-gray-600 hover:text-gray-900 transition-colors"
                >
                  Process
                </Link>
                <Link
                  to="/contact"
                  className="block px-3 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors text-center"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          )}
        </div>
      </header>
    </div>
  );
};

export default Navbar;
