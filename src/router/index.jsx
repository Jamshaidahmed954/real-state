import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import RealEstateListings from "../pages/landingpage/realstate/RealState";
import Layout from "../layout";
import Home from "../pages/homePage";
import About from "../pages/about";
import Career from "../pages/career";
import WhyBrookField from "../pages/career/whyBrookField";

const Index = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route path="/realstate" element={<RealEstateListings />} />
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/career" element={<Career />} />
        <Route path="/career/why-brookfield" element={<WhyBrookField />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
};

export default Index;
