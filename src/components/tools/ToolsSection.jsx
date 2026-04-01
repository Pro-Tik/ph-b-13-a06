import React, { useState, useEffect } from "react";
import ToolsHeader from "./ToolsHeader";
import Cards from "./Cards";

import axios from "axios";

export default function ToolsSection() {
  // 1. Create a state variable to hold your data
  const [plans, setPlans] = useState(null);
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
      <ToolsHeader></ToolsHeader>
      <Cards data={plans}></Cards>
    </>
  );
}
