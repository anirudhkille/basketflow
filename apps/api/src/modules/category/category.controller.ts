import { Request, Response } from "express";
import { asyncHandler } from "../../utils/asyncHandler";
import * as categoryService from "./category.service";
import { sendResponse } from "../../utils/response";

export const createCategory = asyncHandler(
  async (req: Request, res: Response) => {
    const category = await categoryService.createCategory(req.body);

    sendResponse(res, 201, "Category created successfully", category);
  },
);

export const getCategory = asyncHandler(async (req: Request, res: Response) => {
  const categorys = await categoryService.getCategory();

  sendResponse(res, 200, "Category fetched successfully", categorys);
});

export const getCategoryById = asyncHandler(
  async (req: Request, res: Response) => {
    const category = await categoryService.getCategoryById(req.params.id as string);

    sendResponse(res, 200, "Category fetched successfully", category);
  },
);

export const updateCategory = asyncHandler(
  async (req: Request, res: Response) => {
    const category = await categoryService.updateCategory(req.params.id as string, req.body);

    sendResponse(res, 200, "Category updated successfully", category);
  },
);

export const deleteCategory = asyncHandler(
  async (req: Request, res: Response) => {
    await categoryService.deleteCategory(req.params.id as string);

    sendResponse(res, 200, "Category deleted successfully");
  },
);
