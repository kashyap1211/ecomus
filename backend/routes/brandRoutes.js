import express from "express";
import { getBrands, createBrand } from "../controllers/brandController.js";

const router = express.Router();

// GET all brands
router.get("/", getBrands);

// POST new brand
router.post("/", createBrand);

export default router;
