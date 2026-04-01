import React from "react";

export default function Steps() {
  const steps = [
    {
      id: 1,
      title: "Create Account",
      description:
        "Sign up for free in seconds. No credit card required to get started.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="50"
          height="50"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide lucide-user-icon lucide-user"
        >
          <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
          <circle cx="12" cy="7" r="4" />
        </svg>
      ),
    },
    {
      id: 2,
      title: "Choose Products",
      description:
        "Browse our catalog and select the tools that fit your needs.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="50"
          height="50"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide lucide-box-icon lucide-box"
        >
          <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
          <path d="m3.3 7 8.7 5 8.7-5" />
          <path d="M12 22V12" />
        </svg>
      ),
    },
    {
      id: 3,
      title: "Start Creating",
      description: "Download and start using your premium tools immediately.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="50"
          height="50"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide lucide-rocket-icon lucide-rocket"
        >
          <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
          <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09" />
          <path d="M9 12a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.4 22.4 0 0 1-4 2z" />
          <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 .05 5 .05" />
        </svg>
      ),
    },
  ];

  return (
    <section className="py-20 bg-[#fafafa]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Get Started In 3 Steps
          </h2>
          <p className="text-gray-500 text-sm md:text-base">
            Start using premium digital tools in minutes, not hours.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step) => (
            <div
              key={step.id}
              className="relative bg-white rounded-2xl p-8 shadow-md border border-gray-100 text-center flex flex-col items-center group hover:shadow-md transition-shadow"
            >
              {/* Step Badge */}
              <div className="absolute -top-4 -right-4 md:top-4 md:right-4 w-6 h-6 bg-[#7c3aed] text-white rounded-full flex items-center justify-center text-xs font-bold ring-4 ring-white">
                {step.id}
              </div>

              {/* Icon */}
              <div className="w-30 h-30 rounded-full bg-purple-300 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {step.icon}
              </div>

              <h3 className="text-lg font-bold text-gray-900 mb-3">
                {step.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
