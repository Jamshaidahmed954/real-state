import React from "react";
import { content, people } from "./data";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";

const AboutSection = () => {
  return (
    <div>
      {/* Content Section  */}
      <div className="text-center py-12 px-10 mx-auto md:w-[90%] ">
        <h2 className="text-4xl font-bold text-blue-950 mb-4">
          Get to Know Us
        </h2>
        <p className="text-gray-700 text-lg">
          Brookfield Residential is a leading North American new home builder
          and land developer with one goal in mind - to create the best places
          to call home. From the development of award-winning master-planned
          communities, to the design and construction of premier homes and
          commercial properties, we are committed to cultivating an exceptional
          life experience for our customers.
        </p>
      </div>
      <div className="bg-white py-12 px-6 md:px-16 flex flex-col-reverse md:flex-row items-center gap-8 md:w-[90%] mx-auto ">
        <div className="md:w-1/2">
          <h2 className="text-2xl md:text-4xl font-bold text-blue-950">
            OUR MOTIVATION
          </h2>
          <p className="text-lg text-gray-800 font-semibold mt-4">
            Creating the best places to call home goes beyond the high-quality
            homes we build and sell to customers.
          </p>
          <p className="text-gray-700 mt-4">
            To us, it’s also about developing sustainable communities that truly
            make a difference in people’s lives, no matter what stage of life
            they are in. Together, we build special places where people live
            their best lives, connect with neighbors, and take advantage of all
            the amenities outside their front door.
          </p>
        </div>
        <div className="md:w-1/2">
          <video className="w-full rounded-lg shadow-lg " controls>
            <source
              src="blob:https://players.brightcove.net/f2c758d2-0f62-4810-b43f-75d9671dae1c"
              type="video/mp4"
              className="w-full h-full"
            />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
      <div className="flex flex-col items-center w-full  lg:py-14 px-2">
        {content.map((section, index) => (
          <div
            key={index}
            className="flex flex-col lg:flex-row items-center md:w-[80%] mb-12 lg:gap-20"
          >
            <img
              src={section.image}
              alt={section.alt}
              className="lg:w-64 lg:h-64  object-cover mb-4 md:mb-0 md:mr-6 lg:rounded-full"
            />
            <div>
              <h2 className="lg:text-4xl text-2xl font-bold text-blue-950">
                {section.title}
              </h2>
              <p className="text-gray-700 mt-2">{section.text}</p>
            </div>
          </div>
        ))}
      </div>
      our people
      <div className="bg-[#012451] text-white py-12 lg:px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">Our People</h2>
        <p className="max-w-2xl mx-auto mb-10 px-2">
          At Brookfield Residential we live and breathe our core values -
          passion, integrity and community, and nowhere is this more obvious
          than within our corporate family.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 w-[90%] mx-auto">
          {people.map((person, index) => (
            <div
              key={index}
              className="bg-[#011c3f] p-6 rounded-xl shadow-lg flex flex-col justify-between gap-16"
            >
              <p className="italic mb-4">"{person.quote}"</p>
              <div className="flex items-start justify-center text-center gap-4 md:flex-row-reverse flex-col-reverse  ">
                <div className="flex items-center justify-center text-center gap-4 md:flex-row-reverse flex-col-reverse ">
                  <img
                    src={person.image}
                    alt={person.name}
                    className="w-20 h-20 rounded-full border-2 border-white"
                  />
                  <div>
                    <h3 className="font-bold">{person.name}</h3>
                    <p className="text-sm text-gray-300">{person.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      customers
      <div className="bg-white  lg:px-6 w-full pt-32 relative z-0">
        <div className="lg:w-[90%] w-full h-full mx-auto flex flex-col md:flex-row items-center gap-6 bg-blue-50 lg:px-10 py-8 ">
          <div className=" p-6 rounded-lg flex-1 flex flex-col gap-10 w-full ">
            <h2 className="text-2xl lg:text-4xl font-bold text-gray-900 ">
              From Our Customers
            </h2>
            <p className="text-gray-600 mt-2">
              Avid Ratings is an independent, third-party customer experience
              research firm.
            </p>
            <div className="mt-4 flex items-center">
              <div>
                <span className="ml-2 text-gray-600">
                  1346 Customer Reviews
                </span>
                <div className="flex items-center gap-2 mt-2">
                  <span className="text-4xl font-bold text-gray-900">4.5</span>

                  <div className="flex ml-2 text-yellow-500">
                    <FaStar size={50} /> <FaStar size={50} />{" "}
                    <FaStar size={50} /> <FaStar size={50} />{" "}
                    <FaStarHalfAlt size={50} />
                  </div>
                </div>
              </div>
            </div>
            <button className="mt-4 px-4 py-2 lg:w-1/3 w-1/2   rounded-full font-bold cursor-pointer border border-gray-700 text-gray-900  flex items-center gap-2 hover:bg-gray-100 transition">
              Read all reviews
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7"
                ></path>
              </svg>
            </button>
          </div>
          <div className="bg p-6 bg-white flex-1 h-5/6 py-16 rounded-lg">
            <p className="text-gray-900 text-lg font-medium">
              "From start to finish the entire process of building our home was
              amazing. The entire team was very communicative & helpful along
              the way. We couldn’t have asked for a better experience for buying
              our first home."
            </p>
            <p className="mt-2 text-gray-700 font-semibold">
              Homebuyer in the Barefoot Lakes Community
            </p>
          </div>
        </div>
        <div className="absolute -top-8 lg:left-16  flex justify-center opacity-30 w-[200px] z-50">
          <img
            src="	https://curelogics.org/wp-content/uploads/2024/08/icon-park-outline_quote.png"
            alt=""
            className="w-96"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
