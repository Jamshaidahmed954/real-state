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
import Contact from "../pages/contact";
import Blogs from "../pages/new&blogs";
import LeaderShip from "../pages/about/component/leadership/LeaderShip";
import Distinction from "../pages/about/component/distinction/Distinction";
import History from "../pages/about/component/history/History";
import Values from "../pages/about/component/values/Values";
import Financils from "../pages/about/component/financial/Financials";
import AboutSection from "../pages/about/component/aboutSection/AboutSection";

const Index = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route path="/realstate" element={<RealEstateListings />} />
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />}>
          <Route path="/about/leadership" element={<LeaderShip />} />
          <Route path="/about/distinction" element={<Distinction />} />
          <Route path="/about/history" element={<History />} />
          <Route path="/about/values" element={<Values />} />
          <Route path="/about" element={<AboutSection />} />

          <Route path="/about/financial" element={<Financils />} />
          <Route path="/about/blogs" element={<Blogs />} />
        </Route>
        <Route path="/career" element={<Career />} />
        <Route path="/career/why-brookfield" element={<WhyBrookField />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
};

export default Index;
