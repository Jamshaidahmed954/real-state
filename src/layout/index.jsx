import React, { useState } from "react";
import Headers from "../component/header/index.jsx";
import { Outlet } from "react-router-dom";
import Sidebar from "../component/sidbar/index.jsx";

const Layout = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="relative z-0 w-full">
      <Headers isOpen={isOpen} setIsOpen={setIsOpen} />
      <div className="absolute z-50 w-full bg-amber-200 ">
        <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
      <Outlet />
    </div>
  );
};

export default Layout;
