// // // import React, { useState, useEffect } from "react";
// // // import { useQuery } from "@tanstack/react-query";
// // // import { fetchProducts } from "../../api/productApi";
// // // import { useParams } from "react-router-dom";
// // // import { FaAngleRight, FaMinus, FaPlus } from "react-icons/fa6";
// // // import { HiArrowsRightLeft } from "react-icons/hi2";
// // // import { CiDeliveryTruck, CiHeart } from "react-icons/ci";
// // // import { BsPatchQuestionFill } from "react-icons/bs";
// // // import { IoShareSocialOutline } from "react-icons/io5";
// // // import CartSidebar from "./CartSidebar";

// // // const ProductDetails = () => {
// // //   const { id } = useParams();
// // //   const { data: products = [], isLoading } = useQuery({
// // //     queryKey: ["products"],
// // //     queryFn: fetchProducts,
// // //   });

// // //   const product = id
// // //     ? products.find((p) => p._id === id)
// // //     : products[products.length - 1];

// // //   const [isCartOpen, setIsCartOpen] = useState(false);
// // //   const [quantity, setQuantity] = useState(1);
// // //   const [selectedSize, setSelectedSize] = useState("");
// // //   const [selectedColor, setSelectedColor] = useState(null);

// // //   useEffect(() => {
// // //     if (product) {
// // //       if (!selectedSize && product.sizes?.length > 0)
// // //         setSelectedSize(product.sizes[0]);
// // //       if (!selectedColor && product.colors?.length > 0)
// // //         setSelectedColor(product.colors[0]);
// // //     }
// // //   }, [product]);

// // //   if (isLoading) return <p>Loading...</p>;
// // //   if (!product) return <p>No product found</p>;

// // //   const totalPrice = product.price * quantity;

// // //   return (
// // //     <div className="container mx-auto px-4 py-7">
// // //       {/* Breadcrumbs */}
// // //       <div className="flex gap-1 p-5">
// // //         <p>Home</p>
// // //         <FaAngleRight className="mt-1" />
// // //         <p>{product.categoryone}</p>
// // //         <FaAngleRight className="mt-1" />
// // //         <p>{product.name}</p>
// // //       </div>

// // //       <div className="grid grid-col-1 md:grid-cols-2">
// // //         {/* Images */}
// // //         <div className="flex-col md:flex md:flex-row p-5 gap-1 w-full">
// // //           <div className="w-[100%] md:w-[80%]">
// // //             <img
// // //               src={product.images[0]}
// // //               alt={product.name}
// // //               className="rounded-lg w-full h-[400px] md:h-[500px]"
// // //             />
// // //           </div>
// // //           <div className="flex flex-row md:flex-col mt-5 md:my-0 gap-1 w-[20%]">
// // //             {product.images.slice(1).map((img, idx) => (
// // //               <img
// // //                 key={idx}
// // //                 src={img}
// // //                 alt={`Product image ${idx + 1}`}
// // //                 className="rounded-lg"
// // //               />
// // //             ))}
// // //           </div>
// // //         </div>

// // //         {/* Details */}
// // //         <div className="p-5">
// // //           <h2 className="text-3xl font-semibold py-1">{product.name}</h2>
// // //           <h2 className="text-xl text-gray-700 py-1">{product.description}</h2>
// // //           <h2 className="text-xl  py-1">{product.brand}</h2>

// // //           <p className="text-2xl py-1">${product.price}</p>

// // //           {/* Colors */}
// // //           <p className="py-1">
// // //             Color: <span className="font-semibold">{selectedColor?.name}</span>
// // //           </p>
// // //           <p className="flex gap-2 py-1">
// // //             {product.colors &&
// // //               product.colors.map((color, idx) => (
// // //                 <span
// // //                   key={idx}
// // //                   className={`w-8 h-8 rounded-full border-2 cursor-pointer flex items-center justify-center ${
// // //                     selectedColor?.code === color.code
// // //                       ? "border-black"
// // //                       : "border-gray-400"
// // //                   }`}
// // //                   style={{ background: color.code }}
// // //                   onClick={() => setSelectedColor(color)}
// // //                   title={color.name}
// // //                 />
// // //               ))}
// // //           </p>

