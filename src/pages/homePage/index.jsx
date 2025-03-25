import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { MdLocationOn } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { PiStarLight } from "react-icons/pi";

// Dummy images for the slider
const sliderImages = [
  "/src/assets/indexImages/Home Exterior Austin Kissing Tree.jpg",
  "/src/assets/indexImages/Kitchen Denver Solterra.jpg",
  "/src/assets/indexImages/Los Coyotes Kitchen Southern California.jpg",
];

const Home = () => {
  // Slider settings
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <>
      {/* Section1 with Search Bar */}
      <div
        className="relative bg-cover bg-center min-h-[50vh] md:min-h-[86vh] flex items-center justify-center"
        style={{
          backgroundImage:
            "url('/src/assets/indexImages/One Lake Community Panorama.jpg')",
        }}
      >
        <div className="text-center px-4">
          <h1 className="text-3xl md:text-5xl font-bold mb-6 md:mb-8 text-white">
            Find Your New Home
          </h1>
          <div className="w-full max-w-xl mx-auto relative group">
            <MdLocationOn className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#2AA3C2] text-xl md:text-2xl" />
            <input
              type="text"
              placeholder="Search for City, Community, or Floor Plan Name"
              className="w-full py-3 pl-12 pr-16 text-sm md:text-lg text-gray-950 font-semibold bg-white rounded-full outline-1 outline-gray-500 focus:outline-2 focus:outline-[#2AA3C2]"
            />
            <div className="absolute inset-y-0 right-0 flex items-center m-1 rounded-full bg-[#66C5DD] transition-all duration-300 group-hover:bg-[#8AD3E5]">
              <CiSearch className="w-8 h-8 md:w-12 md:h-12 p-2 rounded-full" />
              <span className="w-0 overflow-hidden group-hover:w-16 transition-all text-sm md:text-base">
                Search
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Promotions Section */}
      <div className="flex flex-col md:flex-row mx-4 md:mx-16 my-8 px-6 md:px-12 py-8 md:py-16 items-center justify-center rounded-2xl bg-[#EAF3FF] gap-6">
        <img
          src="/src/assets/indexImages/discover promotions graphic.png"
          alt="Promotions"
          className="w-1/2 md:w-1/6"
        />
        <span className="w-full md:w-4/6 text-center md:text-left text-sm md:text-lg font-semibold px-4">
          With a range of financing incentives, closing cost assistance,
          included options and upgrades, and more, your new home is closer than
          you think. Terms and conditions apply.
        </span>
        <button className="w-full md:w-1/6 px-4 py-2 rounded-full font-semibold text-white bg-[#012A5E] hover:bg-[#00213D] transition-all text-sm md:text-base">
          Explore All Promotions
        </button>
      </div>

      {/* Main Content with Slider */}
      <div className="max-w-7xl mx-auto py-10 px-4 flex flex-col md:flex-row items-center justify-between mb-20 md:mb-40 gap-8">
        <div className="w-full md:w-1/3 space-y-4 text-center md:text-left">
          <h2 className="text-2xl md:text-3xl font-bold">
            The Best Places to Call Home
          </h2>
          <p className="text-base md:text-lg">
            Explore our portfolio of homes and communities with a wide range of
            options across the United States and Canada
          </p>
          <div className="flex justify-center md:justify-start space-x-4 text-sm md:text-base">
            <span>
              50+ <br /> Communities
            </span>
            <span>
              40+ <br /> Cities
            </span>
          </div>
          <button className="mt-4 px-8 md:px-12 py-3 md:py-4 text-base md:text-lg font-semibold rounded-full bg-[#66C5DD] hover:bg-[#8AD3E5] transition-all">
            Where We Build
          </button>
        </div>
        <div className="w-full md:w-2/3">
          <Slider {...sliderSettings}>
            {sliderImages.map((image, index) => (
              <div key={index} className="relative">
                <img
                  src={image}
                  alt={`Slide ${index + 1}`}
                  className="w-full h-64 md:h-96 object-cover rounded-2xl"
                />
                <p className="absolute top-2 left-2 text-white px-2 py-1 rounded text-sm md:text-base">
                  RiverSound Community, Napa, CA
                </p>
              </div>
            ))}
          </Slider>
        </div>
      </div>

      {/* Brookfield Residential Difference */}
      <div className="mx-4 md:mx-28 text-center mb-20 md:mb-40">
        <h2 className="text-2xl md:text-3xl font-bold mb-8">
          The Brookfield Residential Difference
        </h2>
        <div className="flex flex-col md:flex-row gap-6 mb-8">
          {[1, 2, 3].map((item) => (
            <article key={item} className="text-center p-6 flex-1">
              <img
                src={`/src/assets/indexImages/${
                  item === 1
                    ? "buying experience icon.svg"
                    : item === 2
                    ? "smart home icon.svg"
                    : "communities icon.svg"
                }`}
                alt=""
                className="mx-auto mb-4 w-12 h-12 md:w-16 md:h-16"
              />
              <h3 className="text-xl md:text-2xl font-semibold mb-4">
                {item === 1
                  ? "A Better Buying Experience"
                  : item === 2
                  ? "Homes Built for the Future"
                  : "Communities Made for Living"}
              </h3>
              <p className="text-sm md:text-lg">
                {item === 1
                  ? "Experience innovations that put you in control, a trusted team by your side, and complete pricing transparency"
                  : item === 2
                  ? "Energy-saving smart technology, sustainable construction, and customizable options to make a home uniquely yours"
                  : "Discover unique places to grow, state-of-the-art amenities, and thoughtfully chosen, desirable locations"}
              </p>
            </article>
          ))}
        </div>
        <button className="mt-4 px-8 md:px-12 py-3 md:py-4 text-base md:text-lg font-semibold rounded-full bg-[#66C5DD] hover:bg-[#8AD3E5] transition-all">
          Learn More
        </button>
      </div>

      {/* Locations Section */}
      <div className="mx-4 md:mx-28 mb-12 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-5">
          Find Us in Top Locations Across North America
        </h2>
        <p className="text-base md:text-lg font-semibold">
          Choose a Location to Explore Our Communities
        </p>
      </div>
      <div className="max-h-[50vh] md:max-h-[86vh] overflow-hidden mb-12 md:mb-24 bg-[#F8F8F8] relative">
        <img
          src="/src/assets/indexImages/download.svg"
          alt="Map"
          className="w-full md:w-[88%] -translate-y-[30%] md:-translate-y-[52%] object-cover"
        />
      </div>

      {/* Blog Section */}
      <div className="mx-4 md:mx-28 mb-20 md:mb-40">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center md:text-left">
          From the Blog: Homebuyer Resources
        </h2>
        <div className="flex flex-col md:flex-row gap-6 md:gap-8 mb-8">
          {[1, 2, 3].map((item) => (
            <figure key={item} className="flex-1">
              <img
                src={`/src/assets/indexImages/${item}.${
                  item === 3 ? "png" : "jpg"
                }`}
                alt=""
                className="w-full h-48 md:h-64 object-cover rounded-lg mb-4"
              />
              <p className="w-fit text-xs px-3 py-2 font-bold rounded-md mb-5 text-white bg-[#012A5E]">
                Homebuyer Resources
              </p>
              <h2 className="text-xl md:text-2xl font-bold">
                {item === 1
                  ? "How to Read and Understand a Floor Plan"
                  : item === 2
                  ? "Creating a New Home Wish List"
                  : "Benefits of Living in a Master-Planned Community"}
              </h2>
            </figure>
          ))}
        </div>
        <div className="w-full text-center">
          <button className="px-5 md:px-7 py-2 text-sm md:text-base rounded-full font-bold border-2 border-[#012A5E] hover:bg-[#EDF5FA] transition-all">
            Explore All Resources
          </button>
        </div>
      </div>

      {/* Customer Reviews */}
      <div className="flex flex-col md:flex-row mx-4 md:mx-16 my-8 mb-12 md:mb-24 py-8 px-6 md:px-14 justify-between rounded-2xl bg-[#EAF3FF] gap-6">
        <div className="w-full md:w-[42%]">
          <h2 className="text-xl md:text-2xl font-bold mb-6">
            From Our Customers
          </h2>
          <p className="text-sm md:text-lg font-semibold mb-4">
            Avid Ratings is an independent, third-party customer experience
            research firm.
          </p>
          <hr className="text-gray-300 my-6" />
          <p className="text-sm md:text-lg font-semibold mb-6">
            1349 Customer Reviews
          </p>
          <h2 className="flex text-3xl md:text-5xl font-bold mb-7 items-center">
            4.5
            <span className="px-3 flex text-[#E0A61B]">
              {Array(5)
                .fill()
                .map((_, i) => (
                  <PiStarLight key={i} className="w-6 h-6 md:w-8 md:h-8" />
                ))}
            </span>
          </h2>
          <button className="px-8 md:px-12 py-2 rounded-full font-bold border-2 bg-white border-[#012A5E] hover:bg-[#EDF5FA] text-sm md:text-base">
            Read all reviews
          </button>
        </div>
        <div className="w-full md:w-[55%] px-4 md:px-20 py-8 md:py-14 rounded-lg bg-white">
          <p className="text-sm md:text-lg font-semibold mb-6 md:mb-8">
            "From start to finish the entire process of building our home was
            amazing. The entire team was very communicative & helpful along the
            way. We couldn’t have asked for a better experience for buying our
            first home."
          </p>
          <p className="text-xs md:text-md font-semibold">
            Homebuyer in the Barefoot Lakes Community
          </p>
        </div>
      </div>

      {/* Get in Touch */}
      <div className="flex flex-col md:flex-row mb-8">
        <div className="w-full md:w-1/2 h-fit my-auto px-4 md:px-28 py-8 md:py-14 bg-[#EAF3FF]">
          <div className="flex mb-8 md:mb-12 justify-center md:justify-start">
            <img
              src="/src/assets/indexImages/Jill_Waash.png"
              alt=""
              className="rounded-full border-2 border-[#E0A61B] z-[1] w-16 h-16 md:w-20 md:h-20"
            />
            <img
              src="/src/assets/indexImages/Reet_NASite_Crop.png"
              alt=""
              className="rounded-full border-2 border-[#E0A61B] -translate-x-4 md:-translate-x-5 z-[2] w-16 h-16 md:w-20 md:h-20"
            />
            <img
              src="/src/assets/indexImages/Vince Cuccaruse.jpg"
              alt=""
              className="rounded-full border-2 border-[#E0A61B] -translate-x-8 md:-translate-x-10 z-[3] w-16 h-16 md:w-20 md:h-20"
            />
          </div>
          <p className="text-sm md:text-lg font-semibold mb-2 text-center md:text-left">
            Talk with us about finding your dream home
          </p>
          <h1 className="text-3xl md:text-5xl font-semibold mb-6 text-center md:text-left">
            Get in Touch
          </h1>
          <button className="mt-4 px-8 md:px-12 py-3 md:py-4 text-base md:text-lg font-semibold rounded-full bg-[#66C5DD] hover:bg-[#8AD3E5] transition-all mx-auto md:mx-0 block">
            Contact Us
          </button>
        </div>
        <div className="w-full md:w-1/2">
          <img
            src="/src/assets/indexImages/Denver Colorado Showhome.jpeg"
            alt="Showhome"
            className="w-full h-64 md:h-full object-cover"
          />
        </div>
      </div>
    </>
  );
};

export default Home;
