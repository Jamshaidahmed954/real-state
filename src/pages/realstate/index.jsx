import React, { useState, useEffect, useRef, useCallback } from "react";
import {
  Settings,
  X,
  ChevronUp,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import FilterPopup from "./components/FilterPopup";
import Range from "./components/Range";
import MoreFiltersPopup from "./components/MoreFiltersPopup";
import HouseMapScreen from "../../component/map";
import Footer from "../../component/footer";
import { Link } from "react-router-dom";
import allHomes from "./data/homs";

const RealEstateListings = ({ searchQuery }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [activePopup, setActivePopup] = useState(null);
  const [activeToggle, setActiveToggle] = useState("Floor Plans");
  const [sortOption, setSortOption] = useState("Price low to high");
  const popupRef = useRef(null);
  const [totalbeds, settotalBeds] = useState(0);
  const [totalbaths, settotalBaths] = useState(0);
  const [priceRange, setPriceRange] = useState({ min: null, max: null });
  const [selectedHomeTypes, setSelectedHomeTypes] = useState([]);
  const [squareFeetRange, setSquareFeetRange] = useState({
    min: null,
    max: null,
  });
  const [lotSize, setLotSize] = useState(null);
  const [garage, setGarage] = useState(null);
  const [mobileSheetHeight, setMobileSheetHeight] = useState("min");
  const [isMapVisible, setIsMapVisible] = useState(true);

  useEffect(() => {
    function handleClickOutside(event) {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        setActivePopup(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const togglePopup = useCallback(
    (popupName) => {
      setActivePopup(activePopup === popupName ? null : popupName);
    },
    [activePopup]
  );

  const renderPopup = useCallback(
    (popupName, content) =>
      activePopup === popupName && (
        <div
          ref={popupRef}
          className="absolute z-10 mt-2 rounded-md bg-white shadow-lg ring-1 w-auto ring-black ring-opacity-5"
        >
          <div className="py-1 w-full" role="menu">
            {content}
          </div>
        </div>
      ),
    [activePopup]
  );

  const menuItems = [
    { name: "Communities", count: 4 },
    { name: "Quick Move-In", count: 22 },
    { name: "Floor Plans", count: 19 },
  ];

  const getBedsBathsLabel = () => {
    const bedsLabel = totalbeds > 0 ? `Beds ${totalbeds}+` : "";
    const bathsLabel = totalbaths > 0 ? `Baths ${totalbaths}+` : "";
    return bedsLabel && bathsLabel
      ? `${bedsLabel}, ${bathsLabel}`
      : bedsLabel || bathsLabel || "Beds & Baths";
  };

  const getPriceRangeLabel = () => {
    const { min, max } = priceRange;
    if (min && max)
      return `$${min.toLocaleString()} - $${max.toLocaleString()}`;
    if (min) return `$${min.toLocaleString()} +`;
    if (max) return `Up to $${max.toLocaleString()}`;
    return "Price Range";
  };

  const getHomeTypeLabel = () => {
    if (selectedHomeTypes.length === 0) return "Home Type";
    return selectedHomeTypes.join(", ");
  };

  const clearBedsBaths = () => {
    settotalBeds(0);
    settotalBaths(0);
  };

  const clearPriceRange = () => {
    setPriceRange({ min: null, max: null });
  };

  const clearHomeTypes = () => {
    setSelectedHomeTypes([]);
  };

  const handlePriceChange = (newRange) => {
    setPriceRange(newRange);
  };

  const handleHomeTypeChange = (newTypes) => {
    setSelectedHomeTypes(newTypes);
    setActivePopup(null);
  };

  const toggleMobileSheetHeight = () => {
    if (mobileSheetHeight === "min") {
      setMobileSheetHeight("half");
    } else if (mobileSheetHeight === "half") {
      setMobileSheetHeight("full");
    } else {
      setMobileSheetHeight("min");
    }
  };

  const [homeType, setHomeType] = useState(allHomes);

  useEffect(() => {
    let filteredHomes = allHomes;

    if (activeToggle === "Communities") {
      filteredHomes = filteredHomes.filter((home) =>
        home.title.toLowerCase().includes("community")
      );
    } else if (activeToggle === "Quick Move-In") {
      filteredHomes = filteredHomes.filter((home) =>
        home.title.toLowerCase().includes("quick move-in")
      );
    } else if (activeToggle === "Floor Plans") {
      filteredHomes = filteredHomes.filter((home) =>
        home.title.toLowerCase().includes("floor plan")
      );
    }

    if (searchQuery) {
      filteredHomes = filteredHomes.filter(
        (home) =>
          home.lotNumber === searchQuery ||
          home.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    filteredHomes = filteredHomes.filter((home) => {
      const inPriceRange =
        (!priceRange.min || home.price >= priceRange.min) &&
        (!priceRange.max || home.price <= priceRange.max);
      const matchesBeds = totalbeds === 0 || home.beds >= totalbeds;
      const matchesBaths = totalbaths === 0 || home.baths >= totalbaths;
      const matchesHomeType =
        selectedHomeTypes.length === 0 || selectedHomeTypes.includes(home.type);
      const inSquareFeetRange =
        (!squareFeetRange.min || home.size >= squareFeetRange.min) &&
        (!squareFeetRange.max || home.size <= squareFeetRange.max);

      return (
        inPriceRange &&
        matchesBeds &&
        matchesBaths &&
        matchesHomeType &&
        inSquareFeetRange
      );
    });

    if (sortOption === "Price high to low") {
      filteredHomes.sort((a, b) => b.price - a.price);
    } else if (sortOption === "Price low to high") {
      filteredHomes.sort((a, b) => a.price - b.price);
    } else if (sortOption === "Community (A-Z)") {
      filteredHomes.sort((a, b) => a.title.localeCompare(b.title));
    } else if (sortOption === "Community (Z-A)") {
      filteredHomes.sort((a, b) => b.title.localeCompare(a.title));
    }

    setHomeType(filteredHomes);
  }, [
    activeToggle,
    searchQuery,
    priceRange,
    totalbeds,
    totalbaths,
    selectedHomeTypes,
    squareFeetRange,
    sortOption,
  ]);

  const HomeTypeFilter = ({ onTypeChange }) => {
    const homeTypes = ["Single Family", "Townhome"];
    const [selected, setSelected] = useState(selectedHomeTypes);

    const handleChange = (type) => {
      const newSelected = selected.includes(type)
        ? selected.filter((t) => t !== type)
        : [...selected, type];
      setSelected(newSelected);
      onTypeChange(newSelected);
    };

    return (
      <div className="p-4 w-[10rem]">
        {homeTypes.map((type) => (
          <label key={type} className="block mb-2">
            <input
              type="checkbox"
              checked={selected.includes(type)}
              onChange={() => handleChange(type)}
              className="mr-2"
            />
            {type}
          </label>
        ))}
      </div>
    );
  };

  const MobileFilters = () => (
    <div className="flex overflow-x-auto py-4 gap-2 px-4 md:hidden">
      <button
        onClick={() => togglePopup("Price Range")}
        className="px-3 py-1 bg-white border border-gray-300 rounded-full text-sm whitespace-nowrap"
      >
        {getPriceRangeLabel()}
      </button>
      <button
        onClick={() => togglePopup("Beds & Baths")}
        className="px-3 py-1 bg-white border border-gray-300 rounded-full text-sm whitespace-nowrap"
      >
        {getBedsBathsLabel()}
      </button>
      <button
        onClick={() => togglePopup("Home Type")}
        className="px-3 py-1 bg-white border border-gray-300 rounded-full text-sm whitespace-nowrap"
      >
        {getHomeTypeLabel()}
      </button>
      <button
        onClick={() => togglePopup("More Filters")}
        className="px-3 py-1 bg-white border border-gray-300 rounded-full text-sm flex items-center whitespace-nowrap"
      >
        <Settings className="mr-1 h-3 w-3" /> Filters
      </button>
    </div>
  );

  return (
    <div className="relative h-[87vh]">
      {/* Desktop filters */}
      <div className="rounded-lg px-4 hidden md:block">
        <div className="flex flex-wrap items-center gap-4 py-3">
          <div className="flex rounded-md shadow-sm p-1 border">
            {menuItems.map(({ name, count }) => (
              <button
                key={name}
                onClick={() => setActiveToggle(name)}
                className={`px-4 py-1 text-sm font-medium rounded-md cursor-pointer ${
                  activeToggle === name
                    ? "bg-[#001B3D] text-white"
                    : "bg-white text-gray-700 hover:bg-gray-50"
                } border border-gray-300`}
              >
                {name}
                {activeToggle === name && (
                  <span className="ml-2 bg-white text-[#001B3D] rounded px-1.5">
                    {homeType.length}
                  </span>
                )}
              </button>
            ))}
          </div>
          <div className="flex items-center gap-4 min-w-max">
            {["Price Range", "Beds & Baths", "Home Type"].map((filter) => (
              <div key={filter} className="relative">
                <button
                  onClick={() => togglePopup(filter)}
                  className="px-4 py-[6px] bg-white border border-gray-300 rounded-md hover:bg-gray-50 flex items-center gap-2 cursor-pointer"
                >
                  {filter === "Price Range"
                    ? getPriceRangeLabel()
                    : filter === "Beds & Baths"
                    ? getBedsBathsLabel()
                    : getHomeTypeLabel()}
                  {filter === "Price Range" &&
                    (priceRange.min || priceRange.max) && (
                      <X
                        className="h-4 w-4 text-gray-500 hover:text-gray-700"
                        onClick={(e) => {
                          e.stopPropagation();
                          clearPriceRange();
                        }}
                      />
                    )}
                  {filter === "Beds & Baths" &&
                    (totalbeds > 0 || totalbaths > 0) && (
                      <X
                        className="h-4 w-4 text-gray-500 hover:text-gray-700"
                        onClick={(e) => {
                          e.stopPropagation();
                          clearBedsBaths();
                        }}
                      />
                    )}
                  {filter === "Home Type" && selectedHomeTypes.length > 0 && (
                    <X
                      className="h-4 w-4 text-gray-500 hover:text-gray-700"
                      onClick={(e) => {
                        e.stopPropagation();
                        clearHomeTypes();
                      }}
                    />
                  )}
                </button>
                {renderPopup(
                  filter,
                  <>
                    {filter === "Beds & Baths" && (
                      <FilterPopup
                        totalbeds={totalbeds}
                        settotalBeds={settotalBeds}
                        totalbaths={totalbaths}
                        settotalBaths={settotalBaths}
                      />
                    )}
                    {filter === "Price Range" && (
                      <Range onPriceChange={handlePriceChange} />
                    )}
                    {filter === "Home Type" && (
                      <HomeTypeFilter onTypeChange={handleHomeTypeChange} />
                    )}
                  </>
                )}
              </div>
            ))}
            <div className="relative">
              <button
                onClick={() => togglePopup("More Filters")}
                className="px-4 py-[6px] bg-white border border-gray-300 rounded-md hover:bg-gray-50 flex items-center cursor-pointer"
              >
                <Settings className="mr-2 h-4 w-4" /> More Filters
              </button>
              {renderPopup(
                "More Filters",
                <MoreFiltersPopup
                  priceRange={priceRange}
                  setPriceRange={setPriceRange}
                  squareFeetRange={squareFeetRange}
                  setSquareFeetRange={setSquareFeetRange}
                  totalbeds={totalbeds}
                  settotalBeds={settotalBeds}
                  totalbaths={totalbaths}
                  settotalBaths={settotalBaths}
                  selectedHomeTypes={selectedHomeTypes}
                  setSelectedHomeTypes={setSelectedHomeTypes}
                  lotSize={lotSize}
                  setLotSize={setLotSize}
                  garage={garage}
                  setGarage={setGarage}
                  onClose={() => setActivePopup(null)}
                />
              )}
            </div>
          </div>
          <div className="ml-auto">
            <Link
              to={"/contact"}
              className="px-4 py-2 bg-[#99DDE5] text-gray-90 rounded-full hover:bg-[#99DDE5] cursor-pointer"
            >
              Contact our Team
            </Link>
          </div>
        </div>
      </div>

      {/* Main layout container */}
      <div className="flex flex-col md:flex-row md:h-[calc(100vh-180px)] h-full relative overflow-hidden bg-blue-100">
        {/* Sidebar with listings */}
        <div
          className={`bg-gray-100 transition-all duration-300 ease-in-out overflow-auto
            ${
              isSidebarOpen
                ? "md:w-1/3 md:min-w-[600px]"
                : "md:w-0 md:min-w-0 md:opacity-0"
            } 
            md:block hidden`}
        >
          <div className="p-6">
            <h2 className="text-xl font-bold">Brighton, CO</h2>
            <div className="flex justify-between mt-4">
              <span className="text-sm font-semibold">
                {homeType.length} Listings
              </span>
              <select
                className="border p-2 rounded-md text-sm"
                value={sortOption}
                onChange={(e) => setSortOption(e.target.value)}
              >
                <option value="Price high to low">Price high to low</option>
                <option value="Price low to high">Price low to high</option>
                <option value="Community (A-Z)">Community (A-Z)</option>
                <option value="Community (Z-A)">Community (Z-A)</option>
              </select>
            </div>

            {/* Desktop listings */}
            <div className="mt-6 pb-6">
              {homeType.length > 0 ? (
                homeType.map((home, index) => (
                  <div
                    key={index}
                    className="rounded-lg p-4 mb-4 bg-white shadow-xl shadow-blue-100 hover:border cursor-pointer sha"
                  >
                    <img
                      className="w-full h-40 object-cover rounded-md"
                      src={home.image}
                      alt="House"
                    />
                    <h3 className="text-lg font-bold mt-2">{home.title}</h3>
                    <p className="text-sm text-gray-600">
                      Lot {home.lotNumber} | {home.type} | {home.size} ft² |{" "}
                      {home.beds} Bed | {home.baths} Bath
                    </p>
                    <p className="text-blue-600 font-bold mt-2">
                      Priced from
                      {home.price
                        ? `$${home.price.toLocaleString()}`
                        : "$XXX,XXX"}
                    </p>
                  </div>
                ))
              ) : (
                <p className="text-gray-500 mt-4">No homes available.</p>
              )}
            </div>
            <Footer />
          </div>
        </div>

        {/* Map area */}
        <div className="w-full h-full md:flex-grow relative overflow-hidden">
          {/* Map visibility toggle button */}
          <div className="absolute top-4 right-4 z-20">
            <button
              className="relative p-2 bg-white rounded-full shadow-md border border-gray-300 hover:bg-gray-100 group"
              onClick={() => setIsMapVisible(!isMapVisible)}
            >
              {isMapVisible ? (
                <ChevronDown className="h-5 w-5" />
              ) : (
                <ChevronUp className="h-5 w-5" />
              )}
              {/* Tooltip */}
              <span className="absolute top-full mt-2 right-0 w-max px-2 py-1 text-sm text-white bg-gray-800 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                {isMapVisible ? "Hide Map" : "Show Map"}
              </span>
            </button>
          </div>

          {/* Map component with conditional rendering */}
          <div
            className={`h-full transition-all duration-300 ${
              isMapVisible ? "opacity-100" : "opacity-0 h-0"
            }`}
          >
            <HouseMapScreen />
          </div>

          <button
            className="absolute top-1/2 transform -translate-y-1/2 hidden md:flex items-center justify-center bg-white shadow-md cursor-pointer h-14 w-8 border-t-2 border-r-2 border-b-2 border-gray-500 z-0 group"
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          >
            {isSidebarOpen ? (
              <ChevronLeft className="h-5 w-5" />
            ) : (
              <ChevronRight className="h-5 w-5" />
            )}
            <span className="absolute top-1/2 -translate-y-1/2 left-full ml-2 w-max px-2 py-1 text-sm text-white bg-gray-500 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
              {isSidebarOpen ? "Collaps side panel" : "Expand side panel"}
            </span>
          </button>
          {/* Mobile quick filters */}
          <div className="md:hidden">
            <MobileFilters />
          </div>

          {/* Mobile bottom bar */}
          <div
            className="fixed bottom-0 left-0 right-0 bg-white shadow-lg z-40 md:hidden border-t border-gray-300"
            onClick={() =>
              setMobileSheetHeight(mobileSheetHeight === "min" ? "half" : "min")
            }
          >
            <div className="flex justify-between items-center p-3">
              <div>
                <span className="font-bold">Brighton, CO</span>
                <span className="ml-2 text-sm text-gray-600">
                  {homeType.length} listings
                </span>
              </div>
              <button className="p-2">
                <ChevronUp className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile bottom sheet */}
        <div
          className={`fixed bottom-0 left-0 right-0 bg-white z-50 rounded-t-xl shadow-lg md:hidden transition-all duration-300 transform ${
            mobileSheetHeight === "min"
              ? "translate-y-full"
              : mobileSheetHeight === "half"
              ? "translate-y-0 h-1/2"
              : "translate-y-0 h-5/6"
          }`}
        >
          <div className="flex justify-center items-center border-b border-gray-200 p-2 relative">
            <div className="w-16 h-1 bg-gray-300 rounded-full mx-auto"></div>
            <button
              className="absolute right-4 p-2"
              onClick={toggleMobileSheetHeight}
            >
              {mobileSheetHeight === "full" ? (
                <ChevronDown className="h-5 w-5" />
              ) : (
                <ChevronUp className="h-5 w-5" />
              )}
            </button>
          </div>
          <div className="p-3 flex justify-between items-center border-b border-gray-200">
            <h2 className="text-xl font-bold">
              Brighton, CO ({homeType.length})
            </h2>
            <select
              className="border p-1 rounded-md text-sm"
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value)}
            >
              <option value="Price low to high">Price: Low to High</option>
              <option value="Price high to low">Price: High to Low</option>
              <option value="Community (A-Z)">A-Z</option>
              <option value="Community (Z-A)">Z-A</option>
            </select>
          </div>
          <div className="overflow-y-auto h-[calc(100%-84px)] ">
            {homeType.length > 0 ? (
              homeType.map((home, index) => (
                <div key={index} className="p-4 border-b border-gray-200 ">
                  <div className="flex  hover:border-2 cursor-pointer">
                    <img
                      className="w-24 h-24 object-cover rounded-md mr-3"
                      src={home.image}
                      alt={home.title}
                    />
                    <div>
                      <h3 className="font-bold text-sm">{home.title}</h3>
                      <p className="text-xs text-gray-600">
                        Lot {home.lotNumber} | {home.type} | {home.beds} Bd |{" "}
                        {home.baths} Ba
                      </p>
                      <p className="text-xs text-gray-600">{home.size} ft²</p>
                      <p className="text-blue-600 font-bold text-sm mt-1">
                        ${home.price.toLocaleString()}
                      </p>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-gray-500 p-4">No homes available.</p>
            )}
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default RealEstateListings;
