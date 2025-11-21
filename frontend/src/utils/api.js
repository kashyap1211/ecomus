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

const getDefaultApiBase = () => {
  if (typeof window !== "undefined") {
    const host = window.location.hostname;
    if (host === "localhost" || host === "127.0.0.1") {
      return "http://localhost:5000";
    }
  }
  return "https://ecomus-3udj.onrender.com";
};

const API_BASE =
  (typeof import.meta !== "undefined" && import.meta.env?.VITE_API_URL) ||
  (typeof process !== "undefined" && process.env?.REACT_APP_API_URL) ||
  getDefaultApiBase();

const normalizeBaseUrl = (base) => {
  if (!base) return "http://localhost:5000/api";
  return base.endsWith("/api") ? base : `${base.replace(/\/$/, "")}/api`;
};

// Create axios instance with backend /api base
const API = axios.create({
  baseURL: normalizeBaseUrl(API_BASE),
});

// Attach token automatically
API.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

export default API;
