import React, { useContext, useState, useEffect } from "react";
import { FaMapMarkerAlt, FaSearch } from "react-icons/fa";
import { HiMiniBars3CenterLeft } from "react-icons/hi2";
import SearchContext from "../../context/SearchContext";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

export default function Header({ isOpen, setIsOpen }) {
  const { searchQuery, setSearchQuery } = useContext(SearchContext);
  const [showSearch, setShowSearch] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const location = useLocation();
  const path = location.pathname;

  const toggleSearch = () => setShowSearch((prev) => !prev);
  // const toggleMenu = () => setIsOpen((prev) => !prev);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setIsVisible(false); // Hide header when scrolling down
      } else {
        setIsVisible(true); // Show header when scrolling up
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <header
      className={`${
        path == "/realstate" ? "block" : "fixed"
      } top-0 left-0 z-50 w-full bg-white  transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="container px-4 mx-auto">
        <div className="flex items-center justify-between w-full py-4">
          {/* Logo */}
          <div className="hidden w-36 sm:block md:w-48">
            <img
              src="https://cdn.brookfieldresidential.net/-/media/brp/global/home-logo/logo/brookfieldlogo.svg?rev=357c61f724e443f39ae9a44bf574c035"
              alt="Brookfield Residential Logo"
              className="w-full h-auto"
              loading="lazy"
            />
          </div>

          {/* Spacer for mobile */}
          <div className="w-8 sm:hidden" aria-hidden="true" />

          {/* Search Section */}
          <div className="flex items-center justify-center flex-1 max-w-md mx-4">
            <div className="flex items-center w-full rounded-full bg-white border transition-all duration-200 px-4">
              <FaMapMarkerAlt
                className="text-sky-500 text-lg mr-2"
                aria-hidden="true"
              />
              <input
                type="number"
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  path === "/realstate" &&
                    window.history.pushState({}, "", "/");
                }}
                placeholder="Search Lot"
                className="flex-grow text-sky-500 font-semibold placeholder:text-sky-500 p-2 outline-none bg-transparent"
                aria-label="Search by lot number"
              />
              <Link
                to={`/realstate?search=${searchQuery}`}
                onClick={toggleSearch}
                className="flex items-center justify-center w-8 h-8 bg-sky-500 rounded-full focus:outline-none focus:ring-2 focus:ring-sky-300"
                aria-label={showSearch ? "Collapse search" : "Expand search"}
              >
                <FaSearch className="text-white" />
              </Link>
            </div>
          </div>

          {/* Navigation & Menu */}
          <div className="flex items-center">
            <nav className="hidden md:flex items-center gap-8 pr-6 border-r border-black">
              <Link
                to={"/about"}
                className="hover:text-gray-900 transition-colors font-bold"
              >
                About
              </Link>
              <a
                href="#"
                className="hover:text-gray-900 transition-colors whitespace-nowrap font-bold"
              >
                Where We Build
              </a>
            </nav>
            <button
              // onClick={toggleMenu}
              className="p-2 rounded-full focus:outline-none md:ml-4"
              aria-label="Toggle navigation menu"
              aria-expanded={isOpen}
            >
              <HiMiniBars3CenterLeft size={20} className="cursor-pointer" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
