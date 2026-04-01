import React from "react";

export default function Pricing() {
  const checkIcon = (colorClass) => (
    <svg
      className={`w-4 h-4 mr-3 shrink-0 ${colorClass}`}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="3"
        d="M5 13l4 4L19 7"
      />
    </svg>
  );

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-gray-500 text-sm md:text-base">
            Choose the plan that fits your needs. Upgrade or downgrade anytime.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto items-center">
          {/* Starter Plan */}
          <div className="bg-gray-50 rounded-3xl p-8 border border-gray-100">
            <h3 className="text-xl font-bold text-gray-900">Starter</h3>
            <p className="text-gray-500 text-sm mt-2 mb-6">
              Perfect for getting started
            </p>
            <div className="mb-6">
              <span className="text-4xl font-bold text-gray-900">$0</span>
              <span className="text-gray-500 text-sm">/Month</span>
            </div>
            <ul className="space-y-4 mb-8 text-sm text-gray-600">
              <li className="flex items-center">
                {checkIcon("text-green-500")} Access to 10 free tools
              </li>
              <li className="flex items-center">
                {checkIcon("text-green-500")} Basic templates
              </li>
              <li className="flex items-center">
                {checkIcon("text-green-500")} Community support
              </li>
              <li className="flex items-center">
                {checkIcon("text-green-500")} 1 project per month
              </li>
            </ul>
            <button className="w-full bg-[#7c3aed] text-white py-3 rounded-xl font-bold text-sm hover:bg-[#6d28d9] transition-colors">
              Get Started Free
            </button>
          </div>

          {/* Pro Plan */}
          <div className="bg-[#7c3aed] rounded-3xl p-8 relative shadow-xl transform md:-translate-y-4">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <span className="bg-amber-400 text-amber-900 text-xs font-bold px-3 py-1 rounded-full shadow-sm">
                Most Popular
              </span>
            </div>
            <h3 className="text-xl font-bold text-white">Pro</h3>
            <p className="text-purple-200 text-sm mt-2 mb-6">
              Ideal for professionals
            </p>
            <div className="mb-6 text-white">
              <span className="text-4xl font-bold">$29</span>
              <span className="text-purple-200 text-sm">/Month</span>
            </div>
            <ul className="space-y-4 mb-8 text-sm text-white">
              <li className="flex items-center">
                {checkIcon("text-white")} Access to all premium tools
              </li>
              <li className="flex items-center">
                {checkIcon("text-white")} Unlimited templates
              </li>
              <li className="flex items-center">
                {checkIcon("text-white")} Priority support
              </li>
              <li className="flex items-center">
                {checkIcon("text-white")} Unlimited projects
              </li>
              <li className="flex items-center">
                {checkIcon("text-white")} Cloud sync
              </li>
              <li className="flex items-center">
                {checkIcon("text-white")} Advanced analytics
              </li>
            </ul>
            <button className="w-full bg-white text-[#7c3aed] py-3 rounded-xl font-bold text-sm hover:bg-gray-50 transition-colors">
              Start Pro Trial
            </button>
          </div>

          {/* Enterprise Plan */}
          <div className="bg-gray-50 rounded-3xl p-8 border border-gray-100">
            <h3 className="text-xl font-bold text-gray-900">Enterprise</h3>
            <p className="text-gray-500 text-sm mt-2 mb-6">
              For teams and businesses
            </p>
            <div className="mb-6">
              <span className="text-4xl font-bold text-gray-900">$99</span>
              <span className="text-gray-500 text-sm">/Month</span>
            </div>
            <ul className="space-y-4 mb-8 text-sm text-gray-600">
              <li className="flex items-center">
                {checkIcon("text-green-500")} Everything in Pro
              </li>
              <li className="flex items-center">
                {checkIcon("text-green-500")} Team collaboration
              </li>
              <li className="flex items-center">
                {checkIcon("text-green-500")} Custom integrations
              </li>
              <li className="flex items-center">
                {checkIcon("text-green-500")} Dedicated support
              </li>
              <li className="flex items-center">
                {checkIcon("text-green-500")} SLA guarantee
              </li>
              <li className="flex items-center">
                {checkIcon("text-green-500")} Custom branding
              </li>
            </ul>
            <button className="w-full bg-[#7c3aed] text-white py-3 rounded-xl font-bold text-sm hover:bg-[#6d28d9] transition-colors">
              Contact Sales
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