// // //           {/* Sizes */}
// // //           <p className="py-1">
// // //             Size: <span className="font-semibold">{selectedSize}</span>
// // //           </p>
// // //           <p className="flex gap-2">
// // //             {product.sizes &&
// // //               product.sizes.map((size, idx) => (
// // //                 <span
// // //                   key={idx}
// // //                   className={`py-1 px-2 text-lg rounded cursor-pointer ${
// // //                     selectedSize === size
// // //                       ? "bg-black text-white"
// // //                       : "bg-gray-200 text-black"
// // //                   }`}
// // //                   onClick={() => setSelectedSize(size)}
// // //                 >
// // //                   {size}
// // //                 </span>
// // //               ))}
// // //           </p>

// // //           {/* Quantity */}
// // //           <p className="py-2 font-semibold">Quantity</p>
// // //           <div className="bg-gray-200 flex items-center justify-between w-[120px] px-3 py-2 rounded">
// // //             <FaMinus
// // //               className="cursor-pointer"
// // //               onClick={() => setQuantity((q) => Math.max(1, q - 1))}
// // //             />
// // //             <p>{quantity}</p>
// // //             <FaPlus
// // //               className="cursor-pointer"
// // //               onClick={() => setQuantity((q) => q + 1)}
// // //             />
// // //           </div>

// // //           {/* Add to Cart */}
// // //           <div className="py-2">
// // //             <div className="flex justify-between">
// // //               <div className="w-[80%]">
// // //                 <p
// // //                   className="bg-black hover:bg-gray-900 duration-500 text-white py-2 text-xl text-center cursor-pointer"
// // //                   onClick={() => setIsCartOpen(true)}
// // //                 >
// // //                   Add to Cart - ${totalPrice}
// // //                 </p>
// // //                 <CartSidebar
// // //                   isOpen={isCartOpen}
// // //                   onClose={() => setIsCartOpen(false)}
// // //                   product={{
// // //                     ...product,
// // //                     selectedSize,
// // //                     selectedColor,
// // //                     quantity,
// // //                   }}
// // //                 />
// // //               </div>
// // //               <CiHeart className="text-4xl border border-gray-400 rounded-full p-1 mt-1 cursor-pointer" />
// // //               <HiArrowsRightLeft className="text-4xl border border-gray-400 rounded-full cursor-pointer mt-1 p-1" />
// // //             </div>

// // //             <p className="bg-yellow-500 py-2 text-lg flex justify-center gap-2 my-2">
// // //               Buy With{" "}
// // //               <img
// // //                 src="https://themesflat.co/html/ecomus/images/payments/paypal.png"
// // //                 alt=""
// // //               />
// // //             </p>
// // //             <p className="text-center text-gray-600 underline">
// // //               More Payment Option
// // //             </p>
// // //           </div>

// // //           {/* Extra Info */}
// // //           <div className="grid grid-cols-2 md:grid-cols-4 py-2 justify-between">
// // //             <div className="flex gap-1">
// // //               {" "}
// // //               <img
// // //                 src="https://themesflat.co/html/ecomus/images/item/compare.svg"
// // //                 alt=""
// // //               />
// // //               <p>Compare color</p>
// // //             </div>
// // //             <div className="flex gap-1">
// // //               <BsPatchQuestionFill className="mt-1" />
// // //               <p>Ask a question</p>
// // //             </div>
// // //             <div className="flex gap-1">
// // //               <CiDeliveryTruck className="mt-1" />
// // //               <p>Delivery & Return</p>
// // //             </div>
// // //             <div className="flex gap-1">
// // //               <IoShareSocialOutline className="mt-1" />
// // //               <p>Share</p>
// // //             </div>
// // //           </div>

// // //           <div className="flex gap-5 my-2 py-2">
// // //             <div className="p-5 border border-gray-500">
// // //               <p className="text-center">
// // //                 Estimate delivery times: 12-26 days (International), 3-6 days
// // //                 (United States).
// // //               </p>
// // //             </div>
// // //             <div className="p-5 border border-gray-500">
// // //               <p className="text-center">
// // //                 Return within 30 days of purchase. Duties & taxes are
// // //                 non-refundable.
// // //               </p>
// // //             </div>
// // //           </div>
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default ProductDetai

// import React, { useState, useEffect } from "react";
// import { useQuery } from "@tanstack/react-query";
// import { fetchProducts } from "../../api/productApi";
// import { useParams } from "react-router-dom";
// import { FaAngleRight, FaMinus, FaPlus } from "react-icons/fa6";
// import { HiArrowsRightLeft } from "react-icons/hi2";
// import { CiDeliveryTruck, CiHeart } from "react-icons/ci";
// import { BsPatchQuestionFill } from "react-icons/bs";
// import { IoShareSocialOutline } from "react-icons/io5";
// import CartSidebar from "./CartSidebar";

