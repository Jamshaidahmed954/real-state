import React, { useState } from "react";
import Header from "../../component/header/Header.jsx";
import RealEstateListings from "../../component/RealState.jsx";

const LandingPage = () => {
  const [activeToggle, setActiveToggle] = useState("Communities");
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div calssName="w-full h-screen overflow-hidden ">
      <Header
        setActiveToggle={setActiveToggle}
        activeToggle={activeToggle}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />
      <div className=" h-[70vh] overflow- w-full">
        <RealEstateListings
          activeToggle={activeToggle}
          searchQuery={searchQuery}
        />
      </div>
    </div>
  );
};

export default LandingPage;
