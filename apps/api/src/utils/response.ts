import { Response } from "express";

export const sendResponse = (
  res: Response,
  statusCode: number = 200,
  message: string,
  data?: any,
) => {
  const json = {
    success: statusCode < 400,
    message,
    data: data,
  };
  if (!data) delete json.data;

  return res.status(statusCode).json(json);
};
