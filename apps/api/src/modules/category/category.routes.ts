import { Router } from "express";
import { createCategory, getCategory } from "./category.controller";
import { validate } from "../../middlewares/validate.middleware";
import { createCategorySchema } from "./category.schema";

const router = Router();

router.post("/", validate(createCategorySchema), createCategory);
router.get("/", getCategory);

export default router;
