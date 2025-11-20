// import React, { useState } from "react";
// import { useQuery } from "@tanstack/react-query";
// import { fetchProducts } from "../../api/productApi";
// import FilterSidebar from "../../Containers/Shop/FilterSidebar";
// import SortDropdown from "../../Containers/Shop/SortDropdown";
// import { FaHeart, FaEye, FaShoppingBag, FaTimes, FaFilter } from "react-icons/fa";
// import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";

// const ShopMain = () => {
//   const [filters, setFilters] = useState({});
//   const [isFilterOpen, setIsFilterOpen] = useState(false);
//   const [currentPage, setCurrentPage] = useState(1);
//   const productsPerPage = 10;

//   const { data: products = [], isLoading } = useQuery({
//     queryKey: ["products", filters],
//     queryFn: () => fetchProducts(filters),
//   });

//   // Pagination logic
//   const indexOfLastProduct = currentPage * productsPerPage;
//   const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
//   const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);
//   const totalPages = Math.ceil(products.length / productsPerPage);

//   return (
//     <div>
//       {/* Hero Section */}
//       <div className="flex flex-col items-center justify-center py-20 bg-gradient-to-r from-gray-50 via-red-50 to-gray-50 text-center">
//         <h2 className="text-3xl font-semibold text-black mb-2">New Arrival</h2>
//         <p className="text-gray-600">Shop through our latest selection of Fashion</p>
//       </div>

//       {/* Shop Content */}
//       <div className="container px-4 mx-auto py-7">
//         {/* Filter & Sort */}
//         <div className="flex justify-between">
//           <p
//             className="flex gap-3 border border-gray-400 p-2 rounded text-xl cursor-pointer"
//             onClick={() => setIsFilterOpen(true)}
//           >
//             <span>
//               <FaFilter className="text-2xl mt-1 text-gray-500" />
//             </span>{" "}
//             Filter
//           </p>

//           <FilterSidebar
//             isOpen={isFilterOpen}
//             onClose={() => setIsFilterOpen(false)}
//             setFilters={setFilters}
//           />

//           <SortDropdown />
//         </div>

//         {/* Product Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-4 gap-5 py-7">
//           {isLoading ? (
//             <p>Loading...</p>
//           ) : currentProducts.length > 0 ? (
//             currentProducts.map((product) => (
//               <ProductHoverCard key={product._id} product={product} />
//             ))
//           ) : (
//             <p>No products found</p>
//           )}
//         </div>

//         {/* Pagination */}
//         <div className="flex justify-center gap-2 mt-5">
//           <button
//             className="px-3 py-1 border rounded"
//             onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
//           >
//             <FaAngleLeft />
//           </button>

//           {Array.from({ length: totalPages }, (_, idx) => (
//             <button
//               key={idx + 1}
//               className={`px-3 py-1 border rounded ${
//                 currentPage === idx + 1 ? "bg-gray-300" : ""
//               }`}
//               onClick={() => setCurrentPage(idx + 1)}
//             >
//               {idx + 1}
//             </button>
//           ))}

//           <button
//             className="px-3 py-1 border rounded"
//             onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
//           >
//             <FaAngleRight />
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// // 🔹 Inline Product Card with Hover Effect
// const ProductHoverCard = ({ product }) => {
//   const [hovered, setHovered] = useState(false);

//   return (
//     <div
//       className="rounded-2xl p-3 relative group transition hover:shadow-lg"
//       onMouseEnter={() => setHovered(true)}
//       onMouseLeave={() => setHovered(false)}
//     >
//       {/* Product Image */}
//       <div className="relative w-full overflow-hidden rounded-xl">
//         <img
//           src={hovered && product.images[1] ? product.images[1] : product.images[0]}
//           alt={product.name}
//           className="w-full h-[300px] object-cover"
//         />

//         {/* Hover Actions */}
//         {hovered && (
//           <div className="absolute inset-0 bg-black/30 flex flex-col items-center justify-center gap-3">
//             {/* Action Buttons */}
//             <div className="flex gap-3">
//               <button className="bg-white p-2 rounded-full shadow hover:bg-gray-100">
//                 <FaShoppingBag />
//               </button>
//               <button className="bg-white p-2 rounded-full shadow hover:bg-gray-100">
//                 <FaHeart />
//               </button>
//               <button className="bg-white p-2 rounded-full shadow hover:bg-gray-100">
//                 <FaTimes />
//               </button>
//               <button className="bg-white p-2 rounded-full shadow hover:bg-gray-100">
//                 <FaEye />
//               </button>
//             </div>

