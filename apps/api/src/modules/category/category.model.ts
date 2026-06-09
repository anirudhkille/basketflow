import mongoose, { Document } from "mongoose";

export interface ICategory extends Document {
  name: string;
  slug: string;
  isActive: boolean;
  image: string;
}

const categorySchema = new mongoose.Schema<ICategory>({
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

const Category = mongoose.model<ICategory>("Category", categorySchema);
export default Category;
