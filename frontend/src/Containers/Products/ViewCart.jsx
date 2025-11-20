// import React from "react";
// import { FaFireFlameCurved } from "react-icons/fa6";
// import BestSeller from "../Home/BestSeller";
// import HappyClients from "../Home/HappyClients";
// import { path } from "../../constant";
// import { useNavigate } from "react-router-dom";

// const cartItems = [
//   {
//     id: 1,
//     name: "Oversized Printed T-shirt",
//     color: "White / M",
//     price: 18.0,
//     image:
//       "https://themesflat.co/html/ecomus/images/products/white-2.jpg",
//   },
//   {
//     id: 2,
//     name: "Ribbed Tank Top",
//     color: "Orange / S",
//     price: 18.0,
//     image:
//       "https://themesflat.co/html/ecomus/images/products/orange-1.jpg",
//   },
//   {
//     id: 3,
//     name: "Regular Fit Oxford Shirt",
//     color: "Black / L",
//     price: 18.0,
//     image:
//       "https://themesflat.co/html/ecomus/images/products/black-4.jpg",
//   },
// ];

// const ViewCart = () => {

//   const navigate = useNavigate()

//   return (
//     <div>
//       {/* Header */}
//       <div className="flex flex-col items-center justify-center py-16 bg-gradient-to-r from-gray-50 via-red-50 to-gray-50 text-center">
//         <h2 className="text-3xl font-semibold text-black mb-2">
//           Shopping Cart
//         </h2>
//       </div>

//       {/* Limited time notice */}
//       <p className="text-lg md:text-2xl flex gap-3 justify-center py-7 px-4 text-center">
//         <FaFireFlameCurved className="text-orange-500 text-2xl mt-1" />
//         These products are limited, checkout within
//       </p>

//       {/* Cart Layout */}
//       <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6 px-4 lg:px-10">
//         {/* Left Section - Product List */}
//         <div className="lg:col-span-2 bg-white shadow-md rounded-lg p-4">
//           <table className="w-full border-collapse">
//             <thead>
//               <tr className="text-left border-b">
//                 <th className="p-3">Product</th>
//                 <th className="p-3 hidden sm:table-cell">Price</th>
//                 <th className="p-3">Quantity</th>
//                 <th className="p-3 hidden sm:table-cell">Total</th>
//               </tr>
//             </thead>
//             <tbody>
//               {cartItems.map((item) => (
//                 <tr
//                   key={item.id}
//                   className="border-b hover:bg-gray-50 transition"
//                 >
//                   {/* Product Info */}
//                   <td className="p-3 flex items-center gap-3">
//                     <img
//                       src={item.image}
//                       alt={item.name}
//                       className="w-20 object-cover rounded"
//                     />
//                     <div>
//                       <h4 className="font-medium">{item.name}</h4>
//                       <p className="text-gray-500 text-sm">{item.color}</p>
//                       <button className="text-red-500 text-sm mt-1 hover:underline">
//                         Remove
//                       </button>
//                     </div>
//                   </td>

//                   {/* Price */}
//                   <td className="p-3 hidden sm:table-cell">${item.price}</td>

//                   {/* Quantity */}
//                   <td className="p-3">
//                     <div className="flex items-center border rounded-md w-fit">
//                       <button className="px-2 py-1 hover:bg-gray-200">-</button>
//                       <span className="px-3">1</span>
//                       <button className="px-2 py-1 hover:bg-gray-200">+</button>
//                     </div>
//                   </td>

//                   {/* Total */}
//                   <td className="p-3 hidden sm:table-cell">
//                     ${item.price.toFixed(2)}
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>

//         {/* Right Section - Summary */}
//         <div className="bg-white shadow-md rounded-lg p-6">
//           {/* Free shipping progress */}
//           <div className="border p-3 rounded mb-5">
//             <p className="text-sm">
//               Buy <span className="font-bold">$75.00</span> more to enjoy{" "}
//               <span className="font-bold">Free Shipping</span>
//             </p>
//             <div className="w-full bg-gray-200 rounded-full h-2 mt-3">
//               <div className="bg-red-500 h-2 rounded-full w-1/4"></div>
//             </div>
//           </div>

//           {/* Estimate shipping */}
//           <div className="mb-4">
//             <h4 className="font-semibold text-lg">Estimate Shipping</h4>
//           </div>

//           <div className="space-y-4">
//             <label className="flex items-center gap-2">
//               <input type="checkbox" className="accent-red-500" />
//               Do you want a gift wrap? Only $5.00
//             </label>

//             <div className="flex justify-between">
//               <p className="font-medium">Subtotal</p>
//               <p className="font-bold">$54.00 USD</p>
//             </div>
//             <p className="text-xs text-gray-500">
//               Taxes and shipping calculated at checkout
//             </p>

//             <label className="flex items-center gap-2">
//               <input type="checkbox" className="accent-red-500" />
//               I agree with the{" "}
//               <a href="#" className="underline text-red-600">
//                 terms and conditions
//               </a>
//             </label>

//             <button onClick={(()=>(navigate(path.checkout)))} className="w-full bg-black text-white py-3 rounded-lg cursor-pointer hover:bg-gray-800">
//               Check out
//             </button>

