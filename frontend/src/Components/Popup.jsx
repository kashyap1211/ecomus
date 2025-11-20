import React, { useEffect, useState } from "react";
import { FaTimes } from "react-icons/fa";

const Popup = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(true);
    }, 2000); // 2 seconds delay

    return () => clearTimeout(timer);
  }, []);

  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white w-[90%] max-w-md rounded-xl shadow-lg relative">
        {/* Close Button */}
        <button
          className="absolute top-3 right-3 text-gray-600 hover:text-black"
          onClick={() => setShow(false)}
        >
          <FaTimes size={20} />
        </button>

        {/* Image */}
        <img
          src="https://themesflat.co/html/ecomus/images/item/banner-newleter.jpg" // replace with your image
          alt="Popup"
          className="rounded-t-xl"
        />

        {/* Content */}
        <div className="p-6 text-center">
          <h2 className="text-2xl font-bold mb-2">Don’t miss out</h2>
          <p className="text-gray-600 mb-4">
            Be the first one to get the new product at early bird prices.
          </p>
          <input
            type="email"
            placeholder="Email *"
            className="w-full border rounded-md px-4 py-2 mb-4"
          />
          <button className="w-full bg-black text-white py-2 rounded-md hover:bg-gray-800">
            Subscribe
          </button>
          <p className="py-5 font-semibold hover:text-blue-800 cursor-pointer underline">Not interested</p>
        </div>
      </div>
    </div>
  );
};

export default Popup;
