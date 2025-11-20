// import React from "react";
// import { FiX } from "react-icons/fi";
// import { path } from "../../constant";
// import { useNavigate } from "react-router-dom";

// const CartSidebar = ({ isOpen, onClose }) => {

//     const navigate = useNavigate()
//   return (
//     <>
//       {/* Overlay */}
//       {isOpen && (
//         <div
//           className="fixed inset-0 bg-black/50 z-40"
//           onClick={onClose}
//         />
//       )}

//       {/* Sidebar */}
//       <div
//         className={`fixed top-0 right-0 h-full w-96 bg-white shadow-lg z-50 transform transition-transform duration-300 ${
//           isOpen ? "translate-x-0" : "translate-x-full"
//         }`}
//       >
//         {/* Header */}
//         <div className="flex justify-between items-center p-4 border-b">
//           <h2 className="text-lg font-semibold">Shopping cart (2)</h2>
//           <FiX className="h-6 w-6 cursor-pointer" onClick={onClose} />
//         </div>

//         {/* Free Shipping Progress */}
//         <div className="p-4 border-b">
//           <p>
//             Buy <span className="font-bold text-green-600">$75.00</span> more to enjoy{" "}
//             <span className="font-bold">Free Shipping</span>
//           </p>
//           <div className="mt-2 h-2 bg-gray-200 rounded-full">
//             <div className="h-2 bg-red-500 rounded-full w-1/3"></div>
//           </div>
//         </div>

//         {/* Cart Items */}
//         <div className="p-4 space-y-4 flex-1 overflow-y-auto">
//           {/* Item 1 */}
//           <div className="flex items-center justify-between border-b pb-4">
//             <div className="flex items-center space-x-3">
//               <img
//                 src="https://themesflat.co/html/ecomus/images/products/white-2.jpg"
//                 alt="item"
//                 className="w-20 object-cover"
//               />
//               <div>
//                 <p className="font-medium">T-shirt</p>
//                 <p className="text-sm text-gray-500">Light gray</p>
//                 <p className="text-sm font-bold">$25.00</p>
//                 <div className="flex items-center mt-1 space-x-2">
//                   <button className="px-2 border">-</button>
//                   <span>1</span>
//                   <button className="px-2 border">+</button>
//                   <button className="ml-2 text-red-500 text-sm">Remove</button>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Item 2 */}
//           <div className="flex items-center justify-between">
//             <div className="flex items-center space-x-3">
//               <img
//                 src="https://themesflat.co/html/ecomus/images/products/white-3.jpg"
//                 alt="item"
//                 className="w-20 object-cover"
//               />
//               <div>
//                 <p className="font-medium">Oversized Motif T-shirt</p>
//                 <p className="text-sm font-bold">$25.00</p>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Footer */}
//         <div className="p-4 border-t">
//           <div className="flex justify-between mb-2">
//             <span>Subtotal</span>
//             <span className="font-bold">$49.99 USD</span>
//           </div>
//           <p className="text-sm text-gray-500 mb-4">
//             Taxes and shipping calculated at checkout
//           </p>
//           <label className="flex items-center space-x-2 mb-4 text-sm">
//             <input type="checkbox" /> <span>I agree with terms and conditions</span>
//           </label>

//           <div className="space-y-2">
//             <button onClick={(()=>navigate(path.viewcart))} className="w-full cursor-pointer hover:border-red-600 hover:text-red-600 border font-semibold py-2 rounded">View cart</button>
//             <button onClick={(()=>navigate(path.checkout))} className="w-full bg-black cursor-pointer text-white py-2 rounded hover:bg-gray-800 transition">
//               Checkout
//             </button>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// // export default CartSidebar;
// import React from "react";
// import { FiX } from "react-icons/fi";
// import { path } from "../../constant";
// import { useNavigate } from "react-router-dom";

// const CartSidebar = ({ isOpen, onClose, cartItems, setCartItems }) => {
//   const navigate = useNavigate();

//   const increment = (idx) => {
//     setCartItems((prev) =>
//       prev.map((item, i) => (i === idx ? { ...item, quantity: item.quantity + 1 } : item))
//     );
//   };

//   const decrement = (idx) => {
//     setCartItems((prev) =>
//       prev.map((item, i) =>
//         i === idx ? { ...item, quantity: Math.max(1, item.quantity - 1) } : item
//       )
//     );
//   };

//   const removeItem = (idx) => {
//     setCartItems((prev) => prev.filter((_, i) => i !== idx));
//   };

//   const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

//   return (
//     <>
//       {isOpen && <div className="fixed inset-0 bg-black/50 z-40" onClick={onClose} />}

//       <div
//         className={`fixed top-0 right-0 h-full w-96 bg-white shadow-lg z-50 transform transition-transform duration-300 ${
//           isOpen ? "translate-x-0" : "translate-x-full"
//         }`}
//       >
//         {/* Header */}
//         <div className="flex justify-between items-center p-4 border-b">
//           <h2 className="text-lg font-semibold">Shopping cart ({cartItems.length})</h2>
//           <FiX className="h-6 w-6 cursor-pointer" onClick={onClose} />
//         </div>

