import Order from "../models/orderModel.js";

// Create a new order
export const createOrder = async (req, res) => {
  try {
    const { name, address, phone, paymentMethod, items, total } = req.body;

    if (!items || items.length === 0) {
      return res.status(400).json({ message: "Cart is empty" });
    }

    const order = await Order.create({
      user: req.user.id, 
      name,
      address,
      phone,
      paymentMethod,
      items,
      total,
    });

    res.status(201).json(order);
  } catch (error) {
    console.error("Create Order Error:", error);
    res.status(500).json({ message: "Server error" });
  }
};

// Get all orders of logged-in user
export const getOrders = async (req, res) => {
  try {
    const orders = await Order.find({ user: req.user.id }).sort({ createdAt: -1 });
    res.json(orders);
  } catch (error) {
    console.error("Get Orders Error:", error);
    res.status(500).json({ message: "Server error" });
  }
};

// Get order by ID
export const getOrderById = async (req, res) => {
  try {
    const order = await Order.findById(req.params.id);

    if (!order) return res.status(404).json({ message: "Order not found" });

    if (order.user.toString() !== req.user.id) {
      return res.status(403).json({ message: "Not authorized to view this order" });
    }

    res.json(order);
  } catch (error) {
    console.error("Get Order By ID Error:", error);
    res.status(500).json({ message: "Server error" });
  }
};
