import { Router } from "express";
import {
  createCategory,
  getCategory,
  getCategoryById,
  updateCategory,
  deleteCategory,
} from "./category.controller";
import { validate } from "../../middlewares/validate.middleware";
import { createCategorySchema, updateCategorySchema } from "./category.schema";
import { authenticate } from "../../middlewares/auth.middleware";

const router = Router();

router.post("/", authenticate, validate(createCategorySchema), createCategory);
router.get("/", getCategory);
router.get("/:id", getCategoryById);
router.patch(
  "/:id",
  authenticate,
  validate(updateCategorySchema),
  updateCategory,
);
router.delete("/:id", authenticate, deleteCategory);

export default router;
