import React from "react";

import { Link, Outlet, useLocation } from "react-router-dom";

export default function About() {
  const path = useLocation().pathname;
  console.log(path);

  console.log(path);
  return (
    <>
      <div className="w-full  md:p-0 lg:mt-[85px]">
        {/* Hero Section */}
        <div
          className="relative w-full h-[50vh] bg-cover bg-center hidden lg:block"
          style={{
            backgroundImage:
              "url(https://cdn.brookfieldresidential.net/-/media/brp/global/modules/about-hero/corporate/about-landing-header-kissing-tree-san-marcos-tx.jpg?rev=c20ed1d320d9472c900c116c9ed42a41)",
          }}
        ></div>

        {/* Navigation Tabs */}
        <div className="flex justify-between py-6  items-center shadow-md mx-auto w-full ">
          <div className="flex justify-around  items-center space-x-4  w-full overflow-auto">
            {[
              {
                name: "About",
                link: "/about",
              },
              {
                name: "Leadership",
                link: "/about/leadership",
              },
              {
                name: "Distinction",
                link: "/about/distinction",
              },
              {
                name: "History",
                link: "/about/history",
              },
              {
                name: "Values",
                link: "/about/values",
              },
              {
                name: "Investor & Media Relations",
                link: "/about/financial",
              },
            ].map((tab, index) => (
              <Link
                to={tab.link}
                key={index}
                className={`text-blue-950 text-lg ${
                  path == tab.link ? "border-orange-400" : "border-transparent"
                } border-b-4  `}
              >
                {tab.name}
              </Link>
            ))}
          </div>
        </div>

        <Outlet />
      </div>
    </>
  );
}
