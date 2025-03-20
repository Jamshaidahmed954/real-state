import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { MdLocationOn } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { PiStarLight } from "react-icons/pi";
// import "../../../index.css";

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
        className="relative bg-cover bg-center hero-section"
        style={{
          backgroundImage:
            "url('/src/assets/indexImages/One Lake Community Panorama.jpg')",
        }}
      >
        <div className="h-[86vh] content-center">
          <h1 className="flex justify-center text-5xl font-bold mb-8">
            Find Your New Home
          </h1>
          <div className="w-1/2 mx-auto relative group">
            <MdLocationOn className="h-full w-6 text-[#2AA3C2] absolute ml-4" />
            <input
              type="text"
              placeholder="Search for City, Community, or Floor Plan Name"
              className="w-full py-3.5 pl-12 text-lg text-gray-950 font-semibold bg-white rounded-full outline-1 outline-gray-500 focus:outline-2 focus:outline-[#2AA3C2]"
            />
            <div className="flex items-center font-semibold absolute inset-y-0 right-0 transition-all duration-300 m-1 rounded-full bg-[#66C5DD]">
              <CiSearch className="w-12 h-full p-3 rounded-full" />
              <span className="w-0 overflow-hidden group-focus-within:w-16 transition-all">
                Search
              </span>
            </div>
          </div>
          {/* <p className="text-sm text-center text-white mt-2">
              Chappelle Gardens, Edmonton, Alberta
            </p> */}
        </div>
      </div>

      {/* Promotions Section */}
      <div className="flex mx-16 my-8 px-12 py-16 items-center justify-center rounded-2xl bg-[#EAF3FF]">
        <img
          src="/src/assets/indexImages/discover promotions graphic.png"
          alt=""
          className="w-1/6"
        />
        <span className="w-4/6 px-6 text-lg font-semibold">
          With a range of financing incentives, closing cost assistance,
          included options and upgrades, and more, your new home is closer than
          you think. Terms and conditions apply.
        </span>
        <button className="w-1/6 px-4 py-2 rounded-full font-semibold text-white bg-[#012A5E] hover:bg-[#00213D] transition-all">
          Explore All Promotions
        </button>
      </div>

      {/* Main Content with Slider */}
      <div className="max-w-7xl mx-auto py-10 px-4 flex items-center justify-between mb-40">
        <div className="w-1/3 space-y-4">
          <h2 className="text-3xl font-bold">The Best Places to Call Home</h2>
          <p className="text-lg">
            Explore our portfolio of homes and communities with a wide range of
            options across the United States and Canada
          </p>
          <div className="flex space-x-4">
            <span>
              50+ <br /> Communities
            </span>
            <span>
              40+ <br /> Cities
            </span>
          </div>
          <button className="mt-4 px-12 py-4 text-lg font-semibold rounded-full bg-[#66C5DD] hover:bg-[#8AD3E5] transition-all">
            Where We Build
          </button>
        </div>
        <div className="w-2/3">
          <Slider {...sliderSettings}>
            {sliderImages.map((image, index) => (
              <div key={index} className="relative">
                <img
                  src={image}
                  alt={`Slide ${index + 1}`}
                  className="w-full h-full object-cover rounded-2xl"
                />
                <p className="absolute top-2 left-2 text-white px-2 py-1 rounded">
                  RiverSound Community, Napa, CA
                </p>
              </div>
            ))}
          </Slider>
        </div>
      </div>

      <div className="mx-28 text-center mb-40">
        <h2 className="text-3xl font-bold text-center mb-8">
          The Brookfield Residential Difference
        </h2>
        <div className="flex mb-8">
          <article className="text-center p-10">
            <img
              src="/src/assets/indexImages/buying experience icon.svg"
              alt=""
              className="mx-auto mb-4"
            />
            <h3 className="text-2xl font-semibold mb-4">
              A Better Buying Experience
            </h3>
            <p className="text-lg">
              Experience innovations that put you in control, a trusted team by
              your side, and complete pricing transparency
            </p>
          </article>
          <article className="text-center p-10">
            <img
              src="/src/assets/indexImages/smart home icon.svg"
              alt=""
              className="mx-auto mb-4"
            />
            <h3 className="text-2xl font-semibold mb-4">
              Homes Built for the Future
            </h3>
            <p className="text-lg">
              Energy-saving smart technology, sustainable construction, and
              customizable options to make a home uniquely yours
            </p>
          </article>
          <article className="text-center p-10">
            <img
              src="/src/assets/indexImages/communities icon.svg"
              alt=""
              className="mx-auto mb-4"
            />
            <h3 className="text-2xl font-semibold mb-4">
              Communities Made for Living
            </h3>
            <p className="text-lg">
              Discover unique places to grow, state-of-the-art amenities, and
              thoughtfully chosen, desirable locations
            </p>
          </article>
        </div>
        <button className="mt-4 px-12 py-4 text-lg font-semibold rounded-full bg-[#66C5DD] hover:bg-[#8AD3E5] transition-all">
          Learn More
        </button>
      </div>

      <div className="mx-28 mb-12">
        <h2 className="text-3xl font-bold text-center mb-5">
          Find Us in Top Locations Across North America
        </h2>
        <p className="text-lg font-semibold text-center">
          Choose a Location to Explore Our Communities
        </p>
      </div>
      <div className="max-h-[86vh] overflow-hidden mb-24 bg-[#F8F8F8] relative">
        <img
          src="/src/assets/indexImages/download.svg"
          alt=""
          className="w-[88%] -translate-y-[52%]"
        />
      </div>

      <div className="mx-28 mb-40">
        <h2 className="text-3xl font-bold mb-8">
          From the Blog: Homebuyer Resources
        </h2>
        <div className="flex gap-8 mb-8">
          <figure className="h-fit">
            <img
              src="/src/assets/indexImages/1.jpg"
              alt=""
              className="w-full h-full rounded-lg mb-4"
            />
            <p className="w-fit text-xs px-3 py-2 font-bold rounded-md mb-5 text-white bg-[#012A5E]">
              Homebuyer Resources
            </p>
            <h2 className="text-2xl font-bold">
              How to Read and Understand a Floor Plan
            </h2>
          </figure>
          <figure className="h-fit">
            <img
              src="/src/assets/indexImages/2.jpg"
              alt=""
              className="w-full h-full rounded-lg mb-4"
            />
            <p className="w-fit text-xs px-3 py-2 font-bold rounded-md mb-5 text-white bg-[#012A5E]">
              Homebuyer Resources
            </p>
            <h2 className="text-2xl font-bold">
              Creating a New Home Wish List
            </h2>
          </figure>
          <figure className="h-fit">
            <img
              src="/src/assets/indexImages/3.png"
              alt=""
              className="w-full h-full rounded-lg mb-4"
            />
            <p className="w-fit text-xs px-3 py-2 font-bold rounded-md mb-5 text-white bg-[#012A5E]">
              Homebuyer Resources
            </p>
            <h2 className="text-2xl font-bold">
              Benefits of Living in a Master-Planned Community
            </h2>
          </figure>
        </div>
        <div className="w-full text-center">
          <button className="mx-auto px-7 py-2 text-sm rounded-full font-bold border-2 border-[#012A5E] hover:bg-[#EDF5FA] transition-all">
            Explore All Resources
          </button>
        </div>
      </div>

      <div className="flex mx-16 my-8 mb-24 py-10 px-14 justify-between rounded-2xl bg-[#EAF3FF]">
        <div className="w-[42%] h-full">
          <h2 className="text-2xl font-bold mb-6">From Our Customers</h2>
          <p className="text-lg font-semibold mb-4 pr-6">
            Avid Ratings is an independent, third-party customer experience
            research firm.
          </p>
          <hr className="text-gray-300 my-6" />
          <p className="text-lg font-semibold mb-6">1349 Customer Reviews</p>
          <h2 className="flex text-5xl font-bold mb-7">
            4.5
            <span className="px-3 flex text-[#E0A61B]">
              <PiStarLight />
              <PiStarLight />
              <PiStarLight />
              <PiStarLight />
              <PiStarLight />
            </span>
          </h2>
          <button className="px-12 py-2 rounded-full font-bold border-2 bg-white border-[#012A5E] hover:bg-[#EDF5FA]">
            Read all reviews
          </button>
        </div>
        <div className="w-[55%] px-20 py-14 rounded-lg bg-white">
          <p className="text-lg font-semibold mb-8">
            "From start to finish the entire process of building our home was
            amazing. The entire team was very communicative & helpful along the
            way. We couldn’t have asked for a better experience for buying our
            first home."
          </p>
          <p className="text-md font-semibold">
            Homebuyer in the Barefoot Lakes Community
          </p>
        </div>
      </div>

      <div className="flex mb-8">
        <div className="w-1/2 h-fit my-auto px-28 py-14 bg-[#EAF3FF]">
          <div className="flex mb-12">
            <img
              src="/src/assets/indexImages/Jill_Waash.png"
              alt=""
              className="rounded-full border-2 border-[#E0A61B] z-[1] w-20 h-20"
            />
            <img
              src="/src/assets/indexImages/Reet_NASite_Crop.png"
              alt=""
              className="rounded-full border-2 border-[#E0A61B] -translate-x-5 z-[2] w-20 h-20"
            />
            <img
              src="/src/assets/indexImages/Vince Cuccaruse.jpg"
              alt=""
              className="rounded-full border-2 border-[#E0A61B] -translate-x-10 z-[3] w-20 h-20"
            />
          </div>
          <p className="text-lg font-semibold mb-2">
            Talk with us about finding your dream home
          </p>
          <h1 className="text-5xl font-semibold mb-6">Get in Touch</h1>
          <button className="mt-4 px-12 py-4 text-lg font-semibold rounded-full bg-[#66C5DD] hover:bg-[#8AD3E5] transition-all">
            Contact Us
          </button>
        </div>
        <div className="w-1/2">
          <img
            src="/src/assets/indexImages/Denver Colorado Showhome.jpeg"
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default Home;
