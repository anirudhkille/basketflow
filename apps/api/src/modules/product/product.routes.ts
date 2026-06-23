import Router from "express";
import {
  createProduct,
  getProducts,
  getProductById,
  updateProduct,
  deleteProduct,
} from "./product.controller";
import { authenticate } from "../../middlewares/auth.middleware";
import { validate } from "../../middlewares/validate.middleware";
import { createProductSchema, updateProductSchema } from "./product.schema";

const router = Router();

router.post("/", authenticate, validate(createProductSchema), createProduct);
router.get("/", getProducts);
router.get("/:id", getProductById);
router.put("/:id", authenticate, validate(updateProductSchema), updateProduct);
router.delete("/:id", authenticate, deleteProduct);

export default router;
