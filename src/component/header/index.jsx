"use client";
import React, { useState } from "react";
import { FaMapMarkerAlt, FaSearch } from "react-icons/fa";
import { HiMiniBars3CenterLeft } from "react-icons/hi2";

export default function Header({
  setActiveToggle,
  activeToggle,
  searchQuery,
  setSearchQuery,
}) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="border-b border-gray-200 fixed md:static top-0 left-0 right-0 z-10 md:bg-white">
      <div className="container mx-auto px-8">
        <div className="flex items-center justify-between py-4">
          <div className="w-48 hidden md:block">
            <img
              src="https://cdn.brookfieldresidential.net/-/media/brp/global/home-logo/logo/brookfieldlogo.svg?rev=357c61f724e443f39ae9a44bf574c035"
              alt="Brookfield Residential"
              className="h-auto w-full"
            />
          </div>
          <div className="relative max-w-md mx-12 ">
            <div className="flex items-center border justify-between rounded-full px-3 py-2 w-80 bg-white ">
              <FaMapMarkerAlt className="text-sky-500 text-lg mr-2" />
              <input
                type="number"
                onChange={(e) => setSearchQuery(e.target.value)}
                value={searchQuery}
                placeholder="Search Lot"
                className="outline-none text-sky-500 font-semibold flex-grow placeholder:text-sky-500 "
              />
              <button className="w-8 h-8 flex items-center justify-center bg-sky-500 rounded-full">
                <FaSearch className="text-white" />
              </button>
            </div>
          </div>
          <div className="flex items-center gap-8">
            <nav className="hidden md:flex items-center gap-8 border-r px-6">
              <a
                href="#"
                className="text-gray-700 hover:text-gray-900 font-medium"
              >
                About
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-gray-900 font-medium"
              >
                Where we build
              </a>
            </nav>
            <span className="cursor-pointer bg-white rounded-full p-2 ">
              <HiMiniBars3CenterLeft size={30} />
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}
