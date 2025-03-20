import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import DropDown from "../../../component/dropdown";

export default function Home({ showModal, setShowModal, Customer }) {
  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showModal]);

  return (
    <div className="ld:min-h-screen bg-gray-100">
      {/* Modal */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white rounded-lg h-[80vh] overflow-y-auto w-5/6 shadow-lg"
              initial={{ scale: 0.8, y: -20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.8, y: -20 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <div className="flex flex-col md:flex-row h-full">
                {/* Left Side */}
                <div className="md:w-1/2 relative">
                  <img
                    src="https://cdn.brookfieldresidential.net/-/media/brp/global/forms/contact-us-main-image.jpg?rev=07e0c859be184dbdb6ff09262a53c627"
                    alt="Family having dinner"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-[#002a5c] text-white p-8 hidden lg:block">
                    <h2 className="text-3xl font-bold mb-4">
                      The best places to call home are inspired, designed, and
                      made for you.
                    </h2>
                  </div>
                </div>

                {/* Right Side */}
                <div className="md:w-1/2 p-8">
                  <div className="flex justify-end">
                    <button
                      onClick={() => setShowModal(false)}
                      className="rounded-full border border-gray-300 p-2 cursor-pointer"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </div>

                  <div className="mt-6">
                    <p className="text-gray-600 mb-2">
                      Talk to us about finding the home of your dreams
                    </p>
                    <h1 className="text-4xl font-bold text-[#002a5c] mb-8">
                      Contact Our Team
                    </h1>

                    <div className="space-y-6">
                      <div>
                        <label className="block font-bold mb-2">Region</label>
                        <div className="relative">
                          <DropDown
                            label="Region"
                            option={["Select your Region"]}
                          />
                        </div>
                      </div>

                      <div className={` ${Customer ? "block" : "hidden"}`}>
                        <DropDown
                          label="Region"
                          option={["Select your Region"]}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
