import { ObjectId, Types, Document, Schema, model } from "mongoose";

export interface IVariants extends Document {
  name: string;
  price: number;
  salePrice: number;
  stock: number;
}

export interface IProduct extends Document {
  images: string[];
  name: string;
  slug: string;
  category: ObjectId;
  variants: IVariants[];
  isActive: boolean;
}

const variantsSchema = new Schema<IVariants>({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
  },
  salePrice: {
    type: Number,
  },
  stock: {
    type: Number,
  },
});

const productSchema = new Schema<IProduct>({
  images: [String],
  name: {
    type: String,
    required: true,
  },
  slug: {
    type: String,
    unique: true,
  },
  category: {
    type: Types.ObjectId,
    ref: "Category",
  },
  variants: [variantsSchema],
  isActive: {
    type: Boolean,
    default: true,
  },
});

const Product = model<IProduct>("Product", productSchema);
export default Product;
