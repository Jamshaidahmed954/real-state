import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import RealEstateListings from "../pages/landingpage/realstate/RealState";
import Layout from "../layout";
import Home from "../pages/landingpage/homePage";

const Index = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route path="/realstate" element={<RealEstateListings />} />
        <Route path="/" element={<Home />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
};

export default Index;
