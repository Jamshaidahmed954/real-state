import { useState } from "react";
import React from "react";

export default function HomeTypeFilter({ onTypeChange }) {
  const homeTypes = [
    { name: "Single Family Homes", disabled: false },
    { name: "Condos", disabled: true },
    { name: "Duplex Homes", disabled: false },
    { name: "Townhomes", disabled: true },
  ];

  const [selectedTypes, setSelectedTypes] = useState([]);

  const toggleSelection = (type) => {
    if (type.disabled) return;
    setSelectedTypes((prev) =>
      prev.includes(type.name)
        ? prev.filter((t) => t !== type.name)
        : [...prev, type.name]
    );
  };

  const handleDone = () => {
    if (onTypeChange) {
      onTypeChange(selectedTypes);
    }
  };

  return (
    <div className="w-80 p-4 bg-white shadow-lg rounded-lg">
      <h2 className="text-gray-700 font-semibold mb-3">Home Type</h2>
      <div className="flex flex-wrap gap-2">
        {homeTypes.map((type) => (
          <button
            key={type.name}
            onClick={() => toggleSelection(type)}
            className={`px-4 py-2 text-sm rounded-full border font-medium 
              ${
                type.disabled
                  ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                  : selectedTypes.includes(type.name)
                  ? "bg-blue-900 text-white"
                  : "bg-white text-gray-700 border-gray-400"
              }`}
          >
            {type.name}
          </button>
        ))}
      </div>
      <button
        onClick={handleDone}
        className="w-full mt-4 py-2 bg-blue-900 text-white rounded-lg font-semibold"
      >
        Done
      </button>
    </div>
  );
}
