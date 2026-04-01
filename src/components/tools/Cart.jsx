import React from "react";

export default function Cart() {
  // Static data matching your screenshot.
  // You can later pass this down as a prop (e.g., ({ cartItems })) when your app is dynamic.
  const cartItems = [
    {
      id: 1,
      name: "AI Writing Pro",
      price: 29,
      icon: "📝", // Using an emoji as a placeholder for your actual icon
    },
    {
      id: 2,
      name: "Design Templates Pack",
      price: 49,
      icon: "🛠️",
    },
  ];

  // Calculate the total price
  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="max-w-4xl mx-auto w-full px-4 mb-20">
      <div className="bg-white border border-gray-100 rounded-[2rem] p-6 md:p-10 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]">
        <h3 className="text-xl font-bold text-gray-900 mb-6">Your Cart</h3>

        {/* Cart Items List */}
        <div className="space-y-4">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between p-4 bg-gray-50 rounded-2xl"
            >
              <div className="flex items-center gap-4">
                {/* Icon Container */}
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm text-xl">
                  {item.icon}
                </div>

                {/* Item Details */}
                <div>
                  <h4 className="font-semibold text-gray-900 text-sm md:text-base">
                    {item.name}
                  </h4>
                  <p className="text-gray-500 text-sm mt-0.5">${item.price}</p>
                </div>
              </div>

              {/* Remove Button */}
              <button className="text-[#ff4782] text-sm font-medium hover:text-[#e63e75] transition-colors px-2">
                Remove
              </button>
            </div>
          ))}
        </div>

        {/* Total Section */}
        <div className="flex items-center justify-between mt-10 mb-6">
          <span className="text-gray-500 text-sm">Total:</span>
          <span className="text-2xl font-bold text-gray-900">${total}</span>
        </div>

        {/* Checkout Button */}
        <button className="w-full bg-[#8b3dff] text-white py-4 rounded-2xl font-bold text-sm hover:bg-[#7a35e6] transform active:scale-[0.98] transition-all shadow-md">
          Proceed To Checkout
        </button>
      </div>
    </div>
  );
}
