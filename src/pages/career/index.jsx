import React, { useState } from "react";
import Footer from "../../component/footer";
import { Link } from "react-router-dom";

const Career = () => {
  const path = window.location.pathname;

  const [hoveredIndex, setHoveredIndex] = useState(null);

  const sections = [
    {
      title: "Why Brookfield",
      subtitle: "LEARN WHY NOW",
      image:
        "https://cdn.brookfieldresidential.net/-/media/brp/global/modules/column-gallery/corporate/careers/2016-about_careers_landing_block1-brookfieldresidentialproperties.jpg?rev=8a53fe5944a04feba2ecf63704383e69",
    },
    {
      title: "Join Us",
      subtitle: "Find your place at Today",
      image:
        "https://cdn.brookfieldresidential.net/-/media/brp/global/modules/column-gallery/corporate/careers/2016-about_careers_landing_block4-brookfieldresidentialproperties.jpg?rev=25bf5ebaafd14ab1a961d56dbc65f1ab",
    },
    {
      title: "Life at Brookfield",
      subtitle: "See whats it like to work here",
      image:
        "https://cdn.brookfieldresidential.net/-/media/brp/global/modules/column-gallery/corporate/careers/2016-about_careers_landing_block2-brookfieldresidentialproperties.jpg?rev=5ad533f0d6694815bc3553df110a7418",
    },
    {
      title: "Total Compensation",
      subtitle: "Learn about our benefits",
      image:
        "https://cdn.brookfieldresidential.net/-/media/brp/global/modules/column-gallery/corporate/careers/total-compensation.jpg?rev=aefd6fbc775e4035a32a4096826f4623",
    },
    {
      title: "Interview Prep",
      subtitle: "Tool and Tips For Success",
      image:
        "https://cdn.brookfieldresidential.net/-/media/brp/global/modules/column-gallery/corporate/careers/2018-about_careers_landing_interview_prep-brookfieldresidentialproperties-849x556.jpg?rev=30650ba58877463da151a74a9ff27f9f",
    },
    {
      title: "Our History",
      subtitle: "Creating the best places to call home",
      image:
        "https://cdn.brookfieldresidential.net/-/media/brp/global/modules/column-gallery/corporate/careers/2018-about_careers_landing_about_our_history-brookfieldresidentialproperties-849x556.jpg?rev=4bcebe37ec3f4dd9855b09c72dcf65f0",
    },
  ];
  return (
    <>
      <div className="w-full ">
        {/* image */}
        <div>
          <img
            src="https://cdn.brookfieldresidential.net/-/media/brp/global/modules/about-hero/230223-brookfield-culture-photos-2400x1000-new.jpg?rev=3d1b14d685ac409fbb9eeca8b51be841"
            alt=""
            className="w-full h-[88vh] object-cover"
          />
        </div>
        {/* content */}
        <div className="text-center py-10 w-full lg:w-1/2 mx-auto flex flex-col justify-center items-center gap-4">
          <h1 className="text-xl lg:text-5xl font-bold text-blue-950">
            Careers at Brookfield Residential
          </h1>
          <p className="text-sm lg:text-lg lg:px-8 text-blue-900">
            Great companies, like great communities, don’t happen by chance. It
            takes time, dedication, vision, and above all, it takes a strong
            team. At Brookfield Residential, we’re always looking for people who
            are passionate, driven, looking to grow and who want to make a
            difference close to home. Sound like you?
          </p>
          <a className="border-b-2 font-bold text-blue-800" href="">
            join our team!
          </a>
        </div>
        {/* cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-6 lg:w-[85%] mx-auto">
          {sections.map((section, index) => (
            <Link
              to="/career/why-brookfield"
              key={index}
              className="relative group h-96 bg-cover bg-center  overflow-hidden cursor-pointer"
              style={{ backgroundImage: `url(${section.image})` }}
            >
              {/* Dark overlay */}
              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-60 transition-opacity duration-300"></div>

              {/* Text content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-4">
                <h2 className="text-2xl font-bold z-10">{section.title}</h2>
                <p className="opacity-0 group-hover:opacity-100 mt-2 text-sm transition-opacity duration-300 z-10 uppercase">
                  {section.subtitle}
                </p>
              </div>
            </Link>
          ))}
        </div>
        {/* tetimonials */}
        <div className="bg-[#012451] text-white py-16 px-6 text-center text-sm">
          <h2 className="text-4xl font-bold">Our People</h2>
          <p className="w-full mx-auto mt-4 text-sm">
            At Brookfield Residential we live and breathe our core values –
            passion, integrity, and community. Nowhere is this more obvious than
            within our corporate family. Being part of our team comes with
            boundless benefits and opportunities. Come take a look and find your
            place with us.
          </p>

          {/* Testimonial Box */}
          <div className="bg-[#011c3f] rounded-lg p-8 mt-10 mx-auto  items-center relative w-3/4 space-y-8 ">
            <div className=" text-center md:text-left">
              <p className="text-lg italic ">
                “I am so proud to work with a team that holds Passion,
                Integrity, and Community up as the core values we act upon each
                day.”
              </p>
            </div>

            {/* Profile Image */}
            <div className="flex items-start lg:items-center lg:justify-between justify-center flex-col lg:flex-row">
              <div className="">
                <h3 className="mt-4 text-lg font-bold">Alison Girard</h3>
                <p className="text-sm text-gray-300">
                  Southern California, U.S.
                </p>
              </div>
              <div>
                <img
                  src="https://cdn.brookfieldresidential.net/-/media/brp/global/modules/generic-profile/alison_girard_profile_sq124x124.jpg?rev=13ec91187634453081f7b3a9d84a05dd"
                  alt="Alison Girard"
                  className="w-20 h-20 rounded-full border-4 border-white"
                />
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Career;
