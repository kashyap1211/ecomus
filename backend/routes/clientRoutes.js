import express from "express";
import { getClients, createClient } from "../controllers/clientController.js";

const router = express.Router();

// GET all clients
router.get("/", getClients);

// POST new client review
router.post("/", createClient);

export default router;
