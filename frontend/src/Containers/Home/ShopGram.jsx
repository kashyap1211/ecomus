// import React, { useState } from "react";
// import { FaCartPlus } from "react-icons/fa";
// import { LiaShippingFastSolid } from "react-icons/lia";
// import { MdOutlineSupportAgent, MdPayments } from "react-icons/md";
// import { IoIosReturnLeft } from "react-icons/io";
// import ShopGramModel from "./ShopGramModal";

// const ShopGram = () => {
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [selectedProduct, setSelectedProduct] = useState(null);

//   const shopgram = [
//     {
//       title: "Ribbed Tank Top",
//       price: 18.0,
//       image: "https://themesflat.co/html/ecomus/images/shop/gallery/gallery-7.jpg",
//     },
//     {
//       title: "Casual Shirt",
//       price: 25.0,
//       image: "https://themesflat.co/html/ecomus/images/shop/gallery/gallery-3.jpg",
//     },
//     {
//       title: "Summer Dress",
//       price: 35.0,
//       image: "https://themesflat.co/html/ecomus/images/shop/gallery/gallery-8.jpg",
//     },
//     {
//       title: "Cool Jacket",
//       price: 50.0,
//       image: "https://themesflat.co/html/ecomus/images/shop/gallery/gallery-6.jpg",
//     },
//     {
//       title: "Basic Tee",
//       price: 15.0,
//       image: "https://themesflat.co/html/ecomus/images/shop/gallery/gallery-5.jpg",
//     },
//   ];

//   const features = [
//     {
//       icon: <LiaShippingFastSolid />,
//       title: "Free Shipping",
//       desc: "Free shipping over order $120",
//     },
//     {
//       icon: <MdPayments />,
//       title: "Flexible Payment",
//       desc: "Pay with Multiple Credit Cards",
//     },
//     {
//       icon: <IoIosReturnLeft />,
//       title: "14 Day Returns",
//       desc: "Within 30 days for an exchange",
//     },
//     {
//       icon: <MdOutlineSupportAgent />,
//       title: "Premium Support",
//       desc: "Outstanding premium support",
//     },
//   ];

//   return (
//     <div className="container mx-auto px-4 py-7">
//       <div>
//         <p className="text-2xl text-center font-semibold md:text-4xl py-3">
//           Shop Gram
//         </p>
//         <p className="text-xl text-center py-3">
//           Inspire and let yourself be inspired, from one unique fashion to another.
//         </p>
//       </div>

//       <div className="grid grid-col-1 md:grid-cols-5 gap-2 py-5">
//         {shopgram.map((item, index) => (
//           <div
//             key={index}
//             className="relative group overflow-hidden rounded-lg cursor-pointer"
//           >
//             {/* Product Image */}
//             <img
//               src={item.image}
//               alt=""
//               className="w-full h-auto transform transition-transform duration-500 group-hover:scale-110"
//             />

//             {/* Overlay */}
//             <div
//               onClick={() => {
//                 setSelectedProduct(item);
//                 setIsModalOpen(true);
//               }}
//               className="absolute inset-0 bg-black/40 z-40 flex gap-2 items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500"
//             >
//               {/* Quick Add Icon */}
//               <FaCartPlus className="text-white text-3xl" />
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Features */}
//       <div className="grid grid-cols-1 gap-5  md:grid-cols-4">
//         {features.map((item, index) => (
//           <div
//             key={index}
//             className="flex flex-col items-center justify-center border rounded-2xl border-gray-500 p-4 text-center"
//           >
//             <p className="text-5xl py-2">{item.icon}</p>
//             <p className="text-2xl py-2 font-semibold">{item.title}</p>
//             <p className="text-xl py-2 text-gray-600">{item.desc}</p>
//           </div>
//         ))}
//       </div>

//       {/* Modal */}
//       <ShopGramModel
//         isOpen={isModalOpen}
//         onClose={() => setIsModalOpen(false)}
//         product={selectedProduct || {}}
//       />
//     </div>
//   );
// };

// export default ShopGram;
import React, { useState } from "react";
import { FaCartPlus } from "react-icons/fa";
import { LiaShippingFastSolid } from "react-icons/lia";
import { MdOutlineSupportAgent, MdPayments } from "react-icons/md";
import { IoIosReturnLeft } from "react-icons/io";
import ShopGramModel from "./ShopGramModal";
import { useQuery } from "@tanstack/react-query";
import { fetchShopGram } from "../../api/shopGramApi";

const ShopGram = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  // ✅ Fetch from backend
  const { data: shopgram = [], isLoading } = useQuery({
    queryKey: ["shopgram"],
    queryFn: fetchShopGram,
  });

  const features = [
    {
      icon: <LiaShippingFastSolid />,
      title: "Free Shipping",
      desc: "Free shipping over order $120",
    },
    {
      icon: <MdPayments />,
      title: "Flexible Payment",
      desc: "Pay with Multiple Credit Cards",
    },
    {
      icon: <IoIosReturnLeft />,
      title: "14 Day Returns",
      desc: "Within 30 days for an exchange",
    },
    {
      icon: <MdOutlineSupportAgent />,
      title: "Premium Support",
      desc: "Outstanding premium support",
    },
  ];

  if (isLoading) return <p>Loading products...</p>;

  return (
    <div className="container mx-auto px-4 py-7">
      <div>
        <p className="text-2xl text-center font-semibold md:text-4xl py-3">
          Shop Gram
        </p>
        <p className="text-xl text-center py-3">
          Inspire and let yourself be inspired, from one unique fashion to another.
        </p>
      </div>

      {/* Products */}
      <div className="grid grid-col-1 md:grid-cols-5 gap-2 py-5">
        {shopgram.map((item, index) => (
          <div
            key={index}
            className="relative group overflow-hidden rounded-lg cursor-pointer"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-auto transform transition-transform duration-500 group-hover:scale-110"
            />
            <div
              onClick={() => {
                setSelectedProduct(item);
                setIsModalOpen(true);
              }}
              className="absolute inset-0 bg-black/40 z-40 flex gap-2 items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            >
              <FaCartPlus className="text-white text-3xl" />
            </div>
          </div>
        ))}
      </div>

      {/* Features */}
      <div className="grid grid-cols-1 gap-5 md:grid-cols-4">
        {features.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center border rounded-2xl border-gray-500 p-4 text-center"
          >
            <p className="text-5xl py-2">{item.icon}</p>
            <p className="text-2xl py-2 font-semibold">{item.title}</p>
            <p className="text-xl py-2 text-gray-600">{item.desc}</p>
          </div>
        ))}
      </div>

      {/* Modal */}
      <ShopGramModel
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        product={selectedProduct || {}}
      />
    </div>
  );
};

export default ShopGram;
