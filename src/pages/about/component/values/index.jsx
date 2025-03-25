import React from "react";

const Values = () => {
  const sections = [
    {
      name: "PASSION",
      title: "It’s our culture",
      description:
        "Forward-thinking innovation is here—putting complete control of the new home experience in your hands. From on-demand home tours and energy-saving tools to controlling your home with the sound of your voice, Empower by Brookfield Residential is driven by today's cutting-edge technology—giving you every new possibility of home.",
      image:
        "https://cdn.brookfieldresidential.net/-/media/brp/global/modules/flex-listing/about-landing/about_landing_ourhomes.jpg?rev=a2dd1854971c4daf91756ea1b0100543",
      reverse: false,
    },
    {
      name: "INTEGRITY",
      title: "It’s what we stand for",
      description:
        "We believe success comes from doing the right thing by our customers, partners, employees and communities. We’re honest, respectful and transparent with our stakeholders. We’re committed to operating ethically and to making a positive impact wherever we do business.",
      image:
        "https://cdn.brookfieldresidential.net/-/media/brp/global/modules/flex-listing/about-value/about_ourvalues_integrity.jpg?rev=f6171626c0964b07ab106fa4475a4fa6",
      reverse: true,
    },
    {
      name: "COMMUNITY",
      title: "It’s what defines us",
      description:
        "Though creating communities is the core of our work and the essence of our corporate culture, our commitment to community extends beyond that. We care deeply about the areas in which we work and believe in giving back in any way we can. We also believe that when we make a positive contribution to the quality of life and well-being of members in the community, it benefits many generations to come.",
      image:
        "https://cdn.brookfieldresidential.net/-/media/brp/global/modules/flex-listing/about-value/about_ourvalues_community.jpg?rev=06a0005d7a664857a9daa155bf832e96",
      reverse: false,
    },
    {
      name: "Code of Business Conduct & Ethics",
      title: "NeBuilt on Values",
      description:
        "We maintain a Reporting Hotline to report any suspected unethical, illegal or unsafe behavior. Operated by an independent third party, this service is completely confidential and available 24/7. United States: 1-770-613-6339, Canada: 1-800-665-0831",
      image:
        "https://cdn.brookfieldresidential.net/-/media/brp/global/modules/flex-listing/about-value/about_ourvalues_codeofconduct.jpeg?rev=e49422f124e74531b0338c504299de8c",
      reverse: true,
      btn: "Learn More",
    },
  ];
  return (
    <div>
      <div className="flex flex-col gap-4 p-4 justify-center items-center w-full lg:w-3/4 mx-auto py-16">
        <h1 className="text-4xl font-bold">Our Values</h1>
        <p className="text-center">
          At Brookfield Residential our success is grounded in one thing: giving
          people the best places to call home. And we do that by living and
          breathing our core values – Passion, Integrity and Community.
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
    </div>
  );
};

export default Values;
