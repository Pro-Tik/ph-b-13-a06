import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import StatsSection from "./components/Statssection";
import ToolsSection from "./components/tools/ToolsSection";
import Steps from "./components/tools/Steps";
import Pricing from "./components/tools/Pricing";
import Footer from "./components/tools/Footer";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Hero></Hero>
      <StatsSection></StatsSection>
      <ToolsSection></ToolsSection>
      <Steps></Steps>
      <Pricing></Pricing>
      <Footer></Footer>
    </>
  );
}

export default App;
