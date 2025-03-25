import React, { useState, useEffect } from "react";

const FilterPopup = ({
  totalbeds,
  settotalBeds,
  totalbaths,
  settotalBaths,
  onClose,
}) => {
  const [beds, setBeds] = useState(totalbeds);
  const [baths, setBaths] = useState(totalbaths);

  // Update parent component whenever beds or baths change
  useEffect(() => {
    settotalBeds(beds);
    settotalBaths(baths);
  }, [beds, baths, settotalBeds, settotalBaths]);

  const handleBedsIncrement = () => {
    setBeds((prev) => prev + 1);
  };

  const handleBedsDecrement = () => {
    setBeds((prev) => (prev > 0 ? prev - 1 : 0)); // Prevent going below 0
  };

  const handleBathsIncrement = () => {
    setBaths((prev) => prev + 1);
  };

  const handleBathsDecrement = () => {
    setBaths((prev) => (prev > 0 ? prev - 1 : 0)); // Prevent going below 0
  };

  const handleDone = () => {
    if (onClose) onClose(); // Close the popup when Done is clicked
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow-md w-72 border border-gray-200">
      <h3 className="text-base font-semibold text-gray-800 mb-4">
        Beds & Baths
      </h3>
      <div className="space-y-3">
        {/* Beds Section */}
        <div>
          <label className="block text-xs font-medium text-gray-600 uppercase tracking-wide mb-1">
            Beds
          </label>
          <div className="flex items-center justify-center space-x-2">
            <button
              onClick={handleBedsDecrement}
              disabled={beds === 0}
              className="w-7 h-7 flex items-center justify-center rounded-full bg-gray-100 text-gray-700 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-600 disabled:bg-gray-100 disabled:text-gray-400 disabled:cursor-not-allowed transition-colors duration-150"
              aria-label="Decrease beds"
            >
              -
            </button>
            <span className="text-sm font-medium text-gray-900 w-12 text-center">
              {beds === 0 ? "Any" : `${beds}+`}
            </span>
            <button
              onClick={handleBedsIncrement}
              className="w-7 h-7 flex items-center justify-center rounded-full bg-gray-100 text-gray-700 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-600 transition-colors duration-150"
              aria-label="Increase beds"
            >
              +
            </button>
          </div>
        </div>

        {/* Baths Section */}
        <div>
          <label className="block text-xs font-medium text-gray-600 uppercase tracking-wide mb-1">
            Baths
          </label>
          <div className="flex items-center justify-center space-x-2">
            <button
              onClick={handleBathsDecrement}
              disabled={baths === 0}
              className="w-7 h-7 flex items-center justify-center rounded-full bg-gray-100 text-gray-700 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-600 disabled:bg-gray-100 disabled:text-gray-400 disabled:cursor-not-allowed transition-colors duration-150"
              aria-label="Decrease baths"
            >
              -
            </button>
            <span className="text-sm font-medium text-gray-900 w-12 text-center">
              {baths === 0 ? "Any" : `${baths}+`}
            </span>
            <button
              onClick={handleBathsIncrement}
              className="w-7 h-7 flex items-center justify-center rounded-full bg-gray-100 text-gray-700 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-600 transition-colors duration-150"
              aria-label="Increase baths"
            >
              +
            </button>
          </div>
        </div>
      </div>
      <button
        onClick={handleDone}
        className="w-full mt-4 px-4 py-2 text-sm font-medium text-white bg-[#001B3D] rounded-md hover:bg-[#001533] focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-1 transition-colors duration-150"
      >
        Done
      </button>
    </div>
  );
};

export default FilterPopup;
