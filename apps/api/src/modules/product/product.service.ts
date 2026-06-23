import { AppError } from "../../utils/AppError";
import * as productRepository from "./product.repository";
import { CreateProductInput } from "./product.schema";

export const createProduct = async (data: CreateProductInput) => {
  const product = await productRepository.create(data);

  return product;
};

export const getProduct = async () => {
  const products = await productRepository.findAll();
  return products;
};

export const getProductById = async (id:string) => {
  const product = await productRepository.findById(id);
  
  if(!product) {
    throw new AppError(404,"Product doesn't exists")
  }

  return product
};

export const deleteProduct=async(id:string)=>{
  const product =await productRepository.deleteById(id);

  if(!product){
    throw new AppError(404,"Product doesn't exists")
  }
  return product
}


