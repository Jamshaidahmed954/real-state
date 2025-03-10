import React, { useState } from "react";
import RealEstateListings from "./realstate/RealState.jsx";

const LandingPage = () => {
  const [activeToggle, setActiveToggle] = useState("Communities");
  const [searchQuery, setSearchQuery] = useState(""); // Ensure this is a string initially
  console.log("LandingPage searchQuery:", searchQuery);

  return (
    <div className="w-full h-screen overflow-hidden">
      <div className="h-[70vh] w-full over-flow-hidden">
        <RealEstateListings
        // activeToggle={activeToggle}
        // searchQuery={searchQuery}
        />
      </div>
    </div>
  );
};

export default LandingPage;
