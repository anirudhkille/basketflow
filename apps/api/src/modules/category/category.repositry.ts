import Category from "./category.model";
import { CreateCategoryInput } from "./category.schema";

export const create = (data: CreateCategoryInput) => {
  return Category.create(data);
};

export const findAll = () => {
  return Category.find().lean();
};
