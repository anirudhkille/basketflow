import { AppError } from "../../utils/AppError";
import * as categoryRepository from "./category.repository";
import { CreateCategoryInput, UpdateCategoryInput } from "./category.schema";

export const createCategory = async (data: CreateCategoryInput) => {
  return categoryRepository.create(data);
};

export const getCategory = async () => {
  return categoryRepository.findAll();
};

export const getCategoryById = async (id: string) => {
  const category = await categoryRepository.findById(id);

  if (!category) {
    throw new AppError(404, "Category not found");
  }

  return category;
};

export const updateCategory = async (
  id: string,
  data: UpdateCategoryInput,
) => {
  const category = await categoryRepository.update(id, data);

  if (!category) {
    throw new AppError(404, "Category not found");
  }

  return category;
};

export const deleteCategory = async (id: string) => {
  await categoryRepository.deleteById(id);
};
