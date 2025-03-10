import React, { useState, useEffect } from "react";

const Range = ({ onPriceChange }) => {
  const minPriceOptions = [
    { label: "No Min", value: 0 },
    { label: "$50,000", value: 50000 },
    { label: "$100,000", value: 100000 },
    { label: "$550,000", value: 550000 },
  ];

  const maxPriceOptions = [
    { label: "No Max", value: Infinity },
    { label: "$300,000", value: 300000 },
    { label: "$500,000", value: 500000 },
    { label: "$1,000,000", value: 1000000 },
  ];

  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(Infinity);

  // Use useEffect to trigger onPriceChange whenever minPrice or maxPrice changes
  useEffect(() => {
    if (onPriceChange) {
      onPriceChange({
        min: minPrice === 0 ? null : minPrice,
        max: maxPrice === Infinity ? null : maxPrice,
      });
    }
  }, [minPrice, maxPrice, onPriceChange]);

  const handleMinChange = (e) => {
    const newMin = Number(e.target.value);
    if (newMin > maxPrice && maxPrice !== Infinity) {
      return;
    }
    setMinPrice(newMin);
  };

  const handleMaxChange = (e) => {
    const newMax = Number(e.target.value);
    if (newMax < minPrice && newMax !== Infinity) {
      return;
    }
    setMaxPrice(newMax);
  };

  return (
    <div>
      <div className="relative max-w-sm p-4 bg-white rounded-lg shadow-lg w-[30rem]">
        <h3 className="text-lg font-semibold text-gray-900">Price Range</h3>

        <div className="flex items-center justify-between mt-4 w-full h-full">
          <div className="pr-2 w-1/2">
            <label className="block text-sm font-medium text-gray-700">
              Min:
            </label>
            <select
              value={minPrice}
              onChange={handleMinChange}
              className="px-3 py-2 mt-1 text-gray-900 bg-white border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 w-full"
            >
              {minPriceOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>

          <span className="text-gray-500">—</span>

          <div className="w-1/2 pl-2">
            <label className="block text-sm font-medium text-gray-700">
              Max:
            </label>
            <select
              value={maxPrice}
              onChange={handleMaxChange}
              className="px-3 py-2 mt-1 text-gray-900 bg-white border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 w-full"
            >
              {maxPriceOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* You can keep the button if you want, but it's not necessary for updates anymore */}
        <button
          onClick={() => {}} // Empty function since updates happen automatically
          className="w-full px-4 py-2 mt-4 font-semibold text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Done
        </button>
      </div>
    </div>
  );
};

export default Range;
