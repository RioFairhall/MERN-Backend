import express from "express";
import { getItems, createItem } from "../controllers/itemController.js";
import { protect } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.get("/", getItems);
router.post("/", protect, createItem);

export default router;
