import express from "express";
import {
  getBlogs,
  getBlogById,
  createBlog,
  updateBlog,
  deleteBlog,
} from "../controllers/blogController.js";
import authMiddleware from "../middleware/authMiddleware.js";
import adminMiddleware from "../middleware/adminMiddleware.js";

const router = express.Router();

router.get("/", getBlogs);           // Read all
router.get("/:id", getBlogById);     // Read one
router.post("/",  authMiddleware, adminMiddleware, createBlog);        // Create
router.put("/:id",  authMiddleware, adminMiddleware, updateBlog);      // Update
router.delete("/:id",  authMiddleware, adminMiddleware, deleteBlog);   // Delete

export default router;
