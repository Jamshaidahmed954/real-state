import React from "react";
import leadershipData from "./data/data";

const LeaderShip = () => {
  return (
    <div>
      <div className="max-w-7xl mx-auto px-4 py-10 flex flex-col gap-8 justify-center items-center">
        <h1 className="text-4xl font-bold text-center">
          Senior Leadership & Market Presidents
        </h1>
        <p className="text-center text-black">
          When it comes to building great communities, experience is a key
          differentiator. That's why our team has some of the best, most
          seasoned people in the industry. Our management teams have an average
          of 20 years of experience and are committed to building the best
          communities in their regions.
        </p>
      </div>
      {/* Cards Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-6 lg:w-[80%] mx-auto">
        {leadershipData.map((section, index) => (
          <div
            key={index}
            className="relative group h-96 bg-cover bg-center overflow-hidden cursor-pointer "
            style={{
              backgroundImage: `url(${section.image})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          >
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-blue-950 opacity-15 group-hover:opacity-80 transition-opacity duration-300"></div>

            {/* Text content */}
            <div className="absolute inset-0 flex flex-col items-start justify-end text-white p-4 ">
              <h2 className="text-4xl block group-hover:hidden font-bold z-10">
                {section.title}
              </h2>
              <p className="block group-hover:hidden mt-2 text-sm transition-opacity duration-300 z-10 uppercase">
                {section.name}
              </p>
              <div className="hidden group-hover:flex mt-2 text-sm transition-opacity duration-300 z-10 uppercase font-sans flex-col gap-2">
                {section.desc}
                <button className="self-start border rounded-full px-2 py-1 cursor-pointer">
                  Reade More
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LeaderShip;
