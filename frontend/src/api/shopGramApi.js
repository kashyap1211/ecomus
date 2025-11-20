import axios from "axios";

const API = "http://localhost:5000/api/shopgram";

// Fetch all products
export const fetchShopGram = async () => {
  const { data } = await axios.get(API);
  return data;
};