// const ProductDetails = () => {
//   const { id } = useParams();
//   const { data: products = [], isLoading } = useQuery({
//     queryKey: ["products"],
//     queryFn: fetchProducts,
//   });

//   const product = id
//     ? products.find((p) => p._id === id)
//     : products[products.length - 1];

//   const [isCartOpen, setIsCartOpen] = useState(false);
//   const [cartItems, setCartItems] = useState([]);
//   const [quantity, setQuantity] = useState(1);
//   const [selectedSize, setSelectedSize] = useState("");
//   const [selectedColor, setSelectedColor] = useState(null);

//   // Load cart from localStorage
//   useEffect(() => {
//     const storedCart = localStorage.getItem("cartItems");
//     if (storedCart) setCartItems(JSON.parse(storedCart));
//   }, []);

//   // Save cart to localStorage on update
//   useEffect(() => {
//     localStorage.setItem("cartItems", JSON.stringify(cartItems));
//   }, [cartItems]);

//   // Set default size and color
//   useEffect(() => {
//     if (product) {
//       if (!selectedSize && product.sizes?.length > 0) setSelectedSize(product.sizes[0]);
//       if (!selectedColor && product.colors?.length > 0) setSelectedColor(product.colors[0]);
//     }
//   }, [product]);

//   if (isLoading) return <p>Loading...</p>;
//   if (!product) return <p>No product found</p>;

//   const totalPrice = product.price * quantity;

//   const addToCart = () => {
//     const cartProduct = {
//       ...product,
//       selectedSize,
//       selectedColor,
//       quantity,
//     };

//     setCartItems((prev) => {
//       const existing = prev.find(
//         (item) =>
//           item._id === cartProduct._id &&
//           item.selectedSize === cartProduct.selectedSize &&
//           item.selectedColor?.code === cartProduct.selectedColor?.code
//       );

//       if (existing) {
//         return prev.map((item) =>
//           item === existing ? { ...item, quantity: item.quantity + cartProduct.quantity } : item
//         );
//       } else {
//         return [...prev, cartProduct];
//       }
//     });

//     setIsCartOpen(true);
//   };

//   return (
//     <div className="container mx-auto px-4 py-7">
//       {/* Breadcrumb */}
//       <div className="flex gap-1 p-5">
//         <p>Home</p>
//         <FaAngleRight className="mt-1" />
//         <p>{product.categoryone}</p>
//         <FaAngleRight className="mt-1" />
//         <p>{product.name}</p>
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
//         {/* Images */}
//         <div className="flex flex-col md:flex-row gap-3 p-5">
//           <div className="w-full md:w-4/5">
//             <img
//               src={product.images[0]}
//               alt={product.name}
//               className="rounded-lg w-full h-[400px] md:h-[500px] object-cover"
//             />
//           </div>
//           <div className="flex flex-row md:flex-col gap-2 mt-5 md:mt-0 w-full md:w-1/5">
//             {product.images.slice(1).map((img, idx) => (
//               <img
//                 key={idx}
//                 src={img}
//                 alt={`Product image ${idx + 1}`}
//                 className="rounded-lg object-cover"
//               />
//             ))}
//           </div>
//         </div>

//         {/* Details */}
//         <div className="p-5 flex flex-col gap-3">
//           <h2 className="text-3xl font-semibold">{product.name}</h2>
//           <p className="text-xl text-gray-700">{product.description}</p>
//           <p className="text-xl">{product.brand}</p>
//           <p className="text-2xl font-bold">${product.price}</p>

//           {/* Colors */}
//           <p>Color: <span className="font-semibold">{selectedColor?.name}</span></p>
//           <div className="flex gap-2 py-1">
//             {product.colors?.map((color, idx) => (
//               <span
//                 key={idx}
//                 className={`w-8 h-8 rounded-full border-2 cursor-pointer flex items-center justify-center ${
//                   selectedColor?.code === color.code ? "border-black" : "border-gray-400"
//                 }`}
//                 style={{ background: color.code }}
//                 onClick={() => setSelectedColor(color)}
//                 title={color.name}
//               />
//             ))}
//           </div>

//           {/* Sizes */}
//           <p>Size: <span className="font-semibold">{selectedSize}</span></p>
//           <div className="flex gap-2">
//             {product.sizes?.map((size, idx) => (
//               <span
//                 key={idx}
//                 className={`py-1 px-2 text-lg rounded cursor-pointer ${
//                   selectedSize === size ? "bg-black text-white" : "bg-gray-200 text-black"
//                 }`}
//                 onClick={() => setSelectedSize(size)}
//               >
//                 {size}
//               </span>
//             ))}
//           </div>

