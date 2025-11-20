import ClientReview from "../models/ClientReview.js";

// ✅ Get all client reviews
export const getClients = async (req, res) => {
  try {
    const clients = await ClientReview.find();
    res.json(clients);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// ✅ Create new client review
export const createClient = async (req, res) => {
  try {
    const newClient = new ClientReview(req.body);
    const savedClient = await newClient.save();
    res.status(201).json(savedClient);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
