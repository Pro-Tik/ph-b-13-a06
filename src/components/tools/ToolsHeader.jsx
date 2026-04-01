import React from "react";

const ToolsHeader = () => {
  return (
    <div className="text-center max-w-2xl mx-auto mb-16 px-6">
      <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
        Premium Digital Tools
      </h2>
      <p className="text-gray-500 text-lg leading-relaxed mb-10">
        Choose from our curated collection of premium digital products designed
        to boost your productivity and creativity.
      </p>

      {/* Toggle Pill */}
      <div className="inline-flex items-center bg-gray-50 border border-gray-100 p-1.5 rounded-full shadow-sm">
        <button className="bg-[#7c3aed] text-white px-8 py-2.5 rounded-full text-sm font-bold transition shadow-md">
          Products
        </button>
        <button className="text-gray-500 px-8 py-2.5 rounded-full text-sm font-bold hover:text-gray-800 transition">
          Cart (2)
        </button>
      </div>
    </div>
  );
};

export default ToolsHeader;
