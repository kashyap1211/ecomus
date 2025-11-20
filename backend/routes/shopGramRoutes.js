import express from "express";
import { getShopGramProducts, createShopGramProduct } from "../controllers/shopGramController.js";

const router = express.Router();

router.get("/", getShopGramProducts);   // fetch all
router.post("/", createShopGramProduct); // add new

export default router;