//           {/* Quantity */}
//           <p className="py-2 font-semibold">Quantity</p>
//           <div className="bg-gray-200 flex items-center justify-between w-[120px] px-3 py-2 rounded">
//             <FaMinus className="cursor-pointer" onClick={() => setQuantity(q => Math.max(1, q - 1))} />
//             <p>{quantity}</p>
//             <FaPlus className="cursor-pointer" onClick={() => setQuantity(q => q + 1)} />
//           </div>

//           {/* Add to Cart */}
//           <div className="py-2 flex flex-col gap-2">
//             <button
//               className="bg-black hover:bg-gray-900 text-white py-2 px-4 text-xl w-full"
//               onClick={addToCart}
//             >
//               Add to Cart - ${totalPrice}
//             </button>

//             <CartSidebar
//               isOpen={isCartOpen}
//               onClose={() => setIsCartOpen(false)}
//               cartItems={cartItems}
//               setCartItems={setCartItems}
//             />

//             <p className="bg-yellow-500 py-2 text-lg flex justify-center gap-2">
//               Buy With{" "}
//               <img
//                 src="https://themesflat.co/html/ecomus/images/payments/paypal.png"
//                 alt="paypal"
//               />
//             </p>
//             <p className="text-center text-gray-600 underline">More Payment Option</p>
//           </div>

//           {/* Extra Info */}
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-3 py-2">
//             <div className="flex gap-1 items-center">
//               <img src="https://themesflat.co/html/ecomus/images/item/compare.svg" alt="Compare" />
//               <p>Compare color</p>
//             </div>
//             <div className="flex gap-1 items-center">
//               <BsPatchQuestionFill className="mt-1" />
//               <p>Ask a question</p>
//             </div>
//             <div className="flex gap-1 items-center">
//               <CiDeliveryTruck className="mt-1" />
//               <p>Delivery & Return</p>
//             </div>
//             <div className="flex gap-1 items-center">
//               <IoShareSocialOutline className="mt-1" />
//               <p>Share</p>
//             </div>
//           </div>

//           <div className="flex flex-col md:flex-row gap-5 my-2 py-2">
//             <div className="p-5 border border-gray-500 flex-1 text-center">
//               Estimate delivery times: 12-26 days (International), 3-6 days (United States).
//             </div>
//             <div className="p-5 border border-gray-500 flex-1 text-center">
//               Return within 30 days of purchase. Duties & taxes are non-refundable.
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductDetails;
import React, { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchProducts } from "../../api/productApi";
import { useParams } from "react-router-dom";
import { FaAngleRight, FaMinus, FaPlus } from "react-icons/fa6";
import { HiArrowsRightLeft } from "react-icons/hi2";
import { CiDeliveryTruck, CiHeart } from "react-icons/ci";
import { BsPatchQuestionFill } from "react-icons/bs";
import { IoShareSocialOutline } from "react-icons/io5";
import CartSidebar from "./CartSidebar";

