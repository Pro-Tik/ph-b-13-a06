import React from "react";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-6 md:px-16 py-5 bg-white border-b border-gray-100">
      {/* Logo */}
      <div className="text-2xl font-bold text-[#7c3aed]">DigiTools</div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex space-x-8 text-sm font-medium text-gray-600">
        {["Products", "Features", "Pricing", "Testimonials", "FAQ"].map(
          (link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="hover:text-[#7c3aed] transition-colors"
            >
              {link}
            </a>
          ),
        )}
      </div>

      {/* Actions */}
      <div className="flex items-center space-x-4 md:space-x-8">
        <button className="flex items-center text-sm font-semibold text-gray-700 hover:text-[#7c3aed] transition">
          <svg
            className="w-5 h-5 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
            />
          </svg>
          Login
        </button>
        <button className="bg-[#7c3aed] text-white px-6 py-2.5 rounded-xl text-sm font-bold hover:bg-[#6d28d9] transition shadow-md">
          Get Started
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
