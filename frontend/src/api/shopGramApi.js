import axios from "axios";

const API = process.env.REACT_APP_API_URL|| "http://localhost:5000/api";

// Fetch all products
export const fetchShopGram = async () => {
  const { data } = await axios.get(API);
  return data;
};
