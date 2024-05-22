import { Request, Response } from "express";
import { createOrderService, getOrderService } from "./order.service";
import { OrderValidationSchema } from "./order.validation";

export const createOrder = async (req: Request, res: Response) => {
    try {
      const orderData = req.body;
      const validatedOrder = OrderValidationSchema.parse(orderData);
      const newOrder = await createOrderService(validatedOrder);
      res.json({
        success: true,
        message: "Order created successfully!",
        data: newOrder,
      });
    } catch (error) {
      res.json({
        success: false,
        message: (error as Error).message,
      });
    }
  };
  
export const getOrder = async (req: Request, res: Response) => {
  try {
    const userEmail = req.query?.email;
    const orders = await getOrderService(userEmail as string);
    res.status(200).send({
      success: true,
      message: "Orders fetched successfully!",
      data: orders,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: (error as Error).message,
    });
  }
};

