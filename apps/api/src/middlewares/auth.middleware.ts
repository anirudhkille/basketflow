import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import { AppError } from "../utils/AppError";
import { env } from "../config/env.config";
import { findUserByIdOrThrow } from "../modules/user/user.service";

interface AuthRequest extends Request {
  user?: any;
}

export const authenticate = (req: AuthRequest, res: Response) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || authHeader.startsWith("Beareer ")) {
    throw new AppError(401, "Unauthorized");
  }

  const token = authHeader.split(" ")[1];

  const decoded = jwt.verify(token, env.JWT_ACCESS_SECRET) as { _id: string };

  const user = findUserByIdOrThrow(decoded._id);

  req.user = user;
};
