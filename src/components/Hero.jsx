import React from "react";

const Hero = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 md:px-16 py-16 md:py-24 flex flex-col md:flex-row items-center gap-12">
      {/* Left Content */}
      <div className="md:w-1/2 space-y-8">
        <div className="inline-flex items-center bg-purple-50 text-[#7c3aed] px-4 py-1.5 rounded-full text-sm font-bold border border-purple-100">
          <span className="w-2 h-2 bg-[#7c3aed] rounded-full mr-3 animate-pulse"></span>
          New: AI-Powered Tools Available
        </div>

        <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 leading-[1.1] tracking-tight">
          Supercharge Your <br />
          <span className="text-gray-800">Digital Workflow</span>
        </h1>

        <p className="text-gray-500 text-lg md:text-xl max-w-lg leading-relaxed">
          Access premium AI tools, design assets, templates, and productivity
          software—all in one place. Start creating faster today.
        </p>

        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-4">
          <button className="bg-[#7c3aed] text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-[#6d28d9] transform hover:-translate-y-1 transition-all shadow-lg">
            Explore Products
          </button>
          <button className="flex items-center space-x-2 border-2 border-purple-100 px-10 py-4 rounded-xl font-bold text-gray-700 hover:bg-purple-50 transition-all">
            <svg
              className="w-6 h-6 text-[#7c3aed]"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M4.5 3.5v13l11-6.5-11-6.5z" />
            </svg>
            <span>Watch Demo</span>
          </button>
        </div>
      </div>

      {/* Right Image/Graphic */}
      <div className="md:w-1/2 relative">
        <div className="bg-gradient-to-tr from-purple-100 to-white p-4 rounded-[2.5rem]">
          <img
            src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800"
            alt="Digital interface"
            className="rounded-[2rem] shadow-2xl w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
