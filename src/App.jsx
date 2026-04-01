import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import StatsSection from "./components/Statssection";
import ToolsSection from "./components/tools/ToolsSection";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Hero></Hero>
      <StatsSection></StatsSection>
      <ToolsSection></ToolsSection>
    </>
  );
}

export default App;
