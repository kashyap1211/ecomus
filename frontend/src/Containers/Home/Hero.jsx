import React, { useEffect, useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const Hero = () => {
  const slides = [
    { id: 1, className: "bg-hero-sm" },
    { id: 2, className: "bg-hero-2" },
    { id: 3, className: "bg-hero-3" },

  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === slides.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="relative w-full h-[100vh] overflow-hidden">
      {/* Slider wrapper */}
      <div
        className="flex h-full transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div
          key={slide.id}
          className={`w-full h-[100vh] flex-shrink-0 flex items-center justify-center 
                      bg-cover bg-center snap-start ${slide.className}`}
        >
            <div className="container mx-auto px-6">
              <p className="text-gray-800 text-3xl md:text-5xl lg:text-8xl">
                Glamorous <br /> Glam
              </p>
              <p className="text-gray-800 my-5 text-2xl">
                From Casual to formal, we've got you covered
              </p>
              <button className="bg-gray-800 flex rounded gap-5 text-white px-5 text-2xl py-2 w-fit">
                Shop Collection <FaArrowRightLong className="text-white mt-1" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hero;
