import React, { useState, useEffect } from "react";
import ToolsHeader from "./ToolsHeader";
import Cards from "./Cards";
import Cart from "./Cart";
import axios from "axios";

export default function ToolsSection() {
  // 1. Create a state variable to hold your data
  const [plans, setPlans] = useState(null);
  const [activeTab, setactiveTab] = useState("products");
  const [cartItems, setCartItems] = useState([]);
  useEffect(() => {
    const fetchPlans = async () => {
      const response = await axios.get("/data.json");
      setPlans(response.data);
    };
    fetchPlans();
  }, []);

  const handleAddToCart = (plan) => {
    // Optional: Check if the item is already in the cart to prevent duplicates
    const isAlreadyInCart = cartItems.find((item) => item.id === plan.id);
    if (!isAlreadyInCart) {
      setCartItems([...cartItems, plan]);
      alert(`${plan.name} added to cart!`); // Simple feedback for the user
    } else {
      alert(`${plan.name} is already in your cart.`);
    }
  };
  // console.log(plans);
  return (
    <>
      <ToolsHeader
        activeTab={activeTab}
        setActiveTab={setactiveTab}
        cartCount={cartItems.length}
      ></ToolsHeader>
      {activeTab === "products" ? (
        <Cards data={plans} onAddToCart={handleAddToCart}></Cards>
      ) : (
        <Cart cartItems={cartItems}></Cart>
      )}
    </>
  );
}
