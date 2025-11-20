import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { fetchProducts } from "../api/productApi";
import FilterSidebar from "./FilterSidebar";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  // 🔹 Convert searchParams → filters
 const getFiltersFromParams = () => {
  const filters = {};
  if (searchParams.get("categoryone"))
    filters.categories = searchParams.get("categoryone").split(",");
  if (searchParams.get("brand"))
    filters.brands = searchParams.get("brand").split(",");
  if (searchParams.get("color"))
    filters.colors = searchParams.get("color").split(",");
  if (searchParams.get("size"))
    filters.sizes = searchParams.get("size").split(",");
  if (searchParams.get("availability"))
    filters.availability = searchParams.get("availability");
  if (searchParams.get("minPrice") && searchParams.get("maxPrice"))
    filters.priceRange = {
      min: Number(searchParams.get("minPrice")),
      max: Number(searchParams.get("maxPrice")),
    };

  return filters;
};

  // 🔹 Load products when URL changes
useEffect(() => {
  const filters = getFiltersFromParams();
  fetchProducts(filters).then(setProducts);
}, [searchParams]);

  // 🔹 Update filters + URL when user applies filters
 const handleApplyFilters = (filters) => {
  const params = {};

  if (filters.categories?.length)
    params.categoryone = filters.categories.join(",");
  if (filters.brands?.length)
    params.brand = filters.brands.join(",");
  if (filters.colors?.length)
    params.color = filters.colors.join(",");
  if (filters.sizes?.length)
    params.size = filters.sizes.join(",");
  if (filters.availability)
    params.availability = filters.availability;
  if (filters.priceRange?.min !== undefined && filters.priceRange?.max !== undefined) {
    params.minPrice = filters.priceRange.min;
    params.maxPrice = filters.priceRange.max;
  }

  setSearchParams(params); // ✅ This updates the URL
};
  return (
    <div className="flex">
      <FilterSidebar
        isOpen={true}
        onClose={() => {}}
        onApplyFilters={handleApplyFilters}
      />
      <div className="grid grid-cols-3 gap-4 p-4">
        {products.map((p) => (
          <div key={p._id} className="border p-3 rounded">
            <h3>{p.name}</h3>
            <p>${p.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
