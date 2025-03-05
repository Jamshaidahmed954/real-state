import React, { useState, useEffect, useRef, useCallback } from "react";
import { Settings, X } from "lucide-react";
import HouseCommunityMap from "./map";
import FilterPopup from "./header/components/FilterPopup";
import Range from "./header/components/Range";
// import HomeTypeFilter from "./header/components/HomeTypeFilter"; // Replaced with inline component
import MoreFiltersPopup from "./header/components/MoreFiltersPopup";

const RealEstateListings = ({ searchQuery }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [activePopup, setActivePopup] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
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
    const bedsLabel = totalbeds > 0 ? `Beds ${totalbeds}` : "";
    const bathsLabel = totalbaths > 0 ? `Baths ${totalbaths}` : "";
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
    setActivePopup(null);
  };

  const handleHomeTypeChange = (newTypes) => {
    setSelectedHomeTypes(newTypes);
    setActivePopup(null);
  };

  // Standardized home type names
  const allHomes = [
    {
      title: "Floor Plan: Artisan Two",
      size: 2606,
      beds: 3,
      baths: 3,
      price: 547900,
      type: "Single Family",
      image:
        "https://cdn.brookfieldresidential.net/-/media/brp/alberta/calgary-and-area/renderings/laned-homes/york/calgary-brookfieldresidential-newhomes-york-prairie.jpg?cx=0.5&cy=0.5&cw=158&ch=111",
    },
    {
      title: "Floor Plan: Artisan Three",
      size: 2561,
      beds: 3,
      baths: 3,
      price: 560000,
      type: "Single Family",
      image:
        "https://cdn.brookfieldresidential.net/-/media/brp/alberta/calgary-and-area/renderings/laned-homes/york/calgary-brookfieldresidential-newhomes-york-prairie.jpg?cx=0.5&cy=0.5&cw=158&ch=111",
    },
    {
      title: "Floor Plan: Modern Loft",
      size: 1800,
      beds: 2,
      baths: 2,
      price: 1900,
      type: "Townhome",
      image:
        "https://cdn.brookfieldresidential.net/-/media/brp/alberta/calgary-and-area/renderings/laned-homes/york/calgary-brookfieldresidential-newhomes-york-prairie.jpg?cx=0.5&cy=0.5&cw=158&ch=111",
    },
    {
      title: "Brighton Community Home",
      size: 2561,
      beds: 3,
      baths: 3,
      price: 520000,
      type: "Single Family",
      image:
        "https://cdn.brookfieldresidential.net/-/media/brp/alberta/calgary-and-area/renderings/laned-homes/york/calgary-brookfieldresidential-newhomes-york-prairie.jpg?cx=0.5&cy=0.5&cw=158&ch=111",
    },
    {
      title: "Quick Move-In: Ready Now",
      size: 2200,
      beds: 4,
      baths: 3,
      price: 590000,
      type: "Single Family",
      image:
        "https://cdn.brookfieldresidential.net/-/media/brp/alberta/calgary-and-area/renderings/laned-homes/york/calgary-brookfieldresidential-newhomes-york-prairie.jpg?cx=0.5&cy=0.5&cw=158&ch=111",
    },
    {
      title: "Quick Move-In: Summer Move",
      size: 2000,
      beds: 3,
      baths: 2,
      price: 480000,
      type: "Townhome",
      image:
        "https://cdn.brookfieldresidential.net/-/media/brp/alberta/calgary-and-area/renderings/laned-homes/york/calgary-brookfieldresidential-newhomes-york-prairie.jpg?cx=0.5&cy=0.5&cw=158&ch=111",
    },
  ];

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
    priceRange,
    totalbeds,
    totalbaths,
    selectedHomeTypes,
    squareFeetRange,
    sortOption,
  ]);

  // Inline HomeTypeFilter component
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
      <div className="p-4">
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

  return (
    <div>
      <div className="rounded-lg p-4 my-4 hidden md:block">
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
                  className="px-4 py-2 bg-white border border-gray-300 rounded-md hover:bg-gray-50 flex items-center gap-2"
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
                className="px-4 py-2 bg-white border border-gray-300 rounded-md hover:bg-gray-50 flex items-center"
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
            <button className="px-4 py-2 bg-[#99DDE5] text-gray-900 rounded-full hover:bg-[#99DDE5]">
              Contact our Team
            </button>
          </div>
        </div>
      </div>

      <div className="flex md:h-[70vh] relative overflow-hidden flex-col-reverse">
        <div
          className={`p-6 shadow-md overflow-auto transition-all duration-500 bg-gray-200 md:md:absolute md:top-0 md:left-0 md:h-full ${
            isSidebarOpen ? "md:w-[35%]" : "md:w-0 md:-translate-x-full"
          }`}
        >
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

          <div className="md:mt-6 overflow-auto">
            {homeType.length > 0 ? (
              homeType.map((home, index) => (
                <div
                  key={index}
                  className="rounded-lg p-4 mb-4 overflow-auto bg-white shadow-md"
                >
                  <img
                    className="w-full h-40 object-cover rounded-md"
                    src={home.image}
                    alt="House"
                  />
                  <h3 className="text-lg font-bold mt-2">{home.title}</h3>
                  <p className="text-sm text-gray-600">
                    {home.type} | {home.size} ft² | {home.beds} Bed |{" "}
                    {home.baths} Bath
                  </p>
                  <p className="text-blue-600 font-bold mt-2">
                    Priced from{" "}
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
        </div>

        <div
          className={`transition-all duration-500 h-full ${
            isSidebarOpen ? "w-[100%] md:ml-[35%]" : "w-full ml-0"
          }`}
        >
          <div className="w-full h-full relative">
            <HouseCommunityMap searchQuery={searchQuery} />
            <button
              className={
                "absolute md:top-1/2 bottom-1/2 bg-white transform border-r-2 border-t-2 border-b-2 border-gray-400 -translate-y-1/2 text-xl w-10 h-16  p-2 z-50 transition-all duration-500 "
              }
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            >
              {isSidebarOpen ? "<" : ">"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RealEstateListings;
