// // import React, { useState } from "react";
// // import { useNavigate } from "react-router-dom";
// // import API from "../../api/axios";
// // const Checkout = () => {
// //   // const orderItems = [
// //   //   {
// //   //     id: 1,
// //   //     name: "Ribbed modal T-shirt",
// //   //     variant: "Brown / M",
// //   //     price: 25.0,
// //   //     qty: 1,
// //   //     image: "https://themesflat.co/html/ecomus/images/products/brown.jpg",
// //   //   },
// //   //   {
// //   //     id: 2,
// //   //     name: "Vanilla White",
// //   //     variant: "",
// //   //     price: 35.0,
// //   //     qty: 1,
// //   //     image: "https://themesflat.co/html/ecomus/images/products/kid-12.jpg",
// //   //   },
// //   //   {
// //   //     id: 3,
// //   //     name: "Cotton jersey top",
// //   //     variant: "Beige / S",
// //   //     price: 8.0,
// //   //     qty: 1,
// //   //     image: "https://themesflat.co/html/ecomus/images/products/beige-2.jpg",
// //   //   },
// //   //   {
// //   //     id: 4,
// //   //     name: "Ribbed Tank Top",
// //   //     variant: "Orange / S",
// //   //     price: 54.0,
// //   //     qty: 3,
// //   //     image: "https://themesflat.co/html/ecomus/images/products/orange-1.jpg",
// //   //   },
// //   // ];
// //  const [formData, setFormData] = useState({
// //     name: "",
// //     address: "",
// //     phone: "",
// //     paymentMethod: "cod",
// //   });
// //   const [loading, setLoading] = useState(false);
// //   const navigate = useNavigate();

// //   const handleChange = (e) => {
// //     setFormData({ ...formData, [e.target.name]: e.target.value });
// //   };

// //   const handlePlaceOrder = async (e) => {
// //     e.preventDefault();
// //     setLoading(true);
// //     try {
// //       await API.post("/orders", formData);
// //       alert("Order placed successfully!");
// //       navigate("/");
// //     } catch (error) {
// //       console.error("Error placing order:", error);
// //       alert("Failed to place order");
// //     } finally {
// //       setLoading(false);
// //     }
// //   };


// //   return (
// //     <div>
// //       {/* Header */}
// //       <div className="flex flex-col items-center justify-center py-16 bg-gradient-to-r from-gray-50 via-red-50 to-gray-50 text-center">
// //         <h2 className="text-3xl font-semibold text-black mb-2">Check Out</h2>
// //       </div>

// //       {/* Main Layout */}
// //       <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 px-4 lg:px-10 py-10">
// //         {/* Billing Details */}
// //         <div className="lg:col-span-2 bg-white p-6 shadow rounded-lg">
// //           <h3 className="text-xl font-semibold mb-6">Billing details</h3>
// //        <form onSubmit={handlePlaceOrder} className="space-y-4">
// //         <input
// //           type="text"
// //           name="name"
// //           placeholder="Full Name"
// //           value={formData.name}
// //           onChange={handleChange}
// //           required
// //           className="w-full border rounded-lg px-4 py-2"
// //         />
// //         <textarea
// //           name="address"
// //           placeholder="Shipping Address"
// //           value={formData.address}
// //           onChange={handleChange}
// //           required
// //           className="w-full border rounded-lg px-4 py-2"
// //         />
// //         <input
// //           type="text"
// //           name="phone"
// //           placeholder="Phone Number"
// //           value={formData.phone}
// //           onChange={handleChange}
// //           required
// //           className="w-full border rounded-lg px-4 py-2"
// //         />

// //         <div>
// //           <label className="font-medium block mb-2">Payment Method</label>
// //           <select
// //             name="paymentMethod"
// //             value={formData.paymentMethod}
// //             onChange={handleChange}
// //             className="w-full border rounded-lg px-4 py-2"
// //           >
// //             <option value="cod">Cash on Delivery</option>
// //             <option value="online">Online Payment</option>
// //           </select>
// //         </div>

// //         <button
// //           type="submit"
// //           disabled={loading}
// //           className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition"
// //         >
// //           {loading ? "Placing Order..." : "Place Order"}
// //         </button>
// //       </form>
// //         </div>

