import * as categoryRepository from "./category.repositry";
import { CreateCategoryInput } from "./category.schema";

export const createCategoryService = async (data: CreateCategoryInput) => {
  return categoryRepository.create(data);
};

export const getCategoryService = async () => {
  return categoryRepository.findAll();
};
