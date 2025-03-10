import React from "react";
import { useState } from "react";
import { X } from "lucide-react";

export default function Sidebar({ isOpen, setIsOpen }) {
  return (
    <>
      {/* Sidebar Overlay */}
      <div
        className={`fixed inset-0 bg-blue-950 opacity-10 transition-opacity ${
          isOpen ? "opacity-60 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setIsOpen(false)}
      ></div>

      {/* Sidebar */}
      <div
        className={`fixed right-0 top-0 h-full bg-white shadow-lg transform transition-transform duration-700 ease-in-out 
          ${isOpen ? "translate-x-0" : "translate-x-full"} 
          w-full md:w-96 lg:w-[600px] sm:w-full`} // Responsive width: full screen on small devices
      >
        <div className="p-4 flex justify-between items-center border-b">
          <h2 className="text-lg font-semibold text-gray-800">
            Brookfield Residential
          </h2>
          <button onClick={() => setIsOpen(false)}>
            <X className="w-6 h-6 text-gray-700" />
          </button>
        </div>

        {/* Sidebar Content */}
        <div className="p-4 overflow-y-auto h-full ">
          <h3 className="text-xl font-bold mb-4 text-gray-800">
            The Future of Home
          </h3>
          <div className="flex">
            <div className="mb-6 ">
              <h4 className="text-lg font-semibold text-gray-800">Empower</h4>
              <p className="text-sm text-gray-600">
                From smart technology to sustainable living - discover the
                future of home.
              </p>
            </div>
            <div className="mb-6">
              <h4 className="text-lg font-semibold text-gray-800">myTime</h4>
              <p className="text-sm text-gray-600">
                Tour available and model homes on your own - even before or
                after hours.
              </p>
            </div>
          </div>

          {/* Additional Sections from Screenshot */}
          <div className="grid grid-cols-2 gap-4 mt-6">
            <div>
              <h3 className="text-lg font-semibold mb-2 text-gray-800">
                Company
              </h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-blue-600 hover:underline">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="text-blue-600 hover:underline">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="text-blue-600 hover:underline">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#" className="text-blue-600 hover:underline">
                    Investors
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2 mt-6 text-gray-800">
                News & Blog
              </h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-blue-600 hover:underline">
                    Life and Style
                  </a>
                </li>
                <li>
                  <a href="#" className="text-blue-600 hover:underline">
                    Home Buyer Resources
                  </a>
                </li>
                <li>
                  <a href="#" className="text-blue-600 hover:underline">
                    All Topics
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
