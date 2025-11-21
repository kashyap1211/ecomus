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

const getEnvApiBase = () => {
  if (typeof import.meta !== "undefined" && import.meta.env?.VITE_API_URL) {
    return import.meta.env.VITE_API_URL;
  }

  if (typeof process !== "undefined" && process.env?.REACT_APP_API_URL) {
    return process.env.REACT_APP_API_URL;
  }

  return undefined;
};

const getFallbackApiBase = () => {
  if (typeof window !== "undefined") {
    const host = window.location.hostname;
    if (host === "localhost" || host === "127.0.0.1") {
      return "http://localhost:5000";
    }
  }

  return "https://ecomus-3udj.onrender.com";
};

const normalizeApiBase = (base) => {
  if (!base) return "http://localhost:5000/api";
  const sanitized = base.replace(/\/$/, "");
  return sanitized.endsWith("/api") ? sanitized : `${sanitized}/api`;
};

const API = axios.create({
  baseURL: normalizeApiBase(getEnvApiBase() || getFallbackApiBase()),
});

API.interceptors.request.use((config) => {
  const token = typeof window !== "undefined" ? localStorage.getItem("token") : null;
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default API;