// //         {/* Order Summary */}
// //         <div className="bg-white p-6 shadow rounded-lg">
// //           <h3 className="text-xl font-semibold mb-6">Your order</h3>
// //           <div className="space-y-4">
// //             {orderItems.map((item) => (
// //               <div key={item.id} className="flex justify-between items-center">
// //                 <div className="flex gap-3">
// //                   <img
// //                     src={item.image}
// //                     alt={item.name}
// //                     className="w-20 object-cover rounded"
// //                   />
// //                   <div>
// //                     <p className="font-medium text-sm">{item.name}</p>
// //                     <p className="text-xs text-gray-500">{item.variant}</p>
// //                     <p className="text-xs text-gray-400">Qty: {item.qty}</p>
// //                   </div>
// //                 </div>
// //                 <p className="font-medium text-sm">${item.price.toFixed(2)}</p>
// //               </div>
// //             ))}
// //           </div>

// //           {/* Discount */}
// //           <div className="flex mt-5">
// //             <input
// //               type="text"
// //               placeholder="Discount code"
// //               className="flex-1 border rounded-l-md px-3 py-2"
// //             />
// //             <button className="bg-black text-white px-4 rounded-r-md">
// //               Apply
// //             </button>
// //           </div>

// //           {/* Total */}
// //           <div className="flex justify-between items-center mt-5 border-t pt-4">
// //             <p className="font-semibold">Total</p>
// //             <p className="font-bold">$122.00</p>
// //           </div>

// //           {/* Payment Options */}
// //           <div className="mt-6 space-y-3">
// //             <label className="flex items-center gap-2">
// //               <input type="radio" name="payment" defaultChecked />
// //               Direct bank transfer
// //             </label>
// //             <label className="flex items-center gap-2">
// //               <input type="radio" name="payment" />
// //               Cash on delivery
// //             </label>
// //           </div>

// //           <p className="text-xs text-gray-500 mt-4">
// //             Your personal data will be used to process your order, support your
// //             experience throughout this website, and for other purposes described
// //             in our <a href="#" className="underline">privacy policy</a>.
// //           </p>

// //           <label className="flex items-center gap-2 mt-4">
// //             <input type="checkbox" /> I have read and agree to the website{" "}
// //             <a href="#" className="underline">terms and conditions</a>
// //           </label>

// //           {/* Place Order Button */}
// //           <button className="w-full bg-black text-white py-3 mt-6 rounded-lg hover:bg-gray-800">
// //             Place order
// //           </button>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Checkout;


// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import API from "../../api/axios";

// const Checkout = () => {

  
//   const [cartItems, setCartItems] = useState([]);
//   const [formData, setFormData] = useState({
//     name: "",
//     address: "",
//     phone: "",
//     paymentMethod: "cod",
//   });
//   const [loading, setLoading] = useState(false);

//   const navigate = useNavigate();

//   // Load cart from localStorage
//   useEffect(() => {
//     const storedCart = localStorage.getItem("cartItems");
//     if (storedCart) setCartItems(JSON.parse(storedCart));

//     const handleStorageChange = () => {
//       const updatedCart = localStorage.getItem("cartItems");
//       if (updatedCart) setCartItems(JSON.parse(updatedCart));
//       else setCartItems([]);
//     };

//     window.addEventListener("storage", handleStorageChange);
//     return () => window.removeEventListener("storage", handleStorageChange);
//   }, []);

