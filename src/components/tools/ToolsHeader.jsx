import React from "react";

const ToolsHeader = ({ activeTab, setActiveTab, cartCount }) => {
  const activeStyle = "bg-[#7c3aed] text-white shadow-md";
  const inactiveStyle =
    "text-gray-500 hover:text-gray-800 bg-transparent shadow-none";
  return (
    <div className="text-center max-w-2xl mx-auto mb-16 px-6 mt-12">
      <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
        Premium Digital Tools
      </h2>
      <p className="text-gray-500 text-lg leading-relaxed mb-10">
        Choose from our curated collection of premium digital products designed
        to boost your productivity and creativity.
      </p>

      {/* Toggle Pill */}
      <div className="inline-flex items-center bg-gray-50 border border-gray-100 p-1.5 rounded-full shadow-sm">
        <button
          onClick={() => setActiveTab("products")}
          className={`px-8 py-2.5 rounded-full text-sm font-bold transition ${
            activeTab === "products" ? activeStyle : inactiveStyle
          }`}
        >
          Products
        </button>
        <button
          onClick={() => setActiveTab("cart")}
          className={`px-8 py-2.5 rounded-full text-sm font-bold transition ${
            activeTab === "cart" ? activeStyle : inactiveStyle
          }`}
        >
          Cart ({cartCount})
        </button>
      </div>
    </div>
  );
};

export default ToolsHeader;
