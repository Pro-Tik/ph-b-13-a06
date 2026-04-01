import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import StatsSection from "./components/Statssection";
import ToolsSection from "./components/tools/ToolsSection";
import Steps from "./components/tools/Steps";
import Pricing from "./components/tools/Pricing";
import Footer from "./components/tools/Footer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (plan) => {
    const isAlreadyInCart = cartItems.find((item) => item.id === plan.id);
    if (!isAlreadyInCart) {
      setCartItems((prev) => [...prev, plan]);
      toast.success(`${plan.name} added to cart!`);
    } else {
      toast.info(`${plan.name} is already in your cart.`);
    }
  };

  const handleRemoveFromCart = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
    toast.info(`Removed item from cart`);
  };

  const handleCheckout = () => {
    setCartItems([]);
    toast.success("Thanks for your purchase!");
  };

  return (
    <>
      <Navbar cartCount={cartItems.length} />
      <Hero></Hero>
      <StatsSection></StatsSection>
      <ToolsSection
        cartItems={cartItems}
        onAddToCart={handleAddToCart}
        onRemove={handleRemoveFromCart}
      ></ToolsSection>
      <Steps></Steps>
      <Pricing></Pricing>
      <Footer></Footer>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        pauseOnHover
      />
    </>
  );
}

export default App;
