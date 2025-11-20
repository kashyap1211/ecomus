
import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";

const ShopGramModel = ({ isOpen, onClose, product }) => {
  if (!isOpen) return null;

  // ✅ State for selections
  const [selectedColor, setSelectedColor] = useState("Orange");
  const [selectedSize, setSelectedSize] = useState("S");
  const [quantity, setQuantity] = useState(1);

  // ✅ Colors with names
  const colors = [
    { name: "Orange", class: "bg-orange-500" },
    { name: "Black", class: "bg-black" },
    { name: "White", class: "bg-white border" },
  ];

  // ✅ Sizes
  const sizes = ["S", "M", "L", "XL"];

  // ✅ Price calculation
  const totalPrice = product.price * quantity;

  return (
    <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center">
      <div className="bg-white rounded-xl shadow-lg w-[90%] max-w-md p-6 relative">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-600 hover:text-black"
        >
          <FaTimes size={20} />
        </button>

        {/* Product Image + Details */}
        <div className="flex flex-col items-center">
          <img
            src={product.image}
            alt={product.title}
            className="w-40 h-40 object-cover rounded-lg mb-4"
          />
          <h2 className="text-xl font-semibold">{product.title}</h2>
          <p className="text-lg text-gray-600">${product.price}</p>
        </div>

        {/* Options */}
        <div className="mt-4">
          {/* Color */}
          <p className="font-semibold">
            Color: <span className="text-gray-700">{selectedColor}</span>
          </p>
          <div className="flex gap-3 py-2">
            {colors.map((c) => (
              <div
                key={c.name}
                onClick={() => setSelectedColor(c.name)}
                className={`w-6 h-6 rounded-full cursor-pointer ${c.class} ${
                  selectedColor === c.name ? "ring-2 ring-black" : ""
                }`}
              ></div>
            ))}
          </div>

          {/* Size */}
          <p className="font-semibold mt-2">
            Size: <span className="text-gray-700">{selectedSize}</span>
          </p>
          <div className="flex gap-2 py-2">
            {sizes.map((size) => (
              <button
                key={size}
                onClick={() => setSelectedSize(size)}
                className={`px-3 py-1 border rounded-md ${
                  selectedSize === size
                    ? "bg-black text-white"
                    : "hover:bg-black hover:text-white"
                }`}
              >
                {size}
              </button>
            ))}
          </div>

          {/* Quantity */}
          <p className="font-semibold mt-2">Quantity:</p>
          <div className="flex items-center gap-3 py-2">
            <button
              onClick={() => setQuantity((q) => Math.max(1, q - 1))}
              className="px-3 py-1 border"
            >
              -
            </button>
            <span>{quantity}</span>
            <button
              onClick={() => setQuantity((q) => q + 1)}
              className="px-3 py-1 border"
            >
              +
            </button>
          </div>
        </div>

        {/* Actions */}
        <div className="mt-4 flex flex-col gap-3">
          <button className="bg-black text-white py-2 rounded-lg">
            Add to cart – ${totalPrice.toFixed(2)}
          </button>
          <button className="bg-yellow-400 text-black py-2 rounded-lg">
            Buy with PayPal
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShopGramModel;
