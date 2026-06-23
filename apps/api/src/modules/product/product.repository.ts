import Product from "./product.model";
import { CreateProductInput, UpdateProductInput } from "./product.schema.js";

export const create = (data: CreateProductInput) => {
  return Product.create(data);
};

export const findAll=()=>{
    return Product.find().lean()
}

export const findById = (id: string) => {
  return Product.findById(id).lean();
};

export const update = (id: string, data: UpdateProductInput) => {
  return Product.findByIdAndUpdate(
    id,
    { data },
    {
      new: true,
    },
  );
};

export const deleteById=(id:string)=>{
  return Product.findByIdAndUpdate(id,{isActive:false},{new:true})
}