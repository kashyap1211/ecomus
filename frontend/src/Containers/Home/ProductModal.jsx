import React, { useState } from "react";
import { path } from "../../constant";
import { useNavigate } from "react-router-dom";

const ProductModal = ({ isOpen, onClose, product }) => {
  const [selectedColor, setSelectedColor] = useState("Orange");
  const [selectedSize, setSelectedSize] = useState("S");
  const [quantity, setQuantity] = useState(1);
  const navigate = useNavigate()
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="bg-white w-[90%] md:w-[900px] rounded-xl shadow-lg relative p-6">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-600 hover:text-black text-2xl"
        >
          ×
        </button>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Left: Image */}
          <div>
            <img
              src={product.image}
              alt={product.name}
              className="w-full rounded-lg"
            />
          </div>

          {/* Right: Details */}
          <div>
            {/* Title + Best Seller */}
            <h2 className="text-2xl font-bold">{product.name}</h2>
            <div className="flex items-center gap-3 mt-2">
              <span className="text-xs font-semibold px-2 py-1 border rounded">
                BEST SELLER
              </span>
              <span className="text-sm text-red-500">
                ⚡ Selling fast! 48 people have this in their carts.
              </span>
            </div>

            {/* Price */}
            <p className="text-2xl font-semibold mt-4">${product.price}.00</p>

            {/* Description */}
            <p className="text-gray-600 mt-2">{product.description}</p>

            {/* Color */}
            <div className="mt-4">
              <p className="font-semibold">Color: {selectedColor}</p>
              <div className="flex gap-3 mt-2">
                {[
                  { name: "Orange", color: "bg-orange-500" },
                  { name: "Black", color: "bg-black" },
                  { name: "White", color: "bg-white border" },
                ].map((c) => (
                  <button
                    key={c.name}
                    onClick={() => setSelectedColor(c.name)}
                    className={`w-8 h-8 rounded-full border-2 flex items-center justify-center 
                      ${
                        selectedColor === c.name
                          ? "border-black"
                          : "border-gray-300"
                      }`}
                  >
                    <span className={`w-6 h-6 rounded-full ${c.color}`}></span>
                  </button>
                ))}
              </div>
            </div>

            {/* Sizes */}
            <div className="mt-4">
              <p className="font-semibold">Size: {selectedSize}</p>
              <div className="flex gap-2 mt-2">
                {["S", "M", "L", "XL"].map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`border px-4 py-2 rounded ${
                      selectedSize === size
                        ? "bg-black text-white"
                        : "hover:bg-black hover:text-white"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
              <p className="mt-2 text-sm underline cursor-pointer">
                Find your size
              </p>
            </div>

            {/* Quantity */}
            <div className="mt-4 flex items-center gap-3">
              <button
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                className="border px-3 py-1 rounded text-lg"
              >
                -
              </button>
              <span className="font-medium">{quantity}</span>
              <button
                onClick={() => setQuantity((q) => q + 1)}
                className="border px-3 py-1 rounded text-lg"
              >
                +
              </button>
            </div>
            {/* Add to Cart */}
            <button onClick={(()=>navigate(path.viewcart))} className="mt-6 bg-black text-white w-full py-3 rounded-lg hover:bg-gray-800 text-lg font-semibold">
              Add to cart – $
              {quantity === 1 ? product.price : product.price * quantity }
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
