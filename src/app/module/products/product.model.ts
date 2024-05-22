import mongoose from "mongoose";
import { InterfaceInventory, InterfaceProduct, InterfaceVariant } from "./product.interface";

const variantsSchema = new mongoose.Schema<InterfaceVariant>({
  type: {
    type: String,
    required: true,
  },
  value: {
    type: String,
    required: true,
  },
});

const inventorySchema = new mongoose.Schema<InterfaceInventory>({
  quantity: {
    type: Number,
    required: true,
  },
  inStock: {
    type: Boolean,
    required: true,
  },
});

const productSchema = new mongoose.Schema<InterfaceProduct>({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  tags: {
    type: [String],
    required: true,
  },
  variants: {
    type: [variantsSchema],
  },
  inventory: {
    type: inventorySchema,
    required: true,
  },
});

export const ProductModel = mongoose.model("Product", productSchema);
