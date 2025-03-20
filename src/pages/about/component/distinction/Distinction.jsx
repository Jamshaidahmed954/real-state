import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

const sections = [
  {
    name: "Empower",
    title: "The future of home",
    description:
      "Forward-thinking innovation is here—putting complete control of the new home experience in your hands. From on-demand home tours and energy-saving tools to controlling your home with the sound of your voice, Empower by Brookfield Residential is driven by today's cutting-edge technology—giving you every new possibility of home..",
    image:
      "https://cdn.brookfieldresidential.net/-/media/brp/global/modules/flex-listing/about-distinction/distinction-empower.jpg?rev=303a2e34d8824f7dbeb6347e6b5ecada",
    reverse: false,
    btn: "Learn More",
  },
  {
    name: "Sustainability",
    title: "We are committed",
    description:
      "Sustainable growth is intrinsically tied to our core values of passion, integrity and community, which is ultimately about doing the right thing. Whether it's pursuing home design and construction, or creating mixed-use communities where people can live, work and play, we are committed to creating sustainable, earth-friendly communities.",
    image:
      "https://cdn.brookfieldresidential.net/-/media/brp/global/modules/flex-listing/about-distinction/distinction-sustainability-02.jpg?rev=9ef44afa103148938ae63c47f0506aaa",
    reverse: true,
  },
  {
    name: "Passive House",
    title: "New level of energy-efficiency",
    description:
      "Brookfield Residential’s Passive House at Midtown was designed under the simple philosophy: a properly built home saves money, energy, water, land and even that most precious resource, time. Passive homes are designed to be highly energy-efficient, with insulated windows; extra insulation in the walls, floor and attic; and weather-resistant barriers throughout the building to prevent warmed or cooled air from leaking out.",
    image:
      "https://cdn.brookfieldresidential.net/-/media/brp/global/modules/flex-listing/about_distinction_sustainability_hotspot_carousel2.jpg?rev=6948284eae63458b8088c5db2ad7df0a",
    reverse: false,
  },
];

const images = [
  {
    image:
      "https://cdn.brookfieldresidential.net/-/media/brp/residence/hero-slider/corporate/about_distinction_openspace_carousel1.jpg?rev=d7a1768fbc3d4d3ca367b058b34c42b1",
  },
  {
    image:
      "https://cdn.brookfieldresidential.net/-/media/brp/residence/hero-slider/corporate/about_distinction_openspace_carousel2.jpg",
  },
  {
    image:
      "https://cdn.brookfieldresidential.net/-/media/brp/residence/hero-slider/corporate/about_distinction_openspace_carousel3.jpg",
  },
];

const Distinction = () => {
  return (
    <div>
      {/* Header */}
      <div className="flex flex-col gap-4 p-4 justify-center items-center w-full lg:w-3/4 mx-auto py-16">
        <h1 className="text-4xl font-bold">Distinction</h1>
        <p className="text-center">
          Brookfield Residential invests in markets for the longer term,
          building new communities and homes where people want to live today and
          in the future. Our developments are places of character and value. We
          create a plan for each one – a blueprint that guides the land
          development process from start to finish, resulting in a community
          with attributes that make it unique - attributes that make our
          communities the best places to call home.
        </p>
      </div>

      {/* Dynamic Sections */}
      <div className="w-full lg:w-5/6 mx-auto px-4">
        {sections.map((section, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row lg:gap-20 gap-4 mb-16 justify-center items-center ${
              section.reverse ? "md:flex-row-reverse" : ""
            }`}
          >
            <div className="md:w-1/2">
              <img
                src={section.image}
                alt={section.title}
                className="w-full h-auto"
              />
            </div>
            <div className="md:w-1/2 space-y-2">
              <h5>{section.name}</h5>
              <h2 className="text-2xl md:text-3xl font-bold text-[#0a3b6c] mb-4">
                {section.title}
              </h2>
              <p className="mb-3">{section.description}</p>
              {section.btn && (
                <button className="px-4 py-2 rounded-full border cursor-pointer">
                  {section.btn}
                </button>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Image Slider */}
      <div className="w-full lg:w-5/6 mx-auto px-4 py-16">
        <div className="flex flex-col gap-4 justify-center items-center">
          <h1 className="text-4xl font-bold">Open Space Comes Naturally</h1>
          <p className="text-center">
            Over 70% of the original community design for Playa Vista in Los
            Angeles has been set aside as permanent open space. Seeing local
            wildlife and native plant life thrive in the restored Ballona
            Freshwater Marsh and Riparian Corridor is something rarely found in
            a major city. All just friendly reminders of Brookfield
            Residential's commitment to the environment.
          </p>
        </div>
        <div className="py-8">
          <Swiper
            navigation={true}
            modules={[Navigation]}
            className="h-[400px]"
          >
            {images.map((image, index) => (
              <SwiperSlide key={index}>
                <img
                  src={image.image}
                  alt=""
                  className="w-[90%] h-full object-cover mx-auto"
                />
              </SwiperSlide>
            ))}
          </Swiper>
          <div>
            <button onClick={() => Swiper}>next</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Distinction;
