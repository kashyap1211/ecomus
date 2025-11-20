import axios from "axios";

const API = "https://ecomus-3udj.onrender.com/api" || "http://localhost:5000/api";

export const fetchBrands = async () => {
  const { data } = await axios.get(`${API}/brands`);
  return data;
};
