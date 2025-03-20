import React from "react";

const Card = ({ image, title, category, description }) => {
  return (
    <div className="">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <img src={image} alt={title} className="w-full h-96 object-cover" />
        <div className="py-4">
          <span className="bg-black text-white text-xs font-semibold px-2 py-1 rounded">
            {category}
          </span>
          <h3 className="text-lg font-bold mt-3 text-black">{title}</h3>
          <p className="  text-black ">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
