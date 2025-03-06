// MoreFiltersPopup.js
import React, { useCallback } from "react";
import { X } from "lucide-react";
import HomeTypeFilter from "./HomeTypeFilter";

const MoreFiltersPopup = ({
  priceRange,
  setPriceRange,
  squareFeetRange,
  setSquareFeetRange,
  totalbeds,
  settotalBeds,
  totalbaths,
  settotalBaths,
  selectedHomeTypes,
  setSelectedHomeTypes,
  lotSize,
  setLotSize,
  garage,
  setGarage,
  onClose,
}) => {
  const handlePriceChange = (e, type) => {
    const value =
      e.target.value === "No Min" || e.target.value === "No Max"
        ? null
        : parseInt(e.target.value);
    setPriceRange((prev) => ({ ...prev, [type]: value }));
  };

  const handleSquareFeetChange = (e, type) => {
    const value =
      e.target.value === "No Min" || e.target.value === "No Max"
        ? null
        : parseInt(e.target.value);
    setSquareFeetRange((prev) => ({ ...prev, [type]: value }));
  };

  const handleHomeTypeChange = useCallback(
    (newTypes) => {
      setSelectedHomeTypes(newTypes);
    },
    [setSelectedHomeTypes]
  );

  return (
    <div className="absolute z-10 mt-2 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5 w-96 p-4 h-[500px] overflow-auto">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold text-gray-900">Filters</h3>
        <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
          <X className="h-6 w-6" />
        </button>
      </div>
      <div className="space-y-4">
        {/* Price Range */}
        <div className="flex items-center gap-2">
          <div className="w-1/2">
            <label className="block text-sm font-medium text-gray-700">
              Min Price
            </label>
            <select
              value={priceRange.min || "No Min"}
              onChange={(e) => handlePriceChange(e, "min")}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            >
              <option>No Min</option>
              <option>100000</option>
              <option>200000</option>
              <option>300000</option>
            </select>
          </div>
          <div className="w-1/2">
            <label className="block text-sm font-medium text-gray-700">
              Max Price
            </label>
            <select
              value={priceRange.max || "No Max"}
              onChange={(e) => handlePriceChange(e, "max")}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            >
              <option>No Max</option>
              <option>300000</option>
              <option>400000</option>
              <option>500000</option>
            </select>
          </div>
        </div>
        {/* Square Feet Range */}
        <div className="flex items-center gap-2">
          <div className="w-1/2">
            <label className="block text-sm font-medium text-gray-700">
              Min Sq Ft
            </label>
            <select
              value={squareFeetRange.min || "No Min"}
              onChange={(e) => handleSquareFeetChange(e, "min")}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            >
              <option>No Min</option>
              <option>1000</option>
              <option>1500</option>
              <option>2000</option>
            </select>
          </div>
          <div className="w-1/2">
            <label className="block text-sm font-medium text-gray-700">
              Max Sq Ft
            </label>
            <select
              value={squareFeetRange.max || "No Max"}
              onChange={(e) => handleSquareFeetChange(e, "max")}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            >
              <option>No Max</option>
              <option>2000</option>
              <option>2500</option>
              <option>3000</option>
            </select>
          </div>
        </div>
        {/* Beds */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Beds
          </label>
          <div className="mt-1 flex items-center gap-2">
            <button
              onClick={() => settotalBeds(Math.max(0, totalbeds - 1))}
              className="px-2 py-1 bg-gray-200 rounded-full hover:bg-gray-300"
            >
              -
            </button>
            <span className="w-10 text-center">{totalbeds || "Any"}</span>
            <button
              onClick={() => settotalBeds(totalbeds + 1)}
              className="px-2 py-1 bg-gray-200 rounded-full hover:bg-gray-300"
            >
              +
            </button>
          </div>
        </div>
        {/* Baths */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Baths
          </label>
          <div className="mt-1 flex items-center gap-2">
            <button
              onClick={() => settotalBaths(Math.max(0, totalbaths - 1))}
              className="px-2 py-1 bg-gray-200 rounded-full hover:bg-gray-300"
            >
              -
            </button>
            <span className="w-10 text-center">{totalbaths || "Any"}</span>
            <button
              onClick={() => settotalBaths(totalbaths + 1)}
              className="px-2 py-1 bg-gray-200 rounded-full hover:bg-gray-300"
            >
              +
            </button>
          </div>
        </div>
        {/* Home Type */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Home Type
          </label>
          <HomeTypeFilter
            selectedTypes={selectedHomeTypes}
            onTypeChange={handleHomeTypeChange}
          />
        </div>
        {/* Lot Size */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Lot Size
          </label>
          <select
            value={lotSize || "Any"}
            onChange={(e) =>
              setLotSize(e.target.value === "Any" ? null : e.target.value)
            }
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          >
            <option>Any</option>
            <option>Small</option>
            <option>Medium</option>
            <option>Large</option>
          </select>
        </div>
        {/* Garage */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Garage
          </label>
          <select
            value={garage || "Any"}
            onChange={(e) =>
              setGarage(e.target.value === "Any" ? null : e.target.value)
            }
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          >
            <option>Any</option>
            <option>1 Car</option>
            <option>2 Car</option>
            <option>3+ Car</option>
          </select>
        </div>
        {/* Done Button */}
        <div className="mt-4">
          <button
            onClick={onClose}
            className="w-full bg-[#001B3D] text-white px-4 py-2 rounded-full hover:bg-opacity-90"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
};

export default MoreFiltersPopup;
