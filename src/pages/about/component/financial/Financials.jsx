import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { MdOutlineFileDownload } from "react-icons/md";
import releaseData from "./data/data";

const Financils = () => {
  const [isAnnualOpen, setIsAnnualOpen] = useState(false);
  const [isOtherDocsOpen, setIsOtherDocsOpen] = useState(false);
  const [isBondholderOpen, setIsBondholderOpen] = useState(false);
  const [isGovernanceOpen, setIsGovernanceOpen] = useState(false);
  const [visibleBlogs, setVisibleBlogs] = useState(4); // Initially show 3 items

  const handleViewMore = () => {
    setVisibleBlogs((prev) => prev + 4); // Load 3 more on each click
  };

  return (
    <div className="lg:mt-28">
      <div className="flex flex-col md:flex-row lg:gap-20 gap-4 mb-16 justify-center items-center w-full lg:w-[80%] mx-auto px-4 py-8">
        <div className="md:w-1/2">
          <img
            src="https://cdn.brookfieldresidential.net/-/media/brp/global/modules/about-spotlight/rosedale.jpg?rev=39a6b45e35fd418ab2ed6f43e4459020"
            alt="Brookfield team members in blue shirts standing in front of a 'Missing Tree' sign"
            className="w-full h-auto"
          />
        </div>
        <div className="md:w-1/2">
          <p className="mb-3">
            Brookfield Residential Properties ULC is a leading land developer
            and homebuilder in North America. We entitle and develop land to
            create master-planned communities, build and sell lots to
            third-party builders, and conduct our own homebuilding operations.
            We also participate in select, strategic real estate opportunities,
            including infill projects, mixed-use developments, and joint
            ventures. We are the flagship North American residential property
            company of Brookfield Corporation (NYSE: BN; TSX: BN), a global
            alternative asset manager. Further information is available at
            Brookfield.com
          </p>
          <div className="flex flex-col gap-4">
            <div className=" ">
              <p className="font-bold">Investor Relations Inquiries</p>
              <p>Tel: 855.234.8362</p>
              <p>Email: investor.relations@brookfieldrp.com</p>
            </div>
            <div>
              <p className="font-bold">Media Relations Inquiries</p>
              <p>Tel: 403.796.3813</p>
              <p>Email: media@brookfieldrp.com</p>
            </div>
          </div>
        </div>
      </div>
      <div className="p-6 lg:w-[80%] mx-auto w-full lg:mt-16">
        <h1 className="text-5xl font-bold text-blue-900 mb-6 text-center transition-colors duration-300">
          Financials & Disclosures
        </h1>

        {/* Annual & Quarterly Report Section */}
        <div className="mb-4">
          <div
            className="flex justify-between items-center bg-white p-4 cursor-pointer hover:bg-gray-50 transition-colors duration-200"
            onClick={() => setIsAnnualOpen(!isAnnualOpen)}
          >
            <h2 className="text-xl font-semibold text-blue-950">
              Annual & Quarterly Report
            </h2>
            <span
              className={`transition-transform duration-300 ${
                isAnnualOpen ? "rotate-180" : "rotate-0"
              }`}
            >
              <FaChevronDown className="text-gray-600" />
            </span>
          </div>
          <div
            className={`bg-white border-t border-gray-200 overflow-hidden transition-all duration-300 ease-in-out ${
              isAnnualOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <div className="p-4">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="py-2 text-lg">Report Date</th>
                    <th className="py-2 text-lg">Q1</th>
                    <th className="py-2 text-lg">Q2</th>
                    <th className="py-2 text-lg">Q3</th>
                    <th className="py-2 text-lg">Annual</th>
                  </tr>
                </thead>
                <tbody>
                  {[2024, 2023, 2022, 2021, 2020].map((year, index) => (
                    <tr
                      key={year}
                      className={`border-b border-gray-200 px-8 hover:bg-gray-50 transition-colors duration-200 ${
                        index % 2 === 0 ? "bg-blue-100/20" : ""
                      }`}
                    >
                      <td className="py-2 text-lg">{year}</td>
                      {[1, 2, 3, 4].map((q) => (
                        <td key={q} className="py-2">
                          <a
                            href="#"
                            className="text-blue-600 hover:underline flex items-center gap-2 text-lg transition-all duration-200 hover:text-blue-800 group"
                          >
                            PDF
                            <MdOutlineFileDownload className="transition-transform duration-200 group-hover:scale-110" />
                          </a>
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Other Documents Section */}
        <div className="mb-4">
          <div className="flex justify-between items-center bg-white p-4">
            <h2 className="text-4xl font-semibold text-gray-600  transition-colors duration-300 hover:text-gray-600">
              Other Documents
            </h2>
          </div>
          <div className="bg-white p-4 border-t border-gray-200">
            <div
              className="flex justify-between items-center cursor-pointer hover:bg-gray-50 transition-colors duration-200"
              onClick={() => setIsOtherDocsOpen(!isOtherDocsOpen)}
            >
              <h3 className="text-xl font-semibold text-blue-950">
                Quarterly Corporate Profile
              </h3>
              <span
                className={`transition-transform duration-300 ${
                  isOtherDocsOpen ? "rotate-180" : "rotate-0"
                }`}
              >
                <FaChevronDown className="text-gray-600" />
              </span>
            </div>
            <div
              className={`transition-all duration-300 ease-in-out overflow-hidden ${
                isOtherDocsOpen ? "max-h-32 opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <div className="pt-2 flex justify-between items-center">
                <p className="text-lg">Q4 2024</p>
                <a
                  href="#"
                  className="text-blue-600 hover:underline flex items-center gap-2 text-lg transition-all duration-200 hover:text-blue-800 group"
                >
                  PDF
                  <MdOutlineFileDownload className="transition-transform duration-200 group-hover:scale-110" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bondholder Information & Notices Section */}
        <div className="mb-4">
          <div
            className="flex justify-between items-center bg-white p-4 cursor-pointer hover:bg-gray-50 transition-colors duration-200"
            onClick={() => setIsBondholderOpen(!isBondholderOpen)}
          >
            <h2 className="text-xl font-semibold text-blue-950">
              Bondholder Information & Notices
            </h2>
            <span
              className={`transition-transform duration-300 ${
                isBondholderOpen ? "rotate-180" : "rotate-0"
              }`}
            >
              <FaChevronDown className="text-gray-600" />
            </span>
          </div>
          <div
            className={`bg-white border-t border-gray-200 overflow-hidden transition-all duration-300 ease-in-out ${
              isBondholderOpen
                ? "max-h-screen opacity-100"
                : "max-h-0 opacity-0"
            }`}
          >
            <div className="p-4 space-y-2">
              {[
                "Brookfield Residential US Corporation Form 8837",
                "Preliminary Unaudited Summary Results for the Quarter Ended December 31, 2019",
                "Brookfield 2022 Year End Update",
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center hover:bg-gray-50 transition-colors duration-200 p-2 rounded"
                >
                  <p className="text-lg">{item}</p>
                  <a
                    href="#"
                    className="text-blue-600 hover:underline flex items-center gap-2 text-lg transition-all duration-200 hover:text-blue-800 group"
                  >
                    PDF
                    <MdOutlineFileDownload className="transition-transform duration-200 group-hover:scale-110" />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Governance Section */}
        <div className="mb-4">
          <div
            className="flex justify-between items-center bg-white p-4 cursor-pointer hover:bg-gray-50 transition-colors duration-200"
            onClick={() => setIsGovernanceOpen(!isGovernanceOpen)}
          >
            <h2 className="text-xl font-semibold text-gray-800">Governance</h2>
            <span
              className={`transition-transform duration-300 ${
                isGovernanceOpen ? "rotate-180" : "rotate-0"
              }`}
            >
              <FaChevronDown className="text-gray-600" />
            </span>
          </div>
          <div
            className={`bg-white border-t border-gray-200 overflow-hidden transition-all duration-300 ease-in-out ${
              isGovernanceOpen ? "max-h-32 opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <div className="p-4">
              <div className="flex justify-between items-center">
                <p className="text-lg">
                  Brookfield Residential Anti-Forced Labour Report 2024
                </p>
                <a
                  href="#"
                  className="text-blue-600 hover:underline flex items-center gap-2 text-lg transition-all duration-200 hover:text-blue-800 group"
                >
                  PDF
                  <MdOutlineFileDownload className="transition-transform duration-200 group-hover:scale-110" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-6xl mx-auto px-4 py-10">
        <h1 className="text-center text-6xl py-6">Press Release</h1>
        <div className="grid md:grid-cols-2 gap-8 ">
          {releaseData.slice(0, visibleBlogs).map((blog) => (
            <div>
              <div className="bg-white  h-72 border border-gray-300 flex flex-col justify-center gap-4 p-16 py-16">
                <p className=" text-blue-900 ">{blog.Date}</p>
                <a href="">
                  <h4 className="text-xl font-semibold ">{blog.title}</h4>
                  <p className="text-gray-600">{blog.description}</p>
                </a>
              </div>
            </div>
          ))}
        </div>
        {visibleBlogs < releaseData.length && (
          <div className="flex justify-center mt-10">
            <button
              className=" text-black px-6 py-2 border rounded-full hover:bg-gray-800 hover:text-white transition-colors duration-200 cursor-pointer"
              onClick={handleViewMore}
            >
              View More
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Financils;
