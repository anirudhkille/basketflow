import { Request, Response } from "express";
import { asyncHandler } from "../../utils/asyncHandler";
import { createCategoryService, getCategoryService } from "./category.service";
import { sendResponse } from "../../utils/response";

export const createCategory = asyncHandler(
  async (req: Request, res: Response) => {
    const category = await createCategoryService(req.body);

    sendResponse(res, 201, "Category created successfully", category);
  },
);

export const getCategory = asyncHandler(async (req: Request, res: Response) => {
  const categorys = await getCategoryService();

  sendResponse(res, 200, "Category fetched successfully", categorys);
});
