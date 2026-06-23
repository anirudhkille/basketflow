import { Request,Response } from "express";
import { asyncHandler } from "../../utils/asyncHandler";
import { sendResponse } from "../../utils/response";
import { CreateProductInput } from "./product.schema";
import * as productService from "./product.service"

export const createProduct = asyncHandler(async (req:Request,res:Response) => {
 const product =await productService.createProduct(req.body)

 sendResponse(res,201,"Product created successfully",product)
});

export const getProducts = asyncHandler(async (req:Request,res:Response) => {
    const products=await produ
});

export const getProductById = asyncHandler(async (req:Request,res:Response) => {});

export const updateProduct = asyncHandler(async (req:Request,res:Response) => {});

export const deleteProduct = asyncHandler(async (req:Request,res:Response) => {});
