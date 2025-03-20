import React, { useEffect, useState } from "react";
import DropDown from "../../component/dropdown";
import Card from "./card/Card";
import blogs from "./data/blogs";

const Blogs = () => {
  const [visibleBlogs, setVisibleBlogs] = useState(3); // Initially show 3 items

  const handleViewMore = () => {
    setVisibleBlogs((prev) => prev + 3); // Load 3 more on each click
  };
  return (
    <div>
      <div className="lg:w-[70%] w-full mx-auto px-4 py-8 flex flex-col gap-8 justify-center items-center">
        <h1 className="text-6xl font-bold text-black text-center">
          News and Blogs
        </h1>
        <p className="text-xl font-semibold text-center font-sans text-black ">
          Get expert home buying advice, home design ideas, and community news
          all in one place. At Brookfield Residential, we’re here to inspire and
          guide you throughout your home buying journey.
        </p>
        <div className="flex justify-center flex-col lg:flex-row w-full lg:w-4/6 mt-8 gap-12">
          <div className="w-full lg:w-1/2">
            <DropDown label="Category" option={["Life and Style"]} />
          </div>
          <div className="w-full lg:w-1/2">
            <DropDown label="Region" option={["All rights"]} />
          </div>
        </div>
      </div>
      {/* blogs */}
      <div className="max-w-7xl mx-auto px-4 py-10">
        <div className="grid md:grid-cols-3 gap-8">
          {blogs.slice(0, visibleBlogs).map((blog) => (
            <Card key={blog.id} {...blog} />
          ))}
        </div>
        {visibleBlogs < blogs.length && (
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

export default Blogs;
