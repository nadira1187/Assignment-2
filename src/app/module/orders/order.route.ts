import express from "express";
import { createOrder, getOrder } from "./order.controller";

const router = express.Router();

router.get("/", getOrder);
router.post("/", createOrder);

export const OrderRoute = router;
