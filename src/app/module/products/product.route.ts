import express from "express";
import {
  createProduct,
  deleteProductById,
  getProduct,
  getProductById,
  updateProductById,
} from "./product.controller";

const router = express.Router();

router.get("/", getProduct);
router.get("/:productId", getProductById);
router.post("/", createProduct);
router.put("/:productId", updateProductById);
router.delete("/:productId", deleteProductById);

export const ProductRoute = router;
