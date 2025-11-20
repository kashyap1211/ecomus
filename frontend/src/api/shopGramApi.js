import axios from "axios";

const API = "https://ecomus-3udj.onrender.com/api" || "http://localhost:5000/api";

// Fetch all products
export const fetchShopGram = async () => {
  const { data } = await axios.get(API);
  return data;
};
