// import axios from "axios";

// const API_URL = "http://localhost:5000/api/orders";

// // 🔹 Get orders for a user
// export const fetchUserOrders = async (token) => {
//   const { data } = await axios.get(API_URL, {
//     headers: {
//       Authorization: `Bearer ${token}`, // send JWT token
//     },
//   });
//   return data;
// // };
// import axios from "axios";

// const token = localStorage.getItem("token"); // store JWT after login

// // Place order
// const placeOrder = async (orderData) => {
//   try {
//     const res = await axios.post("http://localhost:5000/api/orders", orderData, {
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//     });
//     console.log("Order placed:", res.data);
//   } catch (error) {
//     console.error("Error placing order:", error.response?.data || error.message);
//   }
// };

// // Get orders
// const fetchOrders = async () => {
//   try {
//     const res = await axios.get("http://localhost:5000/api/orders", {
//       headers: { Authorization: `Bearer ${token}` },
//     });
//     console.log("Orders:", res.data);
//   } catch (error) {
//     console.error("Error fetching orders:", error.response?.data || error.message);
//   }
// };
// src/api/orderApi.js
import axios from "axios";

// Place order
export const placeOrder = async (orderData, token) => {
  try {
    const res = await axios.post("http://localhost:5000/api/orders", orderData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return res.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};

// Get user orders
export const fetchUserOrders = async (token) => {
  try {
    const res = await axios.get("http://localhost:5000/api/orders", {
      headers: { Authorization: `Bearer ${token}` },
    });
    return res.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};
