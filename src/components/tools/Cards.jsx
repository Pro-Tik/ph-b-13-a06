import React from "react";
import * as FaIcons from "react-icons/fa";
export default function Cards({ data }) {
  console.log("Cards received data:", data);

  // 1. Show the spinner if data hasn't arrived yet
  if (!data) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <span className="loading loading-spinner loading-xl"></span>
      </div>
    );
  }

  // 2. Map through the data EXACTLY ONCE
  return (
    <div className="flex flex-wrap gap-6 justify-center p-8 bg-gray-50 min-h-screen">
      {data.map((plan) => (
        <div
          key={plan.id}
          className="relative bg-white border border-gray-100 rounded-[2.5rem] p-8 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group max-w-sm w-full"
        >
          {/* {
    "id": "plan_portfolio_basic",
    "name": "Portfolio Starter",
    "description": "Build a personal portfolio website quickly.",
    "price": 5.99,
    "period": "monthly",
    "tag": "new",
    "tagType": "new",
    "badge": "🆕 New",
    "features": ["5 templates", "Custom domain support", "Mobile responsive"],
    "icon": "FaThLarge"
  }, */}
          {/* Optional Premium Badge */}
          {plan.price > 0 && (
            <span className="absolute top-6 right-6 px-4 py-1 rounded-full text-[10px] font-bold border bg-orange-100 text-orange-600 border-orange-200">
              {plan.badge}
            </span>
          )}

          {/* Icon Container */}
          <div className="w-14 h-14 rounded-2xl mb-6 flex items-center justify-center bg-gray-50 group-hover:scale-110 transition-transform">
            <span className="text-2xl">📝</span>
          </div>

          {/* Dynamic Content */}
          <h3 className="text-xl font-bold text-gray-900 mb-3">{plan.name}</h3>
          <p className="text-gray-500 text-sm leading-relaxed mb-6">
            {plan.description}
          </p>

          {/* Dynamic Pricing */}
          <div className="mb-6">
            <span className="text-3xl font-black text-gray-900">
              ${plan.price}
            </span>
            <span className="text-gray-400 text-sm font-medium ml-1">
              /{plan.period}
            </span>
          </div>

          <ul className="space-y-3 mb-8 flex-grow">
            {plan.features.map((feature) => (
              <li className="flex items-center text-sm text-gray-600 font-medium">
                <svg
                  className="w-4 h-4 text-emerald-500 mr-2"
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
                {feature}
              </li>
            ))}
          </ul>

          <button className="w-full bg-[#7c3aed] text-white py-4 rounded-2xl font-bold text-sm hover:bg-[#6d28d9] transform active:scale-95 transition-all shadow-md">
            Buy Now
          </button>
        </div>
      ))}
    </div>
  );
}