const ProductDetails = () => {
  const { id } = useParams();
  const { data: products = [], isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });

  // ✅ Fixed _id comparison
  const product = id
    ? products.find((p) => p._id.toString() === id)
    : products[products.length - 1];

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState(null);

  // Load cart from localStorage
  useEffect(() => {
    const storedCart = localStorage.getItem("cartItems");
    if (storedCart) setCartItems(JSON.parse(storedCart));
  }, []);

  // Save cart to localStorage on update
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  // Set default size and color
  useEffect(() => {
    if (product) {
      if (!selectedSize && product.sizes?.length > 0) setSelectedSize(product.sizes[0]);
      if (!selectedColor && product.colors?.length > 0) setSelectedColor(product.colors[0]);
    }
  }, [product]);

  if (isLoading) return <p>Loading...</p>;
  if (!product) return <p>No product found</p>;

  const totalPrice = product.price * quantity;

  const addToCart = () => {
    const cartProduct = {
      ...product,
      selectedSize,
      selectedColor,
      quantity,
    };

    setCartItems((prev) => {
      const existing = prev.find(
        (item) =>
          item._id === cartProduct._id &&
          item.selectedSize === cartProduct.selectedSize &&
          item.selectedColor?.code === cartProduct.selectedColor?.code
      );

      if (existing) {
        return prev.map((item) =>
          item === existing ? { ...item, quantity: item.quantity + cartProduct.quantity } : item
        );
      } else {
        return [...prev, cartProduct];
      }
    });

    setIsCartOpen(true);
  };

  return (
    <div className="container mx-auto px-4 py-7">
      {/* Breadcrumb */}
      <div className="flex gap-1 p-5">
        <p>Home</p>
        <FaAngleRight className="mt-1" />
        <p>{product.categoryone}</p>
        <FaAngleRight className="mt-1" />
        <p>{product.name}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {/* Images */}
        <div className="flex flex-col md:flex-row gap-3 p-5">
          <div className="w-full md:w-4/5">
            <img
              src={product.images[0]}
              alt={product.name}
              className="rounded-lg w-full h-[400px] md:h-[500px] object-cover"
            />
          </div>
          <div className="flex flex-row md:flex-col gap-2 mt-5 md:mt-0 w-full md:w-1/5">
            {product.images.slice(1).map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt={`Product image ${idx + 1}`}
                className="rounded-lg object-cover"
              />
            ))}
          </div>
        </div>

        {/* Details */}
        <div className="p-5 flex flex-col gap-3">
          <h2 className="text-3xl font-semibold">{product.name}</h2>
          <p className="text-xl text-gray-700">{product.description}</p>
          <p className="text-xl">{product.brand}</p>
          <p className="text-2xl font-bold">${product.price}</p>

          {/* Colors */}
          <p>Color: <span className="font-semibold">{selectedColor?.name}</span></p>
          <div className="flex gap-2 py-1">
            {product.colors?.map((color, idx) => (
              <span
                key={idx}
                className={`w-8 h-8 rounded-full border-2 cursor-pointer flex items-center justify-center ${
                  selectedColor?.code === color.code ? "border-black" : "border-gray-400"
                }`}
                style={{ background: color.code }}
                onClick={() => setSelectedColor(color)}
                title={color.name}
              />
            ))}
          </div>

          {/* Sizes */}
          <p>Size: <span className="font-semibold">{selectedSize}</span></p>
          <div className="flex gap-2">
            {product.sizes?.map((size, idx) => (
              <span
                key={idx}
                className={`py-1 px-2 text-lg rounded cursor-pointer ${
                  selectedSize === size ? "bg-black text-white" : "bg-gray-200 text-black"
                }`}
                onClick={() => setSelectedSize(size)}
              >
                {size}
              </span>
            ))}
          </div>

          {/* Quantity */}
          <p className="py-2 font-semibold">Quantity</p>
          <div className="bg-gray-200 flex items-center justify-between w-[120px] px-3 py-2 rounded">
            <FaMinus className="cursor-pointer" onClick={() => setQuantity(q => Math.max(1, q - 1))} />
            <p>{quantity}</p>
            <FaPlus className="cursor-pointer" onClick={() => setQuantity(q => q + 1)} />
          </div>

          {/* Add to Cart */}
          <div className="py-2 flex flex-col gap-2">
            <button
              className="bg-black hover:bg-gray-900 text-white py-2 px-4 text-xl w-full"
              onClick={addToCart}
            >
              Add to Cart - ${totalPrice}
            </button>

            <CartSidebar
              isOpen={isCartOpen}
              onClose={() => setIsCartOpen(false)}
              cartItems={cartItems}
              setCartItems={setCartItems}
            />

            <p className="bg-yellow-500 py-2 text-lg flex justify-center gap-2">
              Buy With{" "}
              <img
                src="https://themesflat.co/html/ecomus/images/payments/paypal.png"
                alt="paypal"
              />
            </p>
            <p className="text-center text-gray-600 underline">More Payment Option</p>
          </div>

          {/* Extra Info */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 py-2">
            <div className="flex gap-1 items-center">
              <img src="https://themesflat.co/html/ecomus/images/item/compare.svg" alt="Compare" />
              <p>Compare color</p>
            </div>
            <div className="flex gap-1 items-center">
              <BsPatchQuestionFill className="mt-1" />
              <p>Ask a question</p>
            </div>
            <div className="flex gap-1 items-center">
              <CiDeliveryTruck className="mt-1" />
              <p>Delivery & Return</p>
            </div>
            <div className="flex gap-1 items-center">
              <IoShareSocialOutline className="mt-1" />
              <p>Share</p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-5 my-2 py-2">
            <div className="p-5 border border-gray-500 flex-1 text-center">
              Estimate delivery times: 12-26 days (International), 3-6 days (United States).
            </div>
            <div className="p-5 border border-gray-500 flex-1 text-center">
              Return within 30 days of purchase. Duties & taxes are non-refundable.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
