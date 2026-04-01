import React, { useState, useEffect } from "react";
import ToolsHeader from "./ToolsHeader";
import Cards from "./Cards";
import Cart from "./Cart";
import axios from "axios";

export default function ToolsSection({
  cartItems,
  onAddToCart,
  onRemove,
  onCheckout,
}) {
  // 1. Create a state variable to hold your data
  const [plans, setPlans] = useState(null);
  const [activeTab, setactiveTab] = useState("products");
  useEffect(() => {
    const fetchPlans = async () => {
      const response = await axios.get("/data.json");
      setPlans(response.data);
    };
    fetchPlans();
  }, []);
  // console.log(plans);
  return (
    <>
      <ToolsHeader
        activeTab={activeTab}
        setActiveTab={setactiveTab}
        cartCount={cartItems.length}
      ></ToolsHeader>
      {activeTab === "products" ? (
        <Cards data={plans} onAddToCart={onAddToCart}></Cards>
      ) : (
        <Cart
          cartItems={cartItems}
          onRemove={onRemove}
          onCheckout={() => {
            onCheckout();
            setactiveTab("products");
          }}
        ></Cart>
      )}
    </>
  );
}
