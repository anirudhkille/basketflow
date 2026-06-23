import Category from "./category.model";
import { CreateCategoryInput, UpdateCategoryInput } from "./category.schema";

export const create = (data: CreateCategoryInput) => {
  return Category.create(data);
};

export const findAll = () => {
  return Category.find().lean();
};

export const findById = (id: string) => {
  return Category.findById(id).lean();
};

export const update = (id: string, data: UpdateCategoryInput) => {
  return Category.findByIdAndUpdate(
    id,
    { data },
    {
      new: true,
    },
  );
};

export const deleteById = (id: string) => {
  return Category.findByIdAndUpdate(id, { isActive: false }, { new: true });
};
