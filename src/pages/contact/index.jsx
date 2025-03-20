import React from "react";
import { useState } from "react";
import { Phone, Mail, MapPin } from "lucide-react";
import { designCenters, officeLocations } from "./data/data";
import ContactModel from "./contactModel";
const Contact = () => {
  const [activeTab, setActiveTab] = useState("corporate");
  const [showModal, setShowModal] = useState(false);

  const [Customer, setCustomer] = useState(false);
  console.log(Customer);

  const showmodel = () => {
    setShowModal(true);
    setCustomer(false);
  };
  const showComunity = () => {
    setShowModal(true);
    setCustomer((prev) => !prev);
  };
  return (
    <div>
      {/* image */}
      <div className="w-full h-[50vh] ">
        <img
          src="https://cdn.brookfieldresidential.net/-/media/brp/global/modules/home-page-hero/home-page-hero-addison-community-exterior-1920x1280.jpg?rev=3ee24fa804734b1c97adc86ac8965b67"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>
      {/* content */}
      <div className="bg-white py-16 px-6 md:px-20">
        <h2 className="text-5xl font-bold text-center text-gray-900">
          Contact Us
        </h2>
        <p className="text-center text-gray-800 mt-3">
          We’d love to hear from you. Here’s how you can get in touch.
        </p>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto ">
          {/* Shopping for a New Home */}
          <div className="flex flex-col items-center text-center border-r border-gray-400 ">
            <div className="bg-blue-100 p-4 rounded-full ">
              <img
                src="images/location.png"
                alt="Location Icon"
                className="w-12 h-12"
              />
            </div>
            <h3 className="text-xl font-semibold mt-4 text-gray-900">
              Shopping for a new home
            </h3>
            <p className="text-gray-600 mt-2">
              Talk to us about finding the new home of your dreams.
            </p>
            <button
              onClick={showComunity}
              className="mt-4 px-10 cursor-pointer py-4 bg-blue-600 text-white text-xl rounded-full hover:bg-blue-500 transition"
            >
              Contact Our Team
            </button>
          </div>

          {/* Support with Your Home */}
          <div className="flex flex-col items-center text-center">
            <div className="bg-blue-100 p-4 rounded-full">
              <img
                src="images/chat.png"
                alt="Chat Icon"
                className="w-12 h-12"
              />
            </div>
            <h3 className="text-xl font-semibold mt-4 text-gray-900">
              Support with your home
            </h3>
            <p className="text-gray-600 mt-2">
              We're here to help with your existing Brookfield Home.
            </p>
            <button
              onClick={showmodel}
              className="mt-4 px-8 py-4 cursor-pointer bg-blue-600 text-white text-xl rounded-full hover:bg-blue-500 transition"
            >
              Contact Customer Care
            </button>
          </div>
        </div>
      </div>
      {/* banner */}
      <div className="bg-blue-900 text-white py-24 px-6 md:px-20">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Careers */}
          <div>
            <h3 className="text-xl font-semibold">Careers</h3>
            <p className="text-gray-300 mt-2">
              We're always looking for passionate, driven, difference makers.
            </p>
            <div className="mt-3">
              <a
                href="#"
                className="text-white hover:underline inline-flex items-center"
              >
                Learn More <span className="ml-1">➝</span>
              </a>
            </div>
            <div className="mt-1">
              <a
                href="#"
                className="text-white hover:underline inline-flex items-center"
              >
                Send us a Message <span className="ml-1">➝</span>
              </a>
            </div>
          </div>

          {/* Investors & Media */}
          <div>
            <h3 className="text-xl font-semibold">Investors & media</h3>
            <p className="text-gray-300 mt-2">
              We're a leading land developer and homebuilder in North America.
            </p>
            <div className="mt-3">
              <a
                href="#"
                className="text-white hover:underline inline-flex items-center"
              >
                Learn More <span className="ml-1">➝</span>
              </a>
            </div>
          </div>

          {/* General Inquiries */}
          <div>
            <h3 className="text-xl font-semibold">General Inquiries</h3>
            <p className="text-gray-300 mt-2">
              Share your comments or questions with our service team.
            </p>
            <div className="mt-3">
              <a
                href="#"
                className="text-white hover:underline inline-flex items-center"
              >
                Send us a Message <span className="ml-1">➝</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* toggler */}
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="border-b border-gray-200 w-full max-w-2xl flex justify-center">
            <button
              className={`px-8 py-4 text-lg font-medium relative cursor-pointer ${
                activeTab === "corporate"
                  ? "text-amber-500"
                  : "text-gray-700 hover:text-amber-400"
              }`}
              onClick={() => setActiveTab("corporate")}
            >
              Corporate Offices
              {activeTab === "corporate" && (
                <div className="absolute bottom-0 left-0 w-full h-1 bg-amber-500"></div>
              )}
            </button>
            <button
              className={`px-8 py-4 text-lg font-medium relative cursor-pointer ${
                activeTab === "design"
                  ? "text-amber-500"
                  : "text-gray-700 hover:text-amber-400"
              }`}
              onClick={() => setActiveTab("design")}
            >
              Design Centers
              {activeTab === "design" && (
                <div className="absolute bottom-0 left-0 w-full h-1 bg-amber-500"></div>
              )}
            </button>
          </div>
        </div>

        {/* Office Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {activeTab === "corporate" &&
            officeLocations.map((office, index) => (
              <div key={index} className="mb-10">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {office.name}
                </h3>
                <div className="flex items-start space-x-2 mb-1">
                  <MapPin className="h-5 w-5 text-gray-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-gray-700">{office.address}</p>
                    <p className="text-gray-700">{office.city}</p>
                    {office.city2 && (
                      <p className="text-gray-700">{office.city2}</p>
                    )}
                  </div>
                </div>
                {office.phone && (
                  <div className="flex items-center space-x-2 mb-1">
                    <Phone className="h-5 w-5 text-gray-500" />
                    <p className="text-gray-700">{office.phone}</p>
                  </div>
                )}
                <div className="flex items-center space-x-2">
                  <Mail className="h-5 w-5 text-blue-500" />
                  <a
                    href="#"
                    className="text-blue-500 hover:underline font-bold"
                  >
                    {office.email}
                  </a>
                </div>
              </div>
            ))}

          {activeTab === "design" &&
            designCenters.map((center, index) => (
              <div key={index} className="mb-10">
                {/* Design center content would go here */}
                <p>Design center information</p>
              </div>
            ))}

          {activeTab === "design" && designCenters.length === 0 && (
            <div className="col-span-full text-center py-10">
              <p className="text-gray-500">
                No design centers available at this time.
              </p>
            </div>
          )}
        </div>
      </div>
      <ContactModel
        showModal={showModal}
        setShowModal={setShowModal}
        Customer={Customer}
      />
    </div>
  );
};

export default Contact;
