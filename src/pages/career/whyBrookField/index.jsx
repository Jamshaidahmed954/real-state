// import img from "next/img";
import React from "react";
import Footer from "../../../component/footer";
export default function WhyBrookField() {
  return (
    <>
      <div>
        <img
          src="https://cdn.brookfieldresidential.net/-/media/brp/global/modules/about-hero/230223-brookfield-culture-photos-2400x1000-new.jpg?rev=3d1b14d685ac409fbb9eeca8b51be841"
          alt=""
          className="w-full h-[88vh] object-cover"
        />
      </div>
      <div className="lg:w-[80%] w-full mx-auto px-4 py-8">
        {/* Header Section */}

        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-[#0a3b6c] mb-4">
            Why Brookfield
          </h1>
          <p className="text-sm md:text-base">
            At <span className="font-semibold">Brookfield Residential</span>, we
            don't just build communities and homes. We build lasting memories,
            and we like to have fun while doing it!
          </p>
        </div>

        {/* Life Changing Experience Section */}
        <div className="flex flex-col md:flex-row lg:gap-20 gap-4   mb-16 justify-center items-center">
          <div className="md:w-1/2">
            <img
              src="https://cdn.brookfieldresidential.net/-/media/brp/global/modules/about-spotlight/corporate/careers/2016-about_careers_whybrookfield_1-brookfieldresidentialproperties.jpg?rev=45b9d95fd177464c8f0925a8f0a70b45"
              alt="Brookfield team members in blue shirts standing in front of a 'Missing Tree' sign"
              className="w-full h-auto"
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-2xl md:text-3xl font-bold text-[#0a3b6c] mb-4">
              Life Changing Experience
            </h2>
            <p className="mb-3">
              How often do you get to be part of something from sketch to real
              life? At
              <span className="font-semibold"> Brookfield Residential</span>,
              you do exactly that. You play an integral part in helping create
              better communities in the cities that we operate in. From drafting
              the blue print of a community to putting the shovel in the ground
              to laying the foundation of a home to helping customers select
              their new home to closing families, and potentially your family,
              move in, you can't find a more rewarding place to work.
            </p>
          </div>
        </div>

        {/* Thriving Culture Section */}
        <div className="flex flex-col md:flex-row lg:gap-20 gap-4   mb-16 justify-center items-center">
          <div className="md:w-1/2 order-2 md:order-1">
            <h2 className="text-2xl md:text-3xl font-bold text-[#0a3b6c] mb-4">
              Thriving Culture
            </h2>
            <p className="mb-3">
              No one day is the same at{" "}
              <span className="font-semibold">Brookfield Residential</span>. We
              work in a professional yet fun environment where our people are
              the key to our continued passion, integrity and community. Our
              culture is who we are as an organization. It's the way we work,
              the beliefs we share and the communities we create. We're
              committed to creating a positive and empowering workplace for our
              team. We encourage openness in all aspects of our operation
              because we believe everyone has a voice. It's these fresh
              perspectives and ideas that keep our company moving forward.
            </p>
          </div>
          <div className="md:w-1/2 order-1 md:order-2">
            <img
              src="https://cdn.brookfieldresidential.net/-/media/brp/global/modules/about-spotlight/corporate/careers/frz_5810.jpg?rev=d8152fc92efb43769de14891ee389fde"
              alt="Brookfield team members at a company event in a grand hall"
              className="w-full h-auto"
            />
          </div>
        </div>

        {/* Growing Your Potential Section */}
        <div className="flex flex-col md:flex-row lg:gap-20 gap-4  mb-16 justify-center items-center">
          <div className="md:w-1/2">
            <img
              src="https://cdn.brookfieldresidential.net/-/media/brp/global/modules/about-spotlight/lead_2023-in-costa-mesa670x376.jpg?rev=ee47cf84304a4fb9ada4c56077cfdfc2"
              alt="Brookfield team members gathered outside"
              className="w-full h-auto"
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-2xl md:text-3xl font-bold text-[#0a3b6c] mb-4">
              Growing Your Potential
            </h2>
            <p className="mb-3">
              Your career is a journey, and we want to help our team members
              reach and express their talents and deliver on their personal
              potential. We're dedicated to investing in you! That's why we
              offer a variety of programs such as employee development
              workshops, mentorship programs, education, and more. We know that
              when you grow, we grow together. Want more reasons? Check out what
              our people are saying.
            </p>
            <button className="mt-4 px-4 py-2 border border-[#0a3b6c] cursor-pointer text-[#0a3b6c] rounded-full hover:bg-[#0a3b6c] hover:text-white transition-colors">
              See What People Are Saying
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
