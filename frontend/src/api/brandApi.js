import axios from "axios";

const API = process.env.REACT_APP_API_URL || "http://localhost:5000/api";

export const fetchBrands = async () => {
  const { data } = await axios.get(`${API}/brands`);
  return data;
};
