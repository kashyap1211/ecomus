import React from "react";
import { FiArrowLeftCircle, FiArrowRightCircle } from "react-icons/fi";

const Collections = () => {
  const collection = [
    {
      image:
        "https://themesflat.co/html/ecomus/images/collections/collection-8.jpg",
      name: "Women",
    },
    {
      image:
        "https://themesflat.co/html/ecomus/images/collections/collection-9.jpg",
      name: "Women",
    },
    {
      image:
        "https://themesflat.co/html/ecomus/images/collections/collection-10.jpg",
      name: "Women",
    },
    {
      image:
        "https://themesflat.co/html/ecomus/images/collections/collection-11.jpg",
      name: "Women",
    },
    {
      image:
        "https://themesflat.co/html/ecomus/images/collections/collection-12.jpg",
      name: "Women",
    },
    {
      image:
        "https://themesflat.co/html/ecomus/images/collections/collection-13.jpg",
      name: "Women",
    },
  ];

  return (
    <div>
      <div className="flex flex-col items-center justify-center py-20 bg-gradient-to-r from-gray-50 via-red-50 to-gray-50 text-center">
        <h2 className="text-3xl font-semibold text-black mb-2">Collections</h2>
      </div>

      <div className="container px-4 mx-auto py-7">
        <div className="grid grid-cols-1 gap-8 py-5 sm:grid-cols-2 md:grid-cols-3">
          {collection.map((item, index) => (
            <div
              key={index}
              className="flex relative group rounded-2xl overflow-hidden flex-col items-center justify-center group  transition-shadow duration-300"

            >
              <img
                 className="w-full h-auto transform transition-transform duration-500 group-hover:scale-110"
                src={item.image}
                alt={item.name}
              />
              <p className="absolute bg-white px-6 py-2 bottom-3  rounded-md shadow text-black font-medium">
                {item.name}
              </p>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex gap-5 justify-center mt-8">
          <FiArrowLeftCircle className="text-3xl cursor-pointer" />
          <p className="bg-black px-3 py-1 text-lg rounded text-white">1</p>
          <p className="bg-black px-3 py-1 text-lg rounded text-white">2</p>
          <p className="bg-black px-3 py-1 text-lg rounded text-white">3</p>
          <FiArrowRightCircle className="text-3xl cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default Collections;
