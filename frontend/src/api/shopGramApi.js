// import axios from "axios";

// const API = process.env.REACT_APP_API_URL + "/api" || "http://localhost:5000/api";

// // Fetch all products
// export const fetchShopGram = async () => {
//   const { data } = await axios.get(API);
//   return data;
// };
import API from "../utils/api";

export const fetchShopGram = async () => {
  const { data } = await API.get("/products");
  return data;
};
