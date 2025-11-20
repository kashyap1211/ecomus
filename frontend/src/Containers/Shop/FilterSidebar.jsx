
import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { FaCaretDown } from "react-icons/fa";

const FilterSidebar = ({ isOpen, onClose, onApplyFilters = () => {} }) => {

  const [filters, setFilters] = useState({
    categories: [],
    brands: [],
    colors: [],
    sizes: [],
    availability: "",
    priceRange: {},
  });

  const handleCheckbox = (key, value) => {
    setFilters((prev) => {
      const updated = prev[key].includes(value)
        ? prev[key].filter((item) => item !== value)
        : [...prev[key], value];
      return { ...prev, [key]: updated };
    });
  };

  const handleAvailability = (value) => {
    setFilters((prev) => ({ ...prev, availability: value }));
  };

  const handlePrice = (min, max) => {
    setFilters((prev) => ({ ...prev, priceRange: { min, max } }));
  };

  const applyFilters = () => {
    onApplyFilters(filters);
    onClose();
  };

  return (
    <>
      {isOpen && <div className="fixed inset-0 bg-black/50 z-40" onClick={onClose} />}
      <div
        className={`fixed top-0 left-0 h-full w-72 bg-white shadow-lg z-50 transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-lg font-semibold">FILTER</h2>
          <button onClick={onClose}>
            <AiOutlineClose size={24} />
          </button>
        </div>

        {/* Filters */}
        <div className="px-5">
          {/* Categories */}
          <Accordion>
            <AccordionSummary expandIcon={<FaCaretDown />}>
              <Typography>Product Categories</Typography>
            </AccordionSummary>
            <AccordionDetails>
              {["Shirts", "T-Shirts", "Jeans"].map((cat) => (
                <p key={cat} className="flex gap-2 py-1">
                  <input
                    type="checkbox"
                    checked={filters.categories.includes(cat)}
                    onChange={() => handleCheckbox("categories", cat)}
                  />
                  {cat}
                </p>
              ))}
            </AccordionDetails>
          </Accordion>

          {/* Availability */}
          <Accordion>
            <AccordionSummary expandIcon={<FaCaretDown />}>
              <Typography>Availability</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <p className="flex gap-2 py-1">
                <input
                  type="radio"
                  name="availability"
                  onChange={() => handleAvailability("instock")}
                />{" "}
                In Stock
              </p>
              <p className="flex gap-2 py-1">
                <input
                  type="radio"
                  name="availability"
                  onChange={() => handleAvailability("outofstock")}
                />{" "}
                Out of Stock
              </p>
            </AccordionDetails>
          </Accordion>

          {/* Price */}
          <Accordion>
            <AccordionSummary expandIcon={<FaCaretDown />}>
              <Typography>Price</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <p onClick={() => handlePrice(0, 50)}>$0 - $50</p>
              <p onClick={() => handlePrice(50, 100)}>$50 - $100</p>
              <p onClick={() => handlePrice(100, 10000)}>$100+</p>
            </AccordionDetails>
          </Accordion>

          {/* Brand */}
          <Accordion>
            <AccordionSummary expandIcon={<FaCaretDown />}>
              <Typography>Brand</Typography>
            </AccordionSummary>
            <AccordionDetails>
              {["Ecomus", "M & H"].map((brand) => (
                <p key={brand} onClick={() => handleCheckbox("brands", brand)}>
                  <input
                    type="checkbox"
                    checked={filters.brands.includes(brand)}
                    onChange={() => handleCheckbox("brands", brand)}
                  />{" "}
                  {brand}
                </p>
              ))}
            </AccordionDetails>
          </Accordion>

          {/* Color */}
          <Accordion>
            <AccordionSummary expandIcon={<FaCaretDown />}>
              <Typography>Color</Typography>
            </AccordionSummary>
            <AccordionDetails>
              {["Red", "Black", "Green", "Yellow", "Blue"].map((color) => (
                <p key={color} className="flex gap-2 py-1">
                  <input
                    type="checkbox"
                    checked={filters.colors.includes(color)}
                    onChange={() => handleCheckbox("colors", color)}
                  />
                  {color}
                </p>
              ))}
            </AccordionDetails>
          </Accordion>

          {/* Size */}
          <Accordion>
            <AccordionSummary expandIcon={<FaCaretDown />}>
              <Typography>Size</Typography>
            </AccordionSummary>
            <AccordionDetails>
              {["S", "M", "L", "XL"].map((s) => (
                <p key={s} className="flex gap-2 py-1">
                  <input
                    type="checkbox"
                    checked={filters.sizes.includes(s)}
                    onChange={() => handleCheckbox("sizes", s)}
                  />
                  {s}
                </p>
              ))}
            </AccordionDetails>
          </Accordion>

          {/* Apply Filters Button */}
          <button
            className="bg-blue-600 text-white px-4 py-2 mt-4 w-full rounded-md"
            onClick={applyFilters}
          >
            Apply Filters
          </button>
        </div>
      </div>
    </>
  );
};

export default FilterSidebar;
