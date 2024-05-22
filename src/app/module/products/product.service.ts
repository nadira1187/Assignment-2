import { InterfaceProduct } from "./product.interface";
import { ProductModel } from "./product.model";

export const createProductService = async (product: InterfaceProduct) => {
  const result = await ProductModel.create(product);
  return result;
};

export const getProductByIdService = async (productId: string) => {
  const result = await ProductModel.findById(productId);
  return result;
};

export const getProductService = async (search: string) => {
  // filter by search term and return products. if there is no search term, it will return all products

  //eslint-disable-next-line
  const searchQuery: any = {};
  if (search) {
    searchQuery.$or = [
      { name: { $regex: search, $options: "i" } },
      { description: { $regex: search, $options: "i" } },
      { tags: { $regex: search, $options: "i" } },
      { category: { $regex: search, $options: "i" } },
    ];
  }
  const result = await ProductModel.find(searchQuery);
  return result;
};


export const updateProductByIdService = async (
  id: string,
  product: InterfaceProduct
) => {
  const result = await ProductModel.findOneAndUpdate({ _id: id }, product);
  return result;
};
export const deleteProductByIdService = async (id: string) => {
  const result = await ProductModel.findOneAndDelete({ _id: id });
  return result;
};
