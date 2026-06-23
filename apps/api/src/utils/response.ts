import { Response } from "express";

export const sendResponse = (
  res: Response,
  statusCode: number = 200,
  message: string,
  data?: unknown,
) => {
  return res.status(statusCode).json({
    success: statusCode < 400,
    message,
    ...(data !== undefined && { data }),
  });
};