//   const subtotal = cartItems.reduce(
//     (sum, item) => sum + item.price * item.quantity,
//     0
//   );

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handlePlaceOrder = async (e) => {
//     e.preventDefault();
//     if (cartItems.length === 0) {
//       alert("Your cart is empty!");
//       return;
//     }

//     setLoading(true);
//     try {
//       const orderPayload = {
//         ...formData,
//         items: cartItems,
//         total: subtotal,
//       };
// await API.post("/orders", orderPayload);

//       alert("Order placed successfully!");
//       localStorage.removeItem("cartItems"); // Clear cart after order
//       navigate("/");
//     } catch (error) {
//       console.error("Error placing order:", error);
//       alert("Failed to place order");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-50">
//       {/* Header */}
//       <div className="flex flex-col items-center justify-center py-16 bg-gradient-to-r from-gray-50 via-red-50 to-gray-50 text-center">
//         <h2 className="text-2xl sm:text-3xl font-semibold text-black mb-2">
//           Check Out
//         </h2>
//       </div>

//       {/* Main Layout */}
//       <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 px-4 sm:px-6 lg:px-10 py-10">
//         {/* Billing Details */}
//         <div className="lg:col-span-2 bg-white p-6 shadow rounded-lg">
//           <h3 className="text-lg sm:text-xl font-semibold mb-6">Billing details</h3>
//           <form onSubmit={handlePlaceOrder} className="space-y-4">
//             <input
//               type="text"
//               name="name"
//               placeholder="Full Name"
//               value={formData.name}
//               onChange={handleChange}
//               required
//               className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
//             />
//             <textarea
//               name="address"
//               placeholder="Shipping Address"
//               value={formData.address}
//               onChange={handleChange}
//               required
//               className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
//             />
//             <input
//               type="text"
//               name="phone"
//               placeholder="Phone Number"
//               value={formData.phone}
//               onChange={handleChange}
//               required
//               className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
//             />

//             <div>
//               <label className="font-medium block mb-2">Payment Method</label>
//               <select
//                 name="paymentMethod"
//                 value={formData.paymentMethod}
//                 onChange={handleChange}
//                 className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
//               >
//                 <option value="cod">Cash on Delivery</option>
//                 <option value="online">Online Payment</option>
//               </select>
//             </div>

//             <button
//               type="submit"
//               disabled={loading}
//               className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition"
//             >
//               {loading ? "Placing Order..." : "Place Order"}
//             </button>
//           </form>
//         </div>

//         {/* Order Summary */}
//         <div className="bg-white p-6 shadow rounded-lg">
//           <h3 className="text-lg sm:text-xl font-semibold mb-6">Your order</h3>
//           <div className="space-y-4 max-h-96 overflow-y-auto">
//             {cartItems.length === 0 ? (
//               <p className="text-gray-500 text-center">Your cart is empty</p>
//             ) : (
//               cartItems.map((item, idx) => (
//                 <div
//                   key={`${item._id}-${item.selectedColor?.code}-${item.selectedSize}-${idx}`}
//                   className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3"
//                 >
//                   <div className="flex gap-3 w-full sm:w-auto">
//                     <img
//                       src={item.images[0]}
//                       alt={item.name}
//                       className="w-20 h-20 object-cover rounded"
//                     />
//                     <div className="flex flex-col">
//                       <p className="font-medium text-sm">{item.name}</p>
//                       <p className="text-xs text-gray-500">
//                         {item.selectedColor?.name} / {item.selectedSize}
//                       </p>
//                       <p className="text-xs text-gray-400">Qty: {item.quantity}</p>
//                     </div>
//                   </div>
//                   <p className="font-medium text-sm mt-2 sm:mt-0">
//                     ${(item.price * item.quantity).toFixed(2)}
//                   </p>
//                 </div>
//               ))
//             )}
//           </div>

//           {/* Discount */}
//           <div className="flex flex-col sm:flex-row mt-5">
//             <input
//               type="text"
//               placeholder="Discount code"
//               className="flex-1 border rounded-t-md sm:rounded-l-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
//             />
//             <button className="bg-black text-white px-4 py-2 rounded-b-md sm:rounded-r-md mt-2 sm:mt-0">
//               Apply
//             </button>
//           </div>

//           {/* Total */}
//           <div className="flex justify-between items-center mt-5 border-t pt-4 text-sm sm:text-base">
//             <p className="font-semibold">Total</p>
//             <p className="font-bold">${subtotal.toFixed(2)}</p>
//           </div>

//           {/* Payment Options */}
//           <div className="mt-6 space-y-2 text-sm sm:text-base">
//             <label className="flex items-center gap-2">
//               <input type="radio" name="payment" defaultChecked />
//               Direct bank transfer
//             </label>
//             <label className="flex items-center gap-2">
//               <input type="radio" name="payment" />
//               Cash on delivery
//             </label>
//           </div>

//           <p className="text-xs sm:text-sm text-gray-500 mt-4">
//             Your personal data will be used to process your order, support your
//             experience throughout this website, and for other purposes described
//             in our <a href="#" className="underline">privacy policy</a>.
//           </p>

//           <label className="flex items-center gap-2 mt-4 text-xs sm:text-sm">
//             <input type="checkbox" /> I have read and agree to the website{" "}
//             <a href="#" className="underline">terms and conditions</a>
//           </label>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Checkout;
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import API from "../../api/axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Checkout = () => {
  const [cartItems, setCartItems] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    phone: "",
    paymentMethod: "cod",
  });
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  // Load cart from localStorage
  useEffect(() => {
    const storedCart = localStorage.getItem("cartItems");
    if (storedCart) setCartItems(JSON.parse(storedCart));

    const handleStorageChange = () => {
      const updatedCart = localStorage.getItem("cartItems");
      if (updatedCart) setCartItems(JSON.parse(updatedCart));
      else setCartItems([]);
    };

    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePlaceOrder = async (e) => {
    e.preventDefault();
    if (cartItems.length === 0) {
      toast.error("Your cart is empty!"); // popup for empty cart
      return;
    }

    setLoading(true);
    try {
      const orderPayload = {
        ...formData,
        items: cartItems,
        total: subtotal,
      };

      await API.post("/orders", orderPayload);

      toast.success("Order placed successfully!"); // popup success
      localStorage.removeItem("cartItems"); // Clear cart after order
      navigate("/");
    } catch (error) {
      console.error("Error placing order:", error);
      toast.error("Failed to place order"); // popup error
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="flex flex-col items-center justify-center py-16 bg-gradient-to-r from-gray-50 via-red-50 to-gray-50 text-center">
        <h2 className="text-2xl sm:text-3xl font-semibold text-black mb-2">
          Check Out
        </h2>
      </div>

      {/* Main Layout */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 px-4 sm:px-6 lg:px-10 py-10">
        {/* Billing Details */}
        <div className="lg:col-span-2 bg-white p-6 shadow rounded-lg">
          <h3 className="text-lg sm:text-xl font-semibold mb-6">Billing details</h3>
          <form onSubmit={handlePlaceOrder} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            <textarea
              name="address"
              placeholder="Shipping Address"
              value={formData.address}
              onChange={handleChange}
              required
              className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
            />

            <div>
              <label className="font-medium block mb-2">Payment Method</label>
              <select
                name="paymentMethod"
                value={formData.paymentMethod}
                onChange={handleChange}
                className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
              >
                <option value="cod">Cash on Delivery</option>
                <option value="online">Online Payment</option>
              </select>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition"
            >
              {loading ? "Placing Order..." : "Place Order"}
            </button>
          </form>
        </div>

        {/* Order Summary */}
        <div className="bg-white p-6 shadow rounded-lg">
          <h3 className="text-lg sm:text-xl font-semibold mb-6">Your order</h3>
          <div className="space-y-4 max-h-96 overflow-y-auto">
            {cartItems.length === 0 ? (
              <p className="text-gray-500 text-center">Your cart is empty</p>
            ) : (
              cartItems.map((item, idx) => (
                <div
                  key={`${item._id}-${item.selectedColor?.code}-${item.selectedSize}-${idx}`}
                  className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3"
                >
                  <div className="flex gap-3 w-full sm:w-auto">
                    <img
                      src={item.images[0]}
                      alt={item.name}
                      className="w-20 h-20 object-cover rounded"
                    />
                    <div className="flex flex-col">
                      <p className="font-medium text-sm">{item.name}</p>
                      <p className="text-xs text-gray-500">
                        {item.selectedColor?.name} / {item.selectedSize}
                      </p>
                      <p className="text-xs text-gray-400">Qty: {item.quantity}</p>
                    </div>
                  </div>
                  <p className="font-medium text-sm mt-2 sm:mt-0">
                    ${(item.price * item.quantity).toFixed(2)}
                  </p>
                </div>
              ))
            )}
          </div>

          {/* Discount */}
          <div className="flex flex-col sm:flex-row mt-5">
            <input
              type="text"
              placeholder="Discount code"
              className="flex-1 border rounded-t-md sm:rounded-l-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            <button className="bg-black text-white px-4 py-2 rounded-b-md sm:rounded-r-md mt-2 sm:mt-0">
              Apply
            </button>
          </div>

          {/* Total */}
          <div className="flex justify-between items-center mt-5 border-t pt-4 text-sm sm:text-base">
            <p className="font-semibold">Total</p>
            <p className="font-bold">${subtotal.toFixed(2)}</p>
          </div>

          {/* Payment Options */}
          <div className="mt-6 space-y-2 text-sm sm:text-base">
            <label className="flex items-center gap-2">
              <input type="radio" name="payment" defaultChecked />
              Direct bank transfer
            </label>
            <label className="flex items-center gap-2">
              <input type="radio" name="payment" />
              Cash on delivery
            </label>
          </div>

          <p className="text-xs sm:text-sm text-gray-500 mt-4">
            Your personal data will be used to process your order, support your
            experience throughout this website, and for other purposes described
            in our <a href="#" className="underline">privacy policy</a>.
          </p>

          <label className="flex items-center gap-2 mt-4 text-xs sm:text-sm">
            <input type="checkbox" /> I have read and agree to the website{" "}
            <a href="#" className="underline">terms and conditions</a>
          </label>
        </div>
      </div>

      {/* Toast Container */}
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </div>
  );
};

export default Checkout;