//         {/* Cart Items */}
//         <div className="p-4 space-y-4 flex-1 overflow-y-auto">
//           {cartItems.length === 0 ? (
//             <p className="text-center text-gray-500">Your cart is empty</p>
//           ) : (
//             cartItems.map((item, idx) => (
//               <div key={idx} className="flex items-center justify-between border-b pb-4">
//                 <div className="flex items-center space-x-3">
//                   <img src={item.images[0]} alt={item.name} className="w-20 object-cover" />
//                   <div>
//                     <p className="font-medium">{item.name}</p>
//                     {item.selectedColor && (
//                       <p className="text-sm text-gray-500">{item.selectedColor.name}</p>
//                     )}
//                     {item.selectedSize && (
//                       <p className="text-sm text-gray-500">Size: {item.selectedSize}</p>
//                     )}
//                     <p className="text-sm font-bold">${item.price}</p>
//                     <div className="flex items-center mt-1 space-x-2">
//                       <button className="px-2 border" onClick={() => decrement(idx)}>
//                         -
//                       </button>
//                       <span>{item.quantity}</span>
//                       <button className="px-2 border" onClick={() => increment(idx)}>
//                         +
//                       </button>
//                       <button className="ml-2 text-red-500 text-sm" onClick={() => removeItem(idx)}>
//                         Remove
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))
//           )}
//         </div>

//         {/* Footer */}
//         <div className="p-4 border-t">
//           <div className="flex justify-between mb-2">
//             <span>Subtotal</span>
//             <span className="font-bold">${subtotal.toFixed(2)} USD</span>
//           </div>
//           <p className="text-sm text-gray-500 mb-4">Taxes and shipping calculated at checkout</p>
//           <label className="flex items-center space-x-2 mb-4 text-sm">
//             <input type="checkbox" /> <span>I agree with terms and conditions</span>
//           </label>

//           <div className="space-y-2">
//             <button
//               onClick={() => navigate(path.viewcart)}
//               className="w-full cursor-pointer hover:border-red-600 hover:text-red-600 border font-semibold py-2 rounded"
//             >
//               View cart
//             </button>
//             <button
//               onClick={() => navigate(path.checkout)}
//               className="w-full bg-black cursor-pointer text-white py-2 rounded hover:bg-gray-800 transition"
//             >
//               Checkout
//             </button>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default CartSidebar;
import React from "react";
import { FiX } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { path } from "../../constant";

const CartSidebar = ({ isOpen, onClose, cartItems, setCartItems }) => {
  const navigate = useNavigate();

  const increment = (idx) => {
    setCartItems((prev) =>
      prev.map((item, i) =>
        i === idx ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decrement = (idx) => {
    setCartItems((prev) =>
      prev.map((item, i) =>
        i === idx ? { ...item, quantity: Math.max(1, item.quantity - 1) } : item
      )
    );
  };

  const removeItem = (idx) => {
    setCartItems((prev) => prev.filter((_, i) => i !== idx));
  };

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <>
      {isOpen && <div className="fixed inset-0 bg-black/50 z-40" onClick={onClose} />}

      <div
        className={`fixed top-0 right-0 h-full w-96 bg-white shadow-lg z-50 transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-lg font-semibold">Shopping cart ({cartItems.length})</h2>
          <FiX className="h-6 w-6 cursor-pointer" onClick={onClose} />
        </div>

        {/* Cart Items */}
        <div className="p-4 space-y-4 flex-1 overflow-y-auto">
          {cartItems.length === 0 ? (
            <p className="text-center text-gray-500">Your cart is empty</p>
          ) : (
            cartItems.map((item, idx) => (
              <div
                key={`${item._id}-${item.selectedColor?.code}-${item.selectedSize}`}
                className="flex items-center justify-between border-b pb-4"
              >
                <div className="flex items-center space-x-3">
                  <img src={item.images[0]} alt={item.name} className="w-20 object-cover" />
                  <div>
                    <p className="font-medium">{item.name}</p>
                    {item.selectedColor && (
                      <p className="text-sm text-gray-500">{item.selectedColor.name}</p>
                    )}
                    {item.selectedSize && (
                      <p className="text-sm text-gray-500">Size: {item.selectedSize}</p>
                    )}
                    <p className="text-sm font-bold">${item.price}</p>
                    <div className="flex items-center mt-1 space-x-2">
                      <button className="px-2 border" onClick={() => decrement(idx)}>-</button>
                      <span>{item.quantity}</span>
                      <button className="px-2 border" onClick={() => increment(idx)}>+</button>
                      <button className="ml-2 text-red-500 text-sm" onClick={() => removeItem(idx)}>Remove</button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        <div className="p-4 border-t">
          <div className="flex justify-between mb-2">
            <span>Subtotal</span>
            <span className="font-bold">${subtotal.toFixed(2)} USD</span>
          </div>
          <p className="text-sm text-gray-500 mb-4">Taxes and shipping calculated at checkout</p>
          <label className="flex items-center space-x-2 mb-4 text-sm">
            <input type="checkbox" /> <span>I agree with terms and conditions</span>
          </label>

          <div className="space-y-2">
            <button
              onClick={() => navigate(path.viewcart)}
              className="w-full cursor-pointer hover:border-red-600 hover:text-red-600 border font-semibold py-2 rounded"
            >
              View cart
            </button>
            <button
              onClick={() => navigate(path.checkout)}
              className="w-full bg-black cursor-pointer text-white py-2 rounded hover:bg-gray-800 transition"
            >
              Checkout
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartSidebar;