//             {/* Sizes */}
//             <div className="flex gap-2 mt-2 text-white font-medium">
//               {product.sizes?.map((size) => (
//                 <span
//                   key={size}
//                   className="px-2 py-1 border border-white rounded cursor-pointer hover:bg-white hover:text-black transition"
//                 >
//                   {size}
//                 </span>
//               ))}
//             </div>
//           </div>
//         )}
//       </div>

//       {/* Product Info */}
//       <p className="py-1 font-medium">{product.name}</p>
//       <p className="font-semibold">${product.price}</p>

//       {/* Colors */}
//       <div className="flex items-center gap-2 py-2">
//         {product.colors?.map((colorObj, idx) => (
//           <span
//             key={idx}
//             className="w-5 h-5 rounded-full border-2 border-gray-300 cursor-pointer"
//             style={{ backgroundColor: colorObj.code || "gray" }}
//             title={colorObj.name}
//           ></span>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ShopMain;
import React, { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchProducts } from "../../api/productApi";
import FilterSidebar from "../../Containers/Shop/FilterSidebar";
import SortDropdown from "../../Containers/Shop/SortDropdown";
import {
  FaHeart,
  FaEye,
  FaShoppingBag,
  FaTimes,
  FaFilter,
} from "react-icons/fa";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import { useNavigate, useSearchParams } from "react-router-dom";

const ShopMain = () => {
  const [filters, setFilters] = useState({});
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 10;

  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  // 🔹 Convert URL searchParams → filters
  const getFiltersFromParams = () => {
    const paramsFilters = {};
    if (searchParams.get("categoryone"))
      paramsFilters.categories = searchParams.get("categoryone").split(",");
    if (searchParams.get("brand"))
      paramsFilters.brands = searchParams.get("brand").split(",");
    if (searchParams.get("color"))
      paramsFilters.colors = searchParams.get("color").split(",");
    if (searchParams.get("size"))
      paramsFilters.sizes = searchParams.get("size").split(",");
    if (searchParams.get("availability"))
      paramsFilters.availability = searchParams.get("availability");
    if (searchParams.get("minPrice") && searchParams.get("maxPrice"))
      paramsFilters.priceRange = {
        min: Number(searchParams.get("minPrice")),
        max: Number(searchParams.get("maxPrice")),
      };
    return paramsFilters;
  };

  // 🔹 Initialize filters from URL on page load
  useEffect(() => {
    const initialFilters = getFiltersFromParams();
    setFilters(initialFilters);
  }, []);

  // 🔹 Fetch products whenever filters change
  const { data: products = [], isLoading, error } = useQuery({
    queryKey: ["products", filters],
    queryFn: () => fetchProducts(filters),
    retry: 1,
    refetchOnWindowFocus: false,
    staleTime: 0, // Always refetch
    cacheTime: 0, // Don't cache empty results
  });

  // Log products and errors for debugging
  useEffect(() => {
    console.log("ShopMain - Products:", products);
    console.log("ShopMain - Products count:", products.length);
    console.log("ShopMain - Loading:", isLoading);
    console.log("ShopMain - Error:", error);
    if (error) {
      console.error("❌ ShopMain - Error fetching products:", error);
    }
  }, [products, isLoading, error]);

  // Pagination logic
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);
  const totalPages = Math.ceil(products.length / productsPerPage);

  // 🔹 Update filters + URL when applied
  const handleApplyFilters = (selectedFilters) => {
    setFilters(selectedFilters);

    const params = {};
    if (selectedFilters.categories?.length)
      params.categoryone = selectedFilters.categories.join(",");
    if (selectedFilters.brands?.length)
      params.brand = selectedFilters.brands.join(",");
    if (selectedFilters.colors?.length)
      params.color = selectedFilters.colors.join(",");
    if (selectedFilters.sizes?.length)
      params.size = selectedFilters.sizes.join(",");
    if (selectedFilters.availability)
      params.availability = selectedFilters.availability;
    if (
      selectedFilters.priceRange?.min !== undefined &&
      selectedFilters.priceRange?.max !== undefined
    ) {
      params.minPrice = selectedFilters.priceRange.min;
      params.maxPrice = selectedFilters.priceRange.max;
    }

    setSearchParams(params); // ✅ Update the URL
  };

  return (
    <div>
      {/* Hero Section */}
      <div className="flex flex-col items-center justify-center py-20 bg-gradient-to-r from-gray-50 via-red-50 to-gray-50 text-center">
        <h2 className="text-3xl font-semibold text-black mb-2">New Arrival</h2>
        <p className="text-gray-600">Shop through our latest selection of Fashion</p>
      </div>

      {/* Shop Content */}
      <div className="container px-4 mx-auto py-7">
        {/* Filter & Sort */}
        <div className="flex justify-between">
          <p
            className="flex gap-3 border border-gray-400 p-2 rounded text-xl cursor-pointer"
            onClick={() => setIsFilterOpen(true)}
          >
            <span>
              <FaFilter className="text-2xl mt-1 text-gray-500" />
            </span>{" "}
            Filter
          </p>

          <FilterSidebar
            isOpen={isFilterOpen}
            onClose={() => setIsFilterOpen(false)}
            onApplyFilters={handleApplyFilters} // ✅ Updated
          />

          <SortDropdown />
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-5 py-7">
          {isLoading ? (
            <p className="col-span-full text-center py-10 text-gray-500">Loading products...</p>
          ) : error ? (
            <div className="col-span-full text-center py-10">
              <p className="text-red-600 font-medium">Error loading products</p>
              <p className="text-sm text-gray-500 mt-2">
                Please check if the backend server is running on port 5000
              </p>
              <button
                onClick={() => window.location.reload()}
                className="mt-4 px-4 py-2 bg-black text-white rounded"
              >
                Retry
              </button>
            </div>
          ) : currentProducts.length > 0 ? (
            currentProducts.map((product) => (
              <ProductHoverCard key={product._id} product={product} navigate={navigate} />
            ))
          ) : (
            <div className="col-span-full text-center py-10">
              <p className="text-gray-600">No products found</p>
              {products.length > 0 && (
                <p className="text-sm text-gray-500 mt-2">
                  Try adjusting your filters or check another page
                </p>
              )}
            </div>
          )}
        </div>

        {/* Pagination */}
        <div className="flex justify-center gap-2 mt-5">
          <button
            className="px-3 py-1 border rounded"
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          >
            <FaAngleLeft />
          </button>

          {Array.from({ length: totalPages }, (_, idx) => (
            <button
              key={idx + 1}
              className={`px-3 py-1 border rounded ${currentPage === idx + 1 ? "bg-gray-300" : ""}`}
              onClick={() => setCurrentPage(idx + 1)}
            >
              {idx + 1}
            </button>
          ))}

          <button
            className="px-3 py-1 border rounded"
            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
          >
            <FaAngleRight />
          </button>
        </div>
      </div>
    </div>
  );
};

