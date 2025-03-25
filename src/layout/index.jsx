import React, { useState } from "react";
import Header from "../component/header/index.jsx";
import { Outlet } from "react-router-dom";
import Sidebar from "../component/sidbar/index.jsx";
import Footer from "../component/footer/index.jsx";
import RealEstateListings from "../pages/realstate/index.jsx";
import { useLocation } from "react-router-dom";

const Layout = () => {
  const [isOpen, setIsOpen] = useState(false);
  const path = useLocation().pathname;

  return (
    <>
      {path !== "/realstate" ? (
        <div className="relative z-0 w-full">
          <Header isOpen={isOpen} setIsOpen={setIsOpen} />
          <div className="absolute z-50 w-full bg-amber-200 ">
            <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
          </div>
          <Outlet />
          <Footer />
        </div>
      ) : (
        <div className="relative z-0 w-full overflow-hidden">
          <Header isOpen={isOpen} setIsOpen={setIsOpen} />
          <RealEstateListings />
          <div className="absolute z-50 w-full  ">
            <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
          </div>
        </div>
      )}
    </>
  );
};

export default Layout;
