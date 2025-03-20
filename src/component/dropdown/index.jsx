import React from "react";

const DropDown = ({ label, option }) => {
  return (
    <div>
      <label className="block font-bold mb-2">{label}</label>
      <div className="relative">
        <select className="w-full border border-gray-300 rounded-full py-3 px-4 appearance-none">
          {option.map((item, index) => (
            <option className="" key={index}>
              {item}
            </option>
          ))}
        </select>
        <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default DropDown;
