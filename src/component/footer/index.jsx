import React from "react";
import { useLocation } from "react-router-dom";
export default function Footer() {
  const location = useLocation();
  const path = location.pathname;
  return (
    <footer
      className={` ${
        path === "/realstate" ? "bg-blue-950" : "bg-white"
      } text-sm mt-10 `}
    >
      <div
        className={`${
          path === "/realstate" ? "hidden" : "block"
        } max-w-7xl mx-auto px-6 py-10 grid grid-cols-2 md:grid-cols-4 gap-6`}
      >
        {/* Column 1 */}
        <div>
          <h3 className="font-semibold">The Future of Home</h3>
          <ul className="mt-2 space-y-1">
            <li>
              <a
                href="#"
                className="text-blue-950 font-semibold hover:underline"
              >
                Empower
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-blue-950 font-semibold hover:underline"
              >
                myTime
              </a>
            </li>
          </ul>
        </div>

        {/* Column 2 */}
        <div>
          <h3 className="font-semibold">Company</h3>
          <ul className="mt-2 space-y-1">
            <li>
              <a
                href="#"
                className="text-blue-950 font-semibold hover:underline"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-blue-950 font-semibold hover:underline"
              >
                Careers
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-blue-950 font-semibold hover:underline"
              >
                Contact
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-blue-950 font-semibold hover:underline"
              >
                Investors
              </a>
            </li>
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h3 className="font-semibold">News & Blog</h3>
          <ul className="mt-2 space-y-1">
            <li>
              <a
                href="#"
                className="text-blue-950 font-semibold hover:underline"
              >
                Life and Style
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-blue-950 font-semibold hover:underline"
              >
                Home Buyer Resources
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-blue-950 font-semibold hover:underline"
              >
                All Topics
              </a>
            </li>
          </ul>
        </div>

        {/* Column 4 */}
        <div>
          <h3 className="font-semibold">Home Owners</h3>
          <ul className="mt-2 space-y-1">
            <li>
              <a
                href="#"
                className="text-blue-950 font-semibold hover:underline"
              >
                My Brookfield
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Links */}
      <div
        className={`${
          path === "/realstate" ? "flex-row-reverse border-none" : "border-t"
        }  border-gray-600 py-4 text-center text-gray-400 flex justify-between w-[80%] mx-auto mt-6`}
      >
        <ul className="flex flex-wrap justify-center gap-4 text-xs">
          <li>
            <a
              href="#"
              className={`${
                path === "/realstate" ? "text-white" : "text-blue-950"
              }  font-semibold hover:underline`}
            >
              Sitemap
            </a>
          </li>
          <li>
            <a
              href="#"
              className={`${
                path === "/realstate" ? "text-white" : "text-blue-950"
              }  font-semibold hover:underline`}
            >
              Privacy
            </a>
          </li>
          <li>
            <a
              href="#"
              className={`${
                path === "/realstate" ? "text-white" : "text-blue-950"
              }  font-semibold hover:underline`}
            >
              Terms
            </a>
          </li>
          <li>
            <a
              href="#"
              className={`${
                path === "/realstate" ? "text-white" : "text-blue-950"
              }  font-semibold hover:underline`}
            >
              Cookie Settings
            </a>
          </li>
          <li>
            <a
              href="#"
              className={`${
                path === "/realstate" ? "text-white" : "text-blue-950"
              }  font-semibold hover:underline`}
            >
              Your Privacy Choices
            </a>
          </li>
        </ul>
        <div className="w-36 text-white">
          <h1
            className={`${
              path === "/realstate" ? "block" : "hidden"
            } text-2xl font-bold`}
          >
            Brookfield
          </h1>
          <img
            src="https://cdn.brookfieldresidential.net/-/media/brp/global/home-logo/logo/brookfieldlogo.svg?rev=357c61f724e443f39ae9a44bf574c035"
            alt="Brookfield Residential"
            className="h-auto w-full"
          />
        </div>
      </div>

      {/* Disclaimer */}
      <div className="max-w-7xl mx-auto px-6 py-6 text-gray-400 text-xs">
        <p>
          Pricing (including monthly pricing), dimensions, and square footage
          are approximate and provided for informational purposes only. Certain
          prices reflect selections applied to the room shown, and may or may
          not apply to other areas or rooms shown throughout the home.
          Availability (including the availability of construction materials and
          homes), designs, specifications, dimensions, square footage, features,
          prices, financing, terms, incentives, materials, amenities, and
          options may vary, may not be available, and are subject to change
          without notice or obligation. For example, front windows and porches
          may vary with elevation, and room measurements may be shown from the
          inside face of drywall. All photos, renderings, and other depictions
          are for illustration purposes only and may include elements that are
          for display purposes only. Brookfield Residential does not
          discriminate against any class of persons protected by federal, state,
          local, or provincial law. Models and lifestyle photos do not reflect
          racial or ethnic preference. Certain properties in certain
          jurisdictions have age restrictions for residents. No information or
          material on our site is an offer to sell a unit or real property and,
          in certain jurisdictions, an offer can only be made after filing a
          disclosure statement. Contact a local Brookfield Residential
          representative for more details.
        </p>
        <p className="mt-2">
          Brookfield Residential is a licensed real estate broker, CA DRE
          license nos. 01996804 and 02155366.
        </p>
        <p className="mt-2">
          © 2025 Brookfield Residential Properties ULC. All rights reserved.
        </p>
        <p className="mt-2">
          <a href="#" className="text-white hover:underline">
            4906 Richard Road SW, Calgary, AB, T3E 6L1
          </a>
        </p>
      </div>
    </footer>
  );
}
