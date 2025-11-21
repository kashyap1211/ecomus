// // // import axios from "axios";

// // // const API_URL = "http://localhost:5000/api/products";

// // // export const fetchProducts = async (filters) => {
// // //   const { data } = await axios.get(API_URL, { params: filters , categoryone, categorytwo });
// // //   return data;
// // // };

// // // export const fetchProductById = async (id) => {
// // //   const { data } = await axios.get(`${API_URL}/${id}`);
// // //   return data;
// // // };
// // import axios from "axios";

// // const API_URL = "http://localhost:5000/api/products";

// // export const fetchProducts = async (filters = {}) => {
// //   const { data } = await axios.get(API_URL, {
// //     params: filters, // all query params go here
// //   });
// //   return data;
// // };

// // export const fetchProductById = async (id) => {
// //   const { data } = await axios.get(`${API_URL}/${id}`);
// //   return data;
// // };

// import API from "../utils/api";

// export const fetchProducts = async (filters = {}) => {
//   try {
//     const params = {};

//     // Categories → backend expects categoryone
//     if (filters.categories?.length) {
//       params.categoryone = filters.categories.join(",");
//     }

//     // Brands
//     if (filters.brands?.length) {
//       params.brand = filters.brands.join(",");
//     }

//     // Colors
//     if (filters.colors?.length) {
//       params.color = filters.colors.join(",");
//     }

//     // Sizes
//     if (filters.sizes?.length) {
//       params.size = filters.sizes.join(",");
//     }

//     // Availability
//     if (filters.availability) {
//       params.availability = filters.availability;
//     }

//     // Price Range
//     if (filters.priceRange?.min !== undefined && filters.priceRange?.max !== undefined) {
//       params.minPrice = filters.priceRange.min;
//       params.maxPrice = filters.priceRange.max;
//     }

//     console.log("Fetching products with params:", params);
//     console.log("API base URL:", API.defaults?.baseURL || "Not set");
    
//     const response = await API.get("/products", { params });
//     console.log("Products API response:", response);
//     console.log("Products data:", response.data);
    
//     const products = Array.isArray(response.data) ? response.data : [];
//     console.log(`Fetched ${products.length} products`);
    
//     return products;
//   } catch (error) {
//     console.error("❌ Error fetching products:", error);
//     console.error("Error details:", {
//       message: error.message,
//       response: error.response?.data,
//       status: error.response?.status,
//       config: {
//         url: error.config?.url,
//         baseURL: error.config?.baseURL,
//       }
//     });
    
//     // Show user-friendly error
//     if (error.code === 'ERR_NETWORK' || error.message.includes('Network Error')) {
//       console.error("⚠️ Cannot connect to backend. Is the server running on port 5000?");
//     }
    
//     return [];
//   }
// };

// export const fetchProductById = async (id) => {
//   try {
//     const { data } = await API.get(`/products/${id}`);
//     return data;
//   } catch (error) {
//     console.error("Error fetching product:", error);
//     throw error;
//   }
// };
 import API from "../utils/api";

export const fetchProducts = async (filters = {}) => {
  try {
    const params = {};

    if (filters.categories?.length) {
      params.categoryone = filters.categories.join(",");
    }

    if (filters.brands?.length) {
      params.brand = filters.brands.join(",");
    }

    if (filters.colors?.length) {
      params.color = filters.colors.join(",");
    }

    if (filters.sizes?.length) {
      params.size = filters.sizes.join(",");
    }

    if (filters.availability) {
      params.availability = filters.availability;
    }

    if (filters.priceRange?.min !== undefined && filters.priceRange?.max !== undefined) {
      params.minPrice = filters.priceRange.min;
      params.maxPrice = filters.priceRange.max;
    }

    const res = await API.get("/products", { params });
    return Array.isArray(res.data) ? res.data : [];
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
};

export const fetchProductById = async (id) => {
  const { data } = await API.get(`/products/${id}`);
  return data;
};
