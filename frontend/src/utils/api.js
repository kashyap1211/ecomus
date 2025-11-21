// import axios from "axios";

// const resolvedBaseUrl =
//   (typeof import.meta !== "undefined" && import.meta.env && import.meta.env.VITE_API_URL) ||
//   (typeof process !== "undefined" && process.env && process.env.REACT_APP_API_URL) ||
//   "http://localhost:5000/api";

// const API = axios.create({
//   baseURL: resolvedBaseUrl,
// });

// API.interceptors.request.use((config) => {
//   const token = localStorage.getItem("token");
//   if (token) config.headers.Authorization = `Bearer ${token}`;
//   return config;
// });

// export default API;
import axios from "axios";

// Detect Base URL
const API_BASE =
  (typeof import.meta !== "undefined" && import.meta.env?.VITE_API_URL) ||
  (typeof process !== "undefined" && process.env?.REACT_APP_API_URL) ||
  "http://localhost:5000";

// Create axios instance with backend /api base
const API = axios.create({
  baseURL: `${API_BASE}/api`,
});

// Attach token automatically
API.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

export default API;
