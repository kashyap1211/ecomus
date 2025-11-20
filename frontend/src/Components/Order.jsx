import React, { useEffect, useState } from "react";
import { fetchUserOrders } from "../api/orderApi.js";
import { toast } from "react-toastify";

const Order = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  // Assuming token is stored in localStorage after login
  const token = localStorage.getItem("token");

  useEffect(() => {
    const getOrders = async () => {
      try {
        setLoading(true);
        const data = await fetchUserOrders(token);
        setOrders(data);
        setLoading(false);
      } catch (err) {
        console.error(err);
        toast.error("Failed to fetch orders");
        setLoading(false);
      }
    };

    if (token) getOrders();
  }, [token]);

  if (loading) return <p className="text-center py-10">Loading orders...</p>;

  if (!orders.length)
    return <p className="text-center py-10">No orders found!</p>;

  return (
    <div className="container mx-auto py-10 px-4">
      <h2 className="text-2xl font-semibold mb-6">My Orders</h2>

      <div className="grid gap-6">
        {orders.map((order) => (
          <div
            key={order._id}
            className="border p-5 rounded-lg shadow hover:shadow-lg transition"
          >
            <div className="flex justify-between items-center mb-3">
              <p className="font-medium">Order ID: {order._id}</p>
              <p className="text-sm text-gray-500">
                {new Date(order.createdAt).toLocaleDateString()}
              </p>
            </div>

            <div className="mb-3">
              <p className="font-semibold">Name:</p>
              <p>{order.name}</p>
            </div>

            <div className="mb-3">
              <p className="font-semibold">Address:</p>
              <p>{order.address}</p>
            </div>

            <div className="mb-3">
              <p className="font-semibold">Phone:</p>
              <p>{order.phone}</p>
            </div>

            <div className="mb-3">
              <p className="font-semibold">Payment Method:</p>
              <p>{order.paymentMethod}</p>
            </div>

            <div className="mb-3">
              <p className="font-semibold">Items:</p>
              <ul className="list-disc list-inside">
                {order.items.map((item, idx) => (
                  <li key={idx}>
                    {item.name} x {item.quantity} - ${item.price}
                  </li>
                ))}
              </ul>
            </div>

            <div className="font-bold text-lg mt-2">Total: ${order.total}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Order;
