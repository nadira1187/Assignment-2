import mongoose from "mongoose";
import { OrderInterface } from "./order.interface";

const OrderSchema = new mongoose.Schema<OrderInterface>({
  email: { type: "string", required: true },
  productId: { type: "string", required: true },
  price: { type: "number", required: true },
  quantity: { type: "number", required: true },
});

export const OrderModel = mongoose.model("Order", OrderSchema);
