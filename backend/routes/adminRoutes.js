import express from "express";
import { verifyAdmin } from "../middleware/verifyAdmin.js";
import { getAllUsers, getStats, updateUserRole } from "../controllers/adminController.js";

const router = express.Router();

// Admin: fetch all users
router.get("/users", verifyAdmin, getAllUsers);

// Admin: stats
router.get("/stats", verifyAdmin, getStats);

// Admin: update user role
router.put("/users/:id/role", verifyAdmin, updateUserRole);

export default router;
