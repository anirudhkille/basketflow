import mongoose, { Document, Schema, model } from "mongoose";

export interface ICategory extends Document {
  name: string;
  slug: string;
  isActive: boolean;
  image: string;
}

const categorySchema = new Schema<ICategory>({
  name: {
    type: String,
    required: true,
  },
  slug: {
    type: String,
    unique: true,
  },
  isActive: {
    type: Boolean,
    default: true,
  },
  image: {
    type: String,
    required: true,
  },
});

const Category = model<ICategory>("Category", categorySchema);
export default Category;
