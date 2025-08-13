import asyncHandler from "express-async-handler";
import Item from "../models/Item.js";

// @desc    Get all items
// @route   GET /api/items
// @access  Public
export const getItems = asyncHandler(async (req, res) => {
  const items = await Item.find({});
  res.json(items);
});

// @desc    Create item
// @route   POST /api/items
// @access  Private
export const createItem = asyncHandler(async (req, res) => {
  const { name, price } = req.body;
  const item = new Item({ name, price });
  const createdItem = await item.save();
  res.status(201).json(createdItem);
});