//             {/* Payment icons */}
//             <div className="flex justify-center gap-2 mt-3">
//               <img
//                 src="https://upload.wikimedia.org/wikipedia/commons/4/41/Visa_Logo.png"
//                 alt="Visa"
//                 className="h-5"
//               />
//               <img
//                 src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg"
//                 alt="PayPal"
//                 className="h-5"
//               />
//               <img
//                 src="https://upload.wikimedia.org/wikipedia/commons/0/04/Mastercard-logo.png"
//                 alt="Mastercard"
//                 className="h-5"
//               />
//               <img
//                 src="https://upload.wikimedia.org/wikipedia/commons/3/30/American_Express_logo.svg"
//                 alt="Amex"
//                 className="h-5"
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//       <BestSeller/>
//       <HappyClients/>
//     </div>
//   );
// };

// export default ViewCart;
import React, { useState, useEffect } from "react";
import { FaFireFlameCurved } from "react-icons/fa6";
import { path } from "../../constant";
import { useNavigate } from "react-router-dom";

const ViewCart = () => {
  const [cartItems, setCartItems] = useState([]);
  const navigate = useNavigate();

  // Load cart from localStorage
  useEffect(() => {
    const storedCart = localStorage.getItem("cartItems");
    if (storedCart) setCartItems(JSON.parse(storedCart));

    // Update cart if localStorage changes
    const handleStorageChange = () => {
      const updatedCart = localStorage.getItem("cartItems");
      setCartItems(updatedCart ? JSON.parse(updatedCart) : []);
    };

    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div>
      {/* Header */}
      <div className="flex flex-col items-center justify-center py-16 bg-gradient-to-r from-gray-50 via-red-50 to-gray-50 text-center">
        <h2 className="text-3xl font-semibold text-black mb-2">Shopping Cart</h2>
      </div>

      {/* Limited time notice */}
      <p className="text-lg md:text-2xl flex gap-3 justify-center py-7 px-4 text-center">
        <FaFireFlameCurved className="text-orange-500 text-2xl mt-1" />
        These products are limited, checkout within
      </p>

      {/* Cart Layout */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6 px-4 lg:px-10">
        {/* Left Section - Product List */}
        <div className="lg:col-span-2 bg-white shadow-md rounded-lg p-4">
          {cartItems.length === 0 ? (
            <p className="text-center py-10">Your cart is empty</p>
          ) : (
            <table className="w-full border-collapse">
              <thead>
                <tr className="text-left border-b">
                  <th className="p-3">Product</th>
                  <th className="p-3 hidden sm:table-cell">Price</th>
                  <th className="p-3">Quantity</th>
                  <th className="p-3 hidden sm:table-cell">Total</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item, idx) => (
                  <tr
                    key={`${item._id}-${item.selectedColor?.code}-${item.selectedSize}`}
                    className="border-b hover:bg-gray-50 transition"
                  >
                    {/* Product Info */}
                    <td className="p-3 flex items-center gap-3">
                      <img
                        src={item.images[0]}
                        alt={item.name}
                        className="w-20 object-cover rounded"
                      />
                      <div>
                        <h4 className="font-medium">{item.name}</h4>
                        <p className="text-gray-500 text-sm">
                          {item.selectedColor?.name} / {item.selectedSize}
                        </p>
                        <button
                          className="text-red-500 text-sm mt-1 hover:underline"
                          onClick={() =>
                            setCartItems((prev) =>
                              prev.filter(
                                (_, i) =>
                                  i !== idx
                              )
                            )
                          }
                        >
                          Remove
                        </button>
                      </div>
                    </td>

                    {/* Price */}
                    <td className="p-3 hidden sm:table-cell">${item.price.toFixed(2)}</td>

                    {/* Quantity */}
                    <td className="p-3">
                      <div className="flex items-center border rounded-md w-fit">
                        <button
                          className="px-2 py-1 hover:bg-gray-200"
                          onClick={() =>
                            setCartItems((prev) =>
                              prev.map((it, i) =>
                                i === idx
                                  ? { ...it, quantity: Math.max(1, it.quantity - 1) }
                                  : it
                              )
                            )
                          }
                        >
                          -
                        </button>
                        <span className="px-3">{item.quantity}</span>
                        <button
                          className="px-2 py-1 hover:bg-gray-200"
                          onClick={() =>
                            setCartItems((prev) =>
                              prev.map((it, i) =>
                                i === idx
                                  ? { ...it, quantity: it.quantity + 1 }
                                  : it
                              )
                            )
                          }
                        >
                          +
                        </button>
                      </div>
                    </td>

                    {/* Total */}
                    <td className="p-3 hidden sm:table-cell">
                      ${(item.price * item.quantity).toFixed(2)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>

        {/* Right Section - Summary */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <div className="border p-3 rounded mb-5">
            <p className="text-sm">
              Buy <span className="font-bold">$75.00</span> more to enjoy{" "}
              <span className="font-bold">Free Shipping</span>
            </p>
            <div className="w-full bg-gray-200 rounded-full h-2 mt-3">
              <div
                className="bg-red-500 h-2 rounded-full"
                style={{ width: `${Math.min((subtotal / 75) * 100, 100)}%` }}
              ></div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex justify-between">
              <p className="font-medium">Subtotal</p>
              <p className="font-bold">${subtotal.toFixed(2)} USD</p>
            </div>
            <p className="text-xs text-gray-500">
              Taxes and shipping calculated at checkout
            </p>

            <label className="flex items-center gap-2">
              <input type="checkbox" className="accent-red-500" />
              I agree with the{" "}
              <a href="#" className="underline text-red-600">
                terms and conditions
              </a>
            </label>

            <button
              onClick={() => navigate(path.checkout)}
              className="w-full bg-black text-white py-3 rounded-lg cursor-pointer hover:bg-gray-800"
            >
              Check out
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewCart;
