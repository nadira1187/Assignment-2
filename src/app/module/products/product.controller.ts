import { Request, Response } from "express";
import {
  createProductService,
  getProductService,
  getProductByIdService,
  updateProductByIdService,
  deleteProductByIdService,
} from "./product.service";
import { productValidationSchema } from "./product.validation";

export const getProductById = async (req: Request, res: Response) => {
  try {
    // getting product id from request params and fetch it by the id and send it to the user
    const id = req.params.productId;
    const result = await getProductByIdService(id);
    res.status(200).send({
      success: true,
      message: "Single Product fetched successfully",
      data: result,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: (error as Error).message });
  }
};

export const getProduct = async (req: Request, res: Response) => {
  try {
    // if searchTerm is provided, it will return products based on the search term
    const searchTerm = req.query?.searchTerm;
    const result = await getProductService(searchTerm as string);
    res.status(200).send({
      success: true,
      message: "Product fetched successfully",
      data: result,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: (error as Error).message });
  }
};

export const createProduct = async (req: Request, res: Response) => {
  try {
    // getting product from request body and validating it by Zod Schema and send it to DB
    const product = req.body;
    const value = productValidationSchema.parse(product);
    const result = await createProductService(value);
    res.send({
      success: true,
      message: "Product created successfully",
      data: result,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: (error as Error).message });
  }
};

export const updateProductById = async (req: Request, res: Response) => {
  try {
    // updating product by id and validating it by Zod Schema and update it
    const id = req.params.productId;
    const product = req.body;
    const value = productValidationSchema.parse(product);
    await updateProductByIdService(id, value);
    res.send({
      success: true,
      message: "Product updated successfully!",
      data: product,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: (error as Error).message,
    });
  }
};

export const deleteProductById = async (req: Request, res: Response) => {
  try {
    const id = req.params.productId;
    await deleteProductByIdService(id);
    res.json({
      success: true,
      message: "Product deleted successfully!",
      data: null,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: (error as Error).message,
    });
  }
};
