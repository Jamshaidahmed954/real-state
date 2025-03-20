import React, { useState, useEffect } from "react";

const History = () => {
  const timelineData = [
    {
      year: 1956,
      content: "Brookfield Homes (Ontario) founded.",
    },
    {
      year: 1958,
      content: "Expanded operations across Canada.",
    },
    {
      year: 1972,
      content: "First master-planned community completed.",
    },
    {
      year: 1972,
      content: "First master-planned community completed.",
    },
    {
      year: 1972,
      content: "First master-planned community completed.",
    },
    {
      year: 1972,
      content: "First master-planned community completed.",
    },
    {
      year: 1972,
      content: "First master-planned community completed.",
    },
  ];

  const [activeSlide, setActiveSlide] = useState(0);

  const handlePrev = () => {
    setActiveSlide((prev) => (prev === 0 ? timelineData.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveSlide((prev) => (prev === timelineData.length - 1 ? 0 : prev + 1));
  };

  const handleDotClick = (index) => {
    setActiveSlide(index);
  };

  return (
    <div className="w-full mx-auto px-4 py-16 relative bg-white  lg:w-[85%]">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold">Our History</h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Great companies, like great communities, don't happen by accident. It
          takes time, dedication and vision to build a successful company, and
          above all else, it takes a clear understanding of who you are, what
          you stand for and who you aspire to be.
        </p>
      </div>

      <div className="relative h-[80vh]">
        <div className="timeline-slider relative overflow-hidden h-full ">
          {/* Background Image with Overlay */}
          <div
            style={{
              backgroundImage: `url('https://cdn.brookfieldresidential.net/-/media/brp/global/modules/timeline/corporate/about_ourhistory_timeline.jpg?rev=3c594d0d307d45b490944d2110c4fd00')`,
            }}
            className="absolute inset-0  bg-cover bg-center "
          >
            <div className="absolute inset-0 bg-blac bg-opacity-40"></div>
          </div>

          {/* Timeline Content */}
          <div className="absolute inset-0 flex flex-col top-0 items-center justify-center text-white px-6">
            <h2 className="text-3xl font-bold mb-4 text-center">
              {timelineData[activeSlide].content}
            </h2>

            {/* Timeline Bar with Years */}
            <div className="w-full  mt-8 mb-4 relative">
              <div className="h-[2px] bg-white w-full relative">
                {/* White Dots on Timeline */}
                {timelineData.map((_, index) => (
                  <div
                    key={index}
                    className="absolute top-full transform -translate-y-1/2"
                    style={{
                      left: `${(index / (timelineData.length - 1)) * 100}%`,
                    }}
                  >
                    <div
                      className={`h-4 w-4 rounded-full ${
                        activeSlide === index ? "bg-white" : "bg-gray-400"
                      } transition-colors duration-300`}
                    ></div>
                  </div>
                ))}
              </div>

              {/* Year Labels */}
              <div className="flex justify-between absolute w-full top-12">
                {timelineData.map((item, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center cursor-pointer"
                    onClick={() => setActiveSlide(index)}
                  >
                    <span
                      className={`text-6xl font-bold ${
                        activeSlide === index ? "text-white" : "text-gray-400"
                      } transition-colors duration-300`}
                    >
                      {item.year}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={handlePrev}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 rounded-full bg-black bg-opacity-30 flex items-center justify-center text-white"
              aria-label="Previous slide"
            >
              <span className="text-2xl">&lt;</span>
            </button>
            <button
              onClick={handleNext}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 rounded-full bg-black bg-opacity-30 flex items-center justify-center text-white"
              aria-label="Next slide"
            >
              <span className="text-2xl">&gt;</span>
            </button>

            {/* Timeline Dots */}
            <div className="flex gap-1 mt-32">
              {Array(16)
                .fill(0)
                .map((_, index) => (
                  <div
                    key={index}
                    className={`w-2 h-2 rounded-full cursor-pointer ${
                      index === activeSlide % 16 ? "bg-white" : "bg-gray-400"
                    }`}
                    onClick={() => handleDotClick(index % timelineData.length)}
                  ></div>
                ))}
            </div>
          </div>
        </div>
      </div>
      <div className="w-full lg:w-[80%] mx-auto mt-16">
        {/* Thriving Culture Section */}
        <div className="flex flex-col md:flex-row lg:gap-20 gap-4   mb-16 justify-center items-center">
          <div className="md:w-1/2 order-2 md:order-1">
            <p className="text-lg text-black mb-2">
              A HISTORY OF TRANSFORMATION
            </p>
            <p className="mb-3 text-black">
              For more than 65 years, through our predecessor companies,
              Brookfield Residential has been creating the best places to call
              home. As a leader in land development and homebuilding, we
              continue to maintain the same solid values that have helped us
              successfully navigate through several decades of growth and
              change.
            </p>
          </div>
          <div className="md:w-1/2 order-1 md:order-2">
            <img
              src="https://cdn.brookfieldresidential.net/-/media/brp/global/modules/about-spotlight/corporate/about_ourhistory_carmahouse.jpg?rev=60477f4e664f449f919709b7fb6a5938"
              alt="Brookfield team members at a company event in a grand hall"
              className="w-full h-auto"
            />
          </div>
        </div>

        {/* Growing Your Potential Section */}
        <div className="flex flex-col md:flex-row lg:gap-20 gap-4  mb-16 justify-center items-center">
          <div className="md:w-1/2">
            <img
              src="https://cdn.brookfieldresidential.net/-/media/brp/global/modules/about-spotlight/corporate/about_ourhistory_carmahouse/charleston.jpg?rev=a93b9c52173e4b57916cc500d3254e50"
              alt="Brookfield team members gathered outside"
              className="w-full h-auto"
            />
          </div>
          <div className="md:w-1/2">
            <h2 className=" text-lg text-black mb-2">A STRONG LAND POSITION</h2>
            <p className="mb-3 text-black">
              The 2021 acquisition of Newland has positioned Brookfield
              Residential for growth by significantly widening our geographical
              footprint in key growth cities to complement our existing platform
              of master-planned communities - further strengthening Brookfield
              Properties position as a leading land development company in North
              America.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default History;
