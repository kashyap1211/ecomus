// // import React, { useState } from "react";
// // import { useNavigate } from "react-router-dom";

// // const ProductCard = ({ product }) => {
// //   const [hovered, setHovered] = useState(false);
// //   const navigate = useNavigate();

// //   return (
// //     <div
// //       className="rounded-2xl p-3 relative group transition hover:shadow-lg cursor-pointer"
// //       onMouseEnter={() => setHovered(true)}
// //       onMouseLeave={() => setHovered(false)}
// //     //   onClick={() => navigate(`/product/${product._id}`)}
// //     onClick={() => navigate(`/product/${product._id}`)}

// //     >
// //       <img
// //         src={hovered ? product.images[1] : product.images[0]}
// //         alt={product.name}
// //         className="w-full h-full object-cover"
// //       />
// //       <p className="py-1 font-medium">{product.name}</p>
// //       <p className="font-semibold">${product.price}</p>
// //     </div>
// //   );
// // };

// // export default ProductCard;
// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { FaShoppingBag, FaHeart, FaTimes, FaEye } from "react-icons/fa";

// const ProductCard = ({ product }) => {
//   const [hovered, setHovered] = useState(false);
//   const navigate = useNavigate();

//   return (
//     <div
//       className="rounded-2xl relative group cursor-pointer transition "
//       onMouseEnter={() => setHovered(true)}
//       onMouseLeave={() => setHovered(false)}
//       onClick={() => navigate(`/product/${product._id}`)}
//     >
//       {/* Product Image */}
//       <div className="relative w-full h-80 sm:h-96 overflow-hidden rounded-xl">
//         <img
//           src={
//             hovered ? product.images[1] || product.images[0] : product.images[0]
//           }
//           alt={product.name}
//           className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
//         />

//         {/* Hover Overlay */}
//         <div
//           className={`absolute inset-0 bg-black/30 flex flex-col items-center justify-center gap-3 transition-opacity duration-300 ${
//             hovered ? "opacity-100" : "opacity-0"
//           }`}
//         >
//           <div className="flex gap-3">
//             <button className="bg-white p-2 rounded-full shadow hover:bg-gray-100">
//               <FaShoppingBag />
//             </button>
//             <button className="bg-white p-2 rounded-full shadow hover:bg-gray-100">
//               <FaHeart />
//             </button>
//             <button className="bg-white p-2 rounded-full shadow hover:bg-gray-100">
//               <FaTimes />
//             </button>
//             <button className="bg-white p-2 rounded-full shadow hover:bg-gray-100">
//               <FaEye />
//             </button>
//           </div>

//           <div className="flex gap-2 mt-2 text-white font-medium">
//             {product.sizes?.map((size) => (
//               <span
//                 key={size}
//                 className="px-2 py-1 border border-white rounded cursor-pointer hover:bg-white hover:text-black transition"
//               >
//                 {size}
//               </span>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Product Info */}
//       <p className="py-1 font-medium">{product.name}</p>
//       <p className="font-semibold">${product.price}</p>

//       {/* Colors */}
//       <div className="flex items-center gap-2 py-2">
//         {product.colors?.map((color, idx) => (
//           <span
//             key={idx}
//             className="w-5 h-5 rounded-full border border-gray-300 cursor-pointer"
//             style={{ backgroundColor: color }}
//           ></span>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ProductCard;
