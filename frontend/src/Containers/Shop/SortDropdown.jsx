import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const SortDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("Featured");

  const options = [
    "Featured",
    "Best selling",
    "Alphabetically, A-Z",
    "Alphabetically, Z-A",
    "Price, low to high",
    "Price, high to low",
    "Date, old to new",
    "Date, new to old",
  ];

  const handleSelect = (option) => {
    setSelected(option);
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block text-left">
      {/* Button */}
      <div
        className="flex items-center justify-between gap-2 border border-gray-400 px-4 py-2 rounded cursor-pointer text-lg min-w-[200px] bg-white"
        onClick={() => setIsOpen(!isOpen)}
      >
        {selected}
        <FaChevronDown
          className={`transition-transform ${isOpen ? "rotate-180" : ""}`}
        />
      </div>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute left-0 mt-1 w-full bg-white border border-gray-300 rounded shadow-lg z-50">
          {options.map((option, index) => (
            <p
              key={index}
              onClick={() => handleSelect(option)}
              className={`px-4 py-2 cursor-pointer hover:bg-gray-100 ${
                selected === option ? "bg-gray-100 font-medium" : ""
              }`}
            >
              {option}
            </p>
          ))}
        </div>
      )}
    </div>
  );
};

export default SortDropdown;
