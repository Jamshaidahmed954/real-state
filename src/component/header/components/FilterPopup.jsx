import { useState, useEffect } from "react";
import React from "react";

export default function FilterPopup({
  totalbeds,
  totalbaths,
  settotalBeds,
  settotalBaths,
  setIsOpen,
}) {
  const [beds, setBeds] = useState(totalbeds || 0);
  const [baths, setBaths] = useState(totalbaths || 0);

  useEffect(() => {
    setBeds(totalbeds || 0);
    setBaths(totalbaths || 0);
  }, [totalbeds, totalbaths]);

  const handleDecrease = (type) => {
    if (type === "beds" && beds > 0) setBeds((prev) => prev - 1);
    if (type === "baths" && baths > 0) setBaths((prev) => prev - 1);
  };

  const handleIncrease = (type) => {
    if (type === "beds") setBeds((prev) => prev + 1);
    if (type === "baths") setBaths((prev) => prev + 1);
  };

  const handleDone = () => {
    settotalBeds(beds);
    settotalBaths(baths);
    setIsOpen(false); // Close the popup
  };

  return (
    <div className="w-80 p-4 bg-white shadow-lg rounded-lg z-20">
      <h2 className="text-lg font-semibold text-gray-800 mb-4">Filter</h2>

      {/* Beds Section */}
      <div className="flex justify-between items-center py-2 border-b">
        <span className="text-gray-700">Beds</span>
        <div className="flex items-center space-x-2">
          <button
            className="w-6 h-6 flex items-center justify-center bg-gray-300 rounded-full text-gray-700"
            onClick={() => handleDecrease("beds")}
          >
            –
          </button>
          <span className="text-gray-700">{beds === 0 ? "Any" : beds}</span>
          <button
            className="w-6 h-6 flex items-center justify-center bg-gray-300 rounded-full text-gray-700"
            onClick={() => handleIncrease("beds")}
          >
            +
          </button>
        </div>
      </div>

      {/* Baths Section */}
      <div className="flex justify-between items-center py-2 border-b">
        <span className="text-gray-700">Baths</span>
        <div className="flex items-center space-x-2">
          <button
            className="w-6 h-6 flex items-center justify-center bg-gray-300 rounded-full text-gray-700"
            onClick={() => handleDecrease("baths")}
          >
            –
          </button>
          <span className="text-gray-700">{baths === 0 ? "Any" : baths}</span>
          <button
            className="w-6 h-6 flex items-center justify-center bg-gray-300 rounded-full text-gray-700"
            onClick={() => handleIncrease("baths")}
          >
            +
          </button>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex justify-between mt-4">
        <button
          className="w-1/2 py-2 bg-gray-300 text-gray-800 rounded-lg font-semibold mr-2"
          onClick={() => setIsOpen(false)}
        >
          Cancel
        </button>
        <button
          className="w-1/2 py-2 bg-blue-900 text-white rounded-lg font-semibold"
          onClick={handleDone}
        >
          Done
        </button>
      </div>
    </div>
  );
}
