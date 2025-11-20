import axios from "axios";

const API = "http://localhost:5000/api";

export const fetchBrands = async () => {
  const { data } = await axios.get(`${API}/brands`);
  return data;
};
