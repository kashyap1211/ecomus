import express from "express";
import { saveContact, getContacts } from "../controllers/contactController.js";

const router = express.Router();

router.post("/", saveContact);  // Save form
router.get("/", getContacts);   // Get all contacts

export default router;

