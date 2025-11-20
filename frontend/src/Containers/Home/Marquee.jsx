import React from "react";
import { SiPolestar } from "react-icons/si";

const Marquee = () => {
  const marquee = [
    { name: "Spring Clearance Event: Save Up to 70%" },
    { name: "Flash Sale: Limited Time Only!" },
    { name: "Buy One Get One Free – Today Only" },
    { name: "Free Shipping on Orders Over $50" },
    { name: "New Arrivals Just Dropped!" },
  ];

  return (
    <div className="bg-yellow-200 py-4 overflow-hidden relative">
      {/* Marquee wrapper */}
      <div className="whitespace-nowrap flex animate-marquee hover:[animation-play-state:paused]">
        {marquee.map((item, index) => (
          <span key={index} className="mx-8  text-2xl">
            <p className="flex gap-2  text-xl">
              <SiPolestar className="mt-1" />
              {item.name}
            </p>
          </span>
        ))}
        {/* Duplicate items to make loop smooth */}
        {marquee.map((item, index) => (
          <span key={`dup-${index}`} className="mx-8  text-2xl">
            <p className="flex gap-2 text-xl">
              <SiPolestar className="mt-1" />
              {item.name}
            </p>
          </span>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
