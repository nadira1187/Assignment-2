import { ProductModel } from "../products/product.model";
import { OrderInterface } from "./order.interface";
import { OrderModel } from "./order.model";

export const createOrderService = async (orderDetails: OrderInterface) => {
    const productId = orderDetails.productId;
    const product = await ProductModel.findById(productId);
    if (!product) {
      throw new Error("Product not found!");
    } else {
      const newQuantity = product?.inventory?.quantity - orderDetails?.quantity;
  
      if (
        product.inventory.inStock &&
        newQuantity >= 0 &&
        newQuantity <= product?.inventory?.quantity
      ) {
        const newOrder = await OrderModel.create(orderDetails);
  
        await ProductModel.updateOne(
          { _id: productId },
          {
            "inventory.quantity": newQuantity,
            "inventory.inStock": newQuantity > 0,
          }
        );
        return newOrder;
      } else {
        throw new Error("Insufficient quantity available in inventory");
      }
    }
  };
export const getOrderService = async (userEmail: string) => {
  // retrieve order by email. if email is not provided, it will return all orders
  const emailFilter = userEmail ? { email: userEmail } : {};

  const orders = await OrderModel.find(emailFilter);
  if (orders.length > 0) {
    return orders;
  }
  throw new Error("Order not found");
};


