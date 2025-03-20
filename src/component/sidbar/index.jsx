import React from "react";
import { X } from "lucide-react";
import { Link } from "react-router-dom";

export default function Sidebar({ isOpen, setIsOpen }) {
  const companyLinks = [
    { name: "About", path: "/about" },
    { name: "Careers", path: "/career" },
    { name: "Contact", path: "/contact" },
    { name: "Investors", path: "about/financial" },
  ];

  const blogLinks = [
    { name: "Life and Style", path: "about/blogs" },
    { name: "Home Buyer Resources", path: "about/blogs" },
    { name: "All Topics", path: "about/blogs" },
  ];

  return (
    <>
      {/* Sidebar Overlay */}
      <div
        className={`fixed inset-0 bg-blue-950 opacity-10 transition-opacity ${
          isOpen ? "opacity-60 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setIsOpen(false)}
      ></div>

      {/* Sidebar */}
      <div
        className={`fixed right-0 top-0 h-full bg-white shadow-lg transform transition-transform duration-700 ease-in-out 
          ${isOpen ? "translate-x-0" : "translate-x-full"} 
          w-full md:w-96 lg:w-[600px] sm:w-full`} // Responsive width: full screen on small devices
      >
        <div
          onClick={() => setIsOpen(false)}
          className="p-4 flex justify-between items-center border-b"
        >
          <h2 className="text-lg font-semibold text-gray-800">
            Brookfield Residential
          </h2>
          <button onClick={() => setIsOpen(false)}>
            <X className="w-6 h-6 text-gray-700 cursor-pointer" />
          </button>
        </div>

        {/* Sidebar Content */}
        <div className="p-4 overflow-y-auto h-full flex flex-col gap-6">
          <h3 className="text-xl font-bold mb-4 text-gray-800">
            The Future of Home
          </h3>
          <div className="flex space-y-6">
            <div className="mb-6 flex flex-col gap-4">
              <div className="text-lg font-semibold text-gray-800">
                <img
                  src="https://cdn.brookfieldresidential.net/-/media/brp/empower/empower-logo/empower/empower.svg?rev=5a1e3e43918d48459dbe58833e52c5d9"
                  alt=""
                />
              </div>
              <p className="text-sm text-gray-600">
                From smart technology to sustainable living - discover the
                future of home.
              </p>
            </div>
            <div className="mb-6 flex flex-col gap-4">
              <div className="text-lg font-semibold text-gray-800">
                <img
                  src="https://cdn.brookfieldresidential.net/-/media/brp/mytime/mytime_logo/myvision/mytime/mytime.svg?rev=a25ae4e8fd0942208ce12980436a47a6"
                  alt=""
                />
              </div>
              <p className="text-sm text-gray-600">
                Tour available and model homes on your own - even before or
                after hours.
              </p>
            </div>
          </div>

          {/* Additional Sections */}
          <div className="grid grid-cols-2 gap-4 mt-6">
            <div>
              <h3 className="text-lg font-semibold mb-2 text-gray-800">
                Company
              </h3>
              <ul className="space-y-2">
                {companyLinks.map((link) => (
                  <li key={link.path}>
                    <Link
                      onClick={() => setIsOpen(false)}
                      to={link.path}
                      className="text-blue-600 hover:underline cursor-pointer"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2 mt-6 text-gray-800">
                News & Blog
              </h3>
              <ul className="space-y-2">
                {blogLinks.map((link) => (
                  <li key={link.path}>
                    <Link
                      onClick={() => setIsOpen(false)}
                      to={link.path}
                      className="text-blue-600 hover:underline"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
