import React, { useState } from "react";
import { FaHeart, FaEye, FaShoppingBag, FaTimes } from "react-icons/fa";
import ProductModal from "./ProductModal";

const BestSeller = () => {
   const [open, setOpen] = useState(false);

  const product = {
    name: "Ribbed Tank Top",
    price: 18,
    image: "/images/product.jpg", // replace with your actual image
    description:
      "Nunc arcu faucibus a et lorem eu a mauris adipiscing conubia ac aptent ligula facilisis a auctor habitant parturient a a.Interdum fermentum.",
  };
  const bestseller = [
    {
      image: "https://themesflat.co/html/ecomus/images/products/white-1.jpg",
      hoverImage:
        "https://themesflat.co/html/ecomus/images/products/white-2.jpg",
      name: "Ribbed Tank Top",
      price: "16.95",
      colors: ["#000000", "#FFFFFF", "#808080"], // black, white, gray
      sizes: ["S", "M", "L", "XL"],
    },
    {
      image: "https://themesflat.co/html/ecomus/images/products/purple.jpg",
      hoverImage:
        "https://themesflat.co/html/ecomus/images/products/purple-2.jpg",
      name: "Ribbed modal T-shirt",
      price: "18.95",
      colors: ["#800080", "#000000", "#FFFFFF"], // purple, black, white
      sizes: ["S", "M", "L", "XL"],
    },
    {
      image: "https://themesflat.co/html/ecomus/images/products/white-4.jpg",
      hoverImage:
        "https://themesflat.co/html/ecomus/images/products/white-3.jpg",
      name: "Oversized Printed T-shirt",
      price: "10.00",
      colors: ["#FFFFFF", "#F5F5F5", "#808080"],
      sizes: ["M", "L", "XL"],
    },
    {
      image: "https://themesflat.co/html/ecomus/images/products/pink-1.jpg",
      hoverImage:
        "https://themesflat.co/html/ecomus/images/products/pink-2.jpg",
      name: "Ribbed Tank Top",
      price: "16.95",
      colors: ["#FFC0CB", "#FFFFFF", "#808080"], // pink, white, gray
      sizes: ["S", "M", "L"],
    },
  ];

  return (
    <div className="container px-4 py-7 mx-auto">
      <div>
        <p className="text-2xl text-center font-semibold md:text-4xl py-3">
          Best Seller
        </p>
        <p className="text-xl text-center py-3">
          Shop the Latest Styles: Stay ahead of the curve with our newest
          arrivals
        </p>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
        {bestseller.map((item, index) => (
          <ProductCard key={index} product={item} />
        ))}
      </div>

      <div className="flex justify-center my-5">
        <button className="border px-5 py-2 cursor-pointer hover:text-red-500 hover:border-red-500">
          Load More
        </button>
      </div>
    </div>
  );
};

const ProductCard = ({ product }) => {
  const [hovered, setHovered] = useState(false);
  const [open, setOpen] = useState(false); // 👈 add modal state here

  return (
    <div
      className="rounded-2xl p-3 relative group transition hover:shadow-lg"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Product Image */}
      <div className="relative w-full overflow-hidden rounded-xl">
        <img
          src={hovered ? product.hoverImage : product.image}
          alt={product.name}
          className="w-full h-full object-cover transition duration-300"
        />

        {/* Hover Actions */}
        {hovered && (
          <div className="absolute inset-0 bg-black/30 flex flex-col items-center justify-center gap-3">
            <div className="flex gap-3">
              <button className="bg-white p-2 cursor-pointer rounded-full shadow hover:bg-gray-100">
                <FaShoppingBag />
              </button>
              <button className="bg-white cursor-pointer p-2 rounded-full shadow hover:bg-gray-100">
                <FaHeart />
              </button>
              <button className="bg-white p-2 cursor-pointer rounded-full shadow hover:bg-gray-100">
                <FaTimes />
              </button>

              {/* Eye button */}
              <button
                className="bg-white p-2 cursor-pointer rounded-full shadow hover:bg-gray-100"
                onClick={() => setOpen(true)} // 👈 open modal
              >
                <FaEye />
              </button>
            </div>

            {/* Sizes */}
            <div className="flex gap-2 mt-2 text-white font-medium">
              {product.sizes.map((size) => (
                <span
                  key={size}
                  className="px-2 py-1 border border-white rounded cursor-pointer hover:bg-white hover:text-black transition"
                >
                  {size}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Product Info */}
      <p className="py-1 font-medium">{product.name}</p>
      <p className="font-semibold">{product.price}</p>

      {/* Colors */}
      <div className="flex items-center gap-2 py-2">
        {product.colors?.map((color, idx) => (
          <span
            key={idx}
            className="w-5 h-5 rounded-full border border-gray-300 cursor-pointer"
            style={{ backgroundColor: color }}
          ></span>
        ))}
      </div>

      {/* Modal */}
      <ProductModal
        isOpen={open}
        onClose={() => setOpen(false)} // 👈 close modal
        product={product}
      />
    </div>
  );
};


export default BestSeller;
