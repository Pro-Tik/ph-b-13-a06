import React from "react";

// 1. Accept cartItems as a prop
export default function Cart({ cartItems, onRemove, onCheckout }) {
  // 2. Calculate the total price based on the actual items
  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="max-w-4xl mx-auto w-full px-4 mb-20">
      <div className="bg-white border border-gray-100 rounded-[2rem] p-6 md:p-10 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]">
        <h3 className="text-xl font-bold text-gray-900 mb-6">Your Cart</h3>

        {/* 3. Handle empty cart state */}
        {cartItems.length === 0 ? (
          <p className="text-gray-500 text-center py-10">
            Your cart is currently empty.
          </p>
        ) : (
          <div className="space-y-4">
            {/* 4. Map over the dynamic cartItems instead of static data */}
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between p-4 bg-gray-50 rounded-2xl"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm text-xl">
                    📝{" "}
                    {/* Placeholder icon, or use item.icon if it exists in your JSON */}
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm md:text-base">
                      {item.name}
                    </h4>
                    <p className="text-gray-500 text-sm mt-0.5">
                      ${item.price}
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => onRemove && onRemove(item.id)}
                  className="text-[#ff4782] text-sm font-medium hover:text-[#e63e75] transition-colors px-2"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
        )}

        <div className="flex items-center justify-between mt-10 mb-6">
          <span className="text-gray-500 text-sm">Total:</span>
          {/* Use toFixed(2) to keep prices formatted like $29.99 */}
          <span className="text-2xl font-bold text-gray-900">
            ${total.toFixed(2)}
          </span>
        </div>

        <button
          onClick={() => onCheckout && onCheckout()}
          disabled={cartItems.length === 0}
          className="w-full bg-[#8b3dff] text-white py-4 rounded-2xl font-bold text-sm hover:bg-[#7a35e6] transform active:scale-[0.98] transition-all shadow-md disabled:bg-gray-300 disabled:cursor-not-allowed"
        >
          Proceed To Checkout
        </button>
      </div>
    </div>
  );
}
