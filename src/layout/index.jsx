import React from "react";
import Headers from "../component/header/index.jsx";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="overflow-hidden h-screen">
      <Headers />
      <Outlet />
    </div>
  );
};

export default Layout;
