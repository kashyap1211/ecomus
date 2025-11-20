import React from "react";
import { FiSearch, FiX } from "react-icons/fi";

const SearchSidebar = ({ isOpen, onClose }) => {
  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50  z-40"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 -right-5 h-full w-[80%] md:w-100 bg-white shadow-lg z-50 transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-lg font-semibold">Search our site</h2>
          <FiX
            className="h-6 w-6 cursor-pointer"
            onClick={onClose}
          />
        </div>

        {/* Search Input */}
        <div className="p-4">
          <div className="flex items-center border rounded-lg px-2">
            <FiSearch className="h-5 w-5 text-gray-500" />
            <input
              type="text"
              placeholder="Search"
              className="w-full p-2 outline-none"
            />
          </div>
        </div>

        {/* Quick Links */}
        <div className="p-4">
          <h3 className="font-semibold mb-2">Quick link</h3>
          <ul className="space-y-2 text-gray-700">
            <li className="cursor-pointer hover:underline">Fashion</li>
            <li className="cursor-pointer hover:underline">Men</li>
            <li className="cursor-pointer hover:underline">Women</li>
            <li className="cursor-pointer hover:underline">Accessories</li>
          </ul>
        </div>

        {/* Suggestions */}
        <div className="p-4 border-t">
          <h3 className="font-semibold mb-3">Need some inspiration?</h3>
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img
                src="https://themesflat.co/html/ecomus/images/products/white-3.jpg"
                alt="item"
                className="w-20 object-cover"
              />
              <div>
                <p className="text-sm">Cotton jersey top</p>
                <p className="text-gray-400 line-through text-xs">$10.00</p>
                <p className="text-red-500 font-bold text-sm">$8.00</p>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <img
                src="https://themesflat.co/html/ecomus/images/products/white-2.jpg"
                alt="item"
                className="w-20  object-cover"
              />
              <div>
                <p className="text-sm">Mini crossbody bag</p>
                <p className="font-bold text-sm">$16.00</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <img
                src="https://themesflat.co/html/ecomus/images/products/white-1.jpg"
                alt="item"
                className="w-20  object-cover"
              />
              <div>
                <p className="text-sm">Oversized Printed T-shirt</p>
                <p className="font-bold text-sm">$22.00</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchSidebar;
