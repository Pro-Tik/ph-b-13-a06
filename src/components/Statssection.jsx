import React from "react";

const StatsSection = () => {
  const stats = [
    { label: "Active Users", value: "50K+" },
    { label: "Premium Tools", value: "200+" },
    { label: "Rating", value: "4.9" },
  ];

  return (
    <section className="bg-[#7c3aed] py-20">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between text-white">
        {stats.map((stat, index) => (
          <React.Fragment key={index}>
            <div className="flex-1 text-center py-8 md:py-0">
              <div className="text-6xl font-black mb-2 tracking-tighter">
                {stat.value}
              </div>
              <div className="text-purple-100 text-lg font-medium opacity-90 uppercase tracking-widest">
                {stat.label}
              </div>
            </div>

            {/* Divider lines between stats - hidden on mobile */}
            {index < stats.length - 1 && (
              <div className="hidden md:block h-20 w-[1px] bg-purple-400 opacity-40 mx-4"></div>
            )}
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};

export default StatsSection;
