"use client";
import React from "react";
import { useContext, useState } from "react";
import { FaMapMarkerAlt, FaSearch } from "react-icons/fa";
import { HiMiniBars3CenterLeft } from "react-icons/hi2";
import SearchContext from "../../context/SearchContext";

export default function Header({ isOpen, setIsOpen }) {
  const { searchQuery, setSearchQuery } = useContext(SearchContext);
  const [showSearch, setShowSearch] = useState(false); // State to show/hide search input

  return (
    <header className="border-b border-gray-200 sticky md:static top-0 left-0 z-10 bg-white w-full">
      <div className="container mx-auto px-4 w-full">
        <div className="flex items-center justify-between py-4 w-full">
          {/* Logo (Hidden on small mobile, visible on larger screens) */}
          <div className="w-36 md:w-48 hidden sm:block">
            <img
              src="https://cdn.brookfieldresidential.net/-/media/brp/global/home-logo/logo/brookfieldlogo.svg?rev=357c61f724e443f39ae9a44bf574c035"
              alt="Brookfield Residential"
              className="h-auto w-full"
            />
          </div>

          {/* Mobile spacer to help with centering (only visible on smallest screens) */}
          <div className="w-8 sm:hidden"></div>

          {/* Search Section - Centered */}
          <div className="flex-1 flex justify-center items-center max-w-md mx-auto">
            <div
              className={`flex items-center rounded-full px-3 py-2 bg-white transition-all duration-200 ${
                showSearch
                  ? "w-full border border-gray-200"
                  : "w-auto border-none"
              } md:w-full md:border md:border-gray-200`}
            >
              {/* Location Icon (Hidden on mobile when search is collapsed) */}
              <FaMapMarkerAlt
                className={`text-sky-500 text-lg mr-2 ${
                  showSearch ? "block" : "hidden"
                } md:block`}
              />

              {/* Search Input (Hidden on mobile by default) */}
              <input
                type="number"
                onChange={(e) => setSearchQuery(e.target.value)}
                value={searchQuery}
                placeholder="Search Lot"
                className={`outline-none text-sky-500 font-semibold flex-grow placeholder:text-sky-500 transition-all ${
                  showSearch ? "block" : "hidden"
                } md:block`}
              />

              {/* Search Button (Toggles input on mobile) */}
              <button
                className="w-8 h-8 flex items-center justify-center bg-sky-500 rounded-full flex-shrink-0"
                onClick={() => setShowSearch(!showSearch)}
              >
                <FaSearch className="text-white" />
              </button>
            </div>
          </div>

          {/* Navigation & Menu */}
          <div className="flex items-center">
            <nav className="hidden md:flex items-center gap-8 border-r px-6">
              <a
                href="#"
                className="text-gray-700 hover:text-gray-900 font-medium"
              >
                About
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-gray-900 font-medium whitespace-nowrap"
              >
                Where we build
              </a>
            </nav>

            {/* Mobile Menu Button */}
            <span className="cursor-pointer bg-white rounded-full p-2">
              <HiMiniBars3CenterLeft
                onClick={() => {
                  setIsOpen(!isOpen);
                }}
                size={30}
              />
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}