// 🔹 Inline Product Card
const ProductHoverCard = ({ product, navigate }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="rounded-2xl p-3 relative group transition hover:shadow-lg cursor-pointer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => navigate(`/products/${product._id}`)}
    >
      <div className="relative w-full overflow-hidden rounded-xl">
        <img
          src={hovered && product.images[1] ? product.images[1] : product.images[0]}
          alt={product.name}
          className="w-full h-[300px] object-cover"
        />

        {hovered && (
          <div className="absolute inset-0 bg-black/30 flex flex-col items-center justify-center gap-3">
            <div className="flex gap-3">
              <button className="bg-white p-2 rounded-full shadow hover:bg-gray-100">
                <FaShoppingBag />
              </button>
              <button className="bg-white p-2 rounded-full shadow hover:bg-gray-100">
                <FaHeart />
              </button>
              <button className="bg-white p-2 rounded-full shadow hover:bg-gray-100">
                <FaTimes />
              </button>
              <button className="bg-white p-2 rounded-full shadow hover:bg-gray-100">
                <FaEye />
              </button>
            </div>

            <div className="flex gap-2 mt-2 text-white font-medium">
              {product.sizes?.map((size) => (
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

      <p className="py-1 font-medium">{product.name}</p>
      <p className="font-semibold">${product.price}</p>

      <div className="flex items-center gap-2 py-2">
        {product.colors?.map((colorObj, idx) => (
          <span
            key={idx}
            className="w-5 h-5 rounded-full border-2 border-gray-300 cursor-pointer"
            style={{ backgroundColor: colorObj.code || "gray" }}
            title={colorObj.name}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default ShopMain;
